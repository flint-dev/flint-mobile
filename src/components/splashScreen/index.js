import { View, Text } from "react-native";
import React from "react";

export default function SplashScreen() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "#f58d16",
			}}
		>
			<Text style={{ color: "white", fontSize: 66, fontStyle: "italic" }}>
				Flint!
			</Text>
		</View>
	);
}
