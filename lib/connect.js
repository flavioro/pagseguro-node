"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){(0,_defineProperty2["default"])(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}var xml2js=require("fast-xml-parser"),logger=require("./logger"),getBaseUrl=require("./utils").getBaseUrl,validate=require("./validate"),resources=require("./resources");// var fs = require('fs');
// var util = require('util');
// var log_file = fs.createWriteStream(__dirname + '/debug.log', {flags : 'w'});
// var log_stdout = process.stdout;
// console.log = function(d) { //
//   log_file.write(util.format(d) + '\n');
//   log_stdout.write(util.format(d) + '\n');
// };
module.exports=function(a){/**
	 * Validate params
	 */if(!validate.connect(a))throw new TypeError("Erro ao conectar com pagseguro! Verifique as configura\xE7\xF5es: [LINK REPOSIT\xD3RIO]");/**
	 * Log
	 */var b={log:function(){},info:function info(){},error:function error(){},success:function success(){}};a.debug&&(b=logger(a.log,a.debug));/**
	 * Config
	 */var c={logger:b,env:a.env,appId:a.appId,appKey:a.appKey,notificationURL:a.notificationURL,redirectURL:a.redirectURL,qs:{email:a.email,token:a.token},base:{base:getBaseUrl(a.env,"base"),static:getBaseUrl(a.env,"static"),webservice:getBaseUrl(a.env,"webservice"),cards:getBaseUrl(a.env,"cards")},headers:{"Content-Type":"application/xml"// Accept: "application/vnd.pagseguro.com.br.v3+xml"
},transform:function transform(a,c){// console.log(body);
// console.log(response);
var d=200>=c.statusCode?"success":"error";if(!0===xml2js.validate(a)){var f=xml2js.parse(a,{trim:!0});return 200>=c.statusCode?b.info({statusCode:c.statusCode,statusMessage:c.statusMessage,status:d,content:f}):(f=f.errors.error,b.error({statusCode:c.statusCode,statusMessage:c.statusMessage,status:d,content:f})),{statusCode:c.statusCode,status:d,content:f}}var e={statusCode:c.statusCode,status:d,content:a};return Array.isArray(e.content)||(e.content=[{code:e.statusCode,message:e.content}]),b.error(_objectSpread(_objectSpread({},e),{},{statusCode:c.statusCode,statusMessage:c.statusMessage})),e},jsonToXml:function jsonToXml(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{format:!0},c=new xml2js.j2xParser(b);return c.parse(a)},xmlToJson:function xmlToJson(){var a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{trim:!0};return xml2js.parse(body,a)}},d={};// console.log("params.env_" + params.env)
// console.log("conifg.base.base_" + config.base.base)
// console.log("conifg.base.static_" + config.base.static)
// console.log("conifg.base.webservice_" + config.base.webservice)
/**
	 * Resources
	 */return Object.keys(resources).forEach(function(a){d[a]=_objectSpread({},resources[a]),Object.keys(d[a]).forEach(function(b){validate.isFunction(d[a][b])&&(d[a][b]=d[a][b].bind(null,c))})}),d};