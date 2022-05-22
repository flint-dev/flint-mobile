import { View, Alert } from "react-native";
import React, { useState } from "react";

import FlintTypes from "../../components/flintType";
import RouteMap from "../../components/routeMap";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
	useRoute,
	useNavigation,
	NavigationHelpersContext,
} from "@react-navigation/native";
import axios from "axios";

export default function SearchResults() {
	const [accessToken, setAccessToken] = useState("");
	const typeState = useState(null);
	const route = useRoute();

	const navigation = useNavigation();

	const getToken = async () => {
		try {
			setAccessToken(await AsyncStorage.getItem("accessToken"));
		} catch (err) {
			console.log(err);
		}
	};

	const { originPlace, destinationPlace } = route.params;
	// console.log(originPlace, destinationPlace );

	const onSubmit = async () => {
		await getToken();
		const [type] = typeState;
		if (!type) {
			return;
		}

		const authAxios = axios.create({
			baseURL:
				"http://flintbackendapi-env.eba-efhp27cu.eu-west-2.elasticbeanstalk.com",
			timeout: 1000,
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});

		//get order data to make the order
		const orderData = {
			type: `${type}`,
			originLatitude: originPlace.details.geometry.location.lat,
			originLongitude: originPlace.details.geometry.location.lng,
			destinationLatitude: destinationPlace.details.geometry.location.lat,
			destinationLongitude: destinationPlace.details.geometry.location.lng,
			carId: "48b0bd76-41da-4ba2-b1b0-3d0277849fc0",
		};

		// console.log(orderData);

		//send order
		authAxios
			.post("/order", orderData)
			.then((res) => {
				navigation.navigate("Order", { id: res.data.id });
				// console.log(res.data);
			})
			.catch((err) => console.log(err));
	};
	return (
		<View style={{ display: "flex", justifyContent: "space-between" }}>
			<View style={{ height: "55%" }}>
				<RouteMap origin={originPlace} destination={destinationPlace} />
			</View>

			<View style={{ height: "45%" }}>
				<FlintTypes typeState={typeState} onSubmit={onSubmit} />
			</View>
		</View>
	);
}
