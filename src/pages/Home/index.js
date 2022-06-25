import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, StatusBar, Image, FlatList, SafeAreaView } from 'react-native';
import Dialog, {DialogTitle, DialogContent, SlideAnimation, DialogFooter, DialogButton, } from 'react-native-popup-dialog';
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { Picker } from '@react-native-picker/picker'
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
    {
      key: '1',
      title:'Cartão Nubanck',
      status: 'Esta fatura venceu no dia 5',
      text: 'Este cartão, possui uma fatura pendente, regularize esta pendencia!',
      texto: 'Valor atual da Fatura: R$ 500,00'
    },
    {
      key: '2',
      title:'Cartão HiperCard',
      status: 'Vencimento desta fatura prevista para o dia 15 deste mês',
      text: 'Fatura fechada. Compras neste cartão, na fatura somente do proximo mês!',
      texto: 'Valor atual da Fatura: R$ 750,00'
    },
    {
      key: '3',
      title:'Cartão Nubanck',
      status: 'Fatura em aberto, faltam 5 dias para o fechamento',
      text: 'As compras realizadas com cartão de crédito, ainda viram para este mês!',
      texto: 'Valor atual da Fatura: R$ 435,00'
    },
  ]

  const dados = [
    {
      id: "01",
      title: "Despesa",
      text: "Farmacias São João",
      valor: "250,00",
      data:"05/06/2022"
    },
    {
      id: "02",
      title: "Despesa",
      text: "Mercado Bom Preço",
      valor: "543,78",
      data:"08/06/2022"
    },
    {
      id: "03",
      title: "Receita",
      text: "FGTS",
      valor: "1100,00", 
      data:"04/06/2022"
    },
    {
        id: "04",
        title: "Despesa",
        text: "Mercado Bom Preço",
        valor: "543,78",
        data:"08/06/2022"
      },
      {
        id: "05",
        title: "Receita",
        text: "FGTS",
        valor: "1100,00", 
        data:"04/06/2022"
      },

  ];

  const dadosCards = [
    {
      id: "01",
      title: "Despesa",
      text: "Farmacias São João",
      valor: 250.00,
      data:"05/06/2022",
      possuiparcela: "Sim",
      qtdparcela: 3,
      cartao:'1'
    },
    {
      id: "02",
      title: "Despesa",
      text: "Mercado Bom Preço",
      valor: 543.78,
      data:"08/06/2022",
      possuiparcela: "Sim",
      qtdparcela: 5,
      cartao:'2'
    },
  ];
  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.ListItem, backgroundColor]}>
        <View style={{position:'absolute', right: 10, top: 5}}>
            <MaterialCommunityIcons
                name="tag"
                color={item.title == "Despesa" ? '#B22' : '#2F4F'}
                size={20}
                />
        </View>
        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
            <Text style={[styles.ListTitle, textColor]}>Tipo: {item.title}</Text>
            <Text style={[styles.ListTitle, textColor]}>R$ {item.valor}</Text>
        </View>
      <Text style={[styles.ListTitle, textColor]}>Local: {item.text}</Text>
      <Text style={[styles.ListTitle, textColor]}>Data: {item.data}</Text>
      
    </TouchableOpacity>
  );



  const ItemCards = ({ item, onPress, backgroundColor, textColor }) => (          
    <TouchableOpacity onPress={onPress} style={[styles.ListItem, backgroundColor]}>               
        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>          
            <Text style={[styles.ListTitle, textColor]}>Local: {item.text}</Text>
            <Text style={[styles.ListTitle, textColor]}>R$ {item.valor}</Text>
        </View>
        <Text style={[styles.ListTitle, textColor]}>Data: {item.data}</Text>
        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
            <Text style={[styles.ListTitle, textColor]}>Parcelado: {item.possuiparcela}</Text>
            <Text style={[styles.ListTitle, textColor]}>x {item.qtdparcela}</Text>
        </View>  
        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
            <Text style={[styles.ListTitle, textColor]}>Valor da Parcela:</Text>
            <Text style={[styles.ListTitle, textColor]}>{item.valor / item.qtdparcela}</Text>
        </View>      
    </TouchableOpacity>
  );

