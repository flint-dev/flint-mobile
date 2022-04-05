import { View, Text } from "react-native";
import React from "react";

import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

import MapViewDirections from "react-native-maps-directions";

const GOOGLE_MAPS_APIKEY = "AIzaSyA7q0zF_2_rCjVuhRDn52NtkOcM3K7t53k";

export default function RouteMap({ origin, destination }) {
	const originLoc = {
		latitude: origin.details.geometry.location.lat,
		longitude: origin.details.geometry.location.lng,
	};
	const destinationLoc = {
		latitude: destination.details.geometry.location.lat,
		longitude: destination.details.geometry.location.lng,
	};

	// console.log(originLoc, destinationLoc);
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
			showsUserLocation={true}
		>
			<MapViewDirections
				origin={originLoc}
				destination={destinationLoc}
				apikey={GOOGLE_MAPS_APIKEY}
				strokeWidth={3}
				strokeColor="black"
			/>
			<Marker coordinate={originLoc} title={"Origin"} />
			<Marker coordinate={destinationLoc} title={"Destination"} />
		</MapView>
	);
}
