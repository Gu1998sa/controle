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
    const [checkedFive, setCheckedFive] = useState('');

    function BackQuestion(){
        if(count != 0){
            setCount(count - 1)
        }
    }
    function NextQuestion(){
        if(count >= 0 && count != 4){
            setCount(count + 1)
        }
    }
    function IrHome(){
        navigation.navigate('Home')
    }

 return (
   <View style={styles.Container}>
         <StatusBar  backgroundColor = "#FFF" barStyle="dark-content"/>
       <Animatable.View delay={600} animation="fadeInLeft" style={styles.ContainerHeader}>
            <Text style={styles.TitlePerfil}>
                Vamos definir sua personalidade financeira?
            </Text>
            <Text style={styles.TextPerfil}>
                Faremos algums perguntas basicas para determinar o seu perfil financeiro, caso prefira voce pode definir seu perfil posteriormente, basta clicar em pular.
            </Text>
            <TouchableOpacity style={{position:'absolute', right:20, top: '75%'}} onPress={() => navigation.navigate('Home')}>
                <Text style={{fontWeight:'bold', color:'#2F4F4F'}}>
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
                            color='#FFF'
                        />
                        <Text style={{color:'#FFF'}}>
                            Opto por fazer um empréstimo em uma agência bancária, porém pesquiso a melhor taxa de juros. 
                        </Text>
                    </View>
                    <View style={{flexDirection:'row', top:'10%'}}>
                        <RadioButton
                            value="second"
                            status={ checked === 'second' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('second')}
                            color='#FFF'
                        />
                        <Text style={{color:'#FFF'}}>
                            Procuro fazer um empréstimo com um familiar, para facilitar o pagamento desta divida posteriormente.
                        </Text>
                    </View>
                    <View style={{flexDirection:'row', top:'13%'}}>
                        <RadioButton
                            value="tree"
                            status={ checked === 'tree' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('tree')}
                            color='#FFF'
                        />
                        <Text style={{color:'#FFF'}}>
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
                        color='#FFF'
                    />
                    <Text style={{color:'#FFF'}}>
                        Opto por fazer um empréstimo em uma agência bancária, porém pesquiso a melhor taxa de juros. 
                    </Text>
                </View>
                <View style={{flexDirection:'row', top:'10%'}}>
                   <RadioButton
                        value="second"
                        status={ checkedSecond === 'second' ? 'checked' : 'unchecked' }
                        onPress={() => setCheckedSecond('second')}
                        color='#FFF'
                    />
                    <Text style={{color:'#FFF'}}>
                        Procuro fazer um empréstimo com um familiar, para facilitar o pagamento desta divida posteriormente.
                    </Text>
                </View>
                <View style={{flexDirection:'row', top:'13%'}}>
                    <RadioButton
                        value="tree"
                        status={ checkedSecond === 'tree' ? 'checked' : 'unchecked' }
                        onPress={() => setCheckedSecond('tree')}
                        color='#FFF'
                    />
                   <Text style={{color:'#FFF'}}>
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
                        color='#FFF'
                    />
                    <Text style={{color:'#FFF'}}>
                        Opto por fazer um empréstimo em uma agência bancária, porém pesquiso a melhor taxa de juros. 
                    </Text>
                </View>
                <View style={{flexDirection:'row', top:'10%'}}>
                    <RadioButton
                        value="second"
                        status={ checkedTree === 'second' ? 'checked' : 'unchecked' }
                        onPress={() => setCheckedTree('second')}
                        color='#FFF'
                    />
                    <Text style={{color:'#FFF'}}>
                        Procuro fazer um empréstimo com um familiar, para facilitar o pagamento desta divida posteriormente.
                    </Text>
                </View>
                <View style={{flexDirection:'row', top:'13%'}}>
                    <RadioButton
                        value="tree"
                        status={ checkedTree === 'tree' ? 'checked' : 'unchecked' }
                        onPress={() => setCheckedTree('tree')}
                        color='#FFF'
                    />
                    <Text style={{color:'#FFF'}}>
                        Recorro a utilização de um cartão de credito, como meio de pagamento desta divida.
                    </Text>
                </View>
            </View>
            : count == 3 ?
            <View style={styles.Forms} >
                <Text style={styles.Questao}>
                4. Uma conta surge de forma inesperada, seu mês ja esta contado, o que voçê faz?
                </Text>
                <View style={{flexDirection:'row', top:'5%'}}>
                    <RadioButton
                        value="first"
                        status={ checkedFour === 'first' ? 'checked' : 'unchecked' }
                        onPress={() => setCheckedFour('first')}
                        color='#FFF'
                    />
                    <Text style={{color:'#FFF'}}>
                        Opto por fazer um empréstimo em uma agência bancária, porém pesquiso a melhor taxa de juros. 
                    </Text>
                </View>
                <View style={{flexDirection:'row', top:'10%'}}>
                    <RadioButton
                        value="second"
                        status={ checkedFour === 'second' ? 'checked' : 'unchecked' }
                        onPress={() => setCheckedFour('second')}
                        color='#FFF'
                    />
                    <Text style={{color:'#FFF'}}>
                        Procuro fazer um empréstimo com um familiar, para facilitar o pagamento desta divida posteriormente.
                    </Text>
                </View>
                <View style={{flexDirection:'row', top:'13%'}}>
                    <RadioButton
                        value="tree"
                        status={ checkedFour === 'tree' ? 'checked' : 'unchecked' }
                        onPress={() => setCheckedFour('tree')}
                        color='#FFF'
                    />
                    <Text style={{color:'#FFF'}}>
                        Recorro a utilização de um cartão de credito, como meio de pagamento desta divida.
                    </Text>
                </View>
            </View>
            :
            <View style={styles.Forms} >
                <Text style={styles.Questao}>
                5. Uma conta surge de forma inesperada, seu mês ja esta contado, o que voçê faz?
                </Text>
                <View style={{flexDirection:'row', top:'5%'}}>
                    <RadioButton
                        value="first"
                        status={ checkedFive === 'first' ? 'checked' : 'unchecked' }
                        onPress={() => setCheckedFive('first')}
                        color='#FFF'
                    />
                    <Text style={{color:'#FFF'}}>
                        Opto por fazer um empréstimo em uma agência bancária, porém pesquiso a melhor taxa de juros. 
                    </Text>
                </View>
                <View style={{flexDirection:'row', top:'10%'}}>
                    <RadioButton
                        value="second"
                        status={ checkedFive === 'second' ? 'checked' : 'unchecked' }
                        onPress={() => setCheckedFive('second')}
                        color='#FFF'
                    />
                    <Text style={{color:'#FFF'}}>
                        Procuro fazer um empréstimo com um familiar, para facilitar o pagamento desta divida posteriormente.
                    </Text>
                </View>
                <View style={{flexDirection:'row', top:'13%'}}>
                    <RadioButton
                        value="tree"
                        status={ checkedFive === 'tree' ? 'checked' : 'unchecked' }
                        onPress={() => setCheckedFive('tree')}
                        color='#FFF'
                    />
                    <Text style={{color:'#FFF'}}>
                        Recorro a utilização de um cartão de credito, como meio de pagamento desta divida.
                    </Text>
                </View>
            </View>
           }
           <View style={{top:'15%'}}>
                <ProgressBar progress={count / 4 } color='#FFF' />
                <Text style={{textAlign:'center', fontWeight:'bold', fontSize:14, color:'#FFF'}} > {count == 0 ? '0%' : count == 1 ? '25%' : count == 2 ? '50%' : count == 3 ? '75%' : '100%'  }  </Text>
           </View>
           <View style={styles.Button}>
            <View style={{top:100}}>
                <TouchableOpacity style={ {flexDirection:'row'}} onPress={() => BackQuestion()}>
                <MaterialCommunityIcons
                    name="arrow-left"
                    size={25} 
                    color="#FFF"
                />
                    <Text style={{top:'3%', color:'#FFF', fontWeight:'bold', left:'10%'}}>Anterior</Text>
                </TouchableOpacity>
            </View>
            <View style={{top:100}}> 
            {count < 4 ?
                <TouchableOpacity style={{ flexDirection:'row'}} onPress={() => NextQuestion()}>
                    <Text style={{top:'3%', color:'#FFF', fontWeight:'bold', right:'10%'}}>                    
                        Proximo
                    </Text>
                    <MaterialCommunityIcons
                        name="arrow-right"
                        size={25} 
                        color="#FFF"
                    />
                </TouchableOpacity>
            :
                <TouchableOpacity style={{ flexDirection:'row'}} onPress={() => IrHome()}>
                     <Text style={{top:'3%', color:'#FFF', fontWeight:'bold', right:'10%'}}>                    
                        Concluir
                    </Text>
                    <MaterialCommunityIcons
                        name="check"
                        size={25} 
                        color="#FFF"
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
        backgroundColor:'#FFF'
    },
    ContainerHeader:{
        flex:1,
        
    },
    TitlePerfil:{
        paddingTop:'15%',
        fontWeight:'bold',
        fontSize:14,
        paddingLeft:'3%',
        color:'#2F4F4F'
        
    },
    TextPerfil:{
        paddingTop: '2%',
        textAlign:'center',
        fontSize:10,
        fontWeight:'bold',
        color:'#2F4F4F'
    },
    ContainerForm:{
        flex:3.5,
        backgroundColor:'#2F4F4F',
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        paddingStart:'5%',
        paddingEnd:'5%',  
        paddingTop:'15%'  
    },
    Questao:{
        fontWeight:'bold',
        color:'#FFF',
        fontSize:17,
    },
    Button:{
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row'
    }

})