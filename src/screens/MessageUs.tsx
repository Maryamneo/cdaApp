import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import InputText from '../reuseableComponent/InputText';
import ThanksScreen from '../screens/ThanksScreen'; // Adjust the import path accordingly

const MessageUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [showThankYou, setShowThankYou] = useState(false);

    const handleSubmit = () => {
        setShowThankYou(true);
    };

    const handleCloseThankYou = () => {
        setShowThankYou(false);
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.innerContainer}>
                    <View style={styles.txtContainer}>
                        <Text style={styles.txt}>Message Us</Text>
                    </View>
                    <View style={styles.inputsContainer}>
                        <View style={styles.inputAndNameContainer}>
                            <Text style={styles.inputTxt}>Name</Text>
                            <View style={styles.inputWrapper}>
                                <InputText
                                    placeholder='Enter Your name'
                                    value={name}
                                    onChangeText={setName}
                                    style={styles.input}
                                />
                            </View>
                        </View>
                        {/* Email */}
                        <View style={styles.inputAndNameContainer}>
                            <Text style={styles.inputTxt}>Email</Text>
                            <View style={styles.inputWrapper}>
                                <InputText
                                    placeholder='Enter Your email here'
                                    value={email}
                                    onChangeText={setEmail}
                                    style={styles.input}
                                />
                            </View>
                        </View>
                        {/* number */}
                        <View style={styles.inputAndNameContainer}>
                            <Text style={styles.inputTxt}>Contact Number</Text>
                            <View style={styles.inputWrapper}>
                                <InputText
                                    placeholder='Enter Your Number here'
                                    value={number}
                                    onChangeText={setNumber}
                                    style={styles.input}
                                />
                            </View>
                        </View>
                        {/* Title */}
                        <View style={styles.inputAndNameContainer}>
                            <Text style={styles.inputTxt}>Title</Text>
                            <View style={styles.inputWrapper}>
                                <InputText
                                    placeholder='Enter Title'
                                    value={title}
                                    onChangeText={setTitle}
                                    style={styles.input}
                                />
                            </View>
                        </View>
                        {/* Message */}
                        <View style={styles.inputAndNameContainer}>
                            <Text style={styles.inputTxt}>Message</Text>
                            <View style={[styles.inputWrapper, styles.description]}>
                                <InputText
                                    placeholder='Enter Description'
                                    value={message}
                                    onChangeText={setMessage}
                                    style={styles.input}
                                />
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                        <Text style={styles.txtBtn}>SUBMIT</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <ThanksScreen visible={showThankYou} onClose={handleCloseThankYou} />
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    innerContainer: {
        width: '80%',
        alignItems: 'center',
    },
    txtContainer: {
        margin: 70,
    },
    txt: {
        color: 'black',
        fontSize: 30,
        fontWeight: '500',
    },
    inputsContainer: {
        width: '100%',
    },
    inputWrapper: {
        width: '100%',
        backgroundColor: '#E7F1FF',
        borderRadius: 10,
        borderColor: '#005DD0',
        borderWidth: 1,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
        padding: 5,
        flexDirection: 'row',
    },
    inputAndNameContainer: {
        marginBottom: 15,
    },
    inputTxt: {
        marginBottom: 10,
        color: 'black',
        fontSize: 20,
        fontWeight: '500'
    },
    input: {
        flex: 1
    },
    description: {
        height: 200,
    },
    btn: {
        alignSelf: 'center',
        margin: 20,
        backgroundColor: '#09264A',
        padding: 15,
        width: 250,
        borderRadius: 50
    },
    txtBtn: {
        color: 'white',
        fontSize: 16,
        alignSelf: 'center',
        fontWeight: '500'
    }
});

export default MessageUs;
