Object.defineProperty(exports,"__esModule",{value:true});exports.ThemeSRG=void 0;var _reactNative=require("react-native");var _Style=require("../utils/Style");var _tools=require("../utils/tools");var windowWidth=_reactNative.Dimensions.get('window').width;var mediumWeightFontValue='300';var lightWeightFontValue='100';var flatScrollViewItemWidth=_Style.Style.ratio(414);var flatScrollViewItemHeight=flatScrollViewItemWidth/1.777777;var innerColors={UNFOCUSED_COLOR:'#262626',PLAY_BUTTON_COLOR:'#262626',FOCUSED_COLOR:'#FFFFFF',PRIMARY:'#232323',PRIMARY_VARIANT:'#333333',SECONDARY:'#AF001D',SECONDARY_VARIANT:'#8B0018',BACKGROUND:'#161616',TEXT_PRIMARY:'#969696',TEXT_PRIMARY_VARIANT:'#C7C7C7',TEXT_SECONDARY:'#FFFFFF',GRADIENT_FIRST:(0,_tools.hexToRgbA)('#161616',0.0),GRADIENT_SECOND:(0,_tools.hexToRgbA)('#161616',1.0),OVERLAY_1:(0,_tools.hexToRgbA)('#161616',0.5),OVERLAY_2:(0,_tools.hexToRgbA)('#161616',0.8),TRANSPARENT:'transparent'};var ThemeSRG={Typography:{h1:{fontFamily:'SRGSSRTypeDisplayVFApp-Medium',fontSize:_Style.Style.ratio(50),fontWeight:'bold'},h2:{fontFamily:'SRGSSRTypeDisplayVFApp-Medium',fontSize:_Style.Style.ratio(42),fontWeight:mediumWeightFontValue},h3:{fontFamily:'SRGSSRTypeTextVFApp-Medium',fontSize:_Style.Style.ratio(32),fontWeight:'normal'},h4:{fontFamily:'SRGSSRTypeTextVFApp-Medium',fontSize:_Style.Style.ratio(30),fontWeight:mediumWeightFontValue},subtitle1:{fontFamily:'SRGSSRTypeTextVFApp-Medium',fontSize:_Style.Style.ratio(32),fontWeight:lightWeightFontValue},subtitle2:{fontFamily:'SRGSSRTypeTextVFApp-Medium',fontSize:_Style.Style.ratio(26),fontWeight:'normal'},body:{fontFamily:'SRGSSRTypeTextVFApp-Medium',fontSize:_Style.Style.ratio(30),fontWeight:'normal'},button:{fontFamily:'SRGSSRTypeTextVFApp-Medium',fontSize:_Style.Style.ratio(32),fontWeight:mediumWeightFontValue},overline:{fontFamily:'SRGSSRTypeTextVFApp-Medium',fontSize:_Style.Style.ratio(24),fontWeight:'normal'},caption:{fontFamily:'SRGSSRTypeTextVFApp-Medium',fontSize:_Style.Style.ratio(18),fontWeight:mediumWeightFontValue},labels:{fontFamily:'SRGSSRTypeTextVFApp-Medium',fontSize:_Style.Style.ratio(20),fontWeight:'bold'}},Colors:{BACKGROUND:innerColors.BACKGROUND,UNFOCUSED_COLOR:innerColors.UNFOCUSED_COLOR,TEXT_SECONDARY:innerColors.TEXT_SECONDARY,PLAY_BUTTON_COLOR:innerColors.PLAY_BUTTON_COLOR,FOCUSED_COLOR:innerColors.FOCUSED_COLOR,SECONDARY:innerColors.SECONDARY,SECONDARY_VARIANT:innerColors.SECONDARY_VARIANT,OVERLAY_2:innerColors.OVERLAY_2,TRANSPARENT:innerColors.TRANSPARENT},SwimLane:{container:{backgroundColor:innerColors.BACKGROUND},webView:{height:'fit-content',flexDirection:'row',marginBottom:_Style.Style.ratio(10),marginLeft:_Style.Style.ratio(50),marginRight:_Style.Style.ratio(5),backgroundColor:innerColors.TRANSPARENT},item:{paddingTop:_Style.Style.ratio(14),paddingBottom:_Style.Style.ratio(60),paddingRight:_Style.Style.ratio(36)},itemWeb:{marginTop:_Style.Style.ratio(14),marginBottom:_Style.Style.ratio(60),marginRight:_Style.Style.ratio(18),marginLeft:_Style.Style.ratio(18)},buttonFocusedColor:innerColors.TRANSPARENT},Drawer:{drawerStyle:{position:'absolute',top:0,left:_reactNative.Platform.OS!=='web'?windowWidth-25:0,width:_reactNative.Platform.OS==='ios'?50:25,height:'100%',backgroundColor:innerColors.OVERLAY_2},container:{height:'100%',flexDirection:'column',justifyContent:'center',backgroundColor:innerColors.OVERLAY_2},contentContainer:{width:'70%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'},cell:{flexDirection:'row',justifyContent:'center',alignItems:'center',width:'100%',height:_Style.Style.ratio(50),padding:_Style.Style.ratio(5),marginBottom:_Style.Style.ratio(25),marginTop:_Style.Style.ratio(5),opacity:0.6},focusedCell:{opacity:1},text:{color:innerColors.TEXT_SECONDARY,fontSize:_Style.Style.ratio(15),marginLeft:_Style.Style.ratio(10)},logo:{width:_Style.Style.ratio(28),height:_Style.Style.ratio(28)}},SwimLaneHeaderTitle:{swimlaneTitleText:{color:innerColors.TEXT_SECONDARY,marginLeft:_Style.Style.ratio(80),marginRight:_Style.Style.ratio(50)}},MediaItemTime:{liveText:{position:'absolute',width:_Style.Style.ratio(100),height:_Style.Style.ratio(32),top:_Style.Style.ratio(16),right:_Style.Style.ratio(16),borderRadius:_Style.Style.ratio(2),backgroundColor:innerColors.PRIMARY_VARIANT,color:innerColors.TEXT_SECONDARY,paddingLeft:0,paddingRight:2,textAlign:'center'}},CardItem:{itemContainer:{width:_Style.Style.ratio(525),height:_Style.Style.ratio(432)},image:{width:_Style.Style.ratio(525),height:_Style.Style.ratio(296)},textContainer:{position:'absolute',width:_Style.Style.ratio(525),height:_Style.Style.ratio(136),top:_Style.Style.ratio(296),backgroundColor:innerColors.PRIMARY},baitText:{marginLeft:_Style.Style.ratio(16),marginRight:_Style.Style.ratio(16),marginTop:_Style.Style.ratio(12),color:innerColors.TEXT_SECONDARY},titleText:{marginLeft:_Style.Style.ratio(16),marginRight:_Style.Style.ratio(16),color:innerColors.TEXT_SECONDARY}},CarouselItem:{itemContainer:{width:_Style.Style.ratio(1600),height:_Style.Style.ratio(754)},image:{width:_Style.Style.ratio(1600),height:_Style.Style.ratio(754)},textContainer:{position:'absolute',width:'100%',height:'100%',backgroundColor:innerColors.TRANSPARENT},baitText:{position:'absolute',marginLeft:_Style.Style.ratio(56),marginRight:_Style.Style.ratio(56),marginTop:_Style.Style.ratio(312),color:innerColors.TEXT_SECONDARY},titleText:{position:'absolute',marginLeft:_Style.Style.ratio(56),marginRight:_Style.Style.ratio(56),marginTop:_Style.Style.ratio(378),color:innerColors.TEXT_SECONDARY},descriptionText:{position:'absolute',marginLeft:_Style.Style.ratio(56),marginRight:_Style.Style.ratio(56),marginTop:_Style.Style.ratio(532),color:innerColors.TEXT_SECONDARY},textBackground:{position:'absolute',top:_Style.Style.ratio(257),borderLeftWidth:0,borderRightWidth:_Style.Style.ratio(1200),borderBottomWidth:_Style.Style.ratio(506),borderStyle:'solid',backgroundColor:innerColors.TRANSPARENT,borderLeftColor:innerColors.TRANSPARENT,borderRightColor:innerColors.TRANSPARENT,borderBottomColor:innerColors.OVERLAY_2},timeText:{position:'absolute',width:_Style.Style.ratio(100),height:_Style.Style.ratio(32),top:_Style.Style.ratio(454),left:_Style.Style.ratio(56),borderRadius:_Style.Style.ratio(2),backgroundColor:innerColors.SECONDARY_VARIANT,color:innerColors.TEXT_SECONDARY,paddingLeft:0,paddingRight:2,textAlign:'center'}},MediaItem:{itemContainer:{width:_Style.Style.ratio(479),height:_Style.Style.ratio(270)},image:{width:_Style.Style.ratio(479),height:_Style.Style.ratio(270)},baitText:{marginLeft:_Style.Style.ratio(16),marginRight:_Style.Style.ratio(16),marginTop:_Style.Style.ratio(98),color:innerColors.TEXT_SECONDARY},titleText:{marginLeft:_Style.Style.ratio(16),marginRight:_Style.Style.ratio(16),color:innerColors.TEXT_SECONDARY},timeText:{position:'absolute',width:_Style.Style.ratio(70),height:_Style.Style.ratio(30),bottom:_Style.Style.ratio(16),right:_Style.Style.ratio(16),borderRadius:_Style.Style.ratio(2),backgroundColor:innerColors.OVERLAY_1,color:innerColors.TEXT_SECONDARY,padding:_Style.Style.ratio(2),textAlign:'center'}},MediaItemLabel:{itemContainer:{width:_Style.Style.ratio(479),height:_Style.Style.ratio(270)},image:{width:_Style.Style.ratio(479),height:_Style.Style.ratio(270)},baitText:{marginLeft:_Style.Style.ratio(16),marginRight:_Style.Style.ratio(16),marginTop:_Style.Style.ratio(131),color:innerColors.TEXT_SECONDARY},titleText:{marginLeft:_Style.Style.ratio(16),marginRight:_Style.Style.ratio(16),color:innerColors.TEXT_SECONDARY},timeText:{position:'absolute',width:_Style.Style.ratio(80),height:_Style.Style.ratio(30),top:_Style.Style.ratio(16),left:_Style.Style.ratio(16),borderRadius:_Style.Style.ratio(2),backgroundColor:innerColors.SECONDARY_VARIANT,color:innerColors.TEXT_SECONDARY,paddingLeft:0,paddingRight:2,textAlign:'center'}},PosterItem:{itemContainer:{width:_Style.Style.ratio(277),height:_Style.Style.ratio(437)},image:{width:_Style.Style.ratio(277),height:_Style.Style.ratio(392)},textContainer:{marginTop:_Style.Style.ratio(6),backgroundColor:innerColors.TRANSPARENT,width:_Style.Style.ratio(277),height:_Style.Style.ratio(35)},titleText:{color:innerColors.TEXT_PRIMARY_VARIANT}},RoundItem:{itemContainer:{width:_Style.Style.ratio(200),height:_Style.Style.ratio(244)},image:{width:_Style.Style.ratio(200),height:_Style.Style.ratio(200),borderRadius:_Style.Style.ratio(200/2)},textContainer:{marginTop:_Style.Style.ratio(6),backgroundColor:innerColors.TRANSPARENT,width:_Style.Style.ratio(200),height:_Style.Style.ratio(38)},titleText:{color:innerColors.TEXT_PRIMARY_VARIANT,textAlign:'center'}},TopicItem:{itemContainer:{width:_Style.Style.ratio(526),height:_Style.Style.ratio(296)},image:{width:_Style.Style.ratio(526),height:_Style.Style.ratio(296)},textContainer:{position:'absolute',width:'100%',height:'100%',backgroundColor:innerColors.TRANSPARENT},baitText:{marginLeft:_Style.Style.ratio(16),marginRight:_Style.Style.ratio(16),marginTop:_Style.Style.ratio(121),color:innerColors.TEXT_SECONDARY}},FlatScrollView:{row:{width:'100%',justifyContent:'center',alignItems:'center'},list:{width:'100%',justifyContent:'flex-start',flexDirection:'row',flexWrap:'wrap'},rowItem:{width:_Style.Style.ratio(423),height:_Style.Style.ratio(238),margin:_Style.Style.ratio(12),backgroundColor:'#ffffff',borderRadius:_Style.Style.ratio(5),shadowColor:'#000000',shadowOffset:{width:0,height:3},shadowOpacity:0.29,shadowRadius:_Style.Style.ratio(5),elevation:2},rowItemFocused:{transform:[{scale:1.2}],marginLeft:30,marginRight:30,shadowColor:'#000000',shadowOffset:{width:0,height:30},shadowOpacity:0.29,shadowRadius:_Style.Style.ratio(5)},image:{borderRadius:_Style.Style.ratio(5),top:0,left:0,width:flatScrollViewItemWidth,height:flatScrollViewItemHeight},title_container:{margin:10},scrollViewHeader:{width:'100%',color:'white',fontSize:_Style.Style.ratio(30),justifyContent:'center',alignItems:'center'},swimlaneHeaderText1:{fontFamily:'Sports-Bold_Cond_Obl',fontSize:_Style.Style.ratio(48),lineHeight:_Style.Style.ratio(58),color:innerColors.TEXT_SECONDARY,backgroundColor:innerColors.TRANSPARENT,marginLeft:_Style.Style.ratio(60)},textContainer:{position:'absolute',bottom:10,backgroundColor:innerColors.TRANSPARENT}},GridScrollView:{backgroundImageStyle:{width:'100%',height:'100%'},row:{flex:1,width:'100%',marginLeft:_Style.Style.ratio(0),height:'auto',backgroundColor:innerColors.BACKGROUND},gridHeaderText:{fontFamily:'Sports-Bold_Cond_Obl',fontSize:_Style.Style.ratio(48),lineHeight:_Style.Style.ratio(58),color:innerColors.TEXT_SECONDARY,backgroundColor:innerColors.TRANSPARENT,marginLeft:_Style.Style.ratio(60),marginBottom:_Style.Style.ratio(20)}},FlatScrollViewItem:{itemContainer:{width:_Style.Style.ratio(423),height:_Style.Style.ratio(238)},rowItem:{width:423,height:238,margin:_Style.Style.ratio(16),backgroundColor:'#ffffff',borderRadius:_Style.Style.ratio(5),shadowColor:'#000000',shadowOffset:{width:0,height:3},shadowOpacity:0.29,shadowRadius:_Style.Style.ratio(5),elevation:2},image:{width:_Style.Style.ratio(423),height:_Style.Style.ratio(238)},baitText:{marginLeft:_Style.Style.ratio(16),marginRight:_Style.Style.ratio(16),marginTop:_Style.Style.ratio(78),color:innerColors.TEXT_SECONDARY},titleText:{marginLeft:_Style.Style.ratio(16),marginRight:_Style.Style.ratio(16),color:innerColors.TEXT_SECONDARY},timeText:{position:'absolute',width:_Style.Style.ratio(70),height:_Style.Style.ratio(30),bottom:_Style.Style.ratio(16),right:_Style.Style.ratio(16),borderRadius:_Style.Style.ratio(2),backgroundColor:innerColors.OVERLAY_1,color:innerColors.TEXT_SECONDARY,padding:_Style.Style.ratio(2),textAlign:'center'},gradient:{position:'absolute',width:'100%',height:'100%'},textContainer:{position:'absolute',width:'100%',height:'100%',backgroundColor:innerColors.TRANSPARENT},descriptionText:{color:innerColors.TEXT_SECONDARY,textAlign:'left'},timeTextContainer:{position:'absolute',bottom:10,backgroundColor:innerColors.TRANSPARENT}}};exports.ThemeSRG=ThemeSRG;