import React from 'react';
import { StyleSheet, View, Image, SafeAreaView} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

function ShowItemScreen(props) {
	return (
		<SafeAreaView style={styles.container}>
			<View style={{flex: 1, flexDirection: "row", justifyContent: "space-between"}}>
				<View style={styles.closeButton}>
					<MaterialCommunityIcons name={"close"} color={"white"} size={35}/>
				</View>
				<View style={styles.deleteButton}>
					<MaterialCommunityIcons name={"trash-can-outline"} color={"white"} size={35}/>
				</View>
			</View>
			<View>
				<Image resizeMode={"contain"} style={styles.imageItem} source={require('../assets/chair.jpg')} />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	closeButton: {
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
	deleteButton: {
		width: 50,
		height: 50,
		right: 25
	}
});

export default ShowItemScreen;