"use strict";(self.webpackChunkyouniaogu=self.webpackChunkyouniaogu||[]).push([[8973],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},u="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=s(n),h=a,d=u["".concat(c,".").concat(h)]||u[h]||f[h]||i;return n?r.createElement(d,l(l({ref:e},p),{},{components:n})):r.createElement(d,l({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=h;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o[u]="string"==typeof t?t:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4172:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={title:"\u9762\u8bd5\u9898\u6c47\u603b",authors:"youniaogu",date:new Date("2020-09-21T00:00:00.000Z"),tags:[]},l=void 0,o={permalink:"/blog/2020/09/21/interview_questions",editUrl:"https://github.com/youniaogu/youniaogu.github.io/blog/2020-09-21-interview_questions.md",source:"@site/blog/2020-09-21-interview_questions.md",title:"\u9762\u8bd5\u9898\u6c47\u603b",description:"\u9762\u8bd5\u9898\u6c47\u603b",date:"2020-09-21T00:00:00.000Z",formattedDate:"2020\u5e749\u670821\u65e5",tags:[],readingTime:4.175,hasTruncateMarker:!1,authors:[{name:"youniaogu",title:"\u4f5c\u8005",url:"https://github.com/youniaogu",email:"youniaogu2023@gmail.com",imageURL:"https://github.com/youniaogu.png",key:"youniaogu"}],frontMatter:{title:"\u9762\u8bd5\u9898\u6c47\u603b",authors:"youniaogu",date:"2020-09-21T00:00:00.000Z",tags:[]},prevItem:{title:"\u9632\u6296\u548c\u8282\u6d41",permalink:"/blog/2020/09/21/debounce_and_throttle"},nextItem:{title:"react-router-dom \u7b80\u5355\u8bb2\u89e3",permalink:"/blog/2020/09/16/the_simple_react-router-dom"}},c={authorsImageUrls:[void 0]},s=[{value:"\u9762\u8bd5\u9898\u6c47\u603b",id:"\u9762\u8bd5\u9898\u6c47\u603b",level:3},{value:"1. \u5b9e\u73b0 New \u5173\u952e\u5b57",id:"1-\u5b9e\u73b0-new-\u5173\u952e\u5b57",level:4},{value:"2. Array.prototype.flat",id:"2-arrayprototypeflat",level:4},{value:"3. \u4e0b\u9762\u7684\u4ee3\u7801\u6253\u5370\u4ec0\u4e48\u5185\u5bb9\uff0c\u4e3a\u4ec0\u4e48\uff1f",id:"3-\u4e0b\u9762\u7684\u4ee3\u7801\u6253\u5370\u4ec0\u4e48\u5185\u5bb9\u4e3a\u4ec0\u4e48",level:4},{value:"4. \u4e8c\u5206\u67e5\u627e",id:"4-\u4e8c\u5206\u67e5\u627e",level:4},{value:"5. \u5192\u6ce1\u6392\u5e8f",id:"5-\u5192\u6ce1\u6392\u5e8f",level:4},{value:"6. \u63d2\u5165\u6392\u5e8f",id:"6-\u63d2\u5165\u6392\u5e8f",level:4},{value:"7. \u9009\u62e9\u6392\u5e8f",id:"7-\u9009\u62e9\u6392\u5e8f",level:4},{value:"8. \u5feb\u901f\u6392\u5e8f",id:"8-\u5feb\u901f\u6392\u5e8f",level:4},{value:"9. \u5b9e\u73b0 call,apply,bind",id:"9-\u5b9e\u73b0-callapplybind",level:4}],p={toc:s},u="wrapper";function f(t){let{components:e,...i}=t;return(0,a.kt)(u,(0,r.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u9762\u8bd5\u9898\u6c47\u603b"},"\u9762\u8bd5\u9898\u6c47\u603b"),(0,a.kt)("h4",{id:"1-\u5b9e\u73b0-new-\u5173\u952e\u5b57"},"1. \u5b9e\u73b0 New \u5173\u952e\u5b57"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"function New(fn, ...args) {\n  let obj = {};\n\n  obj.__proto__ = fn.prototype;\n\n  const ret = fn.apply(this, args);\n\n  if (ret instanceof Object) {\n    return ret;\n  }\n\n  return obj;\n}\n")),(0,a.kt)("h4",{id:"2-arrayprototypeflat"},"2. ",(0,a.kt)("a",{parentName:"h4",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat"},"Array.prototype.flat")),(0,a.kt)("p",null,"flat \u7684\u4f5c\u7528\u662f\u6839\u636e\u6307\u5b9a\u7684\u6570\u7ec4\u6df1\u5ea6\u644a\u5e73\u6570\u7ec4\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Infinity"},"Infinity"),"(\u65e0\u7a77\u5927)\u5c55\u5f00\u4efb\u610f\u6df1\u5ea6\u7684\u6570\u7ec4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var newArray = arr.flat([depth]);\n")),(0,a.kt)("p",null,"depth \u6df1\u5ea6\u662f\u53ef\u9009\uff0c\u9ed8\u8ba4\u4e3a 1"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4f7f\u7528 concat \u548c reduce \u6a21\u62df\u7684 flat"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var arr1 = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]];\n\nfunction flatDeep(arr, d = 1) {\n  return d > 0\n    ? arr.reduce(\n        (acc, val) =>\n          acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val),\n        []\n      )\n    : arr.slice();\n}\n\nflatDeep(arr1, Infinity);\n")),(0,a.kt)("h4",{id:"3-\u4e0b\u9762\u7684\u4ee3\u7801\u6253\u5370\u4ec0\u4e48\u5185\u5bb9\u4e3a\u4ec0\u4e48"},"3. ",(0,a.kt)("a",{parentName:"h4",href:"https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/48"},"\u4e0b\u9762\u7684\u4ee3\u7801\u6253\u5370\u4ec0\u4e48\u5185\u5bb9\uff0c\u4e3a\u4ec0\u4e48\uff1f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var b = 10;\n(function b() {\n  b = 20;\n  console.log(b);\n})();\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5177\u540d\u5e76\u4e14\u81ea\u6267\u884c\u51fd\u6570\uff0c\u51fd\u6570\u540d\u53ea\u8bfb(\u7c7b\u4f3c\u5e38\u91cf)\uff0c\u4e0d\u53ef\u4fee\u6539"),(0,a.kt)("li",{parentName:"ul"},"\u975e\u4e25\u683c\u6a21\u5f0f\u4e0b\u7ed9\u5e38\u91cf\u547d\u540d\u9759\u9ed8\u5931\u8d25\uff0c\u7b80\u5355\u6765\u8bf4",(0,a.kt)("inlineCode",{parentName:"li"},"b = 20;"),"\u76f8\u5f53\u4e8e\u7ed9\u51fd\u6570 b \u8d4b\u503c\uff0c\u4e8e\u662f\u9759\u9ed8\u5931\u8d25"),(0,a.kt)("li",{parentName:"ul"},"\u4e25\u683c\u6a21\u5f0f\u4e0b\u7ed9\u5e38\u91cf\u547d\u540d\u62a5\u9519 TypeError")),(0,a.kt)("p",null),(0,a.kt)("h4",{id:"4-\u4e8c\u5206\u67e5\u627e"},"4. \u4e8c\u5206\u67e5\u627e"),(0,a.kt)("p",null,"\u6ce8\u610f\uff1a\u4e8c\u5206\u67e5\u627e\u662f\u7279\u5b9a\u5728\u6709\u5e8f\u6570\u7ec4\u91cc\u624d\u80fd\u4f7f\u7528\u7684\u67e5\u627e\u7b97\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const a = [1, 3, 6, 7, 8, 11, 30, 60, 63, 90];\n\nfunction binaySearch(array, data) {\n  const max = array.length - 1; // 9\n  const mid = Math.floor(max / 2); // 4\n\n  if (max < 0) {\n    return -1;\n  }\n\n  if (array[mid] === data) {\n    return data;\n  }\n\n  if (array[mid] > data) {\n    return binaySearch(array.slice(0, mid), data);\n  } else {\n    return binaySearch(array.slice(mid + 1, max + 1), data);\n  }\n}\n\na.forEach((data) => console.log(binaySearch(a, data)));\n")),(0,a.kt)("h4",{id:"5-\u5192\u6ce1\u6392\u5e8f"},"5. \u5192\u6ce1\u6392\u5e8f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"Array.prototype.bubbleSort = function () {\n  let isSorted = false;\n\n  for (let i = 0; i < this.length - 1; i++) {\n    let haveSort = false;\n\n    if (isSorted) {\n      return;\n    }\n\n    for (let l = 0; l < this.length - 1 - i; l++) {\n      if (this[l] > this[l + 1]) {\n        const bigger = this[l];\n        this[l] = this[l + 1];\n        this[l + 1] = bigger;\n        haveSort = true;\n      }\n    }\n\n    if (!haveSort) {\n      isSorted = true;\n    }\n  }\n};\n")),(0,a.kt)("p",null,"\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"haveSort"),"\u6807\u8bb0\u4e00\u6b21\u5192\u6ce1\u4e2d\u662f\u5426\u6709\u4e92\u6362\uff0c\u5982\u679c\u6ca1\u6709\uff0c\u8868\u660e\u5217\u8868\u5df2\u7ecf\u662f\u6392\u5e8f\u5b8c\u6210\uff0c\u7ed3\u675f\u5192\u6ce1"),(0,a.kt)("h4",{id:"6-\u63d2\u5165\u6392\u5e8f"},"6. \u63d2\u5165\u6392\u5e8f"),(0,a.kt)("p",null,"\u63d2\u5165\u6392\u5e8f\u5efa\u8bae\u7ed3\u5408\u4e0b\u56fe\u7406\u89e3"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"20.gif",src:n(3783).Z,width:"300",height:"180"})),(0,a.kt)("p",null,"\u5c06\u9009\u53d6\u7684\u6570\u63d2\u5165\u5230\u5df2\u7ecf\u6392\u5e8f\u597d\u7684\u6570\u7ec4\u91cc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"Array.prototype.insertSort = function () {\n  for (let i = 1; i < this.length; i++) {\n    const current = this[i];\n\n    let l = i - 1;\n    while (l >= 0 && current < this[l]) {\n      this[l + 1] = this[l];\n      l--;\n    }\n    this[l + 1] = current;\n  }\n};\n")),(0,a.kt)("h4",{id:"7-\u9009\u62e9\u6392\u5e8f"},"7. \u9009\u62e9\u6392\u5e8f"),(0,a.kt)("p",null,"\u6bcf\u6b21\u904d\u5386\u9009\u62e9\u51fa\u6700\u5c0f\u7684\u90a3\u4e2a\u653e\u5728\u6700\u524d\u9762"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"Array.prototype.selectSort = function () {\n  for (let i = 0; i < this.length - 1; i++) {\n    let min = i;\n\n    for (let l = i + 1; l < this.length; l++) {\n      if (this[l] < this[min]) {\n        min = l;\n      }\n    }\n\n    if (min !== i) {\n      const bigger = this[i];\n      this[i] = this[min];\n      this[min] = bigger;\n    }\n  }\n};\n")),(0,a.kt)("h4",{id:"8-\u5feb\u901f\u6392\u5e8f"},"8. \u5feb\u901f\u6392\u5e8f"),(0,a.kt)("p",null,"\u5728\u6570\u7ec4\u4e2d\u9009\u62e9\u4e00\u4e2a\u4f5c\u4e3a\u57fa\u51c6\uff0c\u5c06\u5c0f\u4e8e\u7684\u653e\u5728\u5de6\u8fb9\uff0c\u5927\u4e8e\u7684\u653e\u5728\u53f3\u8fb9\uff0c\u518d\u5206\u522b\u5bf9\u5de6\u8fb9\u548c\u53f3\u8fb9\u8fdb\u884c\u540c\u6837\u64cd\u4f5c\uff08\u9700\u8981\u7528\u5230\u9012\u5f52\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"Array.prototype.quickSort = function () {\n  if (this.length <= 1) {\n    return this;\n  }\n\n  let mid = this[0],\n    left = [],\n    right = [];\n\n  for (let i = 1; i < this.length; i++) {\n    if (this[i] <= mid) {\n      left.push(this[i]);\n    } else {\n      right.push(this[i]);\n    }\n  }\n\n  return [].concat(left.quickSort()).concat(mid).concat(right.quickSort());\n};\n")),(0,a.kt)("h4",{id:"9-\u5b9e\u73b0-callapplybind"},"9. \u5b9e\u73b0 call,apply,bind"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"Function.prototype.CALL = function (context, ...args) {\n  context.fn = this;\n  context.fn(...args);\n\n  delete context.fn;\n};\nFunction.prototype.APPLY = function (context, args) {\n  context.fn = this;\n  context.fn(...args);\n\n  delete context.fn;\n};\nFunction.prototype.BIND = function (context, ...args) {\n  const self = this;\n\n  function RETURNFN(...bindArgs) {\n    let contextOrThis = context;\n    if (this instanceof RETURNFN) {\n      contextOrThis = this;\n    }\n\n    contextOrThis.fn = self;\n    contextOrThis.fn(...args, ...bindArgs);\n    delete contextOrThis.fn;\n  }\n\n  RETURNFN.prototype = this.prototype;\n  return RETURNFN;\n};\n")))}f.isMDXComponent=!0},3783:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/20-786cd27752a4ba6163f214b085cd8ece.gif"}}]);