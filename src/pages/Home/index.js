import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, StatusBar, Image } from 'react-native';
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'
import { RadioButton, ProgressBar, Colors } from 'react-native-paper';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { Picker } from '@react-native-picker/picker'


const Home =({}) => {
    const [selectedValue, setSelectedValue] = useState("1");
    const navigation = useNavigation();
 return (
   <View style={styles.Container}>
       <View style={styles.Header}>
           <View style={{flexDirection:'row', alignItems:'center', justifyContent:'flex-start', width:'100%'}}>
               <TouchableOpacity style={{paddingLeft:'10%'}} onPress={() => navigation.openDrawer()} >
                <MaterialCommunityIcons
                    name='menu-open'
                    size={30}
                    color="#000"
                    />
               </TouchableOpacity>        
                <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: 155, marginLeft: '20%' }}
                        mode="dropdown"
                        
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Janeiro" value="1" />
                        <Picker.Item label="Fevereiro" value="2" />
                        <Picker.Item label="Março" value="3" />
                        <Picker.Item label="Abril" value="4" />
                        <Picker.Item label="Maio" value="5" />
                        <Picker.Item label="Junho" value="6" />
                        <Picker.Item label="Julho" value="7" />
                        <Picker.Item label="Agosto" value="8" />
                        <Picker.Item label="Setembro" value="9" />
                        <Picker.Item label="Outubro" value="10" />
                        <Picker.Item label="Novembro" value="11" />
                        <Picker.Item label="Dezembro" value="12" />
                        
                </Picker>
            </View>
           <View>

           </View>
       </View>
       <View style={styles.Body}>

       </View>
   </View>
  );
}

export default Home;

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'#F5DEB3'
    },
    Header:{
        flex:1,
        alignItems:'center',
        top:0
    },
    Body:{
        flex:3,
        backgroundColor:'#8B008B',
    },
})