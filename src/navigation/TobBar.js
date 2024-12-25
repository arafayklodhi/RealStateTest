import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import color from '../constants/color';
import Description from '../screens/CardDetail/Description';
import Gallery from '../screens/CardDetail/Gallery';
import Review from '../screens/CardDetail/Review';

// import theme from '../theme/theme';
const TobBar = () => {
    const Tab = createMaterialTopTabNavigator();
    return (
        <SafeAreaView style={styles.container}>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: {
                        backgroundColor: color.WHITE,
                    },
                    tabBarLabelStyle: {
                        color: color.BLACK,
                        fontSize: 15,
                        textAlign:'center',
                        opacity: 1,
                    },
                    tabBarIndicatorStyle: {
                        backgroundColor: color.BLUE,
                    },
                }}
            >
                <Tab.Screen name="Description" component={Description} />
                <Tab.Screen name="Gallery" component={Gallery} />
                <Tab.Screen name="Review" component={Review} />
            </Tab.Navigator>
        </SafeAreaView >
    );
};
export default TobBar;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabBar: {
        backgroundColor: 'white',
      },
      tabBarLabel: {
        color: 'black',
        fontSize: 15,
        textAlign: 'center',
        opacity: 1, 
      },
      tabBarIndicator: {
        backgroundColor: 'blue',
      },
});
