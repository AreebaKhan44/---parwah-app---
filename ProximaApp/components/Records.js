
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, SafeAreaView, Linking, Image } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';
import Home from 'react-native-vector-icons/AntDesign';
import Documents from 'react-native-vector-icons/Entypo';
import Account from 'react-native-vector-icons/MaterialCommunityIcons';
import * as DocumentPicker from 'expo-document-picker';
import { ref, getDownloadURL, uploadBytesResumable, listAll } from 'firebase/storage';
import { storage } from '../firebase/firebase-config';

function Records({ navigation }) {
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    listAllFiles();
  }, []);

  const listAllFiles = () => {
    const listRef = ref(storage, 'Records/');

    listAll(listRef)
      .then((res) => {
        const fileData = res.items.map((itemRef) => ({
          name: itemRef.name,
          url: '',
          ref: itemRef,
        }));
        setFileList(fileData);
        updateDownloadURLs(fileData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateDownloadURLs = (fileData) => {
    Promise.all(fileData.map((file) => getDownloadURL(file.ref)))
      .then((downloadURLs) => {
        const updatedFileData = fileData.map((file, index) => ({
          ...file,
          url: downloadURLs[index],
        }));
        setFileList(updatedFileData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlePickup = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    if (result.type === 'success') {
      const { uri, name } = result;
      const response = await fetch(uri);
      const blob = await response.blob();
      uploadFile(blob, name);
    }
  };

  const uploadFile = (blobFile, fileName) => {
    const storageRef = ref(storage, `Records/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, blobFile);

    uploadTask.on(
      'state_changed',
      null,
      (error) => {
        console.log(error);
      },
      () => {
        listAllFiles();
      }
    );
  };

  const handleDownload = (url) => {
    Linking.openURL(url);
  };

  const renderItem = ({ item }) => {
    const getFileType = () => {
      if (item.name.endsWith('.pdf')) {
        return (
          <View style={{ width: 50, height: 50, marginRight: 10, backgroundColor: '#993BD9', borderRadius: 25, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#BF5FBF' }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>P</Text>
          </View>
        );
      } else if (item.name.endsWith('.doc') || item.name.endsWith('.docx')) {
        return (
          <View style={{ width: 50, height: 50, marginRight: 10, backgroundColor: '#993BD9', borderRadius: 25, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#BF5FBF' }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>W</Text>
          </View>
        );
      } else {
        return <Image source={{ uri: item.url }} style={{ width: 50, height: 50, marginRight: 10, backgroundColor: '#993BD9', borderRadius: 25, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#BF5FBF' }} />;
      }
    };

    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 7,marginLeft:6,marginRight:6,borderRadius: 20, borderWidth: 3 ,padding:6,borderColor:'#BF5FBF', color:"#993BD9" }}>
        <TouchableOpacity onPress={() => handleDownload(item.url)}>
          {getFileType()}
        </TouchableOpacity>
        <Text style={{ flex: 1 }}>{item.name}</Text>
        <Button onPress={() => handleDownload(item.url)}>Download</Button>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ backgroundColor: '#993BD9', height: '15%' }} />

      <View>
        <Text style={{ fontSize: 24, color: 'gray', textAlign: 'center', paddingTop: 10 }}>Digital Records</Text>
      </View>

      <View style={{ borderBottomWidth: 1, borderBottomColor: 'gray', width: '100%' }} />

      <View style={{ flexDirection: 'row', fontSize: 20, gap: 5, padding: 15 }}>
        <Text style={{ fontSize: 18, borderWidth: 2, borderColor: '#800080', paddingHorizontal: 8, borderRadius: 4 }}>Pdf</Text>
        <Text style={{ fontSize: 18, borderWidth: 2, borderColor: '#0000FF', paddingHorizontal: 8, borderRadius: 4 }}>Word</Text>
        <Text style={{ fontSize: 18, borderWidth: 2, borderColor: '#008000', paddingHorizontal: 8, borderRadius: 4 }}>Images</Text>
        <Text style={{ fontSize: 18, marginLeft: 'auto' }}>Filter</Text>
      </View>

      <View style={{ borderBottomWidth: 1, borderBottomColor: 'gray', width: '100%' }} />

      <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', margin: 5 }}>
        <Searchbar style={{ flex: 1, marginVertical: 3 }} />
        
        <TouchableOpacity
          style={{ backgroundColor: '#993BD9', height: 50, borderRadius: 20,borderWidth:2,borderColor:"#BF5FBF" ,justifyContent: 'center', alignItems: 'center', padding:10, width: 150 }}
          onPress={handlePickup}
        >
          <Text style={{ color: 'white', fontWeight: 'normal',fontSize:18,}}>Upload File  </Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}>
        {fileList.length > 0 ? (
          <FlatList
            data={fileList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
          />
        ) : (
          <Text style={{ textAlign: 'center' }}>No files available</Text>
        )}
      </View>

      <View style={{ position: 'absolute', bottom: 5, left: 5, right: 10 }}>
        <Card style={{ height: 50, padding: 10 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Landing')}>
              <Home name="home" size={30} color="gray" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Documents name="documents" size={30} color="gray" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Account name="account" size={30} color="gray" />
            </TouchableOpacity>
          </View>
        </Card>
      </View>
      </SafeAreaView>
  );
        }

 export default Records;       
   





 

// import React, { useEffect, useState } from 'react';
// import { View, Text, TouchableOpacity, FlatList, SafeAreaView, Linking, Image } from 'react-native';
// import { Button, Card } from 'react-native-paper';
// import { Searchbar } from 'react-native-paper';
// import Home from 'react-native-vector-icons/AntDesign';
// import Documents from 'react-native-vector-icons/Entypo';
// import Account from 'react-native-vector-icons/MaterialCommunityIcons';
// import * as DocumentPicker from 'expo-document-picker';
// import { ref, getDownloadURL, uploadBytesResumable, listAll } from 'firebase/storage';
// import { storage } from '../firebase/firebase-config';

// function Records({ navigation }) {
//   const [fileList, setFileList] = useState([]);

//   useEffect(() => {
//     listAllFiles();
//   }, []);

//   const listAllFiles = () => {
//     const listRef = ref(storage, 'Records/');

//     listAll(listRef)
//       .then((res) => {
//         const fileData = res.items.map((itemRef) => ({
//           name: itemRef.name,
//           url: '',
//           ref: itemRef,
//         }));
//         setFileList(fileData);
//         updateDownloadURLs(fileData);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const updateDownloadURLs = (fileData) => {
//     Promise.all(fileData.map((file) => getDownloadURL(file.ref)))
//       .then((downloadURLs) => {
//         const updatedFileData = fileData.map((file, index) => ({
//           ...file,
//           url: downloadURLs[index],
//         }));
//         setFileList(updatedFileData);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const handlePickup = async () => {
//     let result = await DocumentPicker.getDocumentAsync({});
//     if (result.type === 'success') {
//       const { uri, name } = result;
//       const response = await fetch(uri);
//       const blob = await response.blob();
//       uploadFile(blob, name);
//     }
//   };

//   const uploadFile = (blobFile, fileName) => {
//     const storageRef = ref(storage, `Records/${fileName}`);
//     const uploadTask = uploadBytesResumable(storageRef, blobFile);

//     uploadTask.on(
//       'state_changed',
//       null,
//       (error) => {
//         console.log(error);
//       },
//       () => {
//         listAllFiles();
//       }
//     );
//   };

//   const handleDownload = (url) => {
//     Linking.openURL(url);
//   };

//   const renderItem = ({ item }) => {
//     const getFileType = () => {
//       if (item.name.endsWith('.pdf')) {
//         return (
//           <View style={{ width: 50, height: 50, marginRight: 10, backgroundColor: '#993BD9', borderRadius: 25, justifyContent: 'center', alignItems: 'center', borderWidth: 12, borderColor: '#BF5FBF' }}>
//             <Text style={{ color: 'white', fontWeight: 'bold' }}>P</Text>
//           </View>
//         );
//       } else if (item.name.endsWith('.doc') || item.name.endsWith('.docx')) {
//         return (
//           <View style={{ width: 50, height: 50, marginRight: 10, backgroundColor: '#993BD9', borderRadius: 25, justifyContent: 'center', alignItems: 'center', borderWidth: 12, borderColor: '#BF5FBF' }}>
//             <Text style={{ color: 'white', fontWeight: 'bold' }}>W</Text>
//           </View>
//         );
//       } else {
//         return <Image source={{ uri: item.url }} style={{ width: 60, height: 40, marginRight: 10, backgroundColor: '#993BD9', borderRadius: 20, justifyContent: 'center', alignItems: 'center', borderWidth: 12, borderColor: '#BF5FBF' }} />;
//       }
//     };

//     return (
//       <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
//         <TouchableOpacity onPress={() => handleDownload(item.url)}>
//           {getFileType()}
//         </TouchableOpacity>
//         <Text style={{ flex: 1 }}>{item.name}</Text>
//         <Button onPress={() => handleDownload(item.url)}>Download</Button>
//       </View>
//     );
//   };

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <View style={{ backgroundColor: '#993BD9', height: '15%' }} />

//       <View>
//         <Text style={{ fontSize: 24, color: 'gray', textAlign: 'center', paddingTop: 10 }}>Digital Records</Text>
//       </View>

//       <View style={{ borderBottomWidth: 1, borderBottomColor: 'gray', width: '100%' }} />

//       <View style={{ flexDirection: 'row', fontSize: 20, gap: 5, padding: 15 }}>
//         <Text style={{ fontSize: 18, borderWidth: 2, borderColor: '#800080', paddingHorizontal: 8, borderRadius: 4 }}>Pdf</Text>
//         <Text style={{ fontSize: 18, borderWidth: 2, borderColor: '#0000FF', paddingHorizontal: 8, borderRadius: 4 }}>Word</Text>
//         <Text style={{ fontSize: 18, borderWidth: 2, borderColor: '#008000', paddingHorizontal: 8, borderRadius: 4 }}>Images</Text>
//         <Text style={{ fontSize: 18, marginLeft: 'auto' }}>Filter</Text>
//       </View>


//             <View style={{ borderBottomWidth: 1, borderBottomColor: 'gray', width: '100%' }} />

//       <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', margin: 5 }}>
//         <Searchbar style={{ flex: 1, marginVertical: 3 }} />
//         <TouchableOpacity
//           style={{ backgroundColor: '#993BD9', height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, width: 150 }}
//           onPress={handlePickup}
//         >
//           <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Upload File</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={{ flex: 1 }}>
//         {fileList.length > 0 ? (
//           <FlatList
//             data={fileList}
//             keyExtractor={(item, index) => index.toString()}
//             renderItem={renderItem}
//           />
//         ) : (
//           <Text style={{ textAlign: 'center' }}>No files available</Text>
//         )}
//       </View>

//       <View style={{ position: 'absolute', bottom: 10, left: 10, right: 10 }}>
//         <Card style={{ height: 50, padding: 10 }}>
//           <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//             <TouchableOpacity onPress={() => navigation.navigate('Landing')}>
//               <Home name="home" size={30} color="gray" />
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <Documents name="documents" size={30} color="gray" />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
//               <Account name="account" size={30} color="gray" />
//             </TouchableOpacity>
//           </View>
//         </Card>
//       </View>
//       </SafeAreaView>
//   );
//         }
//  export default Records;       