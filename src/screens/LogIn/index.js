import { View, Text, ScrollView, Image, StatusBar, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import { COLORS, icons, images } from '../../constants'
import ButtonCustom from '../../components/mainButton/button'
import InputBox from '../../components/InputBox/input'

const Login = ({ navigation }) => {
    
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
                    Loging
                </Text>
                <Text style={styles.smallText}>
                    Enter your emails and password
                </Text>
                <View style={styles.inputAreaView}>

                    <View style={styles.InputBox}>
                        <InputBox
                            countryBox={styles.country}
                            inputboxstyle={styles.input}
                            labelStyle={styles.label}
                            label="Email"
                            countryplaceholderstyle={{display:"none"}}
                            placeholder="Enter your email"
                            placeholderTextColor={COLORS.gray40}
                            autoCapitalize="none"
                        />
                    </View>

                    <View style={styles.InputBox}>
                        <InputBox
                            countryBox={styles.country}
                            inputboxstyle={styles.input}
                            labelStyle={styles.label}
                            label="Password"
                            countryplaceholderstyle={{display:"none"}}
                            placeholder="Enter password"
                            placeholderTextColor={COLORS.gray40}
                            secureTextEntry={true}
                            maxLength={10}
                            icon={true}
                            
                        />
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.forgot}>
                            Forgot Password?
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.button}>
                    <ButtonCustom btnStyle={styles.btn} children="Log In" btntextStyle={styles.btntxt} onPress={()=>navigation.navigate("Home")} />
                </View>
                <View style={styles.signupView} >
                <Text style={styles.account}>
                    Don't have an account?
                </Text>
                <TouchableOpacity onPress={()=>navigation.navigate("SignUp")}>
                    <Text style={styles.signup}>
                        Signup
                    </Text>
                </TouchableOpacity>
                </View>
                </View>
            </ScrollView>
        </View >
    )
}

export default Login;