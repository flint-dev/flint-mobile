import {
	View,
	Dimensions,
	SafeAreaView,
	ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import HomeMap from "../../components/homeMap";
import Message from "../../components/message";
import HomeSearch from "../../components/homeSearch";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";

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
