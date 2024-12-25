import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import color from '../constants/color'
import { images } from '../constants/assets'
import { useNavigation } from '@react-navigation/native'

const { width, height } = Dimensions?.get('screen')
const RecomendedCard = () => {
    const navigation=useNavigation()
    return (
        <TouchableOpacity onPress={()=>navigation.navigate('CardDetail')} style={styles.container}>
            <View style={styles.topImg}>
                <Image source={images.house1} resizeMode='stretch' style={styles.img} />
            </View>
            <View style={{ width: '90%', alignSelf: 'center' }}>
                <Text style={styles.titleText}>Lorem House</Text>
                <View style={styles.bottomCon}>
                    <View style={{
                        width: '95%'
                    }}>
                        <Text style={styles.priceText}>$340/month</Text>
                        <View style={{
                            width: '100%',
                            alignItems: 'center',
                            flexDirection: 'row',
                            marginTop: width * 0.025,
                            justifyContent: 'space-between'
                        }}>
                            <View style={{
                                width: '85%',
                                flexDirection: 'row'
                            }}>
                                <View style={{
                                    width: width * 0.05,
                                    height: width * 0.05,
                                }}>
                                    <Image source={images.location} resizeMode='contain' style={styles.img1} />
                                </View>
                                <Text style={styles.locationText}>Avenue, West Side</Text>
                            </View>
                            <View style={{
                                width: width * 0.1,
                                height: width * 0.1,
                                backgroundColor: '#E5F1FF',
                                borderRadius: width * 0.02,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Image source={images.bookmarkActive} resizeMode='contain' style={styles.img2} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default RecomendedCard

const styles = StyleSheet.create({
    container: {
        width: width * 0.6,
        paddingBottom: width * 0.05,
        backgroundColor: color.WHITE,
        borderRadius: width * 0.04,
        elevation: 5,
        marginRight: width * 0.04
    },
    topImg: {
        width: '100%',
        height: width * 0.4,
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: width * 0.04,
        backgroundColor: color.WHITE
    },
    img1: {
        width: '100%',
        height: '100%',
        tintColor: color.DARK_GREY
    },
    img2: {
        width: '30%',
        height: '30%',
        tintColor: color.BLUE
    },
    titleText: {
        color: color.BLACK,
        fontSize: width * 0.05,
        fontWeight: 'bold',
        marginVertical: width * 0.015
    },
    priceText: {
        color: color.BLUE,
        fontSize: width * 0.035,
    },
    locationText: {
        color: color.DARK_GREY,
        fontSize: width * 0.035,
        marginLeft: width * 0.015
    },

    bottomCon: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',

    }
})