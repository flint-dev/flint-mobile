import { View, Text } from "react-native";
import React from "react";
import Styles from "./styles";

import { Entypo } from "@expo/vector-icons";

export default function PlaceRow({ data }) {
	// console.log(data);
	return (
		<View style={Styles.row}>
			<View style={Styles.iconContainer}>
				{data.description === "Home" ? (
					<Entypo name="home" size={24} color="black" />
				) : (
					<Entypo name="location-pin" size={24} color="black" />
				)}
			</View>
			<Text style={Styles.locationText}>{data.description}</Text>
		</View>
	);
}
