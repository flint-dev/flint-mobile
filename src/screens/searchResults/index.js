import { View, Dimensions } from "react-native";
import React, { useState } from "react";

import FlintTypes from "../../components/flintType";
import RouteMap from "../../components/routeMap";

import { useRoute } from "@react-navigation/native";

export default function SearchResults() {
	const typeState = useState(null);
	const route = useRoute();

	const { originPlace, destinationPlace } = route.params;
	// console.log(originPlace, destinationPlace );
	return (
		<View style={{ display: "flex", justifyContent: "space-between" }}>
			<View style={{ height: (Dimensions.get("window").height * 6) / 10 }}>
				<RouteMap origin={originPlace} destination={destinationPlace} />
			</View>

			<View style={{ height: (Dimensions.get("window").height * 4) / 10 }}>
				<FlintTypes typeState={typeState} />
			</View>
		</View>
	);
}
