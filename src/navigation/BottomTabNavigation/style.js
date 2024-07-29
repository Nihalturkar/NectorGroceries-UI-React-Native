const { StyleSheet } = require("react-native");
const { SIZES, FONTS, COLORS } = require("../../constants");

const styles= StyleSheet.create({
    headerLeftContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
      }, 
    home:{
        width:SIZES.width*.06,
        height:SIZES.height*.07
    },
    explore:{
        width:SIZES.width*.06,
        height:SIZES.height*.07
    },
    cart:{
        width:SIZES.width*.06,
        height:SIZES.height*.07
    },
    fav:{
        width:SIZES.width*.06,
        height:SIZES.height*.07
    },
    account:{
        width:SIZES.width*.06,
        height:SIZES.height*.07
    },
    tabstyle:{
        height:SIZES.height*.075,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        paddingBottom:7,
        backgroundColor:COLORS.white,
    },
    label: {
        fontSize:SIZES.width*.035,
        ...FONTS.sixHundred
    }
})
export default styles