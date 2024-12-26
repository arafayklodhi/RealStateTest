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

const facilitiesData = [
    {
        name: 'Car Parking',
        icon: images.parkedCar
    },
    {
        name: 'Swimming Pool',
        icon: images.sport
    },
    {
        name: 'Gym & Fit',
        icon: images.barbell
    },
    {
        name: 'Restaurant',
        icon: images.restaurant
    },
    {
        name: 'Wi-Fi',
        icon: images.wifi
    },
    {
        name: 'Pet Center',
        icon: images.pets
    },
    {
        name: 'Sport clony',
        icon: images.running
    },
    {
        name: 'Laundry',
        icon: images.laundry
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
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <View style={{
                            width: width * 0.095,
                            height: width * 0.095,
                            marginRight: width * 0.02
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
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <View style={{
                            width: width * 0.095,
                            height: width * 0.095,
                            backgroundColor: color.WHITE,
                            borderRadius: width / 2,
                            alignItems: 'center',
                            justifyContent: 'center',
                            elevation: 5,
                            marginRight: width * 0.02
                        }}>
                            <Image source={images.mail} resizeMode='contain' style={{
                                width: '50%',
                                height: '50%',
                                tintColor: color.BLUE
                            }} />
                        </View>
                        <View style={{
                            width: width * 0.095,
                            height: width * 0.095,
                            backgroundColor: color.WHITE,
                            borderRadius: width / 2,
                            alignItems: 'center',
                            justifyContent: 'center',
                            elevation: 5
                        }}>
                            <Image source={images.call} resizeMode='contain' style={{
                                width: '50%',
                                height: '50%',
                                tintColor: color.BLUE
                            }} />
                        </View>
                    </View>
                </View>
                <Text style={styles.Con2Text}>Facilities</Text>
                <View style={styles.Con3}>
                    {facilitiesData.map((val, i) => (
                        <View key={i} style={styles.Con3a}>
                            <View style={{
                                width: width * 0.06,
                                height: width * 0.06,

                            }}>
                                <Image
                                    source={val.icon}
                                    resizeMode='contain'
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        tintColor: color.BLUE
                                    }}
                                />
                            </View>
                            <Text
                                numberOfLines={1}
                                ellipsizeMode='tail'
                                style={{
                                    fontSize: width * 0.03,
                                    color: color.blackOpacity70,

                                }}>{val.name}</Text>
                        </View>

                    ))}
                </View>
                <View style={{ width: '95%', borderBottomWidth: 1, borderBottomColor: color.blackOpacity20, paddingBottom: width * 0.01, alignSelf: 'center', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.Con2Text}>Address</Text>
                    <Text style={styles.Con4Text}>View on Map</Text>
                </View>
                <View style={{
                    width: width * 0.95,
                    alignSelf: 'center',
                    paddingVertical: 5,
                    // backgroundColor: 'red'
                }}>
                    <View style={{
                        width: '100%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        // justifyContent:''
                    }}>
                        <View style={{
                            width: width * 0.04,
                            height: width * 0.04,
                            marginRight: width * 0.02
                        }}>
                            <Image source={images.location} resizeMode='contain' style={{
                                width: '100%',
                                height: '100%'
                            }} />
                        </View>
                        <Text style={{
                            fontSize: width * 0.035,
                            color: color.blackOpacity70
                        }}>Lorem Ipsum is simply dummy text</Text>
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
    Con4Text: {
        fontSize: width * 0.035,
        color: color.BLUE,
        fontWeight: 'bold',
        marginRight: width * 0.01
    },
    Con2a: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: width * 0.03
    },
    Con3: {
        width: "100%",
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        marginVertical: width * 0.02
    },
    Con3a: {
        width: width * 0.2,
        height: width * 0.2,
        backgroundColor: color.WHITE,
        marginRight: width * 0.02,
        marginBottom: width * 0.02,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        borderRadius: width * 0.04
    }
})