import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import color from '../constants/color'

const { width } = Dimensions.get('screen')
const RatingBar = () => {
    const [activeTab, setActiveTab] = useState('Recomended')
    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.cont}
            >
                {['Recomended', 'Top Rates', 'Best Offers'].map((val, i) => (
                    <Text onPress={() => setActiveTab(val)} key={i} style={styles.text(activeTab == val)}>{val}</Text>
                ))}

            </ScrollView>
        </View>
    )
}

export default RatingBar

const styles = StyleSheet.create({
    container: {
        width: width,
        marginBottom: width * 0.05
    },
    cont: {
        flexGrow: 1,
        paddingLeft: width * 0.07,
        paddingVertical: 5
    },
    text: (focus) => ({
        backgroundColor: focus ? '#E5F1FF' : color.WHITE,
        color: focus ? color.BLUE : color.BLACK,
        padding: width * 0.03,
        borderRadius: width * 0.07,
        elevation: focus ? 1 : 5,
        marginRight: width * 0.05,
        fontWeight: focus ? 'normal' : 'bold'
    })
})