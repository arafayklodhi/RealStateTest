import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import color from '../../constants/color'
import { images } from '../../constants/assets'

const { width, height } = Dimensions.get('screen')

const topData = [
    {
        top: '1,225',
        bottom: 'sqft'
    },
    {
        top: '3.0',
        bottom: 'Bedrooms'
    },
    {
        top: '1.0',
        bottom: 'Bathrooms'
    },
    {
        top: '4,457',
        bottom: 'Safety Rank'
    },
]

const Description = () => {

    return (
        <View style={styles.container}>
            <View style={styles.topCon}>
                {topData?.map((val, i) => (
                    <View key={i} style={styles.topConCard}>
                        <View style={styles.topConCardImg}>
                            <Image source={images.card} style={styles.img} resizeMode='contain' />
                        </View>
                        <Text style={styles.topConCardText}>{val.top}</Text>
                        <Text style={styles.topConCardText1}>{val.bottom}</Text>
                    </View>
                ))}
            </View>
            <View style={styles.Con2}>
                <Text style={styles.Con2Text}>Listing Agent</Text>
                <View style={styles.Con2a}>
                    <View style={{
                        flexDirection:'row',
                        alignItems:'center'
                    }}>
                        <View style={{
                            width: width * 0.095,
                            height: width * 0.095,
                            marginRight:width*0.02
                        }}>
                            <Image source={images.user} resizeMode='contain' style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: width / 2
                            }} />
                        </View>
                        <View>
                            <Text style={{
                                fontSize: width * 0.035,
                                color: color.BLACK,
                                fontWeight: 'bold'
                            }}>Sandeep S.</Text>
                            <Text style={{
                                fontSize: width * 0.025,
                                color: color.blackOpacity40
                            }}>Partner</Text>
                        </View>
                    </View>
                    <View style={{
                        flexDirection:'row',
                        alignItems:'center'
                    }}>
                        <View style={{
                            width: width * 0.095,
                            height: width * 0.095,
                            backgroundColor:color.WHITE,
                            borderRadius: width / 2,
                            alignItems:'center',
                            justifyContent:'center',
                            elevation:5,
                            marginRight:width*0.02
                        }}>
                            <Image source={images.mail} resizeMode='contain' style={{
                                width: '50%',
                                height: '50%',
                                tintColor:color.BLUE
                            }} />
                        </View>
                        <View style={{
                            width: width * 0.095,
                            height: width * 0.095,
                            backgroundColor:color.WHITE,
                            borderRadius: width / 2,
                            alignItems:'center',
                            justifyContent:'center',
                            elevation:5
                        }}>
                            <Image source={images.call} resizeMode='contain' style={{
                                width: '50%',
                                height: '50%',
                                tintColor:color.BLUE
                            }} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Description

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.WHITE
    },
    topCon: {
        width: width * 0.95,
        alignSelf: 'center',
        marginVertical: width * 0.02,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    topConCard: {
        width: '23%',
        padding: width * 0.02,
        backgroundColor: color.WHITE,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: width * 0.03,
        elevation: 5
    },
    topConCardImg: {
        width: width * 0.06,
        height: width * 0.06,
    },
    img: {
        width: '100%',
        height: '100%',
        tintColor: color.BLUE
    },
    topConCardText: {
        fontSize: width * 0.035,
        color: color.BLUE,
    },
    topConCardText1: {
        fontSize: width * 0.03,
        color: color.blackOpacity40,
    },
    Con2: {
        width: width * 0.95,
        alignSelf: 'center',

    },
    Con2Text: {
        fontSize: width * 0.045,
        color: color.BLACK,
        fontWeight: 'bold'
    },
    Con2a: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical:width*0.03
    }
})