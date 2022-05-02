import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import Router from "./src/navigation/root";

export default function App() {
	return (
		<>
			<Router />
			<StatusBar style="auto" />
		</>
	);
}

const styles = StyleSheet.create({});
