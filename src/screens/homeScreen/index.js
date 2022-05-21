import { View, Dimensions, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import HomeMap from "../../components/homeMap";
import Message from "../../components/message";
import HomeSearch from "../../components/homeSearch";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";

export default function Home() {
	const [accessToken, setAccessToken] = useState("");
	//getting jwt from async storage
	const getData = async () => {
		try {
			const value = await AsyncStorage.getItem("accessToken");
			if (value !== null) {
				// value previously stored
				setAccessToken(value);
				decode(accessToken);
				// console.log(accessToken);
			}
		} catch (e) {
			// error reading value
		}
	};

	const decode = async (value) => {
		var decoded = await jwt_decode(value);
		console.log(decoded);
	};

	useEffect(async () => {
		await getData();
	}, []);

	return (
		<SafeAreaView>
			<HomeSearch />
			<View style={{ height: "64%" }}>
				<HomeMap />
			</View>

			<Message />
		</SafeAreaView>
	);
}
