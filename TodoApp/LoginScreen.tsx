import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';



const LoginScreen = ({navigation}) => {
  // const navigation = useNavigation();
  const handleLogin = () => {
    //nav to home screen
    navigation.navigate("HomeScreen");
  };
  return (
    <View style={styles.container}>
      <Text> </Text>
      <TextInput style={styles.input}/>
      <TextInput style={styles.input}/>
      <TouchableOpacity style={styles.btn}
        onPress={handleLogin}>Login
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderColor: '#6b2525',
    borderWidth: 4
  },
  btn:{
    width: '80%',
    height: 50,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default LoginScreen;