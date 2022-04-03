import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/homeScreen";

export default function App() {
	return (
		<View>
			<Home />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({});
