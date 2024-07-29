import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, images } from '../../constants'

const ProductCard = ({imageSource,name,onPress,cardstyle,borderColor,bgColor}) => {
    return (
        <View style={styles.productContainer}>
      <TouchableOpacity style={[styles.card,cardstyle,{borderColor:borderColor},{backgroundColor:bgColor}]} onPress={onPress} activeOpacity={.7}>
        <Image source={imageSource} style={styles.image} resizeMode='contain'/>
          <Text style={styles.title}>{name}</Text>
          </TouchableOpacity>
          </View>
    )
  }

const styles = StyleSheet.create({
    card:{
        width:SIZES.width*.44,
        backgroundColor: "#F8A44C",
        borderRadius: 15,
        padding: SIZES.width*.065,
        marginTop: SIZES.height*.03,
        marginRight:SIZES.width*.03,
        borderColor:COLORS.gray20,
        borderWidth:1,
        // elevation: 2,
        alignItems: 'center',
        justifyContent:'center',
        gap:SIZES.width*.04
    },
    image: {
        width: SIZES.width * .25,
        height: SIZES.height * .12,
        borderRadius: 5,
        alignItems:"center",
      },
    title:{
        fontSize:SIZES.width*.044,
        color:COLORS.black,
        ...FONTS.sixHundred,
        width: SIZES.width * .35,
        textAlign:'center'
      },
})
export default ProductCard