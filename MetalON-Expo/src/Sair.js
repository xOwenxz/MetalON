import {useState} from 'react';
import { View, Button, Text} from 'react-native';

const Sair = ({navigation, route})=>{
  return(
    <View>
      <Button onPress = {()=>route.params.funcLogar(false)} title = 'Sair'/>
    </View>
  )}

export default Sair;