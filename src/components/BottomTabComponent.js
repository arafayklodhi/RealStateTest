import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import React from 'react';
import color from '../constants/color';
// import {useSelector} from 'react-redux';

const { width, height } = Dimensions.get('window');

const DotView = ({ number }) => {
    return (
        <View style={styles.dotView}>
            <Text style={styles.dotText}>{number}</Text>
        </View>
    );
};

const BottomTabComponent = ({ item, focus }) => {
    return (
        <View style={styles.container(item)}>
            {/* Show dot for cart*/}
            <View style={styles.imageView}>
                <Image
                    source={focus ? item.activeIcon : item.inActiveIcon}
                    resizeMode="contain"
                    style={styles.image(focus)}
                />
            </View>
            {focus && (
                <View style={{
                    width:width*0.03,
                    height:width*0.03,
                    borderRadius:width/2,
                    backgroundColor:color.BLUE
                }}/>
      )}
        </View>
    );
};

export default BottomTabComponent;

const styles = StyleSheet.create({
    container: item => ({
        alignItems:'center'
    }),
    imageView: {
        width: width * 0.15,
        height: width * 0.15,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        // backgroundColor: color.LIGHT_PURPLE,
    },
    image:(focus)=> ({
        width: width * 0.05,
        height: width * 0.05,
        tintColor:focus?color.BLUE:color.blackOpacity40
        // backgroundColor:'red'
    }),
    // text:

    //    {
    //     color: 'white',
    //     fontSize: width * 0.04,
    //   },
    text: focus => ({
        color: focus ? color.PINK : color.WHITE,
        fontSize: width * 0.032,
        // marginTop:height*0.01,
        fontFamily: 'Poppins-Medium',
        textAlign: 'center',
    }),
    dotView: {
        alignSelf: 'flex-end',
        position: 'absolute',
        height: width * 0.03,
        borderRadius: width * 0.015,
        minWidth: width * 0.03,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: width * 0.005,
    },
    dotText: {
        color: 'white',
        fontSize: width * 0.02,
    },
});