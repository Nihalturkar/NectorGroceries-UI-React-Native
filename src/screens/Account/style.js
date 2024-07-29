const { StyleSheet } = require("react-native");
const { COLORS, SIZES, FONTS, } = require("../../constants");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,

    },
    profileDetail: {
        width: SIZES.width * 1,
        height: SIZES.height * .15,
        marginTop: SIZES.height * .08,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SIZES.width * .06
    },
    profileimgView: {
        width: SIZES.width * .17,
        height: SIZES.height * .09,
        backgroundColor: COLORS.bottomblue,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        marginRight: SIZES.width * .03
    },
    profileimg: {
        width: SIZES.width * .16,
        height: SIZES.height * .12
    },
    name: {
        fontSize: SIZES.width * .05,
        ...FONTS.sixHundred,
        color: COLORS.black
    },
    pencil: {
        fontSize: SIZES.width * .035,
        color: COLORS.green
    },
    gmailView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SIZES.width * .03
    },
    gmail: {
        fontSize: SIZES.width * .044,
        color: COLORS.gray40
    },
    dataview: {
        width: SIZES.width * 1,
        borderWidth: .5,
        borderColor: COLORS.gray30
    },
    button: {
        alignItems: 'center',
        marginTop: SIZES.height * .045
    },
    btn: {
        width: SIZES.width * .9,
        height: SIZES.height * .075,
        backgroundColor: COLORS.gray10,
        elevation:0
    },
    btntxt: {
        color: COLORS.green
    },
})
export default styles;