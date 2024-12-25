import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import color from '../../constants/color'
import { images } from '../../constants/assets'

const {width,height}=Dimensions.get('screen')
const Gallery = () => {
    const data=[images.house,images.house,images.house,images.house,images.house,images.house,images.house,images.house]
    return (
        <View style={styles.container}>
            <View style={styles.con1}>
                <Text style={{fontSize:width*0.045,color:color.BLACK}}>Gallery <Text style={{color:color.BLUE}}>{`(${data?.length})`}</Text></Text>
                <FlatList
                data={data}
                numColumns={2}
                contentContainerStyle={{
                    paddingVertical:height*0.04
                }}
                renderItem={({index,item})=>(
                <View key={index} style={{
                    width:width*0.45,
                    height:width*0.45,
                    marginRight:width*0.03
                }}>
                    <Image source={item} resizeMode='stretch' style={{
                        width:'100%',
                        height:'100%',
                    }}/>
                </View>

                )}
                />
            </View>
        </View>
    )
}

export default Gallery

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:width*0.02
    },
    con1:{
        width:'90%',
        alignSelf:'center'
        // alignItems:'center'
    }
})