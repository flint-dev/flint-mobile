import { View, Dimensions } from "react-native";
import React from "react";
import HomeMap from "../../components/homeMap";
import FlintTypes from "../../components/flintType";
import RouteMap from "../../components/routeMap";

export default function SearchResults() {
	return (
		<View style={{ display: "flex", justifyContent: "space-between" }}>
			<View style={{ height: (Dimensions.get("window").height * 6 / 10) }}>
				<RouteMap />
			</View>

			<View style={{ height: (Dimensions.get("window").height * 4) / 10 }}>
				<FlintTypes />
			</View>
		</View>
	);
}
