const { StyleSheet } = require("react-native");
const { COLORS, SIZES } = require("../../constants");

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white,
        alignItems:'center',
    },
    Beverages:{
        width:SIZES.width*1,
        marginLeft:SIZES.width*.03
    }
})
export default styles