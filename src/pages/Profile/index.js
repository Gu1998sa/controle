import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, StatusBar, Image, FlatList, SafeAreaView, TextInput } from 'react-native';
import Dialog, {DialogTitle, DialogContent, SlideAnimation, DialogFooter, DialogButton, } from 'react-native-popup-dialog';
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { Picker } from '@react-native-picker/picker'
import AppIntroSlider from 'react-native-app-intro-slider';


const Profile = ({}) => {
    const[email, setEmail] = useState('')
    const[cpf, setCpf] = useState('')
    const[nome, setNome] = useState('')
    const[telefone, setTelefone] = useState('')
 return (
   <View style={styles.Container}>
       <View style={styles.Header}>
            <View style={styles.HeaderImage}>
                <Image 
                    style={styles.Image}
                    source={require('../../assets/images/semPhoto.png')}
                />
                <View style={styles.BtnImage}>
                    <TouchableOpacity>
                        <MaterialCommunityIcons
                            name='camera'
                            size={30}
                            color='#000'
                        />
                    </TouchableOpacity>
                </View>
            </View>            
            <View style={styles.HeaderText}>
                <Text style={{left: '5%', color: '#000', fontWeight:'bold'}}>Nome</Text>
                <TextInput
                style={styles.Inputs}
                placeholder='Ex: Gustavo'
                placeholderTextColor='#000'
                autoCorret={false}
                onChangeText={(texto) => setNome(texto)}
                multiline={false}
                value={nome}
                />
                <Text style={{left: '5%', color: '#000', fontWeight:'bold'}}>Email</Text>
                <TextInput
                style={styles.Inputs}
                placeholder='Ex: contato@dominio.com'
                placeholderTextColor='#000'
                autoCorret={false}
                onChangeText={(texto) => setEmail(texto)}
                multiline={false}
                value={email}
                />
                <Text style={{left: '5%', color: '#000', fontWeight:'bold'}}>Telefone</Text>
                <TextInput
                style={styles.Inputs}
                placeholder='Ex: 53991234567'
                placeholderTextColor='#000'
                autoCorret={false}
                onChangeText={(texto) => setTelefone(texto)}
                multiline={false}
                value={telefone}
                />
                <Text style={{left: '5%', color: '#000', fontWeight:'bold'}}>CPF</Text>
                <TextInput
                style={styles.Inputs}
                placeholder='Ex: 12365478900'
                placeholderTextColor='#000'
                autoCorret={false}
                onChangeText={(texto) => setCpf(texto)}
                multiline={false}
                value={cpf}
                />
                <View style={styles.BtnProfile}>
                    <TouchableOpacity style={{flexDirection:'row', borderLeftWidth: 1, borderRightWidth: 1, borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#2F4F4F'}}>                      
                        <Text> Salvar </Text>
                        <MaterialCommunityIcons
                            name='content-save-check'
                            color={'#2f4f4f'}
                            size={20}
                        />
                    </TouchableOpacity>
                </View>
            </View>
       </View>
       <View style={styles.Body}>

       </View>
   </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        backgroundColor:'#2F4F4F',
    },
    Header:{
        flex:1, 
        flexDirection:'row',
        backgroundColor:'#FFF'       
    },
    HeaderImage:{
        paddingTop: '10%',
        paddingLeft: '5%'
    },
    Image:{
        height: 120,
        width: 120,
    },
    BtnImage:{
        bottom: 90,
        right: 10,
        position:'absolute'
    },
    HeaderText:{
        width: '70%',
        top: '5%',
    },
    Inputs:{
        width:'75%',
        borderBottomWidth:1,
        borderColor: '#000',
        height:25,    
        borderRadius:5,
        left: 15,        
        color:'#2F4F4F',
        fontSize:12,           
    },
    BtnProfile:{
        flexDirection:'row',
        width:'100%',
        top: 15,
        right: 55,
        justifyContent:'flex-end',
        
    },
    Body:{
        flex:2.25,
        backgroundColor:'#2F4F4F'
    },

})
