import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';

const MESSAGES = [{
		id: 1,
		image: require('../assets/mosh.jpg'),
		title: 'title 1',
		subtitle: 'sub 1'
	},
	{
		id: 2,
		image: require('../assets/mosh.jpg'),
		title: 'title 2',
		subtitle: 'sub 2'
	}];

function MessagesScreen(props) {
	return (
		<Screen>
			<FlatList 
				data={MESSAGES}
				keyExtractor={ message => message.id.toString()}
				renderItem={({ item }) => 
					<ListItem
						image={item.image}
						title={item.title}
						subtitle={item.subtitle} />} 
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {

	}
});

export default MessagesScreen;