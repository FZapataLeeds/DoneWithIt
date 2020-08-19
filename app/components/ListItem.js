import React from 'react';
import { View, StyleSheet, Image, Text, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

function ListItem({image, title, subtitle, onPress, renderRightActions}) {
	return (
		<Swipeable renderRightActions={renderRightActions}>
			<TouchableHighlight underlayColor={'lightgray'} onPress={onPress}>
				<View style={styles.container}>
					<Image style={styles.image} source={image}/>
					<View style={styles.detailContainer}>
						<Text style={styles.title}>
							{title}
						</Text>
						<Text style={styles.subtitle}>
							{subtitle}
						</Text>
					</View>
				</View>
			</TouchableHighlight>
		</Swipeable>
	);
}
const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "flex-start",
		padding: 15
	},
	detailContainer: {
		flexDirection: "column",
		marginLeft: 10	
	},
	image: {
		height: 70,
		width: 70,
		borderRadius: 35
	},
	subtitle: {
		color: 'gray',
		fontWeight: "500",
		fontSize: 14,
		marginVertical: 5
	},
	title: {
		fontWeight: "500",
		fontSize: 16
	}
});

export default ListItem;