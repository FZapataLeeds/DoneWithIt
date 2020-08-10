import React from 'react';
import { StyleSheet, View, Button, ImageBackground } from 'react-native';
import LogoComponent from '../components/LogoComponent';
import AppButton from '../components/AppButton';


function WelcomeScreen(props) {
  return (
	<ImageBackground
		style={styles.background}
		source={require('../assets/background.jpg')}>
			<LogoComponent/>
			<AppButton style={styles.button} title={'Login'} onPress={() => console.log('Pressed')}/>
			<AppButton style={styles.button} title={'Register'} onPress={() => console.log('Pressed')} color={'#79cdcd'}/>
	</ImageBackground>
  );
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
		width: '100%'
	},
	button: {
		paddingHorizontal: 15,
		marginVertical: 10,
		width: '100%'
	}
});

export default WelcomeScreen;