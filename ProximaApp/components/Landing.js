import React from 'react';
import { View, Text, Image ,SafeAreaView} from 'react-native';
import profile from "../assets/profile.jpg";
import Logo from "../assets/logo.png";
import { StatusBar } from 'expo-status-bar';
import { Card } from 'react-native-paper';
import PagerView from 'react-native-pager-view';
import { TouchableOpacity } from 'react-native';
import Home from 'react-native-vector-icons/AntDesign';
import Documents from 'react-native-vector-icons/Entypo';
import records from '../assets/digitalrecords.png';
import tracker from '../assets/periodtracker.png';
import store from '../assets/store.png';
import consult from '../assets/onlineconsultation.png';
import w from '../assets/w.png'


import Account from "react-native-vector-icons/MaterialCommunityIcons";
export default function Landing({navigation}) {
  const images = [
    require('../assets/logo.png'),
    require('../assets/logo.png'),
    require('../assets/logo.png')

  ]
  return (
    
         <View className="flex-1  justify-center items-center">
      <View className="bg-[#993BD9] h-[80px]  w-full flex flex-row  justify-center py-8">
      <Image
        className="h-[40px] w-[80px] left-5  "
        source={w}/>
        <TouchableOpacity
        onPress={()=>navigation.navigate("Profile")}>
        <Image
        className="h-[40px] w-[40px] rounded-2xl left-24 "
        source={profile}/>
        </TouchableOpacity>
        
      </View>

      <PagerView className="h-[120px] w-80 border border-black m-5 rounded-3xl"
      initialPage={0}>
        <View key="1" className="" >
          <Card className="">
          <Image source={images[0]} />
          </Card>
        
        </View>
        <View key="2">
        <Card>
          <Image source={images[1]}/>
          </Card>
        </View>
        <View key="3">
        <Card>
          <Image source={images[2]}/>
          </Card>
        </View>


      </PagerView>

      <View className='m-7 flex flex-col gap-4'>
        <View className="flex flex-row  gap-x-4 ">
          <View className="flex flex-col gap-y-3">
          <Card className=" h-[150px] w-[150px] "
          >
          
            <Image
            className="w-[150px] h-[155px]" 
            source={
              records
            }></Image>         
          </Card>

          <Text className="text-center">Digital Records</Text>
          </View>


          <View className="flex flex-col gap-y-3">
          <Card className="h-[150px] w-[150px]"
          onPress={()=>navigation.navigate("Calendar")}>
          <Image
            className="w-[150px] h-[155px]" 
            source={
              tracker
            }></Image>
          </Card>
          <Text className="text-center">Period Prediction Calendar</Text>
          </View>
          
          
        </View>
        <View className="flex flex-row  gap-x-4 ">
          <View className="flex flex-col gap-y-3">
          <Card className=" h-[150px] w-[150px]"
          onPress={()=>navigation.navigate("Consultancy")}>
          <Image
            className="w-[150px] h-[155px]" 
            source={
              consult
            }></Image>
          </Card>
          <Text className="text-center">Online Consultancy</Text>
          </View>


          <View className="flex flex-col gap-y-3">
          <Card className=" h-[150px] w-[150px]">
          <Image
            className="w-[150px] h-[155px]" 
            source={
              store
            }></Image>
          </Card>
          <Text className="text-center">Breast Cancer Prediction</Text>
          </View>
          
          
        </View>

      </View>
      <StatusBar
      backgroundColor='#993BD9'/>
        <View className="mx-4 w-full top-[-10]">
                <Card className="mx-4 h-14 p-3">
                <View className="flex flex-row justify-between items-center">
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
    </View>
   
 
  )
}











// import React from 'react';
// import { View, Text, Image, StatusBar } from 'react-native';
// import { Card } from 'react-native-paper';
// import PagerView from 'react-native-pager-view';
// import { TouchableOpacity } from 'react-native';
// import { AntDesign, Entypo, MaterialCommunityIcons } from 'react-native-vector-icons';
// import profile from "../assets/profile.jpg";
// import logo from "../assets/logo.png";
// import digitalRecords from '../assets/digitalrecords.png';
// import periodTracker from '../assets/periodtracker.png';
// import store from '../assets/store.png';
// import onlineConsultation from '../assets/onlineconsultation.png';
// import w from '../assets/w.png';

