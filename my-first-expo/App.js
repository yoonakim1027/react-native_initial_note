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
      <MyButton title="My Button title1" onPress={()=> alert('1')}/>
      <MyButton title="My Button title2" onPress={()=> alert('2')}/>

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
