"use strict";(self.webpackChunkyouniaogu=self.webpackChunkyouniaogu||[]).push([[958],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(n),d=o,f=s["".concat(c,".").concat(d)]||s[d]||m[d]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4890:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={title:"\u4ec0\u4e48\u662f Reselect",authors:"youniaogu",date:new Date("2020-06-30T00:00:00.000Z"),tags:[]},l=void 0,i={permalink:"/blog/what_is_reselect",editUrl:"https://github.com/youniaogu/youniaogu.github.io/blog/what_is_reselect.md",source:"@site/blog/what_is_reselect.md",title:"\u4ec0\u4e48\u662f Reselect",description:"\u4ec0\u4e48\u662f Reselect",date:"2020-06-30T00:00:00.000Z",formattedDate:"2020\u5e746\u670830\u65e5",tags:[],readingTime:1.24,hasTruncateMarker:!1,authors:[{name:"youniaogu",title:"\u4f5c\u8005",url:"https://github.com/youniaogu",email:"youniaogu2023@gmail.com",imageURL:"https://github.com/youniaogu.png",key:"youniaogu"}],frontMatter:{title:"\u4ec0\u4e48\u662f Reselect",authors:"youniaogu",date:"2020-06-30T00:00:00.000Z",tags:[]},prevItem:{title:"\u5982\u4f55\u5b9e\u73b0 Redux",permalink:"/blog/how_to_implement_redux"},nextItem:{title:"\u8fd4\u56de\u51fd\u6570\u7684\u51fd\u6570",permalink:"/blog/function_return_function"}},c={authorsImageUrls:[void 0]},u=[{value:"\u4ec0\u4e48\u662f Reselect",id:"\u4ec0\u4e48\u662f-reselect",level:3},{value:"Reselect \u89e3\u51b3\u4e86\u4ec0\u4e48\uff1f",id:"reselect-\u89e3\u51b3\u4e86\u4ec0\u4e48",level:4},{value:"Reselect \u505a\u4e86\u4ec0\u4e48\uff1f",id:"reselect-\u505a\u4e86\u4ec0\u4e48",level:4}],p={toc:u},s="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u4ec0\u4e48\u662f-reselect"},"\u4ec0\u4e48\u662f Reselect"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"react-redux \u6027\u80fd\u4f18\u5316\u5e93")),(0,o.kt)("h4",{id:"reselect-\u89e3\u51b3\u4e86\u4ec0\u4e48"},"Reselect \u89e3\u51b3\u4e86\u4ec0\u4e48\uff1f"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u524d\u63d0\uff1a\u5728 react-redux \u91cc\uff0c\u6bcf\u5f53 state \u53d8\u5316\u65f6\uff0c\u4e3a\u4e86\u6bd4\u8f83\u524d\u540e\u7684\u72b6\u6001\uff0c\u90fd\u4f1a\u8c03\u7528 mapStateToProps \u83b7\u53d6\u6700\u65b0\u7684\u7ed3\u679c")),(0,o.kt)("p",null,"\u5f53",(0,o.kt)("inlineCode",{parentName:"p"},"mapStateToProps"),"\u7684\u903b\u8f91\u6bd4\u8f83\u91cd\u65f6\uff0c\u5c06\u4f1a\u662f\u4e00\u4e2a\u5f88\u5927\u7684\u5f00\u9500\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"reselect"),"\u7684\u76ee\u7684\u5c31\u662f\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e9b\u65e0\u7528\u7684\u5f00\u9500\u3002"),(0,o.kt)("h4",{id:"reselect-\u505a\u4e86\u4ec0\u4e48"},"Reselect \u505a\u4e86\u4ec0\u4e48\uff1f"),(0,o.kt)("p",null,"\u5148\u6765\u770b\u4e00\u4e0b",(0,o.kt)("inlineCode",{parentName:"p"},"reselect"),"\u7684\u7528\u6cd5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { createSelector } from 'reselect';\n\n//createSelector(...inputSelectors | [inputSelectors], resultFunc)\n@connect(createSelector(\n  (state, ownProps) => state.counter,\n  (counter) => {\n    return {\n      counter,\n    };\n  },\n), {\n  dispatchAdd,\n  dispatchReduce,\n});\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"createSelector"),"\u9700\u8981\u4e24\u4e2a\u53c2\u6570\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"inputSelectors"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"resultFunc")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"inputSelectors"),"\u53ef\u4ee5\u4e3a\u6570\u7ec4\uff0c\u4e5f\u53ef\u4ee5\u662f\u591a\u4e2a\u51fd\u6570\uff0c\u91cc\u9762\u8fd4\u56de\u9700\u8981\u7528\u6765\u8ba1\u7b97\u7684\u5b57\u6bb5\uff0c\u8fd9\u4e9b\u5b57\u6bb5\u4f1a\u4f5c\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"resultFunc"),"\u65b9\u6cd5\u7684\u4f20\u53c2\uff0cresultFunc \u5219\u662f\u7528\u6765\u8ba1\u7b97\u6700\u540e\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"props"),"\uff08\u529f\u80fd\u5bf9\u5e94\u4e4b\u524d\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"mapStateToProps"),"\uff09"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"reselect"),"\u4f1a\u4fdd\u5b58",(0,o.kt)("inlineCode",{parentName:"p"},"mapStateToProps"),"\u7684\u7ed3\u679c\uff0c\u5f53\u7528\u6765\u8ba1\u7b97\u7684\u53c2\u6570\u672a\u53d1\u751f\u6539\u53d8\u65f6\uff08\u6d45\u6bd4\u8f83\uff09\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"resultFunc"),"\u4f1a\u76f4\u63a5\u8fd4\u56de\u65e7\u7684\u8ba1\u7b97\u7ed3\u679c\uff0c\u4ece\u800c\u907f\u514d\u4e86\u65e0\u7528\u7684\u8ba1\u7b97\u5f00\u9500"))}m.isMDXComponent=!0}}]);