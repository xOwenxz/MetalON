import {useState} from 'react';
import { View, Button, Text} from 'react-native';

const Perfil = ({navigation, route})=>{
  return(
    <View>
      <Button onPress = {()=>navigation.navigate("Perfil")} title = 'Perfil'/>
    </View>)}

export default Perfil;