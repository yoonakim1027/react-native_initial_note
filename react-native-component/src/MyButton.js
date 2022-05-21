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
                {props.title}
                {/* 부모로부터 전달받은 props인 title 값을 상속받아 사용 */}
                </Text>
        </Pressable>
    )



}

export default MyButton;
