"use strict";(self.webpackChunkyouniaogu=self.webpackChunkyouniaogu||[]).push([[1187],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7853:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={title:"\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u7ecf\u9a8c\u5206\u4eab",authors:"youniaogu",date:new Date("2021-09-03T00:00:00.000Z"),tags:[]},i=void 0,l={permalink:"/blog/2021/09/03/experience_of_build_wechat_miniapp",editUrl:"https://github.com/youniaogu/youniaogu.github.io/blog/2021-09-03-experience_of_build_wechat_miniapp.md",source:"@site/blog/2021-09-03-experience_of_build_wechat_miniapp.md",title:"\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u7ecf\u9a8c\u5206\u4eab",description:"\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u7ecf\u9a8c\u5206\u4eab",date:"2021-09-03T00:00:00.000Z",formattedDate:"2021\u5e749\u67083\u65e5",tags:[],readingTime:6.29,hasTruncateMarker:!1,authors:[{name:"youniaogu",title:"\u4f5c\u8005",url:"https://github.com/youniaogu",email:"youniaogu2023@gmail.com",imageURL:"https://github.com/youniaogu.png",key:"youniaogu"}],frontMatter:{title:"\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u7ecf\u9a8c\u5206\u4eab",authors:"youniaogu",date:"2021-09-03T00:00:00.000Z",tags:[]},prevItem:{title:"\u5982\u4f55\u5904\u7406 package-lock.json \u4e0e yarn.lock",permalink:"/blog/2022/03/09/how_to_handle_lock_file"},nextItem:{title:"\u66f4\u597d\u7684\u7ebf\u6027\u6e10\u53d8\u80cc\u666f",permalink:"/blog/2021/06/25/better_linear_gradient_background"}},p={authorsImageUrls:[void 0]},u=[{value:"\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u7ecf\u9a8c\u5206\u4eab",id:"\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u7ecf\u9a8c\u5206\u4eab",level:2},{value:"1. \u5c0f\u7a0b\u5e8f\u7684\u7f3a\u70b9",id:"1-\u5c0f\u7a0b\u5e8f\u7684\u7f3a\u70b9",level:3},{value:"1.1 <code>npm</code>\u652f\u6301\u4e0d\u5b8c\u5168",id:"11-npm\u652f\u6301\u4e0d\u5b8c\u5168",level:4},{value:"1.2 \u7f3a\u5c11\u72b6\u6001\u7ba1\u7406",id:"12-\u7f3a\u5c11\u72b6\u6001\u7ba1\u7406",level:4},{value:"1.3 \u7f3a\u5c11\u73af\u5883\u53d8\u91cf",id:"13-\u7f3a\u5c11\u73af\u5883\u53d8\u91cf",level:4},{value:"1.4 \u4e0d\u4f1a\u5904\u7406<code>cookies</code>",id:"14-\u4e0d\u4f1a\u5904\u7406cookies",level:4},{value:"1.5 \u5165\u53e3\u5f88\u591a\uff0c\u7f3a\u5c11\u63a7\u5236\u5c42",id:"15-\u5165\u53e3\u5f88\u591a\u7f3a\u5c11\u63a7\u5236\u5c42",level:4},{value:"2. \u5982\u4f55\u5e94\u5bf9",id:"2-\u5982\u4f55\u5e94\u5bf9",level:3},{value:"2.1 \u81ea\u5df1\u6253\u5305",id:"21-\u81ea\u5df1\u6253\u5305",level:4},{value:"2.2 \u5f15\u5165 redux",id:"22-\u5f15\u5165-redux",level:4},{value:"2.3 \u81ea\u5b9a\u4e49\u73af\u5883\u53d8\u91cf",id:"23-\u81ea\u5b9a\u4e49\u73af\u5883\u53d8\u91cf",level:4},{value:"2.4 \u5c01\u88c5\u8bf7\u6c42",id:"24-\u5c01\u88c5\u8bf7\u6c42",level:4},{value:"2.5 \u7ef4\u6301\u751f\u547d\u5468\u671f",id:"25-\u7ef4\u6301\u751f\u547d\u5468\u671f",level:4},{value:"3. \u6700\u540e",id:"3-\u6700\u540e",level:3},{value:"3.1 \u5173\u4e8e eslint",id:"31-\u5173\u4e8e-eslint",level:4},{value:"3.2 canvas \u7ed8\u5236",id:"32-canvas-\u7ed8\u5236",level:4},{value:"3.3 js \u652f\u6301",id:"33-js-\u652f\u6301",level:4}],s={toc:u},c="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,a.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u7ecf\u9a8c\u5206\u4eab"},"\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u7ecf\u9a8c\u5206\u4eab"),(0,r.kt)("p",null,"\u8fd9\u91cc\u4e3b\u8981\u662f\u5206\u4eab\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u65f6\u9047\u5230\u7684\u95ee\u9898\uff0c\u4ee5\u53ca\u89e3\u51b3\u65b9\u6848\u3002"),(0,r.kt)("h3",{id:"1-\u5c0f\u7a0b\u5e8f\u7684\u7f3a\u70b9"},"1. \u5c0f\u7a0b\u5e8f\u7684\u7f3a\u70b9"),(0,r.kt)("h4",{id:"11-npm\u652f\u6301\u4e0d\u5b8c\u5168"},"1.1 ",(0,r.kt)("inlineCode",{parentName:"h4"},"npm"),"\u652f\u6301\u4e0d\u5b8c\u5168"),(0,r.kt)("p",null,"\u5c0f\u7a0b\u5e8f\u53ea\u652f\u6301\u7eaf js \u5e93\uff0c\u800c\u4e14\u5fc5\u987b\u6709\u4e3b\u5165\u53e3\uff08\u9700\u8981\u6307\u5b9a main\uff09\uff0c",(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html"},"\u76f8\u5173\u6587\u6863"),"\u3002"),(0,r.kt)("p",null,"\u53ea\u8981\u7528\u5230 babel \u7f16\u8bd1\u7684\u5e93\uff0c\u90fd\u6ca1\u529e\u6cd5\u76f4\u63a5\u5f15\u5165\u5230\u5c0f\u7a0b\u5e8f\u91cc\uff0c\u5fc5\u987b\u624b\u52a8\u5f15\u5165\u6784\u5efa\u540e\u7684\u5305\u624d\u884c\uff0c\u4f46\u8fd9\u6837\u5c31\u5931\u53bb npm \u7248\u672c\u7ba1\u7406\u7684\u610f\u4e49\u3002"),(0,r.kt)("h4",{id:"12-\u7f3a\u5c11\u72b6\u6001\u7ba1\u7406"},"1.2 \u7f3a\u5c11\u72b6\u6001\u7ba1\u7406"),(0,r.kt)("p",null,"\u8fd9\u91cc\u662f\u6307\u7f3a\u5c11\u7c7b\u4f3c\u4e8e redux\u3001vuex\u3001mobx \u7684\u80fd\u529b\uff0c\u72b6\u6001\u7ba1\u7406\u662f\u5f00\u53d1\u5927\u578b\u9879\u76ee\u5fc5\u4e0d\u53ef\u5c11\u7684\u9700\u6c42\u3002"),(0,r.kt)("p",null,"\u5c0f\u7a0b\u5e8f\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorage.html"},"storage")," \u4e0e localStorage \u7c7b\u4f3c\uff0c\u6ca1\u6709\u54cd\u5e94\u53d8\u5316\u7684\u80fd\u529b\u3002"),(0,r.kt)("h4",{id:"13-\u7f3a\u5c11\u73af\u5883\u53d8\u91cf"},"1.3 \u7f3a\u5c11\u73af\u5883\u53d8\u91cf"),(0,r.kt)("p",null,"\u73af\u5883\u53d8\u91cf\u4e3b\u8981\u662f\u7528\u6765\u533a\u5206\u5f00\u53d1\u3001\u6d4b\u8bd5\u3001\u6b63\u5f0f\u8fd9\u4e09\u79cd\uff0c\u4e5f\u53ef\u4ee5\u51b3\u5b9a\u4e00\u4e9b\u5e93\u662f\u5426\u5bfc\u5165\u6216\u4f7f\u7528\u3002"),(0,r.kt)("p",null,"\u5c0f\u7a0b\u5e8f\u53ea\u80fd\u533a\u5206\u5f00\u53d1\u7248\u3001\u4f53\u9a8c\u7248\u3001\u6b63\u5f0f\u7248\uff0c\u4f46\u628a\u5b83\u4eec\u5bf9\u6807\u5f00\u53d1\u3001\u6d4b\u8bd5\u3001\u6b63\u5f0f\u4e0d\u592a\u597d\uff0c\u56e0\u4e3a\u6211\u4eec\u53ef\u80fd\u4f1a\u5728\u5f00\u53d1\u8005\u5de5\u5177\u91cc\u8c03\u8bd5\u5f00\u53d1\u3001\u6d4b\u8bd5\u3001\u6b63\u5f0f\u4e09\u79cd\u73af\u5883\u3002"),(0,r.kt)("h4",{id:"14-\u4e0d\u4f1a\u5904\u7406cookies"},"1.4 \u4e0d\u4f1a\u5904\u7406",(0,r.kt)("inlineCode",{parentName:"h4"},"cookies")),(0,r.kt)("p",null,"\u5c0f\u7a0b\u5e8f\u8bf7\u6c42\u65f6\u4e0d\u4f1a\u81ea\u52a8\u5e26\u4e0a cookies\uff0c\u8fd4\u56de\u7684 reponse \u91cc\u867d\u7136\u6709 cookies\uff0c\u4f46\u4e0d\u4f1a\u81ea\u52a8\u50a8\u5b58\u3002"),(0,r.kt)("h4",{id:"15-\u5165\u53e3\u5f88\u591a\u7f3a\u5c11\u63a7\u5236\u5c42"},"1.5 \u5165\u53e3\u5f88\u591a\uff0c\u7f3a\u5c11\u63a7\u5236\u5c42"),(0,r.kt)("p",null,"\u5c0f\u7a0b\u5e8f\u542f\u52a8\u65f6\uff0c",(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html"},"App")," \u7684\u751f\u547d\u5468\u671f\u867d\u7136\u7b2c\u4e00\u4e2a\u6267\u884c\uff0c\u4f46\u5b83\u4e0d\u80fd\u963b\u585e\u5176\u4ed6\u9875\u9762\uff0c\u8fd9\u610f\u5473\u5b83\u4e0d\u80fd\u4f5c\u4e3a\u9879\u76ee\u91cc\u7684\u63a7\u5236\u5c42\uff08\u6bd4\u5982\uff1a\u767b\u5f55\u5b8c\u6210\u524d\u663e\u793a loading\uff0c\u4e0d\u663e\u793a\u9875\u9762\uff09\u3002"),(0,r.kt)("p",null,"\u800c\u4e14\u5c0f\u7a0b\u5e8f\u7684\u8def\u7531\u662f\u5e73\u94fa\u5f00\u6765\u7684\uff0c\u5982\u679c\u8981\u505a\u767b\u5f55\u62e6\u622a\uff0c\u6709\u591a\u5c11\u4e2a\u8def\u7531\uff0c\u5c31\u8981\u5199\u591a\u5c11\u4e2a\u62e6\u622a\u3002"),(0,r.kt)("h3",{id:"2-\u5982\u4f55\u5e94\u5bf9"},"2. \u5982\u4f55\u5e94\u5bf9"),(0,r.kt)("h4",{id:"21-\u81ea\u5df1\u6253\u5305"},"2.1 \u81ea\u5df1\u6253\u5305"),(0,r.kt)("p",null,"\u65e2\u7136\u8981\u4fdd\u7559\u7248\u672c\u7ba1\u7406\uff0c\u53c8\u8981\u6784\u5efa\uff0c\u90a3\u6211\u4eec\u81ea\u5df1\u6253\u5305\u8f93\u51fa\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"miniprogram_npm"),"\u4e0d\u5c31\u53ef\u4ee5\u4e86\u3002"),(0,r.kt)("p",null,"\u56e0\u4e3a\u53ea\u7528\u8f93\u51fa\u7eaf js\uff0c\u6240\u4ee5\u6211\u4eec\u9009\u7528 rollup \u6765\u6253\u5305\u3002"),(0,r.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0c\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"yarn workspaces"),"\u6765\u7ba1\u7406\u672c\u5730\u4f9d\u8d56\uff08\u8fd9\u91cc\u6211\u4eec\u76f4\u63a5\u6253\u5305\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"miniprogram_npm"),"\uff0c\u8fd9\u70b9\u53ef\u6709\u53ef\u65e0\u3002\u4e3b\u8981\u662f\u65b9\u4fbf\u6307\u4ee4\u63a7\u5236\uff0c\u4ee5\u53ca\u9879\u76ee\u5206\u7c7b\uff09\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e00\u6b65\u5341\u5206\u91cd\u8981\uff0c\u662f\u4e0b\u9762\u4e24\u4e2a\u5e94\u5bf9\u7684\u524d\u63d0\uff01"),(0,r.kt)("h4",{id:"22-\u5f15\u5165-redux"},"2.2 \u5f15\u5165 redux"),(0,r.kt)("p",null,"\u5728\u8bb2\u4e4b\u524d\uff0c\u6211\u4eec\u5148\u8981\u77e5\u9053",(0,r.kt)("strong",{parentName:"p"},"Component \u662f\u53ef\u4ee5\u4f5c\u4e3a Page \u4f7f\u7528\u7684"),"\uff0c\u800c\u4e14",(0,r.kt)("strong",{parentName:"p"},"Component \u7684\u529f\u80fd\u6bd4 Page \u66f4\u4e3a\u5f3a\u5927"),"\uff08Page \u5c5e\u4e8e\u9057\u7559\u4ea7\u7269\uff0c\u5f88\u9e21\u808b\uff09\u3002"),(0,r.kt)("p",null,"\u5f15\u5165 redux \u5c31\u9700\u8981 connect\uff0c\u5c0f\u7a0b\u5e8f\u6ca1\u6709\u73b0\u6210\uff0c\u6240\u4ee5\u6211\u4eec\u5f97\u81ea\u884c\u5c01\u88c5\u3002\u6709\u4e24\u79cd\u601d\u8def\uff0c\u4e00\u4e2a\u662f",(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/reference/api/Behavior.html"},"behaviors"),"\uff0c\u53e6\u4e00\u4e2a\u662f",(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/component.html"},"Component"),"\uff0c\u539f\u7406\u90fd\u662f\u52ab\u6301\u751f\u547d\u5468\u671f\uff0c\u6ce8\u5165 redux \u8ba2\u9605\u4e8b\u4ef6\u3002"),(0,r.kt)("img",{src:n(6720).Z,width:"800"}),(0,r.kt)("p",null,"\u56e0\u4e3a\u6211\u4eec\u7528\u5230",(0,r.kt)("a",{parentName:"p",href:"https://redux-saga.js.org/docs/introduction/GettingStarted"},"redux-saga"),"\u505a\u5f02\u6b65\u5904\u7406\uff0c\u91cc\u9762\u5e26\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"generator function"),"\uff0c\u6240\u4ee5\u6253\u5305\u65f6\u9700\u8981\u5f15\u5165",(0,r.kt)("inlineCode",{parentName:"p"},"@babel/plugin-transform-runtime"),"\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"babel7 \u91cc\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"@babel/env"),"\u53ea\u63d0\u4f9b\u8bed\u6cd5\u652f\u6301\uff0capi \u5219\u662f\u7531",(0,r.kt)("inlineCode",{parentName:"p"},"runtime"),"\u63d0\u4f9b")),(0,r.kt)("p",null,"\u6ce8\u610f\uff1aredux \u91cc\u6709\u4f7f\u7528\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"process.env.NODE_ENV"),"\u73af\u5883\u53d8\u91cf\uff0c\u8fd9\u4e2a\u5728\u4e0b\u9762\u4f1a\u4e00\u5e76\u89e3\u51b3\u3002"),(0,r.kt)("h4",{id:"23-\u81ea\u5b9a\u4e49\u73af\u5883\u53d8\u91cf"},"2.3 \u81ea\u5b9a\u4e49\u73af\u5883\u53d8\u91cf"),(0,r.kt)("p",null,"\u6253\u5305\u811a\u672c\u4e0a\u6302\u8f7d\u73af\u5883\u53d8\u91cf\uff0crollup \u6253\u5305\u4e2d\u7edf\u4e00\u66ff\u6362\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'//package.json\n"scripts": {\n  "start": "RUNNER_ENV=dev runner-scripts",\n  "build": "RUNNER_ENV=prod runner-scripts"\n},\n\n//rollup.config.js\nreplace({\n  \'process.env.NODE_ENV\': JSON.stringify(env),\n  preventAssignment: true,\n}),\n')),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u662f\u73af\u5883\u533a\u5206\uff0c\u5efa\u8bae\u6253\u5305\u73af\u5883\u4e0e",(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/account-info/wx.getAccountInfoSync.html"},"wx.getAccountInfoSync"),"\u7ed3\u5408\u4f7f\u7528\uff0c\u4e0b\u9762\u662f\u6211\u9879\u76ee\u91cc\u7684\u73af\u5883\u533a\u5206\u3002"),(0,r.kt)("img",{src:n(3945).Z,width:"400"}),(0,r.kt)("p",null,"\u8fd9\u6837\u5199\u7684\u597d\u5904\u6709\u4e24\u70b9\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u7075\u6d3b\uff0c\u672c\u5730\u53ef\u4ee5\u8c03\u8bd5\u4efb\u610f\u73af\u5883"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528\u6d4b\u8bd5\u73af\u5883\u63d0\u5ba1\uff0c\u53d1\u5e03\u540e\u81ea\u52a8\u8f6c\u53d8\u6210\u6b63\u5f0f\u73af\u5883\uff0c\u80fd\u4e0e\u540e\u7aef\u540c\u65f6\u4e0a\u7ebf")),(0,r.kt)("h4",{id:"24-\u5c01\u88c5\u8bf7\u6c42"},"2.4 \u5c01\u88c5\u8bf7\u6c42"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u597d\u8bf4\uff0c\u5c0f\u7a0b\u5e8f storage \u53ef\u4ee5\u6301\u7eed\u5316\u50a8\u5b58\uff0c\u4ece response \u7684 header \u91cc\u53d6\u51fa",(0,r.kt)("inlineCode",{parentName:"p"},"Set-Cookie"),"\uff0c\u518d\u653e\u8fdb storage \u91cc\u8fd9\u6837\u5c31\u5b9e\u73b0 cookies \u7684\u5b58\u50a8\u3002"),(0,r.kt)("p",null,"\u5728\u8bf7\u6c42\u4e4b\u524d\uff0c\u4ece storage \u83b7\u53d6 cookies\uff0c\u5e76\u5e26\u5728 header \u7684 Cookies \u4e0a\u5373\u53ef\u3002"),(0,r.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u6b63\u5e38 cookies \u4f1a\u6709",(0,r.kt)("strong",{parentName:"p"},"\u8fc7\u671f\u65f6\u95f4"),"\uff0c\u5b58\u50a8\u65f6\u9700\u8981\u628a expires \u548c max-age \u4e00\u8d77\u5b58\u8fdb\u53bb\uff0c\u83b7\u53d6\u65f6\u6821\u9a8c cookies \u662f\u5426\u8fc7\u671f\u3002"),(0,r.kt)("h4",{id:"25-\u7ef4\u6301\u751f\u547d\u5468\u671f"},"2.5 \u7ef4\u6301\u751f\u547d\u5468\u671f"),(0,r.kt)("p",null,"\u5173\u4e8e\u63a7\u5236\u5c42\u65b9\u9762\uff0c\u5c0f\u7a0b\u5e8f\u6ca1\u6709\u89e3\u51b3\u65b9\u6848\uff0c\u53ea\u80fd\u5728\u9700\u8981\u63a7\u5236\u7684\u9875\u9762\u4e0a\u589e\u52a0\u63a7\u5236\u7684\u903b\u8f91\uff0c\u4f46\u6211\u4eec\u53ef\u4ee5\u628a\u8fd9\u4e00\u5c42\u62bd\u8c61\u51fa\u6765\uff0c\u51cf\u5c11\u91cd\u590d\u4ee3\u7801\u3002"),(0,r.kt)("p",null,"\u601d\u8def\uff1a\u7ec4\u4ef6 Layout \u63a7\u5236\u9875\u9762\u662f\u5426\u6e32\u67d3\uff0chold\uff08\u4e00\u4e2a Behavior\uff09\u901a\u8fc7\u52ab\u6301\u9875\u9762\u6765\u7ef4\u6301\u751f\u547d\u5468\u671f\uff0c\u76f4\u5230 Layout \u53d1\u51fa\u901a\u884c\u7684\u4fe1\u53f7\u624d\u6267\u884c\u3002\u901a\u8fc7\u63a7\u5236\u751f\u547d\u5468\u671f\u548c\u9875\u9762\u6e32\u67d3\uff0c\u8fbe\u5230\u63a7\u5236\u9875\u9762\u7684\u6548\u679c\uff0c\u540c\u65f6\u7ec4\u4ef6\u4e0e Behavior \u90fd\u80fd\u590d\u7528\uff0c\u51cf\u5c11\u91cd\u590d\u7387\u3002"),(0,r.kt)("img",{src:n(1461).Z,width:"800"}),(0,r.kt)("p",null,"BUG\uff1a\u5f00\u53d1\u65f6\u53d1\u73b0\u9875\u9762\u5185\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f\u65e0\u6cd5\u7ef4\u6301\uff0c\u9700\u8981\u589e\u52a0",(0,r.kt)("inlineCode",{parentName:"p"},'wx:if="{{!HOLDING}}"')),(0,r.kt)("img",{src:n(8270).Z,width:"400"}),(0,r.kt)("h3",{id:"3-\u6700\u540e"},"3. \u6700\u540e"),(0,r.kt)("h4",{id:"31-\u5173\u4e8e-eslint"},"3.1 \u5173\u4e8e eslint"),(0,r.kt)("img",{src:n(5573).Z,width:"400"}),(0,r.kt)("p",null,"\u5982\u679c\u4f7f\u7528 eslint\uff0c\u8bf7\u6307\u5b9a\u4f7f\u7528\u5230\u7684\u5fae\u4fe1 api\uff0c\u56e0\u4e3a\u7f16\u8f91\u5668\u4e0d\u77e5\u9053\u5fae\u4fe1\u7684\u5168\u5c40 api \u6709\u90a3\u4e9b\uff0c\u4f1a\u76f4\u63a5\u62a5\u9519\u3002"),(0,r.kt)("h4",{id:"32-canvas-\u7ed8\u5236"},"3.2 canvas \u7ed8\u5236"),(0,r.kt)("p",null,"\u5982\u679c\u624b\u52a8\u7ed8\u5236\u6d77\u62a5\uff0c\u6ce8\u610f\u5c06\u6587\u6848\u7684\u5bf9\u9f50\u65b9\u5f0f\uff08textBaseline\uff09\u8bbe\u7f6e\u4e3a middle\uff0cy \u8f74\u5b9a\u4f4d\u52a0\u4e0a\u4e00\u534a\u884c\u9ad8\u5373\u53ef"),(0,r.kt)("h4",{id:"33-js-\u652f\u6301"},"3.3 js \u652f\u6301"),(0,r.kt)("p",null,"\u5728\u5f00\u53d1\u524d\u6700\u597d\u770b\u4e0b",(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/js-support.html"},"JavaScript \u652f\u6301\u60c5\u51b5")),(0,r.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u5176\u4e2d\u5c0f\u7a0b\u5e8f\u7981\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"eval"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"new Function"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"@babel/plugin-transform-runtime"),"\u5728\u7f16\u8bd1\u540e\u4f1a\u6709 Function \u4ee3\u7801\u5bfc\u81f4\u62a5\u9519\uff0c\u8be6\u7ec6\u89c1",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/regenerator/issues/378"},"issues")))}d.isMDXComponent=!0},3945:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/36-9f7faf35a8a12d16c7011892b9e63646.png"},6720:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/37-7c07e595b1a97d5f9d091e61b0d56938.png"},1461:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/38-b1cc9b2c5d79936ae0ff9df2c2de7d2d.png"},8270:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/39-db52b072da07da3647d43d242474fa70.png"},5573:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/40-1119fbebc746a8a70c019377001d7abb.png"}}]);