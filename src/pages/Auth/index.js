import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, StatusBar, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

const Auth = ({}) => {
  const navigation = useNavigation()
  const[email, setEmail] = useState('')
  const[senha, setSenha] = useState('')
  const[hidePass, setHidePass] = useState(true);

  function AuthLogin(){
    if(email=='gustavo' && senha=='1'){
      navigation.navigate('Personality')
    }else{
      alert('Usuario Invalido!')
    }
  }

 return (
   <View style={styles.Container} >
     <StatusBar  backgroundColor = "#F5DEB3"/>
     <View style={styles.Header}>
        <Animatable.Text delay={1000} animation="fadeInLeft" style={styles.Title}>
          Bem-vindo(a)
        </Animatable.Text>    
     </View>
     <Animatable.View animation="fadeInUp" style={styles.Forms}>
      <Text style={styles.TitleAuth}>Autenticação</Text>
      <View style={styles.IconEmail}>
        <Animatable.View delay={1000} animation="fadeInLeft"View style={{top:10}}>
          <MaterialCommunityIcons
            name="email"
            size={25} 
            color="black"

          />
        </Animatable.View>
        <TextInput
          style={styles.Inputs}
          placeholder='Email:'
          autoCorret={false}
          onChangeText={(texto) => setEmail(texto)}
          multiline={false}
          value={email}
        />
      </View>
      <View style={styles.IconSenha}>
        <Animatable.View delay={1000} animation="fadeInLeft" style={{top:10}}>
          <MaterialCommunityIcons
            name="lock"
            size={25} 
            color="black"

          />
        </Animatable.View>
        <TextInput
          style={styles.Inputs}
          placeholder='Senha:'
          secureTextEntry={hidePass}
          autoCorret={false}
          onChangeText={(texto) => setSenha(texto)}
          multiline={false}
          value={senha}
        />      
      </View>
      <TouchableOpacity style={{position:'absolute', top: 175, left:'95%' }}  onPress={() => setHidePass(!hidePass)}>
          { hidePass == true ?
            <MaterialCommunityIcons 
            name="eye-outline"
            size={25} 
            color="black"
            />
            :
            <MaterialCommunityIcons 
            name="eye-off-outline"
            size={25} 
            color="black"
            />          
          } 
        </TouchableOpacity>
      <TouchableOpacity style={styles.BtnReset} onPress={() => navigation.navigate('Forgot')}>
        <Text style={styles.TextReset}>Recuperar senha</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.BtnLogin} onPress={() => AuthLogin()}>
        <Text style={styles.TextLogin}>
          Entrar
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.BtnLoginSocial}>
        <MaterialCommunityIcons
            name='facebook'
            size={30}
            color={'#FFF'}
            >          
        </MaterialCommunityIcons>
        <Text style={styles.TextLoginSocial}> Entrar com o facebook </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.BtnCreate} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.TextCreate}>
          Crie sua conta agora gratuitamente.
        </Text>
      </TouchableOpacity>

     </Animatable.View>

   </View>
  );
}
export default  Auth;

const styles = StyleSheet.create({
  Container:{
    flex:1,
    backgroundColor:'#F5DEB3',
  },
  Header:{
    flex:0.75,   
    paddingLeft:'5%'       
  },
  Title:{
    fontWeight:'bold',
    paddingTop: '5%',
    fontSize:24,
  },
  Forms:{
    flex:4,
    backgroundColor:'#8B008B',
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    paddingStart:'5%',
    paddingEnd:'5%',  
    paddingTop:'15%'  
  },
  IconEmail:{
    flexDirection:'row', 
    alignItems:'center',
  },
  IconSenha:{
    flexDirection:'row',
    alignItems:'center',
  },
  TitleAuth:{
    textAlign:'center',
    fontSize:21,
    fontWeight:'bold',
    color:'#F5DEB3',
    bottom:20,    
  },
  Inputs:{
    width:'90%',
    borderBottomWidth:1,
    height:45,    
    borderRadius:5,
    marginTop:'5%',
    padding:10,
    fontWeight:'bold',
    color:'#F5DEB3',
    fontSize:14,    
  },
  BtnReset:{
    alignItems:'flex-end',
    paddingRight:5
  },
  TextReset:{
    fontWeight:'bold',
    fontSize:13,
  },  
  BtnLogin:{
    justifyContent:'center',
    alignItems:'center',
    top:'10%',
    height:35,
    borderRadius:25,
    backgroundColor:'#F5DEB3'
  },
  TextLogin:{
    fontWeight:'bold',
    fontSize:15
  },
  BtnLoginSocial:{
    position:'absolute',
    bottom:45,
    left:'37%',    
    backgroundColor:'#0000ff',
    borderRadius:5,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  TextLoginSocial:{
    fontSize:12,
    fontWeight:'bold',
    color:'#fff'
  },
  BtnCreate:{
    position:'absolute',
    bottom:15, 
    left:'30%'   
  },
  TextCreate:{
    fontWeight:'bold',
    color:'#F5DEB3'
  }
  
})