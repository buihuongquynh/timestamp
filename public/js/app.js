/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DailyAttendance.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DailyAttendance.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    var month = new Date().getMonth();
    var year = new Date().getFullYear();
    return {
      masks: {
        weekdays: 'WWW'
      },
      attributes: [{
        key: 1,
        customData: {
          title: 'Lunch with mom.',
          "class": 'bg-red-600 text-white'
        },
        dates: new Date(year, month, 1)
      }, {
        key: 2,
        customData: {
          title: 'Take Noah to basketball practice',
          "class": 'bg-blue-500 text-white'
        },
        dates: new Date(year, month, 2)
      }, {
        key: 3,
        customData: {
          title: "Noah's basketball game.",
          "class": 'bg-blue-500 text-white'
        },
        dates: new Date(year, month, 5)
      }, {
        key: 4,
        customData: {
          title: 'Take car to the shop',
          "class": 'bg-indigo-500 text-white'
        },
        dates: new Date(year, month, 5)
      }, {
        key: 4,
        customData: {
          title: 'Meeting with new client.',
          "class": 'bg-teal-500 text-white'
        },
        dates: new Date(year, month, 7)
      }, {
        key: 5,
        customData: {
          title: "Mia's gymnastics practice.",
          "class": 'bg-pink-500 text-white'
        },
        dates: new Date(year, month, 11)
      }, {
        key: 6,
        customData: {
          title: 'Cookout with friends.',
          "class": 'bg-orange-500 text-white'
        },
        dates: {
          months: 5,
          ordinalWeekdays: {
            2: 1
          }
        }
      }, {
        key: 7,
        customData: {
          title: "Mia's gymnastics recital.",
          "class": 'bg-pink-500 text-white'
        },
        dates: new Date(year, month, 22)
      }, {
        key: 8,
        customData: {
          title: 'Visit great grandma.',
          "class": 'bg-red-600 text-white'
        },
        dates: new Date(year, month, 25)
      }]
    };
  }
});

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var v_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! v-calendar */ "./node_modules/v-calendar/lib/v-calendar.umd.min.js");
/* harmony import */ var v_calendar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(v_calendar__WEBPACK_IMPORTED_MODULE_0__);
 // window.Vue = require('vue');


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

vue__WEBPACK_IMPORTED_MODULE_1__["default"].config.productionTip = false;
vue__WEBPACK_IMPORTED_MODULE_1__["default"].component('daily-attendance', (__webpack_require__(/*! ./components/DailyAttendance.vue */ "./resources/js/components/DailyAttendance.vue")["default"]));
vue__WEBPACK_IMPORTED_MODULE_1__["default"].use((v_calendar__WEBPACK_IMPORTED_MODULE_0___default()));
var app = new vue__WEBPACK_IMPORTED_MODULE_1__["default"]({
  el: '#app'
});
app.$mount('#app');

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/postcss-loader/dist/cjs.js):\nSyntaxError\n\n(1:1) C:\\Users\\M02\\Desktop\\timestamp\\resources\\sass\\app.scss Unknown word\n\n\u001b[1m\u001b[31m>\u001b[39m\u001b[22m\u001b[90m 1 | \u001b[39mimport api from \u001b[32m\"!../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\"\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m   | \u001b[39m\u001b[1m\u001b[31m^\u001b[39m\u001b[22m\n \u001b[90m 2 | \u001b[39m            import content from \u001b[32m\"!!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./app.scss\"\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 3 | \u001b[39m\n\n    at processResult (C:\\Users\\M02\\Desktop\\timestamp\\node_modules\\webpack\\lib\\NormalModule.js:758:19)\n    at C:\\Users\\M02\\Desktop\\timestamp\\node_modules\\webpack\\lib\\NormalModule.js:860:5\n    at C:\\Users\\M02\\Desktop\\timestamp\\node_modules\\loader-runner\\lib\\LoaderRunner.js:400:11\n    at C:\\Users\\M02\\Desktop\\timestamp\\node_modules\\loader-runner\\lib\\LoaderRunner.js:252:18\n    at context.callback (C:\\Users\\M02\\Desktop\\timestamp\\node_modules\\loader-runner\\lib\\LoaderRunner.js:124:13)\n    at Object.loader (C:\\Users\\M02\\Desktop\\timestamp\\node_modules\\postcss-loader\\dist\\index.js:140:7)");

/***/ }),

/***/ "./node_modules/v-calendar/lib/v-calendar.umd.min.js":
/*!***********************************************************!*\
  !*** ./node_modules/v-calendar/lib/v-calendar.umd.min.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

(function(e,t){ true?module.exports=t(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js")):0})("undefined"!==typeof self?self:this,(function(e){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s="fb15")}({"00fd":function(e,t,r){var o=r("9e69"),n=Object.prototype,c=n.hasOwnProperty,i=n.toString,a=o?o.toStringTag:void 0;function s(e){var t=c.call(e,a),r=e[a];try{e[a]=void 0;var o=!0}catch(s){}var n=i.call(e);return o&&(t?e[a]=r:delete e[a]),n}e.exports=s},"01f9":function(e,t,r){"use strict";var o=r("2d00"),n=r("5ca1"),c=r("2aba"),i=r("32e9"),a=r("84f2"),s=r("41a0"),d=r("7f20"),u=r("38fd"),l=r("2b4c")("iterator"),f=!([].keys&&"next"in[].keys()),v="@@iterator",b="keys",h="values",p=function(){return this};e.exports=function(e,t,r,g,m,y,x){s(r,t,g);var w,k,O,j=function(e){if(!f&&e in S)return S[e];switch(e){case b:return function(){return new r(this,e)};case h:return function(){return new r(this,e)}}return function(){return new r(this,e)}},D=t+" Iterator",P=m==h,M=!1,S=e.prototype,E=S[l]||S[v]||m&&S[m],_=E||j(m),Y=m?P?j("entries"):_:void 0,C="Array"==t&&S.entries||E;if(C&&(O=u(C.call(new e)),O!==Object.prototype&&O.next&&(d(O,D,!0),o||"function"==typeof O[l]||i(O,l,p))),P&&E&&E.name!==h&&(M=!0,_=function(){return E.call(this)}),o&&!x||!f&&!M&&S[l]||i(S,l,_),a[t]=_,a[D]=p,m)if(w={values:P?_:j(h),keys:y?_:j(b),entries:Y},x)for(k in w)k in S||c(S,k,w[k]);else n(n.P+n.F*(f||M),t,w);return w}},"02f4":function(e,t,r){var o=r("4588"),n=r("be13");e.exports=function(e){return function(t,r){var c,i,a=String(n(t)),s=o(r),d=a.length;return s<0||s>=d?e?"":void 0:(c=a.charCodeAt(s),c<55296||c>56319||s+1===d||(i=a.charCodeAt(s+1))<56320||i>57343?e?a.charAt(s):c:e?a.slice(s,s+2):i-56320+(c-55296<<10)+65536)}}},"0390":function(e,t,r){"use strict";var o=r("02f4")(!0);e.exports=function(e,t,r){return t+(r?o(e,t).length:1)}},"03dd":function(e,t,r){var o=r("eac5"),n=r("57a5"),c=Object.prototype,i=c.hasOwnProperty;function a(e){if(!o(e))return n(e);var t=[];for(var r in Object(e))i.call(e,r)&&"constructor"!=r&&t.push(r);return t}e.exports=a},"04d4":function(e,t,r){"use strict";var o=r("c539"),n=r.n(o);n.a},"0621":function(e,t,r){var o=r("9e69"),n=r("d370"),c=r("6747"),i=o?o.isConcatSpreadable:void 0;function a(e){return c(e)||n(e)||!!(i&&e&&e[i])}e.exports=a},"0733":function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return i}));var o=r("2fa3"),n=r("9404");const c=function(e,t){if(!e||!e.addEventListener||!Object(n["j"])(t))return null;let r=!1,c=!1;const i=function(){return r=!0},a=function(){return r=!1},s=function(e){if(r)return r=!1,c=!0,void t(e);"click"!==e.type||c||t(e),c=!1};return Object(o["n"])(e,"touchstart",i),Object(o["n"])(e,"touchmove",a),Object(o["n"])(e,"click",s),Object(o["n"])(e,"touchend",s),function(){Object(o["m"])(e,"touchstart",i),Object(o["m"])(e,"touchmove",a),Object(o["m"])(e,"click",s),Object(o["m"])(e,"touchend",s)}},i=function(e,t,{maxSwipeTime:r,minHorizontalSwipeDistance:c,maxVerticalSwipeDistance:i}){if(!e||!e.addEventListener||!Object(n["j"])(t))return null;let a=0,s=0,d=null,u=!1;function l(e){const t=e.changedTouches[0];a=t.screenX,s=t.screenY,d=(new Date).getTime(),u=!0}function f(e){if(!u)return;u=!1;const o=e.changedTouches[0],n=o.screenX-a,l=o.screenY-s,f=(new Date).getTime()-d;if(f<r&&Math.abs(n)>=c&&Math.abs(l)<=i){const e={toLeft:!1,toRight:!1};n<0?e.toLeft=!0:e.toRight=!0,t(e)}}return Object(o["n"])(e,"touchstart",l),Object(o["n"])(e,"touchend",f),function(){Object(o["m"])(e,"touchstart",l),Object(o["m"])(e,"touchend",f)}}},"07c7":function(e,t){function r(){return!1}e.exports=r},"07e3":function(e,t){var r={}.hasOwnProperty;e.exports=function(e,t){return r.call(e,t)}},"087d":function(e,t){function r(e,t){var r=-1,o=t.length,n=e.length;while(++r<o)e[n+r]=t[r];return e}e.exports=r},"08cc":function(e,t,r){var o=r("1a8c");function n(e){return e===e&&!o(e)}e.exports=n},"099a":function(e,t){function r(e,t,r){var o=r-1,n=e.length;while(++o<n)if(e[o]===t)return o;return-1}e.exports=r},"0b07":function(e,t,r){var o=r("34ac"),n=r("3698");function c(e,t){var r=n(e,t);return o(r)?r:void 0}e.exports=c},"0bfb":function(e,t,r){"use strict";var o=r("cb7c");e.exports=function(){var e=o(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"0d24":function(e,t,r){(function(e){var o=r("2b3e"),n=r("07c7"),c=t&&!t.nodeType&&t,i=c&&"object"==typeof e&&e&&!e.nodeType&&e,a=i&&i.exports===c,s=a?o.Buffer:void 0,d=s?s.isBuffer:void 0,u=d||n;e.exports=u}).call(this,r("62e4")(e))},"0d58":function(e,t,r){var o=r("ce10"),n=r("e11e");e.exports=Object.keys||function(e){return o(e,n)}},"0f0f":function(e,t,r){var o=r("8eeb"),n=r("9934");function c(e,t){return e&&o(t,n(t),e)}e.exports=c},"0f5c":function(e,t,r){var o=r("159a");function n(e,t,r){return null==e?e:o(e,t,r)}e.exports=n},"100e":function(e,t,r){var o=r("cd9d"),n=r("2286"),c=r("c1c9");function i(e,t){return c(n(e,t,o),e+"")}e.exports=i},1041:function(e,t,r){var o=r("8eeb"),n=r("a029");function c(e,t){return o(e,n(e),t)}e.exports=c},"11e9":function(e,t,r){var o=r("52a7"),n=r("4630"),c=r("6821"),i=r("6a99"),a=r("69a8"),s=r("c69a"),d=Object.getOwnPropertyDescriptor;t.f=r("9e1e")?d:function(e,t){if(e=c(e),t=i(t,!0),s)try{return d(e,t)}catch(r){}if(a(e,t))return n(!o.f.call(e,t),e[t])}},"126d":function(e,t,r){var o=r("6da8"),n=r("aaec"),c=r("d094");function i(e){return n(e)?c(e):o(e)}e.exports=i},1290:function(e,t){function r(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}e.exports=r},1310:function(e,t){function r(e){return null!=e&&"object"==typeof e}e.exports=r},1315:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var o=r("8bbf"),n=r.n(o),c=r("9404");function i(e){return Object(c["m"])(e)&&(e={min:e}),Object(c["h"])(e)||(e=[e]),e.map((function(e){return Object(c["e"])(e,"raw")?e.raw:Object(c["p"])(e,(function(e,t){return t=Object(c["d"])({min:"min-width",max:"max-width"},t,t),`(${t}: ${e})`})).join(" and ")})).join(", ")}var a=r("85a9");let s=!1,d=!1,u=null;function l(e=a,t){u&&!t||s||(s=!0,d=!0,u=new n.a({data(){return{matches:[],queries:[]}},methods:{refreshQueries(){var t=this;this.queries=Object(c["q"])(e,(function(e){const r=window.matchMedia(i(e));return r.addListener(t.refreshMatches),r})),this.refreshMatches()},refreshMatches(){this.matches=Object(c["u"])(this.queries).filter((function(e){return e[1].matches})).map((function(e){return e[0]}))}}}),s=!1)}n.a.mixin({beforeCreate(){s||l()},mounted(){d&&u&&(u.refreshQueries(),d=!1)},computed:{$screens(){return function(e,t){return u.matches.reduce((function(t,r){return Object(c["e"])(e,r)?e[r]:t}),Object(c["n"])(t)?e.default:t)}}}})},1349:function(e,t,r){var o=r("f064");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=r("499e").default;n("61acf245",o,!0,{sourceMap:!1,shadowMode:!1})},1368:function(e,t,r){var o=r("da03"),n=function(){var e=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function c(e){return!!n&&n in e}e.exports=c},1495:function(e,t,r){var o=r("86cc"),n=r("cb7c"),c=r("0d58");e.exports=r("9e1e")?Object.defineProperties:function(e,t){n(e);var r,i=c(t),a=i.length,s=0;while(a>s)o.f(e,r=i[s++],t[r]);return e}},"159a":function(e,t,r){var o=r("32b3"),n=r("e2e4"),c=r("c098"),i=r("1a8c"),a=r("f4d6");function s(e,t,r,s){if(!i(e))return e;t=n(t,e);var d=-1,u=t.length,l=u-1,f=e;while(null!=f&&++d<u){var v=a(t[d]),b=r;if(d!=l){var h=f[v];b=s?s(h,v,f):void 0,void 0===b&&(b=i(h)?h:c(t[d+1])?[]:{})}o(f,v,b),f=f[v]}return e}e.exports=s},"15f3":function(e,t,r){var o=r("89d9"),n=r("8604");function c(e,t){return o(e,t,(function(t,r){return n(e,r)}))}e.exports=c},1838:function(e,t,r){var o=r("c05f"),n=r("9b02"),c=r("8604"),i=r("f608"),a=r("08cc"),s=r("20ec"),d=r("f4d6"),u=1,l=2;function f(e,t){return i(e)&&a(t)?s(d(e),t):function(r){var i=n(r,e);return void 0===i&&i===t?c(r,e):o(t,i,u|l)}}e.exports=f},"18d8":function(e,t,r){var o=r("234d"),n=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,c=/\\(\\)?/g,i=o((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(n,(function(e,r,o,n){t.push(o?n.replace(c,"$1"):r||e)})),t}));e.exports=i},"1a2d":function(e,t,r){var o=r("42a2"),n=r("1310"),c="[object Map]";function i(e){return n(e)&&o(e)==c}e.exports=i},"1a8c":function(e,t){function r(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}e.exports=r},"1bac":function(e,t,r){var o=r("7d1f"),n=r("a029"),c=r("9934");function i(e){return o(e,c,n)}e.exports=i},"1bc3":function(e,t,r){var o=r("f772");e.exports=function(e,t){if(!o(e))return e;var r,n;if(t&&"function"==typeof(r=e.toString)&&!o(n=r.call(e)))return n;if("function"==typeof(r=e.valueOf)&&!o(n=r.call(e)))return n;if(!t&&"function"==typeof(r=e.toString)&&!o(n=r.call(e)))return n;throw TypeError("Can't convert object to primitive value")}},"1c3c":function(e,t,r){var o=r("9e69"),n=r("2474"),c=r("9638"),i=r("a2be"),a=r("edfa"),s=r("ac41"),d=1,u=2,l="[object Boolean]",f="[object Date]",v="[object Error]",b="[object Map]",h="[object Number]",p="[object RegExp]",g="[object Set]",m="[object String]",y="[object Symbol]",x="[object ArrayBuffer]",w="[object DataView]",k=o?o.prototype:void 0,O=k?k.valueOf:void 0;function j(e,t,r,o,k,j,D){switch(r){case w:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case x:return!(e.byteLength!=t.byteLength||!j(new n(e),new n(t)));case l:case f:case h:return c(+e,+t);case v:return e.name==t.name&&e.message==t.message;case p:case m:return e==t+"";case b:var P=a;case g:var M=o&d;if(P||(P=s),e.size!=t.size&&!M)return!1;var S=D.get(e);if(S)return S==t;o|=u,D.set(e,t);var E=i(P(e),P(t),o,k,j,D);return D["delete"](e),E;case y:if(O)return O.call(e)==O.call(t)}return!1}e.exports=j},"1cec":function(e,t,r){var o=r("0b07"),n=r("2b3e"),c=o(n,"Promise");e.exports=c},"1ec9":function(e,t,r){var o=r("f772"),n=r("e53d").document,c=o(n)&&o(n.createElement);e.exports=function(e){return c?n.createElement(e):{}}},"1efc":function(e,t){function r(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}e.exports=r},"1fc8":function(e,t,r){var o=r("4245");function n(e,t){var r=o(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}e.exports=n},"20ec":function(e,t){function r(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}}e.exports=r},"214f":function(e,t,r){"use strict";r("b0c5");var o=r("2aba"),n=r("32e9"),c=r("79e5"),i=r("be13"),a=r("2b4c"),s=r("520a"),d=a("species"),u=!c((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),l=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();e.exports=function(e,t,r){var f=a(e),v=!c((function(){var t={};return t[f]=function(){return 7},7!=""[e](t)})),b=v?!c((function(){var t=!1,r=/a/;return r.exec=function(){return t=!0,null},"split"===e&&(r.constructor={},r.constructor[d]=function(){return r}),r[f](""),!t})):void 0;if(!v||!b||"replace"===e&&!u||"split"===e&&!l){var h=/./[f],p=r(i,f,""[e],(function(e,t,r,o,n){return t.exec===s?v&&!n?{done:!0,value:h.call(t,r,o)}:{done:!0,value:e.call(r,t,o)}:{done:!1}})),g=p[0],m=p[1];o(String.prototype,e,g),n(RegExp.prototype,f,2==t?function(e,t){return m.call(e,this,t)}:function(e){return m.call(e,this)})}}},2285:function(e,t,r){"use strict";var o=r("6f6a"),n=r.n(o);n.a},2286:function(e,t,r){var o=r("85e3"),n=Math.max;function c(e,t,r){return t=n(void 0===t?e.length-1:t,0),function(){var c=arguments,i=-1,a=n(c.length-t,0),s=Array(a);while(++i<a)s[i]=c[t+i];i=-1;var d=Array(t+1);while(++i<t)d[i]=c[i];return d[t]=r(s),o(e,this,d)}}e.exports=c},"22f3":function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var o=r("cfe5"),n=r("2fa3"),c=r("9404");class i{constructor({key:e,hashcode:t,highlight:r,content:i,dot:a,bar:s,popover:d,dates:u,excludeDates:l,excludeMode:f,customData:v,order:b,pinPage:h},p,g){var m=this;this.key=Object(c["n"])(e)?Object(n["c"])():e,this.hashcode=t,this.customData=v,this.order=b||0,this.dateOpts={order:b,locale:g},this.pinPage=h,r&&(this.highlight=p.normalizeHighlight(r)),i&&(this.content=p.normalizeContent(i)),a&&(this.dot=p.normalizeDot(a)),s&&(this.bar=p.normalizeBar(s)),d&&(this.popover=d),u&&(this.dates=Object(c["h"])(u)?u:[u]),this.hasDates=Object(n["b"])(this.dates),l&&(this.excludeDates=Object(c["h"])(l)?l:[l]),this.hasExcludeDates=Object(n["b"])(this.excludeDates),this.excludeMode=f||"intersects",this.dates=(this.hasDates&&this.dates||this.hasExcludeDates&&[{}]||[]).map((function(e){return e&&(e instanceof o["a"]?e:new o["a"](e,m.dateOpts))})).filter((function(e){return e})),this.excludeDates=(this.hasExcludeDates&&this.excludeDates||[]).map((function(e){return e&&(e instanceof o["a"]?e:new o["a"](e,m.dateOpts))})).filter((function(e){return e})),this.isComplex=Object(c["t"])(this.dates,(function(e){return e.isComplex}))}intersectsDate(e){return!this.excludesDate(e)&&(this.dates.find((function(t){return t.intersectsDate(e)}))||!1)}includesDate(e){return e=e instanceof o["a"]?e:new o["a"](e,this.dateOpts),!this.excludesDate(e)&&(this.dates.find((function(t){return t.includesDate(e)}))||!1)}excludesDate(e){var t=this;return e=e instanceof o["a"]?e:new o["a"](e,this.dateOpts),this.hasExcludeDates&&this.excludeDates.find((function(r){return"intersects"===t.excludeMode&&r.intersectsDate(e)||"includes"===t.excludeMode&&r.includesDate(e)}))}includesDay(e){return!this.excludesDay(e)&&(this.dates.find((function(t){return t.includesDay(e)}))||!1)}excludesDay(e){return this.hasExcludeDates&&this.excludeDates.find((function(t){return t.includesDay(e)}))}}},"230e":function(e,t,r){var o=r("d3f4"),n=r("7726").document,c=o(n)&&o(n.createElement);e.exports=function(e){return c?n.createElement(e):{}}},"234d":function(e,t,r){var o=r("e380"),n=500;function c(e){var t=o(e,(function(e){return r.size===n&&r.clear(),e})),r=t.cache;return t}e.exports=c},2350:function(e,t){function r(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"===typeof btoa){var c=o(n),i=n.sources.map((function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"}));return[r].concat(i).concat([c]).join("\n")}return[r].join("\n")}function o(e){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,"+t;return"/*# "+r+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=r(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o})).join("")},t.i=function(e,r){"string"===typeof e&&(e=[[null,e,""]]);for(var o={},n=0;n<this.length;n++){var c=this[n][0];"number"===typeof c&&(o[c]=!0)}for(n=0;n<e.length;n++){var i=e[n];"number"===typeof i[0]&&o[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),t.push(i))}},t}},"23a5":function(e){e.exports=JSON.parse('{"maxSwipeTime":300,"minHorizontalSwipeDistance":60,"maxVerticalSwipeDistance":80}')},"23c6":function(e,t,r){var o=r("2d95"),n=r("2b4c")("toStringTag"),c="Arguments"==o(function(){return arguments}()),i=function(e,t){try{return e[t]}catch(r){}};e.exports=function(e){var t,r,a;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=i(t=Object(e),n))?r:c?o(t):"Object"==(a=o(t))&&"function"==typeof t.callee?"Arguments":a}},2411:function(e,t,r){var o=r("f909"),n=r("2ec1"),c=n((function(e,t,r,n){o(e,t,r,n)}));e.exports=c},"242e":function(e,t,r){var o=r("72af"),n=r("ec69");function c(e,t){return e&&o(e,t,n)}e.exports=c},2474:function(e,t,r){var o=r("2b3e"),n=o.Uint8Array;e.exports=n},2478:function(e,t,r){var o=r("4245");function n(e){return o(this,e).get(e)}e.exports=n},2524:function(e,t,r){var o=r("6044"),n="__lodash_hash_undefined__";function c(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=o&&void 0===t?n:t,this}e.exports=c},"253c":function(e,t,r){var o=r("3729"),n=r("1310"),c="[object Arguments]";function i(e){return n(e)&&o(e)==c}e.exports=i},2593:function(e,t,r){var o=r("15f3"),n=r("c6cf"),c=n((function(e,t){return null==e?{}:o(e,t)}));e.exports=c},"26e8":function(e,t){function r(e,t){return null!=e&&t in Object(e)}e.exports=r},2768:function(e,t){function r(e){return null==e}e.exports=r},"28a5":function(e,t,r){"use strict";var o=r("aae3"),n=r("cb7c"),c=r("ebd6"),i=r("0390"),a=r("9def"),s=r("5f1b"),d=r("520a"),u=r("79e5"),l=Math.min,f=[].push,v="split",b="length",h="lastIndex",p=4294967295,g=!u((function(){RegExp(p,"y")}));r("214f")("split",2,(function(e,t,r,u){var m;return m="c"=="abbc"[v](/(b)*/)[1]||4!="test"[v](/(?:)/,-1)[b]||2!="ab"[v](/(?:ab)*/)[b]||4!="."[v](/(.?)(.?)/)[b]||"."[v](/()()/)[b]>1||""[v](/.?/)[b]?function(e,t){var n=String(this);if(void 0===e&&0===t)return[];if(!o(e))return r.call(n,e,t);var c,i,a,s=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),l=0,v=void 0===t?p:t>>>0,g=new RegExp(e.source,u+"g");while(c=d.call(g,n)){if(i=g[h],i>l&&(s.push(n.slice(l,c.index)),c[b]>1&&c.index<n[b]&&f.apply(s,c.slice(1)),a=c[0][b],l=i,s[b]>=v))break;g[h]===c.index&&g[h]++}return l===n[b]?!a&&g.test("")||s.push(""):s.push(n.slice(l)),s[b]>v?s.slice(0,v):s}:"0"[v](void 0,0)[b]?function(e,t){return void 0===e&&0===t?[]:r.call(this,e,t)}:r,[function(r,o){var n=e(this),c=void 0==r?void 0:r[t];return void 0!==c?c.call(r,n,o):m.call(String(n),r,o)},function(e,t){var o=u(m,e,this,t,m!==r);if(o.done)return o.value;var d=n(e),f=String(this),v=c(d,RegExp),b=d.unicode,h=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),y=new v(g?d:"^(?:"+d.source+")",h),x=void 0===t?p:t>>>0;if(0===x)return[];if(0===f.length)return null===s(y,f)?[f]:[];var w=0,k=0,O=[];while(k<f.length){y.lastIndex=g?k:0;var j,D=s(y,g?f:f.slice(k));if(null===D||(j=l(a(y.lastIndex+(g?0:k)),f.length))===w)k=i(f,k,b);else{if(O.push(f.slice(w,k)),O.length===x)return O;for(var P=1;P<=D.length-1;P++)if(O.push(D[P]),O.length===x)return O;k=w=j}}return O.push(f.slice(w)),O}]}))},"28c9":function(e,t){function r(){this.__data__=[],this.size=0}e.exports=r},"294c":function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},"29ae":function(e,t,r){"use strict";r.d(t,"a",(function(){return P}));r("6b54");var o=r("bd86"),n=(r("ac6a"),r("386d"),r("a481"),r("4917"),r("3b2b"),r("9404"));const c=/d{1,2}|W{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,i=/\d\d?/,a=/\d{3}/,s=/\d{4}/,d=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF/]+(\s*?[\u0600-\u06FF]+){1,2}/i,u=/\[([^]*?)\]/gm,l=function(){};function f(e){return function(t,r,o){const n=o[e].indexOf(r.charAt(0).toUpperCase()+r.substr(1).toLowerCase());~n&&(t.month=n)}}function v(e,t){e=String(e),t=t||2;while(e.length<t)e="0"+e;return e}const b={D(e){return e.getDate()},DD(e){return v(e.getDate())},Do(e,t){return t.DoFn(e.getDate())},d(e){return e.getDay()},dd(e){return v(e.getDay())},W(e,t){return t.dayNamesNarrow[e.getDay()]},WW(e,t){return t.dayNamesShorter[e.getDay()]},WWW(e,t){return t.dayNamesShort[e.getDay()]},WWWW(e,t){return t.dayNames[e.getDay()]},M(e){return e.getMonth()+1},MM(e){return v(e.getMonth()+1)},MMM(e,t){return t.monthNamesShort[e.getMonth()]},MMMM(e,t){return t.monthNames[e.getMonth()]},YY(e){return String(e.getFullYear()).substr(2)},YYYY(e){return v(e.getFullYear(),4)},h(e){return e.getHours()%12||12},hh(e){return v(e.getHours()%12||12)},H(e){return e.getHours()},HH(e){return v(e.getHours())},m(e){return e.getMinutes()},mm(e){return v(e.getMinutes())},s(e){return e.getSeconds()},ss(e){return v(e.getSeconds())},S(e){return Math.round(e.getMilliseconds()/100)},SS(e){return v(Math.round(e.getMilliseconds()/10),2)},SSS(e){return v(e.getMilliseconds(),3)},a(e,t){return e.getHours()<12?t.amPm[0]:t.amPm[1]},A(e,t){return e.getHours()<12?t.amPm[0].toUpperCase():t.amPm[1].toUpperCase()},ZZ(e){const t=e.getTimezoneOffset();return(t>0?"-":"+")+v(100*Math.floor(Math.abs(t)/60)+Math.abs(t)%60,4)}},h={D:[i,function(e,t){e.day=t}],Do:[new RegExp(i.source+d.source),function(e,t){e.day=parseInt(t,10)}],d:[i,l],W:[d,l],M:[i,function(e,t){e.month=t-1}],MMM:[d,f("monthNamesShort")],MMMM:[d,f("monthNames")],YY:[i,function(e,t){const r=new Date,o=+r.getFullYear().toString().substr(0,2);e.year=`${t>68?o-1:o}${t}`}],YYYY:[s,function(e,t){e.year=t}],S:[/\d/,function(e,t){e.millisecond=100*t}],SS:[/\d{2}/,function(e,t){e.millisecond=10*t}],SSS:[a,function(e,t){e.millisecond=t}],h:[i,function(e,t){e.hour=t}],m:[i,function(e,t){e.minute=t}],s:[i,function(e,t){e.second=t}],a:[d,function(e,t,r){const o=t.toLowerCase();o===r.amPm[0]?e.isPm=!1:o===r.amPm[1]&&(e.isPm=!0)}],ZZ:[/([\+\-]\d\d:?\d\d|Z)/,function(e,t){"Z"===t&&(t="+00:00");const r=(""+t).match(/([+-]|\d\d)/gi);if(r){const t=60*r[1]+parseInt(r[2],10);e.timezoneOffset="+"===r[0]?t:-t}}]};h.DD=h.D,h.dd=h.d,h.WWWW=h.WWW=h.WW=h.W,h.MM=h.M,h.mm=h.m,h.hh=h.H=h.HH=h.h,h.ss=h.s,h.A=h.a;const p=function(e,t,r){if(n["k"]&&(e=new Date(e)),!Object(n["i"])(e))throw new Error("Invalid Date in fecha.format");t=r.masks[t]||t;const o=[];return t=t.replace(u,(function(e,t){return o.push(t),"??"})),t=t.replace(c,(function(t){return t in b?b[t](e,r):t.slice(1,t.length-1)})),t.replace(/\?\?/g,(function(){return o.shift()}))},g=function(e,t,r){if("string"!==typeof t)throw new Error("Invalid mask in fecha.parse");if(t=r.masks[t]||t,e.length>1e3)return!1;let o=!0;const n={};if(t.replace(c,(function(t){if(h[t]){const c=h[t],i=e.search(c[0]);~i?e.replace(c[0],(function(t){return c[1](n,t,r),e=e.substr(i+t.length),t})):o=!1}return h[t]?"":t.slice(1,t.length-1)})),!o)return!1;const i=new Date;let a;return!0===n.isPm&&null!=n.hour&&12!==+n.hour?n.hour=+n.hour+12:!1===n.isPm&&12===+n.hour&&(n.hour=0),null!=n.timezoneOffset?(n.minute=+(n.minute||0)-+n.timezoneOffset,a=new Date(Date.UTC(n.year||i.getFullYear(),n.month||0,n.day||1,n.hour||0,n.minute||0,n.second||0,n.millisecond||0))):a=new Date(n.year||i.getFullYear(),n.month||0,n.day||1,n.hour||0,n.minute||0,n.second||0,n.millisecond||0),a},m=function(e,t,r){const o=Object(n["h"])(t)&&t||[Object(n["m"])(t)&&t||"YYYY-MM-DD"];return o.map((function(t){return g(e,t,r)})).find((function(e){return e}))||new Date(e)};var y=r("f15d"),x=r("2fa3");function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const O=7,j=[31,28,31,30,31,30,31,31,30,31,30,31];function D(e,t){const r=(new Intl.DateTimeFormat).resolvedOptions().locale;let o;Object(n["m"])(e)?o=e:Object(n["e"])(e,"id")&&(o=e.id),o=(o||r).toLowerCase();const c=Object.keys(t),i=function(e){return c.find((function(t){return t.toLowerCase()===e}))};o=i(o)||i(o.substring(0,2))||r;const a=k(k(k({},t["en-IE"]),t[o]),{},{id:o});return e=Object(n["l"])(e)?Object(n["c"])(e,a):a,e}class P{constructor(e,t=y["a"]){const{id:r,firstDayOfWeek:o,masks:c}=D(e,t);this.id=r,this.firstDayOfWeek=Object(n["a"])(o,1,O),this.masks=c,this.dayNames=this.getDayNames("long"),this.dayNamesShort=this.getDayNames("short"),this.dayNamesShorter=this.dayNamesShort.map((function(e){return e.substring(0,2)})),this.dayNamesNarrow=this.getDayNames("narrow"),this.monthNames=this.getMonthNames("long"),this.monthNamesShort=this.getMonthNames("short"),this.monthData={},this.getMonthComps=this.getMonthComps.bind(this),this.parse=this.parse.bind(this),this.format=this.format.bind(this),this.toDate=this.toDate.bind(this),this.toPage=this.toPage.bind(this)}parse(e,t){return m(e,t||this.masks.L,this)}format(e,t){return p(e,t||this.masks.L,this)}toDate(e,t){if(Object(n["i"])(e))return new Date(e.getTime());if(Object(n["k"])(e))return new Date(e);if(Object(n["m"])(e))return this.parse(e,t);if(Object(n["l"])(e)){const t=new Date;return new Date(e.year||t.getFullYear(),e.month||t.getMonth(),e.day||t.getDate())}return e}toPage(e,t){return Object(n["k"])(e)?Object(x["a"])(t,e):Object(n["m"])(e)?Object(x["p"])(this.toDate(e)):Object(n["i"])(e)?Object(x["p"])(e):Object(n["l"])(e)?e:null}getMonthDates(e=2e3){const t=[];for(let r=0;r<12;r++)t.push(new Date(e,r,15));return t}getMonthNames(e){const t=new Intl.DateTimeFormat(this.id,{month:e,timezome:"UTC"});return this.getMonthDates().map((function(e){return t.format(e)}))}getWeekdayDates({year:e=2e3,utc:t=!1,firstDayOfWeek:r=this.firstDayOfWeek}={}){const o=[];for(let n=1,c=0;c<O;n++){const i=t?new Date(Date.UTC(e,0,n)):new Date(e,0,n),a=t?i.getUTCDay():i.getDay();(a===r-1||c>0)&&(o.push(i),c++)}return o}getDayNames(e){const t=new Intl.DateTimeFormat(this.id,{weekday:e,timeZone:"UTC"});return this.getWeekdayDates({firstDayOfWeek:1,utc:!0}).map((function(e){return t.format(e)}))}getMonthComps(e,t){const r=`${e}-${t}`;let o=this.monthData[r];if(!o){const n=t%4===0&&t%100!==0||t%400===0,c=new Date(t,e-1,1).getDay()+1,i=2===e&&n?29:j[e-1],a=Math.ceil((i+Math.abs(c-this.firstDayOfWeek))/O);o={firstDayOfWeek:this.firstDayOfWeek,inLeapYear:n,firstWeekday:c,days:i,weeks:a,month:e,year:t},this.monthData[r]=o}return o}getThisMonthComps(){const e=new Date;return this.getMonthComps(e.getMonth()+1,e.getFullYear())}getPrevMonthComps(e,t){return 1===e?this.getMonthComps(12,t-1):this.getMonthComps(e-1,t)}getNextMonthComps(e,t){return 12===e?this.getMonthComps(1,t+1):this.getMonthComps(e+1,t)}getDayFromDate(e){if(!e)return null;const t=e.getMonth()+1,r=e.getUTCFullYear(),o=this.getMonthComps(t,r),n=e.getDate(),c=o.days-n+1,i=e.getDay()+1,a=Math.floor((n-1)/7+1),s=Math.floor((o.days-n)/7+1),d=Math.ceil((n+Math.abs(o.firstWeekday-o.firstDayOfWeek))/7),u=o.weeks-d+1;return{day:n,dayFromEnd:c,weekday:i,weekdayOrdinal:a,weekdayOrdinalFromEnd:s,week:d,weekFromEnd:u,month:t,year:r,date:e,dateTime:e.getTime()}}getCalendarDays({monthComps:e,prevMonthComps:t,nextMonthComps:r}){const o=[],{firstDayOfWeek:n,firstWeekday:c}=e,i=c+(c<n?O:0)-n;let a=!0,s=!1,d=!1;const u=new Intl.DateTimeFormat(this.id,{weekday:"long",year:"numeric",month:"long",day:"numeric"});let l=t.days-i+1,f=t.days-l+1,v=Math.floor((l-1)/O+1),b=1,h=t.weeks,p=1,g=t.month,m=t.year;const y=new Date,x=y.getDate(),w=y.getMonth()+1,k=y.getFullYear();for(let j=1;j<=6;j++){for(let t=1,i=n;t<=O;t++,i+=i===O?1-O:1){a&&i===c&&(l=1,f=e.days,v=Math.floor((l-1)/O+1),b=Math.floor((e.days-l)/O+1),h=1,p=e.weeks,g=e.month,m=e.year,a=!1,s=!0);const n=new Date(m,g-1,l),y=this.format(n,"YYYY-MM-DD"),D=t,P=O-t,M=l===x&&g===w&&m===k,S=s&&1===l,E=s&&l===e.days,_=1===j,Y=6===j,C=1===t,I=t===O;o.push({id:y,label:l.toString(),ariaLabel:u.format(n),day:l,dayFromEnd:f,weekday:i,weekdayPosition:D,weekdayPositionFromEnd:P,weekdayOrdinal:v,weekdayOrdinalFromEnd:b,week:h,weekFromEnd:p,month:g,year:m,date:n,dateTime:n.getTime(),isToday:M,isFirstDay:S,isLastDay:E,inMonth:s,inPrevMonth:a,inNextMonth:d,onTop:_,onBottom:Y,onLeft:C,onRight:I,classes:["id-"+y,"day-"+l,"day-from-end-"+f,"weekday-"+i,"weekday-position-"+D,"weekday-ordinal-"+v,"weekday-ordinal-from-end-"+b,"week-"+h,"week-from-end-"+p,{"is-today":M,"is-first-day":S,"is-last-day":E,"in-month":s,"in-prev-month":a,"in-next-month":d,"on-top":_,"on-bottom":Y,"on-left":C,"on-right":I}]}),s&&E?(s=!1,d=!0,l=1,f=r.days,v=1,b=Math.floor((r.days-l)/O+1),h=1,p=r.weeks,g=r.month,m=r.year):(l++,f--,v=Math.floor((l-1)/O+1),b=Math.floor((e.days-l)/O+1))}h++,p--}return o}}},"29f3":function(e,t){var r=Object.prototype,o=r.toString;function n(e){return o.call(e)}e.exports=n},"2aba":function(e,t,r){var o=r("7726"),n=r("32e9"),c=r("69a8"),i=r("ca5a")("src"),a=r("fa5b"),s="toString",d=(""+a).split(s);r("8378").inspectSource=function(e){return a.call(e)},(e.exports=function(e,t,r,a){var s="function"==typeof r;s&&(c(r,"name")||n(r,"name",t)),e[t]!==r&&(s&&(c(r,i)||n(r,i,e[t]?""+e[t]:d.join(String(t)))),e===o?e[t]=r:a?e[t]?e[t]=r:n(e,t,r):(delete e[t],n(e,t,r)))})(Function.prototype,s,(function(){return"function"==typeof this&&this[i]||a.call(this)}))},"2aeb":function(e,t,r){var o=r("cb7c"),n=r("1495"),c=r("e11e"),i=r("613b")("IE_PROTO"),a=function(){},s="prototype",d=function(){var e,t=r("230e")("iframe"),o=c.length,n="<",i=">";t.style.display="none",r("fab2").appendChild(t),t.src="javascript:",e=t.contentWindow.document,e.open(),e.write(n+"script"+i+"document.F=Object"+n+"/script"+i),e.close(),d=e.F;while(o--)delete d[s][c[o]];return d()};e.exports=Object.create||function(e,t){var r;return null!==e?(a[s]=o(e),r=new a,a[s]=null,r[i]=e):r=d(),void 0===t?r:n(r,t)}},"2af9":function(e,t,r){"use strict";r.r(t),r.d(t,"Calendar",(function(){return ot})),r.d(t,"CalendarNav",(function(){return Pe})),r.d(t,"DatePicker",(function(){return ht})),r.d(t,"Popover",(function(){return P})),r.d(t,"PopoverRef",(function(){return ue})),r.d(t,"Grid",(function(){return ie}));r("6b54"),r("ac6a");var o=r("bd86"),n=r("f7f1"),c=r("fe1f"),i=r("fd3a"),a=r("8c86");function s(e,t){Object(a["a"])(2,arguments);var r=Object(i["a"])(e),o=Object(c["a"])(t);if(isNaN(o))return new Date(NaN);if(!o)return r;var n=r.getDate(),s=new Date(r.getTime());s.setMonth(r.getMonth()+o+1,0);var d=s.getDate();return n>=d?s:(r.setFullYear(s.getFullYear(),s.getMonth(),n),r)}function d(e,t){Object(a["a"])(2,arguments);var r=Object(c["a"])(t);return s(e,12*r)}r("28a5");var u=r("f0bd"),l=r("9404");function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const b={},h={data(){return{popovers$:b}},computed:{$popovers(){return this.popovers$}},methods:{$popoverExists(e){return this.$popovers&&this.$popovers[e]},$popoverIsActive(e,t){const r=this.$popovers&&this.$popovers[e]&&this.$popovers[e].ref;return!(!r||t&&t!==r)},$popoverHasPriority(e){const t=this.$popovers[e.id];return!t||!t.priority||e.priority>t.priority},$showPopover(e){var t=this;if(!this.$popoverHasPriority(e))return;const{id:r,ref:o}=e,n=this.$popovers[r];Object(l["b"])(e,n),e.next=function(){n&&o===n.ref||t.$set(t.$popovers,r,v(v({},e),{},{priority:0}))},this.handleStateTimer(e,"show")},$hidePopover(e){var t=this;if(!this.$popoverHasPriority(e))return;const{id:r,ref:o}=e;Object(l["b"])(e,this.$popovers[r]),e.next=function(){o&&o!==t.$popovers[r].ref||t.$set(t.$popovers,r,{})},this.handleStateTimer(e,"hide")},$updatePopover(e){const{id:t,ref:r}=e;Object(l["b"])(e,this.$popovers[t]),r&&r!==this.$popovers[t].ref||this.$set(this.$popovers,t,e)},handleStateTimer(e){e.timer&&(clearTimeout(e.timer),e.timer=void 0),e.delay?this.$set(this.$popovers,e.id,v(v({},e),{},{timer:setTimeout(e.next,e.delay)})):e.next()}}};var p=r("2fa3"),g=r("0733");function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x,w,k={name:"Popover",render(e){return e("div",{class:["vc-popover-content-wrapper",{"is-interactive":this.isInteractive}],ref:"popover"},[e("transition",{props:{name:this.transition,appear:!0},on:{beforeEnter:this.beforeEnter,afterEnter:this.afterEnter,beforeLeave:this.beforeLeave,afterLeave:this.afterLeave}},[this.isVisible&&e("div",{attrs:{tabindex:-1},class:["vc-popover-content","direction-"+this.direction,this.contentClass]},[this.content,e("span",{class:["vc-popover-caret","direction-"+this.direction,"align-"+this.alignment]})])])])},mixins:[h],props:{id:{type:String,required:!0},transition:{type:String,default:"slide-fade"},contentClass:String},data(){return{ref:null,args:null,visibility:"",placement:"bottom",positionFixed:!1,modifiers:{},isInteractive:!1,delay:10,popperEl:null}},computed:{content(){var e=this;return Object(l["j"])(this.$scopedSlots.default)&&this.$scopedSlots.default({direction:this.direction,alignment:this.alignment,args:this.args,updateLayout:this.scheduleUpdate,hide:function(t){return e.hide(t)}})||this.$slots.default},popperOptions(){return{placement:this.placement,positionFixed:this.positionFixed,modifiers:y({hide:{enabled:!1},preventOverflow:{enabled:!1}},this.modifiers),onCreate:this.onPopperUpdate,onUpdate:this.onPopperUpdate}},isVisible(){return!(!this.ref||!this.$scopedSlots.default&&!this.$slots.default||"hidden"===this.visibility)},direction(){return this.placement&&this.placement.split("-")[0]||"bottom"},alignment(){const e="left"===this.direction||"right"===this.direction;let t=this.placement.split("-");return t=t.length>1?t[1]:"",["start","top","left"].includes(t)?e?"top":"left":["end","bottom","right"].includes(t)?e?"bottom":"right":e?"middle":"center"},state(){return this.$popovers[this.id]}},watch:{state:{immediate:!0,handler(e){e&&(this.ref=e.ref,this.args=e.args,this.visibility=e.visibility,this.placement=e.placement,this.positionFixed=e.positionFixed,this.modifiers=e.modifiers,this.isInteractive=e.isInteractive,this.setupPopper())}}},mounted(){this.popoverEl=this.$refs.popover,this.addEvents()},beforeDestroy(){this.removeEvents()},methods:{addEvents(){Object(p["n"])(this.popoverEl,"click",this.onClick),Object(p["n"])(this.popoverEl,"mouseover",this.onMouseOver),Object(p["n"])(this.popoverEl,"mouseleave",this.onMouseLeave),Object(p["n"])(this.popoverEl,"focusin",this.onFocusIn),Object(p["n"])(this.popoverEl,"focusout",this.onFocusOut),Object(p["n"])(document,"keydown",this.onDocumentKeydown),this.removeDocHandler=Object(g["b"])(document,this.onDocumentClick)},removeEvents(){Object(p["m"])(this.popoverEl,"click",this.onClick),Object(p["m"])(this.popoverEl,"mouseover",this.onMouseOver),Object(p["m"])(this.popoverEl,"mouseleave",this.onMouseLeave),Object(p["m"])(this.popoverEl,"focusin",this.onFocusIn),Object(p["m"])(this.popoverEl,"focusout",this.onFocusOut),Object(p["m"])(document,"keydown",this.onDocumentKeydown),this.removeDocHandler&&this.removeDocHandler()},onClick(e){e.stopPropagation()},onMouseOver(){this.isInteractive&&"hover"===this.visibility&&this.show()},onMouseLeave(){this.isInteractive&&"hover"===this.visibility&&this.hide()},onFocusIn(){this.isInteractive&&"focus"===this.visibility&&this.show()},onFocusOut(e){this.isInteractive&&"focus"===this.visibility&&e.relatedTarget&&!Object(p["e"])(this.popoverEl,e.relatedTarget)&&this.hide()},onDocumentClick(e){this.$refs.popover&&this.ref&&(Object(p["e"])(this.popoverEl,e.target)||Object(p["e"])(this.ref,e.target)||this.hide())},onDocumentKeydown(e){"Esc"!==e.key&&"Escape"!==e.key||this.hide()},show(){this.$showPopover({id:this.id,ref:this.ref,delay:0})},hide(e){this.$hidePopover(y(y({},e),{},{id:this.id,ref:this.ref}))},onUpdate({args:e}){this.args=e,this.setupPopper()},setupPopper(){var e=this;this.$nextTick((function(){e.ref&&e.$refs.popover&&(e.popper&&e.popper.reference!==e.ref&&(e.popper.destroy(),e.popper=null),e.popper?e.popper.scheduleUpdate():e.popper=new u["a"](e.ref,e.popoverEl,e.popperOptions))}))},onPopperUpdate(e){this.placement=e.placement},scheduleUpdate(){this.popper&&this.popper.scheduleUpdate()},beforeEnter(e){this.$emit("beforeShow",e)},afterEnter(e){this.$emit("afterShow",e)},beforeLeave(e){this.$emit("beforeHide",e)},afterLeave(e){this.destroyPopper(),this.$emit("afterHide",e)},destroyPopper(){this.popper&&(this.popper.destroy(),this.popper=null)}}},O=k;r("86aa");function j(e,t,r,o,n,c,i,a){var s,d="function"===typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=r,d._compiled=!0),o&&(d.functional=!0),c&&(d._scopeId="data-v-"+c),i?(s=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},d._ssrRegister=s):n&&(s=a?function(){n.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:n),s)if(d.functional){d._injectStyles=s;var u=d.render;d.render=function(e,t){return s.call(t),u(e,t)}}else{var l=d.beforeCreate;d.beforeCreate=l?[].concat(l,s):[s]}return{exports:e,options:d}}var D=j(O,x,w,!1,null,"7605e1b2",null),P=D.exports,M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"vc-day-popover-row"},[e.indicator?r("div",{staticClass:"vc-day-popover-row-indicator"},[r("span",{class:e.indicator.class,style:e.indicator.style})]):e._e(),r("div",{staticClass:"vc-day-popover-row-content"},[e._t("default",[e._v(e._s(e.attribute.popover?e.attribute.popover.label:"No content provided"))])],2)])},S=[],E=r("51ec");const _={inject:["sharedState"],mixins:[E["a"],h],computed:{masks(){return this.sharedState.masks},theme(){return this.sharedState.theme},locale(){return this.sharedState.locale},dayPopoverId(){return this.sharedState.dayPopoverId}},methods:{format(e,t){return this.locale.format(e,t)}}};r("a481");var Y=r("5ca5");function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const $=["base","start","end","startEnd"],A=["class","color","fillMode"];function T(e,t,r){e&&t&&r&&(e[t]=`${e[t]?e[t]+" ":""}${r}`)}class L{constructor(e){var t=this;this._config=Object(l["b"])(e,Y["a"]),Object(l["u"])(this._config).forEach((function([e]){Object.defineProperty(t,e,{enumerable:!0,get(){return this.getConfig(e,{})}})})),this.buildNormalizedAttrs()}buildNormalizedAttrs(){var e=this;this.normalizedAttrs={highlight:{opts:["fillMode","class","contentClass"]},dot:{opts:["class"]},bar:{opts:["class"]},content:{opts:["class"]}},Object(l["u"])(this.normalizedAttrs).forEach((function([t,r]){const o={base:{},start:{},end:{}};r.opts.forEach((function(r){const n=t,c=Object(l["w"])(r),i=e[`${n}Base${c}`],a=e[`${n}StartEnd${c}`]||i,s=e[`${n}Start${c}`]||a,d=e[`${n}End${c}`]||s;Object(l["n"])(i)||(o.base[r]=i),Object(l["n"])(s)||(o.start[r]=s),Object(l["n"])(d)||(o.end[r]=d)})),r.attr=o}))}getConfig(e,{color:t=this._config.color,isDark:r=this._config.isDark}){if(!Object(l["e"])(this._config,e))return;let o=Object(l["d"])(this._config,e);return Object(l["l"])(o)&&Object(l["f"])(o,["light","dark"])&&(o=r?o.dark:o.light),Object(l["m"])(o)?o.replace(/{color}/g,t):o}mergeTargets(e,t){const r={};return Object(l["c"])(r,e,t),e.class&&t.class&&!e.class.includes(t.class)&&(r.class=`${e.class} ${t.class}`),r}normalizeAttr({config:e,type:t}){var r=this;let o=this.color,n={};const c=this.normalizedAttrs[t].attr;if(!0===e||Object(l["m"])(e))o=Object(l["m"])(e)?e:o,n=I({},c);else{if(!Object(l["l"])(e))return null;n=Object(l["f"])(e,$)?I({},e):{base:I({},e),start:I({},e),end:I({},e)}}return Object(l["b"])(n,{start:n.startEnd,end:n.startEnd},c),Object(l["u"])(n).forEach((function([e,t]){let i=o;!0===t||Object(l["m"])(t)?(i=Object(l["m"])(t)?t:i,n[e]={color:i}):Object(l["l"])(t)&&(Object(l["f"])(t,A)?n[e]=I({},t):n[e]={}),n[e]=r.mergeTargets(n[e],c[e]),Object(l["e"])(n,e+".color")||Object(l["s"])(n,e+".color",i)})),n}getHighlightBgClass(e,t=this._config){switch(e){case"none":return this.getConfig("bgLow",t);case"light":return this.getConfig("bgAccentLow",t);case"solid":return this.getConfig("bgAccentHigh",t);default:return""}}getHighlightContentClass(e,t=this._config){switch(e){case"none":return this.getConfig("contentAccent",t);case"light":return this.getConfig("contentAccent",t);case"solid":return this.getConfig("contentAccentContrast",t);default:return""}}normalizeHighlight(e){var t=this;const r=this.normalizeAttr({config:e,type:"highlight"});return Object(l["u"])(r).forEach((function([e,r]){const{fillMode:o}=Object(l["b"])(r,{isDark:t.isDark,color:t.color});T(r,"class",t.getHighlightBgClass(o,r)),T(r,"contentClass",t.getHighlightContentClass(o,r))})),r}normalizeDot(e){var t=this;const r=this.normalizeAttr({config:e,type:"dot"});return Object(l["u"])(r).forEach((function([e,r]){Object(l["b"])(r,{isDark:t.isDark,color:t.color}),T(r,"class",t.getConfig("bgAccentHigh",r))})),r}normalizeBar(e){var t=this;const r=this.normalizeAttr({config:e,type:"bar"});return Object(l["u"])(r).forEach((function([e,r]){Object(l["b"])(r,{isDark:t.isDark,color:t.color}),T(r,"class",t.getConfig("bgAccentHigh",r))})),r}normalizeContent(e){var t=this;const r=this.normalizeAttr({config:e,type:"content"});return Object(l["u"])(r).forEach((function([e,r]){Object(l["b"])(r,{isDark:t.isDark,color:t.color}),T(r,"class",t.getConfig("contentAccent",r))})),r}}var F=r("29ae"),N=r("1315"),z=r("22f3");const R={mixins:[E["a"],h],props:{color:String,isDark:Boolean,theme:Object,firstDayOfWeek:Number,masks:Object,locale:[String,Object],minDate:null,maxDate:null,disabledDates:null,availableDates:null},computed:{$theme(){if(this.theme instanceof L)return this.theme;const e=Object(l["c"])(this.theme,this.$defaults.theme);return e.color=this.passedProp("color",e.color),e.isDark=this.passedProp("isDark",e.isDark),new L(e)},$locale(){if(this.locale instanceof F["a"])return this.locale;const e=Object(l["l"])(this.locale)?this.locale:{id:this.locale,firstDayOfWeek:this.firstDayOfWeek,masks:this.masks};return new F["a"](e,this.$locales)},format(){var e=this;return function(t,r){return e.$locale?e.$locale.format(t,r):""}},disabledAttribute(){let e=[];this.disabledDates&&(e=Object(l["h"])(this.disabledDates)?this.disabledDates:[this.disabledDates]);const t=this.$locale.toDate(this.minDate),r=this.$locale.toDate(this.maxDate);return t&&e.push({start:null,end:Object(n["a"])(t,-1)}),r&&e.push({start:Object(n["a"])(r,1),end:null}),new z["a"]({key:"disabled",dates:e,excludeDates:this.availableDates,excludeMode:"includes",order:100},this.$theme,this.$locale)}},created(){Object(N["a"])(this.$defaults.screens)}},V={methods:{propOrDefault(e,t,r){return this.passedProp(e,Object(l["d"])(this.$defaults,t),r)},passedProp(e,t,r){if(Object(l["e"])(this.$options.propsData,e)){const o=this[e];return Object(l["l"])(o)&&"merge"===r?Object(l["c"])(o,t):o}return t}}},H={methods:{safeScopedSlot(e,t,r=null){return Object(l["j"])(this.$scopedSlots[e])?this.$scopedSlots[e](t):r}}},W=_,B=R,U=V,G=H;var q={name:"PopoverRow",mixins:[W],props:{attribute:Object},computed:{indicator(){const{highlight:e,dot:t,bar:r,content:o,popover:n}=this.attribute;if(n&&n.hideIndicator)return null;if(e){const{color:t,isDark:r}=e.start;return{class:this.theme.getConfig("bgAccentHigh",{color:t,isDark:!r}),style:{width:"10px",height:"5px",borderRadius:"3px"}}}if(t){const{color:e,isDark:r}=t.start;return{class:this.theme.getConfig("bgAccentHigh",{color:e,isDark:!r}),style:{width:"5px",height:"5px",borderRadius:"50%"}}}if(r){const{color:e,isDark:t}=r.start;return{class:this.theme.getConfig("bgAccentHigh",{color:e,isDark:!t}),style:{width:"10px",height:"3px"}}}if(o){const{color:e,isDark:t}=o.start;return{class:this.theme.getConfig("contentContrast",{color:e,isDark:!t})}}return null}}},K=q,Z=(r("7365"),j(K,M,S,!1,null,"28ced894",null)),X=Z.exports;const J={vLeading:"vertical-leading",vTrailing:"vertical-trailing",hLeading:"horizontal-leading",hTrailing:"horizontal-trailing"};var Q,ee,te,re,oe={name:"Grid",render(e){var t=this;const r=function({nodes:e,position:r,row:o,column:n}){return e.length>=r?e[r-1]:t.$scopedSlots.default?t.$scopedSlots.default({position:r,row:o,column:n}):null},o=function(){const o=[],n=t.$slots.default&&t.$slots.default.filter((function(e){return void 0!==e.tag}))||[];for(let c=1,i=1;c<=t.rows;c++)for(let a=1;a<=t.columns;a++){const s=c-t.rows-1,d=a-t.columns-1;o.push(e("div",{class:["vc-grid-cell","vc-grid-cell-row-"+c,"vc-grid-cell-row-"+s,"vc-grid-cell-col-"+a,"vc-grid-cell-col-"+d],style:{"grid-row":c,"grid-column":a},on:{keydown:function(e){return t.handleCellKeydown({row:c,column:a,event:e})}}},[r({nodes:n,position:i++,row:c,column:a})]))}return o};return e("div",{class:"vc-grid-container",style:this.containerStyle},[...o()])},props:{count:Number,rows:{type:Number,default:1},columns:{type:Number,default:1},gap:{type:String,default:"0px"},autofit:Boolean,columnWidth:{type:String,default:"1fr"},disableFocus:{type:Boolean,default:!1}},computed:{containerStyle(){return{gridTemplateColumns:this.gridTemplateColumns,gridGap:this.gap}},gridTemplateColumns(){return`repeat(${this.autofit?"auto-fit":this.columns}, ${this.columnWidth})`}},methods:{handleCellKeydown({row:e,column:t,event:r}){if(this.disableFocus)return;const o={row:e,column:t,alt:!1,handled:!1};switch(r.key){case"ArrowUp":o.row--;break;case"ArrowDown":o.row++;break;case"ArrowLeft":o.column--;break;case"ArrowRight":o.column++;break;case"Home":o.column=1;break;case"End":o.column=this.columns;break;case"PageUp":o.alt=r.altKey,o.direction=J.vLeading;break;case"PageDown":o.alt=r.altKey,o.direction=J.vTrailing;break;default:return}if(o.row<1?(o.direction=J.vLeading,o.row=this.rows):o.row>this.rows&&(o.direction=J.vTrailing,o.row=1),o.column<1?(o.direction=J.hLeading,o.column=this.columns):o.column>this.columns&&(o.direction=J.hTrailing,o.column=1),o.direction&&this.$emit("rollover",o),!o.handled){const e=`.vc-grid-cell-row-${o.row}.vc-grid-cell-col-${o.column}`,t=this.$el.querySelector(e);t&&this.tryFocus(t)}r.stopPropagation(),r.preventDefault()},tryFocus(e=this.$el){this.$nextTick((function(){const t=[".vc-grid-focus",'button, [href], input, select, textarea, [tabindex="0"]','[tabindex]:not([tabindex="undefined"])'],r=t.map((function(t){return e.querySelector(t)})).find((function(e){return e}));return!!r&&(r.focus(),!0)}))}}},ne=oe,ce=(r("998b"),j(ne,Q,ee,!1,null,"3ca35a05",null)),ie=ce.exports,ae={name:"PopoverRef",mixins:[h],props:{id:{type:String,default:"default"},element:null,args:null,visibility:{type:String,default:"hover-focus",validator:function(e){return-1!==["hover-focus","hover","focus","click","visible","hidden"].indexOf(e)}},placement:{type:String,default:"bottom"},positionFixed:Boolean,modifiers:{type:Object,default:function(){}},isInteractive:Boolean,showDelay:{type:Number,default:10},hideDelay:{type:Number,default:150}},data(){return{reference:null,isHovered:!1,isFocused:!1}},computed:{isActive(){return this.$popoverIsActive(this.id,this.reference)}},render(){return this.$slots.default[0]},watch:{visibility(){this.refreshVisibility()},args(){var e=this;this.$nextTick((function(){e.isActive&&e.update()}))}},mounted(){var e=this;this.reference=this.element||this.$slots.default[0].elm,this.addEvents(),this.$once("beforeDestroy",(function(){return e.removeEvents()})),this.refreshVisibility()},methods:{addEvents(){Object(p["n"])(this.reference,"click",this.onClick),Object(p["n"])(this.reference,"mouseover",this.onMouseOver),Object(p["n"])(this.reference,"mouseleave",this.onMouseLeave),Object(p["n"])(this.reference,"focusin",this.onFocusIn),Object(p["n"])(this.reference,"focusout",this.onFocusOut)},removeEvents(){Object(p["m"])(this.reference,"click",this.onClick),Object(p["m"])(this.reference,"mouseover",this.onMouseOver),Object(p["m"])(this.reference,"mouseleave",this.onMouseLeave),Object(p["m"])(this.reference,"focusin",this.onFocusIn),Object(p["m"])(this.reference,"focusout",this.onFocusOut)},onClick(){"click"===this.visibility&&this.toggle()},onMouseOver(){this.isHovered||(this.isHovered=!0,this.visibility.includes("hover")&&this.refreshVisibility())},onMouseLeave(){this.isHovered&&(this.isHovered=!1,("hover"===this.visibility||"hover-focus"===this.visibility&&!this.isFocused)&&this.refreshVisibility())},onFocusIn(){this.isFocused||(this.isFocused=!0,this.visibility.includes("focus")&&this.refreshVisibility())},onFocusOut(e){this.isFocused&&!Object(p["e"])(this.reference,e.relatedTarget)&&(this.isFocused=!1,this.visibility.includes("focus")&&this.refreshVisibility())},refreshVisibility(){switch(this.visibility){case"hover":this.isHovered?this.show():this.isActive&&this.hide();break;case"focus":this.isFocused?this.show():this.isActive&&this.hide();break;case"hover-focus":this.isHovered||this.isFocused?this.show({visibility:this.isFocused?"focus":"hover"}):this.isActive&&this.hide();break;case"visible":this.show();break;case"hidden":this.isActive&&this.hide();break}},toggle(){var e=this;this.isActive?this.hide():this.$nextTick((function(){e.show()}))},show({visibility:e}={}){this.$showPopover({id:this.id,ref:this.reference,args:this.args,visibility:e||this.visibility,placement:this.placement,positionFixed:this.positionFixed,modifiers:this.modifiers,isInteractive:this.isInteractive,delay:this.showDelay})},hide({delay:e=this.hideDelay}={}){this.$hidePopover({id:this.id,ref:this.reference,delay:e})},update(){this.$updatePopover({id:this.id,ref:this.reference,args:this.args})}}},se=ae,de=j(se,te,re,!1,null,null,null),ue=de.exports,le=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"vc-nav-container"},[r("grid",{ref:"headerGrid",attrs:{columns:3},on:{rollover:e.onHeaderRollover}},[r("span",{ref:"prevButton",staticClass:"vc-nav-arrow vc-flex vc-justify-center vc-items-center vc-mr-auto",class:e.theme.navArrows,attrs:{role:"button",tabindex:"-1"},on:{click:e.movePrev,keydown:function(t){return e.onSpaceOrEnter(t,e.movePrev)}}},[e._t("nav-left-button",[r("svg-icon",{attrs:{name:"left-arrow",width:"20px",height:"24px"}})])],2),r("span",{ref:"titleButton",staticClass:"vc-nav-title vc-grid-focus",class:e.theme.navTitle,style:{whiteSpace:"nowrap"},attrs:{role:"button",tabindex:"0"},on:{click:e.toggleMode,keydown:function(t){return e.onSpaceOrEnter(t,e.toggleMode)}}},[e._v("\n      "+e._s(e.title)+"\n    ")]),r("span",{ref:"nextButton",staticClass:"vc-nav-arrow vc-flex vc-justify-center vc-items-center vc-ml-auto",class:e.theme.navArrows,attrs:{role:"button",tabindex:"-1"},on:{click:e.moveNext,keydown:function(t){return e.onSpaceOrEnter(t,e.moveNext)}}},[e._t("nav-right-button",[r("svg-icon",{attrs:{name:"right-arrow",width:"20px",height:"24px"}})])],2)]),r("grid",{ref:"itemsGrid",attrs:{rows:4,columns:3,gap:"2px 5px"},on:{rollover:e.onItemsRollover}},e._l(e.activeItems,(function(t){return r("span",{key:t.label,ref:"items",refInFor:!0,class:e.getItemClasses(t),attrs:{role:"button","aria-label":t.ariaLabel,tabindex:t.isDisabled?void 0:t.isActive?0:-1},on:{click:t.click,keydown:function(r){return e.onSpaceOrEnter(r,t.click)}}},[e._v("\n      "+e._s(t.label)+"\n    ")])})),0)],1)},fe=[],ve=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",e._g({staticClass:"vc-svg-icon",attrs:{width:e.width,height:e.height,viewBox:e.viewBox}},e.$listeners),[r("path",{attrs:{d:e.path}})])},be=[];const he="26px",pe="0 0 32 32",ge={"left-arrow":{viewBox:"0 -1 16 34",path:"M11.196 10c0 0.143-0.071 0.304-0.179 0.411l-7.018 7.018 7.018 7.018c0.107 0.107 0.179 0.268 0.179 0.411s-0.071 0.304-0.179 0.411l-0.893 0.893c-0.107 0.107-0.268 0.179-0.411 0.179s-0.304-0.071-0.411-0.179l-8.321-8.321c-0.107-0.107-0.179-0.268-0.179-0.411s0.071-0.304 0.179-0.411l8.321-8.321c0.107-0.107 0.268-0.179 0.411-0.179s0.304 0.071 0.411 0.179l0.893 0.893c0.107 0.107 0.179 0.25 0.179 0.411z"},"right-arrow":{viewBox:"-5 -1 16 34",path:"M10.625 17.429c0 0.143-0.071 0.304-0.179 0.411l-8.321 8.321c-0.107 0.107-0.268 0.179-0.411 0.179s-0.304-0.071-0.411-0.179l-0.893-0.893c-0.107-0.107-0.179-0.25-0.179-0.411 0-0.143 0.071-0.304 0.179-0.411l7.018-7.018-7.018-7.018c-0.107-0.107-0.179-0.268-0.179-0.411s0.071-0.304 0.179-0.411l0.893-0.893c0.107-0.107 0.268-0.179 0.411-0.179s0.304 0.071 0.411 0.179l8.321 8.321c0.107 0.107 0.179 0.268 0.179 0.411z"}};var me={props:["name"],data(){return{width:he,height:he,viewBox:pe,path:"",isBaseline:!1}},mounted(){this.updateIcon()},watch:{name(){this.updateIcon()}},methods:{updateIcon(){const e=ge[this.name];e&&(this.width=e.width||he,this.height=e.height||he,this.viewBox=e.viewBox,this.path=e.path)}}},ye=me,xe=(r("9010"),j(ye,ve,be,!1,null,"63f7b5ec",null)),we=xe.exports;const ke=12;var Oe={name:"CalendarNav",components:{Grid:ie,SvgIcon:we},mixins:[W],props:{value:{type:Object,default:function(){return{month:0,year:0}}},validator:{type:Function,default:function(){return function(){return!0}}}},data(){return{monthMode:!0,yearIndex:0,yearGroupIndex:0,onSpaceOrEnter:p["o"]}},computed:{month(){return this.value&&this.value.month||0},year(){return this.value&&this.value.year||0},title(){return this.monthMode?this.yearIndex:`${this.firstYear} - ${this.lastYear}`},monthItems(){var e=this;const{month:t,year:r}=Object(p["p"])(new Date);return this.locale.getMonthDates().map((function(o,n){const c=n+1;return{label:e.locale.format(o,e.masks.navMonths),ariaLabel:e.locale.format(o,"MMMM YYYY"),isActive:c===e.month&&e.yearIndex===e.year,isCurrent:c===t&&e.yearIndex===r,isDisabled:!e.validator({month:c,year:e.yearIndex}),click:function(){return e.monthClick(c)}}}))},yearItems(){var e=this;const{_:t,year:r}=Object(p["p"])(new Date),o=this.yearGroupIndex*ke,n=o+ke,c=[];for(let i=o;i<n;i+=1)c.push({year:i,label:i,ariaLabel:i,isActive:i===this.year,isCurrent:i===r,isDisabled:!this.validator({month:this.month,year:i}),click:function(){return e.yearClick(i)}});return c},activeItems(){return this.monthMode?this.monthItems:this.yearItems},firstYear(){return Object(l["g"])(this.yearItems.map((function(e){return e.year})))},lastYear(){return Object(l["o"])(this.yearItems.map((function(e){return e.year})))}},watch:{year(){this.yearIndex=this.year},yearIndex(e){this.yearGroupIndex=this.getYearGroupIndex(e)}},created(){this.yearIndex=this.year},mounted(){this.$refs.itemsGrid.tryFocus()},methods:{getItemClasses({isActive:e,isCurrent:t,isDisabled:r}){const o=[this.theme.navCell];return e?o.push(this.theme.navCellActive,"vc-grid-focus"):t?o.push(this.theme.navCellInactiveCurrent):o.push(this.theme.navCellInactive),r&&o.push("vc-opacity-25 vc-pointer-events-none"),o},getYearGroupIndex(e){return Math.floor(e/ke)},monthClick(e){this.$emit("input",{month:e,year:this.yearIndex})},yearClick(e){this.yearIndex=e,this.monthMode=!0,this.$refs.itemsGrid.tryFocus()},toggleMode(){this.monthMode=!this.monthMode},movePrev(){this.monthMode&&this.movePrevYear(),this.movePrevYearGroup()},moveNext(){this.monthMode&&this.moveNextYear(),this.moveNextYearGroup()},movePrevYear(){this.yearIndex--},moveNextYear(){this.yearIndex++},movePrevYearGroup(){this.yearGroupIndex--},moveNextYearGroup(){this.yearGroupIndex++},onHeaderRollover(e){switch(e.direction){case"vertical-trailing":this.$refs.itemsGrid.tryFocus();break}e.handled=!0},onItemsRollover(e){switch(e.direction){case"horizontal-leading":this.movePrev();break;case"horizontal-trailing":this.moveNext();break;case"vertical-leading":this.$refs.headerGrid.tryFocus(),e.handled=!0;break;case"vertical-trailing":e.handled=!0;break}}}},je=Oe,De=j(je,le,fe,!1,null,null,null),Pe=De.exports;function Me(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function Se(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Me(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Me(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Ee,_e,Ye={name:"CalendarDay",mixins:[W,G],render(e){var t=this;const r=function(){return t.hasBackgrounds&&e("div",{class:"vc-highlights vc-day-layer"},t.backgrounds.map((function({key:t,wrapperClass:r,class:o}){return e("div",{key:t,class:r},[e("div",{class:o})])})))},o=function(){return t.safeScopedSlot("day-content",{day:t.day,attributes:t.day.attributes,attributesMap:t.day.attributesMap,dayProps:t.dayContentProps,dayEvents:t.dayContentEvents})||e("span",{class:t.dayContentClass,attrs:Se({},t.dayContentProps),on:t.dayContentEvents,ref:"content"},[t.day.label])},n=function(){if(!t.hasPopovers)return o();const{visibility:r,placement:n,isInteractive:c}=t.popoverState;return e(ue,{props:{id:t.dayPopoverId,args:t.dayEvent,visibility:r,placement:n,isInteractive:c}},[o()])},c=function(){return t.hasDots&&e("div",{class:"vc-day-layer vc-day-box-center-bottom"},[e("div",{class:"vc-dots"},t.dots.map((function({key:t,class:r}){return e("span",{class:r,key:t})})))])},i=function(){return t.hasBars&&e("div",{class:"vc-day-layer vc-day-box-center-bottom"},[e("div",{class:"vc-bars"},t.bars.map((function({key:t,class:r}){return e("span",{class:r,key:t})})))])};return e("div",{class:["vc-day",...this.day.classes,{"vc-day-box-center-center":!this.$scopedSlots["day-content"]}]},[e("div",{class:["vc-h-full",{[this.theme.dayNotInMonth]:!this.inMonth}]},[r(),n(),c(),i()])])},inject:["sharedState"],props:{day:{type:Object,required:!0}},data(){return{glyphs:{},popoverState:{}}},computed:{label(){return this.day.label},dateTime(){return this.day.dateTime},inMonth(){return this.day.inMonth},isDisabled(){return this.day.isDisabled},backgrounds(){return this.glyphs.backgrounds},hasBackgrounds(){return!!Object(p["b"])(this.backgrounds)},content(){return this.glyphs.content},dots(){return this.glyphs.dots},hasDots(){return!!Object(p["b"])(this.dots)},bars(){return this.glyphs.bars},hasBars(){return!!Object(p["b"])(this.bars)},popovers(){return this.glyphs.popovers},hasPopovers(){return!!Object(p["b"])(this.popovers)},dayContentClass(){return["vc-day-content vc-focusable",Object(l["d"])(Object(l["o"])(this.content),"class")||"",this.isDisabled?this.theme.dayContentDisabled:"",this.theme.isDark?"vc-is-dark":"",this.theme.dayContent]},dayContentProps(){let e;return this.day.isFocusable?e="0":this.day.inMonth&&(e="-1"),{tabindex:e,"aria-label":this.day.ariaLabel}},dayContentEvents(){return{click:this.click,mouseenter:this.mouseenter,mouseleave:this.mouseleave,focusin:this.focusin,focusout:this.focusout,keydown:this.keydown}},dayEvent(){return Se(Se({},this.day),{},{el:this.$refs.content,popovers:this.popovers})}},watch:{theme(){this.refresh()},popovers(){const e=["click","focus","hover","visible"];let t="",r=!1,o=-1;this.popovers.forEach((function(n){const c=e.indexOf(n.visibility);o=c>o?c:o,t=t||n.placement,r=r||n.isInteractive})),this.popoverState={visibility:o>=0?e[o]:"hidden",placement:t||"bottom",isInteractive:r}}},methods:{getDayEvent(e){return Se(Se({},this.dayEvent),{},{event:e})},click(e){this.$emit("dayclick",this.getDayEvent(e))},mouseenter(e){this.$emit("daymouseenter",this.getDayEvent(e))},mouseleave(e){this.$emit("daymouseleave",this.getDayEvent(e))},focusin(e){this.$emit("dayfocusin",this.getDayEvent(e))},focusout(e){this.$emit("dayfocusout",this.getDayEvent(e))},keydown(e){this.$emit("daykeydown",this.getDayEvent(e))},refresh(){var e=this;if(!this.day.refresh)return;this.day.refresh=!1;const t={backgrounds:[],dots:[],bars:[],popovers:[],content:[]};this.day.attributes=Object.values(this.day.attributesMap||{}).sort((function(e,t){return e.order-t.order})),this.day.attributes.forEach((function(r){const{targetDate:o}=r,{isDate:n,isComplex:c,startTime:i,endTime:a}=o,s=i===e.dateTime,d=a===e.dateTime,u=s&&d,l=s||d,f={isDate:n,isComplex:c,onStart:s,onEnd:d,onStartAndEnd:u,onStartOrEnd:l};e.processHighlight(r,f,t),e.processContent(r,f,t),e.processDot(r,f,t),e.processBar(r,f,t),e.processPopover(r,t)})),this.glyphs=t},processHighlight({key:e,highlight:t},{isDate:r,isComplex:o,onStart:n,onEnd:c,onStartAndEnd:i},{backgrounds:a,content:s}){if(!t)return;const{base:d,start:u,end:l}=t;r||o||i?(a.push({key:e,wrapperClass:"vc-day-layer vc-day-box-center-center",class:"vc-highlight "+u.class}),s.push({key:e+"-content",class:u.contentClass})):n?(a.push({key:e+"-base",wrapperClass:"vc-day-layer vc-day-box-right-center",class:"vc-highlight vc-highlight-base-start "+d.class}),a.push({key:e,wrapperClass:"vc-day-layer vc-day-box-center-center",class:"vc-highlight "+u.class}),s.push({key:e+"-content",class:u.contentClass})):c?(a.push({key:e+"-base",wrapperClass:"vc-day-layer vc-day-box-left-center",class:"vc-highlight vc-highlight-base-end "+d.class}),a.push({key:e,wrapperClass:"vc-day-layer vc-day-box-center-center",class:"vc-highlight "+l.class}),s.push({key:e+"-content",class:l.contentClass})):(a.push({key:e+"-middle",wrapperClass:"vc-day-layer vc-day-box-center-center",class:"vc-highlight vc-highlight-base-middle "+d.class}),s.push({key:e+"-content",class:d.contentClass}))},processContent({key:e,content:t},{isDate:r,onStart:o,onEnd:n},{content:c}){if(!t)return;const{base:i,start:a,end:s}=t;r||o?c.push({key:e,class:a.class}):n?c.push({key:e,class:s.class}):c.push({key:e,class:i.class})},processDot({key:e,dot:t},{isDate:r,onStart:o,onEnd:n},{dots:c}){if(!t)return;const{base:i,start:a,end:s}=t;r||o?c.push({key:e,class:"vc-dot "+a.class}):n?c.push({key:e,class:"vc-dot "+s.class}):c.push({key:e,class:"vc-dot "+i.class})},processBar({key:e,bar:t},{isDate:r,onStart:o,onEnd:n},{bars:c}){if(!t)return;const{base:i,start:a,end:s}=t;r||o?c.push({key:e,class:"vc-bar "+a.class}):n?c.push({key:e,class:"vc-bar "+s.class}):c.push({key:e,class:"vc-bar "+i.class})},processPopover(e,{popovers:t}){const{key:r,customData:o,popover:n}=e;if(!n)return;const c=Object(l["b"])({key:r,customData:o,attribute:e},Se({},n),{visibility:n.label?"hover":"click",placement:"bottom",isInteractive:!n.label});t.splice(0,0,c)}}},Ce=Ye,Ie=(r("d581"),j(Ce,Ee,_e,!1,null,"2aac4f42",null)),$e=Ie.exports;function Ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function Te(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ae(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ae(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Le,Fe,Ne,ze,Re={name:"CalendarPane",mixins:[U,W,G],render(e){var t=this;const r=this.safeScopedSlot("header",this.page)||e("div",{class:["vc-header",this.theme.header]},[e("div",{class:"vc-title-layout align-"+this.titlePosition},[e("div",{class:"vc-title-wrapper"},[e(ue,{props:{id:this.navPopoverId,visibility:this.navVisibility_,placement:this.navPlacement,modifiers:{flip:{behavior:["bottom"]}},isInteractive:!0}},[e("div",{class:["vc-title",this.theme.title]},[this.safeScopedSlot("header-title",this.page,this.page.title)])]),e(P,{props:{id:this.navPopoverId,contentClass:this.theme.navPopoverContainer}},[e(Pe,{props:{value:this.page,validator:this.canMove},on:{input:function(e){return t.move(e)}},scopedSlots:this.$scopedSlots})])])])]),o=e(ie,{class:"vc-weeks",props:{rows:7,columns:7,columnWidth:"1fr",disableFocus:!0}},[...this.weekdayLabels.map((function(r,o){return e("div",{key:o+1,class:["vc-weekday",t.theme.weekdays]},[r])})),...this.page.days.map((function(r){return e($e,{attrs:Te(Te({},t.$attrs),{},{day:r}),on:Te({},t.$listeners),scopedSlots:t.$scopedSlots,key:r.id,ref:"days",refInFor:!0})}))]);return e("div",{class:"vc-pane",ref:"pane"},[r,o])},props:{page:Object,titlePosition:String,navVisibility:String,canMove:{type:Function,default:function(){return!0}}},data(){return{navPopoverId:Object(p["c"])()}},computed:{navVisibility_(){return this.propOrDefault("navVisibility","navVisibility")},navPlacement(){switch(this.titlePosition){case"left":return"bottom-start";case"right":return"bottom-end";default:return"bottom"}},weekdayLabels(){var e=this;return this.locale.getWeekdayDates().map((function(t){return e.format(t,e.masks.weekdays)}))}},methods:{move(e){this.$emit("update:page",e)},refresh(){this.$refs.days.forEach((function(e){return e.refresh()}))}}},Ve=Re,He=(r("3d14"),j(Ve,Le,Fe,!1,null,"4a5f2beb",null)),We=He.exports,Be={name:"CustomTransition",render(e){return e("transition",{props:{name:this.name_,appear:this.appear},on:{beforeEnter:this.beforeEnter,afterEnter:this.afterEnter}},[this.$slots.default])},props:{name:String,appear:Boolean},computed:{name_(){return this.name||"none"}},methods:{beforeEnter(e){this.$emit("beforeEnter",e),this.$emit("beforeTransition",e)},afterEnter(e){this.$emit("afterEnter",e),this.$emit("afterTransition",e)}}},Ue=Be,Ge=(r("2285"),j(Ue,Ne,ze,!1,null,"5be4b00c",null)),qe=Ge.exports,Ke=r("93495");r("bdab");function Ze(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function Xe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ze(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ze(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Je,Qe,et={name:"Calendar",render(e){var t=this;const r=this.pages.map((function(r,o){return e(We,{attrs:Xe(Xe({},t.$attrs),{},{attributes:t.store}),props:{titlePosition:t.titlePosition_,page:r,minPage:t.minPage_,maxPage:t.maxPage_,canMove:t.canMove},on:Xe(Xe({},t.$listeners),{},{"update:page":function(e){return t.refreshPages({page:e,position:o+1})},dayfocusin:function(e){t.lastFocusedDay=e,t.$emit("dayfocusin",e)},dayfocusout:function(e){t.lastFocusedDay=null,t.$emit("dayfocusout",e)}}),scopedSlots:t.$scopedSlots,key:r.key,ref:"pages",refInFor:!0})})),o=function(r){const o=function(){return t.move(r?-t.step_:t.step_)},n=function(e){return Object(p["o"])(e,o)},c=r?!t.canMovePrev:!t.canMoveNext;return e("div",{class:["vc-flex vc-justify-center vc-items-center vc-cursor-pointer vc-select-none "+(c?"vc-opacity-25 vc-pointer-events-none vc-cursor-not-allowed":"vc-pointer-events-auto"),t.$theme.arrows],attrs:{role:"button"},on:{click:o,keydown:n}},[(r?t.safeScopedSlot("header-left-button",{click:o}):t.safeScopedSlot("header-right-button",{click:o}))||e(we,{props:{name:r?"left-arrow":"right-arrow"}})])},n=function(){return e(P,{props:{id:t.sharedState.dayPopoverId,contentClass:t.$theme.dayPopoverContainer},scopedSlots:{default:function({args:r,updateLayout:o,hide:n}){const c=Object.values(r.attributes).filter((function(e){return e.popover})),i=t.$locale.masks,a=t.format,s=a(r.date,i.dayPopover);return t.safeScopedSlot("day-popover",{day:r,attributes:c,masks:i,format:a,dayTitle:s,updateLayout:o,hide:n})||e("div",[i.dayPopover&&e("div",{class:["vc-text-center",t.$theme.dayPopoverHeader]},[s]),c.map((function(t){return e(X,{key:t.key,props:{attribute:t}})}))])}}})},c=function(){return e("div",{attrs:{"data-helptext":"Press the arrow keys to navigate by day, Home and End to navigate to week ends, PageUp and PageDown to navigate by month, Alt+PageUp and Alt+PageDown to navigate by year"},class:["vc-container","vc-reset",{"vc-min-w-full":t.isExpanded},t.$theme.container],on:{keydown:t.handleKeydown,mouseup:function(e){return e.preventDefault()}},ref:"container"},[e("div",{class:["vc-w-full vc-relative",{"vc-overflow-hidden":t.inTransition}]},[e(qe,{props:{name:t.transitionName},on:{beforeEnter:function(){t.inTransition=!0},afterEnter:function(){t.inTransition=!1}}},[e(ie,{class:"grid",props:{rows:t.rows,columns:t.columns,columnWidth:"minmax(256px, 1fr)",disableFocus:!0},attrs:Xe({},t.$attrs),key:Object(p["b"])(t.pages)?t.pages[0].key:""},r)]),e("div",{class:["vc-arrows-container title-"+t.titlePosition_]},[o(!0),o(!1)])]),n()])};return c()},mixins:[U,B,G],provide(){return{sharedState:this.sharedState}},props:{rows:{type:Number,default:1},columns:{type:Number,default:1},step:Number,titlePosition:String,isExpanded:Boolean,fromDate:Date,toDate:Date,fromPage:Object,toPage:Object,minPage:Object,maxPage:Object,transition:String,attributes:[Object,Array],disablePageSwipe:Boolean},data(){return{pages:[],store:null,lastFocusedDay:null,focusableDay:(new Date).getDate(),transitionName:"",inTransition:!1,sharedState:{dayPopoverId:Object(p["c"])(),theme:{},masks:{},locale:{}}}},computed:{titlePosition_(){return this.propOrDefault("titlePosition","titlePosition")},minPage_(){return this.minPage||Object(p["p"])(this.$locale.toDate(this.minDate))},maxPage_(){return this.maxPage||Object(p["p"])(this.$locale.toDate(this.maxDate))},count(){return this.rows*this.columns},step_(){return this.step||this.count},canMovePrev(){return!Object(p["x"])(this.minPage_)||Object(p["t"])(this.pages[0],this.minPage_)},canMoveNext(){return!Object(p["x"])(this.maxPage_)||Object(p["u"])(this.pages[this.pages.length-1],this.maxPage_)}},watch:{$locale(){this.refreshLocale(),this.refreshPages({page:Object(l["g"])(this.pages),ignoreCache:!0}),this.initStore()},$theme(){this.refreshTheme(),this.initStore()},fromDate(){this.refreshPages()},fromPage(e){const t=this.pages&&this.pages[0];Object(p["w"])(e,t)||this.refreshPages()},toPage(e){const t=this.pages&&this.pages[this.pages.length-1];Object(p["w"])(e,t)||this.refreshPages()},count(){this.refreshPages()},attributes(e){const{adds:t,deletes:r}=this.store.refresh(e);this.refreshAttrs(this.pages,t,r)},pages(e){this.refreshAttrs(e,this.store.list,null,!0)},disabledAttribute(){this.refreshDisabledDays()},lastFocusedDay(e){e&&(this.focusableDay=e.day,this.refreshFocusableDays())},inTransition(e){e?this.$emit("transition-start"):(this.$emit("transition-end"),this.transitionPromise&&(this.transitionPromise.resolve(),this.transitionPromise=null))}},created(){this.refreshLocale(),this.refreshTheme(),this.initStore(),this.refreshPages()},mounted(){var e=this;if(!this.disablePageSwipe){const t=Object(g["a"])(this.$refs.container,(function({toLeft:t,toRight:r}){t?e.moveNext():r&&e.movePrev()}),this.$defaults.touch);this.$once("beforeDestroy",(function(){return t()}))}},methods:{refreshLocale(){this.sharedState.locale=this.$locale,this.sharedState.masks=this.$locale.masks},refreshTheme(){this.sharedState.theme=this.$theme},canMove(e){return Object(p["v"])(e,this.minPage_,this.maxPage_)},async movePrev(e){const t=await this.move(-this.step_,e);return t},async moveNext(e){const t=this.move(this.step_,e);return t},async move(e,t){const r=this.$locale.toPage(e,this.pages[0]);if(!r)return null;const o=await this.refreshPages(Xe(Xe({},t),{},{page:r}));return o},async focusDate(e,t={}){const r=Object(p["p"])(e);let o=null;t.position?o=this.getTargetPageRange(r,t.position).fromPage:Object(p["u"])(r,this.pages[0])?o=this.getTargetPageRange(r,-1).fromPage:Object(p["t"])(r,Object(l["o"])(this.pages))&&(o=this.getTargetPageRange(r,1).fromPage),o&&!Object(p["w"])(o,this.pages[0])&&await this.refreshPages(Xe(Xe({},t),{},{position:1,page:o}));const n=this.$el.querySelector(`.id-${this.$locale.format(e,"YYYY-MM-DD")}.in-month .vc-focusable`);n&&n.focus()},async showPageRange(e,t){let r,o;if(Object(l["i"])(e))r=Object(p["p"])(e);else{if(!Object(l["l"])(e))return;{const{month:t,year:n}=e,{from:c,to:i}=e;Object(l["k"])(t)&&Object(l["k"])(n)?r=e:(c||i)&&(r=Object(l["i"])(c)?Object(p["p"])(c):c,o=Object(l["i"])(i)?Object(p["p"])(i):i)}}const n=Object(l["o"])(this.pages);let c=r;Object(p["t"])(o,n)&&(c=Object(p["a"])(o,-(this.pages.length-1))),Object(p["u"])(r,c)&&(c=r),await this.refreshPages(Xe(Xe({},t),{},{page:c}))},getTargetPageRange(e,t){let r=null;if(Object(p["x"])(e)){const o=t>0?1-t:-(this.count+t);r=Object(p["a"])(e,o)}else if(r=this.fromPage||Object(p["p"])(this.$locale.toDate(this.fromDate)),!Object(p["x"])(r)){const e=this.toPage||Object(p["p"])(this.$locale.toDate(this.toPage));r=Object(p["x"])(e)?Object(p["a"])(e,1-this.count):this.getPageForAttributes()}r=Object(p["x"])(r)?r:Object(p["s"])();const o=Object(p["a"])(r,this.count-1);return Object(p["u"])(r,this.minPage_)?r=this.minPage_:Object(p["t"])(o,this.maxPage_)&&(r=Object(p["a"])(this.maxPage_,1-this.count)),{fromPage:r,toPage:o}},async refreshPages({page:e,position:t=1,transition:r,ignoreCache:o}={}){var n=this;return new Promise((function(c,i){const{fromPage:a,toPage:s}=n.getTargetPageRange(e,t),d=[];for(let e=0;e<n.count;e++)d.push(n.buildPage(Object(p["a"])(a,e),o));n.refreshDisabledDays(d),n.refreshFocusableDays(d),n.transitionName=n.getPageTransition(n.pages[0],d[0],r),n.pages=d,n.$emit("update:from-page",a),n.$emit("update:to-page",s),n.transitionName&&"none"!==n.transitionName?n.transitionPromise={resolve:c,reject:i}:c()}))},refreshDisabledDays(e){var t=this;this.getPageDays(e).forEach((function(e){e.isDisabled=!!t.disabledAttribute&&t.disabledAttribute.includesDay(e)}))},refreshFocusableDays(e){var t=this;this.getPageDays(e).forEach((function(e){e.isFocusable=e.inMonth&&e.day===t.focusableDay}))},getPageDays(e=this.pages){return e.reduce((function(e,t){return e.concat(t.days)}),[])},getPageTransition(e,t,r=this.transition){if("none"===r)return r;if("fade"===r||!r&&this.count>1||!Object(p["x"])(e)||!Object(p["x"])(t))return"fade";const o=Object(p["u"])(t,e);return"slide-v"===r?o?"slide-down":"slide-up":o?"slide-right":"slide-left"},getPageForAttributes(){let e=null;const t=this.store.pinAttr;if(t&&t.hasDates){let[r]=t.dates;r=r.start||r.date,e=Object(p["p"])(this.$locale.toDate(r))}return e},buildPage({month:e,year:t},r){var o=this;const n=`${t.toString()}-${e.toString()}`;let c=this.pages.find((function(e){return e.key===n}));if(!c||r){const r=new Date(t,e-1,15),i=this.$locale.getMonthComps(e,t),a=this.$locale.getPrevMonthComps(e,t),s=this.$locale.getNextMonthComps(e,t);c={key:n,month:e,year:t,title:this.$locale.format(r,this.$locale.masks.title),shortMonthLabel:this.$locale.format(r,"MMM"),monthLabel:this.$locale.format(r,"MMMM"),shortYearLabel:t.toString().substring(2),yearLabel:t.toString(),monthComps:i,prevMonthComps:a,nextMonthComps:s,canMove:function(e){return o.canMove(e)},move:function(e){return o.move(e)},moveThisMonth:function(){return o.moveThisMonth()},movePrevMonth:function(){return o.move(a)},moveNextMonth:function(){return o.move(s)},refresh:!0},c.days=this.$locale.getCalendarDays(c)}return c},initStore(){this.store=new Ke["a"](this.$theme,this.$locale,this.attributes),this.refreshAttrs(this.pages,this.store.list,[],!0)},refreshAttrs(e=[],t=[],r=[],o){var n=this;Object(p["b"])(e)&&(e.forEach((function(e){e.days.forEach((function(e){let n={};o?e.refresh=Object(p["b"])(e.attributes):Object(l["f"])(e.attributesMap,r)?(n=Object(l["r"])(e.attributesMap,r),e.refresh=!0):n=e.attributesMap||{},t.forEach((function(t){const r=t.includesDay(e);if(r){const o=Xe(Xe({},t),{},{targetDate:r});n[t.key]=o,e.refresh=!0}})),e.refresh&&(e.attributesMap=n)}))})),this.$nextTick((function(){n.$refs.pages.forEach((function(e){return e.refresh()}))})))},handleKeydown(e){const t=this.lastFocusedDay;null!=t&&(t.event=e,this.handleDayKeydown(t))},handleDayKeydown(e){const{date:t,event:r}=e;let o=null;switch(r.key){case"ArrowLeft":o=Object(n["a"])(t,-1);break;case"ArrowRight":o=Object(n["a"])(t,1);break;case"ArrowUp":o=Object(n["a"])(t,-7);break;case"ArrowDown":o=Object(n["a"])(t,7);break;case"Home":o=Object(n["a"])(t,1-e.weekdayPosition);break;case"End":o=Object(n["a"])(t,e.weekdayPositionFromEnd);break;case"PageUp":o=r.altKey?d(t,-1):s(t,-1);break;case"PageDown":o=r.altKey?d(t,1):s(t,1);break}o&&(r.preventDefault(),this.focusDate(o))}}},tt=et,rt=(r("04d4"),j(tt,Je,Qe,!1,null,null,null)),ot=rt.exports;class nt{constructor({format:e,parse:t}){this._format=e,this._parse=t}hasValue(e){return Object(l["i"])(e)}format(e){return this.hasValue(e)?this._format(e):""}parse(e){const t=this._parse(e);return Object(l["i"])(t)?t:null}normalize(e){return e&&new Date(e)}filterDisabled({value:e,isRequired:t,disabled:r,fallbackValue:o}){return!this.hasValue(e)&&t?o:this.hasValue(e)&&r&&r.intersectsDate(e)?null:e}valuesAreEqual(e,t){return Object(p["d"])(e,t)}getPageRange(e){if(!this.hasValue(e))return null;const t=Object(p["p"])(e);return{from:t,to:t}}handleDayClick(e,t){t.dateIsValid(e.date)&&(this.valuesAreEqual(e.date,t.value_)?t.isRequired||(t.value_=null):(t.doFormatInput=!0,t.doHidePopover=!0,t.value_=e.date))}handleDayMouseEnter(){}}class ct{constructor({format:e,parse:t}){this._format=e,this._parse=t}hasValue(e){return Object(p["b"])(e)}format(e){var t=this;return this.hasValue(e)?e.map((function(e){return t._format(e)})).join(", "):""}parse(e){var t=this;return Object(l["m"])(e)?e.split(",").map((function(e){return t._parse(e)})).filter((function(e){return Object(l["i"])(e)})):[]}normalize(e){return this.hasValue(e)?Object(l["v"])(e).sort((function(e,t){return e.getTime()-t.getTime()})):[]}filterDisabled({value:e,isRequired:t,disabled:r,fallbackValue:o}){if(!this.hasValue(e))return[];if(!r)return e;const n=e.filter((function(e){return!r.intersectsDate(e)}));return!this.hasValue(n)&&t?o:n}valuesAreEqual(e,t){const r=this.hasValue(e),o=this.hasValue(t);return!r&&!o||r===o&&e.length===t.length&&(!e.some((function(e){return!t.includes(e)}))&&!t.some((function(t){return!e.includes(t)})))}getPageRange(e){if(!this.hasValue(e))return null;const t=Object(p["p"])(e[0]),r=Object(p["j"])(Object(p["p"])(Object(l["o"])(e)),Object(p["a"])(t,1));return{from:t,to:r}}handleDayClick(e,t){if(!t.dateIsValid(e.date))return;let r=[];this.hasValue(t.value_)?t.value_.some((function(t){return t.getTime()===e.dateTime}))?(r=t.value_.filter((function(t){return!Object(p["d"])(t,e.date)})),!this.hasValue(r)&&t.isRequired&&(r=[e.date])):r=[...t.value_,e.date]:r=[e.date],this.doFormatInput=!0,this.doHidePopover=!1,t.value_=this.normalize(r)}handleDayMouseEnter(){}}var it=r("cfe5");class at{constructor({locale:e,format:t,parse:r}){this._locale=e,this._format=t,this._parse=r}hasValue(e){return Object(l["l"])(e)&&Object(l["i"])(e.start)&&Object(l["i"])(e.end)}normalize(e){if(!this.hasValue(e))return null;const{start:t,end:r}=new it["a"]({start:new Date(e.start),end:new Date(e.end)},{locale:this._locale});return{start:t,end:r}}format(e){const t=this.normalize(e);if(!t)return"";const{start:r,end:o}=t,n=this._format(r),c=this._format(o);return n&&c?`${n} - ${c}`:""}parse(e){let t,r;const o=[" - ","-"].find((function(t){return e.includes(t)})),n=e.split(o).map((function(e){return e.trim()}));return n.length>=2&&(t=this._parse(n[0]),r=this._parse(n[1])),t&&r?this.normalize({start:t,end:r}):null}filterDisabled({value:e,isRequired:t,disabled:r,fallbackValue:o}){let n=t?o:null;return!this.hasValue(e)||r&&r.intersectsDate(e)||(n=e),n}valuesAreEqual(e,t){const r=this.hasValue(e),o=this.hasValue(t);return!r&&!o||r===o&&(Object(p["d"])(e.start,t.start)&&Object(p["d"])(e.end,t.end))}getPageRange(e){if(!this.hasValue(e))return null;const t=Object(p["p"])(e.start),r=Object(p["j"])(Object(p["p"])(e.end),Object(p["a"])(t,1));return{from:t,to:r}}handleDayClick(e,t){const{dateTime:r}=e;if(t.dragValue){const e=this.normalize({start:new Date(t.dragValue.start.getTime()),end:new Date(r)});t.dateIsValid(e)&&(t.doFormatInput=!0,t.doHidePopover=!0,t.dragValue=null,t.value_=e)}else{const e={start:new Date(r),end:new Date(r)};t.dateIsValid(e)&&(t.dragValue=e)}}handleDayMouseEnter(e,t){const{dateTime:r}=e;if(t.dragValue){const e={start:new Date(t.dragValue.start.getTime()),end:new Date(r)};t.dateIsValid(e)&&(t.dragValue=e)}}}function st(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function dt(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?st(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):st(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ut,lt,ft={name:"DatePicker",render(e){var t=this;const r=function(){return e(ot,{attrs:dt(dt({},t.$attrs),{},{attributes:t.attributes_,theme:t.$theme,locale:t.$locale}),props:{minDate:t.minDate,maxDate:t.maxDate,disabledDates:t.disabledDates,availableDates:t.availableDates},on:dt(dt({},t.$listeners),{},{dayclick:t.onDayClick,daymouseenter:t.onDayMouseEnter,daykeydown:t.onDayKeydown,dayfocusin:t.onDayFocusIn}),scopedSlots:t.$scopedSlots,ref:"calendar"})};if(this.isInline)return r();const o=this.safeScopedSlot("default",{inputClass:this.inputClass,inputValue:this.inputValue,inputProps:this.inputProps_,inputEvents:this.inputEvents,isDragging:!!this.dragValue,updateValue:this.updateValue,hidePopover:this.hidePopover})||e("input",{class:this.inputClass,attrs:this.inputProps_,domProps:{value:this.inputValue},on:this.inputEvents});return e("span",[e(ue,{props:dt(dt({},this.popover_),{},{id:this.datePickerPopoverId,isInteractive:!0})},[o]),e(P,{props:{id:this.datePickerPopoverId,placement:"bottom-start",contentClass:this.$theme.container},on:{beforeShow:function(e){return t.$emit("popoverWillShow",e)},afterShow:function(e){return t.$emit("popoverDidShow",e)},beforeHide:function(e){return t.$emit("popoverWillHide",e)},afterHide:function(e){return t.$emit("popoverDidHide",e)}},scopedSlots:{default(){return r()}},ref:"popover"})])},mixins:[B,U,G],props:{mode:{type:String,default:"single"},value:{type:null,required:!0},isRequired:Boolean,isInline:Boolean,updateOnInput:Boolean,inputDebounce:Number,inputProps:{type:Object,default:function(){return{}}},popover:{type:Object,default:function(){return{}}},dragAttribute:Object,selectAttribute:Object,attributes:Array},data(){return{value_:null,dragValue:null,inputValue:"",doFormatInput:!0,doHidePopover:!1,doAdjustPageRange:!1,updateTimeout:null,datePickerPopoverId:Object(p["c"])()}},computed:{updateOnInput_(){return this.propOrDefault("updateOnInput","datePicker.updateOnInput")},inputDebounce_(){return this.propOrDefault("inputDebounce","datePicker.inputDebounce")},inputMasks(){const e=this.$locale.masks.input;return Object(l["h"])(e)&&e||[e]},inputClass(){const e=this.inputProps.class||this.$theme.datePickerInput,t=this.inputProps.dragClass||this.$theme.datePickerInputDrag;return this.picker.hasValue(this.dragValue)&&t||e},inputProps_(){const e=dt(dt({},this.inputProps),{},{value:this.inputValue,type:"input"});return delete e.class,delete e.dragClass,e},inputEvents(){return{input:this.inputInput,change:this.inputChange,keyup:this.inputKeyup}},popover_(){return this.propOrDefault("popover","datePicker.popover","merge")},canHidePopover(){return!(this.popover.keepVisibleOnInput||"visible"!==this.popover_.visibility)},selectAttribute_(){if(!this.picker.hasValue(this.value_))return null;const e=dt(dt({key:"select-drag"},this.selectAttribute),{},{dates:this.value_,pinPage:!0}),{dot:t,bar:r,highlight:o,content:n}=e;return t||r||o||n||(e.highlight=!0),e},dragAttribute_(){if("range"!==this.mode||!this.picker.hasValue(this.dragValue))return null;const e=dt(dt({key:"select-drag"},this.dragAttribute),{},{dates:this.dragValue}),{dot:t,bar:r,highlight:o,content:n}=e;return t||r||o||n||(e.highlight={startEnd:{fillMode:"none"}}),e},attributes_(){const e=Object(l["h"])(this.attributes)?[...this.attributes]:[];return this.dragAttribute_?e.push(this.dragAttribute_):this.selectAttribute_&&e.push(this.selectAttribute_),e},picker(){var e=this;const t={locale:this.$locale,format:function(t){return e.$locale.format(t,e.inputMasks[0])},parse:function(t){return e.$locale.parse(t,e.inputMasks)}};switch(this.mode){case"multiple":return new ct(t);case"range":return new at(t);default:return new nt(t)}}},watch:{mode(){this.value_=null},value:{handler(){this.value_=this.picker.filterDisabled({value:this.value,isRequired:this.isRequired,disabled:this.disabledAttribute,fallbackValue:null}),this.value&&!this.value_&&this.$emit("input",null)},immediate:!0},value_:{handler(e){this.picker.valuesAreEqual(e,this.value)||this.$emit("input",e),this.isInline||(this.doFormatInput&&this.formatInput(),this.doHidePopover&&this.hidePopover(),this.doAdjustPageRange&&this.adjustPageRange()),this.doFormatInput=!0,this.doHidePopover=!1,this.doAdjustPageRange=!1},immediate:!0},dragValue(e){this.formatInput(),this.$emit("drag",this.picker.normalize(e))}},mounted(){var e=this;Object(p["n"])(document,"keydown",this.onDocumentKeyDown);const t=Object(g["b"])(document,(function(t){document.body.contains(t.target)&&!Object(p["e"])(e.$el,t.target)&&e.dragValue&&(e.dragValue=null)}));this.$once("beforeDestroy",(function(){Object(p["m"])(document,"keydown",e.onDocumentKeyDown),t()}))},methods:{dateIsValid(e){return!e||!!this.disabledAttribute&&!this.disabledAttribute.intersectsDate(e)},onDocumentKeyDown(e){this.dragValue&&27===e.keyCode&&(this.dragValue=null)},onDayClick(e){this.picker.handleDayClick(e,this),this.$emit("dayclick",e)},onDayMouseEnter(e){this.picker.handleDayMouseEnter(e,this),this.$emit("daymouseenter",e)},onDayFocusIn(e){this.picker.handleDayMouseEnter(e,this),this.$emit("dayfocusin",e)},onDayKeydown(e){switch(e.event.key){case" ":case"Enter":this.picker.handleDayClick(e,this),e.event.preventDefault();break;case"Escape":this.hidePopover()}this.$emit("daykeydown",e)},inputInput(e){this.inputValue=e.target.value,this.updateOnInput_&&this.updateValue(this.inputValue,{formatInput:!1,hidePopover:!1,adjustPageRange:!0,debounce:this.inputDebounce_})},inputChange(){this.updateValue(this.inputValue,{formatInput:!0,hidePopover:!1,adjustPageRange:!1})},inputKeyup(e){27===e.keyCode&&this.updateValue(this.value_,{formatInput:!0,hidePopover:!0,adjustPageRange:!1})},updateValue(e=this.inputValue,{formatInput:t,hidePopover:r,adjustPageRange:o,debounce:n}={}){var c=this;clearTimeout(this.updateTimeout),void 0===n||n<0?this.forceUpdateValue(e,{formatInput:t,hidePopover:r,adjustPageRange:o}):this.updateTimeout=setTimeout((function(){c.updateTimeout=null,c.forceUpdateValue(e,{formatInput:t,hidePopover:r,adjustPageRange:o})}),n)},forceUpdateValue(e,{formatInput:t,hidePopover:r,adjustPageRange:o}){this.inputValue=Object(l["m"])(e)?e:this.inputValue;const n=Object(l["m"])(e)?this.picker.parse(e):e;this.doFormatInput=t,this.doHidePopover=r,this.doAdjustPageRange=o,this.value_=this.picker.filterDisabled({value:this.picker.normalize(n),disabled:this.disabledAttribute,fallbackValue:this.value_})},formatInput(){var e=this;this.$nextTick((function(){const t=e.picker.hasValue(e.dragValue)?e.dragValue:e.value_;e.inputValue=e.picker.format(t)}))},hidePopover(){const e=this.$refs.popover;e&&e.hide({priority:10,delay:250})},adjustPageRange(){this.picker.hasValue(this.value_)&&this.$refs.calendar&&this.$refs.calendar.showPageRange(this.picker.getPageRange(this.value_))}}},vt=ft,bt=(r("d0d6"),j(vt,ut,lt,!1,null,"56ae83be",null)),ht=bt.exports},"2b03":function(e,t){function r(e,t,r,o){var n=e.length,c=r+(o?1:-1);while(o?c--:++c<n)if(t(e[c],c,e))return c;return-1}e.exports=r},"2b10":function(e,t){function r(e,t,r){var o=-1,n=e.length;t<0&&(t=-t>n?0:n+t),r=r>n?n:r,r<0&&(r+=n),n=t>r?0:r-t>>>0,t>>>=0;var c=Array(n);while(++o<n)c[o]=e[o+t];return c}e.exports=r},"2b3e":function(e,t,r){var o=r("585a"),n="object"==typeof self&&self&&self.Object===Object&&self,c=o||n||Function("return this")();e.exports=c},"2b4c":function(e,t,r){var o=r("5537")("wks"),n=r("ca5a"),c=r("7726").Symbol,i="function"==typeof c,a=e.exports=function(e){return o[e]||(o[e]=i&&c[e]||(i?c:n)("Symbol."+e))};a.store=o},"2c66":function(e,t,r){var o=r("d612"),n=r("8db3"),c=r("5edf"),i=r("c584"),a=r("750a"),s=r("ac41"),d=200;function u(e,t,r){var u=-1,l=n,f=e.length,v=!0,b=[],h=b;if(r)v=!1,l=c;else if(f>=d){var p=t?null:a(e);if(p)return s(p);v=!1,l=i,h=new o}else h=t?[]:b;e:while(++u<f){var g=e[u],m=t?t(g):g;if(g=r||0!==g?g:0,v&&m===m){var y=h.length;while(y--)if(h[y]===m)continue e;t&&h.push(m),b.push(g)}else l(h,m,r)||(h!==b&&h.push(m),b.push(g))}return b}e.exports=u},"2d00":function(e,t){e.exports=!1},"2d7c":function(e,t){function r(e,t){var r=-1,o=null==e?0:e.length,n=0,c=[];while(++r<o){var i=e[r];t(i,r,e)&&(c[n++]=i)}return c}e.exports=r},"2d95":function(e,t){var r={}.toString;e.exports=function(e){return r.call(e).slice(8,-1)}},"2dcb":function(e,t,r){var o=r("91e9"),n=o(Object.getPrototypeOf,Object);e.exports=n},"2ec1":function(e,t,r){var o=r("100e"),n=r("9aff");function c(e){return o((function(t,r){var o=-1,c=r.length,i=c>1?r[c-1]:void 0,a=c>2?r[2]:void 0;i=e.length>3&&"function"==typeof i?(c--,i):void 0,a&&n(r[0],r[1],a)&&(i=c<3?void 0:i,c=1),t=Object(t);while(++o<c){var s=r[o];s&&e(t,s,o,i)}return t}))}e.exports=c},"2fa3":function(e,t,r){"use strict";r.d(t,"h",(function(){return a})),r.d(t,"x",(function(){return s})),r.d(t,"u",(function(){return d})),r.d(t,"t",(function(){return u})),r.d(t,"v",(function(){return l})),r.d(t,"w",(function(){return f})),r.d(t,"p",(function(){return v})),r.d(t,"a",(function(){return b})),r.d(t,"s",(function(){return h})),r.d(t,"q",(function(){return p})),r.d(t,"r",(function(){return g})),r.d(t,"j",(function(){return m})),r.d(t,"d",(function(){return y})),r.d(t,"b",(function(){return x})),r.d(t,"i",(function(){return w})),r.d(t,"f",(function(){return k})),r.d(t,"g",(function(){return O})),r.d(t,"l",(function(){return j})),r.d(t,"n",(function(){return D})),r.d(t,"m",(function(){return P})),r.d(t,"e",(function(){return M})),r.d(t,"o",(function(){return S})),r.d(t,"c",(function(){return E})),r.d(t,"k",(function(){return _}));var o=r("bd86"),n=(r("6b54"),r("ac6a"),r("9404"));function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const a=function(e,t){return Object(n["j"])(e)?e(t):e},s=function(e){return!!(e&&e.month&&e.year)},d=function(e,t){return!(!s(e)||!s(t))&&(e.year===t.year?e.month<t.month:e.year<t.year)},u=function(e,t){return!(!s(e)||!s(t))&&(e.year===t.year?e.month>t.month:e.year>t.year)},l=function(e,t,r){return!!e&&!d(e,t)&&!u(e,r)},f=function(e,t){return!(!e&&t)&&(!(e&&!t)&&(!e&&!t||e.month===t.month&&e.year===t.year))},v=function(e){return e?{month:e.getMonth()+1,year:e.getFullYear()}:null},b=function({month:e,year:t},r){const o=r>0?1:-1;for(let n=0;n<Math.abs(r);n++)e+=o,e>12?(e=1,t++):e<1&&(e=12,t--);return{month:e,year:t}},h=function(){return v(new Date)},p=function(){return b(h(),1)},g=function(){return b(h(),-1)},m=function(...e){return e.reduce((function(e,t){return e?t&&u(t,e)?t:e:t}))};function y(e,t){const r=Object(n["i"])(e),o=Object(n["i"])(t);return!r&&!o||r===o&&e.getTime()===t.getTime()}const x=function(e){return Object(n["h"])(e)&&e.length},w=function e(t,r){return t?r&&r(t)?t:e(t.parentElement,r):null},k=function(e,t){return!!w(e,(function(e){return e===t}))},O=function(e,t){let r=0,o=0;do{r+=e.offsetTop||0,o+=e.offsetLeft||0,e=e.offsetParent}while(e&&e!==t);return{top:r,left:o}},j=function(e,t,r){const o=[];return r.forEach((function(r){const c=r.name||r.toString(),a=r.mixin,s=r.validate;if(Object.prototype.hasOwnProperty.call(e,c)){const r=s?s(e[c]):e[c];t[c]=a&&Object(n["l"])(r)?i(i({},a),r):r,o.push(c)}})),{target:t,assigned:o.length?o:null}},D=function(e,t,r){e&&t&&r&&e.addEventListener(t,r,!1)},P=function(e,t,r){e&&t&&e.removeEventListener(t,r,!1)},M=function(e,t){return!!e&&!!t&&(e===t||e.contains(t))},S=function(e,t){" "!==e.key&&"Enter"!==e.key||(t(e),e.preventDefault())},E=function(){function e(){return(65536*(1+Math.random())|0).toString(16).substring(1)}return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`};function _(e){let t,r=0,o=0;if(0===e.length)return r;for(o=0;o<e.length;o++)t=e.charCodeAt(o),r=(r<<5)-r+t,r|=0;return r}},"2fcc":function(e,t){function r(e){var t=this.__data__,r=t["delete"](e);return this.size=t.size,r}e.exports=r},3092:function(e,t,r){var o=r("4284"),n=r("badf"),c=r("361d"),i=r("6747"),a=r("9aff");function s(e,t,r){var s=i(e)?o:c;return r&&a(e,t,r)&&(t=void 0),s(e,n(t,3))}e.exports=s},"30c9":function(e,t,r){var o=r("9520"),n=r("b218");function c(e){return null!=e&&n(e.length)&&!o(e)}e.exports=c},"32b3":function(e,t,r){var o=r("872a"),n=r("9638"),c=Object.prototype,i=c.hasOwnProperty;function a(e,t,r){var c=e[t];i.call(e,t)&&n(c,r)&&(void 0!==r||t in e)||o(e,t,r)}e.exports=a},"32e9":function(e,t,r){var o=r("86cc"),n=r("4630");e.exports=r("9e1e")?function(e,t,r){return o.f(e,t,n(1,r))}:function(e,t,r){return e[t]=r,e}},"32f4":function(e,t,r){var o=r("2d7c"),n=r("d327"),c=Object.prototype,i=c.propertyIsEnumerable,a=Object.getOwnPropertySymbols,s=a?function(e){return null==e?[]:(e=Object(e),o(a(e),(function(t){return i.call(e,t)})))}:n;e.exports=s},"34ac":function(e,t,r){var o=r("9520"),n=r("1368"),c=r("1a8c"),i=r("dc57"),a=/[\\^$.*+?()[\]{}|]/g,s=/^\[object .+?Constructor\]$/,d=Function.prototype,u=Object.prototype,l=d.toString,f=u.hasOwnProperty,v=RegExp("^"+l.call(f).replace(a,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function b(e){if(!c(e)||n(e))return!1;var t=o(e)?v:s;return t.test(i(e))}e.exports=b},"34e9":function(e,t,r){"use strict";(function(e){var o=r("bd86"),n=(r("ac6a"),r("2af9")),c=r("ed08");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(s.installed)return;s.installed=!0;const r=c["setupCalendar"](t);Object.entries(n).forEach((function([t,o]){e.component(`${r.componentPrefix}${t}`,o)}))}r.d(t,"c",(function(){return n["Calendar"]})),r.d(t,"d",(function(){return n["CalendarNav"]})),r.d(t,"f",(function(){return n["DatePicker"]})),r.d(t,"g",(function(){return n["Grid"]})),r.d(t,"i",(function(){return n["Popover"]})),r.d(t,"j",(function(){return n["PopoverRef"]})),r.d(t,"a",(function(){return c["Attribute"]})),r.d(t,"b",(function(){return c["AttributeStore"]})),r.d(t,"e",(function(){return c["DateInfo"]})),r.d(t,"h",(function(){return c["Locale"]})),r.d(t,"k",(function(){return c["addHorizontalSwipeHandler"]})),r.d(t,"l",(function(){return c["addPages"]})),r.d(t,"m",(function(){return c["addTapOrClickHandler"]})),r.d(t,"n",(function(){return c["arrayHasItems"]})),r.d(t,"o",(function(){return c["createGuid"]})),r.d(t,"p",(function(){return c["datesAreEqual"]})),r.d(t,"r",(function(){return c["elementContains"]})),r.d(t,"s",(function(){return c["elementHasAncestor"]})),r.d(t,"t",(function(){return c["elementPositionInAncestor"]})),r.d(t,"u",(function(){return c["evalFn"]})),r.d(t,"v",(function(){return c["findAncestor"]})),r.d(t,"w",(function(){return c["getMaxPage"]})),r.d(t,"x",(function(){return c["hash"]})),r.d(t,"y",(function(){return c["mixinOptionalProps"]})),r.d(t,"z",(function(){return c["off"]})),r.d(t,"A",(function(){return c["on"]})),r.d(t,"B",(function(){return c["onSpaceOrEnter"]})),r.d(t,"C",(function(){return c["pageForDate"]})),r.d(t,"D",(function(){return c["pageForNextMonth"]})),r.d(t,"E",(function(){return c["pageForPrevMonth"]})),r.d(t,"F",(function(){return c["pageForThisMonth"]})),r.d(t,"G",(function(){return c["pageIsAfterPage"]})),r.d(t,"H",(function(){return c["pageIsBeforePage"]})),r.d(t,"I",(function(){return c["pageIsBetweenPages"]})),r.d(t,"J",(function(){return c["pageIsEqualToPage"]})),r.d(t,"K",(function(){return c["pageIsValid"]})),r.d(t,"L",(function(){return c["setupCalendar"]}));const d=a(a({install:s},n),c);let u=null;"undefined"!==typeof window?u=window.Vue:"undefined"!==typeof e&&(u=e.Vue),u&&u.use(d),t["q"]=d}).call(this,r("c8ba"))},"35e8":function(e,t,r){var o=r("d9f6"),n=r("aebd");e.exports=r("8e60")?function(e,t,r){return o.f(e,t,n(1,r))}:function(e,t,r){return e[t]=r,e}},"361d":function(e,t,r){var o=r("48a0");function n(e,t){var r;return o(e,(function(e,o,n){return r=t(e,o,n),!r})),!!r}e.exports=n},3698:function(e,t){function r(e,t){return null==e?void 0:e[t]}e.exports=r},3729:function(e,t,r){var o=r("9e69"),n=r("00fd"),c=r("29f3"),i="[object Null]",a="[object Undefined]",s=o?o.toStringTag:void 0;function d(e){return null==e?void 0===e?a:i:s&&s in Object(e)?n(e):c(e)}e.exports=d},"375a":function(e,t,r){var o=r("b20a"),n=o((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()}));e.exports=n},3818:function(e,t,r){var o=r("7e64"),n=r("8057"),c=r("32b3"),i=r("5b01"),a=r("0f0f"),s=r("e538"),d=r("4359"),u=r("54eb"),l=r("1041"),f=r("a994"),v=r("1bac"),b=r("42a2"),h=r("c87c"),p=r("c2b6"),g=r("fa21"),m=r("6747"),y=r("0d24"),x=r("cc45"),w=r("1a8c"),k=r("d7ee"),O=r("ec69"),j=1,D=2,P=4,M="[object Arguments]",S="[object Array]",E="[object Boolean]",_="[object Date]",Y="[object Error]",C="[object Function]",I="[object GeneratorFunction]",$="[object Map]",A="[object Number]",T="[object Object]",L="[object RegExp]",F="[object Set]",N="[object String]",z="[object Symbol]",R="[object WeakMap]",V="[object ArrayBuffer]",H="[object DataView]",W="[object Float32Array]",B="[object Float64Array]",U="[object Int8Array]",G="[object Int16Array]",q="[object Int32Array]",K="[object Uint8Array]",Z="[object Uint8ClampedArray]",X="[object Uint16Array]",J="[object Uint32Array]",Q={};function ee(e,t,r,S,E,_){var Y,$=t&j,A=t&D,L=t&P;if(r&&(Y=E?r(e,S,E,_):r(e)),void 0!==Y)return Y;if(!w(e))return e;var F=m(e);if(F){if(Y=h(e),!$)return d(e,Y)}else{var N=b(e),z=N==C||N==I;if(y(e))return s(e,$);if(N==T||N==M||z&&!E){if(Y=A||z?{}:g(e),!$)return A?l(e,a(Y,e)):u(e,i(Y,e))}else{if(!Q[N])return E?e:{};Y=p(e,N,$)}}_||(_=new o);var R=_.get(e);if(R)return R;_.set(e,Y),k(e)?e.forEach((function(o){Y.add(ee(o,t,r,o,e,_))})):x(e)&&e.forEach((function(o,n){Y.set(n,ee(o,t,r,n,e,_))}));var V=L?A?v:f:A?keysIn:O,H=F?void 0:V(e);return n(H||e,(function(o,n){H&&(n=o,o=e[n]),c(Y,n,ee(o,t,r,n,e,_))})),Y}Q[M]=Q[S]=Q[V]=Q[H]=Q[E]=Q[_]=Q[W]=Q[B]=Q[U]=Q[G]=Q[q]=Q[$]=Q[A]=Q[T]=Q[L]=Q[F]=Q[N]=Q[z]=Q[K]=Q[Z]=Q[X]=Q[J]=!0,Q[Y]=Q[C]=Q[R]=!1,e.exports=ee},3846:function(e,t,r){r("9e1e")&&"g"!=/./g.flags&&r("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:r("0bfb")})},3852:function(e,t,r){var o=r("96f3"),n=r("e2c0");function c(e,t){return null!=e&&n(e,t,o)}e.exports=c},"386d":function(e,t,r){"use strict";var o=r("cb7c"),n=r("83a1"),c=r("5f1b");r("214f")("search",1,(function(e,t,r,i){return[function(r){var o=e(this),n=void 0==r?void 0:r[t];return void 0!==n?n.call(r,o):new RegExp(r)[t](String(o))},function(e){var t=i(r,e,this);if(t.done)return t.value;var a=o(e),s=String(this),d=a.lastIndex;n(d,0)||(a.lastIndex=0);var u=c(a,s);return n(a.lastIndex,d)||(a.lastIndex=d),null===u?-1:u.index}]}))},"38fd":function(e,t,r){var o=r("69a8"),n=r("4bf8"),c=r("613b")("IE_PROTO"),i=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=n(e),o(e,c)?e[c]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?i:null}},"39ff":function(e,t,r){var o=r("0b07"),n=r("2b3e"),c=o(n,"WeakMap");e.exports=c},"3b2b":function(e,t,r){var o=r("7726"),n=r("5dbc"),c=r("86cc").f,i=r("9093").f,a=r("aae3"),s=r("0bfb"),d=o.RegExp,u=d,l=d.prototype,f=/a/g,v=/a/g,b=new d(f)!==f;if(r("9e1e")&&(!b||r("79e5")((function(){return v[r("2b4c")("match")]=!1,d(f)!=f||d(v)==v||"/a/i"!=d(f,"i")})))){d=function(e,t){var r=this instanceof d,o=a(e),c=void 0===t;return!r&&o&&e.constructor===d&&c?e:n(b?new u(o&&!c?e.source:e,t):u((o=e instanceof d)?e.source:e,o&&c?s.call(e):t),r?this:l,d)};for(var h=function(e){e in d||c(d,e,{configurable:!0,get:function(){return u[e]},set:function(t){u[e]=t}})},p=i(u),g=0;p.length>g;)h(p[g++]);l.constructor=d,d.prototype=l,r("2aba")(o,"RegExp",d)}r("7a56")("RegExp")},"3b4a":function(e,t,r){var o=r("0b07"),n=function(){try{var e=o(Object,"defineProperty");return e({},"",{}),e}catch(t){}}();e.exports=n},"3bb4":function(e,t,r){var o=r("08cc"),n=r("ec69");function c(e){var t=n(e),r=t.length;while(r--){var c=t[r],i=e[c];t[r]=[c,i,o(i)]}return t}e.exports=c},"3d14":function(e,t,r){"use strict";var o=r("c724"),n=r.n(o);n.a},"3eea":function(e,t,r){var o=r("7948"),n=r("3818"),c=r("4bb5"),i=r("e2e4"),a=r("8eeb"),s=r("e0e7"),d=r("c6cf"),u=r("1bac"),l=1,f=2,v=4,b=d((function(e,t){var r={};if(null==e)return r;var d=!1;t=o(t,(function(t){return t=i(t,e),d||(d=t.length>1),t})),a(e,u(e),r),d&&(r=n(r,l|f|v,s));var b=t.length;while(b--)c(r,t[b]);return r}));e.exports=b},"3f84":function(e,t,r){var o=r("85e3"),n=r("100e"),c=r("e031"),i=r("2411"),a=n((function(e){return e.push(void 0,c),o(i,void 0,e)}));e.exports=a},"41a0":function(e,t,r){"use strict";var o=r("2aeb"),n=r("4630"),c=r("7f20"),i={};r("32e9")(i,r("2b4c")("iterator"),(function(){return this})),e.exports=function(e,t,r){e.prototype=o(i,{next:n(1,r)}),c(e,t+" Iterator")}},"41c3":function(e,t,r){var o=r("1a8c"),n=r("eac5"),c=r("ec8c"),i=Object.prototype,a=i.hasOwnProperty;function s(e){if(!o(e))return c(e);var t=n(e),r=[];for(var i in e)("constructor"!=i||!t&&a.call(e,i))&&r.push(i);return r}e.exports=s},4245:function(e,t,r){var o=r("1290");function n(e,t){var r=e.__data__;return o(t)?r["string"==typeof t?"string":"hash"]:r.map}e.exports=n},4284:function(e,t){function r(e,t){var r=-1,o=null==e?0:e.length;while(++r<o)if(t(e[r],r,e))return!0;return!1}e.exports=r},"42a2":function(e,t,r){var o=r("b5a7"),n=r("79bc"),c=r("1cec"),i=r("c869"),a=r("39ff"),s=r("3729"),d=r("dc57"),u="[object Map]",l="[object Object]",f="[object Promise]",v="[object Set]",b="[object WeakMap]",h="[object DataView]",p=d(o),g=d(n),m=d(c),y=d(i),x=d(a),w=s;(o&&w(new o(new ArrayBuffer(1)))!=h||n&&w(new n)!=u||c&&w(c.resolve())!=f||i&&w(new i)!=v||a&&w(new a)!=b)&&(w=function(e){var t=s(e),r=t==l?e.constructor:void 0,o=r?d(r):"";if(o)switch(o){case p:return h;case g:return u;case m:return f;case y:return v;case x:return b}return t}),e.exports=w},4359:function(e,t){function r(e,t){var r=-1,o=e.length;t||(t=Array(o));while(++r<o)t[r]=e[r];return t}e.exports=r},4416:function(e,t){function r(e){var t=null==e?0:e.length;return t?e[t-1]:void 0}e.exports=r},"454f":function(e,t,r){r("46a7");var o=r("584a").Object;e.exports=function(e,t,r){return o.defineProperty(e,t,r)}},4588:function(e,t){var r=Math.ceil,o=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?o:r)(e)}},4630:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"46a7":function(e,t,r){var o=r("63b6");o(o.S+o.F*!r("8e60"),"Object",{defineProperty:r("d9f6").f})},"47f5":function(e,t,r){var o=r("2b03"),n=r("d9a8"),c=r("099a");function i(e,t,r){return t===t?c(e,t,r):o(e,n,r)}e.exports=i},"48a0":function(e,t,r){var o=r("242e"),n=r("950a"),c=n(o);e.exports=c},4917:function(e,t,r){"use strict";var o=r("cb7c"),n=r("9def"),c=r("0390"),i=r("5f1b");r("214f")("match",1,(function(e,t,r,a){return[function(r){var o=e(this),n=void 0==r?void 0:r[t];return void 0!==n?n.call(r,o):new RegExp(r)[t](String(o))},function(e){var t=a(r,e,this);if(t.done)return t.value;var s=o(e),d=String(this);if(!s.global)return i(s,d);var u=s.unicode;s.lastIndex=0;var l,f=[],v=0;while(null!==(l=i(s,d))){var b=String(l[0]);f[v]=b,""===b&&(s.lastIndex=c(d,n(s.lastIndex),u)),v++}return 0===v?null:f}]}))},"499e":function(e,t,r){"use strict";function o(e,t){for(var r=[],o={},n=0;n<t.length;n++){var c=t[n],i=c[0],a=c[1],s=c[2],d=c[3],u={id:e+":"+n,css:a,media:s,sourceMap:d};o[i]?o[i].parts.push(u):r.push(o[i]={id:i,parts:[u]})}return r}r.r(t),r.d(t,"default",(function(){return b}));var n="undefined"!==typeof document;if("undefined"!==typeof DEBUG&&DEBUG&&!n)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c={},i=n&&(document.head||document.getElementsByTagName("head")[0]),a=null,s=0,d=!1,u=function(){},l=null,f="data-vue-ssr-id",v="undefined"!==typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function b(e,t,r,n){d=r,l=n||{};var i=o(e,t);return h(i),function(t){for(var r=[],n=0;n<i.length;n++){var a=i[n],s=c[a.id];s.refs--,r.push(s)}t?(i=o(e,t),h(i)):i=[];for(n=0;n<r.length;n++){s=r[n];if(0===s.refs){for(var d=0;d<s.parts.length;d++)s.parts[d]();delete c[s.id]}}}}function h(e){for(var t=0;t<e.length;t++){var r=e[t],o=c[r.id];if(o){o.refs++;for(var n=0;n<o.parts.length;n++)o.parts[n](r.parts[n]);for(;n<r.parts.length;n++)o.parts.push(g(r.parts[n]));o.parts.length>r.parts.length&&(o.parts.length=r.parts.length)}else{var i=[];for(n=0;n<r.parts.length;n++)i.push(g(r.parts[n]));c[r.id]={id:r.id,refs:1,parts:i}}}}function p(){var e=document.createElement("style");return e.type="text/css",i.appendChild(e),e}function g(e){var t,r,o=document.querySelector("style["+f+'~="'+e.id+'"]');if(o){if(d)return u;o.parentNode.removeChild(o)}if(v){var n=s++;o=a||(a=p()),t=y.bind(null,o,n,!1),r=y.bind(null,o,n,!0)}else o=p(),t=x.bind(null,o),r=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else r()}}var m=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}();function y(e,t,r,o){var n=r?"":o.css;if(e.styleSheet)e.styleSheet.cssText=m(t,n);else{var c=document.createTextNode(n),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(c,i[t]):e.appendChild(c)}}function x(e,t){var r=t.css,o=t.media,n=t.sourceMap;if(o&&e.setAttribute("media",o),l.ssrId&&e.setAttribute(f,t.id),n&&(r+="\n/*# sourceURL="+n.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{while(e.firstChild)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}},"49e7":function(e,t,r){t=e.exports=r("2350")(!1),t.push([e.i,".vc-svg-icon[data-v-63f7b5ec]{display:inline-block;stroke:currentColor;stroke-width:0}.vc-svg-icon path[data-v-63f7b5ec]{fill:currentColor}",""])},"49f4":function(e,t,r){var o=r("6044");function n(){this.__data__=o?o(null):{},this.size=0}e.exports=n},"4bb5":function(e,t,r){var o=r("e2e4"),n=r("4416"),c=r("8296"),i=r("f4d6");function a(e,t){return t=o(t,e),e=c(e,t),null==e||delete e[i(n(t))]}e.exports=a},"4bf8":function(e,t,r){var o=r("be13");e.exports=function(e){return Object(o(e))}},"4caa":function(e,t,r){var o=r("a919"),n=r("76dd"),c=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i="\\u0300-\\u036f",a="\\ufe20-\\ufe2f",s="\\u20d0-\\u20ff",d=i+a+s,u="["+d+"]",l=RegExp(u,"g");function f(e){return e=n(e),e&&e.replace(c,o).replace(l,"")}e.exports=f},"4cfe":function(e,t){function r(e){return void 0===e}e.exports=r},"4d8c":function(e,t,r){var o=r("5c69");function n(e){var t=null==e?0:e.length;return t?o(e,1):[]}e.exports=n},"4f50":function(e,t,r){var o=r("b760"),n=r("e538"),c=r("c8fe"),i=r("4359"),a=r("fa21"),s=r("d370"),d=r("6747"),u=r("dcbe"),l=r("0d24"),f=r("9520"),v=r("1a8c"),b=r("60ed"),h=r("73ac"),p=r("8adb"),g=r("8de2");function m(e,t,r,m,y,x,w){var k=p(e,r),O=p(t,r),j=w.get(O);if(j)o(e,r,j);else{var D=x?x(k,O,r+"",e,t,w):void 0,P=void 0===D;if(P){var M=d(O),S=!M&&l(O),E=!M&&!S&&h(O);D=O,M||S||E?d(k)?D=k:u(k)?D=i(k):S?(P=!1,D=n(O,!0)):E?(P=!1,D=c(O,!0)):D=[]:b(O)||s(O)?(D=k,s(k)?D=g(k):v(k)&&!f(k)||(D=a(O))):P=!1}P&&(w.set(O,D),y(D,O,m,x,w),w["delete"](O)),o(e,r,D)}}e.exports=m},"501e":function(e,t,r){var o=r("3729"),n=r("1310"),c="[object Number]";function i(e){return"number"==typeof e||n(e)&&o(e)==c}e.exports=i},"50d8":function(e,t){function r(e,t){var r=-1,o=Array(e);while(++r<e)o[r]=t(r);return o}e.exports=r},"51ec":function(e,t,r){"use strict";r.d(t,"b",(function(){return v})),r.d(t,"a",(function(){return b}));var o=r("8bbf"),n=r.n(o),c=r("9404"),i=r("23a5"),a=r("7efe"),s=r("85a9"),d=r("5ca5"),u=r("f15d");const l={componentPrefix:"v",navVisibility:"click",titlePosition:"center",transition:"slide-h",touch:i,masks:a,screens:s,theme:d["a"],locales:u["a"],datePicker:{updateOnInput:!0,inputDebounce:1e3,popover:{visibility:"hover-focus",placement:"bottom-start",keepVisibleOnInput:!1}}};let f=null;const v=function(e){return f||(f=new n.a({data(){return{defaults:Object(c["c"])(e,l)}},computed:{locales(){var e=this;return Object(c["q"])(this.defaults.locales,(function(t){return t.masks=Object(c["c"])(t.masks,e.defaults.masks),t}))}}})),f.defaults},b={beforeCreate(){v()},computed:{$defaults(){return f.defaults},$locales(){return f.locales}}}},"520a":function(e,t,r){"use strict";var o=r("0bfb"),n=RegExp.prototype.exec,c=String.prototype.replace,i=n,a="lastIndex",s=function(){var e=/a/,t=/b*/g;return n.call(e,"a"),n.call(t,"a"),0!==e[a]||0!==t[a]}(),d=void 0!==/()??/.exec("")[1],u=s||d;u&&(i=function(e){var t,r,i,u,l=this;return d&&(r=new RegExp("^"+l.source+"$(?!\\s)",o.call(l))),s&&(t=l[a]),i=n.call(l,e),s&&i&&(l[a]=l.global?i.index+i[0].length:t),d&&i&&i.length>1&&c.call(i[0],r,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(i[u]=void 0)})),i}),e.exports=i},"52a7":function(e,t){t.f={}.propertyIsEnumerable},"54eb":function(e,t,r){var o=r("8eeb"),n=r("32f4");function c(e,t){return o(e,n(e),t)}e.exports=c},5537:function(e,t,r){var o=r("8378"),n=r("7726"),c="__core-js_shared__",i=n[c]||(n[c]={});(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:o.version,mode:r("2d00")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},"55a3":function(e,t){function r(e){return this.__data__.has(e)}e.exports=r},"57a5":function(e,t,r){var o=r("91e9"),n=o(Object.keys,Object);e.exports=n},"584a":function(e,t){var r=e.exports={version:"2.6.11"};"number"==typeof __e&&(__e=r)},"585a":function(e,t,r){(function(t){var r="object"==typeof t&&t&&t.Object===Object&&t;e.exports=r}).call(this,r("c8ba"))},"5b01":function(e,t,r){var o=r("8eeb"),n=r("ec69");function c(e,t){return e&&o(t,n(t),e)}e.exports=c},"5c69":function(e,t,r){var o=r("087d"),n=r("0621");function c(e,t,r,i,a){var s=-1,d=e.length;r||(r=n),a||(a=[]);while(++s<d){var u=e[s];t>0&&r(u)?t>1?c(u,t-1,r,i,a):o(a,u):i||(a[a.length]=u)}return a}e.exports=c},"5ca1":function(e,t,r){var o=r("7726"),n=r("8378"),c=r("32e9"),i=r("2aba"),a=r("9b43"),s="prototype",d=function(e,t,r){var u,l,f,v,b=e&d.F,h=e&d.G,p=e&d.S,g=e&d.P,m=e&d.B,y=h?o:p?o[t]||(o[t]={}):(o[t]||{})[s],x=h?n:n[t]||(n[t]={}),w=x[s]||(x[s]={});for(u in h&&(r=t),r)l=!b&&y&&void 0!==y[u],f=(l?y:r)[u],v=m&&l?a(f,o):g&&"function"==typeof f?a(Function.call,f):f,y&&i(y,u,f,e&d.U),x[u]!=f&&c(x,u,v),g&&w[u]!=f&&(w[u]=f)};o.core=n,d.F=1,d.G=2,d.S=4,d.P=8,d.B=16,d.W=32,d.U=64,d.R=128,e.exports=d},"5ca5":function(e,t,r){"use strict";t["a"]={color:"blue",isDark:!1,container:{light:"vc-text-gray-900 vc-bg-white vc-border vc-border-gray-400 vc-rounded-lg",dark:"vc-text-gray-200 vc-bg-gray-900 vc-border vc-border-gray-700 vc-rounded-lg"},header:{light:"vc-text-gray-900",dark:"vc-text-gray-200"},title:{light:"vc-text-lg vc-text-gray-800 vc-font-semibold hover:vc-opacity-75",dark:"vc-text-lg vc-text-gray-100 vc-font-semibold hover:vc-opacity-75"},arrows:{light:"vc-text-gray-600 vc-rounded vc-border-2 vc-border-transparent hover:vc-opacity-50 hover:vc-bg-gray-300 focus:vc-border-gray-300",dark:"vc-text-white vc-rounded vc-border-2 vc-border-transparent hover:vc-opacity-50 focus:vc-border-gray-700"},weekdays:{light:"vc-text-sm vc-font-bold vc-text-gray-500",dark:"vc-text-sm vc-font-bold vc-text-{color}-200"},navPopoverContainer:{light:"vc-rounded-lg vc-text-sm vc-font-semibold vc-text-white vc-bg-gray-800 vc-border vc-border-gray-700 vc-p-1 vc-shadow",dark:"vc-rounded-lg vc-text-sm vc-font-semibold vc-text-gray-800 vc-bg-white vc-border vc-border-gray-100 vc-p-1 vc-shadow"},navTitle:{light:"vc-text-{color}-100 vc-font-bold vc-leading-snug vc-px-2 vc-py-1 vc-rounded vc-border-2 vc-border-transparent hover:vc-bg-gray-900 focus:vc-border-{color}-600",dark:"vc-text-gray-900 vc-font-bold vc-leading-snug vc-px-2 vc-py-1 vc-rounded vc-border-2 vc-border-transparent hover:vc-bg-gray-200 focus:vc-border-{color}-400"},navArrows:{light:"vc-leading-snug vc-rounded vc-border-2 vc-border-transparent hover:vc-bg-gray-900 focus:vc-border-{color}-600",dark:"vc-leading-snug vc-rounded vc-border-2 vc-border-transparent hover:vc-bg-gray-200 focus:vc-border-{color}-400"},navCell:{light:"vc-w-12 vc-font-semibold vc-cursor-pointer vc-text-center vc-leading-snug vc-py-1 vc-rounded vc-border-2 vc-border-transparent hover:vc-bg-gray-900 hover:vc-shadow-inner hover:vc-text-white focus:vc-border-{color}-600",dark:"vc-w-12 vc-font-semibold vc-cursor-pointer vc-text-center vc-leading-snug vc-py-1 vc-rounded vc-border-2 vc-border-transparent hover:vc-bg-gray-200 hover:vc-text-gray-900 focus:vc-border-{color}-400"},navCellInactive:"vc-border-transparent",navCellInactiveCurrent:{light:"vc-text-{color}-100 vc-font-bold vc-border-{color}-100",dark:"vc-text-{color}-600 vc-font-bold vc-border-{color}-500"},navCellActive:{light:"vc-bg-{color}-100 vc-text-{color}-900 vc-border-transparent vc-font-bold vc-shadow",dark:"vc-bg-{color}-500 vc-text-white vc-border-transparent vc-font-bold vc-shadow"},dayNotInMonth:"vc-opacity-0 vc-pointer-events-none",dayContent:"vc-font-medium vc-text-sm vc-cursor-pointer focus:vc-font-bold vc-rounded-full",dayContentDisabled:{light:"vc-text-gray-400",dark:"vc-text-gray-600"},dayPopoverContainer:{light:"vc-rounded vc-text-xs vc-text-white vc-font-medium vc-bg-gray-800 vc-border vc-border-gray-700 vc-px-2 vc-py-1 vc-shadow",dark:"vc-rounded vc-text-xs vc-text-gray-900 vc-font-medium vc-bg-white vc-border vc-border-gray-200 vc-px-2 vc-py-1 vc-shadow"},dayPopoverHeader:{light:"vc-text-xs vc-text-gray-300 vc-font-semibold",dark:"vc-text-xs vc-text-gray-700 vc-font-semibold"},highlightBaseFillMode:"light",highlightStartEndFillMode:"solid",highlightStartEndClass:"vc-rounded-full",bgLow:{light:"vc-bg-white vc-border-2 vc-border-{color}-700",dark:"vc-bg-gray-900 vc-border-2 vc-border-{color}-200"},bgAccentLow:{light:"vc-bg-{color}-200",dark:"vc-bg-{color}-800 vc-opacity-75"},bgAccentHigh:{light:"vc-bg-{color}-600",dark:"vc-bg-{color}-500"},contentAccent:{light:"vc-font-bold vc-text-{color}-900",dark:"vc-font-bold vc-text-{color}-100"},contentAccentContrast:"vc-font-bold vc-text-white",datePickerInput:"vc-appearance-none vc-text-base vc-text-gray-800 vc-bg-white vc-border vc-border-gray-400 vc-rounded vc-w-full vc-py-2 vc-px-3 vc-leading-tight focus:vc-outline-none focus:vc-shadow",datePickerInputDrag:"vc-appearance-none vc-text-base vc-text-gray-500 vc-bg-white vc-border vc-border-gray-400 vc-rounded vc-w-full vc-py-2 vc-px-3 vc-leading-tight focus:vc-outline-none focus:vc-shadow"}},"5cab":function(e,t,r){var o=r("961c");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=r("499e").default;n("bce10684",o,!0,{sourceMap:!1,shadowMode:!1})},"5d89":function(e,t,r){var o=r("f8af");function n(e,t){var r=t?o(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}e.exports=n},"5dbc":function(e,t,r){var o=r("d3f4"),n=r("8b97").set;e.exports=function(e,t,r){var c,i=t.constructor;return i!==r&&"function"==typeof i&&(c=i.prototype)!==r.prototype&&o(c)&&n&&n(e,c),e}},"5e2e":function(e,t,r){var o=r("28c9"),n=r("69d5"),c=r("b4c0"),i=r("fba5"),a=r("67ca");function s(e){var t=-1,r=null==e?0:e.length;this.clear();while(++t<r){var o=e[t];this.set(o[0],o[1])}}s.prototype.clear=o,s.prototype["delete"]=n,s.prototype.get=c,s.prototype.has=i,s.prototype.set=a,e.exports=s},"5edf":function(e,t){function r(e,t,r){var o=-1,n=null==e?0:e.length;while(++o<n)if(r(t,e[o]))return!0;return!1}e.exports=r},"5f1b":function(e,t,r){"use strict";var o=r("23c6"),n=RegExp.prototype.exec;e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var c=r.call(e,t);if("object"!==typeof c)throw new TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==o(e))throw new TypeError("RegExp#exec called on incompatible receiver");return n.call(e,t)}},"5fa8":function(e,t,r){t=e.exports=r("2350")(!1),t.push([e.i,"[data-v-56ae83be] .vc-container{border:none}",""])},6044:function(e,t,r){var o=r("0b07"),n=o(Object,"create");e.exports=n},"60ed":function(e,t,r){var o=r("3729"),n=r("2dcb"),c=r("1310"),i="[object Object]",a=Function.prototype,s=Object.prototype,d=a.toString,u=s.hasOwnProperty,l=d.call(Object);function f(e){if(!c(e)||o(e)!=i)return!1;var t=n(e);if(null===t)return!0;var r=u.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&d.call(r)==l}e.exports=f},"613b":function(e,t,r){var o=r("5537")("keys"),n=r("ca5a");e.exports=function(e){return o[e]||(o[e]=n(e))}},6220:function(e,t,r){var o=r("b1d2"),n=r("b047"),c=r("99d3"),i=c&&c.isDate,a=i?n(i):o;e.exports=a},"626a":function(e,t,r){var o=r("2d95");e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==o(e)?e.split(""):Object(e)}},"62e4":function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},6300:function(e,t,r){var o=r("5fa8");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=r("499e").default;n("896f0928",o,!0,{sourceMap:!1,shadowMode:!1})},"63b6":function(e,t,r){var o=r("e53d"),n=r("584a"),c=r("d864"),i=r("35e8"),a=r("07e3"),s="prototype",d=function(e,t,r){var u,l,f,v=e&d.F,b=e&d.G,h=e&d.S,p=e&d.P,g=e&d.B,m=e&d.W,y=b?n:n[t]||(n[t]={}),x=y[s],w=b?o:h?o[t]:(o[t]||{})[s];for(u in b&&(r=t),r)l=!v&&w&&void 0!==w[u],l&&a(y,u)||(f=l?w[u]:r[u],y[u]=b&&"function"!=typeof w[u]?r[u]:g&&l?c(f,o):m&&w[u]==f?function(e){var t=function(t,r,o){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,r)}return new e(t,r,o)}return e.apply(this,arguments)};return t[s]=e[s],t}(f):p&&"function"==typeof f?c(Function.call,f):f,p&&((y.virtual||(y.virtual={}))[u]=f,e&d.R&&x&&!x[u]&&i(x,u,f)))};d.F=1,d.G=2,d.S=4,d.P=8,d.B=16,d.W=32,d.U=64,d.R=128,e.exports=d},"642a":function(e,t,r){var o=r("966f"),n=r("3bb4"),c=r("20ec");function i(e){var t=n(e);return 1==t.length&&t[0][2]?c(t[0][0],t[0][1]):function(r){return r===e||o(r,e,t)}}e.exports=i},"656b":function(e,t,r){var o=r("e2e4"),n=r("f4d6");function c(e,t){t=o(t,e);var r=0,c=t.length;while(null!=e&&r<c)e=e[n(t[r++])];return r&&r==c?e:void 0}e.exports=c},6679:function(e,t,r){var o=r("3729"),n=r("1310"),c="[object Boolean]";function i(e){return!0===e||!1===e||n(e)&&o(e)==c}e.exports=i},6747:function(e,t){var r=Array.isArray;e.exports=r},"67ca":function(e,t,r){var o=r("cb5a");function n(e,t){var r=this.__data__,n=o(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}e.exports=n},6821:function(e,t,r){var o=r("626a"),n=r("be13");e.exports=function(e){return o(n(e))}},"694d":function(e,t,r){t=e.exports=r("2350")(!1),t.push([e.i,".vc-container{--slide-translate:22px;--slide-duration:0.15s;--slide-timing:ease;--header-padding:10px 10px 0 10px;--title-padding:0 8px;--arrows-padding:8px 10px;--arrow-font-size:26px;--weekday-padding:5px 0;--weeks-padding:5px 6px 7px 6px;--nav-container-width:170px;--day-min-height:28px;--day-content-width:28px;--day-content-height:28px;--day-content-margin:1.6px auto;--day-content-transition-time:0.13s ease-in;--day-content-bg-color-hover:rgba(204,214,224,0.3);--day-content-dark-bg-color-hover:rgba(114,129,151,0.3);--day-content-bg-color-focus:rgba(204,214,224,0.4);--day-content-dark-bg-color-focus:rgba(114,129,151,0.4);--highlight-height:28px;--dot-diameter:5px;--dot-border-radius:50%;--dot-spacing:3px;--bar-height:3px;--bars-width:75%;font-family:BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;position:relative;width:-webkit-max-content;width:max-content;-webkit-tap-highlight-color:transparent}.vc-arrows-container{width:100%;position:absolute;top:0;display:flex;justify-content:space-between;padding:var(--arrows-padding);pointer-events:none}.vc-arrows-container.title-left{justify-content:flex-end}.vc-arrows-container.title-right{justify-content:flex-start}",""])},"69a8":function(e,t){var r={}.hasOwnProperty;e.exports=function(e,t){return r.call(e,t)}},"69d5":function(e,t,r){var o=r("cb5a"),n=Array.prototype,c=n.splice;function i(e){var t=this.__data__,r=o(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():c.call(t,r,1),--this.size,!0}e.exports=i},"6a99":function(e,t,r){var o=r("d3f4");e.exports=function(e,t){if(!o(e))return e;var r,n;if(t&&"function"==typeof(r=e.toString)&&!o(n=r.call(e)))return n;if("function"==typeof(r=e.valueOf)&&!o(n=r.call(e)))return n;if(!t&&"function"==typeof(r=e.toString)&&!o(n=r.call(e)))return n;throw TypeError("Can't convert object to primitive value")}},"6ac0":function(e,t){function r(e,t,r,o){var n=-1,c=null==e?0:e.length;o&&c&&(r=e[++n]);while(++n<c)r=t(r,e[n],n,e);return r}e.exports=r},"6b54":function(e,t,r){"use strict";r("3846");var o=r("cb7c"),n=r("0bfb"),c=r("9e1e"),i="toString",a=/./[i],s=function(e){r("2aba")(RegExp.prototype,i,e,!0)};r("79e5")((function(){return"/a/b"!=a.call({source:"a",flags:"b"})}))?s((function(){var e=o(this);return"/".concat(e.source,"/","flags"in e?e.flags:!c&&e instanceof RegExp?n.call(e):void 0)})):a.name!=i&&s((function(){return a.call(this)}))},"6da8":function(e,t){function r(e){return e.split("")}e.exports=r},"6f6a":function(e,t,r){var o=r("ee59");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=r("499e").default;n("5ac13234",o,!0,{sourceMap:!1,shadowMode:!1})},"6f6c":function(e,t){var r=/\w*$/;function o(e){var t=new e.constructor(e.source,r.exec(e));return t.lastIndex=e.lastIndex,t}e.exports=o},"6fcd":function(e,t,r){var o=r("50d8"),n=r("d370"),c=r("6747"),i=r("0d24"),a=r("c098"),s=r("73ac"),d=Object.prototype,u=d.hasOwnProperty;function l(e,t){var r=c(e),d=!r&&n(e),l=!r&&!d&&i(e),f=!r&&!d&&!l&&s(e),v=r||d||l||f,b=v?o(e.length,String):[],h=b.length;for(var p in e)!t&&!u.call(e,p)||v&&("length"==p||l&&("offset"==p||"parent"==p)||f&&("buffer"==p||"byteLength"==p||"byteOffset"==p)||a(p,h))||b.push(p);return b}e.exports=l},"72af":function(e,t,r){var o=r("99cd"),n=o();e.exports=n},"72f0":function(e,t){function r(e){return function(){return e}}e.exports=r},7365:function(e,t,r){"use strict";var o=r("87e8"),n=r.n(o);n.a},"73ac":function(e,t,r){var o=r("743f"),n=r("b047"),c=r("99d3"),i=c&&c.isTypedArray,a=i?n(i):o;e.exports=a},"743f":function(e,t,r){var o=r("3729"),n=r("b218"),c=r("1310"),i="[object Arguments]",a="[object Array]",s="[object Boolean]",d="[object Date]",u="[object Error]",l="[object Function]",f="[object Map]",v="[object Number]",b="[object Object]",h="[object RegExp]",p="[object Set]",g="[object String]",m="[object WeakMap]",y="[object ArrayBuffer]",x="[object DataView]",w="[object Float32Array]",k="[object Float64Array]",O="[object Int8Array]",j="[object Int16Array]",D="[object Int32Array]",P="[object Uint8Array]",M="[object Uint8ClampedArray]",S="[object Uint16Array]",E="[object Uint32Array]",_={};function Y(e){return c(e)&&n(e.length)&&!!_[o(e)]}_[w]=_[k]=_[O]=_[j]=_[D]=_[P]=_[M]=_[S]=_[E]=!0,_[i]=_[a]=_[y]=_[s]=_[x]=_[d]=_[u]=_[l]=_[f]=_[v]=_[b]=_[h]=_[p]=_[g]=_[m]=!1,e.exports=Y},"750a":function(e,t,r){var o=r("c869"),n=r("bcdf"),c=r("ac41"),i=1/0,a=o&&1/c(new o([,-0]))[1]==i?function(e){return new o(e)}:n;e.exports=a},7530:function(e,t,r){var o=r("1a8c"),n=Object.create,c=function(){function e(){}return function(t){if(!o(t))return{};if(n)return n(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();e.exports=c},7559:function(e,t){var r=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function o(e){return e.match(r)||[]}e.exports=o},"76dd":function(e,t,r){var o=r("ce86");function n(e){return null==e?"":o(e)}e.exports=n},7726:function(e,t){var r=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},"77f1":function(e,t,r){var o=r("4588"),n=Math.max,c=Math.min;e.exports=function(e,t){return e=o(e),e<0?n(e+t,0):c(e,t)}},7948:function(e,t){function r(e,t){var r=-1,o=null==e?0:e.length,n=Array(o);while(++r<o)n[r]=t(e[r],r,e);return n}e.exports=r},"794b":function(e,t,r){e.exports=!r("8e60")&&!r("294c")((function(){return 7!=Object.defineProperty(r("1ec9")("div"),"a",{get:function(){return 7}}).a}))},"79aa":function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},"79bc":function(e,t,r){var o=r("0b07"),n=r("2b3e"),c=o(n,"Map");e.exports=c},"79e5":function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},"7a48":function(e,t,r){var o=r("6044"),n=Object.prototype,c=n.hasOwnProperty;function i(e){var t=this.__data__;return o?void 0!==t[e]:c.call(t,e)}e.exports=i},"7a56":function(e,t,r){"use strict";var o=r("7726"),n=r("86cc"),c=r("9e1e"),i=r("2b4c")("species");e.exports=function(e){var t=o[e];c&&t&&!t[i]&&n.f(t,i,{configurable:!0,get:function(){return this}})}},"7b83":function(e,t,r){var o=r("7c64"),n=r("93ed"),c=r("2478"),i=r("a524"),a=r("1fc8");function s(e){var t=-1,r=null==e?0:e.length;this.clear();while(++t<r){var o=e[t];this.set(o[0],o[1])}}s.prototype.clear=o,s.prototype["delete"]=n,s.prototype.get=c,s.prototype.has=i,s.prototype.set=a,e.exports=s},"7b97":function(e,t,r){var o=r("7e64"),n=r("a2be"),c=r("1c3c"),i=r("b1e5"),a=r("42a2"),s=r("6747"),d=r("0d24"),u=r("73ac"),l=1,f="[object Arguments]",v="[object Array]",b="[object Object]",h=Object.prototype,p=h.hasOwnProperty;function g(e,t,r,h,g,m){var y=s(e),x=s(t),w=y?v:a(e),k=x?v:a(t);w=w==f?b:w,k=k==f?b:k;var O=w==b,j=k==b,D=w==k;if(D&&d(e)){if(!d(t))return!1;y=!0,O=!1}if(D&&!O)return m||(m=new o),y||u(e)?n(e,t,r,h,g,m):c(e,t,w,r,h,g,m);if(!(r&l)){var P=O&&p.call(e,"__wrapped__"),M=j&&p.call(t,"__wrapped__");if(P||M){var S=P?e.value():e,E=M?t.value():t;return m||(m=new o),g(S,E,r,h,m)}}return!!D&&(m||(m=new o),i(e,t,r,h,g,m))}e.exports=g},"7c64":function(e,t,r){var o=r("e24b"),n=r("5e2e"),c=r("79bc");function i(){this.size=0,this.__data__={hash:new o,map:new(c||n),string:new o}}e.exports=i},"7d1f":function(e,t,r){var o=r("087d"),n=r("6747");function c(e,t,r){var c=t(e);return n(e)?c:o(c,r(e))}e.exports=c},"7e64":function(e,t,r){var o=r("5e2e"),n=r("efb6"),c=r("2fcc"),i=r("802a"),a=r("55a3"),s=r("d02c");function d(e){var t=this.__data__=new o(e);this.size=t.size}d.prototype.clear=n,d.prototype["delete"]=c,d.prototype.get=i,d.prototype.has=a,d.prototype.set=s,e.exports=d},"7e8e":function(e,t){var r=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function o(e){return r.test(e)}e.exports=o},"7ed2":function(e,t){var r="__lodash_hash_undefined__";function o(e){return this.__data__.set(e,r),this}e.exports=o},"7efe":function(e){e.exports=JSON.parse('{"title":"MMMM YYYY","weekdays":"W","navMonths":"MMM","input":["L","YYYY-MM-DD","YYYY/MM/DD"],"dayPopover":"WWW, MMM D, YYYY","data":["L","YYYY-MM-DD","YYYY/MM/DD"]}')},"7f20":function(e,t,r){var o=r("86cc").f,n=r("69a8"),c=r("2b4c")("toStringTag");e.exports=function(e,t,r){e&&!n(e=r?e:e.prototype,c)&&o(e,c,{configurable:!0,value:t})}},"802a":function(e,t){function r(e){return this.__data__.get(e)}e.exports=r},8057:function(e,t){function r(e,t){var r=-1,o=null==e?0:e.length;while(++r<o)if(!1===t(e[r],r,e))break;return e}e.exports=r},8103:function(e,t,r){var o=r("d194"),n=o("toUpperCase");e.exports=n},8296:function(e,t,r){var o=r("656b"),n=r("2b10");function c(e,t){return t.length<2?e:o(e,n(t,0,-1))}e.exports=c},8378:function(e,t){var r=e.exports={version:"2.6.11"};"number"==typeof __e&&(__e=r)},8384:function(e,t){function r(e,t,r){return e===e&&(void 0!==r&&(e=e<=r?e:r),void 0!==t&&(e=e>=t?e:t)),e}e.exports=r},"83a1":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"84f2":function(e,t){e.exports={}},"85a9":function(e){e.exports=JSON.parse('{"sm":"640px","md":"768px","lg":"1024px","xl":"1280px"}')},"85e3":function(e,t){function r(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}e.exports=r},"85f2":function(e,t,r){e.exports=r("454f")},8604:function(e,t,r){var o=r("26e8"),n=r("e2c0");function c(e,t){return null!=e&&n(e,t,o)}e.exports=c},"86aa":function(e,t,r){"use strict";var o=r("9349"),n=r.n(o);n.a},"86cc":function(e,t,r){var o=r("cb7c"),n=r("c69a"),c=r("6a99"),i=Object.defineProperty;t.f=r("9e1e")?Object.defineProperty:function(e,t,r){if(o(e),t=c(t,!0),o(r),n)try{return i(e,t,r)}catch(a){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e}},"872a":function(e,t,r){var o=r("3b4a");function n(e,t,r){"__proto__"==t&&o?o(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}e.exports=n},"87e8":function(e,t,r){var o=r("c631");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=r("499e").default;n("475a7ea0",o,!0,{sourceMap:!1,shadowMode:!1})},"89d9":function(e,t,r){var o=r("656b"),n=r("159a"),c=r("e2e4");function i(e,t,r){var i=-1,a=t.length,s={};while(++i<a){var d=t[i],u=o(e,d);r(u,d)&&n(s,c(d,e),u)}return s}e.exports=i},"8adb":function(e,t){function r(e,t){if(("constructor"!==t||"function"!==typeof e[t])&&"__proto__"!=t)return e[t]}e.exports=r},"8b97":function(e,t,r){var o=r("d3f4"),n=r("cb7c"),c=function(e,t){if(n(e),!o(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,o){try{o=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),o(e,[]),t=!(e instanceof Array)}catch(n){t=!0}return function(e,r){return c(e,r),t?e.__proto__=r:o(e,r),e}}({},!1):void 0),check:c}},"8bbf":function(t,r){t.exports=e},"8c86":function(e,t,r){"use strict";function o(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}r.d(t,"a",(function(){return o}))},"8db3":function(e,t,r){var o=r("47f5");function n(e,t){var r=null==e?0:e.length;return!!r&&o(e,t,0)>-1}e.exports=n},"8de2":function(e,t,r){var o=r("8eeb"),n=r("9934");function c(e){return o(e,n(e))}e.exports=c},"8e60":function(e,t,r){e.exports=!r("294c")((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},"8eeb":function(e,t,r){var o=r("32b3"),n=r("872a");function c(e,t,r,c){var i=!r;r||(r={});var a=-1,s=t.length;while(++a<s){var d=t[a],u=c?c(r[d],e[d],d,r,e):void 0;void 0===u&&(u=e[d]),i?n(r,d,u):o(r,d,u)}return r}e.exports=c},9010:function(e,t,r){"use strict";var o=r("9740"),n=r.n(o);n.a},9093:function(e,t,r){var o=r("ce10"),n=r("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return o(e,n)}},"91e9":function(e,t){function r(e,t){return function(r){return e(t(r))}}e.exports=r},9349:function(e,t,r){var o=r("b6dd");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=r("499e").default;n("f4e80066",o,!0,{sourceMap:!1,shadowMode:!1})},93495:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var o=r("bd86"),n=(r("6b54"),r("ac6a"),r("22f3")),c=r("2fa3");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}class s{constructor(e,t,r){this.theme=e,this.locale=t,this.map={},this.refresh(r,!0)}refresh(e,t){var r=this;const o={},i=[];let s=null;const d=[],u=t?new Set:new Set(Object.keys(this.map));return Object(c["b"])(e)&&e.forEach((function(e,l){if(!e||!e.dates)return;const f=e.key?e.key.toString():l.toString(),v=e.order||0,b=Object(c["k"])(JSON.stringify(e));let h=r.map[f];!t&&h&&h.hashcode===b?u.delete(f):(h=new n["a"](a({key:f,order:v,hashcode:b},e),r.theme,r.locale),d.push(h)),h&&h.pinPage&&(s=h),o[f]=h,i.push(h)})),this.map=o,this.list=i,this.pinAttr=s,{adds:d,deletes:Array.from(u)}}}},"93ed":function(e,t,r){var o=r("4245");function n(e){var t=o(this,e)["delete"](e);return this.size-=t?1:0,t}e.exports=n},9404:function(e,t,r){"use strict";r.d(t,"i",(function(){return U})),r.d(t,"l",(function(){return G})),r.d(t,"e",(function(){return q})),r.d(t,"f",(function(){return K})),r.d(t,"t",(function(){return Z}));r("6b54"),r("6679");var o=r("501e"),n=r.n(o);r.d(t,"k",(function(){return n.a}));var c=r("e2a0"),i=r.n(c);r.d(t,"m",(function(){return i.a}));var a=r("dcbe"),s=r.n(a);r.d(t,"h",(function(){return s.a}));var d=r("9520"),u=r.n(d);r.d(t,"j",(function(){return u.a}));var l=r("4cfe"),f=r.n(l);r.d(t,"n",(function(){return f.a}));r("2768");var v=r("6220"),b=r.n(v),h=r("f678"),p=r.n(h);r.d(t,"a",(function(){return p.a}));r("375a"),r("e9a7");var g=r("8103"),m=r.n(g);r.d(t,"w",(function(){return m.a}));var y=r("9b02"),x=r.n(y);r.d(t,"d",(function(){return x.a}));var w=r("0f5c"),k=r.n(w);r.d(t,"s",(function(){return k.a}));var O=r("9e86"),j=r.n(O);r.d(t,"q",(function(){return j.a}));var D=r("f542"),P=r.n(D);r.d(t,"u",(function(){return P.a}));var M=r("95ae"),S=r.n(M);r.d(t,"b",(function(){return S.a}));var E=r("3f84"),_=r.n(E);r.d(t,"c",(function(){return _.a}));r("2593");var Y=r("3eea"),C=r.n(Y);r.d(t,"r",(function(){return C.a}));var I=r("3852"),$=r.n(I),A=r("dd61"),T=r.n(A);r.d(t,"p",(function(){return T.a}));var L=r("a59b"),F=r.n(L);r.d(t,"g",(function(){return F.a}));var N=r("4416"),z=r.n(N);r.d(t,"o",(function(){return z.a}));var R=r("eed6"),V=r.n(R);r.d(t,"v",(function(){return V.a}));var H=r("3092"),W=r.n(H);const B=function(e){return Object.prototype.toString.call(e).slice(8,-1)},U=function(e){return b()(e)&&!isNaN(e.getTime())},G=function(e){return"Object"===B(e)},q=$.a,K=function(e,t){return W()(t,(function(t){return $()(e,t)}))},Z=W.a},"950a":function(e,t,r){var o=r("30c9");function n(e,t){return function(r,n){if(null==r)return r;if(!o(r))return e(r,n);var c=r.length,i=t?c:-1,a=Object(r);while(t?i--:++i<c)if(!1===n(a[i],i,a))break;return r}}e.exports=n},9520:function(e,t,r){var o=r("3729"),n=r("1a8c"),c="[object AsyncFunction]",i="[object Function]",a="[object GeneratorFunction]",s="[object Proxy]";function d(e){if(!n(e))return!1;var t=o(e);return t==i||t==a||t==c||t==s}e.exports=d},"95ae":function(e,t,r){var o=r("100e"),n=r("9638"),c=r("9aff"),i=r("9934"),a=Object.prototype,s=a.hasOwnProperty,d=o((function(e,t){e=Object(e);var r=-1,o=t.length,d=o>2?t[2]:void 0;d&&c(t[0],t[1],d)&&(o=1);while(++r<o){var u=t[r],l=i(u),f=-1,v=l.length;while(++f<v){var b=l[f],h=e[b];(void 0===h||n(h,a[b])&&!s.call(e,b))&&(e[b]=u[b])}}return e}));e.exports=d},"961c":function(e,t,r){t=e.exports=r("2350")(!1),t.push([e.i,".vc-day[data-v-2aac4f42]{position:relative;min-height:var(--day-min-height);width:100%;height:100%;z-index:1}.vc-day-layer[data-v-2aac4f42]{position:absolute;left:0;right:0;top:0;bottom:0;pointer-events:none}.vc-day-box-center-center[data-v-2aac4f42]{display:flex;justify-content:center;align-items:center;height:100%;transform-origin:50% 50%}.vc-day-box-left-center[data-v-2aac4f42]{display:flex;justify-content:flex-start;align-items:center;height:100%;transform-origin:0 50%}.vc-day-box-right-center[data-v-2aac4f42]{display:flex;justify-content:flex-end;align-items:center;height:100%;transform-origin:100% 50%}.vc-day-box-center-bottom[data-v-2aac4f42]{display:flex;justify-content:center;align-items:flex-end}.vc-day-content[data-v-2aac4f42]{display:flex;justify-content:center;align-items:center;width:var(--day-content-width);height:var(--day-content-height);margin:var(--day-content-margin);-webkit-user-select:none;-ms-user-select:none;user-select:none}.vc-day-content[data-v-2aac4f42]:hover{background-color:var(--day-content-bg-color-hover)}.vc-day-content:hover.vc-is-dark[data-v-2aac4f42]{background-color:var(--day-content-dark-bg-color-hover)}.vc-day-content[data-v-2aac4f42]:focus{background-color:var(--day-content-bg-color-focus)}.vc-day-content:focus.vc-is-dark[data-v-2aac4f42]{background-color:var(--day-content-dark-bg-color-focus)}.vc-highlights[data-v-2aac4f42]{overflow:hidden;pointer-events:none;z-index:-1}.vc-highlight[data-v-2aac4f42]{width:var(--highlight-height);height:var(--highlight-height)}.vc-highlight.vc-highlight-base-start[data-v-2aac4f42]{width:50%!important;border-radius:0!important;border-right-width:0!important}.vc-highlight.vc-highlight-base-end[data-v-2aac4f42]{width:50%!important;border-radius:0!important;border-left-width:0!important}.vc-highlight.vc-highlight-base-middle[data-v-2aac4f42]{width:100%;border-radius:0!important;border-left-width:0!important;border-right-width:0!important;margin:0 -1px}.vc-dots[data-v-2aac4f42]{display:flex;justify-content:center;align-items:center}.vc-dot[data-v-2aac4f42]{width:var(--dot-diameter);height:var(--dot-diameter);border-radius:var(--dot-border-radius);transition:all var(--day-content-transition-time)}.vc-dot[data-v-2aac4f42]:not(:last-child){margin-right:var(--dot-spacing)}.vc-bars[data-v-2aac4f42]{display:flex;justify-content:flex-start;align-items:center;width:var(--bars-width)}.vc-bar[data-v-2aac4f42]{flex-grow:1;height:var(--bar-height);transition:all var(--day-content-transition-time)}",""])},9638:function(e,t){function r(e,t){return e===t||e!==e&&t!==t}e.exports=r},"966f":function(e,t,r){var o=r("7e64"),n=r("c05f"),c=1,i=2;function a(e,t,r,a){var s=r.length,d=s,u=!a;if(null==e)return!d;e=Object(e);while(s--){var l=r[s];if(u&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}while(++s<d){l=r[s];var f=l[0],v=e[f],b=l[1];if(u&&l[2]){if(void 0===v&&!(f in e))return!1}else{var h=new o;if(a)var p=a(v,b,f,e,t,h);if(!(void 0===p?n(b,v,c|i,a,h):p))return!1}}return!0}e.exports=a},"96f3":function(e,t){var r=Object.prototype,o=r.hasOwnProperty;function n(e,t){return null!=e&&o.call(e,t)}e.exports=n},9740:function(e,t,r){var o=r("49e7");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=r("499e").default;n("90070284",o,!0,{sourceMap:!1,shadowMode:!1})},"97d3":function(e,t,r){var o=r("48a0"),n=r("30c9");function c(e,t){var r=-1,c=n(e)?Array(e.length):[];return o(e,(function(e,o,n){c[++r]=t(e,o,n)})),c}e.exports=c},9934:function(e,t,r){var o=r("6fcd"),n=r("41c3"),c=r("30c9");function i(e){return c(e)?o(e,!0):n(e)}e.exports=i},"998b":function(e,t,r){"use strict";var o=r("1349"),n=r.n(o);n.a},"99cd":function(e,t){function r(e){return function(t,r,o){var n=-1,c=Object(t),i=o(t),a=i.length;while(a--){var s=i[e?a:++n];if(!1===r(c[s],s,c))break}return t}}e.exports=r},"99d3":function(e,t,r){(function(e){var o=r("585a"),n=t&&!t.nodeType&&t,c=n&&"object"==typeof e&&e&&!e.nodeType&&e,i=c&&c.exports===n,a=i&&o.process,s=function(){try{var e=c&&c.require&&c.require("util").types;return e||a&&a.binding&&a.binding("util")}catch(t){}}();e.exports=s}).call(this,r("62e4")(e))},"9aff":function(e,t,r){var o=r("9638"),n=r("30c9"),c=r("c098"),i=r("1a8c");function a(e,t,r){if(!i(r))return!1;var a=typeof t;return!!("number"==a?n(r)&&c(t,r.length):"string"==a&&t in r)&&o(r[t],e)}e.exports=a},"9b02":function(e,t,r){var o=r("656b");function n(e,t,r){var n=null==e?void 0:o(e,t);return void 0===n?r:n}e.exports=n},"9b43":function(e,t,r){var o=r("d8e8");e.exports=function(e,t,r){if(o(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,o){return e.call(t,r,o)};case 3:return function(r,o,n){return e.call(t,r,o,n)}}return function(){return e.apply(t,arguments)}}},"9c6c":function(e,t,r){var o=r("2b4c")("unscopables"),n=Array.prototype;void 0==n[o]&&r("32e9")(n,o,{}),e.exports=function(e){n[o][e]=!0}},"9def":function(e,t,r){var o=r("4588"),n=Math.min;e.exports=function(e){return e>0?n(o(e),9007199254740991):0}},"9e1e":function(e,t,r){e.exports=!r("79e5")((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},"9e69":function(e,t,r){var o=r("2b3e"),n=o.Symbol;e.exports=n},"9e86":function(e,t,r){var o=r("872a"),n=r("242e"),c=r("badf");function i(e,t){var r={};return t=c(t,3),n(e,(function(e,n,c){o(r,n,t(e,n,c))})),r}e.exports=i},a029:function(e,t,r){var o=r("087d"),n=r("2dcb"),c=r("32f4"),i=r("d327"),a=Object.getOwnPropertySymbols,s=a?function(e){var t=[];while(e)o(t,c(e)),e=n(e);return t}:i;e.exports=s},a2be:function(e,t,r){var o=r("d612"),n=r("4284"),c=r("c584"),i=1,a=2;function s(e,t,r,s,d,u){var l=r&i,f=e.length,v=t.length;if(f!=v&&!(l&&v>f))return!1;var b=u.get(e);if(b&&u.get(t))return b==t;var h=-1,p=!0,g=r&a?new o:void 0;u.set(e,t),u.set(t,e);while(++h<f){var m=e[h],y=t[h];if(s)var x=l?s(y,m,h,t,e,u):s(m,y,h,e,t,u);if(void 0!==x){if(x)continue;p=!1;break}if(g){if(!n(t,(function(e,t){if(!c(g,t)&&(m===e||d(m,e,r,s,u)))return g.push(t)}))){p=!1;break}}else if(m!==y&&!d(m,y,r,s,u)){p=!1;break}}return u["delete"](e),u["delete"](t),p}e.exports=s},a2db:function(e,t,r){var o=r("9e69"),n=o?o.prototype:void 0,c=n?n.valueOf:void 0;function i(e){return c?Object(c.call(e)):{}}e.exports=i},a3fd:function(e,t,r){var o=r("7948");function n(e,t){return o(t,(function(t){return[t,e[t]]}))}e.exports=n},a454:function(e,t,r){var o=r("72f0"),n=r("3b4a"),c=r("cd9d"),i=n?function(e,t){return n(e,"toString",{configurable:!0,enumerable:!1,value:o(t),writable:!0})}:c;e.exports=i},a481:function(e,t,r){"use strict";var o=r("cb7c"),n=r("4bf8"),c=r("9def"),i=r("4588"),a=r("0390"),s=r("5f1b"),d=Math.max,u=Math.min,l=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,v=/\$([$&`']|\d\d?)/g,b=function(e){return void 0===e?e:String(e)};r("214f")("replace",2,(function(e,t,r,h){return[function(o,n){var c=e(this),i=void 0==o?void 0:o[t];return void 0!==i?i.call(o,c,n):r.call(String(c),o,n)},function(e,t){var n=h(r,e,this,t);if(n.done)return n.value;var l=o(e),f=String(this),v="function"===typeof t;v||(t=String(t));var g=l.global;if(g){var m=l.unicode;l.lastIndex=0}var y=[];while(1){var x=s(l,f);if(null===x)break;if(y.push(x),!g)break;var w=String(x[0]);""===w&&(l.lastIndex=a(f,c(l.lastIndex),m))}for(var k="",O=0,j=0;j<y.length;j++){x=y[j];for(var D=String(x[0]),P=d(u(i(x.index),f.length),0),M=[],S=1;S<x.length;S++)M.push(b(x[S]));var E=x.groups;if(v){var _=[D].concat(M,P,f);void 0!==E&&_.push(E);var Y=String(t.apply(void 0,_))}else Y=p(D,f,P,M,E,t);P>=O&&(k+=f.slice(O,P)+Y,O=P+D.length)}return k+f.slice(O)}];function p(e,t,o,c,i,a){var s=o+e.length,d=c.length,u=v;return void 0!==i&&(i=n(i),u=f),r.call(a,u,(function(r,n){var a;switch(n.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,o);case"'":return t.slice(s);case"<":a=i[n.slice(1,-1)];break;default:var u=+n;if(0===u)return r;if(u>d){var f=l(u/10);return 0===f?r:f<=d?void 0===c[f-1]?n.charAt(1):c[f-1]+n.charAt(1):r}a=c[u-1]}return void 0===a?"":a}))}}))},a524:function(e,t,r){var o=r("4245");function n(e){return o(this,e).has(e)}e.exports=n},a59b:function(e,t){function r(e){return e&&e.length?e[0]:void 0}e.exports=r},a919:function(e,t,r){var o=r("ddc6"),n={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"},c=o(n);e.exports=c},a994:function(e,t,r){var o=r("7d1f"),n=r("32f4"),c=r("ec69");function i(e){return o(e,c,n)}e.exports=i},aae3:function(e,t,r){var o=r("d3f4"),n=r("2d95"),c=r("2b4c")("match");e.exports=function(e){var t;return o(e)&&(void 0!==(t=e[c])?!!t:"RegExp"==n(e))}},aaec:function(e,t){var r="\\ud800-\\udfff",o="\\u0300-\\u036f",n="\\ufe20-\\ufe2f",c="\\u20d0-\\u20ff",i=o+n+c,a="\\ufe0e\\ufe0f",s="\\u200d",d=RegExp("["+s+r+i+a+"]");function u(e){return d.test(e)}e.exports=u},ac41:function(e,t){function r(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}e.exports=r},ac6a:function(e,t,r){for(var o=r("cadf"),n=r("0d58"),c=r("2aba"),i=r("7726"),a=r("32e9"),s=r("84f2"),d=r("2b4c"),u=d("iterator"),l=d("toStringTag"),f=s.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},b=n(v),h=0;h<b.length;h++){var p,g=b[h],m=v[g],y=i[g],x=y&&y.prototype;if(x&&(x[u]||a(x,u,f),x[l]||a(x,l,g),s[g]=f,m))for(p in o)x[p]||c(x,p,o[p],!0)}},aeb4:function(e,t,r){t=e.exports=r("2350")(!1),t.push([e.i,".vc-pane[data-v-4a5f2beb]{flex-grow:1;flex-shrink:1;display:flex;flex-direction:column;justify-content:center;align-items:stretch}.vc-horizontal-divider[data-v-4a5f2beb]{align-self:center}.vc-header[data-v-4a5f2beb]{flex-shrink:0;display:flex;align-items:stretch;-webkit-user-select:none;-ms-user-select:none;user-select:none;padding:var(--header-padding)}.vc-header.align-left[data-v-4a5f2beb]{order:-1;justify-content:flex-start}.vc-header.align-right[data-v-4a5f2beb]{order:1;justify-content:flex-end}.vc-title-layout[data-v-4a5f2beb]{display:flex;justify-content:center;align-items:center;flex-grow:1}.vc-title-layout.align-left[data-v-4a5f2beb]{justify-content:flex-start}.vc-title-layout.align-right[data-v-4a5f2beb]{justify-content:flex-end}.vc-title-wrapper[data-v-4a5f2beb]{position:relative}.vc-title[data-v-4a5f2beb]{cursor:pointer;white-space:nowrap;padding:var(--title-padding)}.vc-title[data-v-4a5f2beb],.vc-weekday[data-v-4a5f2beb]{-webkit-user-select:none;-ms-user-select:none;user-select:none}.vc-weekday[data-v-4a5f2beb]{display:flex;justify-content:center;align-items:center;flex:1;padding:var(--weekday-padding);cursor:default}.vc-weeks[data-v-4a5f2beb]{flex-shrink:1;flex-grow:1;padding:var(--weeks-padding)}",""])},aebd:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},b047:function(e,t){function r(e){return function(t){return e(t)}}e.exports=r},b0c5:function(e,t,r){"use strict";var o=r("520a");r("5ca1")({target:"RegExp",proto:!0,forced:o!==/./.exec},{exec:o})},b1d2:function(e,t,r){var o=r("3729"),n=r("1310"),c="[object Date]";function i(e){return n(e)&&o(e)==c}e.exports=i},b1e5:function(e,t,r){var o=r("a994"),n=1,c=Object.prototype,i=c.hasOwnProperty;function a(e,t,r,c,a,s){var d=r&n,u=o(e),l=u.length,f=o(t),v=f.length;if(l!=v&&!d)return!1;var b=l;while(b--){var h=u[b];if(!(d?h in t:i.call(t,h)))return!1}var p=s.get(e);if(p&&s.get(t))return p==t;var g=!0;s.set(e,t),s.set(t,e);var m=d;while(++b<l){h=u[b];var y=e[h],x=t[h];if(c)var w=d?c(x,y,h,t,e,s):c(y,x,h,e,t,s);if(!(void 0===w?y===x||a(y,x,r,c,s):w)){g=!1;break}m||(m="constructor"==h)}if(g&&!m){var k=e.constructor,O=t.constructor;k==O||!("constructor"in e)||!("constructor"in t)||"function"==typeof k&&k instanceof k&&"function"==typeof O&&O instanceof O||(g=!1)}return s["delete"](e),s["delete"](t),g}e.exports=a},b20a:function(e,t,r){var o=r("6ac0"),n=r("4caa"),c=r("ea72"),i="['’]",a=RegExp(i,"g");function s(e){return function(t){return o(c(n(t).replace(a,"")),e,"")}}e.exports=s},b218:function(e,t){var r=9007199254740991;function o(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=r}e.exports=o},b4b0:function(e,t,r){var o=r("1a8c"),n=r("ffd6"),c=NaN,i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,d=/^0o[0-7]+$/i,u=parseInt;function l(e){if("number"==typeof e)return e;if(n(e))return c;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var r=s.test(e);return r||d.test(e)?u(e.slice(2),r?2:8):a.test(e)?c:+e}e.exports=l},b4c0:function(e,t,r){var o=r("cb5a");function n(e){var t=this.__data__,r=o(t,e);return r<0?void 0:t[r][1]}e.exports=n},b5a7:function(e,t,r){var o=r("0b07"),n=r("2b3e"),c=o(n,"DataView");e.exports=c},b6dd:function(e,t,r){t=e.exports=r("2350")(!1),t.push([e.i,'.vc-popover-content-wrapper[data-v-7605e1b2]{--popover-horizontal-content-offset:8px;--popover-vertical-content-offset:10px;--popover-slide-translation:15px;--popover-transition-time:0.14s ease-in-out;--popover-caret-horizontal-offset:18px;--popover-caret-vertical-offset:8px;position:absolute;display:block;outline:none;z-index:10}.vc-popover-content-wrapper[data-v-7605e1b2]:not(.is-interactive){pointer-events:none}.vc-popover-content[data-v-7605e1b2]{position:relative;outline:none;z-index:10}.vc-popover-content.direction-bottom[data-v-7605e1b2]{margin-top:var(--popover-vertical-content-offset)}.vc-popover-content.direction-top[data-v-7605e1b2]{margin-bottom:var(--popover-vertical-content-offset)}.vc-popover-content.direction-left[data-v-7605e1b2]{margin-right:var(--popover-horizontal-content-offset)}.vc-popover-content.direction-right[data-v-7605e1b2]{margin-left:var(--popover-horizontal-content-offset)}.vc-popover-caret[data-v-7605e1b2]{content:"";position:absolute;display:block;width:12px;height:12px;border-top:inherit;border-left:inherit;background:inherit;z-index:-1}.vc-popover-caret.direction-bottom[data-v-7605e1b2]{top:0}.vc-popover-caret.direction-bottom.align-left[data-v-7605e1b2]{transform:translateY(-50%) rotate(45deg)}.vc-popover-caret.direction-bottom.align-center[data-v-7605e1b2]{transform:translateX(-50%) translateY(-50%) rotate(45deg)}.vc-popover-caret.direction-bottom.align-right[data-v-7605e1b2]{transform:translateY(-50%) rotate(45deg)}.vc-popover-caret.direction-top[data-v-7605e1b2]{top:100%}.vc-popover-caret.direction-top.align-left[data-v-7605e1b2]{transform:translateY(-50%) rotate(-135deg)}.vc-popover-caret.direction-top.align-center[data-v-7605e1b2]{transform:translateX(-50%) translateY(-50%) rotate(-135deg)}.vc-popover-caret.direction-top.align-right[data-v-7605e1b2]{transform:translateY(-50%) rotate(-135deg)}.vc-popover-caret.direction-left[data-v-7605e1b2]{left:100%}.vc-popover-caret.direction-left.align-top[data-v-7605e1b2]{transform:translateX(-50%) rotate(135deg)}.vc-popover-caret.direction-left.align-middle[data-v-7605e1b2]{transform:translateY(-50%) translateX(-50%) rotate(135deg)}.vc-popover-caret.direction-left.align-bottom[data-v-7605e1b2]{transform:translateX(-50%) rotate(135deg)}.vc-popover-caret.direction-right[data-v-7605e1b2]{left:0}.vc-popover-caret.direction-right.align-top[data-v-7605e1b2]{transform:translateX(-50%) rotate(-45deg)}.vc-popover-caret.direction-right.align-middle[data-v-7605e1b2]{transform:translateY(-50%) translateX(-50%) rotate(-45deg)}.vc-popover-caret.direction-right.align-bottom[data-v-7605e1b2]{transform:translateX(-50%) rotate(-45deg)}.vc-popover-caret.align-left[data-v-7605e1b2]{left:var(--popover-caret-horizontal-offset)}.vc-popover-caret.align-center[data-v-7605e1b2]{left:50%}.vc-popover-caret.align-right[data-v-7605e1b2]{right:var(--popover-caret-horizontal-offset)}.vc-popover-caret.align-top[data-v-7605e1b2]{top:var(--popover-caret-vertical-offset)}.vc-popover-caret.align-middle[data-v-7605e1b2]{top:50%}.vc-popover-caret.align-bottom[data-v-7605e1b2]{bottom:var(--popover-caret-vertical-offset)}.fade-enter-active[data-v-7605e1b2],.fade-leave-active[data-v-7605e1b2],.slide-fade-enter-active[data-v-7605e1b2],.slide-fade-leave-active[data-v-7605e1b2]{transition:all var(--popover-transition-time);pointer-events:none}.fade-enter[data-v-7605e1b2],.fade-leave-to[data-v-7605e1b2],.slide-fade-enter[data-v-7605e1b2],.slide-fade-leave-to[data-v-7605e1b2]{opacity:0}.slide-fade-enter.direction-bottom[data-v-7605e1b2],.slide-fade-leave-to.direction-bottom[data-v-7605e1b2]{transform:translateY(calc(-1*var(--popover-slide-translation)))}.slide-fade-enter.direction-top[data-v-7605e1b2],.slide-fade-leave-to.direction-top[data-v-7605e1b2]{transform:translateY(var(--popover-slide-translation))}.slide-fade-enter.direction-left[data-v-7605e1b2],.slide-fade-leave-to.direction-left[data-v-7605e1b2]{transform:translateX(var(--popover-slide-translation))}.slide-fade-enter.direction-right[data-v-7605e1b2],.slide-fade-leave-to.direction-right[data-v-7605e1b2]{transform:translateX(calc(-1*var(--popover-slide-translation)))}',""])},b760:function(e,t,r){var o=r("872a"),n=r("9638");function c(e,t,r){(void 0!==r&&!n(e[t],r)||void 0===r&&!(t in e))&&o(e,t,r)}e.exports=c},badf:function(e,t,r){var o=r("642a"),n=r("1838"),c=r("cd9d"),i=r("6747"),a=r("f9ce");function s(e){return"function"==typeof e?e:null==e?c:"object"==typeof e?i(e)?n(e[0],e[1]):o(e):a(e)}e.exports=s},bbc0:function(e,t,r){var o=r("6044"),n="__lodash_hash_undefined__",c=Object.prototype,i=c.hasOwnProperty;function a(e){var t=this.__data__;if(o){var r=t[e];return r===n?void 0:r}return i.call(t,e)?t[e]:void 0}e.exports=a},bcdf:function(e,t){function r(){}e.exports=r},bd86:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var o=r("85f2"),n=r.n(o);function c(e,t,r){return t in e?n()(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},bdab:function(e,t,r){var o=r("f498");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=r("499e").default;n("1ee16f20",o,!0,{sourceMap:!1,shadowMode:!1})},be13:function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},c05f:function(e,t,r){var o=r("7b97"),n=r("1310");function c(e,t,r,i,a){return e===t||(null==e||null==t||!n(e)&&!n(t)?e!==e&&t!==t:o(e,t,r,i,c,a))}e.exports=c},c098:function(e,t){var r=9007199254740991,o=/^(?:0|[1-9]\d*)$/;function n(e,t){var n=typeof e;return t=null==t?r:t,!!t&&("number"==n||"symbol"!=n&&o.test(e))&&e>-1&&e%1==0&&e<t}e.exports=n},c1c9:function(e,t,r){var o=r("a454"),n=r("f3c1"),c=n(o);e.exports=c},c2b6:function(e,t,r){var o=r("f8af"),n=r("5d89"),c=r("6f6c"),i=r("a2db"),a=r("c8fe"),s="[object Boolean]",d="[object Date]",u="[object Map]",l="[object Number]",f="[object RegExp]",v="[object Set]",b="[object String]",h="[object Symbol]",p="[object ArrayBuffer]",g="[object DataView]",m="[object Float32Array]",y="[object Float64Array]",x="[object Int8Array]",w="[object Int16Array]",k="[object Int32Array]",O="[object Uint8Array]",j="[object Uint8ClampedArray]",D="[object Uint16Array]",P="[object Uint32Array]";function M(e,t,r){var M=e.constructor;switch(t){case p:return o(e);case s:case d:return new M(+e);case g:return n(e,r);case m:case y:case x:case w:case k:case O:case j:case D:case P:return a(e,r);case u:return new M;case l:case b:return new M(e);case f:return c(e);case v:return new M;case h:return i(e)}}e.exports=M},c32f:function(e,t,r){var o=r("2b10");function n(e,t,r){var n=e.length;return r=void 0===r?n:r,!t&&r>=n?e:o(e,t,r)}e.exports=n},c366:function(e,t,r){var o=r("6821"),n=r("9def"),c=r("77f1");e.exports=function(e){return function(t,r,i){var a,s=o(t),d=n(s.length),u=c(i,d);if(e&&r!=r){while(d>u)if(a=s[u++],a!=a)return!0}else for(;d>u;u++)if((e||u in s)&&s[u]===r)return e||u||0;return!e&&-1}}},c3fc:function(e,t,r){var o=r("42a2"),n=r("1310"),c="[object Set]";function i(e){return n(e)&&o(e)==c}e.exports=i},c539:function(e,t,r){var o=r("694d");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=r("499e").default;n("19ad7201",o,!0,{sourceMap:!1,shadowMode:!1})},c584:function(e,t){function r(e,t){return e.has(t)}e.exports=r},c631:function(e,t,r){t=e.exports=r("2350")(!1),t.push([e.i,".vc-day-popover-row[data-v-28ced894]{--day-content-transition-time:0.13s ease-in;display:flex;align-items:center;transition:all var(--day-content-transition-time)}.vc-day-popover-row[data-v-28ced894]:not(:first-child){margin-top:3px}.vc-day-popover-row-indicator[data-v-28ced894]{display:flex;justify-content:center;align-items:center;flex-grow:0;width:15px;margin-right:3px}.vc-day-popover-row-indicator span[data-v-28ced894]{transition:all var(--day-content-transition-time)}.vc-day-popover-row-content[data-v-28ced894]{display:flex;align-items:center;flex-wrap:none;flex-grow:1;width:-webkit-max-content;width:max-content}",""])},c69a:function(e,t,r){e.exports=!r("9e1e")&&!r("79e5")((function(){return 7!=Object.defineProperty(r("230e")("div"),"a",{get:function(){return 7}}).a}))},c6cf:function(e,t,r){var o=r("4d8c"),n=r("2286"),c=r("c1c9");function i(e){return c(n(e,void 0,o),e+"")}e.exports=i},c724:function(e,t,r){var o=r("aeb4");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=r("499e").default;n("f2c4f118",o,!0,{sourceMap:!1,shadowMode:!1})},c869:function(e,t,r){var o=r("0b07"),n=r("2b3e"),c=o(n,"Set");e.exports=c},c87c:function(e,t){var r=Object.prototype,o=r.hasOwnProperty;function n(e){var t=e.length,r=new e.constructor(t);return t&&"string"==typeof e[0]&&o.call(e,"index")&&(r.index=e.index,r.input=e.input),r}e.exports=n},c8ba:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(o){"object"===typeof window&&(r=window)}e.exports=r},c8fe:function(e,t,r){var o=r("f8af");function n(e,t){var r=t?o(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}e.exports=n},ca5a:function(e,t){var r=0,o=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++r+o).toString(36))}},cadf:function(e,t,r){"use strict";var o=r("9c6c"),n=r("d53b"),c=r("84f2"),i=r("6821");e.exports=r("01f9")(Array,"Array",(function(e,t){this._t=i(e),this._i=0,this._k=t}),(function(){var e=this._t,t=this._k,r=this._i++;return!e||r>=e.length?(this._t=void 0,n(1)):n(0,"keys"==t?r:"values"==t?e[r]:[r,e[r]])}),"values"),c.Arguments=c.Array,o("keys"),o("values"),o("entries")},cb5a:function(e,t,r){var o=r("9638");function n(e,t){var r=e.length;while(r--)if(o(e[r][0],t))return r;return-1}e.exports=n},cb7c:function(e,t,r){var o=r("d3f4");e.exports=function(e){if(!o(e))throw TypeError(e+" is not an object!");return e}},cc45:function(e,t,r){var o=r("1a2d"),n=r("b047"),c=r("99d3"),i=c&&c.isMap,a=i?n(i):o;e.exports=a},cd9d:function(e,t){function r(e){return e}e.exports=r},ce10:function(e,t,r){var o=r("69a8"),n=r("6821"),c=r("c366")(!1),i=r("613b")("IE_PROTO");e.exports=function(e,t){var r,a=n(e),s=0,d=[];for(r in a)r!=i&&o(a,r)&&d.push(r);while(t.length>s)o(a,r=t[s++])&&(~c(d,r)||d.push(r));return d}},ce86:function(e,t,r){var o=r("9e69"),n=r("7948"),c=r("6747"),i=r("ffd6"),a=1/0,s=o?o.prototype:void 0,d=s?s.toString:void 0;function u(e){if("string"==typeof e)return e;if(c(e))return n(e,u)+"";if(i(e))return d?d.call(e):"";var t=e+"";return"0"==t&&1/e==-a?"-0":t}e.exports=u},cebd:function(e,t){function r(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=[e,e]})),r}e.exports=r},cfe5:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));r("ac6a");var o=r("bd86"),n=r("f7f1"),c=r("2fa3"),i=r("9404"),a=r("29ae");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const u=864e5;class l{constructor(e,{order:t=0,locale:r=new a["a"]}={}){if(this.isDateInfo=!0,this.isRange=Object(i["l"])(e)||Object(i["j"])(e),this.isDate=!this.isRange,this.order=t,this.locale=r,this.mask=r.masks.data,this.getMonthComps=r.getMonthComps,this.firstDayOfWeek=r.firstDayOfWeek,this.opts={order:t,locale:r},this.isDate){this.type="date";let t=this.toDate(e);t=Object(i["i"])(t)?t:new Date,t.setHours(0,0,0,0),this.date=t,this.dateTime=t.getTime()}if(this.isRange){if(this.type="range",Object(i["j"])(e))this.on={and:e};else{let t=this.toDate(e.start),r=this.toDate(e.end);if(t&&r&&t>r){const e=t;t=r,r=e}else t&&e.span>=1&&(r=Object(n["a"])(t,e.span-1));t&&(Object(i["i"])(t)?t.setHours(0,0,0,0):t=null),r&&(Object(i["i"])(r)?r.setHours(0,0,0,0):r=null),this.start=t,this.end=r,this.startTime=t&&t.getTime(),this.endTime=r&&r.getTime(),t&&r&&(this.daySpan=this.diffInDays(t,r),this.weekSpan=this.diffInWeeks(t,r),this.monthSpan=this.diffInMonths(t,r),this.yearSpan=this.diffInYears(t,r));const o=Object(c["l"])(e,{},l.patternProps);if(o.assigned&&(this.on={and:o.target}),e.on){const t=(Object(i["h"])(e.on)?e.on:[e.on]).map((function(e){if(Object(i["j"])(e))return e;const t=Object(c["l"])(e,{},l.patternProps);return t.assigned?t.target:null})).filter((function(e){return e}));t.length&&(this.on=d(d({},this.on),{},{or:t}))}}this.isComplex=!!this.on}}toDate(e){const t=this.locale.masks.data;return this.locale.toDate(e,t)}toDateInfo(e){return e.isDateInfo?e:new l(e,this.opts)}startOfWeek(e){const t=e.getDay()+1,r=t>=this.firstDayOfWeek?this.firstDayOfWeek-t:-(7-(this.firstDayOfWeek-t));return Object(n["a"])(e,r)}diffInDays(e,t){return Math.round((t-e)/u)}diffInWeeks(e,t){return this.diffInDays(this.startOfWeek(e),this.startOfWeek(t))}diffInYears(e,t){return t.getUTCFullYear()-e.getUTCFullYear()}diffInMonths(e,t){return 12*this.diffInYears(e,t)+(t.getMonth()-e.getMonth())}static get patterns(){return{dailyInterval:{test:function(e,t,r){return r.diffInDays(r.start||new Date,e.date)%t===0}},weeklyInterval:{test:function(e,t,r){return r.diffInWeeks(r.start||new Date,e.date)%t===0}},monthlyInterval:{test:function(e,t,r){return r.diffInMonths(r.start||new Date,e.date)%t===0}},yearlyInterval:{test:function(){return function(e,t,r){return r.diffInYears(r.start||new Date,e.date)%t===0}}},days:{validate:function(e){return Object(i["h"])(e)?e:[parseInt(e,10)]},test:function(e,t){return t.includes(e.day)||t.includes(-e.dayFromEnd)}},weekdays:{validate:function(e){return Object(i["h"])(e)?e:[parseInt(e,10)]},test:function(e,t){return t.includes(e.weekday)}},ordinalWeekdays:{validate:function(e){return Object.keys(e).reduce((function(t,r){const o=e[r];return o?(t[r]=Object(i["h"])(o)?o:[parseInt(o,10)],t):t}),{})},test:function(e,t){return Object.keys(t).map((function(e){return parseInt(e,10)})).find((function(r){return t[r].includes(e.weekday)&&(r===e.weekdayOrdinal||r===-e.weekdayOrdinalFromEnd)}))}},weekends:{validate:function(e){return e},test:function(e){return 1===e.weekday||7===e.weekday}},workweek:{validate:function(e){return e},test:function(e){return e.weekday>=2&&e.weekday<=6}},weeks:{validate:function(e){return Object(i["h"])(e)?e:[parseInt(e,10)]},test:function(e,t){return t.includes(e.week)||t.includes(-e.weekFromEnd)}},months:{validate:function(e){return Object(i["h"])(e)?e:[parseInt(e,10)]},test:function(e,t){return t.includes(e.month)}},years:{validate:function(e){return Object(i["h"])(e)?e:[parseInt(e,10)]},test:function(e,t){return t.includes(e.year)}}}}static get patternProps(){return Object.keys(l.patterns).map((function(e){return{name:e,validate:l.patterns[e].validate}}))}static testConfig(e,t,r){return Object(i["j"])(e)?e(t):Object(i["l"])(e)?Object.keys(e).every((function(o){return l.patterns[o].test(t,e[o],r)})):null}iterateDatesInRange({start:e,end:t},r){if(!e||!t||!Object(i["j"])(r))return null;const o={i:0,date:e,day:this.locale.getDayFromDate(e),finished:!1};let c=null;for(;!o.finished&&o.date<=t;o.i++)c=r(o),o.date=Object(n["a"])(o.date,1),o.day=this.locale.getDayFromDate(o.date);return c}shallowIntersectingRange(e){return this.rangeShallowIntersectingRange(this,e)}rangeShallowIntersectingRange(e,t){if(e=this.toDateInfo(e),t=this.toDateInfo(t),!this.dateShallowIntersectsDate(e,t))return null;const r=e.toRange(),o=t.toRange();let n=null,c=null;return r.start?n=o.start?r.start>o.start?r.start:o.start:r.start:o.start&&(n=o.start),r.end?c=o.end?r.end<o.end?r.end:o.end:r.end:o.end&&(c=o.end),{start:n,end:c}}intersectsDate(e){var t=this;const r=this.toDateInfo(e);if(!this.shallowIntersectsDate(r))return null;if(!this.on)return this;const o=this.rangeShallowIntersectingRange(this,r);let n=!1;return this.iterateDatesInRange(o,(function(e){t.matchesDay(e.day)&&(n=n||r.matchesDay(e.day),e.finished=n)})),n}shallowIntersectsDate(e){return this.dateShallowIntersectsDate(this,this.toDateInfo(e))}dateShallowIntersectsDate(e,t){return e.isDate?t.isDate?e.dateTime===t.dateTime:this.dateShallowIncludesDate(t,e):t.isDate?this.dateShallowIncludesDate(e,t):!(e.start&&t.end&&e.start>t.end)&&!(e.end&&t.start&&e.end<t.start)}includesDate(e){var t=this;const r=this.toDateInfo(e);if(!this.shallowIncludesDate(r))return!1;if(!this.on)return!0;const o=this.rangeShallowIntersectingRange(this,r);let n=!0;return this.iterateDatesInRange(o,(function(e){t.matchesDay(e.day)&&(n=n&&r.matchesDay(e.day),e.finished=!n)})),n}shallowIncludesDate(e){return this.dateShallowIncludesDate(this,e.isDate?e:new l(e,this.opts))}dateShallowIncludesDate(e,t){return e.isDate?t.isDate?e.dateTime===t.dateTime:!(!t.startTime||!t.endTime)&&(e.dateTime===t.startTime&&e.dateTime===t.endTime):t.isDate?!(e.start&&t.date<e.start)&&!(e.end&&t.date>e.end):!(e.start&&(!t.start||t.start<e.start))&&!(e.end&&(!t.end||t.end>e.end))}includesDay(e){return this.shallowIncludesDate(e.date)&&this.matchesDay(e)?this:null}matchesDay(e){var t=this;return!this.on||!(this.on.and&&!l.testConfig(this.on.and,e,this))&&!(this.on.or&&!this.on.or.some((function(r){return l.testConfig(r,e,t)})))}toRange(){return this.isDate?new l({start:this.date,end:this.date},this.opts):new l({start:this.start,end:this.end},this.opts)}compare(e){if(this.order!==e.order)return this.order-e.order;if(this.type!==e.type)return this.isDate?1:-1;if(this.isDate)return 0;const t=this.start-e.start;return 0!==t?t:this.end-e.end}}},d02c:function(e,t,r){var o=r("5e2e"),n=r("79bc"),c=r("7b83"),i=200;function a(e,t){var r=this.__data__;if(r instanceof o){var a=r.__data__;if(!n||a.length<i-1)return a.push([e,t]),this.size=++r.size,this;r=this.__data__=new c(a)}return r.set(e,t),this.size=r.size,this}e.exports=a},d094:function(e,t){var r="\\ud800-\\udfff",o="\\u0300-\\u036f",n="\\ufe20-\\ufe2f",c="\\u20d0-\\u20ff",i=o+n+c,a="\\ufe0e\\ufe0f",s="["+r+"]",d="["+i+"]",u="\\ud83c[\\udffb-\\udfff]",l="(?:"+d+"|"+u+")",f="[^"+r+"]",v="(?:\\ud83c[\\udde6-\\uddff]){2}",b="[\\ud800-\\udbff][\\udc00-\\udfff]",h="\\u200d",p=l+"?",g="["+a+"]?",m="(?:"+h+"(?:"+[f,v,b].join("|")+")"+g+p+")*",y=g+p+m,x="(?:"+[f+d+"?",d,v,b,s].join("|")+")",w=RegExp(u+"(?="+u+")|"+x+y,"g");function k(e){return e.match(w)||[]}e.exports=k},d0d6:function(e,t,r){"use strict";var o=r("6300"),n=r.n(o);n.a},d194:function(e,t,r){var o=r("c32f"),n=r("aaec"),c=r("126d"),i=r("76dd");function a(e){return function(t){t=i(t);var r=n(t)?c(t):void 0,a=r?r[0]:t.charAt(0),s=r?o(r,1).join(""):t.slice(1);return a[e]()+s}}e.exports=a},d327:function(e,t){function r(){return[]}e.exports=r},d370:function(e,t,r){var o=r("253c"),n=r("1310"),c=Object.prototype,i=c.hasOwnProperty,a=c.propertyIsEnumerable,s=o(function(){return arguments}())?o:function(e){return n(e)&&i.call(e,"callee")&&!a.call(e,"callee")};e.exports=s},d3f4:function(e,t){e.exports=function(e){return"object"===typeof e?null!==e:"function"===typeof e}},d53b:function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},d581:function(e,t,r){"use strict";var o=r("5cab"),n=r.n(o);n.a},d612:function(e,t,r){var o=r("7b83"),n=r("7ed2"),c=r("dc0f");function i(e){var t=-1,r=null==e?0:e.length;this.__data__=new o;while(++t<r)this.add(e[t])}i.prototype.add=i.prototype.push=n,i.prototype.has=c,e.exports=i},d7ee:function(e,t,r){var o=r("c3fc"),n=r("b047"),c=r("99d3"),i=c&&c.isSet,a=i?n(i):o;e.exports=a},d864:function(e,t,r){var o=r("79aa");e.exports=function(e,t,r){if(o(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,o){return e.call(t,r,o)};case 3:return function(r,o,n){return e.call(t,r,o,n)}}return function(){return e.apply(t,arguments)}}},d8e8:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},d9a8:function(e,t){function r(e){return e!==e}e.exports=r},d9f6:function(e,t,r){var o=r("e4ae"),n=r("794b"),c=r("1bc3"),i=Object.defineProperty;t.f=r("8e60")?Object.defineProperty:function(e,t,r){if(o(e),t=c(t,!0),o(r),n)try{return i(e,t,r)}catch(a){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e}},da03:function(e,t,r){var o=r("2b3e"),n=o["__core-js_shared__"];e.exports=n},dc0f:function(e,t){function r(e){return this.__data__.has(e)}e.exports=r},dc57:function(e,t){var r=Function.prototype,o=r.toString;function n(e){if(null!=e){try{return o.call(e)}catch(t){}try{return e+""}catch(t){}}return""}e.exports=n},dcbe:function(e,t,r){var o=r("30c9"),n=r("1310");function c(e){return n(e)&&o(e)}e.exports=c},dd61:function(e,t,r){var o=r("7948"),n=r("badf"),c=r("97d3"),i=r("6747");function a(e,t){var r=i(e)?o:c;return r(e,n(t,3))}e.exports=a},ddc6:function(e,t){function r(e){return function(t){return null==e?void 0:e[t]}}e.exports=r},e031:function(e,t,r){var o=r("f909"),n=r("1a8c");function c(e,t,r,i,a,s){return n(e)&&n(t)&&(s.set(t,e),o(e,t,void 0,c,s),s["delete"](t)),e}e.exports=c},e0e7:function(e,t,r){var o=r("60ed");function n(e){return o(e)?void 0:e}e.exports=n},e11e:function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},e24b:function(e,t,r){var o=r("49f4"),n=r("1efc"),c=r("bbc0"),i=r("7a48"),a=r("2524");function s(e){var t=-1,r=null==e?0:e.length;this.clear();while(++t<r){var o=e[t];this.set(o[0],o[1])}}s.prototype.clear=o,s.prototype["delete"]=n,s.prototype.get=c,s.prototype.has=i,s.prototype.set=a,e.exports=s},e2a0:function(e,t,r){var o=r("3729"),n=r("6747"),c=r("1310"),i="[object String]";function a(e){return"string"==typeof e||!n(e)&&c(e)&&o(e)==i}e.exports=a},e2c0:function(e,t,r){var o=r("e2e4"),n=r("d370"),c=r("6747"),i=r("c098"),a=r("b218"),s=r("f4d6");function d(e,t,r){t=o(t,e);var d=-1,u=t.length,l=!1;while(++d<u){var f=s(t[d]);if(!(l=null!=e&&r(e,f)))break;e=e[f]}return l||++d!=u?l:(u=null==e?0:e.length,!!u&&a(u)&&i(f,u)&&(c(e)||n(e)))}e.exports=d},e2e4:function(e,t,r){var o=r("6747"),n=r("f608"),c=r("18d8"),i=r("76dd");function a(e,t){return o(e)?e:n(e,t)?[e]:c(i(e))}e.exports=a},e380:function(e,t,r){var o=r("7b83"),n="Expected a function";function c(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError(n);var r=function(){var o=arguments,n=t?t.apply(this,o):o[0],c=r.cache;if(c.has(n))return c.get(n);var i=e.apply(this,o);return r.cache=c.set(n,i)||c,i};return r.cache=new(c.Cache||o),r}c.Cache=o,e.exports=c},e3f8:function(e,t,r){var o=r("656b");function n(e){return function(t){return o(t,e)}}e.exports=n},e4ae:function(e,t,r){var o=r("f772");e.exports=function(e){if(!o(e))throw TypeError(e+" is not an object!");return e}},e538:function(e,t,r){(function(e){var o=r("2b3e"),n=t&&!t.nodeType&&t,c=n&&"object"==typeof e&&e&&!e.nodeType&&e,i=c&&c.exports===n,a=i?o.Buffer:void 0,s=a?a.allocUnsafe:void 0;function d(e,t){if(t)return e.slice();var r=e.length,o=s?s(r):new e.constructor(r);return e.copy(o),o}e.exports=d}).call(this,r("62e4")(e))},e53d:function(e,t){var r=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},e9a7:function(e,t,r){var o=r("76dd"),n=r("8103");function c(e){return n(o(e).toLowerCase())}e.exports=c},ea72:function(e,t,r){var o=r("7559"),n=r("7e8e"),c=r("76dd"),i=r("f4d9");function a(e,t,r){return e=c(e),t=r?void 0:t,void 0===t?n(e)?i(e):o(e):e.match(t)||[]}e.exports=a},eac5:function(e,t){var r=Object.prototype;function o(e){var t=e&&e.constructor,o="function"==typeof t&&t.prototype||r;return e===o}e.exports=o},ebd6:function(e,t,r){var o=r("cb7c"),n=r("d8e8"),c=r("2b4c")("species");e.exports=function(e,t){var r,i=o(e).constructor;return void 0===i||void 0==(r=o(i)[c])?t:n(r)}},ec47:function(e,t,r){var o=r("a3fd"),n=r("42a2"),c=r("edfa"),i=r("cebd"),a="[object Map]",s="[object Set]";function d(e){return function(t){var r=n(t);return r==a?c(t):r==s?i(t):o(t,e(t))}}e.exports=d},ec69:function(e,t,r){var o=r("6fcd"),n=r("03dd"),c=r("30c9");function i(e){return c(e)?o(e):n(e)}e.exports=i},ec8c:function(e,t){function r(e){var t=[];if(null!=e)for(var r in Object(e))t.push(r);return t}e.exports=r},ed08:function(e,t,r){"use strict";r.r(t),r.d(t,"Locale",(function(){return o["a"]})),r.d(t,"DateInfo",(function(){return n["a"]})),r.d(t,"Attribute",(function(){return c["a"]})),r.d(t,"AttributeStore",(function(){return i["a"]})),r.d(t,"setupCalendar",(function(){return d})),r.d(t,"evalFn",(function(){return u["h"]})),r.d(t,"pageIsValid",(function(){return u["x"]})),r.d(t,"pageIsBeforePage",(function(){return u["u"]})),r.d(t,"pageIsAfterPage",(function(){return u["t"]})),r.d(t,"pageIsBetweenPages",(function(){return u["v"]})),r.d(t,"pageIsEqualToPage",(function(){return u["w"]})),r.d(t,"pageForDate",(function(){return u["p"]})),r.d(t,"addPages",(function(){return u["a"]})),r.d(t,"pageForThisMonth",(function(){return u["s"]})),r.d(t,"pageForNextMonth",(function(){return u["q"]})),r.d(t,"pageForPrevMonth",(function(){return u["r"]})),r.d(t,"getMaxPage",(function(){return u["j"]})),r.d(t,"datesAreEqual",(function(){return u["d"]})),r.d(t,"arrayHasItems",(function(){return u["b"]})),r.d(t,"findAncestor",(function(){return u["i"]})),r.d(t,"elementHasAncestor",(function(){return u["f"]})),r.d(t,"elementPositionInAncestor",(function(){return u["g"]})),r.d(t,"mixinOptionalProps",(function(){return u["l"]})),r.d(t,"on",(function(){return u["n"]})),r.d(t,"off",(function(){return u["m"]})),r.d(t,"elementContains",(function(){return u["e"]})),r.d(t,"onSpaceOrEnter",(function(){return u["o"]})),r.d(t,"createGuid",(function(){return u["c"]})),r.d(t,"hash",(function(){return u["k"]})),r.d(t,"addTapOrClickHandler",(function(){return l["b"]})),r.d(t,"addHorizontalSwipeHandler",(function(){return l["a"]}));var o=r("29ae"),n=r("cfe5"),c=r("22f3"),i=r("93495"),a=r("51ec"),s=r("1315"),d=function(e){const t=Object(a["b"])(e);return Object(s["a"])(t.screens,!0),t},u=r("2fa3"),l=r("0733")},edfa:function(e,t){function r(e){var t=-1,r=Array(e.size);return e.forEach((function(e,o){r[++t]=[o,e]})),r}e.exports=r},ee59:function(e,t,r){t=e.exports=r("2350")(!1),t.push([e.i,".none-enter-active[data-v-5be4b00c],.none-leave-active[data-v-5be4b00c]{transition-duration:0s}.fade-enter-active[data-v-5be4b00c],.fade-leave-active[data-v-5be4b00c],.slide-down-enter-active[data-v-5be4b00c],.slide-down-leave-active[data-v-5be4b00c],.slide-left-enter-active[data-v-5be4b00c],.slide-left-leave-active[data-v-5be4b00c],.slide-right-enter-active[data-v-5be4b00c],.slide-right-leave-active[data-v-5be4b00c],.slide-up-enter-active[data-v-5be4b00c],.slide-up-leave-active[data-v-5be4b00c]{transition:transform var(--slide-duration) var(--slide-timing),opacity var(--slide-duration) var(--slide-timing);-webkit-backface-visibility:hidden;backface-visibility:hidden}.fade-leave-active[data-v-5be4b00c],.none-leave-active[data-v-5be4b00c],.slide-down-leave-active[data-v-5be4b00c],.slide-left-leave-active[data-v-5be4b00c],.slide-right-leave-active[data-v-5be4b00c],.slide-up-leave-active[data-v-5be4b00c]{position:absolute;width:100%}.fade-enter[data-v-5be4b00c],.fade-leave-to[data-v-5be4b00c],.none-enter[data-v-5be4b00c],.none-leave-to[data-v-5be4b00c],.slide-down-enter[data-v-5be4b00c],.slide-down-leave-to[data-v-5be4b00c],.slide-left-enter[data-v-5be4b00c],.slide-left-leave-to[data-v-5be4b00c],.slide-right-enter[data-v-5be4b00c],.slide-right-leave-to[data-v-5be4b00c],.slide-up-enter[data-v-5be4b00c],.slide-up-leave-to[data-v-5be4b00c]{opacity:0}.slide-left-enter[data-v-5be4b00c],.slide-right-leave-to[data-v-5be4b00c]{transform:translateX(var(--slide-translate))}.slide-left-leave-to[data-v-5be4b00c],.slide-right-enter[data-v-5be4b00c]{transform:translateX(calc(-1*var(--slide-translate)))}.slide-down-leave-to[data-v-5be4b00c],.slide-up-enter[data-v-5be4b00c]{transform:translateY(var(--slide-translate))}.slide-down-enter[data-v-5be4b00c],.slide-up-leave-to[data-v-5be4b00c]{transform:translateY(calc(-1*var(--slide-translate)))}",""])},eed6:function(e,t,r){var o=r("2c66");function n(e){return e&&e.length?o(e):[]}e.exports=n},ef5d:function(e,t){function r(e){return function(t){return null==t?void 0:t[e]}}e.exports=r},efb6:function(e,t,r){var o=r("5e2e");function n(){this.__data__=new o,this.size=0}e.exports=n},f064:function(e,t,r){t=e.exports=r("2350")(!1),t.push([e.i,".vc-grid-container[data-v-3ca35a05]{position:relative;flex-shrink:1;display:grid;overflow:auto;-webkit-overflow-scrolling:touch}.vc-grid-cell[data-v-3ca35a05]{display:flex;justify-content:center;align-items:center}",""])},f0bd:function(e,t,r){"use strict";(function(e){
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var r="undefined"!==typeof window&&"undefined"!==typeof document&&"undefined"!==typeof navigator,o=function(){for(var e=["Edge","Trident","Firefox"],t=0;t<e.length;t+=1)if(r&&navigator.userAgent.indexOf(e[t])>=0)return 1;return 0}();function n(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then((function(){t=!1,e()})))}}function c(e){var t=!1;return function(){t||(t=!0,setTimeout((function(){t=!1,e()}),o))}}var i=r&&window.Promise,a=i?n:c;function s(e){var t={};return e&&"[object Function]"===t.toString.call(e)}function d(e,t){if(1!==e.nodeType)return[];var r=e.ownerDocument.defaultView,o=r.getComputedStyle(e,null);return t?o[t]:o}function u(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function l(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var t=d(e),r=t.overflow,o=t.overflowX,n=t.overflowY;return/(auto|scroll|overlay)/.test(r+n+o)?e:l(u(e))}function f(e){return e&&e.referenceNode?e.referenceNode:e}var v=r&&!(!window.MSInputMethodContext||!document.documentMode),b=r&&/MSIE 10/.test(navigator.userAgent);function h(e){return 11===e?v:10===e?b:v||b}function p(e){if(!e)return document.documentElement;var t=h(10)?document.body:null,r=e.offsetParent||null;while(r===t&&e.nextElementSibling)r=(e=e.nextElementSibling).offsetParent;var o=r&&r.nodeName;return o&&"BODY"!==o&&"HTML"!==o?-1!==["TH","TD","TABLE"].indexOf(r.nodeName)&&"static"===d(r,"position")?p(r):r:e?e.ownerDocument.documentElement:document.documentElement}function g(e){var t=e.nodeName;return"BODY"!==t&&("HTML"===t||p(e.firstElementChild)===e)}function m(e){return null!==e.parentNode?m(e.parentNode):e}function y(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var r=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,o=r?e:t,n=r?t:e,c=document.createRange();c.setStart(o,0),c.setEnd(n,0);var i=c.commonAncestorContainer;if(e!==i&&t!==i||o.contains(n))return g(i)?i:p(i);var a=m(e);return a.host?y(a.host,t):y(e,m(t).host)}function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",r="top"===t?"scrollTop":"scrollLeft",o=e.nodeName;if("BODY"===o||"HTML"===o){var n=e.ownerDocument.documentElement,c=e.ownerDocument.scrollingElement||n;return c[r]}return e[r]}function w(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=x(t,"top"),n=x(t,"left"),c=r?-1:1;return e.top+=o*c,e.bottom+=o*c,e.left+=n*c,e.right+=n*c,e}function k(e,t){var r="x"===t?"Left":"Top",o="Left"===r?"Right":"Bottom";return parseFloat(e["border"+r+"Width"])+parseFloat(e["border"+o+"Width"])}function O(e,t,r,o){return Math.max(t["offset"+e],t["scroll"+e],r["client"+e],r["offset"+e],r["scroll"+e],h(10)?parseInt(r["offset"+e])+parseInt(o["margin"+("Height"===e?"Top":"Left")])+parseInt(o["margin"+("Height"===e?"Bottom":"Right")]):0)}function j(e){var t=e.body,r=e.documentElement,o=h(10)&&getComputedStyle(r);return{height:O("Height",t,r,o),width:O("Width",t,r,o)}}var D=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},P=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),M=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e};function E(e){return S({},e,{right:e.left+e.width,bottom:e.top+e.height})}function _(e){var t={};try{if(h(10)){t=e.getBoundingClientRect();var r=x(e,"top"),o=x(e,"left");t.top+=r,t.left+=o,t.bottom+=r,t.right+=o}else t=e.getBoundingClientRect()}catch(f){}var n={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},c="HTML"===e.nodeName?j(e.ownerDocument):{},i=c.width||e.clientWidth||n.width,a=c.height||e.clientHeight||n.height,s=e.offsetWidth-i,u=e.offsetHeight-a;if(s||u){var l=d(e);s-=k(l,"x"),u-=k(l,"y"),n.width-=s,n.height-=u}return E(n)}function Y(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=h(10),n="HTML"===t.nodeName,c=_(e),i=_(t),a=l(e),s=d(t),u=parseFloat(s.borderTopWidth),f=parseFloat(s.borderLeftWidth);r&&n&&(i.top=Math.max(i.top,0),i.left=Math.max(i.left,0));var v=E({top:c.top-i.top-u,left:c.left-i.left-f,width:c.width,height:c.height});if(v.marginTop=0,v.marginLeft=0,!o&&n){var b=parseFloat(s.marginTop),p=parseFloat(s.marginLeft);v.top-=u-b,v.bottom-=u-b,v.left-=f-p,v.right-=f-p,v.marginTop=b,v.marginLeft=p}return(o&&!r?t.contains(a):t===a&&"BODY"!==a.nodeName)&&(v=w(v,t)),v}function C(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=e.ownerDocument.documentElement,o=Y(e,r),n=Math.max(r.clientWidth,window.innerWidth||0),c=Math.max(r.clientHeight,window.innerHeight||0),i=t?0:x(r),a=t?0:x(r,"left"),s={top:i-o.top+o.marginTop,left:a-o.left+o.marginLeft,width:n,height:c};return E(s)}function I(e){var t=e.nodeName;if("BODY"===t||"HTML"===t)return!1;if("fixed"===d(e,"position"))return!0;var r=u(e);return!!r&&I(r)}function $(e){if(!e||!e.parentElement||h())return document.documentElement;var t=e.parentElement;while(t&&"none"===d(t,"transform"))t=t.parentElement;return t||document.documentElement}function A(e,t,r,o){var n=arguments.length>4&&void 0!==arguments[4]&&arguments[4],c={top:0,left:0},i=n?$(e):y(e,f(t));if("viewport"===o)c=C(i,n);else{var a=void 0;"scrollParent"===o?(a=l(u(t)),"BODY"===a.nodeName&&(a=e.ownerDocument.documentElement)):a="window"===o?e.ownerDocument.documentElement:o;var s=Y(a,i,n);if("HTML"!==a.nodeName||I(i))c=s;else{var d=j(e.ownerDocument),v=d.height,b=d.width;c.top+=s.top-s.marginTop,c.bottom=v+s.top,c.left+=s.left-s.marginLeft,c.right=b+s.left}}r=r||0;var h="number"===typeof r;return c.left+=h?r:r.left||0,c.top+=h?r:r.top||0,c.right-=h?r:r.right||0,c.bottom-=h?r:r.bottom||0,c}function T(e){var t=e.width,r=e.height;return t*r}function L(e,t,r,o,n){var c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var i=A(r,o,c,n),a={top:{width:i.width,height:t.top-i.top},right:{width:i.right-t.right,height:i.height},bottom:{width:i.width,height:i.bottom-t.bottom},left:{width:t.left-i.left,height:i.height}},s=Object.keys(a).map((function(e){return S({key:e},a[e],{area:T(a[e])})})).sort((function(e,t){return t.area-e.area})),d=s.filter((function(e){var t=e.width,o=e.height;return t>=r.clientWidth&&o>=r.clientHeight})),u=d.length>0?d[0].key:s[0].key,l=e.split("-")[1];return u+(l?"-"+l:"")}function F(e,t,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,n=o?$(t):y(t,f(r));return Y(r,n,o)}function N(e){var t=e.ownerDocument.defaultView,r=t.getComputedStyle(e),o=parseFloat(r.marginTop||0)+parseFloat(r.marginBottom||0),n=parseFloat(r.marginLeft||0)+parseFloat(r.marginRight||0),c={width:e.offsetWidth+n,height:e.offsetHeight+o};return c}function z(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,(function(e){return t[e]}))}function R(e,t,r){r=r.split("-")[0];var o=N(e),n={width:o.width,height:o.height},c=-1!==["right","left"].indexOf(r),i=c?"top":"left",a=c?"left":"top",s=c?"height":"width",d=c?"width":"height";return n[i]=t[i]+t[s]/2-o[s]/2,n[a]=r===a?t[a]-o[d]:t[z(a)],n}function V(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function H(e,t,r){if(Array.prototype.findIndex)return e.findIndex((function(e){return e[t]===r}));var o=V(e,(function(e){return e[t]===r}));return e.indexOf(o)}function W(e,t,r){var o=void 0===r?e:e.slice(0,H(e,"name",r));return o.forEach((function(e){e["function"]&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var r=e["function"]||e.fn;e.enabled&&s(r)&&(t.offsets.popper=E(t.offsets.popper),t.offsets.reference=E(t.offsets.reference),t=r(t,e))})),t}function B(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=F(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=L(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=R(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",e=W(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function U(e,t){return e.some((function(e){var r=e.name,o=e.enabled;return o&&r===t}))}function G(e){for(var t=[!1,"ms","Webkit","Moz","O"],r=e.charAt(0).toUpperCase()+e.slice(1),o=0;o<t.length;o++){var n=t[o],c=n?""+n+r:e;if("undefined"!==typeof document.body.style[c])return c}return null}function q(){return this.state.isDestroyed=!0,U(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[G("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function K(e){var t=e.ownerDocument;return t?t.defaultView:window}function Z(e,t,r,o){var n="BODY"===e.nodeName,c=n?e.ownerDocument.defaultView:e;c.addEventListener(t,r,{passive:!0}),n||Z(l(c.parentNode),t,r,o),o.push(c)}function X(e,t,r,o){r.updateBound=o,K(e).addEventListener("resize",r.updateBound,{passive:!0});var n=l(e);return Z(n,"scroll",r.updateBound,r.scrollParents),r.scrollElement=n,r.eventsEnabled=!0,r}function J(){this.state.eventsEnabled||(this.state=X(this.reference,this.options,this.state,this.scheduleUpdate))}function Q(e,t){return K(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach((function(e){e.removeEventListener("scroll",t.updateBound)})),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function ee(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=Q(this.reference,this.state))}function te(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function re(e,t){Object.keys(t).forEach((function(r){var o="";-1!==["width","height","top","right","bottom","left"].indexOf(r)&&te(t[r])&&(o="px"),e.style[r]=t[r]+o}))}function oe(e,t){Object.keys(t).forEach((function(r){var o=t[r];!1!==o?e.setAttribute(r,t[r]):e.removeAttribute(r)}))}function ne(e){return re(e.instance.popper,e.styles),oe(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&re(e.arrowElement,e.arrowStyles),e}function ce(e,t,r,o,n){var c=F(n,t,e,r.positionFixed),i=L(r.placement,c,t,e,r.modifiers.flip.boundariesElement,r.modifiers.flip.padding);return t.setAttribute("x-placement",i),re(t,{position:r.positionFixed?"fixed":"absolute"}),r}function ie(e,t){var r=e.offsets,o=r.popper,n=r.reference,c=Math.round,i=Math.floor,a=function(e){return e},s=c(n.width),d=c(o.width),u=-1!==["left","right"].indexOf(e.placement),l=-1!==e.placement.indexOf("-"),f=s%2===d%2,v=s%2===1&&d%2===1,b=t?u||l||f?c:i:a,h=t?c:a;return{left:b(v&&!l&&t?o.left-1:o.left),top:h(o.top),bottom:h(o.bottom),right:b(o.right)}}var ae=r&&/Firefox/i.test(navigator.userAgent);function se(e,t){var r=t.x,o=t.y,n=e.offsets.popper,c=V(e.instance.modifiers,(function(e){return"applyStyle"===e.name})).gpuAcceleration;void 0!==c&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var i=void 0!==c?c:t.gpuAcceleration,a=p(e.instance.popper),s=_(a),d={position:n.position},u=ie(e,window.devicePixelRatio<2||!ae),l="bottom"===r?"top":"bottom",f="right"===o?"left":"right",v=G("transform"),b=void 0,h=void 0;if(h="bottom"===l?"HTML"===a.nodeName?-a.clientHeight+u.bottom:-s.height+u.bottom:u.top,b="right"===f?"HTML"===a.nodeName?-a.clientWidth+u.right:-s.width+u.right:u.left,i&&v)d[v]="translate3d("+b+"px, "+h+"px, 0)",d[l]=0,d[f]=0,d.willChange="transform";else{var g="bottom"===l?-1:1,m="right"===f?-1:1;d[l]=h*g,d[f]=b*m,d.willChange=l+", "+f}var y={"x-placement":e.placement};return e.attributes=S({},y,e.attributes),e.styles=S({},d,e.styles),e.arrowStyles=S({},e.offsets.arrow,e.arrowStyles),e}function de(e,t,r){var o=V(e,(function(e){var r=e.name;return r===t})),n=!!o&&e.some((function(e){return e.name===r&&e.enabled&&e.order<o.order}));if(!n){var c="`"+t+"`",i="`"+r+"`";console.warn(i+" modifier is required by "+c+" modifier in order to work, be sure to include it before "+c+"!")}return n}function ue(e,t){var r;if(!de(e.instance.modifiers,"arrow","keepTogether"))return e;var o=t.element;if("string"===typeof o){if(o=e.instance.popper.querySelector(o),!o)return e}else if(!e.instance.popper.contains(o))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var n=e.placement.split("-")[0],c=e.offsets,i=c.popper,a=c.reference,s=-1!==["left","right"].indexOf(n),u=s?"height":"width",l=s?"Top":"Left",f=l.toLowerCase(),v=s?"left":"top",b=s?"bottom":"right",h=N(o)[u];a[b]-h<i[f]&&(e.offsets.popper[f]-=i[f]-(a[b]-h)),a[f]+h>i[b]&&(e.offsets.popper[f]+=a[f]+h-i[b]),e.offsets.popper=E(e.offsets.popper);var p=a[f]+a[u]/2-h/2,g=d(e.instance.popper),m=parseFloat(g["margin"+l]),y=parseFloat(g["border"+l+"Width"]),x=p-e.offsets.popper[f]-m-y;return x=Math.max(Math.min(i[u]-h,x),0),e.arrowElement=o,e.offsets.arrow=(r={},M(r,f,Math.round(x)),M(r,v,""),r),e}function le(e){return"end"===e?"start":"start"===e?"end":e}var fe=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],ve=fe.slice(3);function be(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=ve.indexOf(e),o=ve.slice(r+1).concat(ve.slice(0,r));return t?o.reverse():o}var he={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};function pe(e,t){if(U(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var r=A(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),o=e.placement.split("-")[0],n=z(o),c=e.placement.split("-")[1]||"",i=[];switch(t.behavior){case he.FLIP:i=[o,n];break;case he.CLOCKWISE:i=be(o);break;case he.COUNTERCLOCKWISE:i=be(o,!0);break;default:i=t.behavior}return i.forEach((function(a,s){if(o!==a||i.length===s+1)return e;o=e.placement.split("-")[0],n=z(o);var d=e.offsets.popper,u=e.offsets.reference,l=Math.floor,f="left"===o&&l(d.right)>l(u.left)||"right"===o&&l(d.left)<l(u.right)||"top"===o&&l(d.bottom)>l(u.top)||"bottom"===o&&l(d.top)<l(u.bottom),v=l(d.left)<l(r.left),b=l(d.right)>l(r.right),h=l(d.top)<l(r.top),p=l(d.bottom)>l(r.bottom),g="left"===o&&v||"right"===o&&b||"top"===o&&h||"bottom"===o&&p,m=-1!==["top","bottom"].indexOf(o),y=!!t.flipVariations&&(m&&"start"===c&&v||m&&"end"===c&&b||!m&&"start"===c&&h||!m&&"end"===c&&p),x=!!t.flipVariationsByContent&&(m&&"start"===c&&b||m&&"end"===c&&v||!m&&"start"===c&&p||!m&&"end"===c&&h),w=y||x;(f||g||w)&&(e.flipped=!0,(f||g)&&(o=i[s+1]),w&&(c=le(c)),e.placement=o+(c?"-"+c:""),e.offsets.popper=S({},e.offsets.popper,R(e.instance.popper,e.offsets.reference,e.placement)),e=W(e.instance.modifiers,e,"flip"))})),e}function ge(e){var t=e.offsets,r=t.popper,o=t.reference,n=e.placement.split("-")[0],c=Math.floor,i=-1!==["top","bottom"].indexOf(n),a=i?"right":"bottom",s=i?"left":"top",d=i?"width":"height";return r[a]<c(o[s])&&(e.offsets.popper[s]=c(o[s])-r[d]),r[s]>c(o[a])&&(e.offsets.popper[s]=c(o[a])),e}function me(e,t,r,o){var n=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),c=+n[1],i=n[2];if(!c)return e;if(0===i.indexOf("%")){var a=void 0;switch(i){case"%p":a=r;break;case"%":case"%r":default:a=o}var s=E(a);return s[t]/100*c}if("vh"===i||"vw"===i){var d=void 0;return d="vh"===i?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0),d/100*c}return c}function ye(e,t,r,o){var n=[0,0],c=-1!==["right","left"].indexOf(o),i=e.split(/(\+|\-)/).map((function(e){return e.trim()})),a=i.indexOf(V(i,(function(e){return-1!==e.search(/,|\s/)})));i[a]&&-1===i[a].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var s=/\s*,\s*|\s+/,d=-1!==a?[i.slice(0,a).concat([i[a].split(s)[0]]),[i[a].split(s)[1]].concat(i.slice(a+1))]:[i];return d=d.map((function(e,o){var n=(1===o?!c:c)?"height":"width",i=!1;return e.reduce((function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,i=!0,e):i?(e[e.length-1]+=t,i=!1,e):e.concat(t)}),[]).map((function(e){return me(e,n,t,r)}))})),d.forEach((function(e,t){e.forEach((function(r,o){te(r)&&(n[t]+=r*("-"===e[o-1]?-1:1))}))})),n}function xe(e,t){var r=t.offset,o=e.placement,n=e.offsets,c=n.popper,i=n.reference,a=o.split("-")[0],s=void 0;return s=te(+r)?[+r,0]:ye(r,c,i,a),"left"===a?(c.top+=s[0],c.left-=s[1]):"right"===a?(c.top+=s[0],c.left+=s[1]):"top"===a?(c.left+=s[0],c.top-=s[1]):"bottom"===a&&(c.left+=s[0],c.top+=s[1]),e.popper=c,e}function we(e,t){var r=t.boundariesElement||p(e.instance.popper);e.instance.reference===r&&(r=p(r));var o=G("transform"),n=e.instance.popper.style,c=n.top,i=n.left,a=n[o];n.top="",n.left="",n[o]="";var s=A(e.instance.popper,e.instance.reference,t.padding,r,e.positionFixed);n.top=c,n.left=i,n[o]=a,t.boundaries=s;var d=t.priority,u=e.offsets.popper,l={primary:function(e){var r=u[e];return u[e]<s[e]&&!t.escapeWithReference&&(r=Math.max(u[e],s[e])),M({},e,r)},secondary:function(e){var r="right"===e?"left":"top",o=u[r];return u[e]>s[e]&&!t.escapeWithReference&&(o=Math.min(u[r],s[e]-("right"===e?u.width:u.height))),M({},r,o)}};return d.forEach((function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";u=S({},u,l[t](e))})),e.offsets.popper=u,e}function ke(e){var t=e.placement,r=t.split("-")[0],o=t.split("-")[1];if(o){var n=e.offsets,c=n.reference,i=n.popper,a=-1!==["bottom","top"].indexOf(r),s=a?"left":"top",d=a?"width":"height",u={start:M({},s,c[s]),end:M({},s,c[s]+c[d]-i[d])};e.offsets.popper=S({},i,u[o])}return e}function Oe(e){if(!de(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,r=V(e.instance.modifiers,(function(e){return"preventOverflow"===e.name})).boundaries;if(t.bottom<r.top||t.left>r.right||t.top>r.bottom||t.right<r.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}function je(e){var t=e.placement,r=t.split("-")[0],o=e.offsets,n=o.popper,c=o.reference,i=-1!==["left","right"].indexOf(r),a=-1===["top","left"].indexOf(r);return n[i?"left":"top"]=c[r]-(a?n[i?"width":"height"]:0),e.placement=z(t),e.offsets.popper=E(n),e}var De={shift:{order:100,enabled:!0,fn:ke},offset:{order:200,enabled:!0,fn:xe,offset:0},preventOverflow:{order:300,enabled:!0,fn:we,priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:ge},arrow:{order:500,enabled:!0,fn:ue,element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:pe,behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:je},hide:{order:800,enabled:!0,fn:Oe},computeStyle:{order:850,enabled:!0,fn:se,gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:ne,onLoad:ce,gpuAcceleration:void 0}},Pe={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:De},Me=function(){function e(t,r){var o=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};D(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(o.update)},this.update=a(this.update.bind(this)),this.options=S({},e.Defaults,n),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=r&&r.jquery?r[0]:r,this.options.modifiers={},Object.keys(S({},e.Defaults.modifiers,n.modifiers)).forEach((function(t){o.options.modifiers[t]=S({},e.Defaults.modifiers[t]||{},n.modifiers?n.modifiers[t]:{})})),this.modifiers=Object.keys(this.options.modifiers).map((function(e){return S({name:e},o.options.modifiers[e])})).sort((function(e,t){return e.order-t.order})),this.modifiers.forEach((function(e){e.enabled&&s(e.onLoad)&&e.onLoad(o.reference,o.popper,o.options,e,o.state)})),this.update();var c=this.options.eventsEnabled;c&&this.enableEventListeners(),this.state.eventsEnabled=c}return P(e,[{key:"update",value:function(){return B.call(this)}},{key:"destroy",value:function(){return q.call(this)}},{key:"enableEventListeners",value:function(){return J.call(this)}},{key:"disableEventListeners",value:function(){return ee.call(this)}}]),e}();Me.Utils=("undefined"!==typeof window?window:e).PopperUtils,Me.placements=fe,Me.Defaults=Pe,t["a"]=Me}).call(this,r("c8ba"))},f15d:function(e,t,r){"use strict";r("ac6a");var o=r("9404");const n={ar:{dow:7,L:"D/‏M/‏YYYY"},bg:{dow:2,L:"D.MM.YYYY"},ca:{dow:2,L:"DD/MM/YYYY"},"zh-CN":{dow:2,L:"YYYY/MM/DD"},"zh-TW":{dow:1,L:"YYYY/MM/DD"},hr:{dow:2,L:"DD.MM.YYYY"},cs:{dow:2,L:"DD.MM.YYYY"},da:{dow:2,L:"DD.MM.YYYY"},nl:{dow:2,L:"DD-MM-YYYY"},"en-US":{dow:1,L:"MM/DD/YYYY"},"en-AU":{dow:2,L:"DD/MM/YYYY"},"en-CA":{dow:1,L:"YYYY-MM-DD"},"en-GB":{dow:2,L:"DD/MM/YYYY"},"en-IE":{dow:2,L:"DD-MM-YYYY"},"en-NZ":{dow:2,L:"DD/MM/YYYY"},"en-ZA":{dow:1,L:"YYYY/MM/DD"},eo:{dow:2,L:"YYYY-MM-DD"},et:{dow:2,L:"DD.MM.YYYY"},fi:{dow:2,L:"DD.MM.YYYY"},fr:{dow:2,L:"DD/MM/YYYY"},"fr-CA":{dow:1,L:"YYYY-MM-DD"},"fr-CH":{dow:2,L:"DD.MM.YYYY"},de:{dow:2,L:"DD.MM.YYYY"},he:{dow:1,L:"DD.MM.YYYY"},id:{dow:2,L:"DD/MM/YYYY"},it:{dow:2,L:"DD/MM/YYYY"},ja:{dow:1,L:"YYYY年M月D日"},ko:{dow:1,L:"YYYY.MM.DD"},lv:{dow:2,L:"DD.MM.YYYY"},lt:{dow:2,L:"DD.MM.YYYY"},mk:{dow:2,L:"D.MM.YYYY"},nb:{dow:2,L:"D. MMMM YYYY"},nn:{dow:2,L:"D. MMMM YYYY"},pl:{dow:2,L:"DD.MM.YYYY"},pt:{dow:2,L:"DD/MM/YYYY"},ro:{dow:2,L:"DD.MM.YYYY"},ru:{dow:2,L:"DD.MM.YYYY"},sk:{dow:2,L:"DD.MM.YYYY"},"es-ES":{dow:2,L:"DD/MM/YYYY"},"es-MX":{dow:2,L:"DD/MM/YYYY"},sv:{dow:2,L:"YYYY-MM-DD"},th:{dow:1,L:"DD/MM/YYYY"},tr:{dow:2,L:"DD.MM.YYYY"},uk:{dow:2,L:"DD.MM.YYYY"},vi:{dow:2,L:"DD/MM/YYYY"}};n.en=n["en-US"],n.es=n["es-ES"],n.no=n.nb,n.zh=n["zh-CN"],Object(o["u"])(n).forEach((function([e,{dow:t,L:r}]){n[e]={id:e,firstDayOfWeek:t,masks:{L:r}}})),t["a"]=n},f3c1:function(e,t){var r=800,o=16,n=Date.now;function c(e){var t=0,c=0;return function(){var i=n(),a=o-(i-c);if(c=i,a>0){if(++t>=r)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}e.exports=c},f498:function(e,t,r){t=e.exports=r("2350")(!1),t.push([e.i,".vc-reset,.vc-reset *{line-height:1.5;box-sizing:border-box}.vc-reset:focus,.vc-reset :focus{outline:none}.vc-reset [role=button],.vc-reset button{cursor:pointer}.vc-border,.vc-border-2,.vc-border-3{border-style:solid}.vc-appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.vc-bg-fixed{background-attachment:fixed}.vc-bg-local{background-attachment:local}.vc-bg-scroll{background-attachment:scroll}.vc-bg-transparent{background-color:initial}.vc-bg-black{background-color:#000}.vc-bg-white{background-color:#fff}.vc-bg-gray-100{background-color:#f7fafc}.vc-bg-gray-200{background-color:#edf2f7}.vc-bg-gray-300{background-color:#e2e8f0}.vc-bg-gray-400{background-color:#cbd5e0}.vc-bg-gray-500{background-color:#a0aec0}.vc-bg-gray-600{background-color:#718096}.vc-bg-gray-700{background-color:#4a5568}.vc-bg-gray-800{background-color:#2d3748}.vc-bg-gray-900{background-color:#1a202c}.vc-bg-red-100{background-color:#fff5f5}.vc-bg-red-200{background-color:#fed7d7}.vc-bg-red-300{background-color:#feb2b2}.vc-bg-red-400{background-color:#fc8181}.vc-bg-red-500{background-color:#f56565}.vc-bg-red-600{background-color:#e53e3e}.vc-bg-red-700{background-color:#c53030}.vc-bg-red-800{background-color:#9b2c2c}.vc-bg-red-900{background-color:#742a2a}.vc-bg-orange-100{background-color:#fffaf0}.vc-bg-orange-200{background-color:#feebc8}.vc-bg-orange-300{background-color:#fbd38d}.vc-bg-orange-400{background-color:#f6ad55}.vc-bg-orange-500{background-color:#ed8936}.vc-bg-orange-600{background-color:#dd6b20}.vc-bg-orange-700{background-color:#c05621}.vc-bg-orange-800{background-color:#9c4221}.vc-bg-orange-900{background-color:#7b341e}.vc-bg-yellow-100{background-color:ivory}.vc-bg-yellow-200{background-color:#fefcbf}.vc-bg-yellow-300{background-color:#faf089}.vc-bg-yellow-400{background-color:#f6e05e}.vc-bg-yellow-500{background-color:#ecc94b}.vc-bg-yellow-600{background-color:#d69e2e}.vc-bg-yellow-700{background-color:#b7791f}.vc-bg-yellow-800{background-color:#975a16}.vc-bg-yellow-900{background-color:#744210}.vc-bg-green-100{background-color:#f0fff4}.vc-bg-green-200{background-color:#c6f6d5}.vc-bg-green-300{background-color:#9ae6b4}.vc-bg-green-400{background-color:#68d391}.vc-bg-green-500{background-color:#48bb78}.vc-bg-green-600{background-color:#38a169}.vc-bg-green-700{background-color:#2f855a}.vc-bg-green-800{background-color:#276749}.vc-bg-green-900{background-color:#22543d}.vc-bg-teal-100{background-color:#e6fffa}.vc-bg-teal-200{background-color:#b2f5ea}.vc-bg-teal-300{background-color:#81e6d9}.vc-bg-teal-400{background-color:#4fd1c5}.vc-bg-teal-500{background-color:#38b2ac}.vc-bg-teal-600{background-color:#319795}.vc-bg-teal-700{background-color:#2c7a7b}.vc-bg-teal-800{background-color:#285e61}.vc-bg-teal-900{background-color:#234e52}.vc-bg-blue-100{background-color:#ebf8ff}.vc-bg-blue-200{background-color:#bee3f8}.vc-bg-blue-300{background-color:#90cdf4}.vc-bg-blue-400{background-color:#63b3ed}.vc-bg-blue-500{background-color:#4299e1}.vc-bg-blue-600{background-color:#3182ce}.vc-bg-blue-700{background-color:#2b6cb0}.vc-bg-blue-800{background-color:#2c5282}.vc-bg-blue-900{background-color:#2a4365}.vc-bg-indigo-100{background-color:#ebf4ff}.vc-bg-indigo-200{background-color:#c3dafe}.vc-bg-indigo-300{background-color:#a3bffa}.vc-bg-indigo-400{background-color:#7f9cf5}.vc-bg-indigo-500{background-color:#667eea}.vc-bg-indigo-600{background-color:#5a67d8}.vc-bg-indigo-700{background-color:#4c51bf}.vc-bg-indigo-800{background-color:#434190}.vc-bg-indigo-900{background-color:#3c366b}.vc-bg-purple-100{background-color:#faf5ff}.vc-bg-purple-200{background-color:#e9d8fd}.vc-bg-purple-300{background-color:#d6bcfa}.vc-bg-purple-400{background-color:#b794f4}.vc-bg-purple-500{background-color:#9f7aea}.vc-bg-purple-600{background-color:#805ad5}.vc-bg-purple-700{background-color:#6b46c1}.vc-bg-purple-800{background-color:#553c9a}.vc-bg-purple-900{background-color:#44337a}.vc-bg-pink-100{background-color:#fff5f7}.vc-bg-pink-200{background-color:#fed7e2}.vc-bg-pink-300{background-color:#fbb6ce}.vc-bg-pink-400{background-color:#f687b3}.vc-bg-pink-500{background-color:#ed64a6}.vc-bg-pink-600{background-color:#d53f8c}.vc-bg-pink-700{background-color:#b83280}.vc-bg-pink-800{background-color:#97266d}.vc-bg-pink-900{background-color:#702459}.hover\\:vc-bg-transparent:hover{background-color:initial}.hover\\:vc-bg-black:hover{background-color:#000}.hover\\:vc-bg-white:hover{background-color:#fff}.hover\\:vc-bg-gray-100:hover{background-color:#f7fafc}.hover\\:vc-bg-gray-200:hover{background-color:#edf2f7}.hover\\:vc-bg-gray-300:hover{background-color:#e2e8f0}.hover\\:vc-bg-gray-400:hover{background-color:#cbd5e0}.hover\\:vc-bg-gray-500:hover{background-color:#a0aec0}.hover\\:vc-bg-gray-600:hover{background-color:#718096}.hover\\:vc-bg-gray-700:hover{background-color:#4a5568}.hover\\:vc-bg-gray-800:hover{background-color:#2d3748}.hover\\:vc-bg-gray-900:hover{background-color:#1a202c}.hover\\:vc-bg-red-100:hover{background-color:#fff5f5}.hover\\:vc-bg-red-200:hover{background-color:#fed7d7}.hover\\:vc-bg-red-300:hover{background-color:#feb2b2}.hover\\:vc-bg-red-400:hover{background-color:#fc8181}.hover\\:vc-bg-red-500:hover{background-color:#f56565}.hover\\:vc-bg-red-600:hover{background-color:#e53e3e}.hover\\:vc-bg-red-700:hover{background-color:#c53030}.hover\\:vc-bg-red-800:hover{background-color:#9b2c2c}.hover\\:vc-bg-red-900:hover{background-color:#742a2a}.hover\\:vc-bg-orange-100:hover{background-color:#fffaf0}.hover\\:vc-bg-orange-200:hover{background-color:#feebc8}.hover\\:vc-bg-orange-300:hover{background-color:#fbd38d}.hover\\:vc-bg-orange-400:hover{background-color:#f6ad55}.hover\\:vc-bg-orange-500:hover{background-color:#ed8936}.hover\\:vc-bg-orange-600:hover{background-color:#dd6b20}.hover\\:vc-bg-orange-700:hover{background-color:#c05621}.hover\\:vc-bg-orange-800:hover{background-color:#9c4221}.hover\\:vc-bg-orange-900:hover{background-color:#7b341e}.hover\\:vc-bg-yellow-100:hover{background-color:ivory}.hover\\:vc-bg-yellow-200:hover{background-color:#fefcbf}.hover\\:vc-bg-yellow-300:hover{background-color:#faf089}.hover\\:vc-bg-yellow-400:hover{background-color:#f6e05e}.hover\\:vc-bg-yellow-500:hover{background-color:#ecc94b}.hover\\:vc-bg-yellow-600:hover{background-color:#d69e2e}.hover\\:vc-bg-yellow-700:hover{background-color:#b7791f}.hover\\:vc-bg-yellow-800:hover{background-color:#975a16}.hover\\:vc-bg-yellow-900:hover{background-color:#744210}.hover\\:vc-bg-green-100:hover{background-color:#f0fff4}.hover\\:vc-bg-green-200:hover{background-color:#c6f6d5}.hover\\:vc-bg-green-300:hover{background-color:#9ae6b4}.hover\\:vc-bg-green-400:hover{background-color:#68d391}.hover\\:vc-bg-green-500:hover{background-color:#48bb78}.hover\\:vc-bg-green-600:hover{background-color:#38a169}.hover\\:vc-bg-green-700:hover{background-color:#2f855a}.hover\\:vc-bg-green-800:hover{background-color:#276749}.hover\\:vc-bg-green-900:hover{background-color:#22543d}.hover\\:vc-bg-teal-100:hover{background-color:#e6fffa}.hover\\:vc-bg-teal-200:hover{background-color:#b2f5ea}.hover\\:vc-bg-teal-300:hover{background-color:#81e6d9}.hover\\:vc-bg-teal-400:hover{background-color:#4fd1c5}.hover\\:vc-bg-teal-500:hover{background-color:#38b2ac}.hover\\:vc-bg-teal-600:hover{background-color:#319795}.hover\\:vc-bg-teal-700:hover{background-color:#2c7a7b}.hover\\:vc-bg-teal-800:hover{background-color:#285e61}.hover\\:vc-bg-teal-900:hover{background-color:#234e52}.hover\\:vc-bg-blue-100:hover{background-color:#ebf8ff}.hover\\:vc-bg-blue-200:hover{background-color:#bee3f8}.hover\\:vc-bg-blue-300:hover{background-color:#90cdf4}.hover\\:vc-bg-blue-400:hover{background-color:#63b3ed}.hover\\:vc-bg-blue-500:hover{background-color:#4299e1}.hover\\:vc-bg-blue-600:hover{background-color:#3182ce}.hover\\:vc-bg-blue-700:hover{background-color:#2b6cb0}.hover\\:vc-bg-blue-800:hover{background-color:#2c5282}.hover\\:vc-bg-blue-900:hover{background-color:#2a4365}.hover\\:vc-bg-indigo-100:hover{background-color:#ebf4ff}.hover\\:vc-bg-indigo-200:hover{background-color:#c3dafe}.hover\\:vc-bg-indigo-300:hover{background-color:#a3bffa}.hover\\:vc-bg-indigo-400:hover{background-color:#7f9cf5}.hover\\:vc-bg-indigo-500:hover{background-color:#667eea}.hover\\:vc-bg-indigo-600:hover{background-color:#5a67d8}.hover\\:vc-bg-indigo-700:hover{background-color:#4c51bf}.hover\\:vc-bg-indigo-800:hover{background-color:#434190}.hover\\:vc-bg-indigo-900:hover{background-color:#3c366b}.hover\\:vc-bg-purple-100:hover{background-color:#faf5ff}.hover\\:vc-bg-purple-200:hover{background-color:#e9d8fd}.hover\\:vc-bg-purple-300:hover{background-color:#d6bcfa}.hover\\:vc-bg-purple-400:hover{background-color:#b794f4}.hover\\:vc-bg-purple-500:hover{background-color:#9f7aea}.hover\\:vc-bg-purple-600:hover{background-color:#805ad5}.hover\\:vc-bg-purple-700:hover{background-color:#6b46c1}.hover\\:vc-bg-purple-800:hover{background-color:#553c9a}.hover\\:vc-bg-purple-900:hover{background-color:#44337a}.hover\\:vc-bg-pink-100:hover{background-color:#fff5f7}.hover\\:vc-bg-pink-200:hover{background-color:#fed7e2}.hover\\:vc-bg-pink-300:hover{background-color:#fbb6ce}.hover\\:vc-bg-pink-400:hover{background-color:#f687b3}.hover\\:vc-bg-pink-500:hover{background-color:#ed64a6}.hover\\:vc-bg-pink-600:hover{background-color:#d53f8c}.hover\\:vc-bg-pink-700:hover{background-color:#b83280}.hover\\:vc-bg-pink-800:hover{background-color:#97266d}.hover\\:vc-bg-pink-900:hover{background-color:#702459}.vc-bg-bottom{background-position:bottom}.vc-bg-center{background-position:50%}.vc-bg-left{background-position:0}.vc-bg-left-bottom{background-position:0 100%}.vc-bg-left-top{background-position:0 0}.vc-bg-right{background-position:100%}.vc-bg-right-bottom{background-position:100% 100%}.vc-bg-right-top{background-position:100% 0}.vc-bg-top{background-position:top}.vc-bg-repeat{background-repeat:repeat}.vc-bg-no-repeat{background-repeat:no-repeat}.vc-bg-repeat-x{background-repeat:repeat-x}.vc-bg-repeat-y{background-repeat:repeat-y}.vc-bg-repeat-round{background-repeat:round}.vc-bg-repeat-space{background-repeat:space}.vc-bg-auto{background-size:auto}.vc-bg-cover{background-size:cover}.vc-bg-contain{background-size:contain}.vc-border-collapse{border-collapse:collapse}.vc-border-separate{border-collapse:initial}.vc-border-transparent{border-color:transparent}.vc-border-black{border-color:#000}.vc-border-white{border-color:#fff}.vc-border-gray-100{border-color:#f7fafc}.vc-border-gray-200{border-color:#edf2f7}.vc-border-gray-300{border-color:#e2e8f0}.vc-border-gray-400{border-color:#cbd5e0}.vc-border-gray-500{border-color:#a0aec0}.vc-border-gray-600{border-color:#718096}.vc-border-gray-700{border-color:#4a5568}.vc-border-gray-800{border-color:#2d3748}.vc-border-gray-900{border-color:#1a202c}.vc-border-red-100{border-color:#fff5f5}.vc-border-red-200{border-color:#fed7d7}.vc-border-red-300{border-color:#feb2b2}.vc-border-red-400{border-color:#fc8181}.vc-border-red-500{border-color:#f56565}.vc-border-red-600{border-color:#e53e3e}.vc-border-red-700{border-color:#c53030}.vc-border-red-800{border-color:#9b2c2c}.vc-border-red-900{border-color:#742a2a}.vc-border-orange-100{border-color:#fffaf0}.vc-border-orange-200{border-color:#feebc8}.vc-border-orange-300{border-color:#fbd38d}.vc-border-orange-400{border-color:#f6ad55}.vc-border-orange-500{border-color:#ed8936}.vc-border-orange-600{border-color:#dd6b20}.vc-border-orange-700{border-color:#c05621}.vc-border-orange-800{border-color:#9c4221}.vc-border-orange-900{border-color:#7b341e}.vc-border-yellow-100{border-color:ivory}.vc-border-yellow-200{border-color:#fefcbf}.vc-border-yellow-300{border-color:#faf089}.vc-border-yellow-400{border-color:#f6e05e}.vc-border-yellow-500{border-color:#ecc94b}.vc-border-yellow-600{border-color:#d69e2e}.vc-border-yellow-700{border-color:#b7791f}.vc-border-yellow-800{border-color:#975a16}.vc-border-yellow-900{border-color:#744210}.vc-border-green-100{border-color:#f0fff4}.vc-border-green-200{border-color:#c6f6d5}.vc-border-green-300{border-color:#9ae6b4}.vc-border-green-400{border-color:#68d391}.vc-border-green-500{border-color:#48bb78}.vc-border-green-600{border-color:#38a169}.vc-border-green-700{border-color:#2f855a}.vc-border-green-800{border-color:#276749}.vc-border-green-900{border-color:#22543d}.vc-border-teal-100{border-color:#e6fffa}.vc-border-teal-200{border-color:#b2f5ea}.vc-border-teal-300{border-color:#81e6d9}.vc-border-teal-400{border-color:#4fd1c5}.vc-border-teal-500{border-color:#38b2ac}.vc-border-teal-600{border-color:#319795}.vc-border-teal-700{border-color:#2c7a7b}.vc-border-teal-800{border-color:#285e61}.vc-border-teal-900{border-color:#234e52}.vc-border-blue-100{border-color:#ebf8ff}.vc-border-blue-200{border-color:#bee3f8}.vc-border-blue-300{border-color:#90cdf4}.vc-border-blue-400{border-color:#63b3ed}.vc-border-blue-500{border-color:#4299e1}.vc-border-blue-600{border-color:#3182ce}.vc-border-blue-700{border-color:#2b6cb0}.vc-border-blue-800{border-color:#2c5282}.vc-border-blue-900{border-color:#2a4365}.vc-border-indigo-100{border-color:#ebf4ff}.vc-border-indigo-200{border-color:#c3dafe}.vc-border-indigo-300{border-color:#a3bffa}.vc-border-indigo-400{border-color:#7f9cf5}.vc-border-indigo-500{border-color:#667eea}.vc-border-indigo-600{border-color:#5a67d8}.vc-border-indigo-700{border-color:#4c51bf}.vc-border-indigo-800{border-color:#434190}.vc-border-indigo-900{border-color:#3c366b}.vc-border-purple-100{border-color:#faf5ff}.vc-border-purple-200{border-color:#e9d8fd}.vc-border-purple-300{border-color:#d6bcfa}.vc-border-purple-400{border-color:#b794f4}.vc-border-purple-500{border-color:#9f7aea}.vc-border-purple-600{border-color:#805ad5}.vc-border-purple-700{border-color:#6b46c1}.vc-border-purple-800{border-color:#553c9a}.vc-border-purple-900{border-color:#44337a}.vc-border-pink-100{border-color:#fff5f7}.vc-border-pink-200{border-color:#fed7e2}.vc-border-pink-300{border-color:#fbb6ce}.vc-border-pink-400{border-color:#f687b3}.vc-border-pink-500{border-color:#ed64a6}.vc-border-pink-600{border-color:#d53f8c}.vc-border-pink-700{border-color:#b83280}.vc-border-pink-800{border-color:#97266d}.vc-border-pink-900{border-color:#702459}.hover\\:vc-border-transparent:hover{border-color:transparent}.hover\\:vc-border-black:hover{border-color:#000}.hover\\:vc-border-white:hover{border-color:#fff}.hover\\:vc-border-gray-100:hover{border-color:#f7fafc}.hover\\:vc-border-gray-200:hover{border-color:#edf2f7}.hover\\:vc-border-gray-300:hover{border-color:#e2e8f0}.hover\\:vc-border-gray-400:hover{border-color:#cbd5e0}.hover\\:vc-border-gray-500:hover{border-color:#a0aec0}.hover\\:vc-border-gray-600:hover{border-color:#718096}.hover\\:vc-border-gray-700:hover{border-color:#4a5568}.hover\\:vc-border-gray-800:hover{border-color:#2d3748}.hover\\:vc-border-gray-900:hover{border-color:#1a202c}.hover\\:vc-border-red-100:hover{border-color:#fff5f5}.hover\\:vc-border-red-200:hover{border-color:#fed7d7}.hover\\:vc-border-red-300:hover{border-color:#feb2b2}.hover\\:vc-border-red-400:hover{border-color:#fc8181}.hover\\:vc-border-red-500:hover{border-color:#f56565}.hover\\:vc-border-red-600:hover{border-color:#e53e3e}.hover\\:vc-border-red-700:hover{border-color:#c53030}.hover\\:vc-border-red-800:hover{border-color:#9b2c2c}.hover\\:vc-border-red-900:hover{border-color:#742a2a}.hover\\:vc-border-orange-100:hover{border-color:#fffaf0}.hover\\:vc-border-orange-200:hover{border-color:#feebc8}.hover\\:vc-border-orange-300:hover{border-color:#fbd38d}.hover\\:vc-border-orange-400:hover{border-color:#f6ad55}.hover\\:vc-border-orange-500:hover{border-color:#ed8936}.hover\\:vc-border-orange-600:hover{border-color:#dd6b20}.hover\\:vc-border-orange-700:hover{border-color:#c05621}.hover\\:vc-border-orange-800:hover{border-color:#9c4221}.hover\\:vc-border-orange-900:hover{border-color:#7b341e}.hover\\:vc-border-yellow-100:hover{border-color:ivory}.hover\\:vc-border-yellow-200:hover{border-color:#fefcbf}.hover\\:vc-border-yellow-300:hover{border-color:#faf089}.hover\\:vc-border-yellow-400:hover{border-color:#f6e05e}.hover\\:vc-border-yellow-500:hover{border-color:#ecc94b}.hover\\:vc-border-yellow-600:hover{border-color:#d69e2e}.hover\\:vc-border-yellow-700:hover{border-color:#b7791f}.hover\\:vc-border-yellow-800:hover{border-color:#975a16}.hover\\:vc-border-yellow-900:hover{border-color:#744210}.hover\\:vc-border-green-100:hover{border-color:#f0fff4}.hover\\:vc-border-green-200:hover{border-color:#c6f6d5}.hover\\:vc-border-green-300:hover{border-color:#9ae6b4}.hover\\:vc-border-green-400:hover{border-color:#68d391}.hover\\:vc-border-green-500:hover{border-color:#48bb78}.hover\\:vc-border-green-600:hover{border-color:#38a169}.hover\\:vc-border-green-700:hover{border-color:#2f855a}.hover\\:vc-border-green-800:hover{border-color:#276749}.hover\\:vc-border-green-900:hover{border-color:#22543d}.hover\\:vc-border-teal-100:hover{border-color:#e6fffa}.hover\\:vc-border-teal-200:hover{border-color:#b2f5ea}.hover\\:vc-border-teal-300:hover{border-color:#81e6d9}.hover\\:vc-border-teal-400:hover{border-color:#4fd1c5}.hover\\:vc-border-teal-500:hover{border-color:#38b2ac}.hover\\:vc-border-teal-600:hover{border-color:#319795}.hover\\:vc-border-teal-700:hover{border-color:#2c7a7b}.hover\\:vc-border-teal-800:hover{border-color:#285e61}.hover\\:vc-border-teal-900:hover{border-color:#234e52}.hover\\:vc-border-blue-100:hover{border-color:#ebf8ff}.hover\\:vc-border-blue-200:hover{border-color:#bee3f8}.hover\\:vc-border-blue-300:hover{border-color:#90cdf4}.hover\\:vc-border-blue-400:hover{border-color:#63b3ed}.hover\\:vc-border-blue-500:hover{border-color:#4299e1}.hover\\:vc-border-blue-600:hover{border-color:#3182ce}.hover\\:vc-border-blue-700:hover{border-color:#2b6cb0}.hover\\:vc-border-blue-800:hover{border-color:#2c5282}.hover\\:vc-border-blue-900:hover{border-color:#2a4365}.hover\\:vc-border-indigo-100:hover{border-color:#ebf4ff}.hover\\:vc-border-indigo-200:hover{border-color:#c3dafe}.hover\\:vc-border-indigo-300:hover{border-color:#a3bffa}.hover\\:vc-border-indigo-400:hover{border-color:#7f9cf5}.hover\\:vc-border-indigo-500:hover{border-color:#667eea}.hover\\:vc-border-indigo-600:hover{border-color:#5a67d8}.hover\\:vc-border-indigo-700:hover{border-color:#4c51bf}.hover\\:vc-border-indigo-800:hover{border-color:#434190}.hover\\:vc-border-indigo-900:hover{border-color:#3c366b}.hover\\:vc-border-purple-100:hover{border-color:#faf5ff}.hover\\:vc-border-purple-200:hover{border-color:#e9d8fd}.hover\\:vc-border-purple-300:hover{border-color:#d6bcfa}.hover\\:vc-border-purple-400:hover{border-color:#b794f4}.hover\\:vc-border-purple-500:hover{border-color:#9f7aea}.hover\\:vc-border-purple-600:hover{border-color:#805ad5}.hover\\:vc-border-purple-700:hover{border-color:#6b46c1}.hover\\:vc-border-purple-800:hover{border-color:#553c9a}.hover\\:vc-border-purple-900:hover{border-color:#44337a}.hover\\:vc-border-pink-100:hover{border-color:#fff5f7}.hover\\:vc-border-pink-200:hover{border-color:#fed7e2}.hover\\:vc-border-pink-300:hover{border-color:#fbb6ce}.hover\\:vc-border-pink-400:hover{border-color:#f687b3}.hover\\:vc-border-pink-500:hover{border-color:#ed64a6}.hover\\:vc-border-pink-600:hover{border-color:#d53f8c}.hover\\:vc-border-pink-700:hover{border-color:#b83280}.hover\\:vc-border-pink-800:hover{border-color:#97266d}.hover\\:vc-border-pink-900:hover{border-color:#702459}.focus\\:vc-border-transparent:focus{border-color:transparent}.focus\\:vc-border-black:focus{border-color:#000}.focus\\:vc-border-white:focus{border-color:#fff}.focus\\:vc-border-gray-100:focus{border-color:#f7fafc}.focus\\:vc-border-gray-200:focus{border-color:#edf2f7}.focus\\:vc-border-gray-300:focus{border-color:#e2e8f0}.focus\\:vc-border-gray-400:focus{border-color:#cbd5e0}.focus\\:vc-border-gray-500:focus{border-color:#a0aec0}.focus\\:vc-border-gray-600:focus{border-color:#718096}.focus\\:vc-border-gray-700:focus{border-color:#4a5568}.focus\\:vc-border-gray-800:focus{border-color:#2d3748}.focus\\:vc-border-gray-900:focus{border-color:#1a202c}.focus\\:vc-border-red-100:focus{border-color:#fff5f5}.focus\\:vc-border-red-200:focus{border-color:#fed7d7}.focus\\:vc-border-red-300:focus{border-color:#feb2b2}.focus\\:vc-border-red-400:focus{border-color:#fc8181}.focus\\:vc-border-red-500:focus{border-color:#f56565}.focus\\:vc-border-red-600:focus{border-color:#e53e3e}.focus\\:vc-border-red-700:focus{border-color:#c53030}.focus\\:vc-border-red-800:focus{border-color:#9b2c2c}.focus\\:vc-border-red-900:focus{border-color:#742a2a}.focus\\:vc-border-orange-100:focus{border-color:#fffaf0}.focus\\:vc-border-orange-200:focus{border-color:#feebc8}.focus\\:vc-border-orange-300:focus{border-color:#fbd38d}.focus\\:vc-border-orange-400:focus{border-color:#f6ad55}.focus\\:vc-border-orange-500:focus{border-color:#ed8936}.focus\\:vc-border-orange-600:focus{border-color:#dd6b20}.focus\\:vc-border-orange-700:focus{border-color:#c05621}.focus\\:vc-border-orange-800:focus{border-color:#9c4221}.focus\\:vc-border-orange-900:focus{border-color:#7b341e}.focus\\:vc-border-yellow-100:focus{border-color:ivory}.focus\\:vc-border-yellow-200:focus{border-color:#fefcbf}.focus\\:vc-border-yellow-300:focus{border-color:#faf089}.focus\\:vc-border-yellow-400:focus{border-color:#f6e05e}.focus\\:vc-border-yellow-500:focus{border-color:#ecc94b}.focus\\:vc-border-yellow-600:focus{border-color:#d69e2e}.focus\\:vc-border-yellow-700:focus{border-color:#b7791f}.focus\\:vc-border-yellow-800:focus{border-color:#975a16}.focus\\:vc-border-yellow-900:focus{border-color:#744210}.focus\\:vc-border-green-100:focus{border-color:#f0fff4}.focus\\:vc-border-green-200:focus{border-color:#c6f6d5}.focus\\:vc-border-green-300:focus{border-color:#9ae6b4}.focus\\:vc-border-green-400:focus{border-color:#68d391}.focus\\:vc-border-green-500:focus{border-color:#48bb78}.focus\\:vc-border-green-600:focus{border-color:#38a169}.focus\\:vc-border-green-700:focus{border-color:#2f855a}.focus\\:vc-border-green-800:focus{border-color:#276749}.focus\\:vc-border-green-900:focus{border-color:#22543d}.focus\\:vc-border-teal-100:focus{border-color:#e6fffa}.focus\\:vc-border-teal-200:focus{border-color:#b2f5ea}.focus\\:vc-border-teal-300:focus{border-color:#81e6d9}.focus\\:vc-border-teal-400:focus{border-color:#4fd1c5}.focus\\:vc-border-teal-500:focus{border-color:#38b2ac}.focus\\:vc-border-teal-600:focus{border-color:#319795}.focus\\:vc-border-teal-700:focus{border-color:#2c7a7b}.focus\\:vc-border-teal-800:focus{border-color:#285e61}.focus\\:vc-border-teal-900:focus{border-color:#234e52}.focus\\:vc-border-blue-100:focus{border-color:#ebf8ff}.focus\\:vc-border-blue-200:focus{border-color:#bee3f8}.focus\\:vc-border-blue-300:focus{border-color:#90cdf4}.focus\\:vc-border-blue-400:focus{border-color:#63b3ed}.focus\\:vc-border-blue-500:focus{border-color:#4299e1}.focus\\:vc-border-blue-600:focus{border-color:#3182ce}.focus\\:vc-border-blue-700:focus{border-color:#2b6cb0}.focus\\:vc-border-blue-800:focus{border-color:#2c5282}.focus\\:vc-border-blue-900:focus{border-color:#2a4365}.focus\\:vc-border-indigo-100:focus{border-color:#ebf4ff}.focus\\:vc-border-indigo-200:focus{border-color:#c3dafe}.focus\\:vc-border-indigo-300:focus{border-color:#a3bffa}.focus\\:vc-border-indigo-400:focus{border-color:#7f9cf5}.focus\\:vc-border-indigo-500:focus{border-color:#667eea}.focus\\:vc-border-indigo-600:focus{border-color:#5a67d8}.focus\\:vc-border-indigo-700:focus{border-color:#4c51bf}.focus\\:vc-border-indigo-800:focus{border-color:#434190}.focus\\:vc-border-indigo-900:focus{border-color:#3c366b}.focus\\:vc-border-purple-100:focus{border-color:#faf5ff}.focus\\:vc-border-purple-200:focus{border-color:#e9d8fd}.focus\\:vc-border-purple-300:focus{border-color:#d6bcfa}.focus\\:vc-border-purple-400:focus{border-color:#b794f4}.focus\\:vc-border-purple-500:focus{border-color:#9f7aea}.focus\\:vc-border-purple-600:focus{border-color:#805ad5}.focus\\:vc-border-purple-700:focus{border-color:#6b46c1}.focus\\:vc-border-purple-800:focus{border-color:#553c9a}.focus\\:vc-border-purple-900:focus{border-color:#44337a}.focus\\:vc-border-pink-100:focus{border-color:#fff5f7}.focus\\:vc-border-pink-200:focus{border-color:#fed7e2}.focus\\:vc-border-pink-300:focus{border-color:#fbb6ce}.focus\\:vc-border-pink-400:focus{border-color:#f687b3}.focus\\:vc-border-pink-500:focus{border-color:#ed64a6}.focus\\:vc-border-pink-600:focus{border-color:#d53f8c}.focus\\:vc-border-pink-700:focus{border-color:#b83280}.focus\\:vc-border-pink-800:focus{border-color:#97266d}.focus\\:vc-border-pink-900:focus{border-color:#702459}.vc-rounded-none{border-radius:0}.vc-rounded-sm{border-radius:18px}.vc-rounded{border-radius:4px}.vc-rounded-lg{border-radius:8px}.vc-rounded-full{border-radius:9999px}.vc-rounded-t-none{border-top-left-radius:0;border-top-right-radius:0}.vc-rounded-r-none{border-top-right-radius:0;border-bottom-right-radius:0}.vc-rounded-b-none{border-bottom-right-radius:0;border-bottom-left-radius:0}.vc-rounded-l-none{border-top-left-radius:0;border-bottom-left-radius:0}.vc-rounded-t-sm{border-top-left-radius:18px;border-top-right-radius:18px}.vc-rounded-r-sm{border-top-right-radius:18px;border-bottom-right-radius:18px}.vc-rounded-b-sm{border-bottom-right-radius:18px;border-bottom-left-radius:18px}.vc-rounded-l-sm{border-top-left-radius:18px;border-bottom-left-radius:18px}.vc-rounded-t{border-top-left-radius:4px;border-top-right-radius:4px}.vc-rounded-r{border-top-right-radius:4px}.vc-rounded-b,.vc-rounded-r{border-bottom-right-radius:4px}.vc-rounded-b,.vc-rounded-l{border-bottom-left-radius:4px}.vc-rounded-l{border-top-left-radius:4px}.vc-rounded-t-lg{border-top-left-radius:8px;border-top-right-radius:8px}.vc-rounded-r-lg{border-top-right-radius:8px;border-bottom-right-radius:8px}.vc-rounded-b-lg{border-bottom-right-radius:8px;border-bottom-left-radius:8px}.vc-rounded-l-lg{border-top-left-radius:8px;border-bottom-left-radius:8px}.vc-rounded-t-full{border-top-left-radius:9999px;border-top-right-radius:9999px}.vc-rounded-r-full{border-top-right-radius:9999px;border-bottom-right-radius:9999px}.vc-rounded-b-full{border-bottom-right-radius:9999px;border-bottom-left-radius:9999px}.vc-rounded-l-full{border-top-left-radius:9999px;border-bottom-left-radius:9999px}.vc-rounded-tl-none{border-top-left-radius:0}.vc-rounded-tr-none{border-top-right-radius:0}.vc-rounded-br-none{border-bottom-right-radius:0}.vc-rounded-bl-none{border-bottom-left-radius:0}.vc-rounded-tl-sm{border-top-left-radius:18px}.vc-rounded-tr-sm{border-top-right-radius:18px}.vc-rounded-br-sm{border-bottom-right-radius:18px}.vc-rounded-bl-sm{border-bottom-left-radius:18px}.vc-rounded-tl{border-top-left-radius:4px}.vc-rounded-tr{border-top-right-radius:4px}.vc-rounded-br{border-bottom-right-radius:4px}.vc-rounded-bl{border-bottom-left-radius:4px}.vc-rounded-tl-lg{border-top-left-radius:8px}.vc-rounded-tr-lg{border-top-right-radius:8px}.vc-rounded-br-lg{border-bottom-right-radius:8px}.vc-rounded-bl-lg{border-bottom-left-radius:8px}.vc-rounded-tl-full{border-top-left-radius:9999px}.vc-rounded-tr-full{border-top-right-radius:9999px}.vc-rounded-br-full{border-bottom-right-radius:9999px}.vc-rounded-bl-full{border-bottom-left-radius:9999px}.vc-border-solid{border-style:solid}.vc-border-dashed{border-style:dashed}.vc-border-dotted{border-style:dotted}.vc-border-double{border-style:double}.vc-border-none{border-style:none}.vc-border-0{border-width:0}.vc-border-2{border-width:2px}.vc-border-4{border-width:4px}.vc-border-8{border-width:8px}.vc-border{border-width:1px}.vc-border-t-0{border-top-width:0}.vc-border-r-0{border-right-width:0}.vc-border-b-0{border-bottom-width:0}.vc-border-l-0{border-left-width:0}.vc-border-t-2{border-top-width:2px}.vc-border-r-2{border-right-width:2px}.vc-border-b-2{border-bottom-width:2px}.vc-border-l-2{border-left-width:2px}.vc-border-t-4{border-top-width:4px}.vc-border-r-4{border-right-width:4px}.vc-border-b-4{border-bottom-width:4px}.vc-border-l-4{border-left-width:4px}.vc-border-t-8{border-top-width:8px}.vc-border-r-8{border-right-width:8px}.vc-border-b-8{border-bottom-width:8px}.vc-border-l-8{border-left-width:8px}.vc-border-t{border-top-width:1px}.vc-border-r{border-right-width:1px}.vc-border-b{border-bottom-width:1px}.vc-border-l{border-left-width:1px}.vc-cursor-pointer{cursor:pointer}.vc-cursor-not-allowed{cursor:not-allowed}.vc-flex{display:flex}.vc-items-center{align-items:center}.vc-justify-center{justify-content:center}.vc-font-medium{font-weight:500}.vc-font-semibold{font-weight:600}.focus\\:vc-font-bold:focus,.vc-font-bold{font-weight:700}.vc-h-full{height:100%}.vc-leading-tight{line-height:1.25}.vc-leading-snug{line-height:1.375}.vc-mr-auto{margin-right:auto}.vc-ml-auto{margin-left:auto}.vc-min-w-full{min-width:100%}.vc-opacity-0{opacity:0}.vc-opacity-25{opacity:.25}.vc-opacity-75{opacity:.75}.hover\\:vc-opacity-50:hover{opacity:.5}.hover\\:vc-opacity-75:hover{opacity:.75}.focus\\:vc-outline-none:focus{outline:0}.vc-overflow-hidden{overflow:hidden}.vc-p-1{padding:4px}.vc-py-1{padding-top:4px;padding-bottom:4px}.vc-py-2{padding-top:8px;padding-bottom:8px}.vc-px-2{padding-left:8px;padding-right:8px}.vc-px-3{padding-left:12px;padding-right:12px}.vc-pointer-events-none{pointer-events:none}.vc-pointer-events-auto{pointer-events:auto}.vc-relative{position:relative}.vc-shadow{box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)}.hover\\:vc-shadow-inner:hover{box-shadow:inset 0 2px 4px 0 rgba(0,0,0,.06)}.focus\\:vc-shadow:focus{box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)}.vc-text-left{text-align:left}.vc-text-center{text-align:center}.vc-text-right{text-align:right}.vc-text-justify{text-align:justify}.vc-text-transparent{color:transparent}.vc-text-black{color:#000}.vc-text-white{color:#fff}.vc-text-gray-100{color:#f7fafc}.vc-text-gray-200{color:#edf2f7}.vc-text-gray-300{color:#e2e8f0}.vc-text-gray-400{color:#cbd5e0}.vc-text-gray-500{color:#a0aec0}.vc-text-gray-600{color:#718096}.vc-text-gray-700{color:#4a5568}.vc-text-gray-800{color:#2d3748}.vc-text-gray-900{color:#1a202c}.vc-text-red-100{color:#fff5f5}.vc-text-red-200{color:#fed7d7}.vc-text-red-300{color:#feb2b2}.vc-text-red-400{color:#fc8181}.vc-text-red-500{color:#f56565}.vc-text-red-600{color:#e53e3e}.vc-text-red-700{color:#c53030}.vc-text-red-800{color:#9b2c2c}.vc-text-red-900{color:#742a2a}.vc-text-orange-100{color:#fffaf0}.vc-text-orange-200{color:#feebc8}.vc-text-orange-300{color:#fbd38d}.vc-text-orange-400{color:#f6ad55}.vc-text-orange-500{color:#ed8936}.vc-text-orange-600{color:#dd6b20}.vc-text-orange-700{color:#c05621}.vc-text-orange-800{color:#9c4221}.vc-text-orange-900{color:#7b341e}.vc-text-yellow-100{color:ivory}.vc-text-yellow-200{color:#fefcbf}.vc-text-yellow-300{color:#faf089}.vc-text-yellow-400{color:#f6e05e}.vc-text-yellow-500{color:#ecc94b}.vc-text-yellow-600{color:#d69e2e}.vc-text-yellow-700{color:#b7791f}.vc-text-yellow-800{color:#975a16}.vc-text-yellow-900{color:#744210}.vc-text-green-100{color:#f0fff4}.vc-text-green-200{color:#c6f6d5}.vc-text-green-300{color:#9ae6b4}.vc-text-green-400{color:#68d391}.vc-text-green-500{color:#48bb78}.vc-text-green-600{color:#38a169}.vc-text-green-700{color:#2f855a}.vc-text-green-800{color:#276749}.vc-text-green-900{color:#22543d}.vc-text-teal-100{color:#e6fffa}.vc-text-teal-200{color:#b2f5ea}.vc-text-teal-300{color:#81e6d9}.vc-text-teal-400{color:#4fd1c5}.vc-text-teal-500{color:#38b2ac}.vc-text-teal-600{color:#319795}.vc-text-teal-700{color:#2c7a7b}.vc-text-teal-800{color:#285e61}.vc-text-teal-900{color:#234e52}.vc-text-blue-100{color:#ebf8ff}.vc-text-blue-200{color:#bee3f8}.vc-text-blue-300{color:#90cdf4}.vc-text-blue-400{color:#63b3ed}.vc-text-blue-500{color:#4299e1}.vc-text-blue-600{color:#3182ce}.vc-text-blue-700{color:#2b6cb0}.vc-text-blue-800{color:#2c5282}.vc-text-blue-900{color:#2a4365}.vc-text-indigo-100{color:#ebf4ff}.vc-text-indigo-200{color:#c3dafe}.vc-text-indigo-300{color:#a3bffa}.vc-text-indigo-400{color:#7f9cf5}.vc-text-indigo-500{color:#667eea}.vc-text-indigo-600{color:#5a67d8}.vc-text-indigo-700{color:#4c51bf}.vc-text-indigo-800{color:#434190}.vc-text-indigo-900{color:#3c366b}.vc-text-purple-100{color:#faf5ff}.vc-text-purple-200{color:#e9d8fd}.vc-text-purple-300{color:#d6bcfa}.vc-text-purple-400{color:#b794f4}.vc-text-purple-500{color:#9f7aea}.vc-text-purple-600{color:#805ad5}.vc-text-purple-700{color:#6b46c1}.vc-text-purple-800{color:#553c9a}.vc-text-purple-900{color:#44337a}.vc-text-pink-100{color:#fff5f7}.vc-text-pink-200{color:#fed7e2}.vc-text-pink-300{color:#fbb6ce}.vc-text-pink-400{color:#f687b3}.vc-text-pink-500{color:#ed64a6}.vc-text-pink-600{color:#d53f8c}.vc-text-pink-700{color:#b83280}.vc-text-pink-800{color:#97266d}.vc-text-pink-900{color:#702459}.hover\\:vc-text-transparent:hover{color:transparent}.hover\\:vc-text-black:hover{color:#000}.hover\\:vc-text-white:hover{color:#fff}.hover\\:vc-text-gray-100:hover{color:#f7fafc}.hover\\:vc-text-gray-200:hover{color:#edf2f7}.hover\\:vc-text-gray-300:hover{color:#e2e8f0}.hover\\:vc-text-gray-400:hover{color:#cbd5e0}.hover\\:vc-text-gray-500:hover{color:#a0aec0}.hover\\:vc-text-gray-600:hover{color:#718096}.hover\\:vc-text-gray-700:hover{color:#4a5568}.hover\\:vc-text-gray-800:hover{color:#2d3748}.hover\\:vc-text-gray-900:hover{color:#1a202c}.hover\\:vc-text-red-100:hover{color:#fff5f5}.hover\\:vc-text-red-200:hover{color:#fed7d7}.hover\\:vc-text-red-300:hover{color:#feb2b2}.hover\\:vc-text-red-400:hover{color:#fc8181}.hover\\:vc-text-red-500:hover{color:#f56565}.hover\\:vc-text-red-600:hover{color:#e53e3e}.hover\\:vc-text-red-700:hover{color:#c53030}.hover\\:vc-text-red-800:hover{color:#9b2c2c}.hover\\:vc-text-red-900:hover{color:#742a2a}.hover\\:vc-text-orange-100:hover{color:#fffaf0}.hover\\:vc-text-orange-200:hover{color:#feebc8}.hover\\:vc-text-orange-300:hover{color:#fbd38d}.hover\\:vc-text-orange-400:hover{color:#f6ad55}.hover\\:vc-text-orange-500:hover{color:#ed8936}.hover\\:vc-text-orange-600:hover{color:#dd6b20}.hover\\:vc-text-orange-700:hover{color:#c05621}.hover\\:vc-text-orange-800:hover{color:#9c4221}.hover\\:vc-text-orange-900:hover{color:#7b341e}.hover\\:vc-text-yellow-100:hover{color:ivory}.hover\\:vc-text-yellow-200:hover{color:#fefcbf}.hover\\:vc-text-yellow-300:hover{color:#faf089}.hover\\:vc-text-yellow-400:hover{color:#f6e05e}.hover\\:vc-text-yellow-500:hover{color:#ecc94b}.hover\\:vc-text-yellow-600:hover{color:#d69e2e}.hover\\:vc-text-yellow-700:hover{color:#b7791f}.hover\\:vc-text-yellow-800:hover{color:#975a16}.hover\\:vc-text-yellow-900:hover{color:#744210}.hover\\:vc-text-green-100:hover{color:#f0fff4}.hover\\:vc-text-green-200:hover{color:#c6f6d5}.hover\\:vc-text-green-300:hover{color:#9ae6b4}.hover\\:vc-text-green-400:hover{color:#68d391}.hover\\:vc-text-green-500:hover{color:#48bb78}.hover\\:vc-text-green-600:hover{color:#38a169}.hover\\:vc-text-green-700:hover{color:#2f855a}.hover\\:vc-text-green-800:hover{color:#276749}.hover\\:vc-text-green-900:hover{color:#22543d}.hover\\:vc-text-teal-100:hover{color:#e6fffa}.hover\\:vc-text-teal-200:hover{color:#b2f5ea}.hover\\:vc-text-teal-300:hover{color:#81e6d9}.hover\\:vc-text-teal-400:hover{color:#4fd1c5}.hover\\:vc-text-teal-500:hover{color:#38b2ac}.hover\\:vc-text-teal-600:hover{color:#319795}.hover\\:vc-text-teal-700:hover{color:#2c7a7b}.hover\\:vc-text-teal-800:hover{color:#285e61}.hover\\:vc-text-teal-900:hover{color:#234e52}.hover\\:vc-text-blue-100:hover{color:#ebf8ff}.hover\\:vc-text-blue-200:hover{color:#bee3f8}.hover\\:vc-text-blue-300:hover{color:#90cdf4}.hover\\:vc-text-blue-400:hover{color:#63b3ed}.hover\\:vc-text-blue-500:hover{color:#4299e1}.hover\\:vc-text-blue-600:hover{color:#3182ce}.hover\\:vc-text-blue-700:hover{color:#2b6cb0}.hover\\:vc-text-blue-800:hover{color:#2c5282}.hover\\:vc-text-blue-900:hover{color:#2a4365}.hover\\:vc-text-indigo-100:hover{color:#ebf4ff}.hover\\:vc-text-indigo-200:hover{color:#c3dafe}.hover\\:vc-text-indigo-300:hover{color:#a3bffa}.hover\\:vc-text-indigo-400:hover{color:#7f9cf5}.hover\\:vc-text-indigo-500:hover{color:#667eea}.hover\\:vc-text-indigo-600:hover{color:#5a67d8}.hover\\:vc-text-indigo-700:hover{color:#4c51bf}.hover\\:vc-text-indigo-800:hover{color:#434190}.hover\\:vc-text-indigo-900:hover{color:#3c366b}.hover\\:vc-text-purple-100:hover{color:#faf5ff}.hover\\:vc-text-purple-200:hover{color:#e9d8fd}.hover\\:vc-text-purple-300:hover{color:#d6bcfa}.hover\\:vc-text-purple-400:hover{color:#b794f4}.hover\\:vc-text-purple-500:hover{color:#9f7aea}.hover\\:vc-text-purple-600:hover{color:#805ad5}.hover\\:vc-text-purple-700:hover{color:#6b46c1}.hover\\:vc-text-purple-800:hover{color:#553c9a}.hover\\:vc-text-purple-900:hover{color:#44337a}.hover\\:vc-text-pink-100:hover{color:#fff5f7}.hover\\:vc-text-pink-200:hover{color:#fed7e2}.hover\\:vc-text-pink-300:hover{color:#fbb6ce}.hover\\:vc-text-pink-400:hover{color:#f687b3}.hover\\:vc-text-pink-500:hover{color:#ed64a6}.hover\\:vc-text-pink-600:hover{color:#d53f8c}.hover\\:vc-text-pink-700:hover{color:#b83280}.hover\\:vc-text-pink-800:hover{color:#97266d}.hover\\:vc-text-pink-900:hover{color:#702459}.vc-text-xs{font-size:12px}.vc-text-sm{font-size:14px}.vc-text-base{font-size:16px}.vc-text-lg{font-size:18px}.vc-text-xl{font-size:20px}.vc-text-2xl{font-size:24px}.vc-select-none{-webkit-user-select:none;-ms-user-select:none;user-select:none}.vc-w-12{width:48px}.vc-w-full{width:100%}@media (min-width:640px){.sm\\:vc-bg-fixed{background-attachment:fixed}.sm\\:vc-bg-local{background-attachment:local}.sm\\:vc-bg-scroll{background-attachment:scroll}.sm\\:vc-bg-bottom{background-position:bottom}.sm\\:vc-bg-center{background-position:50%}.sm\\:vc-bg-left{background-position:0}.sm\\:vc-bg-left-bottom{background-position:0 100%}.sm\\:vc-bg-left-top{background-position:0 0}.sm\\:vc-bg-right{background-position:100%}.sm\\:vc-bg-right-bottom{background-position:100% 100%}.sm\\:vc-bg-right-top{background-position:100% 0}.sm\\:vc-bg-top{background-position:top}.sm\\:vc-bg-repeat{background-repeat:repeat}.sm\\:vc-bg-no-repeat{background-repeat:no-repeat}.sm\\:vc-bg-repeat-x{background-repeat:repeat-x}.sm\\:vc-bg-repeat-y{background-repeat:repeat-y}.sm\\:vc-bg-repeat-round{background-repeat:round}.sm\\:vc-bg-repeat-space{background-repeat:space}.sm\\:vc-bg-auto{background-size:auto}.sm\\:vc-bg-cover{background-size:cover}.sm\\:vc-bg-contain{background-size:contain}.sm\\:vc-border-collapse{border-collapse:collapse}.sm\\:vc-border-separate{border-collapse:initial}.sm\\:vc-border-solid{border-style:solid}.sm\\:vc-border-dashed{border-style:dashed}.sm\\:vc-border-dotted{border-style:dotted}.sm\\:vc-border-double{border-style:double}.sm\\:vc-border-none{border-style:none}.sm\\:vc-border-0{border-width:0}.sm\\:vc-border-2{border-width:2px}.sm\\:vc-border-4{border-width:4px}.sm\\:vc-border-8{border-width:8px}.sm\\:vc-border{border-width:1px}.sm\\:vc-border-t-0{border-top-width:0}.sm\\:vc-border-r-0{border-right-width:0}.sm\\:vc-border-b-0{border-bottom-width:0}.sm\\:vc-border-l-0{border-left-width:0}.sm\\:vc-border-t-2{border-top-width:2px}.sm\\:vc-border-r-2{border-right-width:2px}.sm\\:vc-border-b-2{border-bottom-width:2px}.sm\\:vc-border-l-2{border-left-width:2px}.sm\\:vc-border-t-4{border-top-width:4px}.sm\\:vc-border-r-4{border-right-width:4px}.sm\\:vc-border-b-4{border-bottom-width:4px}.sm\\:vc-border-l-4{border-left-width:4px}.sm\\:vc-border-t-8{border-top-width:8px}.sm\\:vc-border-r-8{border-right-width:8px}.sm\\:vc-border-b-8{border-bottom-width:8px}.sm\\:vc-border-l-8{border-left-width:8px}.sm\\:vc-border-t{border-top-width:1px}.sm\\:vc-border-r{border-right-width:1px}.sm\\:vc-border-b{border-bottom-width:1px}.sm\\:vc-border-l{border-left-width:1px}.sm\\:vc-text-left{text-align:left}.sm\\:vc-text-center{text-align:center}.sm\\:vc-text-right{text-align:right}.sm\\:vc-text-justify{text-align:justify}.sm\\:vc-text-xs{font-size:12px}.sm\\:vc-text-sm{font-size:14px}.sm\\:vc-text-base{font-size:16px}.sm\\:vc-text-lg{font-size:18px}.sm\\:vc-text-xl{font-size:20px}.sm\\:vc-text-2xl{font-size:24px}}@media (min-width:768px){.md\\:vc-bg-fixed{background-attachment:fixed}.md\\:vc-bg-local{background-attachment:local}.md\\:vc-bg-scroll{background-attachment:scroll}.md\\:vc-bg-bottom{background-position:bottom}.md\\:vc-bg-center{background-position:50%}.md\\:vc-bg-left{background-position:0}.md\\:vc-bg-left-bottom{background-position:0 100%}.md\\:vc-bg-left-top{background-position:0 0}.md\\:vc-bg-right{background-position:100%}.md\\:vc-bg-right-bottom{background-position:100% 100%}.md\\:vc-bg-right-top{background-position:100% 0}.md\\:vc-bg-top{background-position:top}.md\\:vc-bg-repeat{background-repeat:repeat}.md\\:vc-bg-no-repeat{background-repeat:no-repeat}.md\\:vc-bg-repeat-x{background-repeat:repeat-x}.md\\:vc-bg-repeat-y{background-repeat:repeat-y}.md\\:vc-bg-repeat-round{background-repeat:round}.md\\:vc-bg-repeat-space{background-repeat:space}.md\\:vc-bg-auto{background-size:auto}.md\\:vc-bg-cover{background-size:cover}.md\\:vc-bg-contain{background-size:contain}.md\\:vc-border-collapse{border-collapse:collapse}.md\\:vc-border-separate{border-collapse:initial}.md\\:vc-border-solid{border-style:solid}.md\\:vc-border-dashed{border-style:dashed}.md\\:vc-border-dotted{border-style:dotted}.md\\:vc-border-double{border-style:double}.md\\:vc-border-none{border-style:none}.md\\:vc-border-0{border-width:0}.md\\:vc-border-2{border-width:2px}.md\\:vc-border-4{border-width:4px}.md\\:vc-border-8{border-width:8px}.md\\:vc-border{border-width:1px}.md\\:vc-border-t-0{border-top-width:0}.md\\:vc-border-r-0{border-right-width:0}.md\\:vc-border-b-0{border-bottom-width:0}.md\\:vc-border-l-0{border-left-width:0}.md\\:vc-border-t-2{border-top-width:2px}.md\\:vc-border-r-2{border-right-width:2px}.md\\:vc-border-b-2{border-bottom-width:2px}.md\\:vc-border-l-2{border-left-width:2px}.md\\:vc-border-t-4{border-top-width:4px}.md\\:vc-border-r-4{border-right-width:4px}.md\\:vc-border-b-4{border-bottom-width:4px}.md\\:vc-border-l-4{border-left-width:4px}.md\\:vc-border-t-8{border-top-width:8px}.md\\:vc-border-r-8{border-right-width:8px}.md\\:vc-border-b-8{border-bottom-width:8px}.md\\:vc-border-l-8{border-left-width:8px}.md\\:vc-border-t{border-top-width:1px}.md\\:vc-border-r{border-right-width:1px}.md\\:vc-border-b{border-bottom-width:1px}.md\\:vc-border-l{border-left-width:1px}.md\\:vc-text-left{text-align:left}.md\\:vc-text-center{text-align:center}.md\\:vc-text-right{text-align:right}.md\\:vc-text-justify{text-align:justify}.md\\:vc-text-xs{font-size:12px}.md\\:vc-text-sm{font-size:14px}.md\\:vc-text-base{font-size:16px}.md\\:vc-text-lg{font-size:18px}.md\\:vc-text-xl{font-size:20px}.md\\:vc-text-2xl{font-size:24px}}@media (min-width:1024px){.lg\\:vc-bg-fixed{background-attachment:fixed}.lg\\:vc-bg-local{background-attachment:local}.lg\\:vc-bg-scroll{background-attachment:scroll}.lg\\:vc-bg-bottom{background-position:bottom}.lg\\:vc-bg-center{background-position:50%}.lg\\:vc-bg-left{background-position:0}.lg\\:vc-bg-left-bottom{background-position:0 100%}.lg\\:vc-bg-left-top{background-position:0 0}.lg\\:vc-bg-right{background-position:100%}.lg\\:vc-bg-right-bottom{background-position:100% 100%}.lg\\:vc-bg-right-top{background-position:100% 0}.lg\\:vc-bg-top{background-position:top}.lg\\:vc-bg-repeat{background-repeat:repeat}.lg\\:vc-bg-no-repeat{background-repeat:no-repeat}.lg\\:vc-bg-repeat-x{background-repeat:repeat-x}.lg\\:vc-bg-repeat-y{background-repeat:repeat-y}.lg\\:vc-bg-repeat-round{background-repeat:round}.lg\\:vc-bg-repeat-space{background-repeat:space}.lg\\:vc-bg-auto{background-size:auto}.lg\\:vc-bg-cover{background-size:cover}.lg\\:vc-bg-contain{background-size:contain}.lg\\:vc-border-collapse{border-collapse:collapse}.lg\\:vc-border-separate{border-collapse:initial}.lg\\:vc-border-solid{border-style:solid}.lg\\:vc-border-dashed{border-style:dashed}.lg\\:vc-border-dotted{border-style:dotted}.lg\\:vc-border-double{border-style:double}.lg\\:vc-border-none{border-style:none}.lg\\:vc-border-0{border-width:0}.lg\\:vc-border-2{border-width:2px}.lg\\:vc-border-4{border-width:4px}.lg\\:vc-border-8{border-width:8px}.lg\\:vc-border{border-width:1px}.lg\\:vc-border-t-0{border-top-width:0}.lg\\:vc-border-r-0{border-right-width:0}.lg\\:vc-border-b-0{border-bottom-width:0}.lg\\:vc-border-l-0{border-left-width:0}.lg\\:vc-border-t-2{border-top-width:2px}.lg\\:vc-border-r-2{border-right-width:2px}.lg\\:vc-border-b-2{border-bottom-width:2px}.lg\\:vc-border-l-2{border-left-width:2px}.lg\\:vc-border-t-4{border-top-width:4px}.lg\\:vc-border-r-4{border-right-width:4px}.lg\\:vc-border-b-4{border-bottom-width:4px}.lg\\:vc-border-l-4{border-left-width:4px}.lg\\:vc-border-t-8{border-top-width:8px}.lg\\:vc-border-r-8{border-right-width:8px}.lg\\:vc-border-b-8{border-bottom-width:8px}.lg\\:vc-border-l-8{border-left-width:8px}.lg\\:vc-border-t{border-top-width:1px}.lg\\:vc-border-r{border-right-width:1px}.lg\\:vc-border-b{border-bottom-width:1px}.lg\\:vc-border-l{border-left-width:1px}.lg\\:vc-text-left{text-align:left}.lg\\:vc-text-center{text-align:center}.lg\\:vc-text-right{text-align:right}.lg\\:vc-text-justify{text-align:justify}.lg\\:vc-text-xs{font-size:12px}.lg\\:vc-text-sm{font-size:14px}.lg\\:vc-text-base{font-size:16px}.lg\\:vc-text-lg{font-size:18px}.lg\\:vc-text-xl{font-size:20px}.lg\\:vc-text-2xl{font-size:24px}}@media (min-width:1280px){.xl\\:vc-bg-fixed{background-attachment:fixed}.xl\\:vc-bg-local{background-attachment:local}.xl\\:vc-bg-scroll{background-attachment:scroll}.xl\\:vc-bg-bottom{background-position:bottom}.xl\\:vc-bg-center{background-position:50%}.xl\\:vc-bg-left{background-position:0}.xl\\:vc-bg-left-bottom{background-position:0 100%}.xl\\:vc-bg-left-top{background-position:0 0}.xl\\:vc-bg-right{background-position:100%}.xl\\:vc-bg-right-bottom{background-position:100% 100%}.xl\\:vc-bg-right-top{background-position:100% 0}.xl\\:vc-bg-top{background-position:top}.xl\\:vc-bg-repeat{background-repeat:repeat}.xl\\:vc-bg-no-repeat{background-repeat:no-repeat}.xl\\:vc-bg-repeat-x{background-repeat:repeat-x}.xl\\:vc-bg-repeat-y{background-repeat:repeat-y}.xl\\:vc-bg-repeat-round{background-repeat:round}.xl\\:vc-bg-repeat-space{background-repeat:space}.xl\\:vc-bg-auto{background-size:auto}.xl\\:vc-bg-cover{background-size:cover}.xl\\:vc-bg-contain{background-size:contain}.xl\\:vc-border-collapse{border-collapse:collapse}.xl\\:vc-border-separate{border-collapse:initial}.xl\\:vc-border-solid{border-style:solid}.xl\\:vc-border-dashed{border-style:dashed}.xl\\:vc-border-dotted{border-style:dotted}.xl\\:vc-border-double{border-style:double}.xl\\:vc-border-none{border-style:none}.xl\\:vc-border-0{border-width:0}.xl\\:vc-border-2{border-width:2px}.xl\\:vc-border-4{border-width:4px}.xl\\:vc-border-8{border-width:8px}.xl\\:vc-border{border-width:1px}.xl\\:vc-border-t-0{border-top-width:0}.xl\\:vc-border-r-0{border-right-width:0}.xl\\:vc-border-b-0{border-bottom-width:0}.xl\\:vc-border-l-0{border-left-width:0}.xl\\:vc-border-t-2{border-top-width:2px}.xl\\:vc-border-r-2{border-right-width:2px}.xl\\:vc-border-b-2{border-bottom-width:2px}.xl\\:vc-border-l-2{border-left-width:2px}.xl\\:vc-border-t-4{border-top-width:4px}.xl\\:vc-border-r-4{border-right-width:4px}.xl\\:vc-border-b-4{border-bottom-width:4px}.xl\\:vc-border-l-4{border-left-width:4px}.xl\\:vc-border-t-8{border-top-width:8px}.xl\\:vc-border-r-8{border-right-width:8px}.xl\\:vc-border-b-8{border-bottom-width:8px}.xl\\:vc-border-l-8{border-left-width:8px}.xl\\:vc-border-t{border-top-width:1px}.xl\\:vc-border-r{border-right-width:1px}.xl\\:vc-border-b{border-bottom-width:1px}.xl\\:vc-border-l{border-left-width:1px}.xl\\:vc-text-left{text-align:left}.xl\\:vc-text-center{text-align:center}.xl\\:vc-text-right{text-align:right}.xl\\:vc-text-justify{text-align:justify}.xl\\:vc-text-xs{font-size:12px}.xl\\:vc-text-sm{font-size:14px}.xl\\:vc-text-base{font-size:16px}.xl\\:vc-text-lg{font-size:18px}.xl\\:vc-text-xl{font-size:20px}.xl\\:vc-text-2xl{font-size:24px}}",""])},f4d6:function(e,t,r){var o=r("ffd6"),n=1/0;function c(e){if("string"==typeof e||o(e))return e;var t=e+"";return"0"==t&&1/e==-n?"-0":t}e.exports=c},f4d9:function(e,t){var r="\\ud800-\\udfff",o="\\u0300-\\u036f",n="\\ufe20-\\ufe2f",c="\\u20d0-\\u20ff",i=o+n+c,a="\\u2700-\\u27bf",s="a-z\\xdf-\\xf6\\xf8-\\xff",d="\\xac\\xb1\\xd7\\xf7",u="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",l="\\u2000-\\u206f",f=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",v="A-Z\\xc0-\\xd6\\xd8-\\xde",b="\\ufe0e\\ufe0f",h=d+u+l+f,p="['’]",g="["+h+"]",m="["+i+"]",y="\\d+",x="["+a+"]",w="["+s+"]",k="[^"+r+h+y+a+s+v+"]",O="\\ud83c[\\udffb-\\udfff]",j="(?:"+m+"|"+O+")",D="[^"+r+"]",P="(?:\\ud83c[\\udde6-\\uddff]){2}",M="[\\ud800-\\udbff][\\udc00-\\udfff]",S="["+v+"]",E="\\u200d",_="(?:"+w+"|"+k+")",Y="(?:"+S+"|"+k+")",C="(?:"+p+"(?:d|ll|m|re|s|t|ve))?",I="(?:"+p+"(?:D|LL|M|RE|S|T|VE))?",$=j+"?",A="["+b+"]?",T="(?:"+E+"(?:"+[D,P,M].join("|")+")"+A+$+")*",L="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",F="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",N=A+$+T,z="(?:"+[x,P,M].join("|")+")"+N,R=RegExp([S+"?"+w+"+"+C+"(?="+[g,S,"$"].join("|")+")",Y+"+"+I+"(?="+[g,S+_,"$"].join("|")+")",S+"?"+_+"+"+C,S+"+"+I,F,L,y,z].join("|"),"g");function V(e){return e.match(R)||[]}e.exports=V},f542:function(e,t,r){var o=r("ec47"),n=r("ec69"),c=o(n);e.exports=c},f608:function(e,t,r){var o=r("6747"),n=r("ffd6"),c=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;function a(e,t){if(o(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!n(e))||(i.test(e)||!c.test(e)||null!=t&&e in Object(t))}e.exports=a},f678:function(e,t,r){var o=r("8384"),n=r("b4b0");function c(e,t,r){return void 0===r&&(r=t,t=void 0),void 0!==r&&(r=n(r),r=r===r?r:0),void 0!==t&&(t=n(t),t=t===t?t:0),o(n(e),t,r)}e.exports=c},f772:function(e,t){e.exports=function(e){return"object"===typeof e?null!==e:"function"===typeof e}},f7f1:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var o=r("fe1f"),n=r("fd3a"),c=r("8c86");function i(e,t){Object(c["a"])(2,arguments);var r=Object(n["a"])(e),i=Object(o["a"])(t);return isNaN(i)?new Date(NaN):i?(r.setDate(r.getDate()+i),r):r}},f8af:function(e,t,r){var o=r("2474");function n(e){var t=new e.constructor(e.byteLength);return new o(t).set(new o(e)),t}e.exports=n},f909:function(e,t,r){var o=r("7e64"),n=r("b760"),c=r("72af"),i=r("4f50"),a=r("1a8c"),s=r("9934"),d=r("8adb");function u(e,t,r,l,f){e!==t&&c(t,(function(c,s){if(f||(f=new o),a(c))i(e,t,s,r,u,l,f);else{var v=l?l(d(e,s),c,s+"",e,t,f):void 0;void 0===v&&(v=c),n(e,s,v)}}),s)}e.exports=u},f9ce:function(e,t,r){var o=r("ef5d"),n=r("e3f8"),c=r("f608"),i=r("f4d6");function a(e){return c(e)?o(i(e)):n(e)}e.exports=a},fa21:function(e,t,r){var o=r("7530"),n=r("2dcb"),c=r("eac5");function i(e){return"function"!=typeof e.constructor||c(e)?{}:o(n(e))}e.exports=i},fa5b:function(e,t,r){e.exports=r("5537")("native-function-to-string",Function.toString)},fab2:function(e,t,r){var o=r("7726").document;e.exports=o&&o.documentElement},fb15:function(e,t,r){"use strict";var o;(r.r(t),r.d(t,"Calendar",(function(){return n["c"]})),r.d(t,"CalendarNav",(function(){return n["d"]})),r.d(t,"DatePicker",(function(){return n["f"]})),r.d(t,"Popover",(function(){return n["i"]})),r.d(t,"PopoverRef",(function(){return n["j"]})),r.d(t,"Grid",(function(){return n["g"]})),r.d(t,"Locale",(function(){return n["h"]})),r.d(t,"DateInfo",(function(){return n["e"]})),r.d(t,"Attribute",(function(){return n["a"]})),r.d(t,"AttributeStore",(function(){return n["b"]})),r.d(t,"setupCalendar",(function(){return n["L"]})),r.d(t,"evalFn",(function(){return n["u"]})),r.d(t,"pageIsValid",(function(){return n["K"]})),r.d(t,"pageIsBeforePage",(function(){return n["H"]})),r.d(t,"pageIsAfterPage",(function(){return n["G"]})),r.d(t,"pageIsBetweenPages",(function(){return n["I"]})),r.d(t,"pageIsEqualToPage",(function(){return n["J"]})),r.d(t,"pageForDate",(function(){return n["C"]})),r.d(t,"addPages",(function(){return n["l"]})),r.d(t,"pageForThisMonth",(function(){return n["F"]})),r.d(t,"pageForNextMonth",(function(){return n["D"]})),r.d(t,"pageForPrevMonth",(function(){return n["E"]})),r.d(t,"getMaxPage",(function(){return n["w"]})),r.d(t,"datesAreEqual",(function(){return n["p"]})),r.d(t,"arrayHasItems",(function(){return n["n"]})),r.d(t,"findAncestor",(function(){return n["v"]})),r.d(t,"elementHasAncestor",(function(){return n["s"]})),r.d(t,"elementPositionInAncestor",(function(){return n["t"]})),r.d(t,"mixinOptionalProps",(function(){return n["y"]})),r.d(t,"on",(function(){return n["A"]})),r.d(t,"off",(function(){return n["z"]})),r.d(t,"elementContains",(function(){return n["r"]})),r.d(t,"onSpaceOrEnter",(function(){return n["B"]})),r.d(t,"createGuid",(function(){return n["o"]})),r.d(t,"hash",(function(){return n["x"]})),r.d(t,"addTapOrClickHandler",(function(){return n["m"]})),r.d(t,"addHorizontalSwipeHandler",(function(){return n["k"]})),"undefined"!==typeof window)&&((o=window.document.currentScript)&&(o=o.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))&&(r.p=o[1]));var n=r("34e9");t["default"]=n["q"]},fba5:function(e,t,r){var o=r("cb5a");function n(e){return o(this.__data__,e)>-1}e.exports=n},fd3a:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var o=r("8c86");function n(e){Object(o["a"])(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"===typeof e||"[object Number]"===t?new Date(e):("string"!==typeof e&&"[object String]"!==t||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}},fe1f:function(e,t,r){"use strict";function o(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}r.d(t,"a",(function(){return o}))},ffd6:function(e,t,r){var o=r("3729"),n=r("1310"),c="[object Symbol]";function i(e){return"symbol"==typeof e||n(e)&&o(e)==c}e.exports=i}})}));
//# sourceMappingURL=v-calendar.umd.min.js.map

/***/ }),

/***/ "./resources/js/components/DailyAttendance.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/DailyAttendance.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DailyAttendance_vue_vue_type_template_id_ee664572_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DailyAttendance.vue?vue&type=template&id=ee664572&scoped=true& */ "./resources/js/components/DailyAttendance.vue?vue&type=template&id=ee664572&scoped=true&");
/* harmony import */ var _DailyAttendance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DailyAttendance.vue?vue&type=script&lang=js& */ "./resources/js/components/DailyAttendance.vue?vue&type=script&lang=js&");
/* harmony import */ var _DailyAttendance_vue_vue_type_style_index_0_id_ee664572_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DailyAttendance.vue?vue&type=style&index=0&id=ee664572&lang=postcss&scoped=true& */ "./resources/js/components/DailyAttendance.vue?vue&type=style&index=0&id=ee664572&lang=postcss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DailyAttendance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DailyAttendance_vue_vue_type_template_id_ee664572_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _DailyAttendance_vue_vue_type_template_id_ee664572_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "ee664572",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/DailyAttendance.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DailyAttendance.vue?vue&type=style&index=0&id=ee664572&lang=postcss&scoped=true&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DailyAttendance.vue?vue&type=style&index=0&id=ee664572&lang=postcss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (122:0)\nFile was processed with these loaders:\n * ./node_modules/vue-loader/lib/index.js\nYou may need an additional loader to handle the result of these loaders.\n| \n| \n> ::-webkit-scrollbar {\n|   width: 0px;\n| }");

/***/ }),

/***/ "./resources/js/components/DailyAttendance.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/DailyAttendance.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DailyAttendance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DailyAttendance.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DailyAttendance.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DailyAttendance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/DailyAttendance.vue?vue&type=style&index=0&id=ee664572&lang=postcss&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/DailyAttendance.vue?vue&type=style&index=0&id=ee664572&lang=postcss&scoped=true& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_DailyAttendance_vue_vue_type_style_index_0_id_ee664572_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DailyAttendance.vue?vue&type=style&index=0&id=ee664572&lang=postcss&scoped=true& */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DailyAttendance.vue?vue&type=style&index=0&id=ee664572&lang=postcss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_DailyAttendance_vue_vue_type_style_index_0_id_ee664572_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_loader_lib_index_js_vue_loader_options_DailyAttendance_vue_vue_type_style_index_0_id_ee664572_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_loader_lib_index_js_vue_loader_options_DailyAttendance_vue_vue_type_style_index_0_id_ee664572_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_loader_lib_index_js_vue_loader_options_DailyAttendance_vue_vue_type_style_index_0_id_ee664572_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_vue_loader_lib_index_js_vue_loader_options_DailyAttendance_vue_vue_type_style_index_0_id_ee664572_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default())); 

/***/ }),

/***/ "./resources/js/components/DailyAttendance.vue?vue&type=template&id=ee664572&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/DailyAttendance.vue?vue&type=template&id=ee664572&scoped=true& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DailyAttendance_vue_vue_type_template_id_ee664572_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DailyAttendance_vue_vue_type_template_id_ee664572_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DailyAttendance_vue_vue_type_template_id_ee664572_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DailyAttendance.vue?vue&type=template&id=ee664572&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DailyAttendance.vue?vue&type=template&id=ee664572&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DailyAttendance.vue?vue&type=template&id=ee664572&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DailyAttendance.vue?vue&type=template&id=ee664572&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "text-center section" },
    [
      _c("h2", { staticClass: "h2" }, [_vm._v("Custom Calendars")]),
      _vm._v(" "),
      _c("p", { staticClass: "text-lg font-medium text-gray-600 mb-6" }, [
        _vm._v("\n    Roll your own calendars using scoped slots\n  "),
      ]),
      _vm._v(" "),
      _c("v-calendar", {
        staticClass: "custom-calendar max-w-full",
        attrs: {
          masks: _vm.masks,
          attributes: _vm.attributes,
          "disable-page-swipe": "",
          "is-expanded": "",
        },
        scopedSlots: _vm._u([
          {
            key: "day-content",
            fn: function (ref) {
              var day = ref.day
              var attributes = ref.attributes
              return [
                _c(
                  "div",
                  { staticClass: "flex flex-col h-full z-10 overflow-hidden" },
                  [
                    _c(
                      "span",
                      { staticClass: "day-label text-sm text-gray-900" },
                      [_vm._v(_vm._s(day.day))]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "flex-grow overflow-y-auto overflow-x-auto",
                      },
                      _vm._l(attributes, function (attr) {
                        return _c(
                          "p",
                          {
                            key: attr.key,
                            staticClass:
                              "text-xs leading-tight rounded-sm p-1 mt-0 mb-1",
                            class: attr.customData.class,
                          },
                          [
                            _vm._v(
                              "\n            " +
                                _vm._s(attr.customData.title) +
                                "\n          "
                            ),
                          ]
                        )
                      }),
                      0
                    ),
                  ]
                ),
              ]
            },
          },
        ]),
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue/dist/vue.esm.js":
/*!******************************************!*\
  !*** ./node_modules/vue/dist/vue.esm.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Generate a string containing static keys from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof __webpack_require__.g !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = __webpack_require__.g['process'] && __webpack_require__.g['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i], vm);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  var haveExpectedTypes = expectedTypes.some(function (t) { return t; });
  if (!valid && haveExpectedTypes) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol|BigInt)$/;

function assertType (value, type, vm) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    try {
      valid = value instanceof type;
    } catch (e) {
      warn('Invalid prop type: "' + String(type) + '" is not a constructor', vm);
      valid = false;
    }
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

var functionTypeCheckRE = /^\s*function (\w+)/;

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(functionTypeCheckRE);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  // check if we need to specify expected value
  if (
    expectedTypes.length === 1 &&
    isExplicable(expectedType) &&
    isExplicable(typeof value) &&
    !isBoolean(expectedType, receivedType)
  ) {
    message += " with value " + (styleValue(value, expectedType));
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + (styleValue(value, receivedType)) + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

var EXPLICABLE_TYPES = ['string', 'number', 'boolean'];
function isExplicable (value) {
  return EXPLICABLE_TYPES.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var isUsingMicroTask = false;

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    var vnode = res && res[0];
    return res && (
      !vnode ||
      (res.length === 1 && vnode.isComment && !isAsyncPlaceholder(vnode)) // #9658, #10391
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallbackRender,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) {
    // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn('slot v-bind without argument expects an Object', this);
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes =
      scopedSlotFn(props) ||
      (typeof fallbackRender === 'function' ? fallbackRender() : fallbackRender);
  } else {
    nodes =
      this.$slots[name] ||
      (typeof fallbackRender === 'function' ? fallbackRender() : fallbackRender);
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
  return eventKeyCode === undefined
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  // we know it's MountedComponentVNode but flow doesn't
  vnode,
  // activeInstance in lifecycle state
  parent
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn) && data.tag !== 'component') {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : 0
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ( true && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key) ||
    (!newScopedSlots && vm.$scopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : 0;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        var info = "callback for watcher \"" + (this.expression) + "\"";
        invokeWithErrorHandling(this.cb, this.vm, [value, oldValue], this.vm, info);
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      } else if (vm.$options.methods && key in vm.$options.methods) {
        warn(("The computed property \"" + key + "\" is already defined as a method."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      var info = "callback for immediate watcher \"" + (watcher.expression) + "\"";
      pushTarget();
      invokeWithErrorHandling(cb, vm, [watcher.value], vm, info);
      popTarget();
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */





function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var entry = cache[key];
    if (entry) {
      var name = entry.name;
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var entry = cache[key];
  if (entry && (!current || entry.tag !== current.tag)) {
    entry.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  methods: {
    cacheVNode: function cacheVNode() {
      var ref = this;
      var cache = ref.cache;
      var keys = ref.keys;
      var vnodeToCache = ref.vnodeToCache;
      var keyToCache = ref.keyToCache;
      if (vnodeToCache) {
        var tag = vnodeToCache.tag;
        var componentInstance = vnodeToCache.componentInstance;
        var componentOptions = vnodeToCache.componentOptions;
        cache[keyToCache] = {
          name: getComponentName(componentOptions),
          tag: tag,
          componentInstance: componentInstance,
        };
        keys.push(keyToCache);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
        this.vnodeToCache = null;
      }
    }
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.cacheVNode();
    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  updated: function updated () {
    this.cacheVNode();
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        // delay setting the cache until update
        this.vnodeToCache = vnode;
        this.keyToCache = key;
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.14';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false'
    ? 'false'
    // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value)
      ? value
      : 'true'
};

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
       true && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key &&
    a.asyncFactory === b.asyncFactory && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ( true && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (true) {
          checkDuplicateKeys(ch);
        }
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ( true &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ( true &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (true) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes([oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur, vnode.data.pre);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value, isInPre) {
  if (isInPre || el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && value !== '' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
  }
}

/*  */



/* eslint-disable no-unused-vars */
function baseWarn (msg, range) {
  console.error(("[Vue compiler]: " + msg));
}
/* eslint-enable no-unused-vars */

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value, range, dynamic) {
  (el.props || (el.props = [])).push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
  el.plain = false;
}

function addAttr (el, name, value, range, dynamic) {
  var attrs = dynamic
    ? (el.dynamicAttrs || (el.dynamicAttrs = []))
    : (el.attrs || (el.attrs = []));
  attrs.push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value, range) {
  el.attrsMap[name] = value;
  el.attrsList.push(rangeSetItem({ name: name, value: value }, range));
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  isDynamicArg,
  modifiers,
  range
) {
  (el.directives || (el.directives = [])).push(rangeSetItem({
    name: name,
    rawName: rawName,
    value: value,
    arg: arg,
    isDynamicArg: isDynamicArg,
    modifiers: modifiers
  }, range));
  el.plain = false;
}

function prependModifierMarker (symbol, name, dynamic) {
  return dynamic
    ? ("_p(" + name + ",\"" + symbol + "\")")
    : symbol + name // mark the event as captured
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn,
  range,
  dynamic
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
     true && warn &&
    modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.',
      range
    );
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (modifiers.right) {
    if (dynamic) {
      name = "(" + name + ")==='click'?'contextmenu':(" + name + ")";
    } else if (name === 'click') {
      name = 'contextmenu';
      delete modifiers.right;
    }
  } else if (modifiers.middle) {
    if (dynamic) {
      name = "(" + name + ")==='click'?'mouseup':(" + name + ")";
    } else if (name === 'click') {
      name = 'mouseup';
    }
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = prependModifierMarker('!', name, dynamic);
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = prependModifierMarker('~', name, dynamic);
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = prependModifierMarker('&', name, dynamic);
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = rangeSetItem({ value: value.trim(), dynamic: dynamic }, range);
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getRawBindingAttr (
  el,
  name
) {
  return el.rawAttrsMap[':' + name] ||
    el.rawAttrsMap['v-bind:' + name] ||
    el.rawAttrsMap[name]
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

function getAndRemoveAttrByRegex (
  el,
  name
) {
  var list = el.attrsList;
  for (var i = 0, l = list.length; i < l; i++) {
    var attr = list[i];
    if (name.test(attr.name)) {
      list.splice(i, 1);
      return attr
    }
  }
}

function rangeSetItem (
  item,
  range
) {
  if (range) {
    if (range.start != null) {
      item.start = range.start;
    }
    if (range.end != null) {
      item.end = range.end;
    }
  }
  return item
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
      "? " + baseValueExpression + ".trim()" +
      ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: JSON.stringify(value),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len, str, chr, index$1, expressionPos, expressionEndPos;



function parseModel (val) {
  // Fix https://github.com/vuejs/vue/pull/7730
  // allow v-model="obj.val " (trailing whitespace)
  val = val.trim();
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (true) {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead.",
        el.rawAttrsMap['v-model']
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (true) {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.',
      el.rawAttrsMap['v-model']
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
      "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  // except for inputs with v-bind:type
  if (true) {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (value$1 && !typeBinding) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally',
        el.rawAttrsMap[binding]
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1 (
  name,
  handler,
  capture,
  passive
) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;
    handler = original._wrapper = function (e) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget ||
        // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp ||
        // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 ||
        // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document
      ) {
        return original.apply(this, arguments)
      }
    };
  }
  target$1.addEventListener(
    name,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  name,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    name,
    handler._wrapper || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

var svgContainer;

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;
      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }
      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if (
      // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecessary `checked` update.
      cur !== oldProps[key]
    ) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ( true && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ( true && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
     true && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ( true && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ( true &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        true
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if ( true &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if ( true && staticClass) {
    var res = parseText(staticClass, options.delimiters);
    if (res) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.',
        el.rawAttrsMap['class']
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    if (true) {
      var res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.',
          el.rawAttrsMap['style']
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
};

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + (unicodeRegExp.source) + "]*";
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being passed as HTML comment when inlined in page
var comment = /^<!\--/;
var conditionalComment = /^<!\[/;

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t',
  '&#39;': "'"
};
var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3);
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
      }

      if (textEnd < 0) {
        text = html;
      }

      if (text) {
        advance(text.length);
      }

      if (options.chars && text) {
        options.chars(text, index - text.length, index);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if ( true && !stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""), { start: index + html.length });
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(dynamicArgAttribute) || html.match(attribute))) {
        attr.start = index;
        advance(attr[0].length);
        attr.end = index;
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
      if ( true && options.outputSourceRange) {
        attrs[i].start = args.start + args[0].match(/^\s*/).length;
        attrs[i].end = args.end;
      }
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs, start: match.start, end: match.end });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    // Find the closest opened tag of the same type
    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if ( true &&
          (i > pos || !tagName) &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag."),
            { start: stack[i].start, end: stack[i].end }
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:|^#/;
var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;
var dynamicArgRE = /^\[.*\]$/;

var argRE = /:(.*)$/;
var bindRE = /^:|^\.|^v-bind:/;
var modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;

var slotRE = /^v-slot(:|$)|^#/;

var lineBreakRE = /[\r\n]/;
var whitespaceRE$1 = /[ \f\t\r\n]+/g;

var invalidAttributeRE = /[\s"'<>\/=]/;

var decodeHTMLCached = cached(he.decode);

var emptySlotScopeToken = "_empty_";

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;
var maybeComponent;

function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    rawAttrsMap: {},
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;
  var isReservedTag = options.isReservedTag || no;
  maybeComponent = function (el) { return !!(
    el.component ||
    el.attrsMap[':is'] ||
    el.attrsMap['v-bind:is'] ||
    !(el.attrsMap.is ? isReservedTag(el.attrsMap.is) : isReservedTag(el.tag))
  ); };
  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var whitespaceOption = options.whitespace;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg, range) {
    if (!warned) {
      warned = true;
      warn$2(msg, range);
    }
  }

  function closeElement (element) {
    trimEndingWhitespace(element);
    if (!inVPre && !element.processed) {
      element = processElement(element, options);
    }
    // tree management
    if (!stack.length && element !== root) {
      // allow root elements with v-if, v-else-if and v-else
      if (root.if && (element.elseif || element.else)) {
        if (true) {
          checkRootConstraints(element);
        }
        addIfCondition(root, {
          exp: element.elseif,
          block: element
        });
      } else if (true) {
        warnOnce(
          "Component template should contain exactly one root element. " +
          "If you are using v-if on multiple elements, " +
          "use v-else-if to chain them instead.",
          { start: element.start }
        );
      }
    }
    if (currentParent && !element.forbidden) {
      if (element.elseif || element.else) {
        processIfConditions(element, currentParent);
      } else {
        if (element.slotScope) {
          // scoped slot
          // keep it in the children list so that v-else(-if) conditions can
          // find it as the prev node.
          var name = element.slotTarget || '"default"'
          ;(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        }
        currentParent.children.push(element);
        element.parent = currentParent;
      }
    }

    // final children cleanup
    // filter out scoped slots
    element.children = element.children.filter(function (c) { return !(c).slotScope; });
    // remove trailing whitespace node again
    trimEndingWhitespace(element);

    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  function trimEndingWhitespace (el) {
    // remove trailing whitespace node
    if (!inPre) {
      var lastNode;
      while (
        (lastNode = el.children[el.children.length - 1]) &&
        lastNode.type === 3 &&
        lastNode.text === ' '
      ) {
        el.children.pop();
      }
    }
  }

  function checkRootConstraints (el) {
    if (el.tag === 'slot' || el.tag === 'template') {
      warnOnce(
        "Cannot use <" + (el.tag) + "> as component root element because it may " +
        'contain multiple nodes.',
        { start: el.start }
      );
    }
    if (el.attrsMap.hasOwnProperty('v-for')) {
      warnOnce(
        'Cannot use v-for on stateful component root element because ' +
        'it renders multiple elements.',
        el.rawAttrsMap['v-for']
      );
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    outputSourceRange: options.outputSourceRange,
    start: function start (tag, attrs, unary, start$1, end) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      if (true) {
        if (options.outputSourceRange) {
          element.start = start$1;
          element.end = end;
          element.rawAttrsMap = element.attrsList.reduce(function (cumulated, attr) {
            cumulated[attr.name] = attr;
            return cumulated
          }, {});
        }
        attrs.forEach(function (attr) {
          if (invalidAttributeRE.test(attr.name)) {
            warn$2(
              "Invalid dynamic argument expression: attribute names cannot contain " +
              "spaces, quotes, <, >, / or =.",
              {
                start: attr.start + attr.name.indexOf("["),
                end: attr.start + attr.name.length
              }
            );
          }
        });
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
         true && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.',
          { start: element.start }
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
      }

      if (!root) {
        root = element;
        if (true) {
          checkRootConstraints(root);
        }
      }

      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end (tag, start, end$1) {
      var element = stack[stack.length - 1];
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      if ( true && options.outputSourceRange) {
        element.end = end$1;
      }
      closeElement(element);
    },

    chars: function chars (text, start, end) {
      if (!currentParent) {
        if (true) {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.',
              { start: start }
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored."),
              { start: start }
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      if (inPre || text.trim()) {
        text = isTextTag(currentParent) ? text : decodeHTMLCached(text);
      } else if (!children.length) {
        // remove the whitespace-only node right after an opening tag
        text = '';
      } else if (whitespaceOption) {
        if (whitespaceOption === 'condense') {
          // in condense mode, remove the whitespace node if it contains
          // line break, otherwise condense to a single space
          text = lineBreakRE.test(text) ? '' : ' ';
        } else {
          text = ' ';
        }
      } else {
        text = preserveWhitespace ? ' ' : '';
      }
      if (text) {
        if (!inPre && whitespaceOption === 'condense') {
          // condense consecutive whitespaces into single space
          text = text.replace(whitespaceRE$1, ' ');
        }
        var res;
        var child;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          child = {
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          };
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          child = {
            type: 3,
            text: text
          };
        }
        if (child) {
          if ( true && options.outputSourceRange) {
            child.start = start;
            child.end = end;
          }
          children.push(child);
        }
      }
    },
    comment: function comment (text, start, end) {
      // adding anything as a sibling to the root node is forbidden
      // comments should still be allowed, but ignored
      if (currentParent) {
        var child = {
          type: 3,
          text: text,
          isComment: true
        };
        if ( true && options.outputSourceRange) {
          child.start = start;
          child.end = end;
        }
        currentParent.children.push(child);
      }
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var list = el.attrsList;
  var len = list.length;
  if (len) {
    var attrs = el.attrs = new Array(len);
    for (var i = 0; i < len; i++) {
      attrs[i] = {
        name: list[i].name,
        value: JSON.stringify(list[i].value)
      };
      if (list[i].start != null) {
        attrs[i].start = list[i].start;
        attrs[i].end = list[i].end;
      }
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (
  element,
  options
) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = (
    !element.key &&
    !element.scopedSlots &&
    !element.attrsList.length
  );

  processRef(element);
  processSlotContent(element);
  processSlotOutlet(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
  return element
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if (true) {
      if (el.tag === 'template') {
        warn$2(
          "<template> cannot be keyed. Place the key on real elements instead.",
          getRawBindingAttr(el, 'key')
        );
      }
      if (el.for) {
        var iterator = el.iterator2 || el.iterator1;
        var parent = el.parent;
        if (iterator && iterator === exp && parent && parent.tag === 'transition-group') {
          warn$2(
            "Do not use v-for index as key on <transition-group> children, " +
            "this is the same as not using keys.",
            getRawBindingAttr(el, 'key'),
            true /* tip */
          );
        }
      }
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else if (true) {
      warn$2(
        ("Invalid v-for expression: " + exp),
        el.rawAttrsMap['v-for']
      );
    }
  }
}



function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '').trim();
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (true) {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if.",
      el.rawAttrsMap[el.elseif ? 'v-else-if' : 'v-else']
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if ( true && children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored.",
          children[i]
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

// handle content being passed to a component as slot,
// e.g. <template slot="xxx">, <div slot-scope="xxx">
function processSlotContent (el) {
  var slotScope;
  if (el.tag === 'template') {
    slotScope = getAndRemoveAttr(el, 'scope');
    /* istanbul ignore if */
    if ( true && slotScope) {
      warn$2(
        "the \"scope\" attribute for scoped slots have been deprecated and " +
        "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
        "can also be used on plain elements in addition to <template> to " +
        "denote scoped slots.",
        el.rawAttrsMap['scope'],
        true
      );
    }
    el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
  } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
    /* istanbul ignore if */
    if ( true && el.attrsMap['v-for']) {
      warn$2(
        "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
        "(v-for takes higher priority). Use a wrapper <template> for the " +
        "scoped slot to make it clearer.",
        el.rawAttrsMap['slot-scope'],
        true
      );
    }
    el.slotScope = slotScope;
  }

  // slot="xxx"
  var slotTarget = getBindingAttr(el, 'slot');
  if (slotTarget) {
    el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
    el.slotTargetDynamic = !!(el.attrsMap[':slot'] || el.attrsMap['v-bind:slot']);
    // preserve slot as an attribute for native shadow DOM compat
    // only for non-scoped slots.
    if (el.tag !== 'template' && !el.slotScope) {
      addAttr(el, 'slot', slotTarget, getRawBindingAttr(el, 'slot'));
    }
  }

  // 2.6 v-slot syntax
  {
    if (el.tag === 'template') {
      // v-slot on <template>
      var slotBinding = getAndRemoveAttrByRegex(el, slotRE);
      if (slotBinding) {
        if (true) {
          if (el.slotTarget || el.slotScope) {
            warn$2(
              "Unexpected mixed usage of different slot syntaxes.",
              el
            );
          }
          if (el.parent && !maybeComponent(el.parent)) {
            warn$2(
              "<template v-slot> can only appear at the root level inside " +
              "the receiving component",
              el
            );
          }
        }
        var ref = getSlotName(slotBinding);
        var name = ref.name;
        var dynamic = ref.dynamic;
        el.slotTarget = name;
        el.slotTargetDynamic = dynamic;
        el.slotScope = slotBinding.value || emptySlotScopeToken; // force it into a scoped slot for perf
      }
    } else {
      // v-slot on component, denotes default slot
      var slotBinding$1 = getAndRemoveAttrByRegex(el, slotRE);
      if (slotBinding$1) {
        if (true) {
          if (!maybeComponent(el)) {
            warn$2(
              "v-slot can only be used on components or <template>.",
              slotBinding$1
            );
          }
          if (el.slotScope || el.slotTarget) {
            warn$2(
              "Unexpected mixed usage of different slot syntaxes.",
              el
            );
          }
          if (el.scopedSlots) {
            warn$2(
              "To avoid scope ambiguity, the default slot should also use " +
              "<template> syntax when there are other named slots.",
              slotBinding$1
            );
          }
        }
        // add the component's children to its default slot
        var slots = el.scopedSlots || (el.scopedSlots = {});
        var ref$1 = getSlotName(slotBinding$1);
        var name$1 = ref$1.name;
        var dynamic$1 = ref$1.dynamic;
        var slotContainer = slots[name$1] = createASTElement('template', [], el);
        slotContainer.slotTarget = name$1;
        slotContainer.slotTargetDynamic = dynamic$1;
        slotContainer.children = el.children.filter(function (c) {
          if (!c.slotScope) {
            c.parent = slotContainer;
            return true
          }
        });
        slotContainer.slotScope = slotBinding$1.value || emptySlotScopeToken;
        // remove children as they are returned from scopedSlots now
        el.children = [];
        // mark el non-plain so data gets generated
        el.plain = false;
      }
    }
  }
}

function getSlotName (binding) {
  var name = binding.name.replace(slotRE, '');
  if (!name) {
    if (binding.name[0] !== '#') {
      name = 'default';
    } else if (true) {
      warn$2(
        "v-slot shorthand syntax requires a slot name.",
        binding
      );
    }
  }
  return dynamicArgRE.test(name)
    // dynamic [name]
    ? { name: name.slice(1, -1), dynamic: true }
    // static name
    : { name: ("\"" + name + "\""), dynamic: false }
}

// handle <slot/> outlets
function processSlotOutlet (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if ( true && el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead.",
        getRawBindingAttr(el, 'key')
      );
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, syncGen, isDynamic;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name.replace(dirRE, ''));
      // support .foo shorthand syntax for the .prop modifier
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isDynamic = dynamicArgRE.test(name);
        if (isDynamic) {
          name = name.slice(1, -1);
        }
        if (
           true &&
          value.trim().length === 0
        ) {
          warn$2(
            ("The value for a v-bind expression cannot be empty. Found in \"v-bind:" + name + "\"")
          );
        }
        if (modifiers) {
          if (modifiers.prop && !isDynamic) {
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel && !isDynamic) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            syncGen = genAssignmentCode(value, "$event");
            if (!isDynamic) {
              addHandler(
                el,
                ("update:" + (camelize(name))),
                syncGen,
                null,
                false,
                warn$2,
                list[i]
              );
              if (hyphenate(name) !== camelize(name)) {
                addHandler(
                  el,
                  ("update:" + (hyphenate(name))),
                  syncGen,
                  null,
                  false,
                  warn$2,
                  list[i]
                );
              }
            } else {
              // handler w/ dynamic event name
              addHandler(
                el,
                ("\"update:\"+(" + name + ")"),
                syncGen,
                null,
                false,
                warn$2,
                list[i],
                true // dynamic
              );
            }
          }
        }
        if ((modifiers && modifiers.prop) || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value, list[i], isDynamic);
        } else {
          addAttr(el, name, value, list[i], isDynamic);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        isDynamic = dynamicArgRE.test(name);
        if (isDynamic) {
          name = name.slice(1, -1);
        }
        addHandler(el, name, value, modifiers, false, warn$2, list[i], isDynamic);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        isDynamic = false;
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
          if (dynamicArgRE.test(arg)) {
            arg = arg.slice(1, -1);
            isDynamic = true;
          }
        }
        addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);
        if ( true && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      if (true) {
        var res = parseText(value, delimiters);
        if (res) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.',
            list[i]
          );
        }
      }
      addAttr(el, name, JSON.stringify(value), list[i]);
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true', list[i]);
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
       true &&
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name, attrs[i]);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead.",
        el.rawAttrsMap['v-model']
      );
    }
    _el = _el.parent;
  }
}

/*  */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (!map['v-model']) {
      return
    }

    var typeBinding;
    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type');
    }
    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = "(" + (map['v-bind']) + ").type";
    }

    if (typeBinding) {
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$1 = {
  preTransformNode: preTransformNode
};

var modules$1 = [
  klass$1,
  style$1,
  model$1
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"), dir);
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"), dir);
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/;
var fnInvokeRE = /\([^)]*?\);*$/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

// KeyboardEvent.keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// KeyboardEvent.key aliases
var keyNames = {
  // #7880: IE11 and Edge use `Esc` for Escape key name.
  esc: ['Esc', 'Escape'],
  tab: 'Tab',
  enter: 'Enter',
  // #9112: IE11 uses `Spacebar` for Space key name.
  space: [' ', 'Spacebar'],
  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  // #9112: IE11 uses `Del` for Delete key name.
  'delete': ['Backspace', 'Delete', 'Del']
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative
) {
  var prefix = isNative ? 'nativeOn:' : 'on:';
  var staticHandlers = "";
  var dynamicHandlers = "";
  for (var name in events) {
    var handlerCode = genHandler(events[name]);
    if (events[name] && events[name].dynamic) {
      dynamicHandlers += name + "," + handlerCode + ",";
    } else {
      staticHandlers += "\"" + name + "\":" + handlerCode + ",";
    }
  }
  staticHandlers = "{" + (staticHandlers.slice(0, -1)) + "}";
  if (dynamicHandlers) {
    return prefix + "_d(" + staticHandlers + ",[" + (dynamicHandlers.slice(0, -1)) + "])"
  } else {
    return prefix + staticHandlers
  }
}

function genHandler (handler) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);
  var isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ''));

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    return ("function($event){" + (isFunctionInvocation ? ("return " + (handler.value)) : handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? ("return " + (handler.value) + ".apply(null, arguments)")
      : isFunctionExpression
        ? ("return (" + (handler.value) + ").apply(null, arguments)")
        : isFunctionInvocation
          ? ("return " + (handler.value))
          : handler.value;
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return (
    // make sure the key filters only apply to KeyboardEvents
    // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
    // key events that do not have keyCode property...
    "if(!$event.type.indexOf('key')&&" +
    (keys.map(genFilterCode).join('&&')) + ")return null;"
  )
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var keyCode = keyCodes[key];
  var keyName = keyNames[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(keyCode)) + "," +
    "$event.key," +
    "" + (JSON.stringify(keyName)) +
    ")"
  )
}

/*  */

function on (el, dir) {
  if ( true && dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */





var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
  this.pre = false;
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  // fix #11483, Root level <script> tags should not be rendered.
  var code = ast ? (ast.tag === 'script' ? 'null' : genElement(ast, state)) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.parent) {
    el.pre = el.pre || el.parent.pre;
  }

  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data;
      if (!el.plain || (el.pre && state.maybeComponent(el))) {
        data = genData$2(el, state);
      }

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  // Some elements (templates) need to behave differently inside of a v-pre
  // node.  All pre nodes are static roots, so we can use this as a location to
  // wrap a state change and reset it upon exiting the pre node.
  var originalPreState = state.pre;
  if (el.pre) {
    state.pre = el.pre;
  }
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  state.pre = originalPreState;
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
       true && state.warn(
        "v-once can only be used inside v-for that is keyed. ",
        el.rawAttrsMap['v-once']
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if ( true &&
    state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      el.rawAttrsMap['v-for'],
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:" + (genProps(el.attrs)) + ",";
  }
  // DOM props
  if (el.props) {
    data += "domProps:" + (genProps(el.props)) + ",";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el, el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind dynamic argument wrap
  // v-bind with dynamic arguments must be applied using the same v-bind object
  // merge helper so that class/style/mustUseProp attrs are handled correctly.
  if (el.dynamicAttrs) {
    data = "_b(" + data + ",\"" + (el.tag) + "\"," + (genProps(el.dynamicAttrs)) + ")";
  }
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:" + (dir.isDynamicArg ? dir.arg : ("\"" + (dir.arg) + "\""))) : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if ( true && (
    el.children.length !== 1 || ast.type !== 1
  )) {
    state.warn(
      'Inline-template components must have exactly one child element.',
      { start: el.start }
    );
  }
  if (ast && ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  el,
  slots,
  state
) {
  // by default scoped slots are considered "stable", this allows child
  // components with only scoped slots to skip forced updates from parent.
  // but in some cases we have to bail-out of this optimization
  // for example if the slot contains dynamic names, has v-if or v-for on them...
  var needsForceUpdate = el.for || Object.keys(slots).some(function (key) {
    var slot = slots[key];
    return (
      slot.slotTargetDynamic ||
      slot.if ||
      slot.for ||
      containsSlotChild(slot) // is passing down slot from parent which may be dynamic
    )
  });

  // #9534: if a component with scoped slots is inside a conditional branch,
  // it's possible for the same component to be reused but with different
  // compiled slot content. To avoid that, we generate a unique key based on
  // the generated code of all the slot contents.
  var needsKey = !!el.if;

  // OR when it is inside another scoped slot or v-for (the reactivity may be
  // disconnected due to the intermediate scope variable)
  // #9438, #9506
  // TODO: this can be further optimized by properly analyzing in-scope bindings
  // and skip force updating ones that do not actually use scope variables.
  if (!needsForceUpdate) {
    var parent = el.parent;
    while (parent) {
      if (
        (parent.slotScope && parent.slotScope !== emptySlotScopeToken) ||
        parent.for
      ) {
        needsForceUpdate = true;
        break
      }
      if (parent.if) {
        needsKey = true;
      }
      parent = parent.parent;
    }
  }

  var generatedSlots = Object.keys(slots)
    .map(function (key) { return genScopedSlot(slots[key], state); })
    .join(',');

  return ("scopedSlots:_u([" + generatedSlots + "]" + (needsForceUpdate ? ",null,true" : "") + (!needsForceUpdate && needsKey ? (",null,false," + (hash(generatedSlots))) : "") + ")")
}

function hash(str) {
  var hash = 5381;
  var i = str.length;
  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }
  return hash >>> 0
}

function containsSlotChild (el) {
  if (el.type === 1) {
    if (el.tag === 'slot') {
      return true
    }
    return el.children.some(containsSlotChild)
  }
  return false
}

function genScopedSlot (
  el,
  state
) {
  var isLegacySyntax = el.attrsMap['slot-scope'];
  if (el.if && !el.ifProcessed && !isLegacySyntax) {
    return genIf(el, state, genScopedSlot, "null")
  }
  if (el.for && !el.forProcessed) {
    return genFor(el, state, genScopedSlot)
  }
  var slotScope = el.slotScope === emptySlotScopeToken
    ? ""
    : String(el.slotScope);
  var fn = "function(" + slotScope + "){" +
    "return " + (el.tag === 'template'
      ? el.if && isLegacySyntax
        ? ("(" + (el.if) + ")?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  // reverse proxy v-slot without scope on this.$slots
  var reverseProxy = slotScope ? "" : ",proxy:true";
  return ("{key:" + (el.slotTarget || "\"default\"") + ",fn:" + fn + reverseProxy + "}")
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      var normalizationType = checkSkip
        ? state.maybeComponent(el$1) ? ",1" : ",0"
        : "";
      return ("" + ((altGenElement || genElement)(el$1, state)) + normalizationType)
    }
    var normalizationType$1 = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType$1 ? ("," + normalizationType$1) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } else if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? (",function(){return " + children + "}") : '');
  var attrs = el.attrs || el.dynamicAttrs
    ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(function (attr) { return ({
        // slot props are camelized
        name: camelize(attr.name),
        value: attr.value,
        dynamic: attr.dynamic
      }); }))
    : null;
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var staticProps = "";
  var dynamicProps = "";
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    var value = transformSpecialNewlines(prop.value);
    if (prop.dynamic) {
      dynamicProps += (prop.name) + "," + value + ",";
    } else {
      staticProps += "\"" + (prop.name) + "\":" + value + ",";
    }
  }
  staticProps = "{" + (staticProps.slice(0, -1)) + "}";
  if (dynamicProps) {
    return ("_d(" + staticProps + ",[" + (dynamicProps.slice(0, -1)) + "])")
  } else {
    return staticProps
  }
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */



// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast, warn) {
  if (ast) {
    checkNode(ast, warn);
  }
}

function checkNode (node, warn) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          var range = node.rawAttrsMap[name];
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), warn, range);
          } else if (name === 'v-slot' || name[0] === '#') {
            checkFunctionParameterExpression(value, (name + "=\"" + value + "\""), warn, range);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), warn, range);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), warn, range);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], warn);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, warn, node);
  }
}

function checkEvent (exp, text, warn, range) {
  var stripped = exp.replace(stripStringRE, '');
  var keywordMatch = stripped.match(unaryOperatorsRE);
  if (keywordMatch && stripped.charAt(keywordMatch.index - 1) !== '$') {
    warn(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim()),
      range
    );
  }
  checkExpression(exp, text, warn, range);
}

function checkFor (node, text, warn, range) {
  checkExpression(node.for || '', text, warn, range);
  checkIdentifier(node.alias, 'v-for alias', text, warn, range);
  checkIdentifier(node.iterator1, 'v-for iterator', text, warn, range);
  checkIdentifier(node.iterator2, 'v-for iterator', text, warn, range);
}

function checkIdentifier (
  ident,
  type,
  text,
  warn,
  range
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      warn(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())), range);
    }
  }
}

function checkExpression (exp, text, warn, range) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      warn(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim()),
        range
      );
    } else {
      warn(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n",
        range
      );
    }
  }
}

function checkFunctionParameterExpression (exp, text, warn, range) {
  try {
    new Function(exp, '');
  } catch (e) {
    warn(
      "invalid function parameter expression: " + (e.message) + " in\n\n" +
      "    " + exp + "\n\n" +
      "  Raw expression: " + (text.trim()) + "\n",
      range
    );
  }
}

/*  */

var range = 2;

function generateCodeFrame (
  source,
  start,
  end
) {
  if ( start === void 0 ) start = 0;
  if ( end === void 0 ) end = source.length;

  var lines = source.split(/\r?\n/);
  var count = 0;
  var res = [];
  for (var i = 0; i < lines.length; i++) {
    count += lines[i].length + 1;
    if (count >= start) {
      for (var j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length) { continue }
        res.push(("" + (j + 1) + (repeat$1(" ", 3 - String(j + 1).length)) + "|  " + (lines[j])));
        var lineLength = lines[j].length;
        if (j === i) {
          // push underline
          var pad = start - (count - lineLength) + 1;
          var length = end > count ? lineLength - pad : end - start;
          res.push("   |  " + repeat$1(" ", pad) + repeat$1("^", length));
        } else if (j > i) {
          if (end > count) {
            var length$1 = Math.min(end - count, lineLength);
            res.push("   |  " + repeat$1("^", length$1));
          }
          count += lineLength + 1;
        }
      }
      break
    }
  }
  return res.join('\n')
}

function repeat$1 (str, n) {
  var result = '';
  if (n > 0) {
    while (true) { // eslint-disable-line
      if (n & 1) { result += str; }
      n >>>= 1;
      if (n <= 0) { break }
      str += str;
    }
  }
  return result
}

/*  */



function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    if (true) {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    if (true) {
      if (compiled.errors && compiled.errors.length) {
        if (options.outputSourceRange) {
          compiled.errors.forEach(function (e) {
            warn$$1(
              "Error compiling template:\n\n" + (e.msg) + "\n\n" +
              generateCodeFrame(template, e.start, e.end),
              vm
            );
          });
        } else {
          warn$$1(
            "Error compiling template:\n\n" + template + "\n\n" +
            compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
            vm
          );
        }
      }
      if (compiled.tips && compiled.tips.length) {
        if (options.outputSourceRange) {
          compiled.tips.forEach(function (e) { return tip(e.msg, vm); });
        } else {
          compiled.tips.forEach(function (msg) { return tip(msg, vm); });
        }
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (true) {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];

      var warn = function (msg, range, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        if ( true && options.outputSourceRange) {
          // $flow-disable-line
          var leadingSpaceLength = template.match(/^\s*/)[0].length;

          warn = function (msg, range, tip) {
            var data = { msg: msg };
            if (range) {
              if (range.start != null) {
                data.start = range.start + leadingSpaceLength;
              }
              if (range.end != null) {
                data.end = range.end + leadingSpaceLength;
              }
            }
            (tip ? tips : errors).push(data);
          };
        }
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      finalOptions.warn = warn;

      var compiled = baseCompile(template.trim(), finalOptions);
      if (true) {
        detectErrors(compiled.ast, warn);
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compile = ref$1.compile;
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
     true && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if ( true && !template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (true) {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if ( true && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        outputSourceRange: "development" !== 'production',
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if ( true && config.performance && mark) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue.compile = compileToFunctions;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vue);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./resources/js/app.js");
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/sass/app.scss");
/******/ 	
/******/ })()
;