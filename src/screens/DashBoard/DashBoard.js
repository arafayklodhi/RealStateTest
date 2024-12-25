import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../../constants/color'
import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'
import RatingBar from '../../components/RatingBar'
import RecomendedContainer from '../../components/RecomendedContainer'
import NearYouCon from '../../components/NearYouCon'

const DashBoard = () => {
    return (
        <View style={styles.container}>
            <Header />
            <SearchBar />
            <RatingBar />
            <ScrollView>
                <RecomendedContainer />
                <NearYouCon />
            </ScrollView>
        </View>
    )
}

export default DashBoard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.WHITE
    }
})