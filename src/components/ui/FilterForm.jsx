
import React from 'react';
import { TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
export const FilterInput = ({ placeholder, value, onChangeText }) => {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
        />
    );
}


export const FilterButton = ({ onPress, title }) => {
    return (
        <TouchableOpacity style={stylesB.button} onPress={onPress}>
            <Text style={stylesB.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const stylesB = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});
