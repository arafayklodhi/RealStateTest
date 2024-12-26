import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { images } from '../../constants/assets'
import HeaderDetail from '../../components/HeaderDetail'
import color from '../../constants/color'
import TobBar from '../../navigation/TobBar'
import PriceComponent from './PriceComponent'

const { width } = Dimensions.get('screen')
const CardDetail = () => {

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{
                flexGrow: 1
            }}>
                <ImageBackground style={{
                    width: width,
                    height: width * 0.7
                }} source={images.house2} resizeMode='stretch' imageStyle={{
                    width: '100%',
                    height: '100%'
                }}>
                    <HeaderDetail />
                </ImageBackground>
                <View style={styles.upperCon}>
                    <View style={styles.upperCon1}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <View style={{
                                width: width * 0.045,
                                height: width * 0.045,
                                marginRight: width * 0.01
                            }}>
                                <Image source={images.star} resizeMode='contain' style={{
                                    width: '100%',
                                    height: '100%',
                                }} />
                            </View>
                            <Text style={styles.ratingText}>{`4.9 (6.8k reviews)`}</Text>
                        </View>
                        <Text style={styles.ratingText1}>Appartment</Text>
                    </View>
                    <Text style={styles.rightMidText}>Woodland Appartment</Text>
                    <Text style={styles.rightMidAddressConText}>1012 Ocean avanue, New york, USA</Text>
                </View>
                <TobBar />
            </ScrollView>
            <View style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 9999,
                bottom: 0,
                position: 'absolute',
                borderTopWidth: 1,
                borderTopColor: color.blackOpacity10
            }}>
                <PriceComponent />
            </View>
        </View>
    )
}

export default CardDetail

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upperCon: {
        width: width * 0.9,
        alignSelf: 'center',
        paddingVertical: width * 0.02
    },
    upperCon1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    ratingText: {
        fontSize: width * 0.035,
        color: color.blackOpacity40,
    },
    ratingText1: {
        fontSize: width * 0.03,
        color: color.BLUE,
        padding: width * 0.02,
        backgroundColor: '#E5F1FF',
        borderRadius: width * 0.05
    },
    rightMidText: {
        fontSize: width * 0.07,
        color: color.BLACK,
        fontWeight: 'bold'
    },
    rightMidAddressConText: {
        fontSize: width * 0.03,
        color: color.blackOpacity40
    },
    rightMidAddressConText1: {
        fontSize: width * 0.045,
        color: color.BLACK
    },

})