import { View, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import OrderMap from "../../components/orderMap";
import { useRoute } from "@react-navigation/native";

export default function Order() {
	const [car, setCar] = useState(null);
	const [order, setOrder] = useState(null);

	const route = useRoute();

	useEffect(() => {
		const getOrder = () => {
			try {
				
			} catch (err) {
				console.log(err);
			}
		};
		getOrder();
	}, []);

	console.warn(route.params.id);
	return (
		<SafeAreaView>
			<View style={{ height: "100%" }}>
				<OrderMap car={car} />
			</View>
		</SafeAreaView>
	);
}
