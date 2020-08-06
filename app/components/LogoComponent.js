import React from 'react';
import { Image, Text, StyleSheet, View } from 'react-native';
import { Labels } from '../labels/labels.js';

function LogoComponent(props) {
	return (
		<View style={styles.container}>
			<Image style={styles.logoProperties} source={require('../assets/logo-red.png')} />
			<Text>{Labels.logoText}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		top: 70,
		alignItems: "center"
	},
	logoProperties: {
		height:100,
		width:100
	}
});

export default LogoComponent;