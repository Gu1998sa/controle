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
       <StatusBar  backgroundColor = "#8B008B"/>
       <View style={styles.Body}>
            <Animatable.View delay={600} animation="fadeInLeft" style={styles.ContainerBody}>
                <TouchableOpacity onPress={() => navigation.navigate('Auth')}>
                    <MaterialCommunityIcons
                        name="arrow-left-circle"
                        size={35} 
                        color="#F5DEB3"
                    />
                </TouchableOpacity>
                <Text style={styles.TextBody}>Redefinir senha de acesso.</Text>
            </Animatable.View>
       </View>
       <View style={styles.Forms}>
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
        <View style={{paddingLeft:'5%',width:'100%'}}>
            <Text style={{textAlign:'center', color:'#8B008B', fontWeight:'bold', paddingTop:'10%', width:'100%'}}> Você tambem pode redefir a sua senha, preenchendo apenas o seu token. </Text>
        </View>
        <View style={styles.IconToken}>
                <Animatable.View delay={600} animation="fadeInLeft"View style={{top:10}}>
                    <MaterialCommunityIcons
                        name="script-text-key"
                        size={25} 
                        color="black"

                    />
                </Animatable.View>
                <TextInput
                style={styles.Inputs}
                placeholder='Token:'
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
        backgroundColor:'#8B008B'
    },
    Body:{
        flex:0.5,
        top:15,
    },
    ContainerBody:{
        flexDirection:'row',
        paddingLeft:'5%',
    },
    TextBody:{
        paddingLeft:'5%',  
        fontWeight:'bold', 
        fontSize:21,
        color:'#F5DEB3'
    },
    Forms:{
        flex:2.5,
        backgroundColor:'#F5DEB3',
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
        height:45,    
        borderRadius:5,
        marginTop:'5%',
        padding:10,
        fontWeight:'bold',
        color:'#F5DEB3',
        fontSize:14,    
    },
    BtnReset:{
        position:'absolute',
        backgroundColor:'#8B008B',
        borderRadius:30,
        paddingVertical: 8,
        width:'60%',
        alignSelf:'center',
        bottom:'30%',
        alignItems:'center',
        justifyContent:'center',
    },
    TextReset:{
        fontWeight:'bold',
        fontSize:15,
        color:'#F5DEB3'

    },

})