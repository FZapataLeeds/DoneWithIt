import React from 'react';
// import { useDimensions, useDeviceOrientation  } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ShowItemScreen from './app/screens/ShowItemScreen';
import Card from './app/components/Card'
import { View } from 'react-native';

export default function App() {
//   return <WelcomeScreen />;
return (
	<View style={{flex: 1, backgroundColor: 'lightgrey', paddingTop:50, padding: 20}}>
		<Card title={'Red jacket for sale'} subtitle={'£100'} imagePath={require('./app/assets/jacket.jpg')} />
	</View>
	);
}