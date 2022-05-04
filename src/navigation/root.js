import { View, Text } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNavigator from "./home";
import CustomDrawer from "./customDrawer";

const Drawer = createDrawerNavigator();

export default function RootNavigator() {
	return (
		<NavigationContainer>
			<Drawer.Navigator
				screenOptions={{ headerShown: false }}
				drawerContent={(props) => <CustomDrawer {...props} />}
			>
				<Drawer.Screen name={"Home"} component={HomeNavigator} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}
