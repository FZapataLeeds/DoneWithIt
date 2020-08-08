import React from 'react';
import { StyleSheet, View, Image, SafeAreaView} from 'react-native';

function ShowItemScreen(props) {
	return (
		<SafeAreaView style={styles.container}>
			<View style={{flex: 1, flexDirection: "row", justifyContent: "space-between"}}>
				<View style={styles.cancelButton}></View>
				<View style={styles.likeButton}></View>
			</View>
			<View>
				<Image resizeMode={"contain"} style={styles.imageItem} source={require('../assets/chair.jpg')} />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	cancelButton: {
		backgroundColor: 'tomato',
		width: 50,
		height: 50, 
		left:25
	},
	container: {
		flex: 1,
		backgroundColor: '#000'
	},
	imageItem: {
		height: '100%',	
		width: '100%'
	},
	likeButton: {
		backgroundColor: 'blue',
		width: 50,
		height: 50,
		right: 25
	}
});

export default ShowItemScreen;