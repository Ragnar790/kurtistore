import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
	notificationBar: {
		backgroundColor: "#621535",
		width: "100%",
		height: 40,
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
	},
	titleBar: {
		backgroundColor: "#4c102b",
		width: "100%",
		height: 100,
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},
	titleText: {
		color: "white",
		fontSize: 40,
		fontWeight: "bold",
	},
});
export default styles;
