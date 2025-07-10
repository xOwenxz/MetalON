import {useState} from 'react';
import { View, Button, Text, Image, StyleSheet} from 'react-native';

const ChatIntro = ()=>{
  return(
    <View style={styles.chatIntro}>
      <Image style={styles.chatIntroImg} source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}/>
      <Text style={styles.h1}>mantenha conectado</Text>
      <Text style={styles.h2}>oi oi oi</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  chatIntro:{
    display: 'flex',
    backgroundColor: '#f8f9fa',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    height: '100%',
  },
  chatIntroImg:{
    width: 200,
    height: 200,
    borderRadius: 20,
    cursor: 'pointer',

  },
  h1:{
    fontSize: 32,
    color: '#525252',
  },
});

export default ChatIntro;