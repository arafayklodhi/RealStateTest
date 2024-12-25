import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../constants/color'
import NearConItem from './NearConItem'

const { width, height } = Dimensions?.get('window')
const NearYouCon = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topCon}>
                <Text style={styles.topConText}>Near You</Text>
                <Text style={styles.topConText1}>More</Text>
            </View>
            <FlatList
            data={[1,1,1,1,1]}
            renderItem={({index})=>(
                <NearConItem key={index}/>
            )}
            />
        </View>
    )
}

export default NearYouCon

const styles = StyleSheet.create({
    container: {
        width: width * 0.9,
        alignSelf: 'center',
    },
    topCon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    topConText: {
        fontSize: width * 0.05,
        color: color.BLACK
    },
    topConText1: {
        fontSize: width * 0.035,
        color: color.DARK_GREY,
        fontWeight: 'bold'
    },
})