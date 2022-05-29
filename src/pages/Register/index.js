import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, StatusBar, TextInput, Switch } from 'react-native';
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

const Register = ({}) => {
    const navigation = useNavigation();
    const[email, setEmail] = useState('')
    const[cpf, setCpf] = useState('')
    const[nome, setNome] = useState('')
    const[telefone, setTelefone] = useState('')
    const[receberEmail, setReceberEmail] = useState(true)
    const[receberSMS, setReceberSMS] = useState(false)
    const[receberWhatsApp, setReceberWhatsApp] = useState(false)
    const[consentimento, setConsentimento] = useState(false)

    const toggleSwitchEmail = () => setReceberEmail(previousState => !previousState);
    const toggleSwitchSMS = () => setReceberSMS(previousState => !previousState);
    const toggleSwitchWhatsApp = () => setReceberWhatsApp(previousState => !previousState);
    const toggleSwitchConsentimento = () => setConsentimento(previousState => !previousState);
 return (
   <View style={styles.Container}>
    <StatusBar  backgroundColor = "#8B008B"/>
       <Animatable.View delay={600} animation="fadeInLeft" style={styles.Body}>
           <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{paddingLeft:'2%'}} onPress={() => navigation.navigate('Auth')}>
                    <MaterialCommunityIcons
                        name="arrow-left-circle"
                        size={35} 
                        color="#F5DEB3"
                    />      
                </TouchableOpacity>
            <Text style={styles.Title}>Cadastre-se</Text>
           </View>
           <Text style={styles.Text} >Preencha os dados abaixo, e realize seu cadastro gratuitamente.</Text>
       </Animatable.View>
       <View style={styles.ContainerForm}>
        <View style={styles.Forms}>
           <View style={styles.IconNome}>
                <Animatable.View delay={600} animation="fadeInLeft"View style={{top:10}}>
                    <MaterialCommunityIcons
                        name="account-box"
                        size={25} 
                        color="black"

                    />
                </Animatable.View>
                <TextInput
                style={styles.Inputs}
                placeholder='Nome:'
                autoCorret={false}
                onChangeText={(texto) => setNome(texto)}
                multiline={false}
                value={nome}
                />
            </View>
            <View style={styles.IconTelefone}>
                <Animatable.View delay={600} animation="fadeInLeft"View style={{top:10}}>
                    <MaterialCommunityIcons
                        name="card-account-phone"
                        size={25} 
                        color="black"

                    />
                </Animatable.View>
                <TextInput
                style={styles.Inputs}
                placeholder='Telefone:'
                autoCorret={false}
                onChangeText={(texto) => setTelefone(texto)}
                multiline={false}
                value={telefone}
                keyboardType="number-pad"
                />
            </View>   
            <View style={styles.IconEmail}>
                <Animatable.View delay={600} animation="fadeInLeft"View style={{top:10}}>
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
            <View style={styles.IconCpf}>
                <Animatable.View delay={600} animation="fadeInLeft"View style={{top:10}}>
                    <MaterialCommunityIcons
                        name="card-account-details"
                        size={25} 
                        color="black"

                    />
                </Animatable.View>
                <TextInput
                style={styles.Inputs}
                placeholder='CPF:'
                autoCorret={false}
                onChangeText={(texto) => setCpf(texto)}
                multiline={false}
                value={cpf}
                keyboardType="number-pad"
                />
            </View>
            <View style={styles.ReceberEmail}>          
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={receberEmail ? "#CBDF90" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitchEmail}
                    value={receberEmail}
                    />
                   <Text style={{top:'3.5%', fontWeight:'bold', color:'#8B008B'}}> Permitir o recebimento de contato via E-mails </Text>
            </View>
            <View style={styles.ReceberSMS}>          
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={receberSMS ? "#CBDF90" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitchSMS}
                    value={receberSMS}
                    />
                   <Text style={{top:'3.5%', fontWeight:'bold', color:'#8B008B'}}> Permitir o recebimento de contato via SMS</Text>
            </View>
            <View style={styles.ReceberWhatsApp}>          
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={receberWhatsApp ? "#CBDF90" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitchWhatsApp}
                    value={receberWhatsApp}
                    />
                   <Text style={{top:'3.5%', fontWeight:'bold', color:'#8B008B'}}> Permitir o recebimento de contato via WhatsApp</Text>
            </View>

            <View style={styles.ReceberTermos}>          
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={consentimento ? "#CBDF90" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitchConsentimento}
                    value={consentimento}
                    />
                    <View style={{top:2, flexDirection:'row'}}>
                    <Text style={{top:'3.5%', fontWeight:'bold', color:'#8B008B'}}> Aceito os </Text>
                    <TouchableOpacity style={{top:9}}>
                        <Text style={{top:'3.5%', fontWeight:'bold', color:'#81b0ff'}}> termos e politicas </Text>
                    </TouchableOpacity>                    
                    <Text style={{top:'3.5%', fontWeight:'bold', color:'#8B008B'}}> de uso do aplicativo</Text>
                    </View>                   
            </View>        
           </View>
            <Animatable.View delay={600} animation="fadeInLeft" style={styles.FooterBtn}>
                <TouchableOpacity style={styles.Btn}>
                    <Text style={styles.BtnText}>
                        Cadastrar-se
                    </Text>
                </TouchableOpacity>
            </Animatable.View>
       </View>
   </View>
  );
}

export default Register;

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'#8B008B'
    },
    Body:{
        flex:0.5,
        top:15,
    },
    Title:{
        top:1,
        paddingLeft:'2%',
        fontWeight:'bold',
        fontSize:21,
        color:'#F5DEB3'
    },
    Text:{
        width:'75%',
        left:'12%',
        fontSize:13,
        textAlign:'center',
        top:'10%',
        color:'#F5DEB3',
        fontWeight:'bold'
    },  
    ContainerForm:{   
        flex:2.5,
        backgroundColor:'#F5DEB3',
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        paddingStart:'5%',
        paddingEnd:'5%',
    },
    IconNome:{
        paddingTop:'10%',
        flexDirection:'row', 
        alignItems:'center',
    },
    IconTelefone:{
        flexDirection:'row', 
        alignItems:'center',
    },
    IconEmail:{
        flexDirection:'row', 
        alignItems:'center',
    },
    IconCpf:{
        flexDirection:'row', 
        alignItems:'center',
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
    ReceberEmail:{
        flexDirection:'row',
        top:'5%',
    },
    ReceberSMS:{
        flexDirection:'row',
    },
    ReceberWhatsApp:{
        flexDirection:'row',
        bottom:'5%'
    },
    ReceberTermos:{
        flexDirection:'row',
        bottom:'10%'
    },
    FooterBtn:{
        justifyContent:'center',
        alignItems:'center',        
    },
    Btn:{
        width:'75%',
        backgroundColor:'#8B008B',
        borderRadius:30,
        height:30,
        alignItems:'center',
        justifyContent:'center',        
    },
    BtnText:{
        color:'#F5DEB3',
        fontWeight:'bold',
    }

})