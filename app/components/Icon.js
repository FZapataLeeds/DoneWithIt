import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Icon({
	name,
	size = 40,
	backgroundColor = "black",
	iconColor = "white"
}) {
	return (
		<View style={{
			height: size,
			width: size,
			backgroundColor,
			borderRadius: size * 0.5,
			alignItems: "center",
			justifyContent: "center"
		}}>
			<MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
		</View>
	);
}

export default Icon;

