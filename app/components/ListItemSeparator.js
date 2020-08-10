import React from 'react';
import { View, StyleSheet } from 'react-native';

function ListItemSeparator() {
	return <View style={styles.separator}/>;
}

const styles = StyleSheet.create({
	separator: {
		height: 1,
		width: '100%',
		backgroundColor: 'whitesmoke'
	}
})
export default ListItemSeparator;