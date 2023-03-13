import React, { useState } from 'react'

import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function RandomNumber(usersLength) {
    const [number, setNumber] = useState(0)
    function generateRandomInteger(max) {
        return Math.floor(Math.random() * max) + 1;
    }
    let generateHandler = () => {
        setNumber(generateHandler(usersLength))
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={generateHandler}>
                <Text>Generate</Text>
            </TouchableOpacity>
            <Text>{number}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        backgroundColor: 'red'
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