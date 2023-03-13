import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function AddPlayer({ sex, onChangeSex, setName, onAddPlayer }) {
  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <TextInput
          placeholder={'palyer name'}
          styles={styles.marginRight}
          onChangeText={(text) => {
            setName(text);
          }
          }></TextInput>
        <View >
          <TouchableOpacity onPress={onAddPlayer}>
            <Text>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.flex}>
        <TouchableOpacity
        style={sex == 0 ? styles.active : styles.notActive}
        onPress={() => onChangeSex(0)}>
        <Text>Male</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={sex == 1 ? styles.active : styles.notActive}
        onPress={() => onChangeSex(1)}>
        <Text>Female</Text>
      </TouchableOpacity>
      </View>
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  sexContainer: {
    flexDirection: 'row',
  },
  active: {
    backgroundColor: '#8cfc03',
    paddingHorizontal: 10,
    marginRight: 10,
  },
  notActive: {
    backgroundColor: 'gray',
    paddingHorizontal: 10,
    marginRight: 10,
  },
  flex: {
    flexDirection: 'row',
    flwx: 1,
  },marginRight: {
    marginRight: 10
  }
});
