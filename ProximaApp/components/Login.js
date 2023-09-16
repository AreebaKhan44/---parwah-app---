import React, { useState } from 'react';
import { View ,Text,TextInput,TouchableOpacity,Image, Alert} from 'react-native'; 
import logo from "../assets/logo.png"
import { signInWithEmailAndPassword ,sendPasswordResetEmail} from 'firebase/auth';
import { authentication } from '../firebase/firebase-config';


export default function Login({navigation}) {
    const Forgetpassword =()=>{
        if (email!=null){
            sendPasswordResetEmail(authentication, email)
  .then(() => {
    // Password reset email sent!
    // ..
    alert("Email sent Check your spam")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

        }
        else{
            alert("Enter a valid Email")
        }
    }
    const HandleSignIn =()=>{
        signInWithEmailAndPassword(authentication,email,password).
        then((user)=>{
            if(user){
                navigation.navigate("Landing")
            }
            
        }).catch((err)=>{
            console.log(err)
            if (err){
                navigation.navigate("Home")
            }
        })
    }
    const [email,setEmail]=useState(null)
    const [password,setPassword]=useState('')

  return (
        <View className="flex-1 items-center justify-center bg-white">
        <Image source={logo}  className=""/>
    <View className=" w-full "> 
        
    <View className="">
        <Text className="text-center font-semibold text-3xl mb">Log In Now</Text>
        <Text className="mb-8 text-center">Please Login to continue using our app</Text>
    </View>
    <View className="mx-6">
         <TextInput
        className="border border-gray-400 rounded-lg p-4  mb-4"
        placeholder='Email'
        value={email}
        onChangeText={text=>setEmail(text)}
        placeholderTextColor="gray"/>
         <TextInput
        className="border border-gray-400 rounded-lg p-4  "
        value={password}
        onChangeText={text=>setPassword(text)}
        placeholder='Password'
        secureTextEntry={true}
        placeholderTextColor="gray"
        />
        <View>
            <TouchableOpacity
            onPress={()=>Forgetpassword()}>
        <Text className="mt-2 left-52" >Forgot Password?</Text>

            </TouchableOpacity>

        </View>
            
            </View>
        <View className="flex-col justify-center gap-x-5 mt-5 gap-y-5 m-9">
            
            <TouchableOpacity className="bg-[#993BD9] p-5  rounded-lg"
            onPress={()=>HandleSignIn()}>
                <Text className="text-white text-center font-semibold">Log In</Text>
            </TouchableOpacity>
            <View className="flex-row gap-x-1 items-center justify-center">
            <Text className="">Don't have an account?
                
            </Text>
            <TouchableOpacity
            onPress={()=>navigation.navigate("Home")}>
                    <Text className="font-bold">Sign Up</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    </View>
    </View>
  );
}
