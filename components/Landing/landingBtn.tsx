import { Colors } from "@/constants/Colors"
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native"

interface BtnProps{
    outline:boolean
}
const {width:SCREEN_WIDTH} = Dimensions.get('window')
const LandingBtn:React.FC<BtnProps> = () =>{
    return(
        <TouchableOpacity style={[styles.button,{backgroundColor:"transparent",borderWidth:1,borderColor:Colors.light.primary}]}>
            <Text style={{fontFamily:"Poppins-Bold",color:Colors.light.primary,textAlign:"center"}}>Register</Text>
        </TouchableOpacity>
    )   

}

export default LandingBtn

const styles = StyleSheet.create({

    button:{
        marginVertical:10,
        width:SCREEN_WIDTH-50,
        paddingHorizontal:20,
        paddingVertical:20,
        borderRadius:50,
        backgroundColor:Colors.light.primary,
    }
})
