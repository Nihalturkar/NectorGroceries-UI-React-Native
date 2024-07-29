import React from 'react';
import { View, Text, StatusBar, ImageBackground, Image, ScrollView } from 'react-native';
import styles from './style';
import { COLORS, images, data } from '../../constants';
import InputBox from '../../components/InputBox/input';
import ButtonCustom from '../../components/mainButton/button';
import Dropdown from '../../components/Dropdown/Dropdown';



const Location = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <StatusBar backgroundColor={COLORS.transparent} translucent={true} barStyle="dark-content" />
                <View>
                    <ImageBackground style={styles.Image} source={images.bgimg} resizeMode="contain" />
                </View>
                <View style={styles.LocationView}>
                    <Image source={images.location} resizeMode="contain" style={styles.locationImg} />
                </View>
                <Text style={styles.text}>Select Your Location</Text>
                <Text style={styles.smallText}>
                    Switch on your location to stay in tune with{'\n'}
                    what’s happening in your area
                </Text>

                <View style={styles.inputAreaView}>
                    <View style={styles.Dropdown}>
                        <Dropdown/>
                    </View>


                    <View style={styles.InputBox}>
                        <InputBox
                            countryBox={styles.country}
                            inputboxstyle={styles.input}
                            labelStyle={styles.label}
                            label="Your Area"
                            placeholder="Type of your area"
                            countryplaceholderstyle={{display:"none"}}
                            placeholderTextColor={COLORS.gray40}
                        />
                    </View>
                </View>
                <View style={styles.button}>
                    <ButtonCustom btnStyle={styles.btn} btntextStyle={styles.btntxt} onPress={() => navigation.navigate('Login')}>
                        Submit
                    </ButtonCustom>
                </View>
            </ScrollView>
        </View>
    );
};

export default Location;
