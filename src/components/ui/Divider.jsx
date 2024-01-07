import React from 'react';
import { View, StyleSheet } from 'react-native';
export default function Divider() {
    return (
      <View style={styles.line}></View>
    );
}

const styles = StyleSheet.create({
   line: {
       height: 1,
       width: '100%',
       backgroundColor: '#ccc', // Change the color to suit your design
   }
});