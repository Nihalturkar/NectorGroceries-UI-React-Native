import { COLORS, FONTS, SIZES } from "../../constants";

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white,
        alignItems:'center'
    },
    Image: {
        width: SIZES.width * 1,
        height: SIZES.height * .4,
        backgroundColor: COLORS.white,
        zIndex:9999,
        position:'absolute',
        top:SIZES.height*-.1
    },
    text: {
        width: SIZES.width * 1,
        textAlign: 'center',
        fontSize: SIZES.width * .057,
        // marginLeft: SIZES.width * .06,
        fontFamily: FONTS.black,
        ...FONTS.sixHundred,
        color: COLORS.black,
        marginTop: SIZES.height * .04
    },
    smallText: {
        textAlign: 'center',
        fontFamily: FONTS.regular,
        ...FONTS.sixHundred,
        color: COLORS.gray50,
        marginTop: SIZES.height * .015,
        lineHeight: SIZES.height * .02,
        fontSize:SIZES.width*.036

    },
    orderView: {
        marginTop:SIZES.width*.3,
        alignItems:'center'

    },
    orderImg: {
        width: SIZES.width * .5,
        height: SIZES.height * .25
    },
button:{
        alignItems: 'center',
        marginTop: SIZES.height * .06
    },
    btn:{
        width:SIZES.width*.9,
        height: SIZES.height * .075,
        backgroundColor: COLORS.green
    },
   
    modallast:{
        color:COLORS.black,
        ...FONTS.sixHundred,
        fontSize:SIZES.width*.04,
        marginTop:SIZES.height*.03
    },
})


export default styles