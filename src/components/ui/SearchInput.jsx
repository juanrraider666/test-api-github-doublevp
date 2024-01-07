import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

export const SearchInput = ({ placeholder, value, onChangeText }) => {
    return (
        <TextInput
            className={`text-black`}
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});
