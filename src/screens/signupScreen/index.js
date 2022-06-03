import {
	View,
	Text,
	SafeAreaView,
	TextInput,
	TouchableOpacity,
	Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import Styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import axios from "axios";

export default function SignUp() {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [phone, setPhone] = useState(null);
	const [otp, setOtp] = useState(true);
	const [otpValue, setOtpValue] = useState("");

	const newPhone = parseInt(phone);
	const phoneNumber = "+233" + `${newPhone}`;

	const getOtp = () => {
		// console.log(phoneNumber);
		const data = {
			type: "WHATSAPP",
			phone: phoneNumber,
		};
		axios
			.post(
				"http://flintbackendapi-env.eba-efhp27cu.eu-west-2.elasticbeanstalk.com/riders/otp",
				data
			)
			.then((res) => {
				setOtp(false);
				// console.log(res);
			})
			.catch((err) => console.log(err));
	};

	const createUser = () => {
		const userData = {
			otp: otpValue,
			phone: phoneNumber,
			email: email,
			name: name,
		};
		// console.log(userData);
		axios
			.post(
				"http://flintbackendapi-env.eba-efhp27cu.eu-west-2.elasticbeanstalk.com/riders",
				userData
			)
			.then((res) => {
				// console.log(res);
				storeData(res.data.access_token);
			})
			.catch((err) => console.log(err));
	};

	//storing the access token in async storage
	const storeData = async (value) => {
		try {
			await AsyncStorage.setItem("accessToken", value);
			navigation.navigate("HomePage");
		} catch (e) {
			// saving error
		}
	};

	useEffect(() => {
		setTimeout(() => {
			setOtp(true);
		}, 60000);
	}, []);

	const navigation = useNavigation();

	return (
		<SafeAreaView style={Styles.container}>
			<View>
				<Text style={Styles.logo}>Flint!</Text>
			</View>
			<TextInput
				style={Styles.inputContainer}
				placeholder={"Name"}
				onChangeText={setName}
			/>
			<TextInput
				style={Styles.inputContainer}
				placeholder={"Email"}
				onChangeText={setEmail}
			/>
			<TextInput
				style={Styles.inputContainer}
				placeholder={"Phone"}
				onChangeText={setPhone}
				editable={otp}
			/>
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
				<TextInput
					placeholder={"OTP"}
					onChangeText={(e) => {
						setOtpValue(e);
						// console.log(e);
					}}
				/>
				<TouchableOpacity style={Styles.otpContainer} onPress={getOtp}>
					<Text>Get OTP</Text>
				</TouchableOpacity>
			</View>
			<TouchableOpacity style={Styles.button} onPress={createUser}>
				<Text style={{ color: "white", fontSize: 22 }}>Sign Up</Text>
			</TouchableOpacity>
			<Pressable
				style={{ marginTop: 20 }}
				onPress={() => {
					navigation.navigate("SignIn");
				}}
			>
				<Text style={{ fontSize: 22, color: "white" }}>
					Already have an account?{" "}
					<Text style={{ fontStyle: "italic" }}>Sign in.</Text>
				</Text>
			</Pressable>
		</SafeAreaView>
	);
}
