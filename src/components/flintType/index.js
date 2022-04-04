import { View, Text, Pressable } from "react-native";
import React from "react";

import Styles from "./styles";
import FlintTypeRow from "../flintTypeRow";

import typeData from "../../assets/data/types";

export default function FlintTypes() {
	const confirm = () => {
		console.warn("confirm");
	};
	return (
		<View>
			{typeData.map((type) => (
				<FlintTypeRow key={type.id} type={type} />
			))}

			<Pressable
				onPress={confirm}
				style={{
					width: "100%",
					margin: 10,
					padding: 10,
					backgroundColor: "black",
					alignItems: "center",
				}}
			>
				<Text
					style={{
						color: "white",
						fontWeight: "bold",
					}}
				>
					Confirm Ride
				</Text>
			</Pressable>
		</View>
	);
}
