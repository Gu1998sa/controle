import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, StatusBar, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

const Forgot =({}) => {
    const navigation = useNavigation();
    const[email, setEmail] = useState('')
    const[cpf, setCpf] = useState('')
    const[token, setToken] = useState('')
 return (
   <View style={styles.Container}>
       <StatusBar  backgroundColor = '#2F4F4F'/>
       <View style={styles.Body}>
            <Animatable.View delay={600} animation="fadeInLeft" style={styles.ContainerBody}>
                <TouchableOpacity onPress={() => navigation.navigate('Auth')}>
                    <MaterialCommunityIcons
                        name="arrow-left-circle"
                        size={35} 
                        color="#2F4F4F"
                    />
                </TouchableOpacity>
                <Text style={styles.TextBody}>Redefinir senha de acesso</Text>
            </Animatable.View>
       </View>
       <View style={styles.Forms}>
       <Text style={{top: '10%', left: 30, color: '#FFF', fontSize:15, fontWeight: 'bold'}} >Email</Text>
        <View style={styles.IconEmail}>
                <Animatable.View delay={600} animation="fadeInLeft"View style={{top:10}}>
                    <MaterialCommunityIcons
                        name="email"
                        size={25} 
                        color="#FFF"

                    />
                </Animatable.View>
                <TextInput
                style={styles.Inputs}
                placeholder='Ex: contato@domino.com'
                placeholderTextColor='#FFF'
                autoCorret={false}
                onChangeText={(texto) => setEmail(texto)}
                multiline={false}
                value={email}
                />
        </View>
        <Text style={{top: '3%', left: 30, color: '#FFF', fontSize:15, fontWeight: 'bold'}} >CPF</Text>
        <View style={styles.IconCpf}>
                <Animatable.View delay={600} animation="fadeInLeft"View style={{top:10}}>
                    <MaterialCommunityIcons
                        name="card-account-details"
                        size={25} 
                        color="#FFF"

                    />
                </Animatable.View>
                <TextInput
                style={styles.Inputs}
                placeholder='Ex: 12365478901'
                placeholderTextColor='#FFF'
                autoCorret={false}
                onChangeText={(texto) => setCpf(texto)}
                multiline={false}
                value={cpf}
                keyboardType="number-pad"
                />
        </View>
        <View style={{paddingLeft:'5%',width:'100%'}}>
            <Text style={{textAlign:'center', color:'#FFF', fontWeight:'bold', paddingTop:'10%', width:'100%'}}> Você tambem pode redefir a sua senha, preenchendo apenas o seu token. </Text>
        </View>
        <Text style={{top: '3%', left: 30, color: '#FFF', fontSize:15, fontWeight: 'bold'}} >Token</Text>
        <View style={styles.IconToken}>
                <Animatable.View delay={600} animation="fadeInLeft"View style={{top:10}}>
                    <MaterialCommunityIcons
                        name="script-text-key"
                        size={25}                         
                        color="#FFF"

                    />
                </Animatable.View>
                <TextInput
                style={styles.Inputs}
                placeholder='Ex: 1asd3d-543dasd-7849ras'
                placeholderTextColor='#FFF'
                autoCorret={false}
                onChangeText={(texto) => setToken(texto)}
                multiline={false}
                value={token}                
                />
        </View>
        <Animatable.View delay={600} animation="fadeInLeft" style={styles.BtnReset} >
            <TouchableOpacity>
                <Text style={styles.TextReset}> Redefinir </Text>
            </TouchableOpacity> 
        </Animatable.View>    
       </View>

   </View>
  );
}

export default Forgot;

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'#FFF'
    },
    Body:{
        flex:0.5,
        top:15,
    },
    ContainerBody:{
        flexDirection:'row',
        paddingLeft:'5%',
        paddingTop: '10%',
    },
    TextBody:{                        
        paddingLeft:'10%', 
        paddingTop:'1%', 
        fontWeight:'bold', 
        fontSize:18,
        color:'#2F4F4F'
    },
    Forms:{
        flex:2.5,
        backgroundColor:'#2F4F4F',
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        paddingStart:'5%',
        paddingEnd:'5%',
    },
    IconEmail:{
        flexDirection:'row', 
        alignItems:'center',
        paddingTop:'15%',
    },
    IconCpf:{
        flexDirection:'row', 
        alignItems:'center',
    },
    IconToken:{
        flexDirection:'row', 
        alignItems:'center',
    },
    Inputs:{
        width:'90%',
        borderBottomWidth:1,
        borderColor:'#FFF',
        height:45,    
        borderRadius:5,
        marginTop:'5%',
        padding:10,
        color:'#FFF',
        fontSize:14,    
    },
    BtnReset:{
        position:'absolute',
        backgroundColor:'#FFF',
        borderRadius:30,
        paddingVertical: 8,
        width:'60%',
        alignSelf:'center',
        bottom:'10%',
        alignItems:'center',
        justifyContent:'center',
    },
    TextReset:{
        fontWeight:'bold',
        fontSize:15,
        color:'#2F4F4F'

    },

})