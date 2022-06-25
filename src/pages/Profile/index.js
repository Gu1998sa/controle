import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Animated, Alert, Image, FlatList, Keyboard, Switch, KeyboardAvoidingView, TouchableWithoutFeedback , TextInput } from 'react-native';
import Dialog, {DialogTitle, DialogContent, SlideAnimation, DialogFooter, DialogButton, } from 'react-native-popup-dialog';
import { AntDesign, Entypo } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { Picker } from '@react-native-picker/picker'


const dados = [
    {
      id: "01",
      title: "Nubank",
      tipo: "Crédito",
      fechFat: "08",
      vencFat: "12",
      limitCard:550.75
    },
    {
      id: "02",
      title: "Digio",
      tipo: "Crédito",
      fechFat: "13",
      vencFat: "20",
      limitCard:1500.55
    },
    {
      id: "03",
      title: "HiperCard",
      tipo: "Crédito",
      fechFat: "9",
      vencFat: "15",
      limitCard:2200.50
    },
    {
        id: "04",
        title: "Pan",
        tipo: "Crédito",
        fechFat: "14",
        vencFat: "20",
        limitCard:750.70
      },
      {
        id: "05",
        title: "Santander",
        tipo: "Debito",
        fechFat: "4",
        vencFat: "10",
        limitCard:450.50
      },

  ];

  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.ListItem, backgroundColor]}>
        <View style={{position:'absolute', left: 5, top: 25}}>
            <MaterialCommunityIcons
                name="card-bulleted"
                color={'#2F4F4F'}
                size={20}                
                />
        </View>
        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
            <Text style={[styles.ListTitle, textColor]}>Cartão:</Text>
            <Text style={[styles.ListTitle, textColor]}>{item.title}</Text>
        </View>
        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
            <Text style={[styles.ListTitle, textColor]}>Tipo:</Text>
            <Text style={[styles.ListTitle, textColor]}>{item.tipo}</Text>
        </View>
        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
            <Text style={[styles.ListTitle, textColor]}>Limite do Cartão:</Text>
            <Text style={[styles.ListTitle, textColor]}>R$ {item.limitCard}</Text>
        </View>
        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
            <Text style={[styles.ListTitle, textColor]}>Dia fechamento da fatura:</Text>
            <Text style={[styles.ListTitle, textColor]}>{item.fechFat}</Text>
        </View>
        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
             <Text style={[styles.ListTitle, textColor]}>Dia vencimento da fatura: </Text>
             <Text style={[styles.ListTitle, textColor]}>{item.vencFat}</Text>
        </View>

      
    </TouchableOpacity>
  );

  


