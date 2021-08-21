import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Bu, Button } from 'react-native';

export default function App() {
  return (
    <View style={{ padding: 50 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <TextInput placeholder="Enter Goal" style={{ width: 200, borderColor: "black", borderWidth: 1 }} />
        <Button title="Add" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});
