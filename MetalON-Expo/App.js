import {useState} from 'react';
import { View, Button, Text} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from './src/Home';
import Login from './src/Login';
import Registrar from './src/Registrar';
import Historico from './src/Historico';
import Sair from './src/Sair';
import Sobre from './src/Sobre';
import Perfil from './src/Perfil';
import Config from './src/Config';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


const App = () => {
  const [EstaLogado, setLogado] = useState(false);
  return(    	
    EstaLogado?(
      <NavigationContainer>	
        <Drawer.Navigator>			
          <Drawer.Screen name="Home" component={()=>{return(				
            <Tab.Navigator>      					
	            <Tab.Screen name="Home_tab" options={{headerShown:false}} component={()=>{return(
                <Stack.Navigator>        						
                  <Stack.Screen name="Home" options={{headerShown:false}} component={Home}  initialParams = {{funcLogar : setLogado}}/>
                  <Stack.Screen name="Perfil" component={Perfil} />      						
                </Stack.Navigator>)}} />
            </Tab.Navigator>)}} />	
          <Drawer.Screen name="Perfil" component={Perfil} />  		
          <Drawer.Screen name="Config" component={Config} />
          <Drawer.Screen name="Sobre a loja" component={Sobre} />
          <Drawer.Screen name="Histórico" component={Historico} />
          <Drawer.Screen name="Sair" component={Sair} initialParams = {{funcLogar : setLogado}}/>
        </Drawer.Navigator>	
      </NavigationContainer>
      ):(     
      <NavigationContainer>	 		
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} initialParams = {{funcLogar : setLogado}}/>
          <Stack.Screen name="Registrar" component={Registrar}/>      	
        </Stack.Navigator>    
    </NavigationContainer>))
  };

export default App;
