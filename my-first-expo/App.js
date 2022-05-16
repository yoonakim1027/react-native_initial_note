import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
  console.log("react native app")
  return (
    <>
    <View style={styles.container}>
      <Text>새로운 앱 생성 22.05.16</Text>
      <Text style={{color:'blue'}}>Hi. react-native</Text>
      <StatusBar style="auto" />
      <Button title="Button" onPress={() =>alert('click!!')}/>
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
