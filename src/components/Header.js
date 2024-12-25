import { StyleSheet, Text, View, Dimensions, StatusBar, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import color from '../constants/color'
import { images } from '../constants/assets'
import { useDispatch, useSelector } from 'react-redux'
import { changeTab } from '../store/Reducers/AuthReducer/AuthReducer'

const { height, width } = Dimensions.get('screen')
const Header = () => {
    const [state,setState]=useState(false)
    const tabData=useSelector((state) => state?.AuthReducer?.LoginUser)
    const dispatch=useDispatch()
    return (
        <>
            <View style={styles.container}>
                <View style={styles.leftCon}>
                    <Text style={styles.text1}>Let's Find your</Text>
                    <Text style={styles.text2}>Favorite Home</Text>
                </View>
                <TouchableOpacity onPress={()=>setState(!state)} style={styles.imgCon}>
                    <Image source={images.user} resizeMode='contain' style={styles.img} />
                </TouchableOpacity>
            </View>
            {state&&(
            <View style={{
                position:'absolute',
                top:height*0.1,
                right:width*0.15,
                backgroundColor:color.WHITE,
                elevation:5,
                padding:15,
                zIndex:9999,
                width:width*0.3
            }}>
                {[1,2].map((val,i)=>(
                    <TouchableOpacity key={i} style={{
                        width:'95%',
                        alignSelf:'center',
                        paddingVertical:width*0.02,
                        marginBottom:width*0.02,
                        backgroundColor:tabData==val?color.BLUE:color.WHITE,
                        alignItems:'center',
                        justifyContent:'center'
                    }}
                    onPress={()=>{
                        dispatch(changeTab(val))
                        setState(false)
                    }}
                    >
                        <Text style={[styles.text1,{
                            color:tabData==val?color.WHITE:color.BLACK
                        }]}>{`Role ${val}`}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            )}
        </>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        width: width * 0.9,
        alignSelf: 'center',
        marginVertical: width * 0.03,
        marginTop: StatusBar.currentHeight,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    leftCon: {
        width: '70%',
    },
    text1: {
        color: color.DARK_GREY,
        fontSize: width * 0.045
    },
    text2: {
        color: color.BLACK,
        fontSize: width * 0.05,
        fontWeight: 'bold'
    },
    imgCon: {
        width: width * 0.15,
        height: width * 0.15
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: width / 2
    }
})