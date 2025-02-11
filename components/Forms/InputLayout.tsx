import { Colors } from "@/constants/Colors"
import { AntDesign } from "@expo/vector-icons"
import { StyleSheet, View,TextInput, Text } from "react-native"

interface InputLayoutProps{
    label:string,
    placeholder:string,
    icon:any
}

export const InputLayout:React.FC<InputLayoutProps> =({label,placeholder,icon}) =>{
    return(
        <View>
            <View style={styles.textContainer}>
                <Text style={styles.textProps}>{label}</Text>
            </View>
            <View style={styles.textinput}>
                <View>
                    <AntDesign name={icon} size={20} color="black" />
                </View>
                <View style={{flex:1}}>
                    <TextInput placeholder={placeholder} style={{fontFamily:"Poppins-Light",marginHorizontal:5}}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer:{
        paddingHorizontal:10
    },
    textProps:{
        fontFamily:"Poppins-Light"
    },
    textinput:{
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"#D9D9D9",
        paddingVertical:7,
        paddingHorizontal:20,
        borderRadius:30,
        borderWidth:1,
        borderColor:Colors.light.primary
    }
})
