import React, { useState } from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import InputText from '../reuseableComponent/InputText';
import ThanksScreen from './ThanksScreen';

const ReffralScreen = () => {
    const [name, setName] = useState('');
    const [victimNumber, setVictimNumber] = useState('');
    const [alternativeNumber, setAlternativeNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [showThankYou, setShowThankYou] = useState(false);

    const handleSubmit = () => {
        setShowThankYou(true);
    };

    const handleCloseThankYou = () => {
        setShowThankYou(false);
    };


    return (
        <ScrollView>
            <View>
                <ImageBackground
                    source={require('../images/referral.png')}
                    style={styles.img}
                >
                    <View style={{ margin: 20 }}>

                        <Text style={styles.imgTxt}>Make a
                            Referral </Text>
                        <Text style={styles.imgTxt}>For An </Text>
                        <Text style={styles.imgTxt}>Injunction</Text>
                    </View>
                </ImageBackground>
                <View style={styles.textInputs}>
                    <Text style={styles.text}>Victim Name</Text>
                    <View style={styles.inputContainer}>
                        <InputText
                            placeholder="name"
                            value={name}
                            onChangeText={setName}
                        />
                    </View>
                    <View>
                        <Text style={styles.text}>Victim Number</Text>
                        <View style={styles.inputContainer}>
                            <InputText
                                placeholder="Victim Number"
                                value={victimNumber}
                                onChangeText={setVictimNumber}
                            />
                        </View>
                    </View>
                    <Text style={styles.text}>Alternative Number</Text>
                    <View style={styles.inputContainer}>
                        <InputText
                            placeholder="Alternative Number"
                            value={alternativeNumber}
                            onChangeText={setAlternativeNumber}
                        />
                    </View>
                    <View>
                        <Text style={styles.text}>Your Email</Text>
                        <View style={styles.inputContainer}>
                            <InputText
                                placeholder="Email"
                                value={email}
                                onChangeText={setEmail}
                            />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.text}>Your Organization</Text>
                        <View style={styles.inputContainer}>
                            <InputText
                                placeholder="Address"
                                value={address}
                                onChangeText={setAddress}
                            />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.text}>Your Number</Text>
                        <View style={styles.inputContainer}>
                            <InputText
                                placeholder="Number"
                                value={number}
                                onChangeText={setNumber}
                            />
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                    <Text style={styles.txtBtn}>SUBMIT</Text>
                </TouchableOpacity>
            </View >
            <ThanksScreen visible={showThankYou} onClose={handleCloseThankYou} />
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    img: {
        height: 250,
        width: '100%',
        resizeMode: 'contain',
        // paddingLeft: 20
    },
    textInputs: {
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
        width: '85%',
        display: 'flex',
        padding: 20,
        marginHorizontal: 30,
        marginTop: -50,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderBottomWidth: 2,  // Transparent border to mask shadow
        borderBottomColor: 'transparent',
    },
    inputContainer: {
        borderRadius: 40,
        borderColor: 'gray',
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 15, // Adds space between input fields
        borderBottomWidth: 2,  // Transparent border to mask shadow
        borderBottomColor: 'transparent',
        backgroundColor: 'white'
    },
    text: {
        fontSize: 16,
        color: 'black',
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
    },
    imgTxt: {
        color: '#EC7A1C',
        fontSize: 30
    }
});

export default ReffralScreen;
