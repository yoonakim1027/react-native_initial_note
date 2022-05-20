import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const name = 'chorong';
  return (
    <View style={styles.container}>
{/* AND(&&) 연산자를 사용
조건이 참일 때 왼쪽출력 : 조건이 거짓일 때 오른쪽 출력       */}

{/* OR (||) 연산자를 사용
앞의 조건이 거짓인 경우 내용이 나타나고, 조건이 참일 경우 나타나지 않음  */}
      {name === 'chorong' && (
        <Text style={styles.text}>
          My name is chorong
        </Text>
      )}
      {name !== 'chorong' && (
        <Text style={styles.text}>
          My name is react native
        </Text>
      )}
      
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
