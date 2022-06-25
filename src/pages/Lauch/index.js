import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Button, FlatList, SafeAreaView } from 'react-native';
import Dialog, {DialogTitle, DialogContent, SlideAnimation, DialogFooter, DialogButton, } from 'react-native-popup-dialog';
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { Picker } from '@react-native-picker/picker'
import { Checkbox } from 'react-native-paper';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

const Lauch = ({}) => {

    const [dateInit, setDateInit] = useState(new Date());
    const [dateFinal, setDateFinal] = useState(new Date());
    const [selectedValue, setSelectedValue] = useState();
    const [selectedValueCard, setSelectedValueCard] = useState();
    const [checkedReceita, setCheckedReceita] = useState(true);
    const [checkedDebito, setCheckedDebito] = useState(true);
    

    var fim = false;
    var inicio = false;
    var datinit = dateInit.getMonth() + 1;
    var datfim = dateFinal.getMonth() + 1;
    

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      if(inicio==true){
        setDateInit(currentDate);
      }else if(fim==true){
          setDateFinal(currentDate);        
      }
  
    };
  
    const showMode = (currentMode) => {
      DateTimePickerAndroid.open({
        value: dateInit,
        onChange,
        mode: currentMode,
        is24Hour: true,                      
      })
    };
  
    const showDatepicker = () => {
        inicio = true;
        showMode('date');
    };


    const showModeF = (currentMode) => {      
        DateTimePickerAndroid.open({
          value: dateFinal,
          onChange,
          mode: currentMode,
          is24Hour: true,                      
        })
      };
    
      const showDatepickerF = () => { 
        fim = true   
        showModeF('date');
      };
  
    const locale = 'pt-br'

 return (
   <View style={styles.Container}>
       <View style={styles.Filters}>
        <View style={styles.Dados}>
            <Text style={{left: 25, fontSize: 12, top:2}} >Selecione o período: </Text>
            <Picker
            selectedValue={selectedValue}                
            style={{ height: 50, bottom:15, width: 200, marginLeft:  60}}
            mode="dropdown"                                    
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Mês atual" value="01" style={{fontSize:12, color: '#2f4f4f'}}  />
                    <Picker.Item label="Mês anterior" value="02" style={{fontSize:12,color: '#2f4f4f'}}  />
                    <Picker.Item label="3 últimos meses" value="03" style={{fontSize:12,color: '#2f4f4f'}} />
                    <Picker.Item label="Último semestre" value="04" style={{fontSize:12,color: '#2f4f4f'}} />
                    <Picker.Item label="Último ano" value="05" style={{fontSize:12,color: '#2f4f4f'}} />
                    <Picker.Item label="Período personalizado" value="06" style={{fontSize:12,color: '#2f4f4f'}} />                    
            </Picker>

        </View>
        {selectedValue == "06" ?
            <View style={{flexDirection: 'row', justifyContent:'space-around', bottom: 25}}>
                <View style={styles.DtInit}>
                    <TouchableOpacity onPress={showDatepicker} style={styles.BtnDtInit}>
                        <MaterialCommunityIcons
                            name='calendar-range'
                            size={15}
                            color={'#FFF'}
                        />
                        <Text style={{color: '#FFF', marginLeft: 5}}>Data Inicial</Text>
                    </TouchableOpacity>
                    <Text style={{left: 25, width: 80}}>{dateInit.getDate() + '/' + datinit + '/' + dateInit.getFullYear().toLocaleString(locale)}</Text>
                </View> 
                <View style={styles.DtFim}>
                    <TouchableOpacity onPress={showDatepickerF} style={styles.BtnDtInit}>
                        <MaterialCommunityIcons
                            name='calendar-range'
                            size={15}
                            color={'#FFF'}
                        />
                        <Text style={{color: '#FFF', marginLeft: 5}}>Data Final</Text>
                    </TouchableOpacity>
                    <Text style={{left: 25, width: 80}}>{dateFinal.getDate() + '/' + datfim + '/' + dateFinal.getFullYear().toLocaleString(locale)}</Text>
                </View>        
            </View>    
            :
            null
        }
        <View style={styles.Dados}>
            <Text style={{left: 25, fontSize: 12, bottom: 20}}>Selecione o cartão: </Text>
            <Picker
            selectedValue={selectedValueCard}                
            style={{ height: 50, bottom:35, width: 200, marginLeft: 65 }}
            mode="dropdown"                                    
            onValueChange={(itemValue, itemIndex) => setSelectedValueCard(itemValue)}
                >
                    <Picker.Item label="Todos" value="01" style={{fontSize:12, color: '#2f4f4f'}}  />
                    <Picker.Item label="MasterCard" value="02" style={{fontSize:12,color: '#2f4f4f'}}  />
                    <Picker.Item label="Visa" value="03" style={{fontSize:12,color: '#2f4f4f'}} />
                    <Picker.Item label="HiperCard" value="04" style={{fontSize:12,color: '#2f4f4f'}} />
                    <Picker.Item label="VerdeCard" value="05" style={{fontSize:12,color: '#2f4f4f'}} />
                    <Picker.Item label="Credicard" value="06" style={{fontSize:12,color: '#2f4f4f'}} />                    
            </Picker>
        </View>
        <View style={styles.SelectType}>
            <Checkbox
                status={checkedReceita ? 'checked' : 'unchecked'}
                onPress={() => {
                    setCheckedReceita(!checkedReceita);
                }}
            />
            <Text style={{fontSize: 13, top: 7}} > Receitas </Text>
        </View>
        <View style={[styles.SelectType, {bottom: 60}]}>
            <Checkbox
                status={checkedDebito ? 'checked' : 'unchecked'}
                onPress={() => {
                    setCheckedDebito(!checkedDebito);
                }}
            />
            <Text style={{fontSize: 13, top: 7}} > Despesas </Text>
        </View>
        <TouchableOpacity style={{position:'absolute', right: 25, bottom: 15, width: 100, justifyContent: 'space-between', flexDirection:'row', borderWidth:1, borderRadius: 50/2}}>
            <Text style={{left: 5}}> Aplicar </Text>
            <MaterialCommunityIcons
                name='filter-check'
                size={20}
                color="#2F4F4F"
                style={{right: 5}}
            />
        </TouchableOpacity>
       </View>
       <View style={styles.Body}>
            <Text>Corpo</Text>
       </View>

   </View>
  );
}

export default Lauch;

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        backgroundColor:'#2F4F4F',    
    },
    Filters:{
        flex: 1,
        backgroundColor:'#FFF',
    },
    Dados:{
        flexDirection:'row'
    },
    SelectType:{
        flexDirection:'row',
        bottom: 50,
        left: 15,                
    },
    DtInit:{
        marginLeft: 20
    },
    BtnDtInit:{
        backgroundColor:'#2F4F4F',
        width: 120,
        flexDirection:'row',
        height:30,
        alignItems:'center',
        borderRadius:100/2,
        justifyContent:'center'
    },
    Body:{
        flex:3,
        backgroundColor:'#2F4F4F',
        alignItems:'center',
        justifyContent:'center'
    }
})