parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KLhG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Description=exports.Title=exports.BackgroundImage=exports.InnerContainer=exports.OuterContainer=void 0;var n=e(require("styled-components"));function e(n){return n&&n.__esModule?n:{default:n}}var t=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},r=n.default.div(s||(s=t(["\n  height: 50vh;\n  width: 15vw;\n  min-height: 350px;\n  min-width: 250px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  position: relative;\n  margin: 10px;\n  border-radius: 10px;\n  border: ",";\n  background-color: ",";\n  cursor: pointer;\n  transition: all 0.5s ease-in-out;\n  :hover {\n    border-color: ",";\n    height: calc(50vh + 100px);\n    z-index: 1;\n  }\n"],["\n  height: 50vh;\n  width: 15vw;\n  min-height: 350px;\n  min-width: 250px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  position: relative;\n  margin: 10px;\n  border-radius: 10px;\n  border: ",";\n  background-color: ",";\n  cursor: pointer;\n  transition: all 0.5s ease-in-out;\n  :hover {\n    border-color: ",";\n    height: calc(50vh + 100px);\n    z-index: 1;\n  }\n"])),function(n){return"5px solid "+n.theme.workqueuesCard.borderColor},function(n){return n.theme.card.background},function(n){return n.theme.colors.tertiary});exports.OuterContainer=r;var i=n.default.div(l||(l=t(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  position: relative;\n  cursor: pointer;\n"],["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  position: relative;\n  cursor: pointer;\n"])));exports.InnerContainer=i;var o=n.default.img(p||(p=t(["\n  object-fit: cover;\n  height: 100%;\n  width: 100%;\n  border-radius: 10px;\n  filter: brightness(70%);\n  ",":hover & {\n    border-radius: 10px 10px 0 0;\n  }\n"],["\n  object-fit: cover;\n  height: 100%;\n  width: 100%;\n  border-radius: 10px;\n  filter: brightness(70%);\n  ",":hover & {\n    border-radius: 10px 10px 0 0;\n  }\n"])),r);exports.BackgroundImage=o;var a=n.default.h1(d||(d=t(["\n  top: 30%;\n  position: absolute;\n  text-transform: uppercase;\n  color: ",";\n  font-size: 25px;\n"],["\n  top: 30%;\n  position: absolute;\n  text-transform: uppercase;\n  color: ",";\n  font-size: 25px;\n"])),function(n){return n.theme.workqueuesCard.titleColor});exports.Title=a;var s,l,p,d,c,u=n.default.div(c||(c=t(["\n  display: flex;\n  align-self: flex-end;\n  align-items: center;\n  height: 0;\n  text-align: center;\n  color: ",";\n  opacity: 0;\n  font-size: 15px;\n  padding-right: 10px;\n  padding-left: 10px;\n  transition: all 0.5s ease-in-out;\n  ",":hover & {\n    height: 100px;\n    opacity: 1;\n  }\n"],["\n  display: flex;\n  align-self: flex-end;\n  align-items: center;\n  height: 0;\n  text-align: center;\n  color: ",";\n  opacity: 0;\n  font-size: 15px;\n  padding-right: 10px;\n  padding-left: 10px;\n  transition: all 0.5s ease-in-out;\n  ",":hover & {\n    height: 100px;\n    opacity: 1;\n  }\n"])),function(n){return n.theme.workqueuesCard.contentColor},r);exports.Description=u;
},{"styled-components":"tFSs"}],"qvPr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("react")),t=require("./style");function r(e){return e&&e.__esModule?e:{default:e}}var l=function(r){var l=r.background,n=r.title,u=r.description;return e.default.createElement(t.OuterContainer,null,e.default.createElement(t.InnerContainer,null,e.default.createElement(t.BackgroundImage,{src:l}),e.default.createElement(t.Title,null,n)),u&&e.default.createElement(t.Description,null,u))},n=l;exports.default=n;
},{"react":"n8MK","./style":"KLhG"}],"GNb9":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return e.default}});var e=r(require("./WorkqueueCard"));function r(e){return e&&e.__esModule?e:{default:e}}
},{"./WorkqueueCard":"qvPr"}],"UCBy":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.WorkqueuesList=exports.Container=void 0;var e=n(require("styled-components"));function n(e){return e&&e.__esModule?e:{default:e}}var t=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},r=e.default.div(i||(i=t(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n  padding: 30px;\n"],["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n  padding: 30px;\n"])));exports.Container=r;var i,o,l=e.default.div(o||(o=t(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n"],["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n"])));exports.WorkqueuesList=l;
},{"styled-components":"tFSs"}],"pm79":[function(require,module,exports) {
module.exports="/spotting.3274459b.jpg";
},{}],"qm0m":[function(require,module,exports) {
module.exports="/moderating.2ce7716c.jpg";
},{}],"RQk8":[function(require,module,exports) {
module.exports="/formatting.a55a038c.jpg";
},{}],"fFQK":[function(require,module,exports) {
module.exports="/rooting.d810a34c.jpg";
},{}],"eeMi":[function(require,module,exports) {
module.exports="/clustering.7ee2c2c7.jpg";
},{}],"Xcpa":[function(require,module,exports) {
module.exports="/checking.56ade804.jpg";
},{}],"sGU9":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=d(require("react")),t=d(require("~app/features/workqueues/components/WorkqueueCard")),r=require("./style"),o=d(require("~app/features/workqueues/assets/img/spotting.jpg")),i=d(require("~app/features/workqueues/assets/img/moderating.jpg")),a=d(require("~app/features/workqueues/assets/img/formatting.jpg")),u=d(require("~app/features/workqueues/assets/img/rooting.jpg")),n=d(require("~app/features/workqueues/assets/img/clustering.jpg")),s=d(require("~app/features/workqueues/assets/img/checking.jpg"));function d(e){return e&&e.__esModule?e:{default:e}}var c=[{title:"Spotting",background:o.default,description:"Prioritize information for Exorde by voting on the most viral news."},{title:"Moderating",background:i.default,description:"Moderate spotted content so as to ensure its relevance to Exorde."},{title:"Formatting",background:a.default,description:"Decompose information into a series of important facts that can be checked."},{title:"Rooting",background:u.default,description:"Correlate formatted facts with other information sources on the internet."},{title:"Clustering",background:n.default,description:"Regroup facts into clusters depending on how close they are one to another."},{title:"Checking",background:s.default,description:"Make sure Exorde’s content prioritizes quality of quantity."}],p=function(){return e.default.createElement(r.Container,null,e.default.createElement(r.WorkqueuesList,null,c.map(function(r){return e.default.createElement(t.default,{background:r.background,title:r.title,description:r.description})})))},l=p;exports.default=l;
},{"react":"n8MK","~app/features/workqueues/components/WorkqueueCard":"GNb9","./style":"UCBy","~app/features/workqueues/assets/img/spotting.jpg":"pm79","~app/features/workqueues/assets/img/moderating.jpg":"qm0m","~app/features/workqueues/assets/img/formatting.jpg":"RQk8","~app/features/workqueues/assets/img/rooting.jpg":"fFQK","~app/features/workqueues/assets/img/clustering.jpg":"eeMi","~app/features/workqueues/assets/img/checking.jpg":"Xcpa"}],"RLN3":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return e.default}});var e=r(require("./Workqueues"));function r(e){return e&&e.__esModule?e:{default:e}}
},{"./Workqueues":"sGU9"}]},{},[], null)