Object.defineProperty(exports,"__esModule",{value:true});exports.CustomDrawerDefaultStyle=void 0;var _Style=require("../utils/Style");var _Colors=require("../utils/Colors");var _reactNative=require("react-native");var windowWidth=_reactNative.Dimensions.get('window').width;var CustomDrawerDefaultStyle={drawerStyle:{position:'absolute',top:0,left:_reactNative.Platform.OS!=='web'?windowWidth-_Style.Style.ratio(25):0,width:_reactNative.Platform.OS==='ios'?_Style.Style.ratio(50):_Style.Style.ratio(25),height:'100%',backgroundColor:_Colors.Colors.OVERLAY_2},container:{height:'100%',flexDirection:'column',justifyContent:'center',backgroundColor:_Colors.Colors.OVERLAY_2,borderWidth:0},contentContainer:{width:'70%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'},cell:{flexDirection:'row',justifyContent:'center',alignItems:'center',width:'100%',height:_Style.Style.ratio(50),padding:_Style.Style.ratio(5),marginBottom:_Style.Style.ratio(25),marginTop:_Style.Style.ratio(5),opacity:0.6},focusedCell:{opacity:1},text:{color:_Colors.Colors.TEXT_SECONDARY,fontSize:_Style.Style.ratio(15),marginLeft:_Style.Style.ratio(10)},logo:{width:_Style.Style.ratio(28),height:_Style.Style.ratio(28)}};exports.CustomDrawerDefaultStyle=CustomDrawerDefaultStyle;