import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import MessageUs from '../screens/MessageUs';
import ReffralScreen from '../screens/ReffralScreen';
import AboutUs from '../screens/AboutUs';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../reuseableComponent/Header';
import ContactUs from '../screens/ContactUs';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function ContactStack() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Referral" component={ReffralScreen} />
            <Stack.Screen name="Contact" component={ContactUs} />
            <Stack.Screen name="About Us" component={AboutUs} />
            <Stack.Screen name="MessageUs" component={MessageUs} />
        </Stack.Navigator>
    );
}

function BottomTabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName='REFERRALS'
            screenOptions={({ route }) => ({
                tabBarStyle: { backgroundColor: '#09264A' },
                tabBarLabelStyle: { color: 'white' },
                header: () => <Header />,
                tabBarIcon: ({ focused, size }) => {

                    if (route.name === 'HOME') {
                        return <Feather name={'home'} size={size} color={'white'} />
                    } else if (route.name === 'REFERRALS') {
                        return <FontAwesome5 name={'people-arrows'} size={size} color={'white'} />
                    } else if (route.name === 'SUPPORT') {
                        return <MaterialCommunityIcons name={'headphones-settings'} size={size} color={'white'} />
                    }
                },
            })}>
            <Tab.Screen name="HOME" component={HomeScreen} />
            <Tab.Screen name="REFERRALS" component={ContactStack} />
            <Tab.Screen name="SUPPORT" component={ContactUs} />
        </Tab.Navigator>
    );
}

const Navigation = () => {
    return (
        <NavigationContainer>
            <BottomTabNavigator />
        </NavigationContainer>
    );
}

export default Navigation;
