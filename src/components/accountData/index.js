import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, icons } from '../../constants'
import Feather from "react-native-vector-icons/Feather"
const AccountCard = ({imagesource,title}) => {
  return (
      <TouchableOpacity>
    <View style={styles.card}>
      <View style={styles.smallView}>
        <Image source={imagesource} resizeMode='contain' style={styles.icon}/>
        <Text style={styles.text}>{title}</Text>
      </View>
      <TouchableOpacity><Feather name="chevron-right" style={styles.righticon}/></TouchableOpacity>
    </View>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    card:{
        width:SIZES.width*1,
        height:SIZES.height*.075,
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:SIZES.width*.04,
        borderBottomColor:COLORS.gray30,
        borderBottomWidth:.5
    },
    icon:{
        width:SIZES.width*.05,
        height:SIZES.height*.06
    },
    text:{
        fontSize:SIZES.width*.045,
        color:COLORS.black,
        ...FONTS.fiveHundred
    },
    righticon:{
        fontSize:SIZES.width*.06,
        color:COLORS.black,
        ...FONTS.sixHundred
    },
    smallView:{
        flexDirection:'row',
        alignItems:'center',
        gap:SIZES.width*.05
    }

})

export default AccountCard