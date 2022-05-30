import React from 'react';
import { View, Text, StyleSheet  } from 'react-native';

import { Entypo } from '@expo/vector-icons';

export default function ButtonNew({ size, color, focused }) {
 return (
   <View style={[styles.container, { backgroundColor: focused ? '#000' : '#a1a1a1' }]}>
       <Entypo name='plus' color={focused ? '#FFF' : '#FFF'} size={size} />
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems:'center',
        justifyContent:'center',
        marginBottom: 20,
    }
})