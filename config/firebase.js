import Firebase from 'firebase';
 let config = {
    apiKey: "AIzaSyCzn5CyluQQ8Yzx5iRS5m_S3AiccIYgLOA",
    authDomain: "themonsports.firebaseapp.com",
    databaseURL: "https://themonsports.firebaseio.com",
    projectId: "themonsports",
    storageBucket: "themonsports.appspot.com",
    messagingSenderId: "706458307206"
  };
let app = Firebase.initializeApp(config);
export const db = app.database();