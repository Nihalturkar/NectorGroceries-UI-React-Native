import { View, Text, ScrollView, Image, StatusBar, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import { COLORS, images } from '../../constants'
import ButtonCustom from '../../components/mainButton/button'
import InputBox from '../../components/InputBox/input'

const SignUp = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <StatusBar backgroundColor={COLORS.transparent} translucent={true} barStyle='dark-content' />
                <View>
                    <ImageBackground style={styles.Image} source={images.bgimg} resizeMode='contain' />
                </View>
                <View style={styles.LocationView}>
                    <Image source={images.carrot} resizeMode='contain' style={styles.locationImg} />
                </View>
                <Text style={styles.text}>
                    Sign Up
                </Text>
                <Text style={styles.smallText}>
                    Enter your crendentials to continue
                </Text>
                <View style={styles.inputAreaView}>

                <View style={styles.InputBox}>
                        <InputBox
                            countryBox={styles.country}
                            inputboxstyle={styles.input}
                            labelStyle={styles.label}
                            label="Username"
                            countryplaceholderstyle={{display:"none"}}
                            placeholder="Enter Username"
                            placeholderTextColor={COLORS.gray40}
                        />
                    </View>

                    <View style={styles.InputBox}>
                        <InputBox
                            countryBox={styles.country}
                            inputboxstyle={styles.input}
                            labelStyle={styles.label}
                            label="Email"
                            countryplaceholderstyle={{display:"none"}}
                            placeholder="Enter your email"
                            placeholderTextColor={COLORS.gray40}
                        />
                    </View>

                    <View style={styles.InputBox}>
                        <InputBox
                            countryBox={styles.country}
                            inputboxstyle={styles.input}
                            labelStyle={styles.label}
                            label="Password"
                            placeholder="Enter password"
                            countryplaceholderstyle={{display:"none"}}

                            placeholderTextColor={COLORS.gray40}
                            secureTextEntry={true}
                            maxLength={10}
                        />
                    </View>
                    
                        <View style={styles.forgot}>
                         <Text style={styles.services}>By continuing you agree to our </Text>
                         <TouchableOpacity><Text style={{color:COLORS.green}}>Terms of Service</Text></TouchableOpacity>
                         <TouchableOpacity><Text style={{color:COLORS.green}}> and Privacy Policy</Text></TouchableOpacity>
                         </View>
                   
                    <View style={styles.button}>
                    <ButtonCustom btnStyle={styles.btn} children="Sign Up" btntextStyle={styles.btntxt} onPress={()=>navigation.navigate("Login")} />
                </View>
                <View style={styles.signupView} >
                <Text style={styles.account}>
                    Already have an account?
                </Text>
                <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                    <Text style={styles.signup}>
                        SignIn
                    </Text>
                </TouchableOpacity>
                </View>
                </View>
            </ScrollView>
        </View >
    )
}

export default SignUp;