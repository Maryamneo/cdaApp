

 import React from 'react';
 import AuthStack from '../CDA/src/Navigation/AuthStack';
 import {SafeAreaView,} from 'react-native';

 import {NavigationContainer} from '@react-navigation/native';


const App=()=>{
  return(
    <SafeAreaView style={{flex: 1,backgroundColor:'red'}}>
    <NavigationContainer>
    <AuthStack />
   </NavigationContainer>
   </SafeAreaView>

  )
}


export default App;
