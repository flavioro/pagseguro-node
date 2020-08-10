"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_regenerator=_interopRequireDefault(require("@babel/runtime/regenerator")),_asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator")),_defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){(0,_defineProperty2["default"])(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}var request=require("request-promise"),clone=require("clone"),config=require("../config"),PagseguroError=require("../Error"),getExtraParams=function(a){return a=clone(a),a.headers=_objectSpread(_objectSpread({},a.headers),{},{Accept:"application/vnd.pagseguro.com.br.v3+xml"}),{opts:a}},get=/*#__PURE__*/function(){var a=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function a(b,c){var d,e,f,g;return _regenerator["default"].wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d="".concat(b.base.cards,"/").concat(config.token),e=getExtraParams(b,c),b=e.opts,b.qs=_objectSpread(_objectSpread({},b.qs),c),a.prev=4,a.next=7,request(_objectSpread(_objectSpread({},b),{},{url:d,method:"POST"}));case 7:return f=a.sent,a.abrupt("return",_objectSpread(_objectSpread({},f),{},{content:f.content?f.content.card:""}));case 11:throw a.prev=11,a.t0=a["catch"](4),g=a.t0.response,new PagseguroError(g);case 15:case"end":return a.stop();}},a,null,[[4,11]])}));return function(){return a.apply(this,arguments)}}();module.exports={get:get};