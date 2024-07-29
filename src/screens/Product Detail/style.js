const { StyleSheet } = require("react-native");
const { COLORS, SIZES, FONTS } = require("../../constants");

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white
    },
    imageView:{
        width:SIZES.width*1,
        height:SIZES.height*.35,
        backgroundColor:COLORS.gray10,
        borderBottomEndRadius:30,
        borderBottomLeftRadius:30,
        alignItems:"center"
    },
    img:{
        width:SIZES.width*.8,
        height:SIZES.height*.3,
    },
    mainCardView:{
        width:SIZES.width*.9,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:SIZES.height*.02,
        marginLeft:SIZES.width*.05
    },
    heading:{
        fontSize:SIZES.width*.06,
        color:COLORS.black,
        ...FONTS.sixHundred
    },
    heartIcon:{
        fontSize:SIZES.width*.05,
        color:COLORS.gray70
    },
    quantity:{
        color:COLORS.gray50,
        marginLeft:SIZES.width*.05,
        fontSize:SIZES.width*.035,
    },
    priceView:{
        width:SIZES.width*.9,
        height:SIZES.height*.07,
        marginTop:SIZES.height*.02,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginLeft:SIZES.width*.05

    },
    icons:{
        flexDirection:'row',
        alignItems:'center',
        gap:SIZES.width*.04,
        
    },
    icon:{
        fontSize:SIZES.width*.05,
        color:COLORS.black,
        ...FONTS.sevenHundred
    },
    icontext:{
      borderWidth:.5,
      borderColor:COLORS.gray30,
      padding:10,
      textAlign:'center',
      borderRadius:15,
      color:COLORS.black,
      fontSize:SIZES.width*.04,
      width:SIZES.width*.12
    },
    price:{
        fontSize:SIZES.width*.05,
        color:COLORS.black,
        ...FONTS.sixHundred
    },
    productDetail:{
        borderTopColor:COLORS.gray20,
        borderTopWidth:1,
        borderBottomColor:COLORS.gray20,
        borderBottomWidth:1,
        paddingTop:SIZES.height*.012,
        paddingBottom:SIZES.height*.012,
        marginTop:SIZES.height*.02,
        marginLeft:SIZES.width*.05,
        width:SIZES.width*.9,
    },
    ProductView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingBottom:SIZES.height*.01,
    },
    productHeading:{
        width:SIZES.width*.7,
        fontSize:SIZES.width*.04,
        color:COLORS.black,
        ...FONTS.sixHundred
    },
    detail:{
        color:COLORS.gray40,
        width:SIZES.width*.92,
        fontSize:SIZES.width*.035
    },
    productQuan:{
        color:COLORS.gray30,
        backgroundColor:COLORS.gray10,
        padding:SIZES.width*.008,
        borderRadius:10
    },
    NutritionView:{
        borderBottomColor:COLORS.gray20,
        borderBottomWidth:1,
        paddingTop:SIZES.height*.012,
        paddingBottom:SIZES.height*.012,
        marginTop:SIZES.height*.01 ,
        marginLeft:SIZES.width*.05,
        width:SIZES.width*.9,
        flexDirection:'row'
    },
    Review:{
        paddingTop:SIZES.height*.012,
        paddingBottom:SIZES.height*.012,
        marginTop:SIZES.height*.01 ,
        marginLeft:SIZES.width*.06,
        width:SIZES.width*.85,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    ReviewHeading:{
        width:SIZES.width*.58,
        fontSize:SIZES.width*.04,
        color:COLORS.black,
        ...FONTS.sixHundred
    },
    myStarStyle: {
        color: "#F3603F",
        backgroundColor: 'transparent',
        fontSize:SIZES.width*.05
      },
      myEmptyStarStyle: {
        color:COLORS.black,

      },
      button: {
        alignItems: 'center',
        marginTop: SIZES.width * .04
    },
    btn:{
        height:SIZES.height*.075,
        backgroundColor:COLORS.green
    },

    likedIcon: {
        color: 'red', 
      },
})

export default styles