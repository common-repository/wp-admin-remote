!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2);function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),document.addEventListener("keyup",this.redirect.bind(this))}var t,n,r;return t=e,(n=[{key:"redirect",value:function(e){if(192===e.which&&e.ctrlKey)this.showHideTerminal(e);else if("wpnb_command"===e.target.id)if(38!==e.which&&40!==e.which){if(13===e.keyCode&&""!==e.target.value){var t=e.target.value,n=this.getUrl(t);void 0!==n?(this.saveCommand(t),window.location.href=n):alert("No page found")}}else{var r=38===e.which?"up":"down";this.getCommandHistory(r)}}},{key:"showHideTerminal",value:function(){var e=0<document.getElementById("wpnbfooter").offsetWidth,t="block";e&&(t="none"),document.getElementById("wpnbfooter").style.display=t,e||document.getElementById("wpnb_command").focus()}},{key:"saveCommand",value:function(e){var t=JSON.parse(localStorage.getItem("wpadminRemoteCommands"));null===t?t=[e]:t.push(e),localStorage.setItem("wpadminRemoteCommands",JSON.stringify(t))}},{key:"getCommandHistory",value:function(e){var t=document.getElementById("wpnb_command"),n=document.getElementById("wpnb_command_sign")["data-command-count"],r=JSON.parse(localStorage.getItem("wpadminRemoteCommands"));void 0===n||""===n?n=r.length-1:"down"===e?n++:n--,r.length<=n&&(document.getElementById("wpnb_command_sign")["data-command-count"]=r.length,t.value="");var o=r[n];void 0!==o&&(document.getElementById("wpnb_command_sign")["data-command-count"]=n,t.value=o)}},{key:"getUrl",value:function(e){var t="";if(void 0!==wpadminremoteAdminJs.urls){var n=e.split(" ");if(1<n.length)t=this.getMatchUrl(n);else t=wpadminremoteAdminJs.urls[e];if(void 0!==t&&""!==t)return t}}},{key:"getMatchUrl",value:function(e){var t=e.shift(),n=wpadminremoteAdminJs.urls,r="";if(1<e.length||!0===isNaN(parseInt(e[0]))){var o=this.getSearchUrl(t);if(""!==o){r=n[o];var a=e.join("+");r=r.replace(/%s%/g,a)}}else!1===isNaN(parseInt(e[0]))&&(r=(r=n.poid).replace(/%id%/g,e[0]));return r}},{key:"getSearchUrl",value:function(e){switch(e){case"po":return"pos";case"pg":return"pgs";case"wc":return"wcos";case"wcp":return"wcps";default:return""}}}])&&o(t.prototype,n),r&&o(t,r),e}())},function(e,t,n){}]);