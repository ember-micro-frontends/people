"use strict"
define("people/app",["exports","ember-resolver","ember-load-initializers","people/config/environment","single-spa-ember"],(function(e,t,n,r,o){function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=p(e)
if(t){var o=p(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return c(this,n)}}function c(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.unmount=e.mount=e.bootstrap=e.default=void 0
var d=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)})(o,Ember.Application)
var n=u(o)
function o(){var e
l(this,o)
for(var i=arguments.length,a=new Array(i),u=0;u<i;u++)a[u]=arguments[u]
return s(f(e=n.call.apply(n,[this].concat(a))),"modulePrefix",r.default.modulePrefix),s(f(e),"podModulePrefix",r.default.podModulePrefix),s(f(e),"Resolver",t.default),e}return o}()
e.default=d,(0,n.default)(d,r.default.modulePrefix)
var b=(0,o.default)({App:d,appName:"people",createOpts:{rootElement:"#people"}}),y=b.bootstrap
e.bootstrap=y
var m=b.mount
e.mount=m
var v=b.unmount
e.unmount=v})),define("people/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("people/components/people-list",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"Eykxvwth",block:'{"symbols":["p","@people"],"statements":[[10,"div"],[14,0,"planetList"],[12],[2,"\\n"],[6,[37,2],[[30,[36,1],[[30,[36,1],[[32,2]],null]],null]],null,[["default"],[{"statements":[[2,"  "],[8,"link-to",[[24,0,"h-12 flex items-center border-white border-b cursor-pointer no-underline"]],[["@route","@query"],["index",[30,[36,0],null,[["id"],[[32,1,["id"]]]]]]],[["default"],[{"statements":[[2,"\\n    "],[1,[32,1,["name"]]],[2," \\n  "]],"parameters":[]}]]],[2,"\\n"]],"parameters":[1]}]]],[13],[2,"\\n"]],"hasEval":false,"upvars":["hash","-track-array","each"]}',meta:{moduleName:"people/components/people-list.hbs"}}),n=Ember._setComponentTemplate(t,Ember._templateOnlyComponent())
e.default=n})),define("people/components/selected-people",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"0cTY8pDy",block:'{"symbols":["@person"],"statements":[[10,"table"],[12],[2,"\\n  "],[10,"tr"],[12],[2,"\\n    "],[10,"td"],[12],[2,"\\n      Name\\n    "],[13],[2," \\n    "],[10,"td"],[12],[1,[32,1,["name"]]],[13],[2,"\\n  "],[13],[2,"\\n  "],[10,"tr"],[12],[2,"\\n  "],[10,"td"],[12],[2,"Height"],[13],[2,"\\n  "],[10,"td"],[12],[1,[32,1,["height"]]],[13],[2,"\\n  "],[13],[2,"\\n  "],[10,"tr"],[12],[2,"\\n  "],[10,"td"],[12],[2,"Mass"],[13],[2,"\\n  "],[10,"td"],[12],[1,[32,1,["mass"]]],[13],[2,"\\n  "],[13],[2,"\\n  "],[10,"tr"],[12],[2,"\\n  "],[10,"td"],[12],[2,"Hair color"],[13],[2,"\\n  "],[10,"td"],[12],[1,[32,1,["hair_color"]]],[13],[2,"\\n  "],[13],[2,"\\n  "],[10,"tr"],[12],[2,"\\n  "],[10,"td"],[12],[2,"Gender"],[13],[2,"\\n  "],[10,"td"],[12],[1,[32,1,["gender"]]],[13],[2,"\\n  "],[13],[2,"\\n  "],[10,"tr"],[12],[2,"\\n  "],[10,"td"],[12],[2,"Birth year"],[13],[2,"\\n  "],[10,"td"],[12],[1,[32,1,["birth_year"]]],[13],[2,"\\n  "],[13],[2," \\n  "],[10,"tr"],[12],[2,"\\n  "],[10,"td"],[12],[2,"Homeworld"],[13],[2,"\\n  "],[10,"td"],[12],[1,[32,1,["homeworld"]]],[13],[2,"\\n    "],[13],[2,"\\n    "],[10,"tr"],[12],[2,"\\n      "],[10,"td"],[12],[2,"Films\\n      "],[13],[2,"\\n    "],[13],[2,"\\n"],[13],[2,"\\n"]],"hasEval":false,"upvars":[]}',meta:{moduleName:"people/components/selected-people.hbs"}}),n=Ember._setComponentTemplate(t,Ember._templateOnlyComponent())
e.default=n})),define("people/helpers/app-version",["exports","people/config/environment","ember-cli-app-version/utils/regexp"],(function(e,t,n){function r(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.default.APP.version,i=r.versionOnly||r.hideSha,l=r.shaOnly||r.hideVersion,a=null
return i&&(r.showExtended&&(a=o.match(n.versionExtendedRegExp)),a||(a=o.match(n.versionRegExp))),l&&(a=o.match(n.shaRegExp)),a?a[0]:o}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=r,e.default=void 0
var o=Ember.Helper.helper(r)
e.default=o})),define("people/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","people/config/environment"],(function(e,t,n){var r,o
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n.default.APP&&(r=n.default.APP.name,o=n.default.APP.version)
var i={name:"App Version",initialize:(0,t.default)(r,o)}
e.default=i})),define("people/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=n})),define("people/initializers/export-application-global",["exports","people/config/environment"],(function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var r,o=t.default.exportApplicationGlobal
r="string"==typeof o?o:Ember.String.classify(t.default.modulePrefix),n[r]||(n[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[r]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default=void 0
var r={name:"export-application-global",initialize:n}
e.default=r})),define("people/models/people",["exports","@ember-data/model"],(function(e,t){var n,r,o,i,l,a,u,c,f,p,s,d,b,y,m,v,h,_
function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=R(e)
if(t){var o=R(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return j(this,n)}}function j(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?x(e):t}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var z=(_=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)})(n,e)
var t=E(n)
function n(){var e
O(this,n)
for(var _=arguments.length,g=new Array(_),P=0;P<_;P++)g[P]=arguments[P]
return w(x(e=t.call.apply(t,[this].concat(g))),"name",r,x(e)),w(x(e),"birth_year",o,x(e)),w(x(e),"eye_color",i,x(e)),w(x(e),"gender",l,x(e)),w(x(e),"hair_color",a,x(e)),w(x(e),"height",u,x(e)),w(x(e),"mass",c,x(e)),w(x(e),"skin_color",f,x(e)),w(x(e),"homeworld",p,x(e)),w(x(e),"films",s,x(e)),w(x(e),"species",d,x(e)),w(x(e),"starships",b,x(e)),w(x(e),"vehicles",y,x(e)),w(x(e),"url",m,x(e)),w(x(e),"created",v,x(e)),w(x(e),"edited",h,x(e)),e}return n}(t.default),r=S((n=_).prototype,"name",[t.attr],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),o=S(n.prototype,"birth_year",[t.attr],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),i=S(n.prototype,"eye_color",[t.attr],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),l=S(n.prototype,"gender",[t.attr],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a=S(n.prototype,"hair_color",[t.attr],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u=S(n.prototype,"height",[t.attr],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c=S(n.prototype,"mass",[t.attr],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=S(n.prototype,"skin_color",[t.attr],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=S(n.prototype,"homeworld",[t.attr],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=S(n.prototype,"films",[t.attr],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=S(n.prototype,"species",[t.attr],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=S(n.prototype,"starships",[t.attr],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=S(n.prototype,"vehicles",[t.attr],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=S(n.prototype,"url",[t.attr],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=S(n.prototype,"created",[t.attr],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=S(n.prototype,"edited",[t.attr],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),n)
e.default=z})),define("people/router",["exports","people/config/environment"],(function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=u(e)
if(t){var o=u(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return l(this,n)}}function l(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?a(e):t}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var f=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)})(l,Ember.Router)
var n=i(l)
function l(){var e
r(this,l)
for(var o=arguments.length,i=new Array(o),u=0;u<o;u++)i[u]=arguments[u]
return c(a(e=n.call.apply(n,[this].concat(i))),"location",t.default.locationType),c(a(e),"rootURL",t.default.rootURL),e}return l}()
e.default=f,f.map((function(){}))})),define("people/routes/application",["exports"],(function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=l(e)
if(t){var o=l(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return i(this,n)}}function i(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):n}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)})(i,Ember.Route)
var t=o(i)
function i(){return n(this,i),t.apply(this,arguments)}return i}()
e.default=a})),define("people/routes/index",["exports"],(function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t,n,r,o,i,l){try{var a=e[i](l),u=a.value}catch(c){return void n(c)}a.done?t(u):Promise.resolve(u).then(r,o)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=c(e)
if(t){var o=c(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return a(this,n)}}function a(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?u(e):n}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var p=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)})(b,Ember.Route)
var t,a,c,p,s,d=l(b)
function b(){var e
r(this,b)
for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o]
return f(u(e=d.call.apply(d,[this].concat(n))),"queryParams",{id:{refreshModel:!0}}),e}return t=b,(a=[{key:"model",value:(p=regeneratorRuntime.mark((function e(t){var n,r,o,i
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://swapi.dev/api/people/")
case 2:return n=e.sent,e.next=5,n.json()
case 5:return(r=e.sent).results.forEach((function(e,t){return e.id=++t})),o=r.results,i=o.find((function(e){return e.id==t.id})),e.abrupt("return",{people:o,person:i})
case 10:case"end":return e.stop()}}),e)})),s=function(){var e=this,t=arguments
return new Promise((function(r,o){var i=p.apply(e,t)
function l(e){n(i,r,o,l,a,"next",e)}function a(e){n(i,r,o,l,a,"throw",e)}l(void 0)}))},function(e){return s.apply(this,arguments)})}])&&o(t.prototype,a),c&&o(t,c),b}()
e.default=p})),define("people/templates/application",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"PQFqYlDy",block:'{"symbols":[],"statements":[[1,[30,[36,1],[[30,[36,0],null,null]],null]],[2,"\\n"]],"hasEval":false,"upvars":["-outlet","component"]}',meta:{moduleName:"people/templates/application.hbs"}})
e.default=t})),define("people/templates/index",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"y5Zjwpvu",block:'{"symbols":["@model"],"statements":[[10,"div"],[12],[2,"\\n  "],[10,"div"],[14,0,"flex"],[12],[2,"\\n    "],[10,"div"],[14,0,"p-6 w-1/3"],[12],[2,"\\n"],[6,[37,1],[[32,0,["nextPage"]]],null,[["default"],[{"statements":[[2,"        "],[8,"button",[[16,"disabled",[32,0,["disabled"]]],[16,"loading",[32,0,["loading"]]],[4,[38,0],["click",[32,0,["fetchPlanets"]]],null]],[[],[]],[["default"],[{"statements":[[2,"\\n          Fetch More Planets\\n        "]],"parameters":[]}]]],[2,"\\n"]],"parameters":[]}]]],[2,"        "],[8,"people-list",[],[["@people"],[[32,1,["people"]]]],null],[2,"\\n    "],[13],[2,"\\n    "],[10,"div"],[14,0,"w-2/3 p-6 border-l-2 border-white"],[12],[2,"\\n      "],[10,"div"],[14,0,"selectedPlanet"],[12],[2,"\\n        "],[8,"selected-people",[],[["@person"],[[32,1,["person"]]]],null],[2,"\\n      "],[13],[2,"\\n    "],[13],[2,"\\n  "],[13],[2,"\\n"],[13],[2,"\\n"]],"hasEval":false,"upvars":["on","if"]}',meta:{moduleName:"people/templates/index.hbs"}})
e.default=t})),define("people/config/environment",[],(function(){var e={default:{modulePrefix:"people",environment:"production",rootURL:"/people/",locationType:"hash",EmberENV:{FEATURES:{},EXTEND_PROTOTYPES:{Date:!1,String:!1},_APPLICATION_TEMPLATE_WRAPPER:!1,_DEFAULT_ASYNC_OBSERVERS:!0,_JQUERY_INTEGRATION:!1,_TEMPLATE_ONLY_GLIMMER_COMPONENTS:!0},APP:{name:"people",version:"0.0.0+14a2b7cf"},exportApplicationGlobal:!1}}
return Object.defineProperty(e,"__esModule",{value:!0}),e}))
