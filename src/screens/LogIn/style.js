const { StyleSheet } = require("react-native");
const { COLORS, SIZES, FONTS } = require("../../constants");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    Image: {
        width: SIZES.width * 1,
        height: SIZES.height * .28,
        backgroundColor: COLORS.white,
        zIndex: 9999,
        position: 'absolute',
        top: SIZES.height * -.1
    },
    text: {
        width: SIZES.width * 1,
        textAlign: 'left',
        fontSize: SIZES.width * .057,
        marginLeft: SIZES.width * .06,
        fontFamily: FONTS.black,
        ...FONTS.sixHundred,
        color: COLORS.black,
        marginTop: SIZES.height * .01
    },
    smallText: {
        width: SIZES.width * 1,
        textAlign: 'left',
        marginLeft: SIZES.width * .06,
        fontFamily: FONTS.regular,
        ...FONTS.fiveHundred,
        color: COLORS.gray50,
        marginTop: SIZES.height * .015,
        fontSize:SIZES.width*.035
    },

    LocationView: {
        alignItems: 'center'
    },
    locationImg: {
        width: SIZES.width * .1,
        height: SIZES.height *.25
    },
    country: {
        display: 'none'
    },
    InputBox: {
        marginTop: SIZES.height * .03
    },
    label: {
        marginLeft: SIZES.width * .06,
        color: COLORS.gray50,
        ...FONTS.fiveHundred
    },
    input: {
        backgroundColor: "transparent",
    },
    inputAreaView: {
        marginTop: SIZES.height * .018
    },
    forgot:{
            width: SIZES.width * .94,
            textAlign: 'right',
            // marginRight: SIZES.width * .01,
            fontFamily: FONTS.regular,
            ...FONTS.sixHundred,
            color: COLORS.primary,
            marginTop: SIZES.height * .015,
            color:COLORS.black,
            fontSize:SIZES.width*.035
    },
    button: {
        alignItems: 'center',
        marginTop: SIZES.width * .06
    },
    btn:{
        height:SIZES.height*.075,
        backgroundColor:COLORS.green
    },
    signupView:{
        flexDirection:'row',
        gap:SIZES.width*.015,
        width:SIZES.width*1,
        marginTop:SIZES.height*.02,
        // backgroundColor:'red',
        justifyContent:'center'
    },
    account:{
        ...FONTS.sixHundred,
        color:COLORS.black

    },
    signup:{
        ...FONTS.sixHundred,
        color:COLORS.green 
    }
})

export default styles;