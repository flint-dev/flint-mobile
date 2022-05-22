import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/homeScreen";
import DestinationSearch from "../screens/destinationSearch";
import SearchResults from "../screens/searchResults";
import SignUp from "../screens/signupScreen";
import SignIn from "../screens/loginScreen";
import SplashScreen from "../components/splashScreen";
import Order from "../screens/orderScreen";

const Stack = createNativeStackNavigator();

export default function HomeNavigator() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name={"SplashScreen"} component={SplashScreen} />
			<Stack.Screen name={"SignIn"} component={SignIn} />
			<Stack.Screen name={"SignUp"} component={SignUp} />
			<Stack.Screen name={"HomePage"} component={Home} />
			<Stack.Screen name={"DestinationSearch"} component={DestinationSearch} />
			<Stack.Screen name={"SearchResults"} component={SearchResults} />
			<Stack.Screen name={"Order"} component={Order} />
		</Stack.Navigator>
	);
}
