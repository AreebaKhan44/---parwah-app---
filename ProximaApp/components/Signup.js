import {React} from 'react';
import { View ,Text,TextInput,TouchableOpacity,Image} from 'react-native'; 
import logo from "../assets/logo.png";
import { useState } from 'react';
import { authentication } from '../firebase/firebase-config';
import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth';

export default function Login({navigation}) {
    const HandleSignUp =()=>{
        createUserWithEmailAndPassword(authentication,email,password)
        .then((res)=>{console.log(res)})
        .catch((err)=>console.log(err))
    
        setEmail('');
        setPassword('');
      }
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

  return (
        <View className="flex-1 items-center justify-center bg-white">
        <Image source={logo}  className=""/>
    <View className=" w-full "> 
        
    <View className="">
        <Text className="text-center font-semibold text-3xl mb">Sign Up Now</Text>
        <Text className="mb-8 text-center">Please fill details to create an account</Text>
    </View>
    <View className="mx-6">
        <TextInput
        
        className="border border-gray-400 rounded-lg p-4 mb-4 "
        placeholder='Full Name'
        placeholderTextColor="gray"/>

         <TextInput
         value={email}
         onChangeText={(text)=>setEmail(text)}
        
        className="border border-gray-400 rounded-lg p-4  mb-4"
        placeholder='Email'
        placeholderTextColor="gray"/>
         <TextInput
          value={password}
          onChangeText={(text)=>setPassword(text)}
        className="border border-gray-400 rounded-lg p-4  "
        placeholder='Password'
        secureTextEntry={true}
        placeholderTextColor="gray"
        />
        <Text className="text-gray-400 text-[10px] mt-2">Password must be alteast 8 characters</Text>
            
            </View>
        <View className="flex-col justify-center gap-x-5 mt-5 gap-y-5 m-9">
            
            <TouchableOpacity className="bg-[#993BD9] p-5  rounded-lg"
            onPress={()=>HandleSignUp()}>
                <Text className="text-white text-center font-semibold">Sign Up</Text>
            </TouchableOpacity>
            <View className="flex-row gap-x-1 items-center justify-center">
            <Text className="">Already have an account?
                
            </Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                    <Text className="font-bold">Log In</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    </View>
    </View>
  );
}
