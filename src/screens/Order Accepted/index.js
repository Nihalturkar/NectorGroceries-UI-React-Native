import { View, Text, StatusBar, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import { COLORS, images } from '../../constants'
import ButtonCustom from '../../components/mainButton/button'

const Order = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.transparent} translucent={true} barStyle='dark-content' />
            <View>
                <ImageBackground style={styles.Image} source={images.bgimg} resizeMode='cover' />
            </View>
            <View style={styles.orderView}>
                <Image source={images.ordersuccess} resizeMode='contain' style={styles.orderImg} />
            </View>
            <Text style={styles.text}>
                Your Order has been
                {"\n"}accepted
            </Text>
            <Text style={styles.smallText}>
                Your items has been placcd and is on {"\n"}
                it’s way to being processed
            </Text>
            <View style={styles.button}>
          <ButtonCustom btnStyle={styles.btn} children="Track Order" btntextStyle={styles.btntxt}/>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate("Home")}><Text style={styles.modallast}>Back To Home</Text></TouchableOpacity>
        </View>
    )
}

export default Order