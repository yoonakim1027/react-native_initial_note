import React from 'react';
import { Pressable, Text } from 'react-native';

const MyButton = () => {
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
            <Text style={{fontSize : 24}}>My Button</Text>
        </Pressable>
    )



}

export default MyButton;
