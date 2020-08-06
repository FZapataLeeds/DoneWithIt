import React from 'react';
import { StyleSheet, View, Image, SafeAreaView} from 'react-native';

function ShowItemScreen(props) {
	return (
		<SafeAreaView style={styles.container}>
			<View style={{flex: 1, flexDirection: "row"}}>
				<View style={{backgroundColor: 'tomato', width: 50, height: 50, left: 25}}></View>
				<View style={{backgroundColor: 'blue', width: 50, height: 50, right: -250}}></View>
			</View>
			<View>
				<Image style={styles.imageItem} source={require('../assets/chair.jpg')} />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000'
	},
	imageItem: {
		height: '85%',	
		width: '100%'
	}
});

export default ShowItemScreen;