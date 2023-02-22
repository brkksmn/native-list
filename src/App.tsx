import {View, Text, TextInput, FlatList} from 'react-native';
import React from 'react';
import Card from './components/Card';
import data from './db/data.json';
import style from './App.style';
export default function App() {
  const datas = data;
  return (
    <View style={style.container}>
      <Text style={style.mainTitle}>PATIKASTORE</Text>
      <TextInput style={style.textInput} placeholder="Ara.." />
      {datas.map(item => (
        <Card
          key={item.id}
          image={item.imgURL}
          cardTitle={item.title}
          price={item.price}
          inStock={item.inStock}
        />
      ))}
    </View>
  );
}
