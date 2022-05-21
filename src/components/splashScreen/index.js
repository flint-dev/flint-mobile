import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SplashScreen() {
	const navigation = useNavigation();
	useEffect(() => {
		const checkUser = async () => {
			if (await isAuthenticated()) {
				navigation.navigate("HomePage");
			} else {
				navigation.navigate("SignIn");
			}
		};
		checkUser();
	}, []);
	const isAuthenticated = async () => {
		// await AsyncStorage.removeItem("accessToken");
		const token = await AsyncStorage.getItem("accessToken");
		return !!token;
	};

	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "#f58d16",
			}}
		>
			<Text style={{ color: "white", fontSize: 66, fontStyle: "italic" }}>
				Flint!
			</Text>
		</View>
	);
}
