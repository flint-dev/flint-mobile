import { StyleSheet } from "react-native";
const Styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#f58d16",
	},
	logo: {
		color: "white",
		fontSize: 64,
		fontStyle: "italic",
	},
	inputContainer: {
		width: "90%",
		height: 60,
		backgroundColor: "white",
		borderRadius: 40,
		paddingLeft: 40,
		paddingRight: 40,
		marginTop: 10,
	},
	otpContainer: {
		backgroundColor: "#ede5dd",
		height: "70%",
		width: "20%",
		borderRadius: 15,
		alignItems: "center",
		justifyContent: "center",
		// marginVertical: 10,
	},
	button: {
		backgroundColor: "green",
		width: "50%",
		height: 60,
		borderRadius: 40,
		alignItems: "center",
		justifyContent: "center",
		marginTop: 20,
	},
});

export default Styles;
