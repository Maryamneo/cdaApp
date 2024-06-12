import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.headerContainer}>
            <Image
                source={require('../images/logo.png')}
                style={styles.logo}
            />
            <TouchableOpacity onPress={() => navigation.navigate('About Us')}>
                <Feather name="menu" size={30} color="black" />
            </TouchableOpacity>
        </View>
    )

}


const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        paddingRight: 10
    },
    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain'
    },
});

export default Header;
