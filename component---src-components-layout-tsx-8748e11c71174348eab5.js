(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"8+s/":function(e,t,r){"use strict";var n,a=r("q1tI"),o=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function s(){l=e(u.map((function(e){return e.props}))),f.canUseDOM?t(l):r&&(l=r(l))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){u.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},i.render=function(){return o.createElement(n,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(f,"canUseDOM",c),f}}},"9Dj+":function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),o=r("A2+M"),i=r("ma3e"),c={twitter:{fr:"https://twitter.com/exorde_fr",en:"https://twitter.com/exorde_en"},linkedin:"https://www.linkedin.com/company/exorde",reddit:"https://www.reddit.com/r/Exorde/",facebook:"https://www.facebook.com/Exorde-102932808116053"},l=r("kLJV"),u=r.n(l),s=function(e){var t=e.brand;return a.a.createElement(t,{className:"text-6xl"})},f=function(e){var t=e.locale;return a.a.createElement("div",{className:"bg-black-dark text-white p-8"},a.a.createElement("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 text-center md:text-left"},a.a.createElement("div",{className:"flex flex-col items-center "},a.a.createElement("img",{src:u.a,className:"max-h-24"}),a.a.createElement("h3",{className:"font-brand pt-2 text-white-off"},"EXORDE")),a.a.createElement("div",null,a.a.createElement("h3",null,"Contact"),a.a.createElement("ul",{className:"pt-5"},a.a.createElement("li",null,a.a.createElement("a",{href:"mailto:exordedao@gmail.com"},"contact@exorde.network")))),a.a.createElement("div",null,a.a.createElement("h3",null,"Legal"),a.a.createElement("ul",{className:"pt-5"},a.a.createElement("li",null,"Terms"),a.a.createElement("li",null,"Privacy"),a.a.createElement("li",null,"Cookies preferences"))),a.a.createElement("div",null,a.a.createElement("h3",null,"Socials"),a.a.createElement("ul",{className:"pt-5 flex flex-wrap justify-center md:justify-start md:w-32"},a.a.createElement("li",null,a.a.createElement("a",{href:c.twitter[t],target:"_blank",rel:"noreferrer"},a.a.createElement(s,{brand:i.h}))),a.a.createElement("li",null,a.a.createElement("a",{href:c.facebook,target:"_blank",rel:"noreferrer"},a.a.createElement(s,{brand:i.c}))),a.a.createElement("li",null,a.a.createElement("a",{href:c.linkedin,target:"_blank",rel:"noreferrer"},a.a.createElement(s,{brand:i.e}))),a.a.createElement("li",null,a.a.createElement("a",{href:c.reddit,target:"_blank",rel:"noreferrer"},a.a.createElement(s,{brand:i.f})))))),a.a.createElement("p",{className:"pt-10 text-center text-xs"},"© Exorde Labs - ",(new Date).getFullYear()))},p=r("Wbzz"),m=[{id:"home",label:"Home",url:""},{id:"economics",label:"Economics",url:""}],d=function(e){var t=e.open;return a.a.createElement("div",{id:"sidebar",className:(t?"visible":"invisible")+" bg-white absolute h-screen w-full top-0 pt-20 z-40"},a.a.createElement("ul",{className:"text-center text-blue-dark font-semibold text-4xl pt-20"},m.map((function(e){return a.a.createElement("li",{className:"p-4"},e.label)}))))},y=function(){var e=Object(n.useState)(!1),t=e[0],r=(e[1],Object(n.useState)(0)),o=r[0],i=r[1],c=function(){return i(window.pageYOffset)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",c),function(){window.removeEventListener("scroll",c)}})),a.a.createElement(a.a.Fragment,null,a.a.createElement("nav",{className:"fixed pr-6 pl-6 pt-2 pb-2 h-20 w-full flex items-center z-50  "+(o>0?"shadow bg-white":"bg-transparent")},a.a.createElement(p.Link,{to:"/",className:"h-full min-w-max mr-auto flex items-end"},a.a.createElement("img",{src:u.a,alt:"exorde logo",className:"h-full"}),a.a.createElement("h3",{className:"font-brand text-blue ml-2 pb-1"},"EXORDE"))),a.a.createElement(d,{open:t}))},b=r("qhky"),h=r("YwZP"),g=function(e){var t=e.title,r=e.description,n=e.image,o=e.locale,i=Object(h.useLocation)().pathname,l=Object(p.useStaticQuery)(w).site.siteMetadata,u=l.defaultTitle,s=l.titleTemplate,f=l.defaultDescription,m=l.siteUrl,d=l.defaultImage,y=l.twitterUsername,g={title:t||u,description:r||f,image:""+m+(n||d),url:""+m+i};return a.a.createElement(b.a,{title:g.title,titleTemplate:s},a.a.createElement("meta",{name:"description",content:g.description}),a.a.createElement("meta",{name:"image",content:g.image}),g.url&&a.a.createElement("meta",{property:"og:url",content:g.url}),g.title&&a.a.createElement("meta",{property:"og:title",content:g.title}),g.description&&a.a.createElement("meta",{property:"og:description",content:g.description}),g.image&&a.a.createElement("meta",{property:"og:image",content:g.image}),a.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.a.createElement("meta",{name:"twitter:creator",content:o&&c.twitter[o]?c.twitter[o]:y}),g.title&&a.a.createElement("meta",{name:"twitter:title",content:g.title}),g.description&&a.a.createElement("meta",{name:"twitter:description",content:g.description}),g.image&&a.a.createElement("meta",{name:"twitter:image",content:g.image}))},w="4202924991";t.default=function(e){var t=e.data,r=e.pageContext.locale;return a.a.createElement("div",{className:"relative overflow-hidden"},a.a.createElement(g,{title:t.mdx.frontmatter.metadata.title,description:t.mdx.frontmatter.metadata.description,image:t.mdx.frontmatter.metadata.image.publicURL,locale:r}),a.a.createElement(y,null),a.a.createElement(o.MDXRenderer,{frontmatter:t.mdx.frontmatter},t.mdx.body),a.a.createElement(f,{locale:r}))}},"A2+M":function(e,t,r){var n=r("X8hv");e.exports={MDXRenderer:n}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,r){var n=r("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},RIqP:function(e,t,r){var n=r("Ijbi"),a=r("EbDI"),o=r("ZhPi"),i=r("Bnag");e.exports=function(e){return n(e)||a(e)||o(e)||i()}},SksO:function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},X8hv:function(e,t,r){var n=r("sXyB"),a=r("RIqP"),o=r("lSNA"),i=r("8OQS");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=r("q1tI"),s=r("7ljp").mdx,f=r("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,o=i(e,["scope","children"]),c=f(t),p=u.useMemo((function(){if(!r)return null;var e=l({React:u,mdx:s},c),t=Object.keys(e),o=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(a(t),[""+r])).apply(void 0,[{}].concat(a(o)))}),[r,t]);return u.createElement(p,l({},o))}},ZhPi:function(e,t,r){var n=r("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},bmMU:function(e,t){var r="undefined"!=typeof Element,n="function"==typeof Map,a="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var c,l,u,s;if(Array.isArray(t)){if((c=t.length)!=i.length)return!1;for(l=c;0!=l--;)if(!e(t[l],i[l]))return!1;return!0}if(n&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(s=t.entries();!(l=s.next()).done;)if(!i.has(l.value[0]))return!1;for(s=t.entries();!(l=s.next()).done;)if(!e(l.value[1],i.get(l.value[0])))return!1;return!0}if(a&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(s=t.entries();!(l=s.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((c=t.length)!=i.length)return!1;for(l=c;0!=l--;)if(t[l]!==i[l])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((c=(u=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,u[l]))return!1;if(r&&t instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!t.$$typeof)&&!e(t[u[l]],i[u[l]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},kLJV:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDkuMTcgMTM1Ljk4Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2M2YzhkOTt9LmNscy0ye2ZpbGw6IzczODZiMzt9LmNscy0ze2ZpbGw6IzM1MzY3Mzt9LmNscy00e2ZpbGw6IzJkMjY1OTt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPkZpY2hpZXIgMTI8L3RpdGxlPjxnIGlkPSJDYWxxdWVfMiIgZGF0YS1uYW1lPSJDYWxxdWUgMiI+PGcgaWQ9IkNhbHF1ZV8xLTIiIGRhdGEtbmFtZT0iQ2FscXVlIDEiPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIwIDEwNy44MiA1NC41OSA5NC41MyA1NC41OSAwIDAgMTA3LjgyIi8+PHBvbHlnb24gY2xhc3M9ImNscy0yIiBwb2ludHM9IjU0LjU5IDAgNTQuNTkgOTQuNTMgMTA5LjE3IDEwNy44MiA1NC41OSAwIi8+PHBvbHlnb24gY2xhc3M9ImNscy0zIiBwb2ludHM9IjAgMTExLjM5IDU0LjU5IDEzNS45OCA1NC41OSA5OC4xMSAwIDExMS4zOSIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtNCIgcG9pbnRzPSIxMDkuMTcgMTExLjM5IDU0LjU5IDEzNS45OCA1NC41OSA5OC4xMSAxMDkuMTcgMTExLjM5Ii8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNMTAuNzQsNjMuNDNzLTExLjIsNi40MS03LDEwLjI1YzMuODksMy41NiwyMC4wNiw2Ljc1LDQ1LjY5LDAsMzcuMDgtOS42OSw0OS44LTIyLDUzLTI2Ljk0cy0xOC41NC0yLjkxLTE4LjU0LTIuOTFsLS4xOS40czE4LjM3LTEsMTYuNzMsMS40M2MtNS44Miw4Ljc2LTM1LjU0LDE5Ljc0LTQ5LjcxLDI0LjJzLTMyLjI4LDYtNDAuMDYsNC41MUMzLjA4LDczLDYuMDksNjksNy43LDY3LjI2bDMuMTktMy40NVoiLz48L2c+PC9nPjwvc3ZnPg=="},lSNA:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},qhky:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return ye}));r("E9XD");var n,a,o,i,c=r("17x9"),l=r.n(c),u=r("8+s/"),s=r.n(u),f=r("bmMU"),p=r.n(f),m=r("q1tI"),d=r.n(m),y=r("YVoz"),b=r.n(y),h="bodyAttributes",g="htmlAttributes",w="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(v).map((function(e){return v[e]})),"charset"),T="cssText",O="href",x="http-equiv",j="innerHTML",A="itemprop",S="name",M="property",L="rel",C="src",I="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},k="defaultTitle",P="defer",D="encodeSpecialCharacters",z="onChangeClientState",R="titleTemplate",Y=Object.keys(N).reduce((function(e,t){return e[N[t]]=t,e}),{}),H=[v.NOSCRIPT,v.SCRIPT,v.STYLE],_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},B=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},q=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},F=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},G=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},X=function(e){var t=K(e,v.TITLE),r=K(e,R);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=K(e,k);return t||n||void 0},W=function(e){return K(e,z)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Z({},e,t)}),{})},V=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},Q=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+_(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],l=c.toLowerCase();-1===t.indexOf(l)||r===L&&"canonical"===e[r].toLowerCase()||l===L&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(c)||c!==j&&c!==T&&c!==A||(r=c)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][u]&&(a[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],l=b()({},n[c],a[c]);n[c]=l}return e}),[]).reverse()},K=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},$=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;le(v.BODY,n),le(v.HTML,a),ce(f,p);var m={baseTag:ue(v.BASE,r),linkTags:ue(v.LINK,o),metaTags:ue(v.META,i),noscriptTags:ue(v.NOSCRIPT,c),scriptTags:ue(v.SCRIPT,u),styleTags:ue(v.STYLE,s)},d={},y={};Object.keys(m).forEach((function(e){var t=m[e],r=t.newTags,n=t.oldTags;r.length&&(d[e]=r),n.length&&(y[e]=m[e].oldTags)})),t&&t(),l(e,d,y)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),le(v.TITLE,t)},le=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],u=t[l]||"";r.getAttribute(l)!==u&&r.setAttribute(l,u),-1===a.indexOf(l)&&a.push(l);var s=o.indexOf(l);-1!==s&&o.splice(s,1)}for(var f=o.length-1;f>=0;f--)r.removeAttribute(o[f]);a.length===o.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==i.join(",")&&r.setAttribute("data-react-helmet",i.join(","))}},ue=function(e,t){var r=document.head||document.querySelector(v.HEAD),n=r.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===j)r.innerHTML=t.innerHTML;else if(n===T)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,r.isEqualNode(e)}))?a.splice(i,1):o.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:o}},se=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[N[r]||r]=e[r],t}),t)},pe=function(e,t,r){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})["data-react-helmet"]=!0,a=fe(r,n),[d.a.createElement(v.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=se(r),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+G(o,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+G(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case h:case g:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(e){var r=N[e]||e;if(r===j||r===T){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),d.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===j||e===T)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+G(n[t],r)+'"';return e?e+" "+a:a}),""),o=n.innerHTML||n.cssText||"",i=-1===H.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}},me=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,u=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:pe(v.BASE,t,n),bodyAttributes:pe(h,r,n),htmlAttributes:pe(g,a,n),link:pe(v.LINK,o,n),meta:pe(v.META,i,n),noscript:pe(v.NOSCRIPT,c,n),script:pe(v.SCRIPT,l,n),style:pe(v.STYLE,u,n),title:pe(v.TITLE,{title:f,titleAttributes:p},n)}},de=s()((function(e){return{baseTag:V([O,I],e),bodyAttributes:J(h,e),defer:K(e,P),encode:K(e,D),htmlAttributes:J(g,e),linkTags:Q(v.LINK,[L,O],e),metaTags:Q(v.META,[S,E,x,M,A],e),noscriptTags:Q(v.NOSCRIPT,[j],e),onChangeClientState:W(e),scriptTags:Q(v.SCRIPT,[C,j],e),styleTags:Q(v.STYLE,[T],e),title:X(e),titleAttributes:J(w,e)}}),(function(e){ae&&re(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),me)((function(){return null})),ye=(a=de,i=o=function(e){function t(){return U(this,t),F(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return Z({},n,((t={})[r.type]=[].concat(n[r.type]||[],[Z({},a,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(n.type){case v.TITLE:return Z({},a,((t={})[n.type]=i,t.titleAttributes=Z({},o),t));case v.BODY:return Z({},a,{bodyAttributes:Z({},o)});case v.HTML:return Z({},a,{htmlAttributes:Z({},o)})}return Z({},a,((r={})[n.type]=Z({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=Z({},t);return Object.keys(e).forEach((function(t){var n;r=Z({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return d.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[Y[r]||r]=e[r],t}),t)}(q(a,["children"]));switch(r.warnOnInvalidChildren(e,o),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=q(e,["children"]),n=Z({},r);return t&&(n=this.mapChildrenToProps(t,n)),d.a.createElement(a,n)},B(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(d.a.Component),o.propTypes={base:l.a.object,bodyAttributes:l.a.object,children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),defaultTitle:l.a.string,defer:l.a.bool,encodeSpecialCharacters:l.a.bool,htmlAttributes:l.a.object,link:l.a.arrayOf(l.a.object),meta:l.a.arrayOf(l.a.object),noscript:l.a.arrayOf(l.a.object),onChangeClientState:l.a.func,script:l.a.arrayOf(l.a.object),style:l.a.arrayOf(l.a.object),title:l.a.string,titleAttributes:l.a.object,titleTemplate:l.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=me({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);ye.renderStatic=ye.rewind}).call(this,r("yLpj"))},sXyB:function(e,t,r){var n=r("SksO"),a=r("b48C");function o(t,r,i){return a()?e.exports=o=Reflect.construct:e.exports=o=function(e,t,r){var a=[null];a.push.apply(a,t);var o=new(Function.bind.apply(e,a));return r&&n(o,r.prototype),o},o.apply(null,arguments)}e.exports=o}}]);
//# sourceMappingURL=component---src-components-layout-tsx-8748e11c71174348eab5.js.map