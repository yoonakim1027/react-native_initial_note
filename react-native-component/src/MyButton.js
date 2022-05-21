import { object } from 'prop-types';
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
                {/* props에 children 값이나 title 값을 렌더링 하도록 설정 */}
                </Text>
        </Pressable>
    )



}


// 반드시 전달되어야 하는 중요한 값이 전달되지 않을 경우, 
// 사용할 기본값을 defaultProps로 설정하기
MyButton.defaultProps = {
    title : 'default Button(기본값)',

}


// 전달받을 props의 타입을 결정하는 PropTypes (npm 설치 필요)
// PropTypes 에서 설정 가능한 타입은 문자열(string), 숫자(number), 함수(func), 객체(object), 배열(array) 등 
MyButton.propTypes = {
    title : PropTypes.string.isRequired, //필수 여부 지정 : .isRequired
    onPress : PropTypes.func.isRequired, // 버튼 클릭 시 함수 전달(필수로 지정)
}

export default MyButton;
