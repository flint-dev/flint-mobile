import {
	View,
	Text,
	SafeAreaView,
	TextInput,
	TouchableOpacity,
	Pressable,
} from "react-native";
import React from "react";
import Styles from "./styles";

export default function SignIn() {
	return (
		<SafeAreaView style={Styles.container}>
			<View>
				<Text style={Styles.logo}>Flint!</Text>
			</View>

			<TextInput style={Styles.inputContainer} placeholder={"Phone"} />
			<View
				style={[
					Styles.inputContainer,
					{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
					},
				]}
			>
				<TextInput placeholder={"OTP"} />
				<TouchableOpacity style={Styles.otpContainer}>
					<Text>Get OTP</Text>
				</TouchableOpacity>
			</View>
			<TouchableOpacity style={Styles.button}>
				<Text style={{ color: "white", fontSize: 22 }}>Sign In</Text>
			</TouchableOpacity>
			<Pressable style={{ marginTop: 20 }}>
				<Text style={{ fontSize: 22, color: "white" }}>
					Don't have an account?{" "}
					<Text style={{ fontStyle: "italic" }}>Sign up.</Text>
				</Text>
			</Pressable>
		</SafeAreaView>
	);
}
