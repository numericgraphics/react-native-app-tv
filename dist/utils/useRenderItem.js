var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.useRenderItem=useRenderItem;var _react=_interopRequireDefault(require("react"));var _Constants=require("../utils/Constants");var _RoundItem=_interopRequireDefault(require("../items/RoundItem"));var _TopicItem=_interopRequireDefault(require("../items/TopicItem"));var _PosterItem=_interopRequireDefault(require("../items/PosterItem"));var _MediaLabelItem=_interopRequireDefault(require("../items/MediaLabelItem"));var _CardItem=_interopRequireDefault(require("../items/CardItem"));var _CarouselItem=_interopRequireDefault(require("../items/CarouselItem"));var _MediaItem=_interopRequireDefault(require("../items/MediaItem"));var _jsxFileName="/Users/rinaldo/Documents/React-native/npm-package/RTSAppTv/src/lib/utils/useRenderItem.js";function useRenderItem(type){switch(type){case _Constants.MEDIA_TYPE.ROUND:return _react.default.createElement(_RoundItem.default,{__self:this,__source:{fileName:_jsxFileName,lineNumber:14,columnNumber:16}});case _Constants.MEDIA_TYPE.TOPIC:return _react.default.createElement(_TopicItem.default,{__self:this,__source:{fileName:_jsxFileName,lineNumber:16,columnNumber:16}});case _Constants.MEDIA_TYPE.POSTER:return _react.default.createElement(_PosterItem.default,{__self:this,__source:{fileName:_jsxFileName,lineNumber:18,columnNumber:16}});case _Constants.MEDIA_TYPE.MEDIA_LABEL:return _react.default.createElement(_MediaLabelItem.default,{__self:this,__source:{fileName:_jsxFileName,lineNumber:20,columnNumber:16}});case _Constants.MEDIA_TYPE.CARD:return _react.default.createElement(_CardItem.default,{__self:this,__source:{fileName:_jsxFileName,lineNumber:22,columnNumber:16}});case _Constants.MEDIA_TYPE.CAROUSEL:return _react.default.createElement(_CarouselItem.default,{__self:this,__source:{fileName:_jsxFileName,lineNumber:24,columnNumber:16}});case _Constants.MEDIA_TYPE.MEDIA:default:return _react.default.createElement(_MediaItem.default,{__self:this,__source:{fileName:_jsxFileName,lineNumber:27,columnNumber:16}});}}