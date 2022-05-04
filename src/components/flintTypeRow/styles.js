import { StyleSheet } from "react-native";
const Styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		padding: 15,
		marginHorizontal: 10,
		borderRadius: 15,
		marginTop: 5,
	},
	image: {
		height: 70,
		width: 80,
		resizeMode: "contain",
		borderRadius: 50,
	},
	middleContainer: {
		flex: 1,
		marginHorizontal: 10,
	},
	type: {
		fontWeight: "bold",
		fontSize: 18,
		marginBottom: 5,
	},
	time: {
		color: "#5d5d5d",
	},
	rightContainer: {
		width: 100,
		justifyContent: "flex-end",
		flexDirection: "row",
	},
	price: {
		fontWeight: "bold",
		fontSize: 18,
		marginLeft: 5,
	},
});

export default Styles;
