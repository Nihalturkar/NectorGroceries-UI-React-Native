import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckBox from 'react-native-check-box';
import { COLORS, SIZES } from '../../constants';

const CustomCheckBox = ({ title, titlestyle }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleClick = () => {
        setIsChecked(!isChecked);
    };

    const checkBoxStyle = {
    color: isChecked ? 'green' : 'transparent',
    };

    const textStyle = {
        ...titlestyle,
        color: isChecked ? 'green' : 'black',
    };

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:SIZES.height*.018 }}>
            <CheckBox
                style={{ width:SIZES.width*.5,...checkBoxStyle }}
                onClick={handleClick}
                isChecked={isChecked}
                rightText={title}
                rightTextStyle={textStyle}
            />
        </View>
    );
};

export default CustomCheckBox;
