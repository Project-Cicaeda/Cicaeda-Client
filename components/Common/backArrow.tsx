import { Octicons } from "@expo/vector-icons"
import { router } from "expo-router"
import { StyleSheet, TouchableOpacity, View } from "react-native"

const BackArrow:React.FC = () =>{
    return(
        <TouchableOpacity style={styles.arrowBg} onPress={() => router.back()}>
            <Octicons name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
    )
}

export default BackArrow

const styles = StyleSheet.create({
    arrowBg:{
        width:40,
        height:40,
        borderRadius:"50%",
        backgroundColor:"#E4E4E4",
        justifyContent:"center",
        alignItems:"center"
    }
})