import React, {useState, useRef} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons as Icon } from '@expo/vector-icons';

const AddItem = ({addItem}) => {

    const [text, setText] = useState('');
    const inputRef = useRef(null);

    const onChange = (textValue) => setText(textValue);

    return(
        <View >
            <TextInput placeholder="Add item..."
                       style={styles.input}
                       onChangeText={onChange}
                       ref={inputRef}
            />
            <TouchableOpacity style={styles.btn}
                              onPress={()=>{ addItem(text); inputRef.current.clear();}}
            >
                <Text style={styles.text}>
                    <Icon name="add" color='green' size={20} />
                    Add item
                </Text>
            </TouchableOpacity>   
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16
    },
    btn: {
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 5
    },
    text: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center'
    },
});

export default AddItem;