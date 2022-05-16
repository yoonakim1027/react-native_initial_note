import react from "react";
import { TouchableOpacity, View, Text } from "react-native";

const MyButton =() => {
    return (
        <TouchableOpacity 
        onPress={()=> alert('my Button')}
        // hitSlop={{bottom:100, top:100, left:100, right:100}}
        pressRetentionOffset={{bottom:110, top:10, left:10, right:10 }}
        >
    
            <View style={{margin:100 , backgroundColor:'red', padding:10}}>
                <Text style={{fontSize:20, color:'white'}}>My Button</Text>

            </View>
        </TouchableOpacity>
    )


}

export default MyButton;
