import React, { useState } from 'react';
import { View, Text, StatusBar, ScrollView, Modal, FlatList, Image,TouchableOpacity  } from 'react-native';
import styles from './style';
import { COLORS, data, images } from '../../constants';
import ButtonCustom from '../../components/mainButton/button';
import CartCard from '../../components/CartCard';
import Entypo from "react-native-vector-icons/Entypo"
const Favourite = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(true);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.transparent} translucent={true} barStyle='dark-content' />
      <ScrollView>
        <Modal visible={isModalVisible} transparent={true} animationType="slide">
          <View style={styles.modalView}>
            <View style={styles.modal}>
            <TouchableOpacity>
              <Entypo name="cross" style={styles.cross} onPress={toggleModal} />
            </TouchableOpacity>
              <Image source={images.order} resizeMode='contain' style={styles.modalImg}/>
              <Text style={styles.mainModalText}>Oops! Order Failed</Text>
              <Text style={styles.modalSmallText}>Something went tembly wrong.</Text>
              <View style={styles.Modalbutton}>
          <ButtonCustom btnStyle={styles.modalbtn} children="Please Try Again" btntextStyle={styles.btntxt} onPress={toggleModal} />
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate("Home")}><Text style={styles.modallast}>Back To home</Text></TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View style={styles.cartView}>
          <FlatList
            data={data.BeverageData}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <CartCard
                ImageSource={item.img}
                name={item.name}
                pices={item.pices}
                price={item.price}
                onPress={() => navigation.goBack()}
                iconstyle={styles.icons}
                iconpriceStyle={styles.iconpriceStyle}
                crossStyle={{ display: "none" }}
                cartstyle={styles.cartStyle}
              />
            )}
          />
        </View>
        <View style={styles.button}>
          <ButtonCustom btnStyle={styles.btn} children="Add All To Cart" btntextStyle={styles.btntxt} onPress={()=>navigation.navigate("Cart")} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Favourite;
