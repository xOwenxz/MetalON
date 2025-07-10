import React, {useState} from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Image, Bubble} from 'react-native';
import {Feather, FontAwesome} from '@expo/vector-icons';
import { GiftedChat } from 'react-native-gifted-chat';
import BubbleUI from "react-bubble-ui";


const Chat = ()=>{
  const [messages, setMessages] = useState([])
  const [inputMessage, setInputMessage] = useState("");

  const handleInputText = (text)=>{
    setInputMessage(text);
  }
  const renderMessage = (props)=>{
    const {currentMessage} = props;
    if (currentMessage.user._id === 1){
      return(
        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-end',}}>
          <Bubble
            {...props}
            wrapperStyle={{
              right: {
                backgroundColor: '#90EE90',
                marginRight: 12,
                marginVertical: 12,
              }
            }}
            textStyle={{
              right: {
                color: '#fff',
              }
            }}
          />
        </View>
      )
    }
  };
  const submitHandler = ()=>{
    const message ={
      _id: Math.random().toString(36).toString(7),
      text: inputMessage,
      createdAt: new Date().getTime(),
      user: { _id: 1}
    };
    setMessages((previousMessage)=>
    GiftedChat.append(previousMessage, [message]));
    setInputMessage("");
  } 
  return(
    <View style={styles.safeArea}>
      <View style={styles.sf1}>
        <View style={styles.sf2}>
          <View style={styles.sf3}>
          </View>
          <Image style={styles.safeImg} source={{uri: 'https://reactjs.org/logo-og.png'}} resizeMode='contain' />
        </View>
        <View style={styles.sf4}>
          <Text style={styles.sfText1}>Victor hugo</Text>
          <Text style={styles.sfText2}>Online</Text>
        </View>
        <View style={styles.sf5}>
        <TouchableOpacity style={styles.sfIcon}>
          <Feather name="phone" size={24} color="#778899"/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sfIcon}>
          <Feather name="paperclip" size={24} color="#778899"/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sfIcon}>
          <Feather name="more-vertical" size={24} color="#778899"/>
        </TouchableOpacity>
      </View>
      </View>
      <GiftedChat 
        messages={messages}  
        renderInputToolbar={()=>{ return null}}
        user={{ _id: 1}}
        minInputToolbarHeight={0}
        renderMessage={renderMessage}
        />
      <View style={styles.inputContainer}>
        <View style={styles.inputMessageContainer}>
          <TextInput 
            style={styles.input} 
            placeholder='Clique aqui...' 
            placeholderTextColor='#000000'
            value = {inputMessage}
            onChangeText = {handleInputText}
            />
          <View style={styles.ip1}>
            <TouchableOpacity style={styles.ipButton}>
              <Feather name="camera" size={24} color="#778899"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ipButton}>
              <Feather name="alert-triangle" size={24} color="#778899"/>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={submitHandler} style={styles.sendButton}>
            <FontAwesome name="send" size={24} color="#778899"/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles=StyleSheet.create({
  safeArea:{
    Flex: 1,
    backgroundColor: '#fff',
  },
  sf1:{
    flexDirection:'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#fff',
    borderBottomColor: '#708090',
    borderBottomWidth: .2,
  },
  sf2:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  sf3:{
    position:'absolute',
    bottom: 0,
    right:4,
    width:10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#000000',
    zIndex: 999,
    borderWidth: 999,
    borderColor: '#fff',
  },
  safeImg:{
    height: 48,
    width: 48,
    borderRadius: 999,
  },
  sf4:{
    marginLeft: 16,
  },
  sfText1:{
    fontSize: 20,
    color: '#000000',
  },
  sfText2:{
    fontSize: 12,
    color: '#C0C0C0',
  },
  sf5:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  sfIcon:{
    marginHorizontal: 16,
  },
  inputContainer:{
    backgroundColor: '#fff',
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputMessageContainer:{
    height: 54,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#F5FFFA',
    borderRadius: 16,
    alignItems: 'center',
    borderColor: 'rgba(128,128,128,.4)',
    borderWidth: 1,
  },
  input:{
    color: '#000000',
    flex: 1,
    paddingHorizontal: 10,

  },
  ip1:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  ipButton:{
    marginHorizontal: 8,
  },
  sendButton:{
    backgroundColor: '#fff',
    padding: 4,
    borderRadius: 999,
    marginHorizontal: 6,

  },
});

export default Chat;