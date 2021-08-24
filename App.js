import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredGoal) => {
    setEnteredGoal(enteredGoal);
  };

  const addGoadHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), value: enteredGoal }]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Goal"
          style={styles.textinput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button
          title="Add"
          onPress={addGoadHandler}
        />
      </View>
      <FlatList data={courseGoals} renderItem={itemData => (
        <View
          style={styles.goalList}>
          <Text >{itemData.item.value}</Text>
        </View>)}
      />
    </View >
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
  },
  textinput: {
    width: 200, borderColor: "black", borderWidth: 1
  },
  goalList: {
    padding: 10, marginTop: 10, backgroundColor: '#ccc', borderColor: 'black', borderWidth: 1
  }
});
