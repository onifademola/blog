import React, { useContext } from 'react';
import { Text, View, StyleSheet, FlatList, Button } from 'react-native';

import { Context } from '../context/BlogContext';

const IndexScreen = () => {
    const {state, addBlogPost} = useContext(BlogContext);

    return <View>
        <Text>Blog Index Screen</Text>
        <Button title="Add Post" onPress={addBlogPost} />
        <FlatList 
            data={state}
            keyExtractor={blogPost => blogPost.tiltle}
            renderItem={({item}) => {
            return <Text>{item.title}</Text>
            }}
        />
    </View>
};

const styles = StyleSheet.create({

});

export default IndexScreen;