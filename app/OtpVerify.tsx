import { router, useLocalSearchParams } from "expo-router"
import { useRef, useState } from "react"
import { View,Text, StyleSheet, TextInput,TouchableOpacity, ToastAndroid} from "react-native"
import { Colors } from "@/constants/Colors"
import { Headings } from "@/components/Heading/headings"
import { useTranslation } from "react-i18next"
import BackArrow from "@/components/Common/backArrow"
import axios from "axios"
import { ipAddress } from "@/components/Common/ipAddress"

const OtpAuth:React.FC = () =>{
    const [digits,setDigits] = useState(['','','','','',''])
    const { email } = useLocalSearchParams();
    const InputRef = useRef<(any | null)[]>([])
      const { t, i18n } = useTranslation();

    function HandleOtpChange(value:string,index:number){
        const newData = [...digits]
        newData[index] = value
        setDigits(newData)

        if(value && index < digits.length-1){
            InputRef.current[index+1].focus()
        }
        if(!value && index >0){
            InputRef.current[index-1].focus()
        }
    }   
    async function VerifyOtp(){
        try{            
                const digitsJoin = digits.join("")
                const data = {"OTP":digitsJoin,email}
                const response = await axios.post(`${ipAddress}/auth/verify-otp`,data)
                ToastAndroid.show(response.data.message,ToastAndroid.SHORT)
                router.push({pathname:`/ResetPassword`,params:{email:email}})
        }
        catch(error:any){
            ToastAndroid.show(error.response.data.message,ToastAndroid.SHORT)
                console.log(error.response)
        }

    }

    console.log(digits)
    return(
        <View style={styles.container}>
            <BackArrow/>
            <View style={styles.header}>
                <View>
                    <Headings heading={t("Otp.title")} tagLine={t("Otp.tagline")} />
                </View>
            </View>
            <View style={{flexDirection:"row",justifyContent:"center",paddingVertical:20}}>

                {digits.map((item,index) =>{
            
                    return(
                        <View key={index}>
                            <TextInput  ref={(value) => InputRef.current[index] =value} keyboardType="numeric" maxLength={1} value={digits[index]} style={{fontFamily:"Poppins-Light",borderWidth:1,width:50,height:65,margin:5,borderRadius:5,textAlign:"center"}} onChangeText={(e) =>HandleOtpChange(e,index)}/>
                        </View>
                    )
                })}
            </View>
            <View style={styles.button}>
                      <TouchableOpacity onPress={VerifyOtp}>
                        <Text
                          style={{
                            color: "#fff",
                            fontFamily: "Poppins-Bold",
                            textAlign: "center",
                          }}
                        >
                          Verify Otp
                        </Text>
                      </TouchableOpacity>
                    </View>

        </View>
    )
}


export default OtpAuth

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        height:"100%",
        paddingHorizontal:20
    },
    header:{
        marginTop:20
    },
 button: {
    backgroundColor: Colors.light.primary,
    paddingVertical: 20,
    borderRadius: 50,
  },
})