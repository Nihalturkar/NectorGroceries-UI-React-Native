import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react';
import { COLORS, FONTS, SIZES } from '../../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";

const CartCard = ({data, onPress, price, ImageSource, name, pices, iconstyle, iconpriceStyle, crossStyle, rightStyle, cartstyle}) => {
    const [quantity, setQuantity] = useState(1);
    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };
    const handleDecrement = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : prevQuantity));
    };

    return (
        <View style={[styles.cartContainer, cartstyle]}>
            <View>
                <Image source={ImageSource} style={styles.image} resizeMode='contain' />
            </View>
            <View style={{ gap: SIZES.height * .02 }}>
                <View style={styles.details}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.pices}>{pices}</Text>
                </View>
                <View style={[styles.icons, iconstyle]}>
                    <TouchableOpacity onPress={handleDecrement}>
                        <AntDesign name="minus" style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.icontext}>{quantity}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleIncrement}>
                        <AntDesign name="plus" style={[styles.icon, { color: COLORS.green }]} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[{ gap: SIZES.height * .05 }, iconpriceStyle]}>
                <TouchableOpacity onPress={onPress}>
                    <Entypo name="cross" style={[styles.cross, crossStyle]} />
                    <Entypo name="chevron-right" style={[styles.cross, rightStyle]} />
                </TouchableOpacity>
                <Text style={styles.price}>{price}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cartContainer: {
        width: SIZES.width * .9,
        height: SIZES.height * .17,
        borderBottomColor: COLORS.gray20,
        borderBottomWidth: .8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    image: {
        width: SIZES.width * .22,
        height: SIZES.height * .11,
        borderRadius: 5,
        alignItems: "center"
    },
    title: {
        fontSize: SIZES.width * .044,
        color: COLORS.black,
        ...FONTS.sixHundred,
        textAlign: "left",
        width: SIZES.width * .4,
    },
    pices: {
        color: COLORS.gray70,
        fontSize: SIZES.width * .035
    },
    icons: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SIZES.width * .04,
    },
    icontext: {
        fontSize: SIZES.width * .04,
        color: COLORS.black,
        ...FONTS.sixHundred
    },
    icon: {
        borderWidth: .5,
        borderColor: COLORS.gray20,
        padding: 12,
        borderRadius: 15,
        color: COLORS.gray60,
        fontSize: SIZES.width * .04
    },
    price: {
        color: COLORS.black,
        fontSize: SIZES.width * .044,
        ...FONTS.sixHundred
    },
    cross: {
        fontSize: SIZES.width * .07,
        ...FONTS.sixHundred,
        color: COLORS.gray30
    }
});

export default CartCard;
