var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _reactNativeLinearGradient=_interopRequireDefault(require("react-native-linear-gradient"));var _MediaItemFullDefaultStyle=require("../styles/MediaItemFullDefaultStyle.style");var _CarouselItemDefaultStyle=require("../styles/CarouselItemDefaultStyle.style");var _MediaItemTime=_interopRequireDefault(require("./MediaItemTime"));var _this=this,_jsxFileName="/Users/rinaldo/Documents/React-native/npm-package/RTSAppTv/src/lib/items/CarouselItem.js";function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}var CarouselItem=function CarouselItem(_ref){var imageUrl=_ref.imageUrl,title=_ref.title,bait=_ref.bait,description=_ref.description,isEventStarted=_ref.isEventStarted,prettyHour=_ref.prettyHour,theme=_ref.theme;var style=(0,_extends2.default)({},_MediaItemFullDefaultStyle.MediaItemFullDefaultStyle,_CarouselItemDefaultStyle.CarouselItemDefaultStyle,theme==null?void 0:theme.Typography,theme==null?void 0:theme.CarouselItem);return _react.default.createElement(_reactNative.View,{style:style.itemContainer,__self:_this,__source:{fileName:_jsxFileName,lineNumber:30,columnNumber:9}},_react.default.createElement(_reactNative.Image,{resizeMethod:'auto',source:{uri:""+decodeURIComponent(imageUrl)+(imageUrl.includes('kingfisher')?'':'/scale/width/1600')},style:style.image,__self:_this,__source:{fileName:_jsxFileName,lineNumber:31,columnNumber:13}}),_react.default.createElement(_reactNativeLinearGradient.default,{colors:['rgba(26, 26, 26, 0)','rgba(26, 26, 26, 0.6)'],style:style.gradient,__self:_this,__source:{fileName:_jsxFileName,lineNumber:36,columnNumber:13}}),_react.default.createElement(_reactNative.View,{style:[style.textContainer],__self:_this,__source:{fileName:_jsxFileName,lineNumber:40,columnNumber:13}},_react.default.createElement(_reactNative.View,{style:style.textBackground,__self:_this,__source:{fileName:_jsxFileName,lineNumber:41,columnNumber:17}}),_react.default.createElement(_reactNative.Text,{numberOfLines:1,style:[style.baitText,style.h1],__self:_this,__source:{fileName:_jsxFileName,lineNumber:42,columnNumber:17}},bait),_react.default.createElement(_reactNative.Text,{numberOfLines:1,style:[style.titleText,style.h2],__self:_this,__source:{fileName:_jsxFileName,lineNumber:43,columnNumber:17}},title),_react.default.createElement(_MediaItemTime.default,{isEventStarted:isEventStarted,text:prettyHour,style:style.timeText,font:style.labels,theme:theme,__self:_this,__source:{fileName:_jsxFileName,lineNumber:44,columnNumber:17}}),_react.default.createElement(_reactNative.Text,{numberOfLines:4,style:[style.descriptionText,style.h3],__self:_this,__source:{fileName:_jsxFileName,lineNumber:51,columnNumber:17}},description)));};var _default=(0,_react.memo)(CarouselItem);exports.default=_default;