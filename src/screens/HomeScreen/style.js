import { COLORS, FONTS, SIZES } from "../../constants";
const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:COLORS.white
    },
    CarrotView: {
        alignItems: 'center',
        marginTop:SIZES.height*.08,
    },
    carrotImg: {
        width: SIZES.width * .07,
        height: SIZES.height *.05
    },
    locationHead:{
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        gap:SIZES.width*.02
    },
    locationIcon:{
        color:COLORS.gray70,
        fontSize:SIZES.width*.05
    },
    locationName:{
        color:COLORS.gray70,
        fontSize:SIZES.width*.04,
        ...FONTS.fiveHundred
    },
    InputBox: {
        width:SIZES.width*.9,
        marginTop: SIZES.height * .03,
        backgroundColor:COLORS.gray10,
        borderRadius:15,
        height:SIZES.height*.06,
        flexDirection:'row',
        alignItems:'center',
        gap:SIZES.width*-.02
        
    },
    icon:{
        fontSize:SIZES.width*.055,
        color:COLORS.black,
        marginHorizontal:SIZES.width*.03
    },
    input: {
        fontSize:SIZES.width*.04,
        color:COLORS.black,
        width:SIZES.width*.7
    },
    bannerView:{
        width:SIZES.width*1,
        height:SIZES.height*.14,
        borderRadius:15,
        marginTop:SIZES.height*.02,
        overflow:'hidden',
        alignItems:'center',
        justifyContent:'center'
        // paddingHorizontal:SIZES.width*.02,
        // backgroundColor:'red'
    },
    cardView:{
        width:SIZES.width*.9,
        height:SIZES.height*.4,
        marginTop:SIZES.height*.03,
    },
    mainCardView:{
        width:SIZES.width*.95,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    cards:{
      width:SIZES.width*1,
    },
    heading:{
        fontSize:SIZES.width*.06,
        color:COLORS.black,
        ...FONTS.sixHundred,
        marginHorizontal:SIZES.width*.03

    },
    greenText:{
        fontSize:SIZES.width*.04,
        color:COLORS.green,
        ...FONTS.sixHundred
    },
    nonveg:{
        width:SIZES.width*1,
        marginTop:SIZES.height*-.2,
        marginBottom:SIZES.height*.05,
    },
    image:{
        width:SIZES.width*1,
        height:SIZES.height*.14,
        // marginRight:SIZES.width*.2
    }
})
export default styles;