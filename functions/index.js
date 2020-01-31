const functions = require('firebase-functions');
const admin = require('firebase-admin')

admin.initializeApp(functions.config().firebase);

exports.sendPushNotification = functions.firestore
  .document("channels/{channelsId}/threads/{threadsId}")
  .onCreate(event => {
    console.log(event._fieldsProto)
    //const name = data.recipientFirstName
    // gets standard JavaScript object from the new write
    // const writeData = event.data.data();
    // // access data necessary for push notification 
    // const sender = writeData.uid;
    // const senderName = writeData.name;
    const tokens = event._fieldsProto.recipient_token.stringValue;
    // the payload is what will be delivered to the device(s)
    let payload = {
      notification: {
      title: event._fieldsProto.name.stringValue,
      body: event._fieldsProto.senderFirstName.stringValue + ' : ' + event._fieldsProto.content.stringValue,
      sound:"mysound"
    //   badge:'',
     }
    }
    const options = {
        priority: 'high',
        timeToLive: 60 * 60 * 24,
      };
    console.log(payload)
    // either store the recepient tokens in the document write
    //const tokens = writeData.tokens;  
    
    // or collect them by accessing your database
    var pushToken = "";
    // functions.firestore().collection('users').doc(recipient).get().then(doc => {
    //     console.log(doc)
    // })
    //push_tokens = Object.keys(tokens)
    return admin.messaging().sendToDevice(tokens,payload,options).then(response => {
        console.log(response)
    }).catch(function(error) {
        console.log("Error sending message:", error);
    });
    
    // return functions
    //   .firestore
    //   .document('users')
    //   .get()
    //   .then(doc => {
    //      //pushToken = doc.data().token;
    //      console.log(doc)
    //      // sendToDevice can also accept an array of push tokens
    //      });
});
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
