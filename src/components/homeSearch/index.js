import { View, Text, Pressable } from "react-native";
import React from "react";
import Styles from "./styles";

import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

export default function HomeSearch() {
	const navigation = useNavigation();

	const goToSearch = () => {
		navigation.navigate("DestinationSearch");
	};
	return (
		<View style= {Styles.inputBoxContainer}>
			{/* Input bar */}
			<Pressable onPress={goToSearch} style={Styles.inputBox}>
				<Text style={Styles.inputText}>Where to?</Text>
				<View style={Styles.timeContainer}>
					<AntDesign name="clockcircle" size={20} color="orange" />
					<Text style={{ color: "orange" }}> now</Text>
					<MaterialIcons name="keyboard-arrow-down" size={20} color="orange" />
				</View>
			</Pressable>

			{/* previous destination */}
			<View style={Styles.row}>
				<View style={Styles.iconContainer}>
					<MaterialIcons name="home" size={24} color="orange" />
				</View>
				<View style={Styles.iconContainer}>
					<MaterialCommunityIcons
						name="briefcase-edit"
						size={24}
						color="orange"
					/>
				</View>
				<View style={Styles.iconContainer}>
					<Entypo name="star" size={24} color="orange" />
				</View>
				<View style={Styles.iconContainer}>
					<MaterialCommunityIcons name="history" size={24} color="orange" />
				</View>
			</View>
		</View>
	);
}
