import react from "react";
import { TouchableOpacity, View, Text } from "react-native";

const MyButton =props => {
    console.log(props)
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={{margin:100 , backgroundColor:'red', padding:10}}>
                <Text style={{fontSize:20, color:'white'}}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )


}

// 부모컴포넌트에서 데이터를 전달 -> 자식 컴포넌트는 전달 받은 데이터로 렌더링
// 이렇게 재사용하면서 컴포넌트를 사용할 수 있음 



export default MyButton;
