import MyButton from './src/MyButton';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import React, {useState} from 'react'

export default function App() {
  // 더하기를 위한 상탯값 
  const [addition, setAddition] = useState(0)
  // 곱하기를 위한 상탯값 
  const [multiple, setMultiple] = useState(1)


  console.log("react native app")


  return (
    <>
    <View style={styles.container}>
      <Text>state값을 이용해 덧셈, 곱셈을 하는 버튼 생성 22.05.17</Text>
      <StatusBar style="auto" />
      {/* 값을 보여주기 위한 Text 컴포넌트 import */}

      <Text style={{fontSize:20 }}>덧셈 : {addition}</Text>
      <Text style={{fontSize:20 }}>곱셈 : {multiple}</Text>
      
      <MyButton title='addition' onPress={()=>setAddition(addition +2)}/>
      <MyButton title="multiple" onPress={()=> setMultiple(multiple * 2)}/>

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