const Profile = ({route}) => {
    const navigation = useNavigation();
    const[email, setEmail] = useState('')
    const[cpf, setCpf] = useState('')
    const[nome, setNome] = useState('')
    const[telefone, setTelefone] = useState('')
    const [selectedId, setSelectedId] = useState(null);
    const [createCard, setCreateCard] = useState(false)
    const [descCard, setDescCard] = useState('');
    const [tipoCred, setTipoCred] = useState(false);
    const [tipoDeb, setTipoDeb] = useState(false);
    const [favCard, setFavCard] = useState(false);
    const [bandeiraCard, setBandeiracaCard] = useState('');
    const [limitCard, setLimitCard] = useState('');
    const [vencCard, setVencCard] = useState('');
    const [fechfatCard, setFechFatCard] = useState('');
    const [selectedValue, setSelectedValue] = useState();
    const [corSelect, setCorSelect] = useState();
    const [keyboardStatus, setKeyboardStatus] = useState(undefined);
    var aberto = false;

    const toggleSwitchCred = () => setTipoCred(previousState => !previousState);
    const toggleSwitchDeb = () => setTipoDeb(previousState => !previousState);
    const toggleSwitchFav = () => setFavCard(previousState => !previousState);
   
    const backgroundColor = ["#008000","#ffff00","#ff0000","#ffc0cb","#800080","#0000ff","#d2691e","#cd5c5c","#4b0082"]

    const editCard = () =>{
        if(selectedId != null){
            //chamar a requisição da api para mandar editar o registrando, passando por parametro o id do card
            alert('Ok')

        }else{
            Alert.alert('Notificação','Selecione um cadastro para editar.')
        }
    }

    const favovitarCard = () =>{
        if(selectedId != null){
            //chamar a requisição da api para mandar favoritar o registrando, passando por parametro o id do card
            alert('Ok')

        }else{
            Alert.alert('Notificação','Selecione um cadastro para favoritar.')
        }
    }

    const deleteCard = () =>{
        if(selectedId != null){
            //chamar a requisição da api para mandar deletar o registrando, passando por parametro o id do card
            alert('Ok')

        }else{
            Alert.alert('Notificação','Selecione um cadastro para remover. Operação irreversível')
        }
    }
    
    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#2F4F4F" : "#FFF";
        const color = item.id === selectedId ? 'white' : 'black';
    
        return (
          <Item
            item={item}  
            onPress={() => setSelectedId(item.id)}          
            backgroundColor={{ backgroundColor }}            
            textColor={{ color }}  
                     
          />
        );
      };



      const renderColor = ()=>{
          return backgroundColor.map(color =>{
              return(
                  <TouchableOpacity
                    key={color}
                    style={[styles.colorSelect, {backgroundColor: color}]}
                    onPress={() => setCorSelect(color)}
                  />
              )
          })
      }

      const animation = new Animated.Value(0);             

      const toggleMenu = () => {  
        const toValue = 1                
        if(toValue == 1 && aberto == false){
            Animated.spring(animation, {
                toValue,
                friction: 6,
                useNativeDriver: true
            }).start();
            aberto = true;          
        }    
        else if(toValue == 1 && aberto == true){
            Animated.spring(animation, {
                toValue: 0,
                friction: 6,
                useNativeDriver: true
            }).start();
            aberto = false;
        }        
      }      

      const deleteStyle={
        transform:[
            {scale: animation},
            {
                translateY: animation.interpolate({
                    inputRange:[0, 1],
                    outputRange: [0, -100]

                })
            }
        ]
    }
    const favStyle={
        transform:[
            {scale: animation},
            {
                translateY: animation.interpolate({
                    inputRange:[0, 1],
                    outputRange: [0, -50]

                })
            }
        ]
    }

    const insertStyle={
        transform:[
            {scale: animation},
            {
                translateY: animation.interpolate({
                    inputRange:[0, 1],
                    outputRange: [0, -200]

                })
            }
        ]
    }
    const editStyle={
        transform:[
            {scale: animation},
            {
                translateY: animation.interpolate({
                    inputRange:[0, 1],
                    outputRange: [0, -150]

                })
            }
        ]
    }

    const rotation = {
        transform: [
            {
                rotate:animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", "180deg"]
                })
            }
        ]
    }

    
    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
          setKeyboardStatus("Aberto");
        });
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
          setKeyboardStatus("Fechado");
        });
    
        return () => {
          showSubscription.remove();
          hideSubscription.remove();
        };
      }, []);


 return (
   <KeyboardAvoidingView  style={styles.Container}>
        <Dialog
         visible={createCard}
         onTouchOutside={() => {
          setCreateCard(!createCard);
        }}
         dialogTitle={<DialogTitle title="Cadastre seu Cartão" 
         hasTitleBar={true}
         align="left"         
         style={{
             backgroundColor: corSelect != null ? corSelect : "#FFF",             
         }}
         />}
         rounded
         actionsBordered
         width={0.9}
         height={400}
         dialogAnimation={new SlideAnimation({
           slideFrom: 'top',
           
         })}
         footer={
           <DialogFooter style={{position:'absolute', bottom: 0}}>              

             <DialogButton
               text="Cancelar"
               onPress={()=> setCreateCard(!createCard) }
               bordered
             />
             <DialogButton
               text="Salvar"
               onPress={()=> setCreateCard(!createCard) }
               bordered
             />
             
           </DialogFooter>
         }                
      >
        <DialogContent style={{width:'100%', alignItems:'flex-start', justifyContent:'flex-start'}} >          
          <View  style={{textAlign: 'center', fontSize: 10, margin: 10 }} >
          <View style={{justifyContent:'space-between', flexDirection:'row', width:'100%'}}>
                <Text> Descrição </Text>
                <TextInput
                    style={{bottom: '2%'}}
                    placeholder='Ex: Nubanck'                
                    autoCorret={false}
                    onChangeText={(texto) => setDescCard(texto)}
                    multiline={false}
                    value={descCard}
                />
            </View>               
            <View style={{justifyContent:'space-between', flexDirection:'row', width:'100%'}}>
                <Text> Limite </Text>
                <TextInput
                    style={{bottom: '2%'}}
                    placeholder='Ex: 1.500,00'                
                    autoCorret={false}
                    onChangeText={(texto) => setLimitCard(texto)}
                    multiline={false}
                    value={limitCard}
                />
            </View>
            <View style={{justifyContent:'space-between', flexDirection:'row', width:'100%'}}>
                <Text> Fechamento fatura </Text>
                <TextInput
                    style={{bottom: '2%'}}
                    placeholder='Ex: 15'                
                    autoCorret={false}
                    onChangeText={(texto) => setFechFatCard(texto)}
                    multiline={false}
                    value={fechfatCard}
                />
            </View>
            <View style={{justifyContent:'space-between', flexDirection:'row', width:'100%'}}>
                <Text> Vencimento fatura </Text>
                <TextInput
                    style={{bottom: '2%'}}
                    placeholder='Ex: 22'                
                    autoCorret={false}
                    onChangeText={(texto) => setVencCard(texto)}
                    multiline={false}
                    value={vencCard}
                />
            </View>
            <View style={{flexDirection: 'row',  justifyContent:'space-between', width:'100%'}}>
            <Text style={{ color:'#000'}}> Bandeira do Cartão </Text>                                
                <Picker
                selectedValue={selectedValue}                
                style={{ height: 50, bottom:'5%', width: 155, marginLeft: '15%' }}
                mode="dropdown"                                    
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="VerdeCard" value="01" style={{fontSize:12, color: '#2f4f4f'}}  />
                        <Picker.Item label="HiperCard" value="02" style={{fontSize:12,color: '#2f4f4f'}}  />
                        <Picker.Item label="MasterCard" value="03" style={{fontSize:12,color: '#2f4f4f'}} />
                        <Picker.Item label="Visa" value="04" style={{fontSize:12,color: '#2f4f4f'}} />
                        <Picker.Item label="Elo" value="05" style={{fontSize:12,color: '#2f4f4f'}} />
                        <Picker.Item label="Senff" value="06" style={{fontSize:12,color: '#2f4f4f'}} />
                        <Picker.Item label="BanriCompras" value="07" style={{fontSize:12,color: '#2f4f4f'}} />                        
                </Picker>
            </View>
          </View>
          <View style={{flexDirection: 'row', bottom: 50, justifyContent:'space-between', width:'100%'}}>
            <Text style={{ top: '5%', color:'#000', paddingLeft:'3%'}}> Cartão de Crédito </Text>                
            <Switch                        
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={tipoCred ? "#CBDF90" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitchCred}
                value={tipoCred}
            />                               
            </View>
            <View style={{flexDirection: 'row', bottom: 70, justifyContent:'space-between', width:'100%'}}>
                <Text style={{ top: '5%', color:'#000', paddingLeft:'3%'}}> Cartão de Débito </Text>                
                <Switch                        
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={tipoDeb ? "#CBDF90" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitchDeb}
                    value={tipoDeb}
                />                               
            </View>  
            <View style={{flexDirection: 'row', bottom: 90, justifyContent:'space-between', width:'100%'}}>
                <Text style={{ top: '5%', color:'#000', paddingLeft:'3%'}}> Favoritar Cartão </Text>                
                <Switch                        
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={favCard ? "#CBDF90" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitchFav}
                    value={favCard}
                />                               
            </View>  
            <View style={{flexDirection: 'column', bottom: 90, alignItems:'center', width:'100%'}}>
                <Text>
                    Selecione a cor para o cartão
                </Text>
                <View style={{flexDirection: 'row', justifyContent:'space-between', marginTop: 5, width:'100%' }}>
                    {renderColor()}
                </View>                
            </View>   
        </DialogContent>

      </Dialog>
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
                <Text style={{left: '5%', color: '#000', fontWeight:'bold', fontSize: 12 }}>Nome</Text>
                <TextInput                
                style={styles.Inputs}
                placeholder='Ex: Gustavo'
                placeholderTextColor='#000'
                autoCorret={false}
                onChangeText={(texto) => setNome(texto)}
                multiline={false}
                value={nome}
                editable={false}
                onSubmitEditing={Keyboard.dismiss}
                />
                <Text style={{left: '5%', color: '#000', fontWeight:'bold', fontSize: 12}}>Email</Text>
                <TextInput
                style={styles.Inputs}
                placeholder='Ex: contato@dominio.com'
                placeholderTextColor='#000'
                autoCorret={false}
                editable={false}
                onChangeText={(texto) => setEmail(texto)}
                multiline={false}
                value={email}
                />
                <Text style={{left: '5%', color: '#000', fontWeight:'bold', fontSize: 12}}>Telefone</Text>
                <TextInput
                style={styles.Inputs}
                placeholder='Ex: 53991234567'
                placeholderTextColor='#000'
                autoCorret={false}
                editable={false}
                onChangeText={(texto) => setTelefone(texto)}
                multiline={false}
                value={telefone}
                />
                <Text style={{left: '5%', color: '#000', fontWeight:'bold', fontSize: 12}}>CPF</Text>
                <TextInput
                style={styles.Inputs}
                placeholder='Ex: 12365478900'
                placeholderTextColor='#000'
                autoCorret={false}
                editable={false}
                onChangeText={(texto) => setCpf(texto)}
                multiline={false}
                value={cpf}
                />
                <View style={styles.BtnProfile}>
                    <TouchableOpacity style={{flexDirection:'row', width: '100%', justifyContent:'space-between', borderRadius: 5, borderLeftWidth: 1, borderRightWidth: 1, borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#2F4F4F'}}>                      
                        <Text> Editar </Text>
                        <MaterialCommunityIcons
                            name='account-edit-outline'
                            color={'#2f4f4f'}
                            size={20}
                        />
                    </TouchableOpacity>
                </View>
            </View>
       </View>
       <View style={styles.Body}>
           <View style={styles.DetailsBody}>
               <Text style={{fontSize: 14, fontWeight:'bold', color:'#2F4F4F'}} > Cartões Cadastrados </Text>
               <View style={styles.CardsBody}>
                   <FlatList style={styles.List}
                        data={dados}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        extraData={selectedId}
                   />
               </View>
           </View>
       </View>
       <View style={[styles.BtnPlus, {bottom: 80, right: 60}]}>
            <TouchableWithoutFeedback onPress={() => setCreateCard(!createCard)}>
                <Animated.View useNativeDriver style={[styles.button, styles.submenu, insertStyle]} >
                    <AntDesign
                        name='plus'
                        size={24}
                        color="#FFF"
                    />
                </Animated.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => editCard()}>
                <Animated.View useNativeDriver style={[styles.button, styles.submenu, editStyle]} >
                    <AntDesign
                        name='edit'
                        size={24}
                        color="#FFF"
                    />
                </Animated.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => favovitarCard()}>
                <Animated.View  useNativeDriver style={[styles.button, styles.submenu, favStyle]} >
                    <AntDesign
                        name='hearto'
                        size={24}
                        color="#FFF"
                    />
                </Animated.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => deleteCard()}>
                <Animated.View useNativeDriver style={[styles.button, styles.submenu, deleteStyle]} >
                    <AntDesign
                        name='delete'
                        size={24}
                        color="#FFF"
                    />
                </Animated.View>
            </TouchableWithoutFeedback>        
            <TouchableWithoutFeedback onPress={() => toggleMenu()}>
                <Animated.View useNativeDriver style={[styles.button, styles.menu, rotation]} >
                    <AntDesign
                        name='up'
                        size={24}
                        color="#FFF"
                    />
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
   </KeyboardAvoidingView>
  );
}

