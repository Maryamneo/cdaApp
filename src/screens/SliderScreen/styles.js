import {StyleSheet,Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
   slide: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    image2:{
      marginTop:60,
      height:130,
      width:220
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff',
      textAlign: 'center',
      marginBottom: 20,
    },
    text: {
      fontSize: 22,
      fontWeight:'500',
      color: '#fff',
      textAlign: 'center',
      //  marginTop:40,
      // padding:30,
       marginBottom:38
    },
    slideContent: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 50, // Adjust as needed
    },
    backgroundImage: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      padding: 10,
      backgroundColor: '#000',
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
});
export default styles;
