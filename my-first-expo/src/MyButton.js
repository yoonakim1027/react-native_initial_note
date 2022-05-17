import react from "react";
import { TouchableOpacity, View, Text } from "react-native";

const MyButton =({title="title", onPress=()=>{}, children}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{margin:100 , backgroundColor:'red', padding:10}}>
                <Text style={{fontSize:20, color:'white'}}>
                    {/* children이 있으면 children, 없으면 title 출력 */}
                    {children || title}</Text>
            </View>
        </TouchableOpacity>
    )


}

// 부모컴포넌트에서 데이터를 전달 -> 자식 컴포넌트는 전달 받은 데이터로 렌더링
// 이렇게 재사용하면서 컴포넌트를 사용할 수 있음 


MyButton.defaultProps = {
    title : 'default',
    onPress : () => alert('default')


}

export default MyButton;
