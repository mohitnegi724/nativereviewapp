import React from 'react';
import Styles from '../assets/global'
import {View, Text} from 'react-native'

export default function Home() {
  return(
    <View style={Styles.container}>
      <Text style={Styles.titleText}>
        Home
      </Text>
    </View>
  )
}
