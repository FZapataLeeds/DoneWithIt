import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function AppButton({ style, title, onPress, color = 'tomato' }) {
	return (
		<View style={style}>
			<TouchableOpacity style={[styles.Button, {backgroundColor: color}]} onPress={onPress}>
				<Text style={styles.text}>{title}</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	Button: {
		backgroundColor: 'tomato',
		width: '100%',
		borderRadius: 25,
		justifyContent: "center",
		alignItems: "center",
		padding: 15
	},
	text: {
		fontSize: 18,
		color: 'white',
		textTransform: "uppercase",
		fontWeight: "bold"
	}
});

export default AppButton;