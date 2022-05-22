import { View, SafeAreaView } from "react-native";
import React from "react";
import HomeMap from "../../components/homeMap";
import Message from "../../components/message";
import HomeSearch from "../../components/homeSearch";

export default function Home() {
	return (
		<SafeAreaView>
			<HomeSearch />
			<View style={{ height: "64%" }}>
				<HomeMap />
			</View>

			<Message />
		</SafeAreaView>
	);
}
