import React from "react";
import { Text, View } from "react-native";

function BoxWithShadow({ productName }) {
	return (
		<>
			<View
				style={{
					// display: "flex",
					flexDirection: "column",
					alignItems: "center",
					width: "25%",
					height: 100,
					backgroundColor: "white",
					margin: 10,
					// marginTop: 20,
					marginBottom: 70,
					elevation: 5,
					borderRadius: 10,
				}}
			>
				<Text numberOfLines={2} style={{ marginTop: 110 }}>
					{productName}
				</Text>
				{/* style={{ marginTop: 105, marginBottom: 20, fontwr }} */}
			</View>
		</>
	);
}

export default BoxWithShadow;
