import React, { useState } from 'react'

import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Dare from './Dare'
import PlayersList from './PlayersList'
export default function RandomNumber({onPageChange,players}) {
    const [number, setNumber] = useState(1)
    const [dare, setDare] = useState(false)
    function generateRandomInteger(max) {
        return Math.floor(Math.random() * max) + 1;
    }
    let generateHandler = () => {
        setNumber(generateRandomInteger(players.length))
        setDare(false)
        
    }
    let onNameClickGetDare = () => {
      setDare(!dare)
    }

    // components
    let darehandler = (state) => {
      if(dare){
        return <Dare/>
      }else{
        return ' '
      }
    }
    return (
        <View>
            <TouchableOpacity onPress={() => onPageChange(0)}>
              <Text>page 1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={generateHandler}>
                <Text>Generate</Text>
            </TouchableOpacity>
            <Text>{number}</Text>

            <View>
              <PlayersList players={players} onNameClickGetDare={onNameClickGetDare}></PlayersList>
            </View>

            <View>
              {dare?<Dare sex={0}/>: ''}
            </View>
            
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