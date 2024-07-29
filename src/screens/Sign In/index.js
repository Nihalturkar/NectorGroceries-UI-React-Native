import React, { useState } from 'react';
import { View, Text, StatusBar, Image, ScrollView, ImageBackground } from 'react-native';
import styles from './style';
import { COLORS, SIZES, images, icons } from '../../constants';
import InputBox from '../../components/InputBox/input';
import ButtonCustom from '../../components/mainButton/button';

const SignIn = ({navigation}) => {
    return (
        <View style={styles.signIn_container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <StatusBar backgroundColor={COLORS.transparent} translucent={true} barStyle='dark-content' />
                <View>
                    <ImageBackground style={styles.Image} source={images.vegCart} resizeMode='cover' />
                </View>
                <Text style={styles.text}>
                    Get your groceries with nectar
                </Text>
               <View>
                <InputBox
                countryplaceholder="+880"
                placeholder="Enter your mobile number"
                placeholderTextColor={COLORS.gray60}
                keyboardType="numeric"
                maxLength={10}
                counntrymaxLength={3}
                />
               </View>
                <Text style={styles.smallText}>
                    Or connect with social media
                </Text>
                <View style={styles.button}>
                    <ButtonCustom iconMdm={icons.google} btnStyle={styles.btn} children="Continue with Google" btntextStyle={styles.btntxt} />
                </View>
                <View style={[styles.button, { marginTop: SIZES.height * .02 }]}>

                    <ButtonCustom iconMdm={icons.fb} 
                    btnStyle={styles.btn2} 
                    children="Continue with Facebook" 
                    btntextStyle={styles.btntxt}  
                    onPress={()=>navigation.navigate("Number")}
                     />
                </View>
            </ScrollView>
        </View>
    );
};

export default SignIn;
