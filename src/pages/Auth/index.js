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
     <StatusBar  backgroundColor = "#2F4F4F"/>
     <View style={styles.Header}>
        <Animatable.Text delay={1000} animation="fadeInLeft" style={styles.Title}>
          Bem-vindo(a)
        </Animatable.Text>    
     </View>
     <Animatable.View animation="fadeInUp" style={styles.Forms}>
      <Text style={styles.TitleAuth}>Autenticação</Text>
      <Text style={{top: 25, left: 30, color: '#FFF', fontSize:15, fontWeight: 'bold'}} >Email</Text>
      <View style={styles.IconEmail}>
        <Animatable.View delay={1000} animation="fadeInLeft"View style={{top:10}}>
          <MaterialCommunityIcons
            name="email"
            size={25} 
            color="#FFF"

          />
        </Animatable.View>
        <TextInput
          style={styles.Inputs}
          placeholder='Ex: contato@dominio.com'
          placeholderTextColor='#FFF'
          autoCorret={false}
          onChangeText={(texto) => setEmail(texto)}
          multiline={false}
          value={email}
        />
      </View>
      <Text style={{top: 25, left: 30, color: '#FFF', fontSize:15, fontWeight: 'bold'}} >Senha</Text>
      <View style={styles.IconSenha}>
        <Animatable.View delay={1000} animation="fadeInLeft" style={{top:10}}>
          <MaterialCommunityIcons
            name="lock"
            size={25} 
            color="#FFF"

          />
        </Animatable.View>
        <TextInput
          style={styles.Inputs}
          placeholder='Ex: senha123'
          placeholderTextColor='#FFF'
          secureTextEntry={hidePass}
          autoCorret={false}
          onChangeText={(texto) => setSenha(texto)}
          multiline={false}
          value={senha}
        />      
      </View>
      <TouchableOpacity style={{position:'absolute', top: 225, left:'95%' }}  onPress={() => setHidePass(!hidePass)}>
          { hidePass == true ?
            <MaterialCommunityIcons 
            name="eye-outline"
            size={25} 
            color="#FFF"
            />
            :
            <MaterialCommunityIcons 
            name="eye-off-outline"
            size={25} 
            color="#FFF"
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
    backgroundColor:'#FFF',
  },
  Header:{
    flex:0.75,   
    paddingLeft:'5%'       
  },
  Title:{
    fontWeight:'bold',
    paddingTop: '20%',
    fontSize:24,
    color:'#2F4F4F'
  },
  Forms:{
    flex:4,
    backgroundColor:'#2F4F4F',
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
    fontSize:27,  
    fontWeight:'bold',
    color:'#FFF',
    bottom:20,  
  },
  Inputs:{
    width:'90%',
    borderBottomWidth:1,
    borderColor: '#FFF',
    height:45,    
    borderRadius:5,
    marginTop:'5%',
    padding:10,
    color:'#FFF',
    fontSize:14,    
  },
  BtnReset:{
    alignItems:'flex-end',
    paddingRight:10
  },
  TextReset:{
    fontWeight:'bold',
    fontSize:13,
    color:'#FFF'
  },  
  BtnLogin:{
    justifyContent:'center',
    alignItems:'center',
    top:'10%',
    height:35,
    borderRadius:25,
    backgroundColor:'#FFF'

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
    color:'#FFF'

  }
  
})