import React from 'react'
import { ActivityIndicator, View } from 'react-native'

export function Loading () {
  return (
    <View className="justify-center">
        <ActivityIndicator size="large" color="#00ff00" />
    </View>
  )
}