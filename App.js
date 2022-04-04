import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Home from "./src/screens/homeScreen";
import DestinationSearch from "./src/screens/destinationSearch";
import SearchResults from "./src/screens/searchResults";

export default function App() {
	return (
		<View>
			<SearchResults />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({});
