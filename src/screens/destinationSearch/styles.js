import { StyleSheet } from "react-native";
const Styles = StyleSheet.create({
	container: {
		padding: 10,
		height: "100%",
	},
	textInput: {
		height: 50,
		backgroundColor: "#eee",
		marginVertical: 5,
		padding: 10,
		marginLeft: 20,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 10,
	},
	iconContainer: {
		backgroundColor: "#a2a2a2",
		padding: 5,
		borderRadius: 50,
		marginRight: 15,
	},
	locationText: {},
	separator: {
		backgroundColor: "#bababa",
		height: 1,
	},
	listView: {
		position: "absolute",
		top: 110,
	},
	autoCompleteContainer: {
		position: "absolute",
		top: 0,
		left: 10,
		right: 10,
	},
	circle: {
		width: 5,
		height: 5,
		position: "absolute",
		top: 29,
		backgroundColor: "black",
		left: 15,
		borderRadius: 5
	},
	line: {
		width: 1,
		height: 55,
		position: "absolute",
		top: 34,
		backgroundColor: "#c4c4c4",
		left: 16.5,
	},
	square: {
		width: 5,
		height: 5,
		position: "absolute",
		top: 85,
		backgroundColor: "black",
		left: 15,
	},
});

export default Styles;
