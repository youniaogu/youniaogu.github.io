"use strict";(self.webpackChunkyouniaogu=self.webpackChunkyouniaogu||[]).push([[6486],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),d=o,y=s["".concat(l,".").concat(d)]||s[d]||m[d]||a;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2311:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={title:"\u5982\u4f55\u5b9a\u4e49 Action type",authors:"youniaogu",date:new Date("2020-06-27T00:00:00.000Z"),tags:[]},i=void 0,c={permalink:"/blog/how_to_definition_action_type",editUrl:"https://github.com/youniaogu/youniaogu.github.io/blog/how_to_definition_action_type.md",source:"@site/blog/how_to_definition_action_type.md",title:"\u5982\u4f55\u5b9a\u4e49 Action type",description:"\u5982\u4f55\u5b9a\u4e49 Action type",date:"2020-06-27T00:00:00.000Z",formattedDate:"2020\u5e746\u670827\u65e5",tags:[],readingTime:1.73,hasTruncateMarker:!1,authors:[{name:"youniaogu",title:"\u4f5c\u8005",url:"https://github.com/youniaogu",email:"youniaogu2023@gmail.com",imageURL:"https://github.com/youniaogu.png",key:"youniaogu"}],frontMatter:{title:"\u5982\u4f55\u5b9a\u4e49 Action type",authors:"youniaogu",date:"2020-06-27T00:00:00.000Z",tags:[]},prevItem:{title:"\u8fd4\u56de\u51fd\u6570\u7684\u51fd\u6570",permalink:"/blog/function_return_function"},nextItem:{title:"\u5982\u4f55\u5b9e\u73b0 React-redux",permalink:"/blog/how_to_implement_react-redux"}},l={authorsImageUrls:[void 0]},p=[{value:"\u5982\u4f55\u5b9a\u4e49 Action type",id:"\u5982\u4f55\u5b9a\u4e49-action-type",level:3},{value:"1. \u597d\u5904\uff1a\u80fd\u591f\u5f88\u597d\u5b9a\u4f4d\u62fc\u5199\u9519\u8bef",id:"1-\u597d\u5904\u80fd\u591f\u5f88\u597d\u5b9a\u4f4d\u62fc\u5199\u9519\u8bef",level:4},{value:"2. \u574f\u5904\uff1a\u4f7f\u7528\u65f6\u4f1a\u9ebb\u70e6\u4e00\u4e9b\uff0c\u9700\u8981\u5f15\u5165<code>action</code>",id:"2-\u574f\u5904\u4f7f\u7528\u65f6\u4f1a\u9ebb\u70e6\u4e00\u4e9b\u9700\u8981\u5f15\u5165action",level:4},{value:"3. \u601d\u8003",id:"3-\u601d\u8003",level:4}],u={toc:p},s="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u5982\u4f55\u5b9a\u4e49-action-type"},"\u5982\u4f55\u5b9a\u4e49 Action type"),(0,o.kt)("p",null,"\u5728\u5199 redux \u65f6\uff0c\u9700\u8981\u5b9a\u4e49 action type\uff0c\u5f80\u5f80\u6211\u4eec\u4f1a\u76f4\u63a5\u5199\u6210\u5b57\u7b26\u4e32\uff0c\u800c\u6709\u4e9b\u60c5\u51b5\u5219\u4f1a\u5199\u6210\u53d8\u91cf\u518d\u4f20\u9012\u8fc7\u53bb"),(0,o.kt)("p",null,"\u90a3\u4e48\u5b9a\u4e49\u4e3a\u53d8\u91cf\u6709\u4ec0\u4e48\u597d\u5904\u548c\u574f\u5904\uff1f"),(0,o.kt)("h4",{id:"1-\u597d\u5904\u80fd\u591f\u5f88\u597d\u5b9a\u4f4d\u62fc\u5199\u9519\u8bef"},"1. \u597d\u5904\uff1a\u80fd\u591f\u5f88\u597d\u5b9a\u4f4d\u62fc\u5199\u9519\u8bef"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// actions.js\nconst LOAD_USER_LIST = \"LOAD_USER_LIST\";\nconst LOAD_USER_INFO = \"LOAD_USER_INFO\";\n\n// userList.js\nimport {LOAD_USER_LIST, LOAD_USER_DETAIL} from './actions'\uff1b\n// Attempted import error: 'LOAD_USER_DETAIL' is not exported from './action'\n// \u8fd9\u91cc\u4f1a\u63d0\u793a\u62a5\u9519\uff0cLOAD_USER_DETAIL\u4e0d\u5b58\u5728\n")),(0,o.kt)("p",null,"\u5f53\u5f15\u5165\u4e0d\u5b58\u5728\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"action"),"\u53d8\u91cf\u65f6\u5e94\u7528\u4f1a\u7f16\u8bd1\u5931\u8d25\uff0c\u80fd\u591f\u5f88\u597d\u7684\u63d0\u793a\u6211\u4eec"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'export function loadUserInfo(id) {\n  return {\n    type: "LOAD_USER_DETAIL", //\u6b63\u786e\u5e94\u8be5\u662ftype: "LOAD_USER_INFO",\n    id,\n  };\n}\n')),(0,o.kt)("p",null,"\u5f53",(0,o.kt)("inlineCode",{parentName:"p"},"action"),"\u4e3a\u5b57\u7b26\u4e32\u65f6\uff0c\u5e76\u4e0d\u4f1a\u63d0\u793a\u62a5\u9519\uff0c\u4f46\u5bf9\u5e94\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"reducer"),"\u4e0e",(0,o.kt)("inlineCode",{parentName:"p"},"saga"),"\u90e8\u5206\u4e0d\u4f1a\u8fd0\u884c\uff0c\u800c\u5f80\u5f80\u4e3a\u4e86\u627e\u51fa\u8fd9\u79cd\u4f4e\u7ea7\u9519\u8bef\uff0c\u4f1a\u6d6a\u8d39\u5f88\u591a\u65f6\u95f4"),(0,o.kt)("h4",{id:"2-\u574f\u5904\u4f7f\u7528\u65f6\u4f1a\u9ebb\u70e6\u4e00\u4e9b\u9700\u8981\u5f15\u5165action"},"2. \u574f\u5904\uff1a\u4f7f\u7528\u65f6\u4f1a\u9ebb\u70e6\u4e00\u4e9b\uff0c\u9700\u8981\u5f15\u5165",(0,o.kt)("inlineCode",{parentName:"h4"},"action")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// sagas.js | createAction.js | reducers.js\nimport { LOAD_USER_LIST, LOAD_USER_INFO } from "./actions.js";\n')),(0,o.kt)("h4",{id:"3-\u601d\u8003"},"3. \u601d\u8003"),(0,o.kt)("p",null,"\u5927\u9879\u76ee\u903b\u8f91\u590d\u6742\u67e5\u9519\u4e0d\u6613\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"action"),"\u5b9a\u4e49\u4e3a\u53d8\u91cf\u66f4\u4e3a\u4e25\u8c28\uff0c\u53ef\u4ee5\u89c4\u907f\u4e00\u4e9b\u4f4e\u7ea7\u9519\u8bef"),(0,o.kt)("p",null,"\u5c0f\u9879\u76ee\u8981\u6c42\u5feb\u901f\u5f00\u53d1\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"action"),"\u5b9a\u4e49\u4e3a\u5b57\u7b26\u4e32\u66f4\u4e3a\u76f4\u63a5\uff0c\u80fd\u591f\u52a0\u5feb\u5f00\u53d1\u6548\u7387"),(0,o.kt)("p",null,"\u5f88\u591a\u65f6\u5019\uff0c\u6211\u4eec\u4e0d\u80fd\u4e00\u5473\u7684\u6a21\u8303\uff0c\u800c\u662f\u8981\u601d\u8003\u4e3a\u4ec0\u4e48\u8981\u8fd9\u6837\u505a\uff0c\u5176\u4e2d\u7684\u5229\u4e0e\u5f0a\u662f\u4ec0\u4e48\uff0c\u9002\u5408\u81ea\u5df1\u7684\u624d\u662f\u6700\u597d\u7684"))}m.isMDXComponent=!0}}]);