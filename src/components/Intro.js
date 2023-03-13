import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function Intro() {
    return (
        <View style={styles.container}>
            <TextInput onChangeText={text => { setName(text) }}></TextInput>
            <View style={styles.sexContainer}>
                <TouchableOpacity style={sex == 0 ? styles.active : styles.sexButton} onPress={() => onChangeSex(0)}>
                    <Text>Male</Text>
                </TouchableOpacity>

                <TouchableOpacity style={sex == 1 ? styles.active : styles.sexButton} onPress={() => onChangeSex(1)} >
                    <Text>Female</Text>
                </TouchableOpacity>
            </View>
            <Text>sex: {sex}</Text>
            <TouchableOpacity onPress={onAddPlayer}>
                <Text>Add</Text>
            </TouchableOpacity>
            <Text>{players.map(player => {
                return (
                    <View>
                        <Text>{player},</Text>
                    </View>
                )
            })}</Text>
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