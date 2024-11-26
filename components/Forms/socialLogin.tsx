import { AntDesign } from "@expo/vector-icons"
import { StyleSheet, View } from "react-native"

export const SocialLogin:React.FC = () => {
    return(
        <View style={styles.socialBackground}>
            <AntDesign name="google" size={20} color="black" />
        </View>
    )
}

const styles = StyleSheet.create({
    socialBackground:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#E4E4E4",
        width:40,
        height:40,
        borderRadius:"50%",
        marginHorizontal:5
    }
})

