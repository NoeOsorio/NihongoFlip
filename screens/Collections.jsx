import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const Collections = () => {
    const data = [
        { id: 1, title: 'Collection 1' },
        { id: 2, title: 'Collection 2' },
        { id: 3, title: 'Collection 3' },
    ];

    const renderItem = ({ item }) => (
        <View style={{ padding: 10 }}>
            <Text>{item.title}</Text>
        </View>
    );

    return (
        <View style={{ flex: 1 }}>
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Collections</Text>
                <Button title="+" onPress={() => console.log('Add button pressed')} />
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

export default Collections;
