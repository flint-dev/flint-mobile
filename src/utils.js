import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";

export const authenticate = async (accessToken) => {
    await AsyncStorage.setItem("accessToken", accessToken);
    const userData = await jwtDecode(accessToken)
    await AsyncStorage.setItem("userData", JSON.stringify(userData));
}