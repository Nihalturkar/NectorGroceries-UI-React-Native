import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, images } from '../../constants'

const Card1 = ({imageSource,name,onPress,cardstyle,bgcolor}) => {
  return (
    <TouchableOpacity style={[styles.card,cardstyle,{backgroundColor:bgcolor}]} onPress={onPress}>
      <Image source={imageSource} style={styles.image} resizeMode='contain'/>
        <Text style={styles.title}>{name}</Text>
        </TouchableOpacity>
  )
}
const styles=StyleSheet.create({
    card:{
        width:SIZES.width*.6,
        backgroundColor: "#F8A44C",
        borderRadius: 15,
        padding: SIZES.width*.02,
        marginTop: SIZES.height*.03,
        marginHorizontal:SIZES.width*.03,
        shadowColor: COLORS.black,
        borderColor:COLORS.gray20,
        borderWidth:.6,
        // elevation: 2,
        alignItems: 'center',
        flexDirection:'row',
        alignItems:"center",
        gap:SIZES.width*.04
    },
    image: {
        width: SIZES.width * .22,
        height: SIZES.height * .11,
        borderRadius: 5,
        // backgroundColor:'red',
        alignItems:"center"
      },
    title:{
        fontSize:SIZES.width*.044,
        color:COLORS.black,
        ...FONTS.sixHundred,
        width: SIZES.width * .38,
      },
})

export default Card1