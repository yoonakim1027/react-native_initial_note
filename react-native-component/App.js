import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const name = 'chorong';
  return (
    <View style={styles.container}>
      <Text>
        {(()=> {
          if (name === 'yoona') return 'My name is yoona';
          else if (name === 'chorong') return 'My name is chorong';
          else return 'My name is React Native';
        })()}</Text>
      <StatusBar style="auto" />
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
