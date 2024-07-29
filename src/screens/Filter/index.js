import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import styles from './style';
import { ScrollView } from 'react-native-gesture-handler';
import { COLORS } from '../../constants';
import Checkbox from '../../components/CheckBox';
import ButtonCustom from '../../components/mainButton/button';

const Filter = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.transparent} translucent={true} barStyle='dark-content' />
        <View style={styles.FilterView}>
           <Text style={styles.headingView}>Categories</Text>
        <View style={styles.chechboxView}>
        <Checkbox title="Eggs" titlestyle={styles.titlestyle}/>
        <Checkbox title="Noodles & Pasta" titlestyle={styles.titlestyle}/>
        <Checkbox title="Chips & Crisps" titlestyle={styles.titlestyle}/>
        <Checkbox title="Fast Food" titlestyle={styles.titlestyle}/>
        </View>
        <Text style={styles.headingView}>Brand</Text>
        <View style={styles.chechboxView}>
        <Checkbox title="Individual Collection" titlestyle={styles.titlestyle}/>
        <Checkbox title="Cocola" titlestyle={styles.titlestyle}/>
        <Checkbox title="Ifad" titlestyle={styles.titlestyle}/>
        <Checkbox title="Kazi Farmas" titlestyle={styles.titlestyle}/>
        </View>
        <View style={styles.button}>
                    <ButtonCustom btnStyle={styles.btn} children="Apply Filter" btntextStyle={styles.btntxt} onPress={()=>navigation.goBack()} />
                </View>
        </View>
    </View>
  )
}

export default Filter;