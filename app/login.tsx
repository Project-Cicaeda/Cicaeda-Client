import BackArrow from "@/components/Common/backArrow"
import {InputLayout} from "@/components/Forms/InputLayout"
import { OrSeparator } from "@/components/Forms/OrSeparator"
import { SocialLogin } from "@/components/Forms/socialLogin"
import { Headings } from "@/components/Heading/headings"
import { Colors } from "@/constants/Colors"
import { AntDesign, Octicons } from "@expo/vector-icons"
import { Link } from "expo-router"
import { StyleSheet, Text, TextInput, View } from "react-native"

const Login:React.FC = () => {
    return(
        <View style={styles.container}>
            <View>
                <BackArrow/>
            </View>
            <View style={styles.inputContent}>
                <View style={styles.inputTexts}>
                    <Headings heading="Login To Cicaeda!" tagLine="Predicting Kidney Health for a Better Tomorrow"/>
                </View>
                <View style={styles.inputForms}>

                    <View style={styles.marginLayer}>
                        <InputLayout label="Email Address" placeholder="Email Address" icon="mail"/>
                    </View>
                    <View style={styles.marginLayer}>
                        <InputLayout label="Password" placeholder="Password" icon="key"/>
                    </View>
                    <View style={[styles.marginLayer,{marginVertical:10,marginLeft:5}]}>
                        <Text style={{fontFamily:"Poppins-Light",color:Colors.light.primary}}>Forgot Password?</Text>
                    </View>
                </View>
                <View style={styles.button}>
                    <Text style={{color:"#fff",fontFamily:"Poppins-Bold",textAlign:"center"}}>Login</Text>
                </View>
                <View>
                    <OrSeparator/>
                </View>
                <View style={styles.socialLogins}>
                    <SocialLogin/>
                    <SocialLogin/>
                    <SocialLogin/>
                </View>
                <View style={{marginVertical:10}}>
                    <Text style={{fontFamily:"Poppins-Light",textAlign:"center"}}>Don't Have An Account? Register Now</Text>
                </View>

            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        paddingVertical:10,
        paddingHorizontal:25,
        height:"100%"
    },
    inputContent:{
        paddingVertical:15
    },
    inputTexts:{

    },
    inputForms:{
        paddingVertical:10
    },
    marginLayer:{
        marginVertical:5
    },
    button:{
        backgroundColor:Colors.light.primary,
        paddingVertical:20,
        borderRadius:50,
    },
    socialLogins:{
        marginVertical:20,
        flexDirection:"row",
        justifyContent:"center"
    },
    line:{
        width:100,
        height:1,
        marginHorizontal:10,
        backgroundColor:Colors.light.primary
    }
})