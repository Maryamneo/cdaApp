import { View, Text ,ImageBackground,TouchableOpacity,ScrollView} from 'react-native'
import React ,{useState}from 'react'
import styles from './styles'
import Timeline from '../../Components/Timeline';

const Home = () => {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
      setShowMore(!showMore);
    };
  return (
    <ScrollView style={styles.container}   showsVerticalScrollIndicator={false}>
         <View style={styles.ViewOne}>
            <ImageBackground source={require('../../Images/help.jpeg')} style={[styles.backgroundImage,{borderRadius:20}]} >
            <Text style={styles.textStyle}>  <Text style={{color:'#EC7A1C'}}>A fast,</Text>{'\n'}  free emergency {'\n'}  injunction service{'\n'}  for <Text style={{color:'#EC7A1C'}}>domestic abuse</Text></Text>
            <TouchableOpacity style={styles.btnStyle}>
            <Text style={styles.btnText}>REFFER DIRECT</Text>
            </TouchableOpacity>
            </ImageBackground>
        </View>
        <View style={styles.ViewTwo}>

          <Text style={styles.boldText}>Domestic Abuse and Violence Emergency Legal Protection{'\n'} </Text>
          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <Text style={styles.lightText}>
            A free, fast emergency injunction service to survivors of domestic abuse and violence regardless of their financial circumstances, race, gender, or sexual orientation.
            {'\n\n'}
                Domestic abuse is common in the UK and anyone can be a victim, regardless of gender, age, ethnicity, socio-economic status, sexuality, or background.
                {'\n\n'}
                Our award-winning free service allows anyone who has recently experienced or been threatened with domestic abuse or violence to apply for an emergency court injunction.
          
            {showMore && (
              <>
                {'\n\n'}
                Domestic abuse is common in the UK and anyone can be a victim, regardless of gender, age, ethnicity, socio-economic status, sexuality, or background.
                {'\n\n'}
                Our award-winning free service allows anyone who has recently experienced or been threatened with domestic abuse or violence to apply for an emergency court injunction.
              </>
            )}
          </Text>
        </ScrollView>
        <TouchableOpacity style={styles.Readbtn} onPress={toggleShowMore}>
          <Text style={styles.lighbtntext}>
            {showMore ? 'Read less' : 'Read more'}
          </Text>
        </TouchableOpacity>
        </View>
        <View style={styles.Viewthree}>
        <Timeline/>
            </View>
            

           
   
     
      </ScrollView>
  )
}

export default Home