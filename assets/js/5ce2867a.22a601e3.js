"use strict";(self.webpackChunkyouniaogu=self.webpackChunkyouniaogu||[]).push([[8820],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,d=m["".concat(i,".").concat(f)]||m[f]||s[f]||o;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[m]="string"==typeof e?e:a,l[1]=u;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9252:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"\u524d\u7aef\u7248\u672c\u53f7\u5b9a\u4e49",authors:"youniaogu",date:new Date("2020-09-14T00:00:00.000Z"),tags:[]},l=void 0,u={permalink:"/blog/2020/09/14/version_of_fontend_project",editUrl:"https://github.com/youniaogu/youniaogu.github.io/blog/2020-09-14-version_of_fontend_project.md",source:"@site/blog/2020-09-14-version_of_fontend_project.md",title:"\u524d\u7aef\u7248\u672c\u53f7\u5b9a\u4e49",description:"\u524d\u7aef\u7248\u672c\u53f7\u5b9a\u4e49",date:"2020-09-14T00:00:00.000Z",formattedDate:"2020\u5e749\u670814\u65e5",tags:[],readingTime:2.355,hasTruncateMarker:!1,authors:[{name:"youniaogu",title:"\u4f5c\u8005",url:"https://github.com/youniaogu",email:"youniaogu2023@gmail.com",imageURL:"https://github.com/youniaogu.png",key:"youniaogu"}],frontMatter:{title:"\u524d\u7aef\u7248\u672c\u53f7\u5b9a\u4e49",authors:"youniaogu",date:"2020-09-14T00:00:00.000Z",tags:[]},prevItem:{title:"react-router-dom \u7b80\u5355\u8bb2\u89e3",permalink:"/blog/2020/09/16/the_simple_react-router-dom"},nextItem:{title:"redux-saga \u4e2d\u53d6\u6d88 fetch \u8bf7\u6c42",permalink:"/blog/2020/09/09/cancel_fetch_in_redux-saga"}},i={authorsImageUrls:[void 0]},p=[{value:"\u524d\u7aef\u7248\u672c\u53f7\u5b9a\u4e49",id:"\u524d\u7aef\u7248\u672c\u53f7\u5b9a\u4e49",level:3},{value:"1. \u7248\u672c\u53f7\u5b9a\u4e49",id:"1-\u7248\u672c\u53f7\u5b9a\u4e49",level:4},{value:"2. \u533a\u522b",id:"2-\u533a\u522b",level:4},{value:"2. \u5982\u4f55\u7406\u89e3 dependencies \u5185\u7684\u7248\u672c\u53f7",id:"2-\u5982\u4f55\u7406\u89e3-dependencies-\u5185\u7684\u7248\u672c\u53f7",level:4}],c={toc:p},m="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u524d\u7aef\u7248\u672c\u53f7\u5b9a\u4e49"},"\u524d\u7aef\u7248\u672c\u53f7\u5b9a\u4e49"),(0,a.kt)("p",null,"\u7248\u672c\u53f7\u7ed3\u6784\uff1a"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e3b\u7248\u672c\u53f7.\u6b21\u7248\u672c\u53f7.\u4fee\u8ba2\u53f7")),(0,a.kt)("p",null,"\u7248\u672c\u53f7\u80fd\u591f\u8868\u660e\u7248\u672c\u7684\u91cd\u8981\u6027\u548c\u7834\u574f\u6027\uff0c\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u6709\u7740\u5f88\u91cd\u8981\u7684\u610f\u4e49"),(0,a.kt)("h4",{id:"1-\u7248\u672c\u53f7\u5b9a\u4e49"},"1. \u7248\u672c\u53f7\u5b9a\u4e49"),(0,a.kt)("p",null,"\u7248\u672c\u53f7\u5b9a\u4e49\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"https://semver.org/lang/zh-CN/"},"\u8bed\u4e49\u5316\u7248\u672c 2.0.0"),"\uff0cnpm \u8bed\u4e49\u5316\u7248\u672c\u63a7\u5236\u4e5f\u662f\u4ee5\u5b83\u4e3a\u57fa\u51c6\u7684"),(0,a.kt)("p",null,"\u91cc\u9762\u89c4\u5b9a\u7248\u672c\u53f7\u5fc5\u987b\u9075\u5b88\u4ee5\u4e0b\u89c4\u5219\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e3b\u7248\u672c\u53f7\uff1a\u5f53\u4f60\u505a\u4e86\u4e0d\u517c\u5bb9\u7684 API \u4fee\u6539\uff0c"),(0,a.kt)("li",{parentName:"ul"},"\u6b21\u7248\u672c\u53f7\uff1a\u5f53\u4f60\u505a\u4e86\u5411\u4e0b\u517c\u5bb9\u7684\u529f\u80fd\u6027\u65b0\u589e\uff0c"),(0,a.kt)("li",{parentName:"ul"},"\u4fee\u8ba2\u53f7\uff1a\u5f53\u4f60\u505a\u4e86\u5411\u4e0b\u517c\u5bb9\u7684\u95ee\u9898\u4fee\u6b63\u3002")),(0,a.kt)("h4",{id:"2-\u533a\u522b"},"2. \u533a\u522b"),(0,a.kt)("p",null,"\u5728\u524d\u7aef\u7684\u7cfb\u7edf\u91cc\u9762\u901a\u5e38\u5e76\u6ca1\u6709 api \u7b49\u7279\u6027\uff0c\u6240\u4ee5\u4e0a\u9762\u7684\u89c4\u5219\u5e76\u4e0d\u5b8c\u5168\u9002\u7528\uff0c\u6240\u4ee5\u5728\u89c4\u5219\u65b9\u9762\u8981\u505a\u4e00\u4e9b\u53d8\u66f4"),(0,a.kt)("p",null,"\u5728\u7248\u672c\u53f7\u7684\u4fee\u6539\u4e0a\u9762\uff0c\u4e00\u767e\u4e2a\u4eba\u6709\u4e00\u4e2a\u79cd\u65b9\u6cd5\uff0c\u4e0b\u9762\u662f\u6211\u4e2a\u4eba\u7684\u4e00\u4e9b\u7406\u89e3\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e3b\u7248\u672c\u53f7\uff1a\u5f53\u9879\u76ee\u7ed3\u6784\u53d1\u751f\u6539\u53d8\u3001\u63a8\u51fa\u5f88\u91cd\u8981\u529f\u80fd\u6216\u8005\u662f\u591a\u4e2a\u6b21\u7248\u672c\u53f7\u66f4\u66ff\u540e\u53d8\u66f4"),(0,a.kt)("li",{parentName:"ul"},"\u6b21\u7248\u672c\u53f7\uff1a\u5f53\u65b0\u589e\u529f\u80fd\u5e76\u4e14\u9879\u76ee\u7ed3\u6784\u65e0\u591a\u5927\u4fee\u6539\u65f6\u65b0\u589e"),(0,a.kt)("li",{parentName:"ul"},"\u4fee\u8ba2\u53f7\uff1a\u5f53\u4f60\u4fee\u6539\u4e86 bug \u6216\u8005\u505a\u4e86\u4e00\u4e9b\u5c0f\u7684\u6837\u5f0f\u6216\u903b\u8f91\u8c03\u6574")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u89c4\u5219\u662f\u6b7b\u7684\uff0c\u4eba\u662f\u6d3b\u5f97\uff0c\u53ea\u6709\u9002\u5408\u624d\u662f\u6700\u597d\u7684")),(0,a.kt)("h4",{id:"2-\u5982\u4f55\u7406\u89e3-dependencies-\u5185\u7684\u7248\u672c\u53f7"},"2. \u5982\u4f55\u7406\u89e3 dependencies \u5185\u7684\u7248\u672c\u53f7"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"^\uff1a\u4ece\u5de6\u8fb9\u6570\u7b2c\u4e00\u4e2a\u4e0d\u7b49\u4e8e 0 \u7684\u7248\u672c\u53f7\u4e0d\u5141\u8bb8\u6539\u53d8\uff0c\u53f3\u8fb9\u7684\u53ef\u4ee5\u5339\u914d\u5230\u6700\u65b0\u7684\u7248\u672c"),(0,a.kt)("li",{parentName:"ul"},"~\uff1a\u5982\u679c\u5b58\u5728\u6b21\u7248\u672c\u53f7\uff0c\u5219\u53ea\u80fd\u5339\u914d\u5230\u4fee\u8ba2\u53f7\u7684\u6700\u65b0\u7248\u3002\u5982\u679c\u4e0d\u5b58\u5728\u6b21\u7248\u672c\u53f7\uff08\u6307\u7684\u662f~1\uff0c\u800c\u4e0d\u662f~1.0 \u6216~1.0.0\uff0c\u56e0\u4e3a 0 \u4e5f\u7b97\u662f\u6b21\u7248\u672c\u53f7\uff09\uff0c\u53ef\u4ee5\u5339\u914d\u5230\u6b21\u7248\u672c\u53f7\u6700\u65b0\u7248\u672c"),(0,a.kt)("li",{parentName:"ul"},"latest\uff1a\u5339\u914d\u6700\u65b0\u7248\u672c\u53f7"),(0,a.kt)("li",{parentName:"ul"},"*","\uff1a\u5339\u914d\u6700\u65b0\u7248\u672c\u53f7"),(0,a.kt)("li",{parentName:"ul"},"1.2.3\uff1a\u6307\u5b9a\u7248\u672c\u53f7"),(0,a.kt)("li",{parentName:"ul"},"-\uff1a\u5339\u914d\u4e24\u4e2a\u7248\u672c\u53f7\u7684\u533a\u95f4"),(0,a.kt)("li",{parentName:"ul"},">"," >= < <= =\uff1a\u8fd0\u7b97\u7b26\u5339\u914d")))}s.isMDXComponent=!0}}]);