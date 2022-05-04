import { View, Text, SafeAreaView } from "react-native";
import React from "react";

export default function SignIn() {
	return (
		<SafeAreaView style={Styles.container}>
			<View>
				<Text style={Styles.logo}>Flint!</Text>
			</View>
			<TextInput style={Styles.inputContainer} placeholder={"Name"} />
			<TextInput style={Styles.inputContainer} placeholder={"Email"} />
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
				<Text style={{ color: "white", fontSize: 22 }}>Sign Up</Text>
			</TouchableOpacity>
			<Pressable style={{ marginTop: 20 }}>
				<Text style={{ fontSize: 22, color: "white" }}>
					Already have an account?{" "}
					<Text style={{ fontStyle: "italic" }}>Sign in.</Text>
				</Text>
			</Pressable>
		</SafeAreaView>
	);
}