export default Profile;

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        backgroundColor:'#2F4F4F',
    },
    Header:{
        flex:0.50,
        flexDirection:'row',
        backgroundColor:'#FFF'       
    },
    HeaderImage:{
        top: '10%',
        paddingLeft: '5%'
    },
    Image:{
        height: 120,
        width: 120,
        bottom: 25,
    },
    BtnImage:{
        bottom:'45%',
        right: 5,
        position:'absolute'
    },
    HeaderText:{
        width: '100%',
    },
    Inputs:{
        width:'60%',
        borderBottomWidth:1,
        borderColor: '#000',
        height:15,
        marginBottom:5,    
        borderRadius:5,
        left: 15,        
        color:'#2F4F4F',
        fontSize:10,           
    },
    BtnProfile:{
        flexDirection:'row',
        width:'60%',        
        left: 15        
    },
    Body:{
        flex: 1.30,
        backgroundColor:'#2F4F4F',        
        alignItems:'center',
       
    },
    DetailsBody:{
        width:'95%',        
        height:'100%',
        borderRadius:5,
        backgroundColor:'#FFF',
        top: 3,
        alignItems:'center',    
    },
    CardsBody:{
        width:'90%',
        paddingBottom:'5%'
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
        borderRadius: 5,  
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderRightWidth:1,
        borderLeftWidth:1,        
        borderColor:'#2f4f4f'      
    },
    BtnPlus:{
        alignItems:'center',
        position:'absolute'
    },
    button:{
        position: 'absolute',
        width: 50,
        height: 50,
        borderRadius:50/2,
        justifyContent:'center',
        alignItems:'center',
        shadowRadius: 10,
        shadowColor:'#FFF',
        shadowOpacity:0.3,
        shadowOffset:{
            height: 10,
        }
    },
    menu:{
       backgroundColor:"#2f4f4f" 
    },
    submenu:{
        width: 40,
        height: 40,
        borderRadius: 40/2,
        backgroundColor:"#2f4f4f"
    },
    colorSelect:{
        width: 30,
        height: 30,
        borderRadius: 4,
    }

})
