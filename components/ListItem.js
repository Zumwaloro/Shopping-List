import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons as Icon } from '@expo/vector-icons';

const ListItem = ({item, deleteItem}) => {
    return(
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.itemView}>
                <Text style={styles.text}>{item.text}</Text>
                <Icon name="delete" size={20} color='firebrick'
                 onPress={()=> deleteItem(item.id)}
                />
            </View>       
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 18
    },
    itemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listItem: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee'
    }
});

export default ListItem;