Object.defineProperty(exports,"__esModule",{value:true});exports.FlatScrollViewDefaultStyle=void 0;var _Style=require("../utils/Style");var _Colors=require("../utils/Colors");var itemWidth=_Style.Style.ratio(414);var itemHeight=itemWidth/1.777777;var FlatScrollViewDefaultStyle={row:{width:'100%',justifyContent:'center',alignItems:'center'},list:{width:'100%',justifyContent:'flex-start',flexDirection:'row',flexWrap:'wrap'},rowItem:{width:_Style.Style.ratio(423),height:_Style.Style.ratio(238),margin:_Style.Style.ratio(12),backgroundColor:'#ffffff',borderRadius:_Style.Style.ratio(5),shadowColor:'#000000',shadowOffset:{width:0,height:3},shadowOpacity:0.29,shadowRadius:_Style.Style.ratio(5),elevation:2},rowItemFocused:{transform:[{scale:1.2}],marginLeft:30,marginRight:30,shadowColor:'#000000',shadowOffset:{width:0,height:30},shadowOpacity:0.29,shadowRadius:_Style.Style.ratio(5)},image:{borderRadius:_Style.Style.ratio(5),top:0,left:0,width:itemWidth,height:itemHeight},title_container:{margin:10},scrollViewHeader:{width:'100%',color:'white',fontSize:_Style.Style.ratio(30),justifyContent:'center',alignItems:'center'},swimlaneHeaderText1:{fontFamily:'Sports-Bold_Cond_Obl',fontSize:_Style.Style.ratio(48),lineHeight:_Style.Style.ratio(58),color:_Colors.Colors.TEXT_SECONDARY,backgroundColor:_Colors.Colors.TRANSPARENT,marginLeft:_Style.Style.ratio(60)},textContainer:{position:'absolute',bottom:10,backgroundColor:_Colors.Colors.TRANSPARENT}};exports.FlatScrollViewDefaultStyle=FlatScrollViewDefaultStyle;