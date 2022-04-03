import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/homeScreen";
import DestinationSearch from "./src/screens/destinationSearch";

export default function App() {
	return (
		<SafeAreaView>
			<DestinationSearch />
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({});
