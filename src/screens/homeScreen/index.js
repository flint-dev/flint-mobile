import { View, Dimensions, SafeAreaView } from "react-native";
import React from "react";
import HomeMap from "../../components/homeMap";
import Message from "../../components/message";
import HomeSearch from "../../components/homeSearch";

export default function Home() {
	return (
		<SafeAreaView>
			<HomeSearch />
			<View style={{ height: (Dimensions.get("window").height * 6) / 10 }}>
				<HomeMap />
			</View>

			<Message />
		</SafeAreaView>
	);
}
