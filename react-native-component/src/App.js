import React from "react";
import {Text, View, Button} from 'react-native'
import MyButton from "./MyButton";


const App = () => {
    return (
        <View
            style={{
                flex : 1,
                backgroundColor : '#fff',
                alignItems : 'center',
                justifyContent : 'center',
            }}
        >
            <Text style={{fontSize : 30, marginBottom : 10}}>Props 속성</Text>
            {/* <Button title="Button" onPress={() => alert('Click! ')}/> */}
            <MyButton title="Button"/>
            {/* 부모 컴포넌트에서 title값을 Button으로 지정 -> 상속 */}

            <MyButton title="Button">children Props</MyButton>
            
            {/* 사용해야 하는 props의 값을 전달하지 않은 채 컴포넌트 사용 */}
            <MyButton/> 
        </View>

    )

}

// 1. 현재의 App 컴포넌트(부모 컴포넌트)에서 MyButton 컴포넌트(자식 컴포넌트)로 title 속성에 Button이라는 문자열을 전달
// 2. MyButton 자식 컴포넌트에서는 전달된 props인 title값을 함수의 파라미터로 받아 사용 가능


export default App