// export default function Landing({ navigation }) {
//   const images = [
//     require('../assets/logo.png'),
//     require('../assets/logo.png'),
//     require('../assets/logo.png')
//   ];

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <View style={{ backgroundColor: '#993BD9', height: 80, width: '100%', flexDirection: 'row', justifyContent: 'center', paddingTop: 8 }}>
//         <Image style={{ height: 40, width: 80, left: 5 }} source={w} />
//         <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
//           <Image style={{ height: 40, width: 40, borderRadius: 20, left: 24 }} source={profile} />
//         </TouchableOpacity>
//       </View>

//       <PagerView style={{ height: 120, width: 80, borderWidth: 1, borderColor: 'black', margin: 5, borderRadius: 30 }} initialPage={0}>
//         <View key="1">
//           <Card>
//             <Image source={images[0]} />
//           </Card>
//         </View>
//         <View key="2">
//           <Card>
//             <Image source={images[1]} />
//           </Card>
//         </View>
//         <View key="3">
//           <Card>
//             <Image source={images[2]} />
//           </Card>
//         </View>
//       </PagerView>

//       <View style={{ margin: 7, flexDirection: 'column', gap: 4 }}>
//         <View style={{ flexDirection: 'row', gap: 4 }}>
//           <View style={{ flexDirection: 'column', gap: 3 }}>
//             <TouchableOpacity onPress={() => navigation.navigate("Records")}>
//               <Card style={{ height: 150, width: 150 }}>
//                 <Image style={{ width: 150, height: 155 }} source={digitalRecords} />
//               </Card>
//             </TouchableOpacity>
//             <Text style={{ textAlign: 'center' }}>Digital Records</Text>
//           </View>

//           <View style={{ flexDirection: 'column', gap: 3 }}>
//             <TouchableOpacity onPress={() => navigation.navigate("Calendar")}>
//               <Card style={{ height: 150, width: 150 }}>
//                 <Image style={{ width: 150, height: 155 }} source={periodTracker} />
//               </Card>
//             </TouchableOpacity>
//             <Text style={{ textAlign: 'center' }}>Period Prediction Calendar</Text>
//           </View>
//         </View>

//         <View style={{ flexDirection: 'row', gap: 4 }}>
//           <View style={{ flexDirection: 'column', gap: 3 }}>
//             <TouchableOpacity onPress={() => navigation.navigate("Consultancy")}>
//               <Card style={{ height: 150, width: 150 }}>
//                 <Image style={{ width: 150, height: 155 }} source={onlineConsultation} />
//               </Card>
//             </TouchableOpacity>
//             <Text style={{ textAlign: 'center' }}>Online Consultancy</Text>
//           </View>

//           <View style={{ flexDirection: 'column', gap: 3 }}>
//             <Card style={{ height: 150, width: 150 }}>
//               <Image style={{ width: 150, height: 155 }} source={store} />
//             </Card>
//             <Text style={{ textAlign: 'center' }}>Breast Cancer Prediction</Text>
//           </View>
//         </View>
//       </View>

//       <StatusBar style="auto" backgroundColor='#993BD9' />

//       <View style={{ marginHorizontal: 4, width: '100%', position: 'absolute', top: -10 }}>
//         <Card style={{ marginHorizontal: 4, height: 50, padding: 10 }}>
//           <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
//             <TouchableOpacity onPress={() => navigation.navigate("Landing")}>
//               <AntDesign name='home' size={30} color='gray' />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => navigation.navigate("Documents")}>
//               <Entypo name='documents' size={30} color='gray' />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
//               <MaterialCommunityIcons name='account' size={30} color='gray' />
//             </TouchableOpacity>
//           </View>
//         </Card>
//       </View>
//     </View>
//   );
// }

