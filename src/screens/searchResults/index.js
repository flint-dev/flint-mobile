import { View, Text } from 'react-native'
import React from 'react'
import HomeMap from '../../components/homeMap'
import FlintTypes from '../../components/flintType'

export default function SearchResults() {
  return (
    <View>
      <HomeMap />
      <FlintTypes />
    </View>
  )
}