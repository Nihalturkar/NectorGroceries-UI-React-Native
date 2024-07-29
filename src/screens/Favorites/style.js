const { StyleSheet } = require("react-native");
const { COLORS, SIZES, FONTS, } = require("../../constants");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,

    },
    cartView: {
        width: SIZES.width * 1,
        borderTopColor: COLORS.gray20,
        borderTopWidth: .8,
        marginTop: SIZES.height * .03,
        alignItems: 'center'
    },
    icons: {
        display: 'none'
    },
    iconpriceStyle: {
        alignItems: 'center',
        gap: 0,
        flexDirection: "row-reverse"
    },
    cartStyle: {
        height: SIZES.height * .15
    },
    button: {
        alignItems: 'center',
        marginTop: SIZES.height * .06
    },
    btn: {
        height: SIZES.height * .075,
        backgroundColor: COLORS.green
    },
    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modal: {
        width: SIZES.width*.8,
        padding: 20,
        backgroundColor:COLORS.white,
        borderRadius: 10,
        alignItems:'center'
    },
    modalImg:{
        width:SIZES.width*.4,
        height:SIZES.height*.25
    },
    mainModalText:{
        color:COLORS.black,
        fontSize:SIZES.width*.06,
        ...FONTS.sixHundred
    },
    modalSmallText:{
        fontSize:SIZES.width*.035,
        color:COLORS.gray50,
        marginTop:SIZES.height*.02
    },
    Modalbutton:{
        alignItems: 'center',
        marginTop: SIZES.height * .06
    },
    modalbtn:{
        width:SIZES.width*.7,
        height: SIZES.height * .075,
        backgroundColor: COLORS.green
    },
    modallast:{
        color:COLORS.black,
        ...FONTS.sixHundred,
        fontSize:SIZES.width*.04,
        marginTop:SIZES.height*.03
    },
    cross:{
        color:COLORS.black,
        fontSize:SIZES.width*.08,
        width:SIZES.width*.75,
        textAlign:"left"
    }
})
export default styles;