import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Sessions = ({ 
  h1 = "KGBV", 
  h2 = "Sessions", 
  description = "We make learning joyful and reach \n more than 80,000 students every week.", 
  onPress 
}) => (
  <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
    <Image 
      source={require('../assets/brick.png')} 
      style={styles.Thirdimg} 
    />
    <Text style={styles.h1}>{h1}</Text>
    <Text style={styles.h1}>{h2}</Text>
    <Text style={styles.description}>{description}</Text>
    <Image 
      source={require('../assets/Group 3.png')} 
      style={styles.group3img} 
    /> 
  </TouchableOpacity>
);

export default Sessions;

const styles = StyleSheet.create({
  mainContainer:{
    // width: 347,
    height: 428,
    alignItems: "center",
    justifyContent: "center",
  },
  Thirdimg:{
    width: 200,
    height: 200,
    marginTop: 20,
    marginBottom:20,
  },
  h1:{
    marginTop: 30,
    fontWeight: "1000",
    fontSize: 32,
    lineHeight: 15, 
    borderColor:"red",
    letterSpacing: 2.6, 
    textAlign: "center",
  },
  description:{
    marginTop: 15,
    fontSize: 16,
    textAlign: "center",
    color: "gray",
    lineHeight: 23, 
    paddingHorizontal: 10,
  },
  group3img:{
    width:48,
    height:9,
    marginTop: 40,
  }
});