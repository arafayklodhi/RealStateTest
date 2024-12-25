import { Dimensions, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RecomendedCard from './RecomendedCard'

const { width } = Dimensions.get('screen')
const RecomendedContainer = () => {
    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.cont}
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {[1, 1, 1, 1].map((val, i) => (
                    <RecomendedCard key={i} />
                ))}
            </ScrollView>
        </View>
    )
}

export default RecomendedContainer

const styles = StyleSheet.create({
    container: {
        width: width
    },
    cont: {
        flexGrow: 1,
        paddingHorizontal: width * 0.09,
        paddingVertical: width * 0.03
    }
})