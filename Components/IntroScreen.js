import React from 'react';
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';

const IntroScreen = () => {
  return (
    <View style={styles.container}>
        <StatusBar hidden={true} />
      <Image
        source={require('../assets/ccl_logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.textUpper}>CCL</Text>
      <Text style={styles.textNormal}>IIT Gandhinagar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4682B4',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  textUpper: {
    fontFamily: 'serif',   
    fontSize: 24,
    fontWeight: '400',
    textAlign: 'center',
    color: '#fff',
    textTransform: 'uppercase',
  },
  textNormal: {
    fontFamily: 'serif',  
    fontSize: 24,
    fontWeight: '400',
    textAlign: 'center',
    color: '#fff',
    marginTop: 5,
  },
});

export default IntroScreen;
