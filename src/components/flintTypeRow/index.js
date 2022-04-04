import { View, Text, Image } from "react-native";
import React from "react";

import Styles from "./styles";

import { Ionicons } from "@expo/vector-icons";

export default function FlintTypeRow(props) {
	// console.log(props);
	const { type } = props;

	const getImage = () => {
		if (type.type === "FlintX") {
			return require("../../assets/images/FlintX.jpeg");
		}

		if (type.type === "Comfort") {
			return require("../../assets/images/Comfort.jpeg");
		}
		if (type.type === "FlintXL") {
			return require("../../assets/images/FlintXL.jpeg");
		}
	};
	return (
		<View style={Styles.container}>
			{/* image */}
			<Image style={Styles.image} source={getImage()} />

			<View style={Styles.middleContainer}>
				<Text style={Styles.type}>
					{type.type} <Ionicons name="person" size={16} color="black" /> 3
				</Text>
				<Text style={Styles.time}>8:03PM drop off</Text>
			</View>

			<View style={Styles.rightContainer}>
				<Ionicons name="pricetag" size={12} color="#42d742" />
				<Text style={Styles.price}>GHS {type.price}</Text>
			</View>
		</View>
	);
}
