import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES,images } from '../../constants';
import AntDesign from "react-native-vector-icons/AntDesign"

const Card = ({ data, name,pices, price, imageSource, onPress ,cardstyle ,onPlusPress}) => {
  return (
    <TouchableOpacity style={[styles.card,cardstyle]} onPress={onPress} activeOpacity={.8}>
      <Image source={imageSource} style={styles.image} resizeMode='contain'/>
      <View style={styles.details}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.pices}>{pices}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Text style={styles.price}>{price}</Text>
        <TouchableOpacity style={styles.PlusBtn} onPress={onPlusPress}>
          <AntDesign name="plus" style={styles.icon}/>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width:SIZES.width*.44,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: SIZES.width*.03,
    marginTop: SIZES.height*.03,
    marginHorizontal:SIZES.width*.03,
    shadowColor: COLORS.black,
    borderColor:COLORS.gray20,
    borderWidth:.6,
    // elevation: 2,
    alignItems: 'center',
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
    marginTop: SIZES.height*.02,
    textAlign:"left",
    width: SIZES.width * .38,
  },
  pices:{
    color:COLORS.gray70,
    fontSize:SIZES.width*.035
  },
  iconContainer:{
    marginTop: SIZES.height*.02,
    width: SIZES.width * .35,
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:'center'

  },
  price:{
    color:COLORS.black,
    fontSize:SIZES.width*.044,
    ...FONTS.sixHundred
  },
  PlusBtn:{
    width:SIZES.width*.12,
    height:SIZES.height*.06,
    borderRadius:20,
    backgroundColor:COLORS.green,
    alignItems:'center',
    justifyContent:'center'
  },
  icon:{
   fontSize:SIZES.width*.05,
   ...FONTS.sixHundred
  }
});

export default Card;