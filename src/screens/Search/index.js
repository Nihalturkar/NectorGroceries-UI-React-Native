import { View, Text, FlatList, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import styles from './style'
import Card from '../../components/Card/Card'
import { COLORS,data } from '../../constants'

const Search = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} translucent={true} barStyle='dark-content' />
        <ScrollView>
         <View style={styles.Beverages}>
            <FlatList
              data={data.Search}
            //   horizontal={true}
              showsVerticalScrollIndicator={false}
              numColumns={2}
              columnWrapperStyle={{justifyContent:'space-around'}}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => {
                return (
                  <Card
                    imageSource={item.img}
                    name={item.name}
                    pices={item.pices}
                    price={item.price}
                    onPress={()=>navigation.navigate("Product")}
                    onPlusPress={()=>navigation.navigate("Cart")}
                  />
                );
              }}
            />
          </View>
          </ScrollView>
    </View>
  )
}

export default Search