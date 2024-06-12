import { View, Text ,Image,ImageBackground} from 'react-native';
import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import AntDesign from 'react-native-vector-icons/AntDesign'; 
import styles from './styles';

const SliderScreen = ({navigation}) => {
    const slides = [
        {
          key: 1,
          title: 'Title 1',
          text: 'Instant Crime Reporting At \n Your Fingertips',
          image2:require('../../Images/Logo1.png'),
          image: require('../../Images/backgroundimage.jpeg'),
        
        },
        {
          key: 2,
          title: 'Title 2',
          text: 'Your Voice Matters: \n  Report Crimes Anonymously',
          image2:require('../../Images/Logo1.png'),
          image: require('../../Images/backgroundimg2.jpeg'),

        },
        {
          key: 3,
          title: 'Rocket guy',
          text: 'Crime Reporting Made \n Simple and Secure',
          image2:require('../../Images/Logo1.png'),
          image: require('../../Images/backgroundimg3.jpeg'),
         
        }
      ];

      const _renderItem = ({ item }) => (
        <ImageBackground source={item.image} style={styles.backgroundImage} blurRadius={6}>
   
        <View style={styles.slide}>
        <View style={styles.slideContent}>
          <Image source={item.image2} style={styles.image2} /> 
          <Text style={styles.text}>{item.text}</Text>
      
          </View>
          {/* <Text style={styles.title}>{item.title}</Text> */}
            </View>
        </ImageBackground>
      );
    
      const _renderNextButton = () => (
       
        <View style={styles.button}>
           <AntDesign name="arrowright" size={20} color="#fff" />
          {/* <Text style={styles.buttonText}>Next</Text> */}
        </View>
      
      );
    
      const _renderDoneButton = () => (
       
        <View style={styles.button}>
          <Text style={styles.buttonText}>Done</Text>
        </View>
       
      );
      const _onDone = () => {
        navigation.navigate("Home")
        // Handle the action when done button is pressed
        console.log('Done button pressed');
      };
  return (
    <AppIntroSlider
      data={slides}
      renderItem={_renderItem}
      renderNextButton={_renderNextButton}
      renderDoneButton={_renderDoneButton}
      onDone={_onDone}
      dotStyle={{ backgroundColor: 'white' }}          // Change the color of the inactive dots here
      activeDotStyle={{ backgroundColor: '#EA6A00' }}
  />
  )
}

export default SliderScreen