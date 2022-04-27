import { View, Text } from "react-native";
import React from "react";
import Styles from "./styles";

import { AntDesign } from "@expo/vector-icons";

export default function Message() {
	return (
		<View style={Styles.container}>
			<Text style={Styles.title}>Travel only if necessary</Text>
			<Text style={Styles.text}>
				Help flatten the curve.If you must travel, please exercise caution for
				your safety and the safety of our community
			</Text>
			<View style = {Styles.learnMoreContainer}>
				<Text style={Styles.learnMoreText}>Learn more</Text>
				<AntDesign name="arrowright" size={24} color="white" style={{marginLeft: 5}}/>
			</View>
		</View>
	);
}
