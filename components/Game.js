import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import AddPlayer from './AddPlayer'
import RandomNumber from './RandomNumber'

export default function Game() {
    const [page, setPage] = useState(0)

    const [players, setPlayers] = useState(['kira0', 'kala0', 'maki1']) // list of all players
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
            <View style={styles.container}>
                <AddPlayer
                    setName={setName}
                    onChangeSex={onChangeSex}
                    sex={sex}
                    onAddPlayer={onAddPlayer}
                ></AddPlayer>
                <TouchableOpacity onPress={() => onPageChange(1)}>
                    <Text>play game</Text>
                </TouchableOpacity>
            </View>
            
        )
    }else  {
        return (
          <View style={styles.container}>
          <RandomNumber onPageChange={onPageChange} usersLength={players.length} players={players}></RandomNumber>
          </View>
          )
    }


}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        paddingHorizontal:20
    },
    flexRow: {
      
      flexDirection: "row"
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