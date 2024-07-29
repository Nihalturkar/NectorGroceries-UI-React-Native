import { View, Text, ScrollView, StatusBar, Image, FlatList } from 'react-native'
import React from 'react'
import styles from './style'
import { COLORS, SIZES, data, icons, images } from '../../constants'
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import { TouchableOpacity } from 'react-native-gesture-handler'
import AccountCard from '../../components/accountData'
import ButtonCustom from '../../components/mainButton/button'
const Account = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.transparent} translucent={true} barStyle='dark-content' />
      <ScrollView>
        <View  style={styles.profileDetail}>
         <View style={styles.profileimgView}>
       <TouchableOpacity>
       <Image source={images.apple} resizeMode='contain' style={styles.profileimg}/>
       </TouchableOpacity>
         </View>
         <View>
          <View style={styles.gmailView}>
          <Text style={styles.name}>Afsar Hossen</Text>
         <TouchableOpacity>
         <SimpleLineIcons style={styles.pencil} name="pencil"/>
         </TouchableOpacity>
          </View>
          <Text style={styles.gmail}>Imshuvo97@gmail.com</Text>
         </View>
        </View>
      <View style={styles.dataview}>
      <FlatList
            data={data.Accountdata}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <AccountCard
                imagesource={item.icon}
                title={item.title}
                onPress={() => navigation.goBack()}
              />
            )}
          />
      </View>
      <View style={styles.button}>
          <ButtonCustom 
          btnStyle={styles.btn} 
          children="Log Out" 
          btntextStyle={styles.btntxt} 
          // onPress={()=>navigation.navigate("Login")}
          iconMdm={icons.exit}
          iconMdmBtn={true}
          mdmiconstyle={{tintColor:'green',position:'absolute',left:SIZES.width*.1}}
          />
        </View>
      </ScrollView>
    </View>
  )
} 

export default Account