
import React,{Component} from 'react';

import messaging from '@react-native-firebase/messaging';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


export default class App extends Component {

  async componentDidMount() {
    await this.checkPermission();
}

async checkPermission() {
  const authStatus = await messaging().getToken();

  alert(authStatus)

  //   const enabled =
  //   authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //   authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  // if (enabled) {
  //   HrAppUtil.getFcmToken();
  // } else {
  //   this.requestPermission();
  // }
}

// async requestPermission() {
//   try {
//     await messaging().requestPermission();
//     HrAppUtil.getFcmToken();
//   } catch (ex) {
//     console.log('Promise rejected for permission');
//   }
// }

render() {
  return (    
  <View>
    <Text>Hi</Text>
  </View>
    
  );
}

}



