import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ErrorLabel = ({ message, onClose }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.message}>{message}</Text>
            <Text style={styles.closeButton} onPress={onClose}>
                Cerrar
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    message: {
        color: 'white',
        flex: 1,
    },
    closeButton: {
        color: 'white',
        marginLeft: 10,
    },
});

export default ErrorLabel;