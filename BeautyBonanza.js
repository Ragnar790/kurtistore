import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";

function BeautyBonanza({ item }) {
	return (
		<View>
			<ImageBackground
				resizeMode="cover"
				style={{ width: 160, height: 200, borderRadius: 10, margin: 5 }}
				source={item.imgSrc}
			>
				<Text
					style={{
						color: "red",
						fontSize: 20,
						left: 5,
						top: 2,
						fontWeight: "bold",
					}}
				>
					NEW
				</Text>
				<Image
					style={{ height: 40, width: 40, top: "70%", zIndex: 50 }}
					source={require("./assets/group.png")}
				/>
				<Text
					style={{
						color: "black",
						backgroundColor: "#68f7d6",
						height: 20,
						width: "80%",
						borderRadius: 10,
						left: 25,
						top: 114,
						paddingLeft: 20,
					}}
				>
					Save Rs 100
				</Text>
			</ImageBackground>
			<View style={{ margin: 5 }}>
				<Text style={{ fontWeight: "900", fontSize: 30 }}>
					Rs 299
					<Text
						style={{
							textDecorationLine: "line-through",
							textDecorationStyle: "solid",
							color: "#979797",
							fontSize: 20,
						}}
					>
						{` Rs 399`}
					</Text>
				</Text>
				<Text style={{ width: 160, fontSize: 20 }}>{item.description}</Text>
				{/* // 				style={{ fontWeight: "900", fontSize: 30 }}
// style={{ width: "40%", fontSize: 20 }}> */}
			</View>
		</View>
	);
}

export default BeautyBonanza;
