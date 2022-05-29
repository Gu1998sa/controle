import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, StatusBar, Image } from 'react-native';
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'

const Initial = ({}) => {
  const navigation = useNavigation();
 return (
  <View style={styles.Container}>
    <StatusBar  backgroundColor = "#F5DEB3"/>
    <View style={styles.ContainerLogo}>
      <Animatable.Image
        animation="flipInY"
        source={require('../../assets/images/icone-financas.png')}
        style={{width: '60%'}}
        resizeMode="contain"
      />
    </View>
    <Animatable.View delay={600} animation="fadeInUp" style={styles.ContainerForm}>
      <Text style={styles.Title}> Controle as suas finanças! </Text>
      <Text style={styles.TextItem}> A qualquer momento, e de qualquer lugar, faça o monitoramento de suas despesas, e receitar, e organize melhor sua vida financeira </Text>
      <Text style={[styles.TextItem, {top: 10, fontWeight:'bold'}]}> Faça login agora, para começar. </Text>

      <TouchableOpacity style={styles.BtnAcessar} onPress={() => navigation.navigate('Auth')}>
        <Text style={styles.TextAcessar}> Acessar </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.BtnCadastrar} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.TextCadastrar}> Cria sua nova conta agora. </Text>
      </TouchableOpacity>

    </Animatable.View>
  </View>
  );
}

export default Initial;

const styles = StyleSheet.create({
  Container:{
    flex:1,
    backgroundColor:'#F5DEB3'
  },
  ContainerLogo:{
    flex:2,
    backgroundColor:'#F5DEB3',
    justifyContent:'center',
    alignItems:'center',
  },
  ContainerForm:{
    flex:1,
    backgroundColor:'#8B008B',
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    paddingStart:'5%',
    paddingEnd:'5%',
  },
  Title:{
    fontSize:17,
    fontWeight:'bold',
    marginTop:28,
    marginBottom:12,
  },
  TextItem:{
    color:'#F5DEB3',
    textAlign:'center',
  },
  BtnAcessar:{
    position:'absolute',
    backgroundColor:'#F5DEB3',
    borderRadius:30,
    paddingVertical: 8,
    width:'60%',
    alignSelf:'center',
    bottom:'20%',
    alignItems:'center',
    justifyContent:'center',
  },
  TextAcessar:{
    fontWeight:'bold',
    fontSize:15
  },
  BtnCadastrar:{
    position:'absolute',    
    borderRadius:30,
    paddingVertical: 8,
    width:'60%',
    alignSelf:'center',
    bottom:'2%',
    alignItems:'center',
    justifyContent:'center',
  },
  TextCadastrar:{
    fontWeight:'bold',
    color:'#F5DEB3'
  }
})