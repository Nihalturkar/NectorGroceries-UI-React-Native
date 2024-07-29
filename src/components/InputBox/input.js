import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Dimensions, TouchableOpacity, Text, Image } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import { COLORS, FONTS, SIZES } from '../../constants';
import Ionicons  from "react-native-vector-icons/Ionicons"


const InputBox = ({
  placeholder,
  search,
  countryBox,
  maxLength,
  keyboardType,
  label,
  onChangeText,
  value,
  editable,
  icon,
  multiline,
  textAlignVertical,
  numberOfLines,
  labelStyle,
  inputboxstyle,
  errors,
  errorstyle,
  secureTextEntry,
  img,
  borderbox,
  rightimgstyle,
  placeholderstyle, placeholderTextColor,
  countryplaceholderstyle,
  countryplaceholder,
  counntrymaxLength
}
) => {
  const [countryFlag, setCountryFlag] = useState('BD');
  const [countryCode, setCountryCode] = useState('+880');

  const [mobileNumber, setMobileNumber] = useState('');
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(true);

  const handleCountrySelect = (country) => {
    setCountryFlag(country.cca2);
  };
  return (
    <View>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <View style={[styles.container, inputboxstyle]}>

        <View style={[styles.countryPicker, countryBox]}>
          <CountryPicker
            onSelect={handleCountrySelect}
            countryCode={countryFlag}
            withCallingCode={countryFlag}
            withFilter={true}
          />
        </View>
        <TextInput
          style={[
            styles.countryplaceholdera,
            icon && { width: SIZES.width * 0.8 },
            countryplaceholderstyle,
          ]}
          placeholder={countryplaceholder}
          maxLength={counntrymaxLength}
          editable={editable}
          keyboardType={keyboardType}
          placeholderTextColor={placeholderTextColor || COLORS.gray50}
          onChangeText={onChangeText}
          value={value}
          multiline={multiline}
          numberOfLines={numberOfLines}
          // textAlignVertical='top'
          textAlignVertical={textAlignVertical}
          secureTextEntry={secureTextEntry && visible}
        />
        <TextInput
          style={[
            styles.placeholdera,
            icon && { width: SIZES.width * 0.8 },
            placeholderstyle,
          ]}
          placeholder={placeholder}
          maxLength={maxLength}
          editable={editable}
          keyboardType={keyboardType}
          placeholderTextColor={placeholderTextColor || COLORS.gray50}
          onChangeText={onChangeText}
          value={value}
          multiline={multiline}
          numberOfLines={numberOfLines}
          // textAlignVertical='top'
          textAlignVertical={textAlignVertical}
          secureTextEntry={secureTextEntry && visible}
        />
        {img && <Image source={img} style={[styles.image, rightimgstyle]} />}
        {icon && (
          <TouchableOpacity
            onPress={() => {
              setVisible(!visible), setShow(!show);
            }}>
            <Ionicons
              name={show ? 'eye' : 'eye-off'}
              size={20}
              color={COLORS.gray70}
            />
          </TouchableOpacity>
        )}
      </View>
      {errors ? (
        <Text
          style={[
            styles.error,
            borderbox && { marginLeft: SIZES.width * 0.02 },
            errorstyle,
          ]}>
          {errors}
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SIZES.width * .88,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    alignSelf: 'center',
    // backgroundColor: COLORS.white,
  },
  countryPicker: {
    width: SIZES.width * .08
  },
  countryplaceholdera: {
    ...FONTS.fourHundred,
    fontSize: SIZES.width * 0.040,
    color: COLORS.black,
    ...FONTS.fiveHundred,
    marginBottom: -3,
    width: SIZES.width * 0.12,
  },
  placeholdera: {
    ...FONTS.fourHundred,
    fontSize: SIZES.width * 0.040,
    color: COLORS.black,
    ...FONTS.fiveHundred,
    marginBottom: -3,
    width: SIZES.width * 0.78,
  },
  label: {
    fontSize: SIZES.width * .04,
    ...FONTS.fiveHundred,
    color: COLORS.gray40,
    marginLeft: SIZES.width * 0.02,
    width: SIZES.width * 0.88,
  },

  icon: {
    width: SIZES.width * 0.06,
    height: SIZES.height * 0.025,
    resizeMode: 'contain',
    tintColor: COLORS.gray60,
  },
});

export default InputBox;