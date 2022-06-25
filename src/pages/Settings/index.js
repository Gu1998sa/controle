import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Switch, FlatList, SafeAreaView } from 'react-native';
import Dialog, {DialogTitle, DialogContent, SlideAnimation, DialogFooter, DialogButton, } from 'react-native-popup-dialog';
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { Picker } from '@react-native-picker/picker'
import AppIntroSlider from 'react-native-app-intro-slider';

const Settings = ({}) => {
    const[thema, setThema] = useState(false);
    const[receberEmail, setReceberEmail] = useState(true)
    const[receberSMS, setReceberSMS] = useState(true)
    const[receberWhatsApp, setReceberWhatsApp] = useState(true)

    const toggleSwitchThema = () => {
        setThema(previousState => !previousState)
    };

    const toggleSwitchEmail = () => {
        setReceberEmail(previousState => !previousState)
    };

    const toggleSwitchSMS = () => {
        setReceberSMS(previousState => !previousState)        
        if(receberSMS != false){            
            alert('Teste')            
        }else{
            alert('Ativo')            
        }
    };

    const toggleSwitchWhatsApp = () => {
        setReceberWhatsApp(previousState => !previousState)
    };

 return (
   <View style={styles.Container}>
        <TouchableOpacity style={{backgroundColor: '#2f4f4f', width: '100%', marginTop: '2%', height: 30}} >
            <View style={{flexDirection:'row', width:'100%', marginLeft: 20}}>
                <MaterialCommunityIcons
                    name='poll'
                    size={25}
                    color="#FFF"                    
                />
                <Text style={{fontSize: 15, marginLeft: 20, fontWeight:'bold', color:"#FFF" }}>
                    Relatórios
                </Text>
            </View>
                <Text style={{fontSize: 10, marginLeft: 65,color:"#FFF", bottom: 10 }}>
                    Ajustes os parametros, como desejar, para visualização dos relatorios.
                </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor: '#2f4f4f', width: '100%', marginTop: '2%', height: 30}} >
            <View style={{flexDirection:'row', width:'100%', marginLeft: 20}}>
                <MaterialCommunityIcons
                    name='alarm'
                    size={25}
                    color="#FFF"                    
                />
                <Text style={{fontSize: 15, marginLeft: 20, fontWeight:'bold', color:"#FFF" }}>
                    Notificações
                </Text>
            </View>
                <Text style={{fontSize: 12, marginLeft: 65,color:"#FFF", bottom: 10 }}>
                    Ative notificações adicionais no seu aplicativo.
                </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor: '#2f4f4f', width: '100%', marginTop: '2%', height: 30}} >
            <View style={{flexDirection:'row', width:'100%', marginLeft: 20}}>
                <MaterialCommunityIcons
                    name='badge-account-horizontal-outline'
                    size={25}
                    color="#FFF"                    
                />
                <Text style={{fontSize: 15, marginLeft: 20, fontWeight:'bold', color:"#FFF" }}>
                    Personalidade financeira
                </Text>
            </View>
                <Text style={{fontSize: 12, marginLeft: 65,color:"#FFF", bottom: 10 }}>
                    Ajuste sua personalidade, a hora que quiser. 
                </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor: '#2f4f4f', width: '100%', marginTop: '2%', height: 30}} >
            <View style={{flexDirection:'row', width:'100%', marginLeft: 20}}>
                <MaterialCommunityIcons
                    name='finance'
                    size={25}
                    color="#FFF"                    
                />
                <Text style={{fontSize: 15, marginLeft: 20, fontWeight:'bold', color:"#FFF" }}>
                    Definir objetivos
                </Text>
            </View>
                <Text style={{fontSize: 12, marginLeft: 65,color:"#FFF", bottom: 10 }}>
                    Defina objetivos, e metas a alcançar, a longo e curto prazo.
                </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor: '#2f4f4f', width: '100%', marginTop: '2%', height: 30}} >
            <View style={{flexDirection:'row', width:'100%', marginLeft: 20}}>
                <MaterialCommunityIcons
                    name='form-textbox-password'
                    size={25}
                    color="#FFF"                    
                />
                <Text style={{fontSize: 15, marginLeft: 20, fontWeight:'bold', color:"#FFF" }}>
                    Alterar senha
                </Text>
            </View>
                <Text style={{fontSize: 12, marginLeft: 65,color:"#FFF", bottom: 10 }}>
                    Altere sua senha de acesso ao aplicativo.
                </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor: '#2f4f4f', width: '100%', marginTop: '2%', height: 30}} >
            <View style={{flexDirection:'row', width:'100%', marginLeft: 20}}>
                <MaterialCommunityIcons
                    name='script-text-key'
                    size={25}
                    color="#FFF"                    
                />
                <Text style={{fontSize: 15, marginLeft: 20, fontWeight:'bold', color:"#FFF" }}>
                    Token
                </Text>
            </View>
                <Text style={{fontSize: 12, marginLeft: 65,color:"#FFF", bottom: 10 }}>
                    Crie um token exclusivo, e o utilize para realizar seu login.
                </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor: '#2f4f4f', width: '100%', marginTop: '2%', height: 30}} >
            <View style={{flexDirection:'row', width:'100%', marginLeft: 20}}>
                <MaterialCommunityIcons
                    name='file-swap-outline'
                    size={25}
                    color="#FFF"                    
                />
                <Text style={{fontSize: 15, marginLeft: 20, fontWeight:'bold', color:"#FFF" }}>
                    Vincular contas
                </Text>
            </View>
                <Text style={{fontSize: 10, marginLeft: 65,color:"#FFF", bottom: 10 }}>
                    Vincule sua conta, a de outra pessoa, para juntar as despesas e receitas.
                </Text>
        </TouchableOpacity>

        <View style={{backgroundColor: '#2f4f4f', width: '100%', marginTop: '2%' }} >
            <View style={{flexDirection:'row', width:'100%', marginLeft: 20}}>
                <MaterialCommunityIcons
                    name='whatsapp'
                    size={25}
                    color="#FFF"                    
                />
                <Text style={{fontSize: 18, marginLeft: 20, fontWeight:'bold', color:"#FFF" }}>
                    WhatsApp
                </Text>
                <View style={styles.Thema}>                    
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={receberWhatsApp ? "#CBDF90" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitchWhatsApp}
                        value={receberWhatsApp}
                        style={{bottom:12}}
                        />
                    
                </View>
            </View>
                <Text style={{fontSize: 12, marginLeft: 65,color:"#FFF" }}>
                    Permitir o recebimento de contato via WhatsApp.
                </Text>
        </View>

        <View style={{backgroundColor: '#2f4f4f', width: '100%', marginTop: '2%' }} >
            <View style={{flexDirection:'row', width:'100%', marginLeft: 20}}>
                <MaterialCommunityIcons
                    name='email-outline'
                    size={25}
                    color="#FFF"                    
                />
                <Text style={{fontSize: 18, marginLeft: 20, fontWeight:'bold', color:"#FFF" }}>
                    E-mail
                </Text>
                <View style={styles.Thema}>                    
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={receberEmail ? "#CBDF90" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitchEmail}
                        value={receberEmail}
                        style={{bottom:12}}
                        />
                    
                </View>
            </View>
                <Text style={{fontSize: 12, marginLeft: 65,color:"#FFF" }}>
                    Permitir o recebimento de contato via E-mail.
                </Text>
        </View>


        <View style={{backgroundColor: '#2f4f4f', width: '100%', marginTop: '2%' }} >
            <View style={{flexDirection:'row', width:'100%', marginLeft: 20}}>
                <MaterialCommunityIcons
                    name='message-alert-outline'
                    size={25}
                    color="#FFF"                    
                />
                <Text style={{fontSize: 18, marginLeft: 20, fontWeight:'bold', color:"#FFF" }}>
                    SMS
                </Text>
                <View style={styles.Thema}>                    
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={receberSMS ? "#CBDF90" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitchSMS}
                        value={receberSMS}
                        style={{bottom:12}}

                        />
                    
                </View>
            </View>
                <Text style={{fontSize: 12, marginLeft: 65,color:"#FFF" }}>
                Permitir o recebimento de contato via SMS.
                </Text>
        </View>

        <View style={{backgroundColor: '#2f4f4f', width: '100%', marginTop: '2%' }} >
            <View style={{flexDirection:'row', width:'100%', marginLeft: 20}}>
                <MaterialCommunityIcons
                    name='weather-night-partly-cloudy'
                    size={25}
                    color="#FFF"                    
                />
                <Text style={{fontSize: 18, marginLeft: 20, fontWeight:'bold', color:"#FFF" }}>
                    Tema
                </Text>
                <View style={styles.Thema}>
                    <Text style={{top:'2%', fontWeight:'600', color:'#FFF'}}> Tema escuro </Text>          
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={thema ? "#CBDF90" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitchThema}
                        value={thema}
                        style={{bottom:12}}     
                                        
                        />
                    
                </View>
            </View>
                <Text style={{fontSize: 12, marginLeft: 65,color:"#FFF" }}>
                    Defina o tema preferido, para utilizar no aplicativo.
                </Text>
        </View>

        <TouchableOpacity style={{backgroundColor: '#B22', width: '100%', height: 30, position: 'absolute', bottom:0.5}} >
            <View style={{flexDirection:'row', width:'100%', marginLeft: 15}}>
                <MaterialCommunityIcons
                    name='delete'
                    size={20}
                    color="#FFF"                    
                />
                <Text style={{fontSize: 13, marginLeft: 20, fontWeight:'bold', color:"#FFF" }}>
                    Excluir conta
                </Text>
            </View>
                <Text style={{fontSize: 10, marginLeft: 55,color:"#FFF", bottom: 5 }}>
                    Realize a exclusão da sua conta, operação irreversível.
                </Text>
        </TouchableOpacity>
        
   </View>
  );
}

export default Settings;

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        alignItems:'flex-start',
        width:'100%', 
        backgroundColor: '#FFF'       
    },
    Thema:{
        position: 'absolute',
        right: 20,        
        flexDirection:'row',        
    },
})