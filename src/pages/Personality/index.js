import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, StatusBar, Image } from 'react-native';
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'
import { RadioButton, ProgressBar, Colors } from 'react-native-paper';
import {MaterialCommunityIcons} from '@expo/vector-icons'

const Personality =({}) => {
    const navigation = useNavigation();
    const [count, setCount] = useState(0);
    const [checked, setChecked] = useState('');
    const [checkedSecond, setCheckedSecond] = useState('');
    const [checkedTree, setCheckedTree] = useState('');
    const [checkedFour, setCheckedFour] = useState('');

    function BackQuestion(){
        if(count != 0){
            setCount(count - 1)
        }
    }
    function NextQuestion(){
        if(count >= 0 && count != 3){
            setCount(count + 1)
        }
    }
    function IrHome(){
        navigation.navigate('Home')
    }

 return (
   <View style={styles.Container}>
       <Animatable.View delay={600} animation="fadeInLeft" style={styles.ContainerHeader}>
            <Text style={styles.TitlePerfil}>
                Vamos definir sua personalidade financeira?
            </Text>
            <Text style={styles.TextPerfil}>
                Faremos algums perguntas basicas para determinar o seu perfil financeiro, caso prefira voce pode definir seu perfil posteriormente, basta clicar em pular.
            </Text>
            <TouchableOpacity style={{position:'absolute', right:20, top: '75%'}}>
                <Text style={{fontWeight:'bold'}}>
                    Pular
                </Text>
            </TouchableOpacity>
       </Animatable.View>
       <Animatable.View delay={600} animation="fadeInUp" style={styles.ContainerForm}>
           {count === 0 ?
                <View style={styles.Forms} >
                    <Text style={styles.Questao}>
                       1. Uma conta surge de forma inesperada, seu mês ja esta contado, o que voçê faz?
                    </Text>
                    <View style={{flexDirection:'row', top:'5%'}}>
                        <RadioButton
                            value="first"
                            status={ checked === 'first' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('first')}
                            color='#F5DEB3'
                        />
                        <Text style={{color:'#F5DEB3'}}>
                            Opto por fazer um empréstimo em uma agência bancária, porém pesquiso a melhor taxa de juros. 
                        </Text>
                    </View>
                    <View style={{flexDirection:'row', top:'10%'}}>
                        <RadioButton
                            value="second"
                            status={ checked === 'second' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('second')}
                            color='#F5DEB3'
                        />
                        <Text style={{color:'#F5DEB3'}}>
                            Procuro fazer um empréstimo com um familiar, para facilitar o pagamento desta divida posteriormente.
                        </Text>
                    </View>
                    <View style={{flexDirection:'row', top:'13%'}}>
                        <RadioButton
                            value="tree"
                            status={ checked === 'tree' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('tree')}
                            color='#F5DEB3'
                        />
                        <Text style={{color:'#F5DEB3'}}>
                            Recorro a utilização de um cartão de credito, como meio de pagamento desta divida.
                        </Text>
                    </View>
                </View>
            : count == 1 ?
            <View style={styles.Forms} >
                <Text style={styles.Questao}>
                2. Uma conta surge de forma inesperada, seu mês ja esta contado, o que voçê faz?
                </Text>
                <View style={{flexDirection:'row', top:'5%'}}>
                    <RadioButton
                        value="first"
                        status={ checkedSecond === 'first' ? 'checked' : 'unchecked' }
                        onPress={() => setCheckedSecond('first')}
                        color='#F5DEB3'
                    />
                    <Text style={{color:'#F5DEB3'}}>
                        Opto por fazer um empréstimo em uma agência bancária, porém pesquiso a melhor taxa de juros. 
                    </Text>
                </View>
                <View style={{flexDirection:'row', top:'10%'}}>
                   <RadioButton
                        value="second"
                        status={ checkedSecond === 'second' ? 'checked' : 'unchecked' }
                        onPress={() => setCheckedSecond('second')}
                        color='#F5DEB3'
                    />
                    <Text style={{color:'#F5DEB3'}}>
                        Procuro fazer um empréstimo com um familiar, para facilitar o pagamento desta divida posteriormente.
                    </Text>
                </View>
                <View style={{flexDirection:'row', top:'13%'}}>
                    <RadioButton
                        value="tree"
                        status={ checkedSecond === 'tree' ? 'checked' : 'unchecked' }
                        onPress={() => setCheckedSecond('tree')}
                        color='#F5DEB3'
                    />
                   <Text style={{color:'#F5DEB3'}}>
                        Recorro a utilização de um cartão de credito, como meio de pagamento desta divida.
                    </Text>
                </View>
            </View>
            : count == 2 ?
            <View style={styles.Forms} >
                <Text style={styles.Questao}>
                3. Uma conta surge de forma inesperada, seu mês ja esta contado, o que voçê faz?
                </Text>
                <View style={{flexDirection:'row', top:'5%'}}>
                    <RadioButton
                        value="first"
                        status={ checkedTree === 'first' ? 'checked' : 'unchecked' }
                        onPress={() => setCheckedTree('first')}
                        color='#F5DEB3'
                    />
                    <Text style={{color:'#F5DEB3'}}>
                        Opto por fazer um empréstimo em uma agência bancária, porém pesquiso a melhor taxa de juros. 
                    </Text>
                </View>
                <View style={{flexDirection:'row', top:'10%'}}>
                    <RadioButton
                        value="second"
                        status={ checkedTree === 'second' ? 'checked' : 'unchecked' }
                        onPress={() => setCheckedTree('second')}
                        color='#F5DEB3'
                    />
                    <Text style={{color:'#F5DEB3'}}>
                        Procuro fazer um empréstimo com um familiar, para facilitar o pagamento desta divida posteriormente.
                    </Text>
                </View>
                <View style={{flexDirection:'row', top:'13%'}}>
                    <RadioButton
                        value="tree"
                        status={ checkedTree === 'tree' ? 'checked' : 'unchecked' }
                        onPress={() => setCheckedTree('tree')}
                        color='#F5DEB3'
                    />
                    <Text style={{color:'#F5DEB3'}}>
                        Recorro a utilização de um cartão de credito, como meio de pagamento desta divida.
                    </Text>
                </View>
            </View>
            :
            <View style={styles.Forms} >
                <Text style={styles.Questao}>
                4. Uma conta surge de forma inesperada, seu mês ja esta contado, o que voçê faz?
                </Text>
                <View style={{flexDirection:'row', top:'5%'}}>
                    <RadioButton
                        value="first"
                        status={ checkedFour === 'first' ? 'checked' : 'unchecked' }
                        onPress={() => setCheckedFour('first')}
                        color='#F5DEB3'
                    />
                    <Text style={{color:'#F5DEB3'}}>
                        Opto por fazer um empréstimo em uma agência bancária, porém pesquiso a melhor taxa de juros. 
                    </Text>
                </View>
                <View style={{flexDirection:'row', top:'10%'}}>
                    <RadioButton
                        value="second"
                        status={ checkedFour === 'second' ? 'checked' : 'unchecked' }
                        onPress={() => setCheckedFour('second')}
                        color='#F5DEB3'
                    />
                    <Text style={{color:'#F5DEB3'}}>
                        Procuro fazer um empréstimo com um familiar, para facilitar o pagamento desta divida posteriormente.
                    </Text>
                </View>
                <View style={{flexDirection:'row', top:'13%'}}>
                    <RadioButton
                        value="tree"
                        status={ checkedFour === 'tree' ? 'checked' : 'unchecked' }
                        onPress={() => setCheckedFour('tree')}
                        color='#F5DEB3'
                    />
                    <Text style={{color:'#F5DEB3'}}>
                        Recorro a utilização de um cartão de credito, como meio de pagamento desta divida.
                    </Text>
                </View>
            </View>
           }
           <View style={{top:'15%'}}>
                <ProgressBar progress={count / 3 } color='#F5DEB3' />
                <Text style={{textAlign:'center', fontWeight:'bold', fontSize:14, color:'#F5DEB3'}} > {count == 0 ? 1 : count == 1 ? 2 : count == 2 ? 3 : 4  } / 4  </Text>
           </View>
           <View style={styles.Button}>
            <View style={{top:100}}>
                <TouchableOpacity style={ {flexDirection:'row'}} onPress={() => BackQuestion()}>
                <MaterialCommunityIcons
                    name="arrow-left"
                    size={25} 
                    color="#F5DEB3"
                />
                    <Text style={{top:'3%', color:'#F5DEB3', fontWeight:'bold', left:'10%'}}>Anterior</Text>
                </TouchableOpacity>
            </View>
            <View style={{top:100}}> 
            {count < 3 ?
                <TouchableOpacity style={{ flexDirection:'row'}} onPress={() => NextQuestion()}>
                    <Text style={{top:'3%', color:'#F5DEB3', fontWeight:'bold', right:'10%'}}>                    
                        Proximo
                    </Text>
                    <MaterialCommunityIcons
                        name="arrow-right"
                        size={25} 
                        color="#F5DEB3"
                    />
                </TouchableOpacity>
            :
                <TouchableOpacity style={{ flexDirection:'row'}} onPress={() => IrHome()}>
                     <Text style={{top:'3%', color:'#F5DEB3', fontWeight:'bold', right:'10%'}}>                    
                        Concluir
                    </Text>
                    <MaterialCommunityIcons
                        name="check"
                        size={25} 
                        color="#F5DEB3"
                    />
                </TouchableOpacity>
            }                         
            </View>
           </View>
       </Animatable.View>
   </View>
  );
}
export default Personality;

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'#F5DEB3'
    },
    ContainerHeader:{
        flex:1
    },
    TitlePerfil:{
        top:'5%',
        fontWeight:'bold',
        fontSize:18,
        paddingLeft:'3%'
    },
    TextPerfil:{
        top:'20%',
        textAlign:'center',
        fontSize:12,
        fontWeight:'bold'
    },
    ContainerForm:{
        flex:3.5,
        backgroundColor:'#8B008B',
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        paddingStart:'5%',
        paddingEnd:'5%',  
        paddingTop:'15%'  
    },
    Questao:{
        fontWeight:'bold',
        color:'#F5DEB3',
        fontSize:17,
    },
    Button:{
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row'
    }

})