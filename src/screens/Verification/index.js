import { View, Text, StatusBar, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import { COLORS, icons, images } from '../../constants'
import InputBox from '../../components/InputBox/input'

const Verification = ({navigation}) => {
  return (
    <View style={styles.container}>
    <StatusBar backgroundColor={COLORS.transparent} translucent={true} barStyle='dark-content' />
    <View>
        <ImageBackground style={styles.Image} source={images.bgimg} resizeMode='cover' />
    </View>
    <Text style={styles.text}>
    Enter your 4-digit code
    </Text>
    <View style={styles.InputBox}>
        <InputBox
        countryBox={styles.country}
            inputboxstyle={styles.input}
            labelStyle={styles.label}
            label="Code"
            placeholder="----"
            countryplaceholderstyle={{display:"none"}}
            placeholderTextColor={COLORS.black}
            keyboardType="numeric"
            maxLength={4}
        />
    </View>

    <View style={styles.btnView}>
     <TouchableOpacity>
     <Text style={styles.resend}>
        Resend Code
     </Text>
     </TouchableOpacity>
    <TouchableOpacity style={styles.nextBtn} onPress={()=>navigation.navigate("Location")}>
        <Image  source={icons.next} resizeMode='contain' style={styles.next}/>
    </TouchableOpacity>
    </View>
</View>
  )
}

export default Verification