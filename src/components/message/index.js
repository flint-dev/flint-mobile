import { View, Text } from "react-native";
import React from "react";
import Styles from "./styles";

export default function Message() {
	return (
		<View style = {Styles.container}>
			<Text style = {Styles.title}>Travel only if necessary</Text>
			<Text style ={Styles.text}>
				Mravel only if necessary Travel only if necessary Travel only if
                necessary Travel only if necessary
                Mravel only if necessary Travel only if necessary Travel only if
                necessary Travel only if necessary
                
			</Text>
            <Text style={Styles.learnMore}>Learn more</Text>
		</View>
	);
}
