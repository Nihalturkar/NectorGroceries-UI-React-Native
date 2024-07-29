const { StyleSheet } = require("react-native");
const { COLORS, SIZES, FONTS } = require("../../constants");

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white
    },
    Image: {
        width: SIZES.width * 1,
        height: SIZES.height * .28,
        backgroundColor: COLORS.white,
        zIndex:9999,
        position:'absolute',
        top:SIZES.height*-.1
    },
    text: {
        fontSize: SIZES.width * .057,
        marginLeft: SIZES.width * .06,
        fontFamily: FONTS.black,
        ...FONTS.sixHundred,
        color: COLORS.black,
        marginTop: SIZES.height * .05
    },
    country:{
        display:'none'
    },
    InputBox:{
         marginTop:SIZES.height*.03
    },
    label:{
        marginLeft: SIZES.width * .06,
        color:COLORS.gray50,
        ...FONTS.fiveHundred
    },
    input:{
        backgroundColor:"transparent",
    },
    btnView:{
     width:SIZES.width*.9,
     marginTop:SIZES.height*.33,
     flexDirection:'row',
     alignItems:'center',
     justifyContent:"space-between",
     marginLeft: SIZES.width * .06,
    },
    resend:{
        color:COLORS.green,
        ...FONTS.fiveHundred,
        fontSize:SIZES.width*.038
    },
    nextBtn:{
        width:SIZES.width*.15,
        height:SIZES.height*.07,
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:COLORS.green
    },
    next:{
        width:SIZES.width*.03,
        height:SIZES.height*.03,
    }
})

export default styles;