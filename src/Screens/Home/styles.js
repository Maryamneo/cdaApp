import {StyleSheet,Dimensions} from 'react-native';
 import {Fonts, SF, SH, SW, Colors} from '../../utils';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
container:{
    flex:1,
    // backgroundColor:Colors.orange,
    // padding:20,
    margin:10
},
ViewOne:{
    height:200,
    width:380,
   
    backgroundColor:'red',
    justifyContent:'center',
    alignSelf:'center',
    borderRadius:20,
    marginTop:3,
    overflow: 'hidden', 
    shadowOpacity:1,
    elevation:5

},
backgroundImage:{
    height: 200,
    width: 400,
    justifyContent: 'center',
    alignSelf: 'center', 
},
textStyle:{
    color:'white',
    fontSize:18,
    fontWeight:'600',
    padding:10
},
textStyle2:{
    color:Colors.theme_background_han_Purple
    // color:' #EC7A1C'  
},
btnStyle:{
    backgroundColor:'#EC7A1C',
    height:30,
    width:110,
    borderRadius:10,
    marginLeft:18,
    marginBottom:17
},
btnText:{
    color:'white',
    fontSize:11,
    fontWeight:'500',
    textAlign:'center',
    paddingVertical:6,
    
},
ViewTwo:{
    margin:10,
    height:360,
    width:380,
    backgroundColor:'#F6F6F6',
    // justifyContent:'center',
    alignSelf:'center',
    borderRadius:20,
    // marginTop:3,
    overflow: 'hidden', 
    shadowOpacity:1,
    elevation:5,
    padding:10
},
boldText:{
    color:'black',
    fontSize:24,
    fontWeight:'800',
   
},
lightText:{
    color:'black',
    fontSize:14,
    fontWeight:'400',
},
lighbtntext:{
    color:'black',
    fontSize:12,
    textAlign:'center',
    fontWeight:'500',
    paddingVertical:4
},
Readbtn:{
    marginTop:10,
    borderColor:'black',
    height:30,
    width:90,
    // backgroundColor:'green',
    borderColor:'black',
    borderWidth:1,
    borderRadius:15
},
//////
pipelineContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 50,
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  circleActive: {
    backgroundColor: '#4caf50',
  },
  circleInactive: {
    backgroundColor: '#e0e0e0',
  },
  stepLabel: {
    marginLeft: 5,
    marginRight: 5,
    textAlign: 'center',
  },
  line: {
    flex: 1,
    height: 2,
    width:10,
    marginVertical: 5,
  },
  lineActive: {
    backgroundColor: '#4caf50',
  },
  lineInactive: {
    backgroundColor: '#e0e0e0',
  },
  button: {
    backgroundColor: '#4caf50',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  scrollView:{
    maxHeight: 200, 
  },
  Viewthree:{
    margin:10,
    height:700,
    width:380,
    backgroundColor:'#F6F6F6',
    // justifyContent:'center',
    alignSelf:'center',
    borderRadius:20,
    // marginTop:3,
    overflow: 'hidden', 
    shadowOpacity:1,
    elevation:5,
    padding:10
  },
  cdatext:{
    fontSize:20,
    color:'black',
    fontWeight:'800',
    marginRight:'auto'
  },
  orangetext:{
    color:'#EC7A1C',
    fontSize:12,
    fontWeight:'500',
    marginBottom:10
  },
  Box1:{
    backgroundColor:'#D9D9D9',
    height:120,
    width:300,
    borderRadius:10,
    padding:10,
    elevation:10,
    shadowOpacity:20
  },
  Refferal:{
    fontSize:19,
    fontWeight:'700',
    color:'black'
  },
  lightrefrral:{
    fontSize:20,
    fontWeight:'400',
    color:'black'
  }
});
export default styles;
