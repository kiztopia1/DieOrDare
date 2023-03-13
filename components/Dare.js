import React, { useState, useEffect } from 'react'

import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import {Dares} from './Dares'
export default function Dare({sex}) {
  let [dare, setDare] = useState("");
  useEffect(() => {
    getDare()
  })  
    
  const getDare =() =>{
    //kira 
    let a = 'man'
      if(sex == 0){
        let dareIndex = generateRandomInteger(Dares.male.length) -1 
        setDare(Dares.male[dareIndex])
      }else{
        let dareIndex = generateRandomInteger(Dares.female.length) -1 
        setDare(Dares.female[dareIndex])
      }
    }
    function generateRandomInteger(max) {
        return Math.floor(Math.random() * max) + 1;
    }

    return (
        <View>
            <Text>{dare}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    sexContainer: {
        flex: 1,
        flexDirection: "row",
    },
    active: {
        backgroundColor: "green"
    },
    sexButton: {
        backgroundColor: "red"
    }
})