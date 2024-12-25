import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomNavigator } from './bottom.navigator';
import CardDetail from '../screens/CardDetail/CardDetail';

const Stack = createNativeStackNavigator();

export const RootNavigator = ({ }) => {
    return (
        <Stack.Navigator
            initialRouteName="BottomNavigator"
            screenOptions={{
                headerShown: false,
            }}>

            {/* BOTTOM TAB */}
            <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
            <Stack.Screen name="CardDetail" component={CardDetail} />
            
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({})