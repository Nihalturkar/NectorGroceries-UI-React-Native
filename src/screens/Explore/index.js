import { View, Text, StatusBar, TextInput,FlatList } from 'react-native'
import React from 'react'
import styles from './style'
import { COLORS,data } from '../../constants'
import Feather from "react-native-vector-icons/Feather"
import ProductCard from '../../components/ProductCard/ProductCard'
import { ScrollView } from 'react-native-gesture-handler'

const Explore = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} translucent={true} barStyle='dark-content' />
      <View style={styles.InputBox}>
          <Feather style={styles.icon} name="search" />
          <TextInput style={styles.input} placeholder="Search Store" placeholderTextColor={COLORS.gray50} />
        </View>
      <ScrollView>
        <View style={styles.productCards} >
        <FlatList
              data={data.Products}
              // horizontal={true}
              showsVerticalScrollIndicator={false}
              numColumns={2}
              columnWrapperStyle={{justifyContent:'space-around'}}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => {
                return (
                  <ProductCard
                  imageSource={item.img}
                  name={item.title}
                  bgColor={item.bgColor}
                  borderColor={item.borderColor}
                  onPress={()=>navigation.navigate("Beverage")}
                  />
                );
              }}
            />
        </View>
        </ScrollView>
    </View>
  )
}

export default Explore