import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import InputText from '../reuseableComponent/InputText';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const ContactUs = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.txtContainer}>
                <Text style={styles.txt}>Contact Us</Text>
            </View>
            <View style={styles.inputsContainer}>
                <View style={styles.inputWrapper}>
                    <View style={styles.logo}>
                        <MaterialCommunityIcons name="phone-outline" size={20} color="black" />
                    </View>
                    <InputText
                        placeholder='+9-58721902465'
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <View style={styles.logo}>
                        <FontAwesome name="envelope-o" size={20} color="black" />
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('MessageUs')}
                        style={styles.input}><Text>Send a Message</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    txtContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    txt: {
        color: 'black',
        fontSize: 30,
        fontWeight: '500',
    },
    inputsContainer: {
        flex: 3,
        width: '80%',
        alignItems: 'center',
    },
    inputWrapper: {
        width: '100%',
        backgroundColor: 'white',
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
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 10,
    },
    logo: {
        display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'center'
        alignItems: 'center',
        paddingHorizontal: 15
    },
    messageBox: {
        width: 200
    }
});

export default ContactUs;
