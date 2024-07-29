const { StyleSheet } = require("react-native");
const { COLORS, SIZES, FONTS } = require("../../constants");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,

    },
    cartView: {
        width: SIZES.width * 1,
        borderTopColor: COLORS.gray20,
        borderTopWidth: .8,
        marginTop: SIZES.height *.02,
        alignItems: 'center'
    },
    button: {
        alignItems: 'center',
        marginTop: SIZES.width * .06
    },
    btn: {
        height: SIZES.height * .075,
        backgroundColor: COLORS.green
    },

    // bottomsheet styling

    bottomView: {
        padding: SIZES.width * .04
    },
    checkoutView: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        height: SIZES.height * .1,
        borderBottomColor: COLORS.gray20,
        borderBottomWidth: .5
    },
    checkout: {
        color: COLORS.black,
        fontSize: SIZES.width * .06,
        ...FONTS.sixHundred,
        zIndex:99999
    },
    paymentcard:{
       width:SIZES.width*.05,
       height:SIZES.height*.04
    },
    Delivery: {
        flexDirection: 'row',
        alignItems: 'center',
        height: SIZES.height * .07,
        justifyContent: 'space-between',
        borderBottomColor: COLORS.gray20,
        borderBottomWidth: .5
    },
    DeliveryTxt: {
        fontSize: SIZES.width * .045,
        color: COLORS.gray30,
        ...FONTS.sixHundred
    },
    btext: {
        fontSize: SIZES.width * .04,
        color: COLORS.black,
        ...FONTS.sixHundred,
        tintColor: "rgba(61, 109, 235, 1)"
    },
    righticons: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SIZES.width * .02
    },
    terms:{
        flexDirection:'row',
        alignItems:'center'
    }
})
export default styles