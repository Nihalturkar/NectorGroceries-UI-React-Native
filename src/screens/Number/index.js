import { View, Text, StatusBar, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import { COLORS, icons, images } from '../../constants'
import InputBox from '../../components/InputBox/input'
const NumberLogin = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.transparent} translucent={true} barStyle='dark-content' />
            <View>
                <ImageBackground style={styles.Image} source={images.bgimg} resizeMode='cover' />
            </View>
            <Text style={styles.text}>
                Enter your mobile number
            </Text>
            <View style={styles.InputBox}>
            <InputBox
                countryplaceholder="+880"
                placeholder="Enter your mobile number"
                placeholderTextColor={COLORS.gray60}
                keyboardType="numeric"
                maxLength={10}
                counntrymaxLength={3}
                />
            </View>

            <TouchableOpacity style={styles.nextBtn} onPress={()=>navigation.navigate("Verification")}>
                <Image  source={icons.next} resizeMode='contain' style={styles.next}/>
            </TouchableOpacity>
        </View>
    )
}

export default NumberLogin