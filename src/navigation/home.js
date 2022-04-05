import { View, Text } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/homeScreen";
import DestinationSearch from "../screens/destinationSearch";
import SearchResults from "../screens/searchResults";

const Stack = createNativeStackNavigator();

export default function HomeNavigator() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name={"Home"} component={Home} />
			<Stack.Screen name={"DestinationSearch"} component={DestinationSearch} />
			<Stack.Screen name={"SearchResults"} component={SearchResults} />
		</Stack.Navigator>
	);
}
