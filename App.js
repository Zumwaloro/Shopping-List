import React, {useState} from 'react';
import { View, FlatList, Alert } from 'react-native';
import Header from "./components/Header";
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'

export default function App() {

  const ID = function () {
    //Since UUIDv4 has some bug at the moment and I cannot use it, I got this
    //temporary solution for unique ID from https://gist.github.com/gordonbrander/2230317
    return '_' + Math.random().toString(36).substr(2, 9);
  };

  const [items, setItems] = useState([
    //some initial values
    {id: ID(), text: 'Milk'},
    {id: ID(), text: 'Eggs'},
    {id: ID(), text: 'Butter'},
    {id: ID(), text: 'Tomatoes'}
  ]);

  const deleteItem  = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id)
    });
  }

  const addItem = (item) => {
    if (!item) {
      Alert.alert(
        'Error!',
        'Please enter an item first.',
        [{text: 'Ok'}],
        {cancallable: true}
      )
    } else {
      setItems(prevItems => {
        return [{id: ID(), text: item}, ...prevItems];
      })
    }
  } 

  return (
    <View>
      <Header label="Shopping List"/>
      <AddItem addItem={addItem}/>
      <FlatList 
        data={items}
        renderItem={ ({item}) => <ListItem item={item} deleteItem={deleteItem} /> }
      />
    </View>
  );
}
