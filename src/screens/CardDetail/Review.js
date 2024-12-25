import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import ReviewCard from './ReviewCard'
import color from '../../constants/color'

const width =Dimensions.get('screen').width
const Review = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Review</Text>
            <FlatList
            data={[1,1,1,1]}
            renderItem={({index})=>(
                <ReviewCard key={index}/>
            )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
        </View>
    )
}

export default Review

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'red'
    },
    text:{
        width:'90%',
        alignSelf:'center',
        fontSize:width*0.045,
        color:color.BLACK,
        marginTop:width*0.02,
        // fontWeight:'bold'
    },
    separator: {
        height: 2,
        backgroundColor: color.blackOpacity10
    },
})