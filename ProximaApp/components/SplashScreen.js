import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import splash from '../assets/w.jpeg'
export default function SplashScreen({navigation}) {
    //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);
    useEffect(() => {
        setAnimating(false)

        setTimeout(() => {
            navigation.replace("Home")
            
        }, 5000);
    }, [])
    
  return (
    <View>
      <Image
      className="w-full h-full"
      source={splash}>

      </Image>
    </View>
  )
}