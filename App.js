import React from 'react';
// import { useDimensions, useDeviceOrientation  } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ShowItemScreen from './app/screens/ShowItemScreen';
import Card from './app/components/Card'
import { View } from 'react-native';
import MessagesScreen from './app/screens/MessagesScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';

export default function App() {
//   return <WelcomeScreen />;
return <Screen>
		<ListItem title="my title" subtitle="my subtitle"
		/>
	</Screen>
}