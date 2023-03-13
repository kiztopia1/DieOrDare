import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import AddPlayer from './AddPlayer'
import RandomNumber from './RandomNumber'

export default function Game() {
    const [page, setPage] = useState(1)

    const [players, setPlayers] = useState(['kira']) // list of all players
    const [name, setName] = useState('') // name for the current player
    const [sex, setSex] = useState(0)// 0 is for Male


    const newPlayer = (text) => {
        setPlayers(prevState => [...prevState, text])
    }
    const onAddPlayer = () => {
        let user = name + sex
        setPlayers(prevState => [...prevState, user])
    }
    const onChangeSex = sex => {
        if (sex == 1) {
            setSex(1)
        } else {
            setSex(0)
        }
    }

    const onPageChange = page => {
        setPage(page)
    }
    if (page == 0) {
        return (
            <View>
                <TouchableOpacity onPress={() => onPageChange(1)}>
                    <Text>page 2</Text>
                </TouchableOpacity>
                <AddPlayer
                    setName={setName}
                    onChangeSex={onChangeSex}
                    sex={sex}
                    onAddPlayer={onAddPlayer}
                ></AddPlayer>
                <Text>{players}</Text>
            </View>
        )
    } else if (page == 1) {
        <View style={styles.container}>
            <RandomNumber></RandomNumber>
        </View>
    }


}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
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