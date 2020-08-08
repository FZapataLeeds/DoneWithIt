import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

function Card({title, subtitle, imagePath}) {
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={imagePath} />
			<View style={styles.textContainer}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.subtitle}>{subtitle}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 15,
		backgroundColor: '#fff',
		marginBottom: 20,
		overflow: "hidden"
	},
	image: {
		height: 200,
		width: '100%'
	},
	textContainer: {
		padding: 20
	},
	title: {
		marginBottom: 7,
		fontSize: 14
	},
	subtitle: {
		color: '#79cdcd',
		fontWeight: "bold"
	}
})

export default Card;