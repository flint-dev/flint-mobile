import { View, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import {
	DrawerContentScrollView,
	DrawerItemList,
} from "@react-navigation/drawer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";

export default function CustomDrawer(props) {
	const [accessToken, setAccessToken] = useState("");
	const [userName, setUserName] = useState("");
	const [number, setNumber] = useState("");
	const [email, setEmail] = useState("");
	//getting jwt from async storage
	const getData = async () => {
		try {
			const value = await AsyncStorage.getItem("userData");
			if (value !== null) {
				// value previously stored
				const user = JSON.parse(value);
				console.log(user);
				setUserName(user.sub.name);
				setNumber(user.sub.phone);
				setEmail(user.sub.email);
			}
		} catch (e) {
			// error reading value
		}
	};

	useEffect(async () => {
		await getData();
	}, []);

	return (
		<DrawerContentScrollView {...props}>
			<View style={{ backgroundColor: "#0c3820", padding: 15 }}>
				{/* user row */}
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					<View
						style={{
							backgroundColor: "#cacaca",
							width: 50,
							height: 50,
							borderRadius: 25,
							marginRight: 20,
						}}
					/>
					<View>
						<Text style={{ color: "white", fontSize: 24 }}>{userName}</Text>
						<Text style={{ color: "lightgrey" }}>5.00 *</Text>
					</View>
				</View>

				{/* message row */}
				<View
					style={{
						borderBottomWidth: 1,
						borderBottomColor: "#919191",
						borderTopWidth: 1,
						borderTopColor: "#919191",
						paddingVertical: 5,
						marginVertical: 10,
					}}
				>
					<Pressable>
						<Text
							style={{ color: "#dddddd", paddingVertical: 5, fontSize: 18 }}
						>
							{number}
						</Text>
					</Pressable>
				</View>
				<View
					style={{
						borderBottomWidth: 1,
						borderBottomColor: "#919191",
						paddingVertical: 5,
					}}
				>
					<Pressable>
						<Text
							style={{ color: "#dddddd", paddingVertical: 5, fontSize: 18 }}
						>
							{email}
						</Text>
					</Pressable>
				</View>
				<View
					style={{
						borderBottomWidth: 1,
						borderBottomColor: "#919191",
						paddingVertical: 5,
					}}
				>
					<Pressable>
						<Text style={{ color: "#dddddd", paddingVertical: 5 }}>
							Messages
						</Text>
					</Pressable>
				</View>

				{/* do more */}
				<Pressable>
					<Text style={{ color: "#dddddd", paddingVertical: 5 }}>
						Do more with your account
					</Text>
				</Pressable>

				{/*make money  */}
				<Pressable>
					<Text style={{ color: "white", paddingVertical: 5 }}>
						Make money driving
					</Text>
				</Pressable>
			</View>

			<DrawerItemList {...props} />
		</DrawerContentScrollView>
	);
}
