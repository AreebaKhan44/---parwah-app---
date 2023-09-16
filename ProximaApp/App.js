import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View,Image } from 'react-native';
import Login from './components/Login';
import Signup from './components/Signup';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import Landing from './components/Landing';
import Profile from './components/Profile';
import Records from './components/Records';
import Consultancy from './components/Consultancy';
import SplashScreen from './components/SplashScreen';
import PeriodTracker from './components/PeriodTracker';
export default function App() {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
       <stack.Navigator initialRouteName="Splash"
        screenOptions={{
          headerShown: false
        }}>
        <stack.Screen name="Home" component={Signup} />
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name='Landing' component={Landing}/>
        <stack.Screen name='Profile' component={Profile}/>
        <stack.Screen name='Documents' component={Records}/>
        <stack.Screen name='Consultancy' component={Consultancy}/>
        <stack.Screen name='Splash' component={SplashScreen}/>
        <stack.Screen name='Calendar' component={PeriodTracker}/>
    
      </stack.Navigator>
    </NavigationContainer>
  );
}


