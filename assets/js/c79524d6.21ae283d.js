"use strict";(self.webpackChunkyouniaogu=self.webpackChunkyouniaogu||[]).push([[9438],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},h="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=c(n),f=a,m=h["".concat(p,".").concat(f)]||h[f]||s[f]||l;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[h]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2067:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={title:"\u4e3a\u4ec0\u4e48\u7528 fetch\uff1f",authors:"youniaogu",date:new Date("2020-09-02T00:00:00.000Z"),tags:[]},o=void 0,i={permalink:"/blog/2020/09/02/why_fetch",editUrl:"https://github.com/youniaogu/youniaogu.github.io/blog/2020-09-02-why_fetch.md",source:"@site/blog/2020-09-02-why_fetch.md",title:"\u4e3a\u4ec0\u4e48\u7528 fetch\uff1f",description:"\u4e3a\u4ec0\u4e48\u7528 fetch\uff1f",date:"2020-09-02T00:00:00.000Z",formattedDate:"2020\u5e749\u67082\u65e5",tags:[],readingTime:3.15,hasTruncateMarker:!1,authors:[{name:"youniaogu",title:"\u4f5c\u8005",url:"https://github.com/youniaogu",email:"youniaogu2023@gmail.com",imageURL:"https://github.com/youniaogu.png",key:"youniaogu"}],frontMatter:{title:"\u4e3a\u4ec0\u4e48\u7528 fetch\uff1f",authors:"youniaogu",date:"2020-09-02T00:00:00.000Z",tags:[]},prevItem:{title:"redux-saga \u4e2d\u53d6\u6d88 fetch \u8bf7\u6c42",permalink:"/blog/2020/09/09/cancel_fetch_in_redux-saga"},nextItem:{title:"input \u9650\u5236\u8f93\u5165",permalink:"/blog/2020/08/28/how_to_limit_in_react_input"}},p={authorsImageUrls:[void 0]},c=[{value:"\u4e3a\u4ec0\u4e48\u7528 fetch\uff1f",id:"\u4e3a\u4ec0\u4e48\u7528-fetch",level:3},{value:"1. \u6ca1\u6709\u81ea\u52a8 stringify",id:"1-\u6ca1\u6709\u81ea\u52a8-stringify",level:4},{value:"2. \u63a5\u53e3\u629b\u51fa 4xx\u30015xx \u7c7b\u9519\u8bef\u4f1a\u5f52\u5230\u6210\u529f\u91cc\uff0c\u53ea\u6709\u7f51\u7edc\u9519\u8bef\u624d\u4f1a\u629b\u51fa reject",id:"2-\u63a5\u53e3\u629b\u51fa-4xx5xx-\u7c7b\u9519\u8bef\u4f1a\u5f52\u5230\u6210\u529f\u91cc\u53ea\u6709\u7f51\u7edc\u9519\u8bef\u624d\u4f1a\u629b\u51fa-reject",level:4},{value:"3. \u7f3a\u5c11\u9ed8\u8ba4\u914d\u7f6e",id:"3-\u7f3a\u5c11\u9ed8\u8ba4\u914d\u7f6e",level:4},{value:"4. \u517c\u5bb9\u6027",id:"4-\u517c\u5bb9\u6027",level:4},{value:"5. \u8bf7\u6c42\u8d85\u65f6\u3001\u53d6\u6d88\u8bf7\u6c42",id:"5-\u8bf7\u6c42\u8d85\u65f6\u53d6\u6d88\u8bf7\u6c42",level:4},{value:"6. \u4e0b\u8f7d\u8fdb\u5ea6",id:"6-\u4e0b\u8f7d\u8fdb\u5ea6",level:4},{value:"7. \u4e0a\u4f20\u8fdb\u5ea6",id:"7-\u4e0a\u4f20\u8fdb\u5ea6",level:4},{value:"\u4f18\u70b9",id:"\u4f18\u70b9",level:5},{value:"\u5bf9\u6bd4 axios",id:"\u5bf9\u6bd4-axios",level:5},{value:"\u4e3a\u4ec0\u4e48\u575a\u6301 fetch",id:"\u4e3a\u4ec0\u4e48\u575a\u6301-fetch",level:5}],u={toc:c},h="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u7528-fetch"},"\u4e3a\u4ec0\u4e48\u7528 fetch\uff1f"),(0,a.kt)("p",null,"\u4e0b\u9762\u7f57\u5217\u4e86\u7f51\u4e0a\u7ecf\u5e38\u8ba8\u8bba\uff0c\u5173\u4e8e fetch \u7684\u7f3a\u70b9\uff0c\u4ee5\u53ca\u76ee\u524d\u7684\u89e3\u51b3\u65b9\u6848"),(0,a.kt)("h4",{id:"1-\u6ca1\u6709\u81ea\u52a8-stringify"},"1. \u6ca1\u6709\u81ea\u52a8 stringify"),(0,a.kt)("p",null,"\u5c01\u88c5\u62bd\u8c61\u65b9\u6cd5\uff0c\u5f88\u7b80\u5355"),(0,a.kt)("h4",{id:"2-\u63a5\u53e3\u629b\u51fa-4xx5xx-\u7c7b\u9519\u8bef\u4f1a\u5f52\u5230\u6210\u529f\u91cc\u53ea\u6709\u7f51\u7edc\u9519\u8bef\u624d\u4f1a\u629b\u51fa-reject"},"2. \u63a5\u53e3\u629b\u51fa 4xx\u30015xx \u7c7b\u9519\u8bef\u4f1a\u5f52\u5230\u6210\u529f\u91cc\uff0c\u53ea\u6709\u7f51\u7edc\u9519\u8bef\u624d\u4f1a\u629b\u51fa reject"),(0,a.kt)("p",null,"400 \u2264 status < 600 \u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u5728 then \u91cc\u901a\u8fc7 res.ok \u5224\u65ad\u662f\u5426\u4e3a\u9519\u8bef\u60c5\u51b5\uff0c\u5728\u6839\u636e status \u8fdb\u884c\u5904\u7406\uff0c\u800c\u7f51\u7edc\u8bf7\u6c42\u9519\u8bef\u5219\u5728 catch \u91cc\u5904\u7406"),(0,a.kt)("h4",{id:"3-\u7f3a\u5c11\u9ed8\u8ba4\u914d\u7f6e"},"3. \u7f3a\u5c11\u9ed8\u8ba4\u914d\u7f6e"),(0,a.kt)("p",null,"\u9700\u8981\u81ea\u5df1\u5c01\u88c5\u9ed8\u8ba4\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"headers"),"\u6216",(0,a.kt)("inlineCode",{parentName:"p"},"credentials"),"\uff0c\u4e0d\u80fd\u5f00\u7bb1\u5373\u7528"),(0,a.kt)("h4",{id:"4-\u517c\u5bb9\u6027"},"4. \u517c\u5bb9\u6027"),(0,a.kt)("p",null,"IE \u4e0d\u517c\u5bb9"),(0,a.kt)("p",null,"\u5728 fetch \u521a\u51fa\u7684\u65f6\u5019\u5f88\u591a\u4eba\u5410\u69fd\u5b83\u7684\u517c\u5bb9\u6027\uff0c\u4f46\u5230 2020 \u5e74\uff0c",(0,a.kt)("a",{parentName:"p",href:"https://caniuse.com/#search=fetch"},"caniuse"),"\u4e0a\u663e\u793a\u5168\u7403\u6d4f\u89c8\u5668\u517c\u5bb9\u6027\u8986\u76d6\u7387\u8fbe\u5230\u4e86 95.11%\uff0c\u53ef\u4ee5\u653e\u5fc3\u4f7f\u7528"),(0,a.kt)("p",null,"\u5982\u679c\u9700\u8981\u517c\u5bb9 IE\uff0c\u53ef\u4ee5\u8003\u8651\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"https://github.com/github/fetch"},"whatwg-fetch"),"\uff0c\u8fd9\u662f\u4e2a polyfill \u5e93\uff0c\u539f\u7406\u662f\u4f7f\u7528 XMLHttpRequest \u6765\u6a21\u62df fetch"),(0,a.kt)("h4",{id:"5-\u8bf7\u6c42\u8d85\u65f6\u53d6\u6d88\u8bf7\u6c42"},"5. \u8bf7\u6c42\u8d85\u65f6\u3001\u53d6\u6d88\u8bf7\u6c42"),(0,a.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/AbortController/AbortController"},"AbortController"),"\u5b9e\u73b0\u76f8\u5173\u529f\u80fd"),(0,a.kt)("h4",{id:"6-\u4e0b\u8f7d\u8fdb\u5ea6"},"6. \u4e0b\u8f7d\u8fdb\u5ea6"),(0,a.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream"},"ReadableStream"),"\u5b9e\u73b0\u76f8\u5173\u529f\u80fd"),(0,a.kt)("h4",{id:"7-\u4e0a\u4f20\u8fdb\u5ea6"},"7. \u4e0a\u4f20\u8fdb\u5ea6"),(0,a.kt)("p",null,"\u6682\u65e0\u89e3\u51b3\u65b9\u6848"),(0,a.kt)("h5",{id:"\u4f18\u70b9"},"\u4f18\u70b9"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8bed\u6cd5\u4e0a\u6bd4\u8f83\u7b80\u5355\u7b80\u6d01"),(0,a.kt)("li",{parentName:"ol"},"\u57fa\u4e8e\u6d4f\u89c8\u5668\u63d0\u4f9b\u7684\u539f\u751f\u65b9\u6cd5\uff0c\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"promise"),"\u5b9e\u73b0"),(0,a.kt)("li",{parentName:"ol"},"\u5c5e\u4e8e\u539f\u751f js \u7cfb\u5217\uff0c\u4e0d\u9700\u8981\u5f15\u5165\u7b2c\u4e09\u65b9\u5e93"),(0,a.kt)("li",{parentName:"ol"},"\u5c5e\u4e8e\u5e95\u5c42 api\uff0c\u80fd\u591f\u81ea\u884c\u5c01\u88c5\u548c\u63a7\u5236")),(0,a.kt)("h5",{id:"\u5bf9\u6bd4-axios"},"\u5bf9\u6bd4 axios"),(0,a.kt)("p",null,"axios \u662f\u5e94\u7528\u4e8e web \u548c node \u7684 http \u8bf7\u6c42\u7b2c\u4e09\u65b9\u5e93\uff0c\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"promise"),"\uff0cweb \u57fa\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest"),"\u5b9e\u73b0\uff0cnode \u57fa\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"http"),"\u6a21\u5757\u5b9e\u73b0"),(0,a.kt)("p",null,"axios \u529f\u80fd\u5341\u5206\u5f3a\u5927\uff0c\u57fa\u672c\u4e0a fetch \u80fd\u505a\u5230\u7684 axios \u90fd\u80fd\u505a\u5230\uff0c\u751a\u81f3\u80fd\u505a fetch \u505a\u4e0d\u5230\u7684\u4e8b\u60c5\uff0c\u5e76\u4e14 api \u7b80\u5355\uff0c\u5728\u517c\u5bb9\u6027\u65b9\u9762\uff0caxios \u6700\u4f4e\u517c\u5bb9\u81f3 ie11"),(0,a.kt)("p",null,"\u53ef\u4ee5\u8bf4 axios \u662f\u5168\u9762\u78be\u538b fetch\uff0c\u90a3\u4e48\u8fd8\u6709\u4ec0\u4e48\u7406\u7531\u575a\u6301 fetch \u5462\uff1f\u8bf7\u7ee7\u7eed\u5f80\u4e0b\u770b"),(0,a.kt)("h5",{id:"\u4e3a\u4ec0\u4e48\u575a\u6301-fetch"},"\u4e3a\u4ec0\u4e48\u575a\u6301 fetch"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"fetch \u4f5c\u4e3a\u5e95\u5c42 api\uff0c\u76ee\u524d\u9664\u4e86\u4e0a\u4f20\u8fdb\u5ea6\u65e0\u89e3\u4ee5\u5916\uff0c\u5176\u4ed6\u90fd\u6709\u5bf9\u5e94\u7684\u5904\u7406\u65b9\u6cd5\uff0c\u53ea\u8981\u62bd\u8c61\u5c01\u88c5\u540e\u5b8c\u5168\u80fd\u591f\u5e94\u5bf9\u5927\u90e8\u5206\u7684\u573a\u666f")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u9ad8\u5ea6\u5c01\u88c5\u7684\u5e93\u786e\u5b9e\u80fd\u591f\u5f88\u65b9\u4fbf\u7684\u6ee1\u8db3\u9700\u6c42\uff0c\u4f46\u8fd9\u4e2d\u95f4\u5c01\u88c5\u7684\u8fc7\u7a0b\u548c\u539f\u7406\u5374\u65e0\u4ece\u5f97\u77e5\uff0c\u4f1a\u7528\u4ec5\u4ec5\u662f\u8fbe\u5230 20%\u800c\u5df2")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\uff0chttp \u8bf7\u6c42\u5e76\u4e0d\u9700\u8981\u7279\u522b\u590d\u6742\u7684\u529f\u80fd\uff0c\u4e0d\u9700\u8981\u5f15\u5165\u989d\u5916\u5e93\u7684 fetch \u4f1a\u662f\u66f4\u597d\u7684\u9009\u62e9")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u81ea\u5df1\u5c01\u88c5\u5e95\u5c42 api\uff0c\u80fd\u591f\u66f4\u8d34\u5408\u5b9e\u9645\u4e1a\u52a1\u4e2d\u7684\u9700\u6c42\uff0c\u66f4\u52a0\u7684\u7406\u89e3\u91cc\u9762\u7684\u6d41\u7a0b\uff0c\u51fa\u95ee\u9898\u65f6\u80fd\u591f\u66f4\u597d\u7684\u89e3\u51b3"))))}s.isMDXComponent=!0}}]);