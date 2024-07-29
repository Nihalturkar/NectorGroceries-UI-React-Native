import { COLORS, FONTS, SIZES } from "../../constants";

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
   
    container:{
        flex:1,
        backgroundColor:COLORS.white
    },
    FilterView:{
        width:SIZES.width*1,
        height:SIZES.height*1,
        backgroundColor:"rgba(242, 243, 242, 1)",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        marginTop:SIZES.height*.02,
        paddingHorizontal:SIZES.width*.05
    },
    headingView:{
        fontSize:SIZES.width*.055,
        color:COLORS.black,
        marginTop:SIZES.height*.04,
        ...FONTS.sixHundred
    },
    titlestyle:{
        color:COLORS.black,
        fontSize:SIZES.width*.045
    },
    chechboxView:{
        marginTop:SIZES.height*.02
    },
    button: {
        alignItems: 'center',
        marginTop: SIZES.width * .4
    },
    btn:{
        height:SIZES.height*.075,
        backgroundColor:COLORS.green
    },
})

export default styles;