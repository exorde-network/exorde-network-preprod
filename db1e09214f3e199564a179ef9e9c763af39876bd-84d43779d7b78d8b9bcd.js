(self.webpackChunkexorde_landingpage=self.webpackChunkexorde_landingpage||[]).push([[994],{2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,l,u,s;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(!i(e[l],a[l]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!a.has(l.value[0]))return!1;for(s=e.entries();!(l=s.next()).done;)if(!i(l.value[1],a.get(l.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(e[l]!==a[l])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(a,u[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!e.$$typeof)&&!i(e[u[l]],a[u[l]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,o=r(7294),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function s(){l=e(u.map((function(e){return e.props}))),f.canUseDOM?t(l):r&&(l=r(l))}var f=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){u.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(f,"canUseDOM",c),f}}},5500:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(7294),o=JSON.parse('{"en":{"category_color":"white","background_color_dark":"black","text_color_dark":"grey","socials":[{"id":"twitter","link":"https://twitter.com","icon":"/img/blockchain.svg","icon_color":"white","icon_color_dark":"white"},{"id":"twitter","link":"https://twitter.com","icon":"/img/blockchain.svg","icon_color":"white","icon_color_dark":"white"}],"copyright":"Made by Exorde Labs. All rights reserved","logo":"/img/logo.svg","text_color":"white","background_color":"blue","category_color_dark":"white","categories":[{"title":"About us","items":[{"label":"Team","link":"/lol","external":false},{"label":"Team","link":"/lol","external":false},{"label":"Team","link":"/lol","external":false}]},{"title":"Legal","items":[{"label":"Team","link":"https://wikipedia.com","external":true}]}]},"fr":{"category_color":"white","background_color_dark":"black","text_color_dark":"grey","socials":[{"id":"twitter","link":"https://twitter.com","icon":"/img/blockchain.svg","icon_color":"white","icon_color_dark":"black"}],"copyright":"Développé par Exorde Labs. Tous droits réservés.","logo":"/img/logo.svg","text_color":"white","background_color":"blue","category_color_dark":"white","categories":[{"title":"A propos","items":[{"label":"Equipe","link":"/lol","external":false}]},{"title":"Legal","items":[{"label":"Team","link":"https://wikipedia.com","external":true}]}]}}'),i=function(e){var t=e.locale;return n.createElement("div",{className:"container py-8 bg-"+o[t].background_color+" dark:bg-"+o[t].background_color_dark+" text-"+o[t].text_color+" dark:text-"+o[t].text_color_dark},n.createElement("div",{className:"md:flex"},n.createElement("div",{id:"logo",className:"h-36"},n.createElement("img",{src:o[t].logo,className:"h-full mx-auto"})),n.createElement("div",{id:"categories",className:"text-center md:flex md:flex-1 md:py-0 md:pl-8 md:justify-end"},o[t].categories.map((function(e){return n.createElement("div",{id:"category",className:"py-4 md:py-0 md:px-8"},n.createElement("h3",{className:"text-2xl text-"+o[t].category_color+" dark:text-"+o[t].category_color_dark+" p-2"},e.title),e.items.map((function(e){return n.createElement("div",{className:"p-1"},n.createElement("a",{href:e.link,target:e.external?"_blank":"",rel:e.external?"noopener noreferrer":""},e.label))})))})))),n.createElement("hr",{className:"text-blue border-2 border-blue mt-8 mb-4"}),n.createElement("div",{id:"subpart",className:"md:flex md:flex-row-reverse md:justify-between"},n.createElement("div",{id:"socials",className:"flex"},o[t].socials.map((function(e){return n.createElement("a",{href:e.link,className:"h-14 w-14 p-2",target:"_blank",rel:"noopener noreferrer"},n.createElement("img",{src:e.icon,alt:e.id,className:"icon-"+e.icon_color+" dark:icon-"+e.icon_color_dark}))}))),n.createElement("p",{id:"copyright",className:"text-xs text-center pt-8"},o[t].copyright)))},a=r(5444),c=[{id:"home",label:"Home",url:""},{id:"economics",label:"Economics",url:""}],l=function(e){var t=e.open;return n.createElement("div",{id:"sidebar",className:(t?"visible":"invisible")+" bg-white absolute h-screen w-full top-0 pt-20 z-40"},n.createElement("ul",{className:"text-center text-blue-dark font-semibold text-4xl pt-20"},c.map((function(e){return n.createElement("li",{className:"p-4"},e.label)}))))},u=JSON.parse('{"en":{"text_color_dark":"grey","background_color":"white","background_color_dark":"black","text_color":"blue"},"fr":{"background_color":"white","background_color_dark":"black","text_color":"blue","text_color_dark":"grey"}}'),s=function(e){var t=e.locale,r=(0,n.useState)(!1),o=r[0],i=(r[1],(0,n.useState)(0)),c=i[0],s=i[1],f=function(){return s(window.pageYOffset)};return(0,n.useEffect)((function(){return window.addEventListener("scroll",f),function(){window.removeEventListener("scroll",f)}})),n.createElement(n.Fragment,null,n.createElement("nav",{className:"fixed top-0 py-2 h-20 w-full flex items-center z-50 "+(c>0?"shadow bg-"+u[t].background_color+" dark:bg-"+u[t].background_color_dark+" text-white":"bg-transparent text-white")},n.createElement("div",{className:"container"},n.createElement(a.Link,{to:"/",className:"h-28 flex items-center"},n.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDkuMTcgMTM1Ljk4Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2M2YzhkOTt9LmNscy0ye2ZpbGw6IzczODZiMzt9LmNscy0ze2ZpbGw6IzM1MzY3Mzt9LmNscy00e2ZpbGw6IzJkMjY1OTt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPkZpY2hpZXIgMTI8L3RpdGxlPjxnIGlkPSJDYWxxdWVfMiIgZGF0YS1uYW1lPSJDYWxxdWUgMiI+PGcgaWQ9IkNhbHF1ZV8xLTIiIGRhdGEtbmFtZT0iQ2FscXVlIDEiPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIwIDEwNy44MiA1NC41OSA5NC41MyA1NC41OSAwIDAgMTA3LjgyIi8+PHBvbHlnb24gY2xhc3M9ImNscy0yIiBwb2ludHM9IjU0LjU5IDAgNTQuNTkgOTQuNTMgMTA5LjE3IDEwNy44MiA1NC41OSAwIi8+PHBvbHlnb24gY2xhc3M9ImNscy0zIiBwb2ludHM9IjAgMTExLjM5IDU0LjU5IDEzNS45OCA1NC41OSA5OC4xMSAwIDExMS4zOSIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtNCIgcG9pbnRzPSIxMDkuMTcgMTExLjM5IDU0LjU5IDEzNS45OCA1NC41OSA5OC4xMSAxMDkuMTcgMTExLjM5Ii8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNMTAuNzQsNjMuNDNzLTExLjIsNi40MS03LDEwLjI1YzMuODksMy41NiwyMC4wNiw2Ljc1LDQ1LjY5LDAsMzcuMDgtOS42OSw0OS44LTIyLDUzLTI2Ljk0cy0xOC41NC0yLjkxLTE4LjU0LTIuOTFsLS4xOS40czE4LjM3LTEsMTYuNzMsMS40M2MtNS44Miw4Ljc2LTM1LjU0LDE5Ljc0LTQ5LjcxLDI0LjJzLTMyLjI4LDYtNDAuMDYsNC41MUMzLjA4LDczLDYuMDksNjksNy43LDY3LjI2bDMuMTktMy40NVoiLz48L2c+PC9nPjwvc3ZnPg==",alt:"exorde logo",className:"h-12"}),n.createElement("h3",{className:"font-display ml-2 text-2xl mt-4"},"EXORDE")))),n.createElement(l,{open:o}))},f=function(e){var t=e.children,r=e.locale;return n.createElement(n.Fragment,null,n.createElement("div",{className:"relative dark:bg-black"},n.createElement(s,{locale:r}),n.createElement("div",null,t),n.createElement(i,{locale:r})))}},9470:function(e,t,r){"use strict";r.d(t,{Z:function(){return ve}});var n,o,i,a,c=r(7294),l=r(5697),u=r.n(l),s=r(4839),f=r.n(s),d=r(2993),p=r.n(d),m=r(6494),g=r.n(m),h="bodyAttributes",y="htmlAttributes",b="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(w).map((function(e){return w[e]})),"charset"),v="cssText",E="href",k="http-equiv",x="innerHTML",A="itemprop",L="name",S="property",M="rel",O="src",C="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},j="defaultTitle",I="defer",_="encodeSpecialCharacters",P="onChangeClientState",D="titleTemplate",z=Object.keys(N).reduce((function(e,t){return e[N[t]]=t,e}),{}),Y=[w.NOSCRIPT,w.SCRIPT,w.STYLE],R="data-react-helmet",H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},B=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},G=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},q=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=X(e,w.TITLE),r=X(e,D);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=X(e,j);return t||n||void 0},J=function(e){return X(e,P)||function(){}},K=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Z({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},V=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],l=c.toLowerCase();-1===t.indexOf(l)||r===M&&"canonical"===e[r].toLowerCase()||l===M&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(c)||c!==x&&c!==v&&c!==A||(r=c)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][u]&&(o[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],l=g()({},n[c],o[c]);n[c]=l}return e}),[]).reverse()},X=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},$=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:r.g.requestAnimationFrame||$,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,f=e.title,d=e.titleAttributes;le(w.BODY,n),le(w.HTML,o),ce(f,d);var p={baseTag:ue(w.BASE,r),linkTags:ue(w.LINK,i),metaTags:ue(w.META,a),noscriptTags:ue(w.NOSCRIPT,c),scriptTags:ue(w.SCRIPT,u),styleTags:ue(w.STYLE,s)},m={},g={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(g[e]=p[e].oldTags)})),t&&t(),l(e,m,g)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),le(w.TITLE,t)},le=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(R),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var l=a[c],u=t[l]||"";r.getAttribute(l)!==u&&r.setAttribute(l,u),-1===o.indexOf(l)&&o.push(l);var s=i.indexOf(l);-1!==s&&i.splice(s,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);o.length===i.length?r.removeAttribute(R):r.getAttribute(R)!==a.join(",")&&r.setAttribute(R,a.join(","))}},ue=function(e,t){var r=document.head||document.querySelector(w.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===x)r.innerHTML=t.innerHTML;else if(n===v)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(R,"true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},se=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[N[r]||r]=e[r],t}),t)},de=function(e,t,r){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[R]=!0,o=fe(r,n),[c.createElement(w.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=se(r),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+q(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+q(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case h:case y:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[R]=!0,n);return Object.keys(t).forEach((function(e){var r=N[e]||e;if(r===x||r===v){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===x||e===v)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+q(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===Y.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},pe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.scriptTags,u=e.styleTags,s=e.title,f=void 0===s?"":s,d=e.titleAttributes;return{base:de(w.BASE,t,n),bodyAttributes:de(h,r,n),htmlAttributes:de(y,o,n),link:de(w.LINK,i,n),meta:de(w.META,a,n),noscript:de(w.NOSCRIPT,c,n),script:de(w.SCRIPT,l,n),style:de(w.STYLE,u,n),title:de(w.TITLE,{title:f,titleAttributes:d},n)}},me=f()((function(e){return{baseTag:Q([E,C],e),bodyAttributes:K(h,e),defer:X(e,I),encode:X(e,_),htmlAttributes:K(y,e),linkTags:V(w.LINK,[M,E],e),metaTags:V(w.META,[L,T,k,S,A],e),noscriptTags:V(w.NOSCRIPT,[x],e),onChangeClientState:J(e),scriptTags:V(w.SCRIPT,[O,x],e),styleTags:V(w.STYLE,[v],e),title:W(e),titleAttributes:K(b,e)}}),(function(e){oe&&re(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),pe)((function(){return null})),ge=(o=me,a=i=function(e){function t(){return U(this,t),G(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return Z({},n,((t={})[r.type]=[].concat(n[r.type]||[],[Z({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case w.TITLE:return Z({},o,((t={})[n.type]=a,t.titleAttributes=Z({},i),t));case w.BODY:return Z({},o,{bodyAttributes:Z({},i)});case w.HTML:return Z({},o,{htmlAttributes:Z({},i)})}return Z({},o,((r={})[n.type]=Z({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=Z({},t);return Object.keys(e).forEach((function(t){var n;r=Z({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[z[r]||r]=e[r],t}),t)}(B(o,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=B(e,["children"]),n=Z({},r);return t&&(n=this.mapChildrenToProps(t,n)),c.createElement(o,n)},F(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);ge.renderStatic=ge.rewind;var he=r(9499),ye=r(5444),be=r(5226),we=r.n(be),Te=r(863),ve=function(e){var t=e.title,r=e.description,n=e.image,o=e.locale,i=e.canonical,a=e.alternatePages,l=we().find((function(e){return e.id===o})),u=(0,he.useLocation)().pathname,s=(0,ye.useStaticQuery)(Ee).site.siteMetadata,f=s.defaultTitle,d=s.titleTemplate,p=s.defaultDescription,m=s.siteUrl,g=s.defaultImage,h=s.twitterUsername,y={title:t||f,description:r||p,image:n?""+m+n:g,url:""+m+("/"===u?"":u)};return c.createElement(ge,{title:y.title,titleTemplate:d},c.createElement("html",{lang:o}),c.createElement("meta",{name:"description",content:y.description}),c.createElement("meta",{name:"image",content:y.image}),i&&y.url&&c.createElement("link",{rel:"canonical",href:y.url}),a&&a.length>0&&a.map((function(e){var t=e.slug,r=e.locale;return c.createElement("link",{rel:"alternate",href:""+m+("/"===t?"":t),hrefLang:r})})),c.createElement("meta",{name:"og:site_name",content:"Exorde"}),y.url&&c.createElement("meta",{property:"og:url",content:y.url}),c.createElement("meta",{name:"og:type",content:"website"}),y.title&&c.createElement("meta",{property:"og:title",content:y.title}),y.description&&c.createElement("meta",{property:"og:description",content:y.description}),y.image&&c.createElement("meta",{property:"og:image",content:y.image}),y.image&&c.createElement("meta",{property:"og:image:secure_url",content:y.image}),l.ogLanguage&&c.createElement("meta",{name:"og:locale",content:l.ogLanguage}),c.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),c.createElement("meta",{name:"twitter:creator",content:o&&Te.KT.twitter[o]?Te.KT.twitter[o]:h}),c.createElement("meta",{property:"twitter:domain",content:"exorde.network"}),y.url&&c.createElement("meta",{property:"twitter:url",content:y.url}),y.title&&c.createElement("meta",{name:"twitter:title",content:y.title}),y.description&&c.createElement("meta",{name:"twitter:description",content:y.description}),y.image&&c.createElement("meta",{name:"twitter:image",content:y.image}))},Ee="3897982121"},863:function(e,t,r){"use strict";r.d(t,{KT:function(){return n},gH:function(){return o},kS:function(){return i},yQ:function(){return a}});var n={twitter:{fr:"https://twitter.com/exorde_fr",en:"https://twitter.com/exorde_en"},linkedin:"https://www.linkedin.com/company/exorde",reddit:"https://www.reddit.com/r/Exorde/",facebook:"https://www.facebook.com/Exorde-102932808116053"},o="exorde.network",i="https://newsletter.exorde.io",a="https://newsletter.exorde.network"},5226:function(e){e.exports=[{id:"en",default:!0,path:"en",locale:"en-US",dateFormat:"DD/MM/YYYY",siteLanguage:"en",ogLanguage:"en_US"},{id:"fr",path:"fr",locale:"fr-FR",dateFormat:"DD/MM/YYYY",siteLanguage:"fr",ogLanguage:"fr_FR"}]}}]);
//# sourceMappingURL=db1e09214f3e199564a179ef9e9c763af39876bd-84d43779d7b78d8b9bcd.js.map