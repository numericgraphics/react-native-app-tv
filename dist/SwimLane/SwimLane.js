var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _SwimLaneGeneric=require("../styles/SwimLaneGeneric.style");var _AnimatedBorderFocusableHighlight=require("../focusable/AnimatedBorderFocusableHighlight");var _AnimatedFocusableHighlight=require("../focusable/AnimatedFocusableHighlight");var _TVAPPContext=_interopRequireDefault(require("../TVAPPContext"));var _useMediaList3=require("../utils/useMediaList");var _tools=require("../utils/tools");var _this=this,_jsxFileName="/Users/rinaldo/Documents/React-native/npm-package/RTSAppTv/src/lib/SwimLane/SwimLane.js";function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}var SwimLane=(0,_react.forwardRef)(function(_ref,ref){var id=_ref.id,data=_ref.data,renderItem=_ref.renderItem,title=_ref.title,parent=_ref.parent,type=_ref.type,reducer=_ref.reducer,componentStyle=_ref.componentStyle,focusElementRef=_ref.focusElementRef,onItemPress=_ref.onItemPress,onLayout=_ref.onLayout,onItemFocus=_ref.onItemFocus,onItemBlur=_ref.onItemBlur;var _useMediaList=(0,_useMediaList3.useMediaList)(data),_useMediaList2=(0,_slicedToArray2.default)(_useMediaList,2),mediaList=_useMediaList2[0],loading=_useMediaList2[1];var _useContext=(0,_react.useContext)(_TVAPPContext.default),FocusManager=_useContext.FocusManager,Theme=_useContext.Theme;var theme=Theme.theme;var rowsRef=(0,_react.useRef)([]);var SwimLaneRef=(0,_react.useRef)(null);var _useState=(0,_react.useState)(false),_useState2=(0,_slicedToArray2.default)(_useState,2),isSwimLaneFocused=_useState2[0],setSwimLaneFocused=_useState2[1];var _useState3=(0,_react.useState)(false),_useState4=(0,_slicedToArray2.default)(_useState3,2),isSwimLaneElementFocused=_useState4[0],setSwimLaneElementFocused=_useState4[1];var _useState5=(0,_react.useState)(FocusManager.getFocus().type),_useState6=(0,_slicedToArray2.default)(_useState5,2),focusType=_useState6[0],setFocusType=_useState6[1];var style=(0,_extends2.default)({},_SwimLaneGeneric.SwimLaneGenericDefaultStyle,theme==null?void 0:theme.SwimLane,componentStyle);var _ref2=reducer||{},dispatch=_ref2.dispatch,action=_ref2.action;var _ref3=parent||{},parentIndex=_ref3.parentIndex,parentName=_ref3.parentName;(0,_react.useEffect)(function(){console.log('swimlane - init');return function(){};},[]);(0,_react.useEffect)(function(){setFocusType(FocusManager.getFocus().type);return function(){};},[FocusManager.getFocus().type]);(0,_react.useEffect)(function(){var timeout=setTimeout(function(){if(!isSwimLaneElementFocused){setSwimLaneFocused(false);}},500);if(isSwimLaneElementFocused&&!isSwimLaneFocused){FocusManager.modifySwimLane(parentName+"_"+parentIndex,'viewed',true);setSwimLaneFocused(true);}return function(){clearTimeout(timeout);};},[isSwimLaneElementFocused]);var getRef=(0,_react.useCallback)(function(index){return function(ref){rowsRef.current[index]=ref;};},[]);var _onBlur=(0,_react.useCallback)(function(item){setSwimLaneElementFocused(false);if(onItemBlur){onItemBlur(item);}},[]);var _onFocus=function onFocus(item,index,key){FocusManager.setFocus({ref:rowsRef.current[index],parent:parent,key:key});if(_reactNative.Platform.OS==='ios'){var timeout=setTimeout(function(){setSwimLaneElementFocused(true);clearTimeout(timeout);},10);}else{setSwimLaneElementFocused(true);}reducer&&dispatch({type:action,index:index,media:item});if(onItemFocus){onItemFocus(item,index,key);}};var _onPress=(0,_react.useCallback)(function(item){var tempItem=(0,_extends2.default)({},item,{type:type});if(onItemPress){onItemPress(tempItem);}},[]);function onLayoutCallback(name,list){FocusManager.setSwimLanes({name:name,list:list,viewed:false});if(onLayout){onLayout(name,list);}}var preferredFocus=function preferredFocus(ref){return ref===focusElementRef;};var getNextFocusRight=(0,_react.useCallback)(function(index){if(index===mediaList.length-1){return(0,_reactNative.findNodeHandle)(rowsRef.current[index]);}},[]);var getNextFocusDown=(0,_react.useCallback)(function(){if(FocusManager.getSwimLanes(parentName+"_"+(parentIndex+1))&&FocusManager.getSwimLanes(parentName+"_"+(parentIndex+1)).viewed===false){var nextFocusDown=FocusManager.getSwimLanes(parentName+"_"+(parentIndex+1)).list[0];return(0,_reactNative.findNodeHandle)(nextFocusDown);}},[]);var getNextFocusLeft=(0,_react.useCallback)(function(index){if(index===0&&parentName){var nextFocusLeft=FocusManager.getNextFocusLeft(parentName);return(0,_reactNative.findNodeHandle)(nextFocusLeft);}},[]);var getFocusableProps=function getFocusableProps(item,index,key){return{ref:getRef(index),hasTVPreferredFocus:preferredFocus(rowsRef.current[index]),nextFocusRight:getNextFocusRight(index),nextFocusLeft:getNextFocusLeft(index),nextFocusDown:getNextFocusDown(index),onPress:function onPress(){return _onPress(item);},onFocus:function onFocus(){return _onFocus(item,index,key);},onBlur:function onBlur(){return _onBlur(item);},underlayColor:style.buttonFocusedColor,style:[style.item,{marginLeft:index===0?_reactNative.Platform.OS==='ios'?50:40:null}],focusStyle:style.focusStyle};};var buildSwimLaneScale=function buildSwimLaneScale(){return mediaList.map(function(item,index){var imageUrl=item.imageUrl,isEventStarted=item.isEventStarted,prettyHour=item.prettyHour,prettyDuration=item.prettyDuration,bait=item.bait,title=item.title,description=item.description;var key=id+"_"+index;return _react.default.createElement(_AnimatedFocusableHighlight.AnimatedFocusableHighlight,(0,_extends2.default)({key:key,nativeID:key},getFocusableProps(item,index,key),{__self:_this,__source:{fileName:_jsxFileName,lineNumber:176,columnNumber:20}}),(0,_tools.getClonedRenderItem)(renderItem,{key:index,imageUrl:imageUrl,isEventStarted:isEventStarted,prettyHour:prettyHour,prettyDuration:prettyDuration,bait:bait,title:title,description:description,theme:theme}));});};var buildSwimLaneBorder=function buildSwimLaneBorder(){return mediaList.map(function(item,index){var imageUrl=item.imageUrl,isEventStarted=item.isEventStarted,prettyHour=item.prettyHour,prettyDuration=item.prettyDuration,bait=item.bait,title=item.title,description=item.description;var key=id+"_"+index;return _react.default.createElement(_AnimatedBorderFocusableHighlight.AnimatedBorderFocusableHighlight,(0,_extends2.default)({key:key,nativeID:key},getFocusableProps(item,index,key),{__self:_this,__source:{fileName:_jsxFileName,lineNumber:186,columnNumber:20}}),(0,_tools.getClonedRenderItem)(renderItem,{key:index,imageUrl:imageUrl,isEventStarted:isEventStarted,prettyHour:prettyHour,prettyDuration:prettyDuration,bait:bait,title:title,description:description,theme:theme}));});};return _react.default.createElement(_reactNative.View,{ref:ref,__self:_this,__source:{fileName:_jsxFileName,lineNumber:193,columnNumber:9}},title&&title,_react.default.createElement(_reactNative.ScrollView,{ref:SwimLaneRef,nativeID:id,key:id,onLayout:function onLayout(){return onLayoutCallback(parentName+"_"+parentIndex,rowsRef.current);},style:style.container,horizontal:true,showsHorizontalScrollIndicator:false,scrollEventThrottle:16,__self:_this,__source:{fileName:_jsxFileName,lineNumber:195,columnNumber:13}},!loading&&focusType==='border'?buildSwimLaneBorder():buildSwimLaneScale()));});var _default=(0,_react.memo)(SwimLane);exports.default=_default;