import { View, Text, StatusBar, Image, TextInput, TouchableOpacity,FlatList, ScrollView } from 'react-native';
import React, { useState } from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import styles from './style';
import { COLORS, data, images,} from '../../constants';
import Feather from 'react-native-vector-icons/Feather';
import Card from '../../components/Card/Card';
import Card1 from '../../components/Card/Card1';
import BottomTab from '../../navigation/BottomTabNavigation';


const Home = ({ navigation }) => {

  const [Search, setSearch] = useState("");
  const handleSearch=()=>{
    navigation.navigate("Explore", { input: Search });
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent={true} barStyle='dark-content' />

      <View style={styles.CarrotView}>
        <Image source={images.carrot} resizeMode='contain' style={styles.carrotImg} />
        <View style={styles.locationHead}>
          <FontAwesome6 name="location-dot" style={styles.locationIcon} />
          <Text style={styles.locationName}>Dhaka, Banassre</Text>
        </View>
      </View>

        <TouchableOpacity onPress={handleSearch}>
      <View style={styles.InputBox}>
        <Feather style={styles.icon} name="search" />
        <TextInput 
        style={styles.input} 
        placeholder="Search Store" 
        placeholderTextColor={COLORS.gray50} 
        value={Search} 
        onChangeText={setSearch}
        onSubmitEditing={handleSearch}
        />
      </View>
        </TouchableOpacity>
      <ScrollView>
      <View style={styles.bannerView}>
          {data.banner && data.banner.length > 0 && (
            <FlatList
              data={data.banner}
              // imageKey={"img"}
              // local
              // indicatorContainerStyle={{position:'absolute', bottom: 10}}
              // indicatorActiveColor={COLORS.green}
              // indicatorInActiveColor={COLORS.gray80}
              renderItem={({item})=>
                 <Image source={item.img} resizeMode='contain' style={styles.image}/>}
              
              // indicatorActiveWidth={10}
              // animation
              // autoScroll={false}
              // timer={15000}
              horizontal
              showsVerticalScrollIndicator={false}
              pagingEnabled={true}
            />
          )}
        </View>

        {/* explore */}
        <View style={styles.cardView}>
          <View style={styles.mainCardView}>
            <Text style={styles.heading}>Exclusive Offer</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Explore")}><Text style={styles.greenText}>See all</Text></TouchableOpacity>
          </View>
          <View style={styles.cards}>
            <FlatList
              data={data.carddata || []}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => {
                return (
                  <Card
                    imageSource={item.img}
                    data={item}
                    name={item.name}
                    pices={item.pices}
                    price={item.price}
                    onPress={() => navigation.navigate("Product")}
                    onPlusPress={() => navigation.navigate("Cart")}
                  />
                );
              }}
            />
          </View>
        </View>

        {/* best selling */}
        <View>
          <View style={styles.mainCardView}>
            <Text style={styles.heading}>Best Selling</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Explore")}><Text style={styles.greenText}>See all</Text></TouchableOpacity>
          </View>
          <View>
            <FlatList
              data={data.carddata || []}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => {
                return (
                  <Card
                    imageSource={item.img}
                    data={item}
                    name={item.name}
                    pices={item.pices}
                    price={item.price}
                    onPress={() => navigation.navigate("Product")}
                    onPlusPress={() => navigation.navigate("Cart")}
                  />
                );
              }}
            />
          </View>
        </View>

        {/* Groceries */}
        <View style={styles.cardView}>
          <View style={styles.mainCardView}>
            <Text style={styles.heading}>Groceries</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Explore")}><Text style={styles.greenText}>See all</Text></TouchableOpacity>
          </View>
          <View style={styles.bannerView}>
            <FlatList
              data={data.Groceries || []}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => {
                return (
                  <Card1
                    imageSource={item.images}
                    data={item}
                    name={item.name}
                    bgcolor={item.bgColor}
                    onPress={() => navigation.navigate("Search")}
                  />
                );
              }}
            />
          </View>
        </View>

        {/* nonveg  */}
        <View>
          <View style={styles.nonveg}>
            <FlatList
              data={data.carddata || []}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => {
                return (
                  <Card
                    imageSource={item.img}
                    data={item}
                    name={item.name}
                    pices={item.pices}
                    price={item.price}
                    onPress={() => navigation.navigate("Product")}
                    onPlusPress={() => navigation.navigate("Cart")}
                  />
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Home;
