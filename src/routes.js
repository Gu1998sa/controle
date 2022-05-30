import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "./Components/DrawerContent";


import Auth from "./pages/Auth";
import Initial from "./pages/Initial";
import Forgot from "./pages/Forgot";
import Register from "./pages/Register";
import Personality from "./pages/Personality";

import Home from "./pages/Home";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const TelasDrawer =() => {
  return(
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} >
      <Drawer.Screen name="Inicio" component={Home} options={{headerShown: false}}/>           
    </Drawer.Navigator>
  )

}



const TelasStacks = () => {
    return(
      <Stack.Navigator initialRouteName="Initial" screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Auth" component={Auth}/>
      <Stack.Screen name="Initial" component={Initial}/>
      <Stack.Screen name="Forgot" component={Forgot}/>
      <Stack.Screen name="Register" component={Register}/>
      <Stack.Screen name="Personality" component={Personality}/>
      <Stack.Screen name="Home" component={TelasDrawer}/>
      
      </Stack.Navigator>
    )
  };
  
 function Routes() {
   return(
        <NavigationContainer>
          <TelasStacks/>
        </NavigationContainer>
   ); 
  }
  
  export default Routes;