import React from 'react'
import {ActivityIndicator, Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

export function Button ({
  children: title,
  variant = 'primary',
  size = 'sm',
  onPress,
  isLoading = false,
  loadingText = null,
}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={isLoading}
      className={`flex-row items-center rounded active:opacity-70`} style={[
      { gap: 2 },
      isLoading && containerStyles.loadingState,
      containerStyles[variant] ?? containerStyles.primary,
      containerStyles[size] ?? containerStyles.sm,
    ]}
    >
      {isLoading && (
        <ActivityIndicator size="small"/>
      )}
      <Text className="text-2xl text-black dark:text-white">
        {isLoading && loadingText ? loadingText : title}
      </Text>
    </Pressable>
  )
}

const containerStyles = StyleSheet.create({
  loadingState: {
    opacity: 0.8,
  },
  primary: {
    backgroundColor: '#3273a8',
  },
  secondary: {
    backgroundColor: '#a3bce6',
  },
  danger: {
    backgroundColor: '#e86e6e',
  },
  sm: {
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  xs: {
    paddingVertical: 3,
    paddingHorizontal: 8,
  },
})

const textStyles = StyleSheet.create({
  primary: {
    color: 'white',
    fontWeight: '500'
  },
  secondary: {
    color: '#121212',
    fontWeight: '500'
  },
  danger: {
    color: '#ffffff',
    fontWeight: '600'
  },
  xs: {
    fontSize: 13,
  },
})
