import { View, Text, ScrollView, ImageBackground, StatusBar } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import { COLORS, SIZES, images, data } from '../../constants'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"

import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtonCustom from '../../components/mainButton/button'
import { FlatListSlider } from 'react-native-flatlist-slider';

const Product = ({ navigation }) => {

    // for increment and decrement the quantity
    const [quantity, setQuantity] = useState(1);
    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };
    const handleDecrement = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : prevQuantity));
    };

    //for red heart 
    const [isLiked, setIsLiked] = useState(false);
    const handleIconPress = () => {
        setIsLiked(!isLiked);
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <StatusBar backgroundColor={COLORS.gray10} translucent={true} barStyle='dark-content' />
                <View style={styles.imageView}>
                    {data.AppleSlider && data.AppleSlider.length > 0 && (
                        <FlatListSlider
                            data={data.AppleSlider}
                            imageKey={"img"}
                            local
                            contentContainerStyle={{ paddingHorizontal: 16 }}
                            indicatorContainerStyle={{ position: 'absolute', bottom: 10 }}
                            indicatorActiveColor={COLORS.green}
                            indicatorInActiveColor={COLORS.gray80}
                            indicatorActiveWidth={10}
                            animation
                            autoScroll={false}
                            timer={10000}
                        />
                    )}
                </View>
                <View style={styles.mainCardView}>
                    <Text style={styles.heading}>Natural Red Apple</Text>
                    <TouchableOpacity onPress={handleIconPress}>
                        <AntDesign
                            name={isLiked ? "heart" : "hearto"}
                            style={[styles.heartIcon, isLiked && styles.likedIcon]}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.quantity}>1kg, Price</Text>
                <View style={styles.priceView}>
                    <View style={[styles.icons]}>
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
                    <Text style={styles.price}>$4.99</Text>
                </View>
                <View style={styles.productDetail}>
                    <View style={styles.ProductView}>
                        <Text style={styles.productHeading}>Natural Red Apple</Text>
                        <TouchableOpacity>
                            <Entypo name="chevron-down" style={styles.heartIcon} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.detail}>
                        Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.
                    </Text>

                </View>

                <View style={styles.NutritionView}>
                    <Text style={styles.productHeading}>Nutritions</Text>
                    <View style={{ flexDirection: 'row', gap: SIZES.width * .05 }}>
                        <Text style={styles.productQuan}>100gr</Text>
                        <Entypo name="chevron-right" style={styles.heartIcon} />
                    </View>
                    <TouchableOpacity>
                    </TouchableOpacity>

                </View>

                <View style={styles.Review}>
                    <Text style={styles.ReviewHeading}>Review</Text>
                    <View style={{ flexDirection: 'row', gap: SIZES.width * .05 }}>
                        <View style={{ alignItems: 'center' }}>
                            <Stars
                                default={5}
                                count={5}
                                half={false}
                                starSize={18}
                                fullStar={<Icon name='star' style={[styles.myStarStyle]} />}
                                emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
                            />
                        </View>
                        <Entypo name="chevron-right" style={styles.heartIcon} />
                    </View>
                    <TouchableOpacity>
                    </TouchableOpacity>

                </View>
                <View style={styles.button}>
                    <ButtonCustom btnStyle={styles.btn} children="Add To Basket" btntextStyle={styles.btntxt} onPress={() => navigation.navigate("Cart")} />
                </View>
            </ScrollView>
        </View>
    )
}

export default Product