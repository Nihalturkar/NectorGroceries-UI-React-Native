import React from 'react';
import { Image, View, Text, TouchableOpacity, Dimensions,StyleSheet, TextInput } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute, useNavigation } from '@react-navigation/native';
import { images, COLORS, icons, FONTS, SIZES } from '../../constants';
import AntDesign from "react-native-vector-icons/AntDesign"
import Feather from "react-native-vector-icons/Feather"
import Entypo from "react-native-vector-icons/Entypo"
import Explore from '../../screens/Explore';
import Favourite from '../../screens/Favorites';
import Account from '../../screens/Account';
import BottomTab from '../BottomTabNavigation';
import Location from '../../screens/Location';
import Product from '../../screens/Product Detail';
import Beverage from '../../screens/Beverages';
import Search from '../../screens/Search';
import Order from '../../screens/Order Accepted';
import Filter from '../../screens/Filter';


const { width, height } = Dimensions.get('window')

const Stack = createStackNavigator();


const StackNavigator = ({ navigation, route }) => {
    
    return (
        <Stack.Navigator>

        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{
            headerShown: false,
           
          }}
        />

        {/* Location */}

        <Stack.Screen
          name="Location"
          component={Location}
          options={{
            headerShown: true,
            title: "",
            headerStyle: {
              backgroundColor: "transparent",
            },
          }}
        />
        <Stack.Screen
          name="Product"
          component={Product}
          options={{
            headerShown: true,
            title: "",
            headerStyle: {
              backgroundColor: COLORS.gray10,
            },
            headerLeft: () => (
              <View style={styles.headerLeftContainer}>
                <TouchableOpacity>
                  <Entypo name="chevron-left" style={styles.backIcon} />
                </TouchableOpacity>
              </View>
            ),
            headerRight: () => (
              <View style={styles.headerLeftContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Feather name="upload" style={styles.backIcon} />
                </TouchableOpacity>
              </View>
            ),
          }}
        />

        {/* Explore */}

        <Stack.Screen
          name="Explore"
          component={Explore}
          options={{
            headerShown: true,
            title: "Find Product",
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerLeft: () => (
              <View style={{ display: 'none' }}>
              </View>
            ),
          }}
        />

        {/* Beverage */}

        <Stack.Screen
          name="Beverage"
          component={Beverage}
          options={{
            headerShown: true,
            title: "Find Product",
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerLeft: () => (
              <View style={styles.headerLeftContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                <Entypo name="chevron-left" style={styles.backIcon} />
                </TouchableOpacity>
              </View>
            ),
            headerRight: () => (
              <View style={styles.headerLeftContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("Filter")}>
                  <Image source={icons.filter} style={styles.filterIcon} />
                </TouchableOpacity>
              </View>
            ),
          }}
        />

        {/* Search Screen */}

        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            headerShown: true,
            title: "",
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerLeft: () => (
              <View style={styles.headerLeftContainer}>
                <View style={styles.InputBox}>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Feather style={styles.icon} name="search" />
                  <TextInput style={styles.input} placeholder="Egg" placeholderTextColor={COLORS.black}/>
                  </View>
                  <Entypo name="cross" style={styles.cross}/>
                </View>
              </View>
            ),
            headerRight: () => (
              <View style={styles.headerLeftContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("Filter")}>
                  <Image source={icons.filter} style={styles.filterIcon} />
                </TouchableOpacity>
              </View>
            ),
          }}
        />

        {/* My Cart */}

        {/* <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            headerShown: true,
            title: "My Cart",
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerLeft: () => (
              <View style={{ display: 'none' }}>
              </View>
            ),
          }}
        /> */}

        {/* favrouite */}

        <Stack.Screen
          name="Favourite"
          component={Favourite}
          options={{
            headerShown: true,
            title: "Favourite",
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerLeft: () => (
              <View style={{ display: 'none' }}>
              </View>
            ),
          }}
        />


        {/* Order accepted */}

        <Stack.Screen
          name="Order"
          component={Order}
          options={{
            headerShown: false,
          }}
        />

        {/* Account  */}

        <Stack.Screen
          name="Account"
          component={Account}
          options={{
            headerShown: false,
          }}
        />

        {/* Filter */}

        <Stack.Screen
          name="Filter"
          component={Filter}
          options={{
            headerShown: true,
            title: "Filters",
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerLeft: () => (
              <View style={styles.headerLeftContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Entypo name="cross" style={styles.backIcon} />
                </TouchableOpacity>
              </View>
            ),
          }}
        />

      </Stack.Navigator>
    );
}



export default StackNavigator

const styles=StyleSheet.create({
    left_arr:{
        width:width*.045,
        height:width*.045,
        tintColor:COLORS.primary,
        marginRight:width*.006
    },
    left_arr_touch:{
        width:width*.09,
        height:width*.09,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:100,
        borderWidth:1,
        borderColor:COLORS.primary,
        marginLeft:width*.02
    },
    title_text:{
        color:COLORS.primary,
        fontSize:width*.047,
        ...FONTS.sixHundred,
        marginBottom:-4
    },
    headerLeftContainer: {
      flexDirection: "row",
      alignItems: "center",
      padding: 16,
    },
    backIcon: {
      fontSize: SIZES.width * .062,
      color: COLORS.black,
    },
    filterIcon: {
      width: SIZES.width * .05,
      height: SIZES.height * .025,
    },
    InputBox: {
      width: SIZES.width * .8,
      backgroundColor: COLORS.gray10,
      borderRadius: 15,
      height: SIZES.height * .055,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: "space-between",
      paddingHorizontal: SIZES.width * .02
  
    },
    icon: {
      fontSize: SIZES.width * .055,
      color: COLORS.black,
      marginHorizontal: SIZES.width * .03
    },
    input: {
      fontSize: SIZES.width * .036,
      color: COLORS.black
    },
    cross: {
      fontSize: SIZES.width * .04,
      color: COLORS.black,
      backgroundColor: COLORS.gray20,
      borderRadius: 50
    }
})