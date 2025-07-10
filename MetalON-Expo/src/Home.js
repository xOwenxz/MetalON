import {useState, useEffect} from 'react';
import { View, Button, Text, StyleSheet, Image, TextInput} from 'react-native';
import ChatIntro from './ChatIntro';
import ChatWindow from '../components/chatWindow';
//import DonutLargeIcon from '@mui/icons-material/DonutLarge';
//import ChatIcon from '@mui/icons-material/Chat';
//import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatListItem from '../components/chatListItem';
import Header from './Header';
import Chat from './Chat';


const Home = ()=>{
  return(
      <View style={styles.window}>
        <Chat/>
      </View>
  );
}

const styles=StyleSheet.create({
  window:{
    fontFamily: 'Segoe UI',
    display: 'flex',
    height: '100%',
    backgroundColor: '#ededed',
  },
});

export default Home;