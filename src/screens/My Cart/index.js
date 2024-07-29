import React, { useRef } from 'react';
import { View, Text, ScrollView, StatusBar, FlatList, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import { COLORS, SIZES, data, FONTS, icons } from '../../constants';
import CartCard from '../../components/CartCard';
import ButtonCustom from '../../components/mainButton/button';
import RBSheet from 'react-native-raw-bottom-sheet';
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Cart = ({ navigation }) => {
  const refRBSheet = useRef();

  // Example content for the bottom sheet
  const CheckoutComponent = () => {
    return (
      <View style={styles.bottomView}>
        <View style={styles.checkoutView}>
          <Text style={styles.checkout}>Checkout</Text>
          <TouchableOpacity onPress={() => { console.log("Close pressed"); refRBSheet.current.close(); }}>
            <Entypo name="cross" style={styles.checkout}/>
          </TouchableOpacity>
        </View>
        {/* Delivery */}
        <View style={styles.Delivery}>
          <Text style={styles.DeliveryTxt}>Delivery</Text>
          <TouchableOpacity style={styles.righticons} onPress={() => console.log("Select Method pressed")}>
            <Text style={styles.btext}>Select Method</Text>
            <Entypo name="chevron-right" style={styles.checkout} />
          </TouchableOpacity>
        </View>

        {/* Payment */}
        <View style={styles.Delivery}>
          <Text style={styles.DeliveryTxt}>Payment</Text>
          <TouchableOpacity style={styles.righticons} onPress={() => console.log("Payment pressed")}>
            <Image source={icons.mastercard} style={styles.paymentcard} resizeMode='contain'/>
            <Entypo name="chevron-right" style={styles.checkout} />
          </TouchableOpacity>
        </View>

        {/* Promo */}
        <View style={styles.Delivery}>
          <Text style={styles.DeliveryTxt}>Promo Code</Text>
          <TouchableOpacity style={styles.righticons} onPress={() => console.log("Promo Code pressed")}>
            <Text style={styles.btext}>Pick discount</Text>
            <Entypo name="chevron-right" style={styles.checkout} />
          </TouchableOpacity>
        </View>

        {/* Cost */}
        <View style={styles.Delivery}>
          <Text style={styles.DeliveryTxt}>Total Cost</Text>
          <TouchableOpacity style={styles.righticons} activeOpacity={.8} onPress={() => console.log("Total Cost pressed")}>
            <Text style={styles.btext}>$13.97</Text>
            <Entypo name="chevron-right" style={styles.checkout} />
          </TouchableOpacity>
        </View>
        <Text style={{ color: COLORS.gray30, ...FONTS.fiveHundred }}>
          By placing an order you agree to our{"\n"}
          <View style={styles.terms}>
            <TouchableOpacity onPress={() => console.log("Terms pressed")}><Text style={{ color: COLORS.gray80, ...FONTS.sixHundred }}>Terms</Text></TouchableOpacity>
            <Text style={{ color: COLORS.gray30, ...FONTS.fiveHundred }}> And </Text>
            <TouchableOpacity onPress={() => console.log("Conditions pressed")}><Text style={{ color: COLORS.gray80, ...FONTS.sixHundred }}>Conditions</Text></TouchableOpacity>
          </View>
        </Text>

        <View style={styles.button}>
          <ButtonCustom
            btnStyle={styles.btn}
            onPress={() => { console.log("Place Order pressed"); navigation.navigate("Order"); }}
          >
            Place Order
          </ButtonCustom>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} translucent={true} barStyle="dark-content" />
      <ScrollView>
        <View style={styles.cartView}>
          <FlatList
            data={data.carddata}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <CartCard
                ImageSource={item.img}
                name={item.name}
                pices={item.pices}
                price={item.price}
                onPress={() => navigation.goBack()}
                rightStyle={{ display: 'none' }}
              />
            )}
          />
        </View>
        <View style={styles.button}>
          <ButtonCustom
            btnStyle={styles.btn}
            onPress={() => refRBSheet.current.open()}
          >
            Go to Checkout
          </ButtonCustom>
        </View>

        <RBSheet
          ref={refRBSheet}
          height={500} // Adjust the height as needed
          openDuration={200}
          customStyles={{
            wrapper: {
              backgroundColor: "rgba(0,0,0,0.5)",
            },
            draggableIcon: {
              backgroundColor: '#000',
            },
            container: {
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            },
          }}
        >
          <CheckoutComponent />
        </RBSheet>
      </ScrollView>
    </View>
  );
};

export default Cart;
