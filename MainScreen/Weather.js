import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const WeatherGroup = {
  0: {
    icon: 'weather-sunny'
  },
  2: {
    icon: 'weather-lightning'
  },
  3: {
    icon: 'weather-rainy'
  },
  5: {
    icon: 'weather-pouring'
  },
  6: {
    icon: 'weather-snowy'
  },
  7: {
    icon: 'weather-fog'
  },
  8: {
    icon: 'weather-cloudy'
  }
}
const Weather = ({ data }) => {
  const id = data.weather[0].id;
  const weather = id === 800 ? WeatherGroup[0] : WeatherGroup[parseInt(id / 100)];
  return (
    <View style={{alignItems:'center'}}>    
      <Icon color='#ffffff' size={44} name={weather.icon} />
      <Text style={{fontFamily:'KBFGDisplay-Medium',fontSize:11, color:'#ffffff',fontWeight:'bold'}}>{Math.ceil(data.main.temp - 273.15)}℃</Text>
    </View> 
  );
}
export default Weather;