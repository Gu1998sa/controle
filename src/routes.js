import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Auth from "./pages/Auth";
import Initial from "./pages/Initial";
import Forgot from "./pages/Forgot";
import Register from "./pages/Register";

const Stack = createStackNavigator();



const TelasStacks = () => {
    return(
      <Stack.Navigator initialRouteName="Initial" screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Auth" component={Auth}/>
      <Stack.Screen name="Initial" component={Initial}/>
      <Stack.Screen name="Forgot" component={Forgot}/>
      <Stack.Screen name="Register" component={Register}/>
      
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