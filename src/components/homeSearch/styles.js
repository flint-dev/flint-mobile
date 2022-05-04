import { StyleSheet } from "react-native";
const Styles = StyleSheet.create({
	inputBox: {
		backgroundColor: "white",
		margin: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 10,
		paddingHorizontal: 20,
		borderRadius: 30,
		marginHorizontal: 25,
	},
	inputText: {
		fontSize: 20,
		fontWeight: "600",
		color: "#9e9e9e",
	},
	timeContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		backgroundColor: "#fff",
		padding: 10,
		borderRadius: 20,
		alignItems: "center",
		borderWidth: 1,
		borderColor: "orange",
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		// padding: 20,
		borderBottomWidth: 1,
		borderBottomColor: "#dbdbdb",
		justifyContent: "space-between",
		paddingHorizontal: 80,
		paddingBottom: 10,
	},
	iconContainer: {
		backgroundColor: "white",
		padding: 10,
		borderRadius: 25,
	},
	inputBoxContainer: {
		backgroundColor: "#b0b0b0b0",
		height: "19%",
	},
});

export default Styles;
