import { Image, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";

import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import * as Location from "expo-location";

// import cars from "../../assets/data/cars";

export default function OrderMap({ car }) {
	const [LatLng, setLatLng] = useState();
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

	useEffect(() => {
		//function to get user location
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (!status === "granted") {
				console.log("Don't have access");
				return;
			}
			let userLocation = await Location.getCurrentPositionAsync();
			setLatLng({
				latitude: userLocation.coords.latitude,
				longitude: userLocation.coords.longitude,
			});
			// console.log(LatLng);
		})();
	}, []);

	if (!LatLng) {
		return <ActivityIndicator size={"large"} color={"orange"} />;
	}

	return (
		<MapView
			style={{ width: "100%", height: "100%" }}
			provider={PROVIDER_GOOGLE}
			initialRegion={{
				latitude: LatLng.latitude,
				longitude: LatLng.longitude,
				latitudeDelta: 0.022,
				longitudeDelta: 0.021,
			}}
			showsUserLocation={true}
			followsUserLocation
		>
			{car && (
				<Marker
					key={car.id}
					coordinate={{ latitude: car.latitude, longitude: car.longitude }}
				>
					<Image
						style={{
							width: 50,
							height: 50,
							resizeMode: "contain",
							transform: [
								{
									rotate: `${car.heading}deg`,
								},
							],
						}}
						source={getImage(car.type)}
					/>
				</Marker>
			)}
		</MapView>
	);
}
