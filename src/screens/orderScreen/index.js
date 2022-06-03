import { View, SafeAreaView, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import OrderMap from "../../components/orderMap";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Order() {
	const [accessToken, setAccessToken] = useState("");
	const [car, setCar] = useState(null);
	const [order, setOrder] = useState(null);

	const route = useRoute();

	//getting access token from async storage
	const getToken = async () => {
		try {
			setAccessToken(await AsyncStorage.getItem("accessToken"));
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		const getOrder = async () => {
			await getToken();

			const authAxios = axios.create({
				baseURL:
					"http://flintbackendapi-env.eba-efhp27cu.eu-west-2.elasticbeanstalk.com",
				timeout: 1000,
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			});
			const id = route.params.id;
			try {
				// console.log(id);
				authAxios
					.get(`/order/rider/${id}`)
					.then((res) => {
						setOrder(res.data);
						// console.log(res.data);
					})
					.catch((err) => console.log(err));
			} catch (err) {
				console.log(err);
			}
		};
		getOrder();
	}, [order]);

	// if (!order) {
	// 	return <ActivityIndicator size={"large"} color={"orange"} />;
	// }
	// console.log(route.params.id);
	return (
		<SafeAreaView>
			<View style={{ height: "100%" }}>
				<OrderMap car={car} order={order} />
			</View>
		</SafeAreaView>
	);
}
