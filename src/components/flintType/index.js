import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import Styles from "./styles";
import FlintTypeRow from "../flintTypeRow";

import typeData from "../../assets/data/types";

export default function FlintTypes({ typeState }) {
	const [selectedType, setSelectedType] = typeState;
	const confirm = () => {
		console.warn("confirm");
	};
	return (
		<View>
			{typeData.map((type) => (
				<FlintTypeRow
					key={type.id}
					type={type}
					isSelected={type.type === selectedType}
					onPress={() => setSelectedType(type.type)}
				/>
			))}

			<TouchableOpacity
				onPress={confirm}
				style={{
					width: "80%",
					margin: 10,
					padding: 10,
					backgroundColor: "#eb9534",
					alignItems: "center",
					height: 50,
					alignSelf: "center",
					borderRadius: 40,
					justifyContent: "center",
					height: "15%",
				}}
			>
				<Text
					style={{
						color: "white",
						fontWeight: "bold",
						fontSize: 22,
					}}
				>
					Confirm Ride
				</Text>
			</TouchableOpacity>
		</View>
	);
}
