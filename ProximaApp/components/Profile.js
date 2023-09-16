import { View, Text ,TouchableOpacity,Image} from 'react-native';
import React from 'react';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import Password from 'react-native-vector-icons/EvilIcons'
import Notification from 'react-native-vector-icons/Ionicons';
import Logout from 'react-native-vector-icons/AntDesign';
import Home from 'react-native-vector-icons/AntDesign';
import Documents from 'react-native-vector-icons/Entypo';
import Account from "react-native-vector-icons/MaterialCommunityIcons";

import profile from "../assets/profile.jpg";

export default function Profile({navigation}) {

    return (
        <SafeAreaView className="">
            <View className="bg-[#993BD9] h-[30%]">
                <Text className="text-center text-white text-xl top-7 opacity-70">Profile</Text>

            </View>
            <Card className="h-40 top-[-110] mx-7 flex flex-col items-center justify-center text-center">
                <Image
                className="w-[80px] h-[80px] rounded-full"
                source={profile}></Image>
                <Text className="font-bold text-xl">John Doe</Text>
                <Text className="text-center text-gray-500 text-[12px]">@johdoe</Text>

            </Card>

            <View className="top-[-100] mx-7 ">
                <Card className="h-14 py-1">
                    <View className="flex flex-row items-center gap-x-14 p-2">
                        <Notification name='notifications-sharp'
                            size={30}
                            color='gray' />
                        <Text className="text-xl">Notifications</Text>
                     
                    </View>

                </Card>
            </View>
            <View className="top-[-80] mx-7 ">
                <Card className="h-14 p-3">
                <View className="flex flex-row items-center gap-x-14">
                        <Password name='lock'
                            size={30}
                            color='gray' />
                        <Text className="text-xl">Change Password</Text>
                        
                    </View>
                </Card>
            </View>
            <View className="top-[-80] mx-7 my-5">
                <Card className="h-14 p-3">
                <View className="flex flex-row items-center gap-x-14">
                        <Icon name='settings'
                            size={30}
                            color='gray' />
                        <Text className="text-xl">Settings</Text>
                       
                    </View>
                </Card>


            </View>
            <View className="top-[-80] mx-7 my-5">
                <Card className="h-14 p-3">
                <View className="flex flex-row items-center gap-x-14">
                        <Logout name='logout'
                            size={30}
                            color='gray' />
                        <Text className="text-xl font-bold">Sign Out</Text>
                       
                    </View>
                </Card>

                
            </View>
            <View className="top-[-70] mx-4 my-5">
                <Card className="h-14 p-3">
                <View className="flex flex-row justify-between">
                    <TouchableOpacity
                    onPress={()=>navigation.navigate("Landing")}>
                    <Home name='home'
                            size={30}
                            color='gray' />

                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>navigation.navigate("Documents")}>
                    <Documents name='documents'
                            size={30}
                            color='gray' />

                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>navigation.navigate("Profile")}>
                    <Account name='account'
                            size={30}
                            color='gray' />

                    </TouchableOpacity>
                       
                            
                        
                       
                    </View>
                </Card>

                
            </View>



        </SafeAreaView>
    )
}