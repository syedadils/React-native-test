// import React, { useEffect, useState } from 'react';
// import {View, StyleSheet, Image} from 'react-native';
// // import HomeScree from './HomeScreen.jsx'



// export default function StartScreen() {

//     const [loading, setloading] = useState(true);

//     useEffect(() => {
//         setloading(false);
//         setTimeout(() => {
//             setloading(true) // 1
//         }, 5000);
//     }, [])



//     return (

//       <View style={styles.container}>
//         <Image resizeMode="cover" source={require('../assets/favicon-removebg-preview.png')} />
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'space-around',
//       alignItems: 'center',
//       height: '100%',
//       textAlign: 'center',
//     },
//   });

import React, { useCallback, useEffect, useState } from 'react';
import { TextInput, View} from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        await new Promise(resolve => setTimeout(resolve, 5000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      onLayout={onLayoutRootView}>
       
    </View>
    
  );
}
