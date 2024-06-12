import { View, Text ,StyleSheet,Image,ActivityIndicator} from 'react-native'
import React,{useState,useEffect} from 'react'

const SplashScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(true);
          // Navigate to the next screen after 4 seconds
          setTimeout(() => {
            navigation.replace('SliderScreen');
          }, 4000);
        }, 4000); // Display the activity indicator after 4 seconds
    
        return () => clearTimeout(timer);
      }, [navigation]);
  return (
    <View style={styles.container}>
      <Image source={require('../../Images/Logo1.png')} style={styles.image} /> 
      {loading && <ActivityIndicator size="large" color="black" />}
    </View>
  )
}
const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center', 
      },
      image: {
        height: 120,
        width: 180,
      },
})
export default SplashScreen