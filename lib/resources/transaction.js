"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_regenerator=_interopRequireDefault(require("@babel/runtime/regenerator")),_asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator")),_defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){(0,_defineProperty2["default"])(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}var request=require("request-promise"),clone=require("clone"),config=require("../config"),PagseguroError=require("../Error"),format=require("../format"),formatRequestParams=function(a,b){var c=(0,_extends2["default"])({},b);return c.currency="BRL",c.shipping=format.shipping(c.shipping),c.sender=format.sender(c.sender),c.extraAmount=format.extraAmount(c.extraAmount),c.creditCard=format.creditCard(c.creditCard,c),c.billing=format.billing(c.billing),c.items=format.items(c.items),c.hasOwnProperty("receivers")&&(c.receivers=format.receivers(c.receivers),delete c.receiver),c},getSplitParams=function(a){return a=clone(a),a.qs={appId:a.appId,appKey:a.appKey},a.headers=_objectSpread(_objectSpread({},a.headers),{},{Accept:"application/vnd.pagseguro.com.br.v3+xml"}),{opts:a,url:"".concat(a.base.webservice,"/").concat(config.split.transaction)}},formatResponse=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=1<arguments.length?arguments[1]:void 0;return a.method=b,a},boleto=/*#__PURE__*/function(){var a=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function a(b,c){var d,e,f,g;return _regenerator["default"].wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c.method="boleto",c=formatRequestParams(b,c),d="".concat(b.base.webservice,"/").concat(config.transaction.directPayment),c.hasOwnProperty("receivers")&&(e=getSplitParams(b),d=e.url,b=e.opts),a.prev=4,a.next=7,request(_objectSpread(_objectSpread({},b),{},{url:d,method:"POST",body:b.jsonToXml({payment:c})}));case 7:return f=a.sent,a.abrupt("return",_objectSpread(_objectSpread({},f),{},{content:formatResponse(f.content.transaction,"boleto")}));case 11:throw a.prev=11,a.t0=a["catch"](4),g=a.t0.response,new PagseguroError(g);case 15:case"end":return a.stop();}},a,null,[[4,11]])}));return function(){return a.apply(this,arguments)}}(),creditCard=/*#__PURE__*/function(){var a=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function a(b,c){var d,e,f,g;return _regenerator["default"].wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c.method="creditCard",c=formatRequestParams(b,c),d="".concat(b.base.webservice,"/").concat(config.transaction.directPayment),c.hasOwnProperty("receivers")&&(e=getSplitParams(b),d=e.url,b=e.opts),a.prev=4,a.next=7,request(_objectSpread(_objectSpread({},b),{},{url:d,method:"POST",body:b.jsonToXml({payment:c})}));case 7:return f=a.sent,a.abrupt("return",_objectSpread(_objectSpread({},f),{},{content:formatResponse(f.content.transaction,"creditCard")}));case 11:throw a.prev=11,a.t0=a["catch"](4),g=a.t0.response,new PagseguroError(g);case 15:case"end":return a.stop();}},a,null,[[4,11]])}));return function(){return a.apply(this,arguments)}}(),onlineDebit=/*#__PURE__*/function(){var a=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function a(b,c){var d,e,f,g;return _regenerator["default"].wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c.method="EFT",c=formatRequestParams(b,c),d="".concat(b.base.webservice,"/").concat(config.transaction.directPayment),c.hasOwnProperty("receivers")&&(e=getSplitParams(b),d=e.url,b=e.opts),a.prev=4,a.next=7,request(_objectSpread(_objectSpread({},b),{},{url:d,method:"POST",body:b.jsonToXml({payment:c})}));case 7:return f=a.sent,a.abrupt("return",_objectSpread(_objectSpread({},f),{},{content:formatResponse(f.content.transaction,"onlineDebit")}));case 11:throw a.prev=11,a.t0=a["catch"](4),g=a.t0.response,new PagseguroError(g);case 15:case"end":return a.stop();}},a,null,[[4,11]])}));return function(){return a.apply(this,arguments)}}(),cancel=/*#__PURE__*/function(){var a=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function a(b,c){var d,e;return _regenerator["default"].wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return b.qs=_objectSpread(_objectSpread({},b.qs),{},{transactionCode:c}),a.prev=1,a.next=4,request(_objectSpread(_objectSpread({},b),{},{url:"".concat(b.base.webservice,"/").concat(config.transaction.cancel),method:"POST"}));case 4:return d=a.sent,a.abrupt("return",_objectSpread(_objectSpread({},d),{},{content:"Transa\xE7\xE3o ".concat(c," cancelada com sucesso.")}));case 8:throw a.prev=8,a.t0=a["catch"](1),e=a.t0.response,new PagseguroError(e);case 12:case"end":return a.stop();}},a,null,[[1,8]])}));return function(){return a.apply(this,arguments)}}(),refund=/*#__PURE__*/function(){var a=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function a(b,c){var d,e,f,g=arguments;return _regenerator["default"].wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=2<g.length&&void 0!==g[2]?g[2]:null,b.qs=_objectSpread(_objectSpread({},b.qs),{},{transactionCode:c}),d&&(b.qs.refundValue=d),a.prev=3,a.next=6,request(_objectSpread(_objectSpread({},b),{},{url:"".concat(b.base.webservice,"/").concat(config.transaction.refund),method:"POST"}));case 6:return e=a.sent,a.abrupt("return",_objectSpread(_objectSpread({},e),{},{content:"Pedido de reembolso da transa\xE7\xE3o  ".concat(c," realizado com sucesso.")}));case 10:throw a.prev=10,a.t0=a["catch"](3),f=a.t0.response,new PagseguroError(f);case 14:case"end":return a.stop();}},a,null,[[3,10]])}));return function(){return a.apply(this,arguments)}}(),search=/*#__PURE__*/function(){var a=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function a(b){var c,d,e,f,g=arguments;return _regenerator["default"].wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c=1<g.length&&void 0!==g[1]?g[1]:{},b.qs=_objectSpread(_objectSpread({},b.qs),c),d=function(a){return a?_objectSpread(_objectSpread({},a),{},{transactions:a.transactions&&a.transactions.transaction?a.transactions.transaction:[]}):{date:new Date(new Date().toString().split("GMT")[0]+" UTC").toISOString(),transactions:[],resultsInThisPage:0,currentPage:1,totalPages:0}},a.prev=3,a.next=6,request(_objectSpread(_objectSpread({},b),{},{url:"".concat(b.base.webservice,"/").concat(config.transaction.search),method:"GET"}));case 6:return e=a.sent,a.abrupt("return",_objectSpread(_objectSpread({},e),{},{content:d(e.content.transactionSearchResult)}));case 10:throw a.prev=10,a.t0=a["catch"](3),f=a.t0.response,new PagseguroError(f);case 14:case"end":return a.stop();}},a,null,[[3,10]])}));return function(){return a.apply(this,arguments)}}(),get=/*#__PURE__*/function(){var a=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function a(b,c){var d,e;return _regenerator["default"].wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,request(_objectSpread(_objectSpread({},b),{},{url:"".concat(b.base.webservice,"/").concat(config.transaction.code,"/").concat(c),method:"GET"}));case 3:return d=a.sent,a.abrupt("return",_objectSpread(_objectSpread({},d),{},{content:d.content.transaction||null}));case 7:throw a.prev=7,a.t0=a["catch"](0),e=a.t0.response,new PagseguroError(e);case 11:case"end":return a.stop();}},a,null,[[0,7]])}));return function(){return a.apply(this,arguments)}}(),notification=/*#__PURE__*/function(){var a=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function a(b,c){var d,e;return _regenerator["default"].wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,request(_objectSpread(_objectSpread({},b),{},{url:"".concat(b.base.webservice,"/").concat(config.transaction.notification,"/").concat(c),method:"GET"}));case 3:return d=a.sent,a.abrupt("return",_objectSpread(_objectSpread({},d),{},{content:d.content}));case 7:throw a.prev=7,a.t0=a["catch"](0),e=a.t0.response,new PagseguroError(e);case 11:case"end":return a.stop();}},a,null,[[0,7]])}));return function(){return a.apply(this,arguments)}}();/**
 * exports
 */module.exports={boleto:boleto,creditCard:creditCard,onlineDebit:onlineDebit,cancel:cancel,refund:refund,search:search,notification:notification,get:get};