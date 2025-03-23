import AsyncStorage from '@react-native-async-storage/async-storage'


export const storeItem = async(items:any) => {
    try{
        await AsyncStorage.setItem("user", JSON.stringify(items))
    }
    catch(error){
        console.log(error)
    }
}

export const fetchData = async(key:string) =>{
    const storedItems:any = await AsyncStorage.getItem(key)
    if(storeItem != null){
      const jsonParse = JSON.parse(storedItems)
      return jsonParse
    }

}
export const removeUser = async () => {
    try {
      await AsyncStorage.removeItem("user");
    } catch (error) {
      console.log(error);
    }
  };