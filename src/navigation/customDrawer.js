import { View, Text, Pressable } from "react-native";
import React from "react";
import {
	DrawerContentScrollView,
	DrawerItemList,
} from "@react-navigation/drawer";

export default function CustomDrawer(props) {
	return (
		<DrawerContentScrollView {...props}>
			<View style={{ backgroundColor: "#212121", padding: 15 }}>
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
						<Text style={{ color: "white", fontSize: 24 }}>
							Richmond Martey
						</Text>
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
