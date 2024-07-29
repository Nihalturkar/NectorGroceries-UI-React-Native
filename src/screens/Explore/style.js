const { StyleSheet } = require("react-native");
const { COLORS, SIZES } = require("../../constants");

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white,
        alignItems:'center',
    },
    InputBox: {
        width:SIZES.width*.9,
        marginTop: SIZES.height * .01,
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
    productCards:{
        marginBottom:SIZES.height*.1
    }
})
export default styles;