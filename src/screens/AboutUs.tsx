import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const AboutUs = () => {
    return (
        <View style={styles.container}>
            {/* About view  */}
            <View style={styles.txtContainer}>
                <Text style={styles.txt}>About</Text>
            </View>
            {/* Other options */}
            <View style={styles.otherOptionContainer}>
                <View style={styles.optionContainer}>
                    {/* About Us view */}
                    <View style={styles.option}>
                        <Text style={styles.optionTitle}>About Us</Text>
                        <Text style={styles.optionSubtitle}>Details</Text>
                        <View style={styles.divider}></View>
                    </View>
                    {/* Privacy view */}
                    <View style={styles.option}>
                        <Text style={styles.optionTitle}>Privacy</Text>
                        <Text style={styles.optionSubtitle}>All information you need to know</Text>
                        <View style={styles.divider}></View>
                    </View>
                    {/* Terms and Conditions view */}
                    <View style={styles.option}>
                        <Text style={styles.optionTitle}>Terms and Conditions</Text>
                        <Text style={styles.optionSubtitle}>All information you need to know</Text>
                        <View style={styles.divider}></View>
                    </View>
                    {/* Settings view */}
                    <View style={styles.option}>
                        <Text style={styles.optionTitle}>Settings</Text>
                        <Text style={styles.optionSubtitle}>Account settings</Text>
                        <View style={styles.divider}></View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'white'
    },
    txtContainer: {
        justifyContent: 'center',
    },
    txt: {
        color: 'black',
        fontSize: 30,
        fontWeight: '500',
        marginHorizontal: 20,
        marginVertical: 20,

    },
    otherOptionContainer: {
        marginBottom: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    optionContainer: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    option: {
        paddingVertical: 10,
    },
    optionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    optionSubtitle: {
        fontSize: 14,
        color: 'gray',
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        marginVertical: 10,
    }
});

export default AboutUs;
