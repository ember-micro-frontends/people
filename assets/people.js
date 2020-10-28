"use strict"
define("people/adapters/-json-api",["exports","@ember-data/adapter/json-api"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("people/app",["exports","ember-resolver","ember-load-initializers","people/config/environment","single-spa-ember"],(function(e,t,r,n,o){function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=p(e)
if(t){var o=p(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return f(this,r)}}function f(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?c(e):t}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.unmount=e.mount=e.bootstrap=e.default=void 0
var d=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)})(o,Ember.Application)
var r=u(o)
function o(){var e
a(this,o)
for(var i=arguments.length,l=new Array(i),u=0;u<i;u++)l[u]=arguments[u]
return s(c(e=r.call.apply(r,[this].concat(l))),"modulePrefix",n.default.modulePrefix),s(c(e),"podModulePrefix",n.default.podModulePrefix),s(c(e),"Resolver",t.default),e}return o}()
e.default=d,(0,r.default)(d,n.default.modulePrefix)
var b=(0,o.default)({App:d,appName:"people",createOpts:{rootElement:"#people"}}),y=b.bootstrap
e.bootstrap=y
var m=b.mount
e.mount=m
var v=b.unmount
e.unmount=v})),define("people/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("people/components/people-list",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"Eykxvwth",block:'{"symbols":["p","@people"],"statements":[[10,"div"],[14,0,"planetList"],[12],[2,"\\n"],[6,[37,2],[[30,[36,1],[[30,[36,1],[[32,2]],null]],null]],null,[["default"],[{"statements":[[2,"  "],[8,"link-to",[[24,0,"h-12 flex items-center border-white border-b cursor-pointer no-underline"]],[["@route","@query"],["index",[30,[36,0],null,[["id"],[[32,1,["id"]]]]]]],[["default"],[{"statements":[[2,"\\n    "],[1,[32,1,["name"]]],[2," \\n  "]],"parameters":[]}]]],[2,"\\n"]],"parameters":[1]}]]],[13],[2,"\\n"]],"hasEval":false,"upvars":["hash","-track-array","each"]}',meta:{moduleName:"people/components/people-list.hbs"}}),r=Ember._setComponentTemplate(t,Ember._templateOnlyComponent())
e.default=r})),define("people/components/selected-people",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"0cTY8pDy",block:'{"symbols":["@person"],"statements":[[10,"table"],[12],[2,"\\n  "],[10,"tr"],[12],[2,"\\n    "],[10,"td"],[12],[2,"\\n      Name\\n    "],[13],[2," \\n    "],[10,"td"],[12],[1,[32,1,["name"]]],[13],[2,"\\n  "],[13],[2,"\\n  "],[10,"tr"],[12],[2,"\\n  "],[10,"td"],[12],[2,"Height"],[13],[2,"\\n  "],[10,"td"],[12],[1,[32,1,["height"]]],[13],[2,"\\n  "],[13],[2,"\\n  "],[10,"tr"],[12],[2,"\\n  "],[10,"td"],[12],[2,"Mass"],[13],[2,"\\n  "],[10,"td"],[12],[1,[32,1,["mass"]]],[13],[2,"\\n  "],[13],[2,"\\n  "],[10,"tr"],[12],[2,"\\n  "],[10,"td"],[12],[2,"Hair color"],[13],[2,"\\n  "],[10,"td"],[12],[1,[32,1,["hair_color"]]],[13],[2,"\\n  "],[13],[2,"\\n  "],[10,"tr"],[12],[2,"\\n  "],[10,"td"],[12],[2,"Gender"],[13],[2,"\\n  "],[10,"td"],[12],[1,[32,1,["gender"]]],[13],[2,"\\n  "],[13],[2,"\\n  "],[10,"tr"],[12],[2,"\\n  "],[10,"td"],[12],[2,"Birth year"],[13],[2,"\\n  "],[10,"td"],[12],[1,[32,1,["birth_year"]]],[13],[2,"\\n  "],[13],[2," \\n  "],[10,"tr"],[12],[2,"\\n  "],[10,"td"],[12],[2,"Homeworld"],[13],[2,"\\n  "],[10,"td"],[12],[1,[32,1,["homeworld"]]],[13],[2,"\\n    "],[13],[2,"\\n    "],[10,"tr"],[12],[2,"\\n      "],[10,"td"],[12],[2,"Films\\n      "],[13],[2,"\\n    "],[13],[2,"\\n"],[13],[2,"\\n"]],"hasEval":false,"upvars":[]}',meta:{moduleName:"people/components/selected-people.hbs"}}),r=Ember._setComponentTemplate(t,Ember._templateOnlyComponent())
e.default=r})),define("people/data-adapter",["exports","@ember-data/debug"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("people/helpers/app-version",["exports","people/config/environment","ember-cli-app-version/utils/regexp"],(function(e,t,r){function n(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.default.APP.version,i=n.versionOnly||n.hideSha,a=n.shaOnly||n.hideVersion,l=null
return i&&(n.showExtended&&(l=o.match(r.versionExtendedRegExp)),l||(l=o.match(r.versionRegExp))),a&&(l=o.match(r.shaRegExp)),l?l[0]:o}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=n,e.default=void 0
var o=Ember.Helper.helper(n)
e.default=o})),define("people/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r})),define("people/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r})),define("people/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","people/config/environment"],(function(e,t,r){var n,o
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r.default.APP&&(n=r.default.APP.name,o=r.default.APP.version)
var i={name:"App Version",initialize:(0,t.default)(n,o)}
e.default=i})),define("people/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=r})),define("people/initializers/ember-data-data-adapter",["exports","@ember-data/debug/setup"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("people/initializers/ember-data",["exports","ember-data","ember-data/setup-container"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"ember-data",initialize:r.default}
e.default=n})),define("people/initializers/export-application-global",["exports","people/config/environment"],(function(e,t){function r(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var r
if("undefined"!=typeof window)r=window
else if("undefined"!=typeof global)r=global
else{if("undefined"==typeof self)return
r=self}var n,o=t.default.exportApplicationGlobal
n="string"==typeof o?o:Ember.String.classify(t.default.modulePrefix),r[n]||(r[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete r[n]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=r,e.default=void 0
var n={name:"export-application-global",initialize:r}
e.default=n})),define("people/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"ember-data",initialize:t.default}
e.default=r})),define("people/models/people",["exports","@ember-data/model"],(function(e,t){var r,n,o,i,a,l,u,f,c,p,s,d,b,y,m,v,h,_
function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function P(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=z(e)
if(t){var o=z(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return x(this,r)}}function x(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?E(e):t}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var S=(_=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)})(r,e)
var t=w(r)
function r(){var e
P(this,r)
for(var _=arguments.length,O=new Array(_),j=0;j<_;j++)O[j]=arguments[j]
return g(E(e=t.call.apply(t,[this].concat(O))),"name",n,E(e)),g(E(e),"birth_year",o,E(e)),g(E(e),"eye_color",i,E(e)),g(E(e),"gender",a,E(e)),g(E(e),"hair_color",l,E(e)),g(E(e),"height",u,E(e)),g(E(e),"mass",f,E(e)),g(E(e),"skin_color",c,E(e)),g(E(e),"homeworld",p,E(e)),g(E(e),"films",s,E(e)),g(E(e),"species",d,E(e)),g(E(e),"starships",b,E(e)),g(E(e),"vehicles",y,E(e)),g(E(e),"url",m,E(e)),g(E(e),"created",v,E(e)),g(E(e),"edited",h,E(e)),e}return r}(t.default),n=R((r=_).prototype,"name",[t.attr],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),o=R(r.prototype,"birth_year",[t.attr],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),i=R(r.prototype,"eye_color",[t.attr],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a=R(r.prototype,"gender",[t.attr],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),l=R(r.prototype,"hair_color",[t.attr],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u=R(r.prototype,"height",[t.attr],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=R(r.prototype,"mass",[t.attr],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c=R(r.prototype,"skin_color",[t.attr],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=R(r.prototype,"homeworld",[t.attr],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=R(r.prototype,"films",[t.attr],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=R(r.prototype,"species",[t.attr],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=R(r.prototype,"starships",[t.attr],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=R(r.prototype,"vehicles",[t.attr],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=R(r.prototype,"url",[t.attr],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=R(r.prototype,"created",[t.attr],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=R(r.prototype,"edited",[t.attr],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),r)
e.default=S})),define("people/router",["exports","people/config/environment"],(function(e,t){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=u(e)
if(t){var o=u(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return a(this,r)}}function a(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var c=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)})(a,Ember.Router)
var r=i(a)
function a(){var e
n(this,a)
for(var o=arguments.length,i=new Array(o),u=0;u<o;u++)i[u]=arguments[u]
return f(l(e=r.call.apply(r,[this].concat(i))),"location",t.default.locationType),f(l(e),"rootURL",t.default.rootURL),e}return a}()
e.default=c,c.map((function(){}))})),define("people/routes/application",["exports"],(function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){var r=Object.keys(e)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e)
t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t,r,n,o,i,a){try{var l=e[i](a),u=l.value}catch(f){return void r(f)}l.done?t(u):Promise.resolve(u).then(n,o)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=p(e)
if(t){var o=p(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return c(this,r)}}function c(e,r){return!r||"object"!==t(r)&&"function"!=typeof r?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):r}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var s=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)})(d,Ember.Route)
var t,r,o,c,p,s=f(d)
function d(){return a(this,d),s.apply(this,arguments)}return t=d,(r=[{key:"model",value:(c=regeneratorRuntime.mark((function e(){var t,r,o
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://swapi.dev/api/people/")
case 2:return t=e.sent,e.next=5,t.json()
case 5:r=e.sent,o=r.results.map((function(e,t){return{id:++t,type:"people",attributes:n({},e)}})),this.store.push({data:o})
case 8:case"end":return e.stop()}}),e,this)})),p=function(){var e=this,t=arguments
return new Promise((function(r,n){var o=c.apply(e,t)
function a(e){i(o,r,n,a,l,"next",e)}function l(e){i(o,r,n,a,l,"throw",e)}a(void 0)}))},function(){return p.apply(this,arguments)})}])&&l(t.prototype,r),o&&l(t,o),d}()
e.default=s})),define("people/routes/index",["exports"],(function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=u(e)
if(t){var o=u(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return a(this,r)}}function a(e,r){return!r||"object"!==t(r)&&"function"!=typeof r?l(e):r}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var c=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)})(p,Ember.Route)
var t,a,u,c=i(p)
function p(){var e
r(this,p)
for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o]
return f(l(e=c.call.apply(c,[this].concat(n))),"queryParams",{id:{refreshModel:!0}}),e}return t=p,(a=[{key:"model",value:function(e){var t=this.store.peekRecord("people",e.id||0)
return{people:this.store.peekAll("people"),person:t}}}])&&n(t.prototype,a),u&&n(t,u),p}()
e.default=c})),define("people/serializers/-default",["exports","@ember-data/serializer/json"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("people/serializers/-json-api",["exports","@ember-data/serializer/json-api"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("people/serializers/-rest",["exports","@ember-data/serializer/rest"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("people/services/store",["exports","ember-data/store"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("people/templates/application",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"PQFqYlDy",block:'{"symbols":[],"statements":[[1,[30,[36,1],[[30,[36,0],null,null]],null]],[2,"\\n"]],"hasEval":false,"upvars":["-outlet","component"]}',meta:{moduleName:"people/templates/application.hbs"}})
e.default=t})),define("people/templates/index",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"y5Zjwpvu",block:'{"symbols":["@model"],"statements":[[10,"div"],[12],[2,"\\n  "],[10,"div"],[14,0,"flex"],[12],[2,"\\n    "],[10,"div"],[14,0,"p-6 w-1/3"],[12],[2,"\\n"],[6,[37,1],[[32,0,["nextPage"]]],null,[["default"],[{"statements":[[2,"        "],[8,"button",[[16,"disabled",[32,0,["disabled"]]],[16,"loading",[32,0,["loading"]]],[4,[38,0],["click",[32,0,["fetchPlanets"]]],null]],[[],[]],[["default"],[{"statements":[[2,"\\n          Fetch More Planets\\n        "]],"parameters":[]}]]],[2,"\\n"]],"parameters":[]}]]],[2,"        "],[8,"people-list",[],[["@people"],[[32,1,["people"]]]],null],[2,"\\n    "],[13],[2,"\\n    "],[10,"div"],[14,0,"w-2/3 p-6 border-l-2 border-white"],[12],[2,"\\n      "],[10,"div"],[14,0,"selectedPlanet"],[12],[2,"\\n        "],[8,"selected-people",[],[["@person"],[[32,1,["person"]]]],null],[2,"\\n      "],[13],[2,"\\n    "],[13],[2,"\\n  "],[13],[2,"\\n"],[13],[2,"\\n"]],"hasEval":false,"upvars":["on","if"]}',meta:{moduleName:"people/templates/index.hbs"}})
e.default=t})),define("people/transforms/boolean",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.BooleanTransform}})})),define("people/transforms/date",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.DateTransform}})})),define("people/transforms/number",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.NumberTransform}})})),define("people/transforms/string",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.StringTransform}})})),define("people/config/environment",[],(function(){var e={default:{modulePrefix:"people",environment:"production",rootURL:"/people/",locationType:"hash",EmberENV:{FEATURES:{},EXTEND_PROTOTYPES:{Date:!1},_APPLICATION_TEMPLATE_WRAPPER:!1,_DEFAULT_ASYNC_OBSERVERS:!0,_JQUERY_INTEGRATION:!1,_TEMPLATE_ONLY_GLIMMER_COMPONENTS:!0},APP:{name:"people",version:"0.0.0+14a2b7cf"},exportApplicationGlobal:!1}}
return Object.defineProperty(e,"__esModule",{value:!0}),e}))
