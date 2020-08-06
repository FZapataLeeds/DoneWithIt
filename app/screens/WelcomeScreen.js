import React from 'react';
import { StyleSheet, View, Image, Text, ImageBackground } from 'react-native';
import LogoComponent from '../components/LogoComponent';


function WelcomeScreen(props) {
  return (
	<ImageBackground
		style={styles.background}
		source={require('../assets/background.jpg')}>
			<LogoComponent/>
			<View style={styles.loginButton}/>
			<View style={styles.registerButton}/>
	</ImageBackground>
  );
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center"
	},
	loginButton: {
		backgroundColor: 'tomato',
		height: 70,
		width: '100%'
	},
	registerButton: {
		backgroundColor: '#79cdcd',
		height:70,
		width: '100%'
	}
});

export default WelcomeScreen;