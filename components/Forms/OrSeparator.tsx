import { Colors } from "@/constants/Colors"
import { StyleSheet, Text, View } from "react-native"

export const OrSeparator:React.FC = () =>{
    return(
        <View style={{marginTop:30,justifyContent:"center",flexDirection:"row",alignItems:"center"}}>
            <View style={styles.line}></View>
            <Text style={{fontFamily:"Poppins-Light"}}>OR</Text>
            <View style={styles.line}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    line:{
        width:100,
        height:1,
        marginHorizontal:10,
        backgroundColor:Colors.light.primary
    }
})
