import React, {useState} from 'react';
import Styles from '../assets/global'
import {View, Text, FlatList, TouchableOpacity} from 'react-native'

export default function Home({navigation}) {
  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
  ]);
  return(
    <View style={Styles.container}>
      <FlatList data={reviews} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
          <Text style={Styles.titleText}>{ item.title }</Text>
        </TouchableOpacity>
      )}/>
    </View>
  )
}
