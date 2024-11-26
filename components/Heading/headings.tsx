import { Text, View } from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen"

interface headingProps{
    heading:string,
    tagLine:string
}

export const Headings:React.FC<headingProps>= ({heading,tagLine}) => {
    return(
        <View>
            <Text style={{fontFamily:"Poppins-Bold",color:Colors.light.primary,fontSize:25}}>{heading}</Text>
            <Text style={{fontFamily:"Poppins-Light",fontSize:14,color:Colors.light.primary}}>{tagLine}</Text>
        </View>
    )
}

