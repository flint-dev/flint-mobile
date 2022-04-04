import { View, Text, Image, FlatList } from "react-native";
import React from "react";

import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

import cars from "../../assets/data/cars";

export default function HomeMap() {
	const getImage = (type) => {
		if (type === "FlintX") {
			return require("../../assets/images/top-FlintX.png");
		}

		if (type === "Comfort") {
			return require("../../assets/images/top-Comfort.png");
		}
		if (type === "FlintXL") {
			return require("../../assets/images/top-FlintXL.png");
		}
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
			{cars.map((car) => (
				<Marker
					key={car.id}
					coordinate={{ latitude: car.latitude, longitude: car.longitude }}
				>
					<Image
						style={{ width: 50, height: 50, resizeMode: "contain" }}
						source={getImage(car.type)}
					/>
				</Marker>
			))}
		</MapView>
	);
}
