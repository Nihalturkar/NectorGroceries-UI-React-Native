import React from 'react'
import { COLORS, data } from '../../constants';
import { FlatList, ScrollView, StatusBar, View } from 'react-native';
import Card from '../../components/Card/Card';
import styles from './style';

const Beverage = ({navigation}) => {
  return (
    <View style={styles.container}>
        <ScrollView>
      <StatusBar backgroundColor={COLORS.white} translucent={true} barStyle='dark-content' />
         <View style={styles.Beverages}>
            <FlatList
              data={data.BeverageData}
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
                  />
                );
              }}
            />
          </View>
          </ScrollView>
    </View>
  )
}

export default Beverage;
