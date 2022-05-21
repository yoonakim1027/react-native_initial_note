import React from 'react';
import { Pressable, Text } from 'react-native';

const MyButton = props => {
    return (
        <Pressable
            style={{
                backgroundColor : '#3498db',
                padding: 16,
                margin: 10,
                borderRadius : 8,

            }}
            onPress={() => alert("Pressable click!")}
        >
            <Text style={{fontSize : 24}}>
                {props.children ||  props.title}
                {/* 컴포넌트의 children을 이용, 태그 사이에 있는 값을 출력 */}
                {/* props에 children이 있다면 title 보다 우선시 되도록 작성 */}
                </Text>
        </Pressable>
    )



}

export default MyButton;
