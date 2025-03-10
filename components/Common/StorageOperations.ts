import AsyncStorage from '@react-native-async-storage/async-storage'


export const storeItem = async(items:any) => {
    try{
        await AsyncStorage.setItem("user", JSON.stringify(items))
    }
    catch(error){
        console.log(error)
    }
}
