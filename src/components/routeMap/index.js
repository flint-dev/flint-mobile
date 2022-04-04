import { View, Text } from "react-native";
import React from "react";

import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

import MapViewDirections from "react-native-maps-directions";

const GOOGLE_MAPS_APIKEY = "AIzaSyA7q0zF_2_rCjVuhRDn52NtkOcM3K7t53k";

export default function RouteMap() {
	const origin = {
		latitude: 28.450627,
		longitude: -16.263045,
	};
	const destination = {
		latitude: 28.450127,
		longitude: -16.255445,
	};
	return (
		<MapView
			style={{ width: "100%", height: "100%" }}
			provider={PROVIDER_GOOGLE}
			initialRegion={{
				latitude: 28.450627,
				longitude: -16.263045,
				latitudeDelta: 0.022,
				longitudeDelta: 0.021,
			}}
		>
			<MapViewDirections
				origin={origin}
				destination={destination}
				apikey={GOOGLE_MAPS_APIKEY}
				strokeWidth={3}
				strokeColor="black"
			/>
			<Marker coordinate={origin} title={"Origin"} />
			<Marker coordinate={destination} title={"Destination"} />
		</MapView>
	);
}
