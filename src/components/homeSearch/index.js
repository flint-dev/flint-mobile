import { View, Text, Pressable } from "react-native";
import React from "react";
import Styles from "./styles";

import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

export default function HomeSearch() {
	const navigation = useNavigation();

	const goToSearch = () => {
		navigation.navigate("DestinationSearch");
	};
	return (
		<View>
			{/* Input bar */}
			<Pressable onPress={goToSearch} style={Styles.inputBox}>
				<Text style={Styles.inputText}>Where to ?</Text>
				<View style={Styles.timeContainer}>
					<AntDesign name="clockcircle" size={20} color="black" />
					<Text> now</Text>
					<MaterialIcons name="keyboard-arrow-down" size={20} color="black" />
				</View>
			</Pressable>

			{/* previous destination */}
			<View style={Styles.row}>
				<View style={Styles.iconContainer}>
					<AntDesign name="clockcircle" size={20} color="white" />
				</View>
				<Text style={Styles.destinationText}>Spin Nightclub</Text>
			</View>

			{/* home destination */}
			<View style={Styles.row}>
				<View style={[Styles.iconContainer, { backgroundColor: "#218cff" }]}>
					<MaterialIcons name="home" size={24} color="white" />
				</View>
				<Text style={Styles.destinationText}>Spin Nightclub</Text>
			</View>
		</View>
	);
}
