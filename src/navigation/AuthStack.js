import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SliderScreen from "../Screens/SliderScreen/index";
import SplashScreen from '../Screens/SplashScreen/index'
import Home from '../Screens/Home/index';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
   
    return (
      <Stack.Navigator>
         {/* <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        /> */}
       <Stack.Screen
          name="SliderScreen"
          component={SliderScreen}
          options={{headerShown: false}}
        />
     <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        /> 
        
      </Stack.Navigator>
    );
  };
  export default AuthStack;