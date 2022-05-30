import React, {useState, useEffect} from "react";
import {View,  StyleSheet, Alert, BackHandler } from 'react-native';
import{ Avatar, Title, Caption, Paragraph, Drawer, Text,
TouchableRipple, Switch
}from 'react-native-paper'
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList
}from '@react-navigation/drawer'
import api from "../api";
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage' 


 export function DrawerContent({props, navigation}){

    async function realizaLogout(text){
        console.log(text)
        if(text == 'deslogar'){
            try{
                await AsyncStorage.removeItem('@idPerfil', e => {
                    console.error(`Error in callback`, { e });
                  });
                navigation.navigate('Login');
                return true;
    
            }catch(e){
                console.error(`Error in catch`, { e });
                return false;
            }
        }else{
            try{
                await AsyncStorage.removeItem('@idPerfil', e => {
                    console.error(`Error in callback`, { e });
                  });
                BackHandler.exitApp();
                return true;
    
            }catch(e){
                console.error(`Error in catch`, { e });
                return false;
            }
        }

    }

    function closeApp(){
        Alert.alert(
            'Confirmação!',
            'Deseja realmente sair do aplicativo?',
            [
                {text: 'Deslogar', onPress:()=>  realizaLogout('deslogar')},
                {text: 'Sim', onPress: () => realizaLogout('sair')},
                {text: 'Não'},
               
            ],
            { cancelable: true });
            return true;
        }
    

    const [isTemaEscuro, setIsTemaEscuro ] = useState(false); 
    const [id, setId] = useState('')
    const [perfil, setPerfil] = useState();
    async function getIdStorage() {
        try{
          const value = await AsyncStorage.getItem('@idPerfil');
          if(value !== null){
            console.log(value)
            setId(value)
              await  api.get(`/register/${value}`)
              .then(response => {
                const data = response.data
                setPerfil(data);
                if(perfil?.ativabiometria==true){
                  setAtivabio(true);            
                }else{
                  setAtivabio(false);
                }
              })
              .catch((err) =>{
                  console.log("Ops! ocorreu um erro" + err);
              });
            }                 
        }catch(e){
          console.log('erro: ' + e);
        }
      }
     /* 
      useEffect(() => {
        getIdStorage()     
      }, []);
    */
    const ultdthralt = perfil?.dthoraalt;
    

    
    const toggleTheme = () => {
       
        const dia = new Date().toLocaleDateString()
        const time = new Date().toLocaleTimeString()
        const dateTime = dia + ' ' + time;
        setIsTemaEscuro(!isTemaEscuro);
       
    }
     return(
         <View style={{flex: 1}}>
             <DrawerContentScrollView {...props} style={{flex: 1, top: 0, bottom: 0, backgroundColor: isTemaEscuro == true ? 'black' : 'white' }}  >
                 <View style={style.drawerContent}>
                    <View>
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                            {perfil?.foto != null ?
                                <Avatar.Image
                                source={{
                                    uri: perfil?.foto
                                }}
                                size={75}
                                /> 
                            :
                                <Avatar.Image
                                source={require('../assets/images/semPhoto.png')}
                                size={75}
                                />
                            }                            
                            <View style={{marginLeft: 5, flexDirection:'column' }}  >
                                <Title style={[style.title,{color: isTemaEscuro == true ? 'white' : 'black'}]} onPress={() => {props.navigation.navigate('Perfil')} } >{perfil?.nome}</Title>
                                <Caption style={[style.caption,{color: isTemaEscuro == true ? 'white' : 'black'}]} onPress={() => {props.navigation.navigate('Perfil')} }>
                                   {perfil?.telefone}                                      
                                </Caption>
                                <Caption style={[style.subCaption,{color: isTemaEscuro == true ? 'white' : 'black'}]} onPress={() => {props.navigation.navigate('Perfil')} } >{perfil?.email}</Caption>
                            </View>
                        </View>

                    </View>
                    <Drawer.Section style={style.drawerSection } >
                        <DrawerItem
                            icon={({color, size}) => (
                            <Icon
                                name="home-outline"
                                color={isTemaEscuro == true ? 'white' : 'black'}
                                size={size}/>
                            )}
                            label="Home"
                            labelStyle={{color: isTemaEscuro == true ? 'white' : 'black'}}
                            onPress={()=> { navigation.navigate('Initial')}}
                            
                            />
                         <DrawerItem
                            icon={({color, size, focused}) => (
                            <Icon
                                name="account-details"
                                color={isTemaEscuro == true ? 'white' : 'black'}
                                size={size}/>
                            )}
                            label="Perfil"
                            labelStyle={{color: isTemaEscuro == true ? 'white' : 'black'}}
                            onPress={()=> { navigation.navigate('Perfil') }}/>

                         <DrawerItem
                            icon={({color, size, focused}) => (
                            <Icon
                                name="book-outline"
                                color={isTemaEscuro == true ? 'white' : 'black'}
                                size={size}/>
                            )}
                            label="Historico"
                            labelStyle={{color: isTemaEscuro == true ? 'white' : 'black'}}
                            onPress={()=> { navigation.navigate('Historia') }}/>

                        <DrawerItem
                            icon={({color, size, focused}) => (
                            <Icon
                                name="cog-outline"
                                color={isTemaEscuro == true ? 'white' : 'black'}
                                size={size}/>
                            )}
                            label="Configurações"
                            labelStyle={{color: isTemaEscuro == true ? 'white' : 'black'}}
                            onPress={()=> { navigation.navigate('Configs') }}/>
                        
                    </Drawer.Section>
                    <Drawer.Section >
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={style.preferences}>                                
                                <Text style={{color: isTemaEscuro == true ? 'white' : 'black'}} >Tema Escuro </Text>
                                <View pointerEvents="none">
                                    <Switch value={isTemaEscuro} />
                                </View>                                
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                 </View>
             </DrawerContentScrollView>
             <Drawer.Section style={[style.bottomDrawerSection, {backgroundColor: isTemaEscuro ==true ? 'black':'white'}]}>
                 <DrawerItem
                 icon={({color, size}) => (
                     <Icon
                     name="exit-to-app"
                     color={isTemaEscuro == true ? 'white' : 'black'}
                     size={size}/>
                 )}
                 label="Realizar Logout"
                 labelStyle={{color: isTemaEscuro == true ? 'white' : 'black', fontWeight: 'bold'}}
                 onPress={()=> {closeApp()}}/>
             </Drawer.Section>
         </View>
     )
 }

 const style = StyleSheet.create({
     drawerContent: {
         flex: 1,
     },
     userInoSection:{
         paddingLeft:20,
         
     },
     title:{
         fontSize: 16,
         marginTop: 3,
         fontWeight: 'bold'
     },
     subCaption:{
        fontSize:14,
        lineHeight: 14,
     },

     drawerSection:{
        marginTop: 20,
     },
     bottomDrawerSection: {
         marginBottom: 10,
         borderTopColor: "#F4F4F4",
         borderTopWidth:2,
     },
     preferences: {
         flexDirection: 'row',
         justifyContent: 'space-between',
         paddingVertical: 10,
         paddingHorizontal: 20,
     },

 })
 