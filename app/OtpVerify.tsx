import { router } from "expo-router"
import { useRef, useState } from "react"
import { View,Text, StyleSheet, TextInput,TouchableOpacity} from "react-native"
import { Colors } from "@/constants/Colors"
import { Headings } from "@/components/Heading/headings"
import { useTranslation } from "react-i18next"
import BackArrow from "@/components/Common/backArrow"

const OtpAuth:React.FC = () =>{
    const [digits,setDigits] = useState(['','','',''])
    const InputRef = useRef([])
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
    function VerifyOtp(){
        router.push(`/ResetPassword`)

    }
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
                            <TextInput  ref={(value) => InputRef.current[index] =value} keyboardType="numeric" maxLength={1} value={digits[index]} style={{fontFamily:"Poppins-Light",borderWidth:1,width:65,height:65,margin:5,borderRadius:5,textAlign:"center"}} onChangeText={(e) =>HandleOtpChange(e,index)}/>
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