const Home =({}) => {
    var data = new Date();
    const [selectedValue, setSelectedValue] = useState();
    const [selectedId, setSelectedId] = useState(null);
    
    const navigation = useNavigation();
    const [viewDetailsCards, setViewDetailsCards] = useState(false);
    const [cards, setCards] = useState(); 
    
    

    const OpenRegister = (item) => {
        setSelectedId(item.id)
        console.log(selectedId)
      }

    useEffect(() => {
     var mesatual = String(data.getMonth() + 1).padStart(2, '0');
     setSelectedValue(mesatual);
    }, [])

    const openDetailsCards = (item) => {
        setCards(item)
        setViewDetailsCards(!viewDetailsCards)

        

    }

    function renderSlide({ item }){
        return(
          <View style={styles.SubHeader}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.Title}>{item.title}</Text>
                <TouchableOpacity style={{paddingLeft: '5%', bottom: '1%'}} onPress={() => openDetailsCards(item)}>
                <MaterialCommunityIcons
                    name="information"
                    color="#2f4f4f"
                    size={25}
                    />
                </TouchableOpacity>
              </View> 
              <Text style={styles.Text} > {item.text} </Text> 
              <Text style={styles.Status}> {item.status} </Text>
              <Text style={styles.SubText} > {item.texto} </Text>           
          </View>
        )  
      }

      function renderNextButton(){
        return (
          <View style={{top: 15, right: 15}}>
            <MaterialCommunityIcons
              name="arrow-right-circle-outline"
              color="#a1a1a1"
              size={25}
            />
          </View>
        );
      };
      function renderPrevButton(){
        return (
          <View style={{top: 15, left: 15}}>
            <MaterialCommunityIcons
              name="arrow-left-circle-outline"
              color="#a1a1a1"
              size={25}
            />
          </View>
        );
      };

      const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#2F4F4F" : "#FFF";
        const color = item.id === selectedId ? 'white' : 'black';
    
        return (
          <Item
            item={item}
            onPress={() => OpenRegister(item)}
            backgroundColor={{ backgroundColor }}            
            textColor={{ color }}  
                     
          />
        );
      };

      const renderItemCards = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#2F4F4F" : "#FFF";
        const color = item.id === selectedId ? 'white' : 'black';       
        return (          
          <ItemCards
            item={item}
            onPress={() => OpenRegister(item)}
            backgroundColor={{ backgroundColor }}            
            textColor={{ color }}  
                     
          />
        );
      };

 return (
   <SafeAreaView style={styles.Container}>
       <Dialog
        visible={viewDetailsCards}
        dialogTitle={<DialogTitle title={cards != null ? cards.title : 'Nenhum Cartão encontrado'}
        hasTitleBar={true}
        align="center"
        />}
        rounded
        actionsBordered
        width={0.9}
        onTouchOutside={() => {
            setViewDetailsCards(!viewDetailsCards)
        }}
        dialogAnimation={new SlideAnimation({
            slideFrom:'bottom',
        })}

        footer={
            <DialogFooter>
               <DialogButton
                    text="Ok"
                    onPress={() => setViewDetailsCards(!viewDetailsCards)}
                />
                <DialogButton
                    text="Excluir"
                    onPress={() => apagarRegister()}
                />
            </DialogFooter>
        }
       >
           <DialogContent style={{width:'100%', marginTop: 5 }}>
                  <FlatList style={styles.ListCards}
                        data={dadosCards}
                        renderItem={renderItemCards}
                        keyExtractor={(item) => item.id}
                        extraData={selectedId}
                    />
           </DialogContent>
       </Dialog>
       <View style={styles.Header}>
           <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', width:'100%'}}>      
                <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: 155, bottom: 20, left: 20}}
                        mode="dropdown"                                    
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Janeiro" value="01" style={{color: '#2f4f4f'}}  />
                        <Picker.Item label="Fevereiro" value="02" style={{color: '#2f4f4f'}}  />
                        <Picker.Item label="Março" value="03" style={{color: '#2f4f4f'}} />
                        <Picker.Item label="Abril" value="04" style={{color: '#2f4f4f'}} />
                        <Picker.Item label="Maio" value="05" style={{color: '#2f4f4f'}} />
                        <Picker.Item label="Junho" value="06" style={{color: '#2f4f4f'}} />
                        <Picker.Item label="Julho" value="07" style={{color: '#2f4f4f'}} />
                        <Picker.Item label="Agosto" value="08" style={{color: '#2f4f4f'}} />
                        <Picker.Item label="Setembro" value="09" style={{color: '#2f4f4f'}} />
                        <Picker.Item label="Outubro" value="10" style={{color: '#2f4f4f'}} />
                        <Picker.Item label="Novembro" value="11" style={{color: '#2f4f4f'}} />
                        <Picker.Item label="Dezembro" value="12" style={{color: '#2f4f4f'}} />
                        
                </Picker>
            </View>
       </View>
       <AppIntroSlider            
            data={slides}
            renderItem={renderSlide}
            renderNextButton={renderNextButton}
            renderPrevButton={renderPrevButton}
            showPrevButton={true}
            showDoneButton={false}
            activeDotStyle={{backgroundColor:'#2f4f4f'}}
         />
       <View style={styles.Body}>
            <View style={styles.Details}>
                <Text style={styles.TxtDetails}>
                    RESUMO MENSAL
                </Text>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>                   
                    <TouchableOpacity style={{paddingLeft: '2%'}}>
                    <MaterialCommunityIcons
                        name="information"
                        color='#2f4f4f'
                        size={20}
                        />
                    </TouchableOpacity>                
                    <Text style={{position:'absolute', left:'15%'}}> Receitas </Text>
                    <Text> R$ 3500,00 </Text>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>                   
                    <TouchableOpacity style={{paddingLeft: '2%'}}>
                    <MaterialCommunityIcons
                        name="information"
                        color="#B22"
                        size={20}
                        />
                    </TouchableOpacity>                
                    <Text style={{position:'absolute', left:'15%'}}> Despesas </Text>
                    <Text> R$ 5500,00 </Text>
                </View>
                <Text style={{textAlign:'center', fontSize:12, fontWeight:'bold', color:'#2f4f4f'}}>
                    SALDO MENSAL
                </Text>
                <Text style={{textAlign:'center', fontSize:12, color:'#B22'}}>
                    R$ - 2000,00
                </Text>            
            </View>
            <View style={styles.Registers}>
                <Text style={styles.TxtRegisters}> ULTIMOS LANÇAMENTOS </Text>
                <View style={{width:'100%', paddingBottom: '10%'}}>
                    <FlatList style={styles.List}
                        data={dados}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        extraData={selectedId}
                    />
                </View>
            </View>
            <View style={styles.BtnPlus}>
                <TouchableOpacity>
                    <MaterialCommunityIcons
                    name='plus'
                    color='#FFF'
                    size={35}
                    />
                </TouchableOpacity>
            </View>
       </View>
   </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'#FFF'
    },
    Header:{
        flex:0.25,
        alignItems:'center',
    },
    SubHeader:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    Title:{
        fontSize:16,
        fontWeight:'bold',
        color:'#2f4f4f'
    },
    Text:{
        textAlign: 'center',
        fontSize: 12,
        width: '75%',
        color: '#2f4f4f' 
    },
    Status:{
        paddingBottom: '1%',
        fontSize:10,
        fontWeight:'bold',
        color: '#2f4f4f' 
    },
    SubText:{
        fontWeight:'bold',
        fontSize: 12,
        color: '#2f4f4f'        

    },
    Body:{
        flex:3,
        backgroundColor:'#2F4F4F',
        alignItems:'center',
     
    },
    Details:{
        top:'2%',
        flex:0.2,
        width:'95%',        
        backgroundColor:'#FFF',                
        borderRadius: 3,
    },
    TxtDetails:{
        textAlign:"center",
        fontSize:13,
        fontWeight:'bold',
        color:'#2f4f4f'
    },
    Registers:{
        top:'4%',
        backgroundColor:'#FFF',
        width:'95%',
        flex:0.8,
        borderRadius: 3,
        alignItems:'center',
        marginBottom: 20
    },
    TxtRegisters:{
        textAlign:"center",
        fontSize:13,
        fontWeight:'bold',
        color:'#2f4f4f'
    },
    List:{
        marginTop: 10,        
    },
    ListTitle:{
        fontSize: 13,
        textAlign: 'left',        
    },
    ListItem:{
        padding: 25,
        marginVertical: 2,
        marginHorizontal: 8,
        borderRadius: 5,  
        borderBottomWidth: 1,
        borderColor:'#2f4f4f'      
    },
    BtnPlus:{
        position:'absolute',
        right: 15,
        bottom: 15,
        backgroundColor:'#2f4f4f',
        borderRadius: 30
        
    },
})