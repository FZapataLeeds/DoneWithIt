import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator'
import ListItemDeleteAction from '../components/ListItemDeleteAction'

const INITIAL_MESSAGES = [{
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
	const [messages, setMessages] = useState(INITIAL_MESSAGES);
	const handleDeleteMessage = (message) => {
		setMessages(messages.filter(m => m.id !== message.id));
	}
	return (
		<Screen>
			<FlatList 
				data={messages}
				keyExtractor={ message => message.id.toString()}
				renderItem={({ item }) => 
					<ListItem
						image={item.image}
						title={item.title}
						subtitle={item.subtitle}
						onPress={() => console.log('Message text: ', item)}
						renderRightActions={() => <ListItemDeleteAction onPress={() => handleDeleteMessage(item)}/>} />} 
				ItemSeparatorComponent={ListItemSeparator}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {

	}
});

export default MessagesScreen;