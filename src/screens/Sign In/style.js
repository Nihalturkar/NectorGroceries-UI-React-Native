import { COLORS, FONTS, SIZES } from "../../constants";

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    signIn_container: {
        flex: 1,
        backgroundColor: COLORS.white,
        fontFamily: FONTS.regular

    },
    InputBox: {
        width: SIZES.width * .9
    },
    Image: {
        width: SIZES.width * 1,
        height: SIZES.height * .4,
        backgroundColor: COLORS.white,
    },
    text: {
        fontSize: SIZES.width * .06,
        width: SIZES.width * .6,
        marginLeft: SIZES.width * .06,
        fontFamily: FONTS.black,
        ...FONTS.sixHundred,
        color: COLORS.black,
        marginTop: SIZES.height * .05
    },
    smallText: {
        marginTop: SIZES.height * .03,
        color: COLORS.gray20,
        ...FONTS.sevenHundred,
        textAlign: 'center'
    },
    button: {
        alignItems:'center',
        marginTop: SIZES.width * .06
      },
    btn:{
        width:SIZES.width*.85,
        height:SIZES.height*.075,
        alignItems:'center',
        backgroundColor:COLORS.primary2,
        flexDirection:'row',
        gap:SIZES.width*.05,
        alignItems:'center',
        borderRadius:20
    },
    btn2:{
        width:SIZES.width*.85,
        height:SIZES.height*.075,
        alignItems:'center',
        backgroundColor:COLORS.darkblue,
        flexDirection:'row',
        gap:SIZES.width*.05,
        alignItems:'center',
        borderRadius:20
    },
    btntxt:{
        fontSize:SIZES.width*.04
    },
    InputBox:{
        alignItems:'center'
    }

})
export default styles