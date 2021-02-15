import { StatusBar } from "expo-status-bar";
import React from "react";
import {
	Image,
	ImageBackground,
	ScrollView,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import styles from "./styles";
import BoxWithShadow from "./BoxWithShadow";
import BeautyBonanza from "./BeautyBonanza";

export default function App() {
	const shopByPatternProducts = [
		{
			imgSrc: require("./assets/Product_Images/product_1.jpg"),
			name: "Angrakha ",
		},
		{
			imgSrc: require("./assets/Product_Images/product_2.jpg"),
			name: "A-Line ",
		},
		{
			imgSrc: require("./assets/Product_Images/product_3.jpg"),
			name: "Anarkali",
		},
		{
			imgSrc: require("./assets/Product_Images/product_4.jpg"),
			name: "Long straight",
		},
		{
			imgSrc: require("./assets/Product_Images/product_5.jpg"),
			name: "Overlay ",
		},
		{
			imgSrc: require("./assets/Product_Images/product_6.png"),
			name: "Flared ",
		},
	];
	const trendingProducts = [
		"7 Seasons ",
		"Ajmera Fashion ",
		"Kinjovilla Fashion",
		"Meet Fashion",
		"Radhika Fashion ",
		"Mannat Fashion",
		"D to D Life Style ",
		"AD Collection",
		"Mela",
	];
	const beautyBonanza = [
		{
			imgSrc: require("./assets/BeautyBonanza/prod_1.jpg"),
			description: "Decorative Designer Table Lamp",
		},
		{
			imgSrc: require("./assets/BeautyBonanza/prod_2.jpg"),
			description: "LuvLap Foldable Wooden Chair ",
		},
		{
			imgSrc: require("./assets/BeautyBonanza/prod_3.jpg"),
			description: "Warli Hand-Painted Living Room & Home",
		},
		{
			imgSrc: require("./assets/BeautyBonanza/prod_4.jpg"),
			description: "Furniture Cafe U Wall Shelf/Racks and Shelves",
		},
	];
	return (
		<ScrollView>
			<StatusBar style="light" />
			{/* STATUS BAR */}
			<View style={styles.notificationBar}>
				<FontAwesome
					name="square"
					style={{ marginRight: 5 }}
					size={24}
					color="#8a8787"
				/>
				<FontAwesome name="circle" size={24} color="#8a8787" />
				<Entypo name="triangle-down" size={40} color="#8a8787" />
			</View>
			{/* NAVIGATION BAR */}
			<View style={styles.titleBar}>
				<Ionicons name="arrow-back" size={35} color="white" />
				<Text style={styles.titleText}>Kurti Store</Text>
				<Ionicons name="ios-search" size={35} color="white" />
			</View>
			<ImageBackground
				resizeMode="cover"
				style={{ width: "100%", height: 250 }}
				source={require("./assets/banner.png")}
			>
				<View style={{ top: 72, left: "55%" }}>
					<Text style={{ color: "white", fontSize: 40 }}>Upto</Text>
					<Text style={{ color: "white", fontSize: 50, fontWeight: "900" }}>
						25% off
					</Text>
				</View>
			</ImageBackground>
			{/* SHOP BY PATTERN  */}
			{/* TITLE BAR */}
			<View style={{ marginLeft: 20, padding: 5, width: "100%" }}>
				<Text
					style={{
						fontSize: 30,
						color: "#e53838",
					}}
				>
					Shop by Pattern
				</Text>
				<Image
					style={{ width: 190, height: 5, borderRadius: 4 }}
					source={require("./assets/line.png")}
				/>
			</View>
			{/* RENDERING THE PRODUCTS */}
			<View
				style={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					justifyContent: "center",
				}}
			>
				{shopByPatternProducts.map((item, idx) => {
					return (
						<View
							key={idx}
							style={{
								display: "flex",
								flexDirection: "column",
								margin: 5,
								marginTop: 10,
								alignItems: "center",
								width: "45%",
							}}
						>
							<Image
								style={{ width: "100%", height: 200, borderRadius: 15 }}
								source={item.imgSrc}
							/>
							<Text style={{ fontSize: 25, color: "#e53838" }}>
								{item.name}
							</Text>
						</View>
					);
				})}
			</View>
			<ImageBackground
				// resizeMode="contain"
				style={{ height: 220, width: "100%" }}
				source={require("./assets/banner_2.png")}
			>
				<View
					style={{
						flexDirection: "column",
						alignItems: "center",
						top: 45,
					}}
				>
					<Text style={{ color: "white", fontSize: 25 }}>
						Trending Products
					</Text>
					<Text
						style={{
							fontSize: 40,
							color: "white",
							backgroundColor: "red",
							height: 50,
							width: 180,
							textAlign: "center",
							borderRadius: 10,
							marginBottom: 10,
							marginTop: 10,
						}}
					>
						Shop Now
					</Text>
					<Text style={{ color: "white", fontSize: 30 }}>Upto 60 % off</Text>
				</View>
			</ImageBackground>
			{/* TRENDING PRODUCTS */}
			<View style={{ marginLeft: 20, padding: 5, alignSelf: "flex-start" }}>
				<Text style={{ fontSize: 30, color: "#e53838" }}>
					Trending Products
				</Text>
				<Image
					style={{ width: 215, height: 5, borderRadius: 4 }}
					source={require("./assets/line.png")}
				/>
			</View>
			<View
				style={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					justifyContent: "space-around",
				}}
			>
				{trendingProducts.map((item) => (
					<BoxWithShadow productName={item} key={item} />
				))}
			</View>

			{/* KNOCK-OUT DEALS */}
			<View style={{ marginLeft: 20, padding: 5, alignSelf: "flex-start" }}>
				<Text style={{ fontSize: 30, color: "#e53838" }}>Knock-out Deals</Text>
				<Image
					style={{ width: 190, height: 5, borderRadius: 4 }}
					source={require("./assets/line.png")}
				/>
			</View>
			{/* BANNERS */}
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-around",
					marginBottom: 5,
					marginTop: 5,
				}}
			>
				<ImageBackground
					resizeMode="cover"
					style={{
						width: 110,
						height: 200,
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}
					source={require("./assets/banner_3.png")}
				>
					<Text style={{ color: "white", fontSize: 20 }}>Under</Text>
					<Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>
						Rs. 299
					</Text>
					<Text style={{ color: "white", fontSize: 20 }}>Off</Text>
				</ImageBackground>
				<ImageBackground
					resizeMode="cover"
					style={{
						width: 110,
						height: 200,
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}
					source={require("./assets/banner_3.png")}
				>
					<Text style={{ color: "white", fontSize: 20 }}>Under</Text>
					<Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>
						Rs. 499
					</Text>
					<Text style={{ color: "white", fontSize: 20 }}>Off</Text>
				</ImageBackground>
				<ImageBackground
					resizeMode="cover"
					style={{
						width: 110,
						height: 200,
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}
					source={require("./assets/banner_3.png")}
				>
					<Text style={{ color: "white", fontSize: 20 }}>Under</Text>
					<Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>
						Rs. 999
					</Text>
					<Text style={{ color: "white", fontSize: 20 }}>Off</Text>
				</ImageBackground>
			</View>

			{/* Beauty Bonanza */}
			<View style={{ marginLeft: 20, padding: 5, flexDirection: "column" }}>
				<Text style={{ fontSize: 30, color: "#e53838" }}>Beauty Bonanza</Text>

				<Image
					style={{ width: 190, height: 5, borderRadius: 4 }}
					source={require("./assets/line.png")}
				/>
			</View>
			<View
				style={{
					flexDirection: "row",
					flexWrap: "wrap",
					justifyContent: "center",
				}}
			>
				{beautyBonanza.map((item, idx) => {
					return <BeautyBonanza item={item} key={item + idx} />;
				})}
			</View>
		</ScrollView>
	);
}
