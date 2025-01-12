import BackArrow from "@/components/Common/backArrow";
import { Headings } from "@/components/Heading/headings";
import { Colors } from "@/constants/Colors";
import { useTranslation } from "react-i18next";
import { StyleSheet, View,Text, TouchableOpacity } from "react-native";

const SelectLanguage:React.FC = () =>{
    const {t,i18n} = useTranslation()
    const changeLanguage = (lang:string) => {
        console.log(lang)
        i18n.changeLanguage(lang)
    }

    return(
        <View style={styles.container}>
            <View>
                <BackArrow/>
            </View>
            <View style={styles.heading}>
                <Headings heading={t('selectLangauge.heading')} tagLine={t('selectLangauge.tagline')}/>
            </View>
            <View style={styles.languagesContainer}>
                <TouchableOpacity style={styles.language} onPress={() => changeLanguage("en")}>
                    <Text style={{fontFamily:"Poppins-Light"}}>English</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.language} onPress={() => changeLanguage("sl")}>
                    <Text style={{fontFamily:"Poppins-Light"}}>සිංහල</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.language} onPress={() => changeLanguage("ta")}>
                    <Text style={{fontFamily:"Poppins-Light"}}>தமிழ்</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.continueButton}>
                    <Text style={{fontFamily:"Poppins-Bold",textAlign:"center",color:"#fff"}}>{t('selectLangauge.continue')}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SelectLanguage;

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        height:"100%",
        paddingVertical:10,
        paddingHorizontal:20
    },
    heading:{
        marginVertical:5
    },
    languagesContainer:{
        marginVertical:5
    },
    language:{
        backgroundColor:"#f2f2f2",
        paddingHorizontal:20,
        paddingVertical:17,
        marginVertical:5,
        borderRadius:10
    },
    continueButton:{
        backgroundColor:Colors.light.primary,
        paddingHorizontal:10,
        paddingVertical:17,
        marginVertical:10,
        borderRadius:50
    }
})