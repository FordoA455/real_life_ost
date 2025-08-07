import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [song, setSong] = useState('');
  return (
    <View style={styles.container}>
      <Text>Real Life OST</Text>
      <Text>Current location:</Text>
      <Text>Current song: {song}</Text>
      <TextInput value={song} onChangeText={setSong} placeholder="Enter song:"></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
