import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import SignIn from '../screens/Sign In';
import NumberLogin from '../screens/Number';
import AntDesign from "react-native-vector-icons/AntDesign"
import Feather from "react-native-vector-icons/Feather"
import Entypo from "react-native-vector-icons/Entypo"
import Verification from '../screens/Verification';
import Location from '../screens/Location';
import Login from '../screens/LogIn';
import SignUp from '../screens/SignUp';
import Home from '../screens/HomeScreen';
import { COLORS, SIZES, icons } from '../constants';
import StackNavigator from '../navigation/StackNavigator';

const Stack = createStackNavigator();

const Root = ({ navigation}) => {

const [token, settoken] = useState("")
  return (
    <>
      {token == null ?
        <Stack.Navigator>
          <Stack.Screen name='SignIn' component={SignIn}
            options={{
              headerShown: false,
              headerStyle: {
                backgroundColor: "none",
              },
            }}
          />

          <Stack.Screen
            name="Number"
            component={NumberLogin}
            options={{
              headerShown: true,
              title: "",
              headerStyle: {
                backgroundColor: "transparent",
              },
              headerLeft: () => (
                <View style={styles.headerLeftContainer}>
                  <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={.6}>
                    <Entypo name="chevron-left" style={styles.backIcon} />
                  </TouchableOpacity>
                </View>
              ),
            }}
          />

          <Stack.Screen
            name="Verification"
            component={Verification}
            options={{
              headerShown: true,
              title: "",
              headerStyle: {
                backgroundColor: "transparent",
              },
              headerLeft: () => (
                <View style={styles.headerLeftContainer}>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-left" style={styles.backIcon} />
                  </TouchableOpacity>
                </View>
              ),
            }}
          />

          <Stack.Screen
            name="Location"
            component={Location}
            options={{
              headerShown: true,
              title: "",
              headerStyle: {
                backgroundColor: "transparent",
              },
              headerLeft: () => (
                <View style={styles.headerLeftContainer}>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-left" style={styles.backIcon} />
                  </TouchableOpacity>
                </View>
              ),
            }}
          />

          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              headerShown: false,
            }}
          />

        </Stack.Navigator>
        :
        <Stack.Navigator>
          <Stack.Screen
            name="StackNavigator"
            component={StackNavigator}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      }
    </>
  )
}


export default Root;
const styles = StyleSheet.create({
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
