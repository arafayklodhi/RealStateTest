import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, View, Dimensions } from 'react-native';
import BottomTabComponent from '../components/BottomTabComponent';
import { images } from '../constants/assets';
import DashBoard from '../screens/DashBoard/DashBoard';
import color from '../constants/color';
import { useSelector } from 'react-redux';
// import { images } from '../constants/assets';



//Screens

// dimenstion
const { width, height } = Dimensions.get('window');

const Tab = createBottomTabNavigator();
const tabData=useSelector((state) => state?.AuthReducer?.LoginUser)
console.log(tabData)
const bottomTabArr = [
    {
        id: 1,
        name: 'HomeScreen',
        barName: 'Home',
        component: DashBoard,
        activeIcon: images.homeActive,
        inActiveIcon: images.home,
    },
    {
        id: 2,
        name: 'Location',
        barName: 'Location',
        component: DashBoard,
        activeIcon: images.locationActive,
        inActiveIcon: images.location,
    },
    {
        id: 3,
        name: 'Bookmark',
        barName: 'Bookmark',
        component: DashBoard,
        activeIcon: images.bookmarkActive,
        inActiveIcon: images.bookmark,
    },
    {
        id: 4,
        name: 'Profile',
        barName: 'Profile',
        component: DashBoard,
        activeIcon: images.profileActive,
        inActiveIcon: images.profile,
    }
];

const bottomTabArr1 = [
    {
        id: 1,
        name: 'HomeScreen',
        barName: 'Home',
        component: DashBoard,
        activeIcon: images.homeActive,
        inActiveIcon: images.home,
    },
    {
        id: 2,
        name: 'Contracts',
        barName: 'Contracts',
        component: DashBoard,
        activeIcon: images.contractActive,
        inActiveIcon: images.contract,
    },
    {
        id: 3,
        name: 'Profile',
        barName: 'Profile',
        component: DashBoard,
        activeIcon: images.profileActive,
        inActiveIcon: images.profile,
    },
    {
        id: 4,
        name: 'Artificial Intelligence',
        barName: 'AI',
        component: DashBoard,
        activeIcon: images.Ai,
        inActiveIcon: images.Ai,
    },
    {
        id: 5,
        name: 'Profile1',
        barName: 'Profile1',
        component: DashBoard,
        activeIcon: images.profileActive,
        inActiveIcon: images.profile,
    },
];

const tabsToRender = tabData === 1 ? bottomTabArr : bottomTabArr1;


export const BottomNavigator = () => {
    const tabData = useSelector((state) => state?.AuthReducer?.LoginUser); // Fetch tabData from Redux

    // Dynamically choose the appropriate tab array
    const tabsToRender = tabData === 1 ? bottomTabArr : bottomTabArr1;

    return (
        <View style={{ flex: 1 }}>
            <Tab.Navigator
                key={tabData} // Force re-render when tabData changes
                initialRouteName="HomeScreen"
                screenOptions={{
                    tabBarStyle: {
                        width: width,
                        alignSelf: 'center',
                        height: height * 0.09,
                        paddingTop: height * 0.008,
                        borderTopWidth: 1,
                        borderTopColor: color.blackOpacity20,
                    },
                }}
            >
                {tabsToRender.map((singleItem) => (
                    <Tab.Screen
                        name={singleItem.name}
                        component={singleItem.component}
                        key={singleItem.id}
                        options={{
                            tabBarLabel: '',
                            headerShown: false,
                            tabBarIcon: ({ focused }) => (
                                <BottomTabComponent focus={focused} item={singleItem} />
                            ),
                        }}
                    />
                ))}
            </Tab.Navigator>
        </View>
    );
};