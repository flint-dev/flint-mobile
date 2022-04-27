import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";

import * as Location from "expo-location";

import Router from "./src/navigation/root";

// navigator.geolocation = require('@react-native-community/geolocation');

export default function App() {
	const [location, setLocation] = useState(null);
	const [errorMsg, setErrorMsg] = useState(null);

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				setErrorMsg("Permission to access location was denied");
				return;
			}

			let location = await Location.getCurrentPositionAsync({});
			setLocation(location);
		})();
	}, []);

	let text = "Waiting..";
	if (errorMsg) {
		text = errorMsg;
	} else if (location) {
		text = JSON.stringify(location);
		  console.log(location)
	}

	return (
		<>
			<Router />
			<StatusBar style="auto" />
		</>
	);
}

const styles = StyleSheet.create({});
