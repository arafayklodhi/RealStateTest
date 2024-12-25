import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import color from '../constants/color'
import { images } from '../constants/assets'

const { width, height } = Dimensions.get('screen')
const SearchBar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textInputCon}>
                <View style={styles.searchIcon}>
                    <Image source={images.search} resizeMode='contain' style={styles.img1} />
                </View>
                <TextInput placeholder={'Search by Address, City or Zip'} style={styles.textInput} />
            </View>
            <TouchableOpacity style={styles.btn}>
                <Image source={images.filter} resizeMode='contain' style={styles.img} />
            </TouchableOpacity>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        width: width * 0.85,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginBottom: width * 0.05
    },
    textInputCon: {
        width: '80%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: color.WHITE,
        padding: width * 0.01,
        elevation: 5,
        borderRadius: width * 0.04,
        paddingHorizontal: width * 0.05
    },
    textInput: {
        width: '85%',
        color: color.BLACK
        // backgroundColor: 'red'
    },
    btn: {
        width: width * 0.12,
        height: width * 0.12,
        backgroundColor: color.BLUE,
        borderRadius: width * 0.02,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: '50%',
        height: '50%',
        tintColor: color.WHITE
    },
    img1: {
        width: '100%',
        height: '100%'
    },
    searchIcon: {
        width: width * 0.07,
        height: width * 0.07,
    }
})