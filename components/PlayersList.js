import React, { useState } from 'react'

import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function PlayersList({players, onNameClickGetDare}) {
    
    return (

        <View>
        {players.map(player => {
          return (
            <TouchableOpacity onPress={onNameClickGetDare}>
              <Text>{player.substring(0, player.length - 1)}</Text>
            </TouchableOpacity>
          )
        })}
            
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