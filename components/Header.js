import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = ({label}) => {
    return(
        <View style={styles.header}>
            <Text style={styles.text}>{label}</Text>       
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 50,
        backgroundColor: 'darkslateblue',
    },
    text: {
        fontSize: 25,
        textAlign: 'center',
        color: '#fff'
    }
});

export default Header;