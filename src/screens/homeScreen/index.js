import { View, Dimensions } from "react-native";
import React from "react";
import HomeMap from "../../components/homeMap";
import Message from "../../components/message";
import HomeSearch from "../../components/homeSearch";

export default function Home() {
	return (
		<View>
			<View style={{ height: (Dimensions.get("window").height * 5) / 10 }}>
				<HomeMap />
			</View>

			<Message />
			<HomeSearch />
		</View>
	);
}
