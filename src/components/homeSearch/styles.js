import { StyleSheet } from "react-native";
const Styles = StyleSheet.create({
	inputBox: {
		backgroundColor: "#b0b0b0b0",
		margin: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 10,
	},
	inputText: {
		fontSize: 20,
		fontWeight: "600",
		color: "#6e6e6e",
	},
	timeContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		backgroundColor: "#fff",
		padding: 10,
		borderRadius: 15,
		alignItems: "center",
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		padding: 20,
		borderBottomWidth: 1,
		borderBottomColor: "#dbdbdb",
	},
	iconContainer: {
		backgroundColor: "#b3b3b3",
		padding: 10,
		borderRadius: 25,
	},

	destinationText: {
		marginLeft: 15,
		fontSize: 16,
		fontWeight: "600",
	},
});

export default Styles;
