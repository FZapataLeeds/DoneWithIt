import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import ListItem from '../components/ListItem';

function ListingDetailsScreen(props) {
	return (
		<View>
			<Image style={styles.image} source={require('../assets/jacket.jpg')} />
			<View style={styles.detailContainer}>
				<Text style={styles.title}>
					Red jacket for sale
				</Text>
				<Text style={styles.subtitle}>
					£100
				</Text>
			</View>
			<View style={styles.userContainer}>
				<ListItem image={require('../assets/mosh.jpg')} title={'Random Guy'} subtitle={'7 Listings'}/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	detailContainer: {
		padding:20
	},
	image: {
		width: '100%',
		height: 300
	},
	subtitle: {
		fontSize: 20,
		fontWeight: "bold",
		marginVertical: 10,
		color: '#79cdcd'
	},
	title: {
		fontSize: 24,
		fontWeight: "500"
	},
	userContainer: {
		marginVertical: 40
	}
});

export default ListingDetailsScreen;