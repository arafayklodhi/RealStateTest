import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { images } from '../constants/assets'
import color from '../constants/color'
import { useNavigation } from '@react-navigation/native'

const { width, height } = Dimensions.get('screen')
const NearConItem = () => {
    const navigation=useNavigation()
    return (
        <TouchableOpacity onPress={()=>navigation.navigate('CardDetail')} style={styles.container}>
            <View style={styles.left}>
                <View style={styles.leftImg}>
                    <Image source={images.house1} resizeMode='stretch' style={[styles.img, styles.imgRadius]} />
                </View>
            </View>
            <View style={styles.right}>
                <View style={styles.rightTop}>
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
                        <Text style={styles.ratingText}>4.9</Text>
                    </View>
                    <Text style={styles.ratingText1}>Appartment</Text>
                </View>
                <View style={styles.rightMid}>
                    <Text style={styles.rightMidText}>Woodland Appartment</Text>
                    <View style={styles.rightMidAddressCon}>
                        <View style={styles.rightMidAddressConImg}>
                            <Image style={styles.img} resizeMode='contain' source={images.location} />
                        </View>
                        <Text style={styles.rightMidAddressConText}>1012 Ocean avanue, New york, USA</Text>
                    </View>
                </View>
                <View style={{
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop:width*0.01
                }}>
                    <View style={{
                        width:'50%',
                        alignItems:'center',
                        justifyContent:'space-between',
                        flexDirection:'row'
                    }}>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginRight:width*0.02,
                        // width:'50%',
                        // backgroundColor:'red'
                    }}>
                        <View style={{
                            width: width * 0.04,
                            height: width * 0.04,
                            marginRight:width*0.01
                        }}>
                            <Image source={images.card} resizeMode='contain' style={{
                                width: '100%',
                                height:'100%',
                            }}/>
                        </View>
                        <Text style={styles.rightBottomText}>1,125</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginRight:width*0.02
                    }}>
                        <View style={{
                            width: width * 0.04,
                            height: width * 0.04,
                            marginRight:width*0.01
                        }}>
                            <Image source={images.card} resizeMode='contain' style={{
                                width: '100%',
                                height:'100%',
                            }}/>
                        </View>
                        <Text style={styles.rightBottomText}>1,125</Text>
                    </View>
                    </View>
                    <Text style={{
                        color:color.BLUE,
                        fontSize:width*0.035,
                        fontWeight:'bold'
                    }}>$340/month</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default NearConItem

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding:width*0.02,
        backgroundColor:color.WHITE,
        elevation:5,
        marginVertical:height*0.02,
        borderRadius:width*0.03,
        justifyContent:'space-between'
    },
    left: {
        width: '30%',
        // backgroundColor: 'blue'
    },
    leftImg: {
        width: width * 0.25,
        height: width * 0.25,
        // backgroundColor: 'red'
    },
    img: {
        width: '100%',
        height: '100%'
    },
    imgRadius: {
        borderRadius: width * 0.04
    },
    right: {
        width: '68%'
    },
    rightTop: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    ratingText: {
        fontSize: width * 0.035,
        color: color.BLACK,
        fontWeight: 'bold'
    },
    rightBottomText: {
        fontSize: width * 0.03,
        color: color.BLACK,
        fontWeight: 'bold'
    },
    ratingText1: {
        fontSize: width * 0.03,
        color: color.BLUE,
        padding: width * 0.02,
        backgroundColor: '#E5F1FF',
        borderRadius: width * 0.05
    },
    rightMid: {
        width: '100%',
    },
    rightMidText: {
        fontSize: width * 0.05,
        color: color.BLACK,
        fontWeight: 'bold'
    },
    rightMidAddressConText: {
        fontSize: width * 0.03,
        color: color.DARK_GREY,
        fontWeight: 'bold'
    },
    rightMidAddressCon: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    rightMidAddressConImg: {
        width: width * 0.04,
        height: width * 0.04,
        marginRight: width * 0.02
    }
})