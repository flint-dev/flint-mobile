import { View, Text } from 'react-native'
import React from 'react'
import HomeMap from '../../components/homeMap'
import Message from '../../components/message';
import HomeSearch from '../../components/homeSearch'

export default function Home() {
  return (
    <View>
      <HomeMap />
      <Message />
      <HomeSearch />
    </View>
  )
}