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
import { authenticate } from "../../utils";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
	const [phone, setPhone] = useState("");
	const [otp, setOtp] = useState(true);
	const [otpValue, setOtpValue] = useState("");

	const newPhone = parseInt(phone);
	const phoneNumber = "+233" + `${newPhone}`;

	//getting otp to sign in a user
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
				console.log(res);
			})

			.catch((err) => console.log(err));
	};

	//signing in a user
	const signIn = () => {
		const userData = {
			phone: phoneNumber,
			otp: otpValue,
		};

		axios
			.post(
				"http://flintbackendapi-env.eba-efhp27cu.eu-west-2.elasticbeanstalk.com/riders/auth/login",
				userData
			)
			.then((res) => {
				// console.log(res.data.access_token);
				storeData(res.data.access_token);
			})
			.catch((err) => console.log(err));
	};

	//storing the access token in async storage
	const storeData = async (value) => {
		try {
			await authenticate(value)
			navigation.navigate("HomePage")
		} catch (e) {
			// saving error
		}
	};

	useEffect(() => {
		setTimeout(() => {
			setOtp(true);
		}, 30000);
	}, []);

	const navigation = useNavigation();
	return (
		<SafeAreaView style={Styles.container}>
			<View>
				<Text style={Styles.logo}>Flint!</Text>
			</View>

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
				<TextInput placeholder={"OTP"} onChangeText={setOtpValue} />
				<TouchableOpacity style={Styles.otpContainer} onPress={getOtp}>
					<Text>Get OTP</Text>
				</TouchableOpacity>
			</View>
			<TouchableOpacity style={Styles.button} onPress={signIn}>
				<Text style={{ color: "white", fontSize: 22 }}>Sign In</Text>
			</TouchableOpacity>
			<Pressable
				style={{ marginTop: 20 }}
				onPress={() => {
					navigation.navigate("SignUp");
				}}
			>
				<Text style={{ fontSize: 22, color: "white" }}>
					Don't have an account?{" "}
					<Text style={{ fontStyle: "italic" }}>Sign up.</Text>
				</Text>
			</Pressable>
		</SafeAreaView>
	);
}
