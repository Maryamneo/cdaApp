import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

const InputText = ({ placeholder, value, onChangeText }: any) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                style={styles.input}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
    },
    input: {
        fontSize: 16,
    },
});

export default InputText;
