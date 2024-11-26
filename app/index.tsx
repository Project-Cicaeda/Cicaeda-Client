import { Colors } from "@/constants/Colors"
import { router } from "expo-router"
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const {width:SCREEN_WIDTH} = Dimensions.get('window')
export default function Index(){
    return(
        <View style={styles.container}>
            <View style={styles.centerContent}>
                <View>
                    <Image source={require('../assets/images/landing.jpg')} style={{width:SCREEN_WIDTH,height:250}}/>
                </View>
                <View style={styles.headings}>
                    <Text style={[styles.fontColor,{fontFamily:"Poppins-Bold",fontSize:20}]}>WELCOME TO CICAEDA!</Text>
                    <Text style={[styles.fontColor,{fontFamily:"Poppins-Light", fontSize:13,textAlign:"center",marginVertical:5}]}>Stay one step ahead with early detection of chronic kidney disease. 
                    Empowering you with insights for a healthier future.</Text>
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.button} onPress={() => router.push("/login")}>
                        <Text style={[styles.fontProps,{color:"#fff"}]}>Login Now</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button,{backgroundColor:"transparent",borderWidth:1,borderColor:Colors.light.primary}]} onPress={() => router.push('/register')}>
                        <Text style={[styles.fontProps,{color:Colors.light.primary}]}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        height:"100%"
    },
    centerContent:{
        height:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    headings:{
        marginVertical:10,
        alignItems:"center"
    },
    buttons:{
        justifyContent:"center",
        alignItems:"center",
        marginVertical:5
    },
    button:{
        marginVertical:5,
        width:SCREEN_WIDTH-50,
        paddingHorizontal:20,
        paddingVertical:20,
        borderRadius:50,
        backgroundColor:Colors.light.primary,
    },
    fontColor:{
        color:Colors.light.primary
    },
    fontProps:{
        fontFamily:"Poppins-Bold",
        textAlign:"center",
        fontSize:15
    }
})

