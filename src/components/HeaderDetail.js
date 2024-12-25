import { Dimensions, Image, Share, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import color from '../constants/color'
import { images } from '../constants/assets'
import { useNavigation } from '@react-navigation/native'

const { width } = Dimensions.get('screen')
const HeaderDetail = () => {
    const navigation=useNavigation()
    const [liked,setLiked]=useState(false)
    const onShare = async () => {
        try {
          const result = await Share.share({
            message:
              'React Native | A framework for building native apps using React',
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          Alert.alert(error.message);
        }
      };
    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.btnCon()}>
                    <Image source={images.back} resizeMode='contain' style={styles.img} />
                </TouchableOpacity>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <TouchableOpacity onPress={()=>onShare()} style={styles.btnCon(true)}>
                    <Image source={images.share} resizeMode='contain' style={styles.img} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setLiked(!liked)} style={styles.btnCon()}>
                    <Image source={liked?images.heartFilled:images.heart} resizeMode='contain' style={styles.img} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HeaderDetail

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        width: width * 0.9,
        marginTop: StatusBar.currentHeight
        // backgroundColor:'red'
    },
    btnCon: (mr) => ({
        width: width * 0.1,
        height: width * 0.1,
        backgroundColor: color.WHITE,
        borderRadius: width / 2,
        marginRight: mr ? width * 0.03 : 0,
        justifyContent: 'center',
        alignItems: 'center'
    }),
    img: {
        width: '50%',
        height: '50%'
    }
})