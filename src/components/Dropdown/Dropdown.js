import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { COLORS, FONTS, SIZES } from '../../constants';

const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];

const DropdownComponent = () => {
  const [value, setValue] = useState(null);

  const renderLabel = () => {
    return (
      <Text style={[styles.label]}>
        Your Zone
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select Zone"
        searchPlaceholder="Search..."
        save="value"
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  dropdown: {
    height: SIZES.height * 0.05,
    borderBottomColor: COLORS.gray30,
    borderBottomWidth: 0.5,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    fontSize: SIZES.width * 0.04,
    ...FONTS.fiveHundred,
    color: COLORS.gray40,
    marginLeft: SIZES.width * 0.02,
    width: SIZES.width * 0.88,
  },
  placeholderStyle: {
    fontSize: SIZES.width * 0.04,
    color: COLORS.black,
  },
  selectedTextStyle: {
    fontSize: SIZES.width * 0.04,
    color: COLORS.black,
  },
  inputSearchStyle: {
    height: SIZES.height * 0.05,
    fontSize: 16,
    color: COLORS.black,
  },
});
