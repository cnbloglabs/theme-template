!function(){"use strict";var o=function(o){return"function"==typeof o};Object.assign;function t(o,t){void 0===t&&(t="#ffb3cc"),console.log("%c  "+o,"color: "+t+"; font-weight: bold;")}var e=window.opts||window.acOptions||{};function n(o){return function(o,t,e){void 0===o&&(o={}),void 0===t&&(t={}),void 0===e&&(e={});var n=Object.assign({},o,e);return Object.assign({},n,t)}({name:"reacg",color:"#FFB3CC",title:"",avatar:"https://api.uomg.com/api/rand.avatar",favicon:"",contentSize:"mid",headerBackground:"https://api.uomg.com/api/rand.avatar",log:!0},e.theme,o)}var r=function(){var o;(o=$("#loading")).length&&o.fadeOut(300),function(){if(n().log)for(var o=0,e=[{str:"# # # # # # # # # # # # # # # # # # # # # # # #",color:"#1e90ff"},{str:"# 🔮 Awescnb: awesome cnblog!",color:"#eb4d4b"},{str:"# 👌 使用 awescnb 安装、构建、分享皮肤",color:"#a29bfe"},{str:"# 📑 文档:https://www.yuque.com/awescnb",color:"#fd79a8"},{str:"# 🐧 Group:541802647(活跃)",color:"#55efc4"},{str:"# 📌 Gitee:https://gitee.com/guangzan/awescnb",color:"#7ed6df"},{str:"# 🌏 GitHub:https://github.com/awescnb/awescnb",color:"#f368e0"},{str:"# # # # # # # # # # # # # # # # # # # # # # # #",color:"#1e90ff"}];o<e.length;o++){var r=e[o];t(r.str,r.color)}}()};var a;(r(),{createTheme:function(){var t={theme:null,config:{globalProperties:{}},plugins:[],modules:{}},e=new Set,n=t.theme={_context:t,version:"3.0",get config(){return t.config},set config(o){},use:function(t){for(var r=arguments.length,a=new Array(r>1?r-1:0),c=1;c<r;c++)a[c-1]=arguments[c];return e.has(t)||(t&&o(t.install)?(e.add(t),t.install.apply(t,[n].concat(a))):o(t)&&(e.add(t),t.apply(void 0,[n].concat(a)))),n},module:function(){}};return n}}).createTheme();""!==(a=n().headerBackground)&&$("#header").css({"background-image":"url("+a+")"})}();