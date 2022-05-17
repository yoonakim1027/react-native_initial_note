import MyButton from './src/MyButton';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
  console.log("react native app")
  return (
    <>
    <View style={styles.container}>
      <Text>props 버튼 생성 22.05.17</Text>
      <StatusBar style="auto" />
      <MyButton />
 
      <MyButton title="My Button title2" onPress={()=> alert('children')}>children</MyButton>

    </View>
    </>
    
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
