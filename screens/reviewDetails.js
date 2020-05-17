import React from 'react';
import Styles from '../assets/global'
import {View, Text} from 'react-native'

export default function ReviewDetails({navigation}) {
  return(
    <View style={Styles.container}>
      <Text>
        {navigation.getParam('title')}
      </Text>
    </View>
  )
}