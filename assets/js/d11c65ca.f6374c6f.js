"use strict";(self.webpackChunkyouniaogu=self.webpackChunkyouniaogu||[]).push([[1427],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),s=u(n),g=a,k=s["".concat(p,".").concat(g)]||s[g]||m[g]||o;return n?r.createElement(k,l(l({ref:e},c),{},{components:n})):r.createElement(k,l({ref:e},c))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=g;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[s]="string"==typeof t?t:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6570:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={title:"\u6d6e\u70b9\u6570\u8ba1\u7b97\u95ee\u9898",authors:"youniaogu",date:new Date("2020-10-10T00:00:00.000Z"),tags:[]},l=void 0,i={permalink:"/blog/2020/10/10/floating_point_calculation_problem",editUrl:"https://github.com/youniaogu/youniaogu.github.io/blog/2020-10-10-floating_point_calculation_problem.md",source:"@site/blog/2020-10-10-floating_point_calculation_problem.md",title:"\u6d6e\u70b9\u6570\u8ba1\u7b97\u95ee\u9898",description:"\u6d6e\u70b9\u6570\u8ba1\u7b97\u95ee\u9898",date:"2020-10-10T00:00:00.000Z",formattedDate:"2020\u5e7410\u670810\u65e5",tags:[],readingTime:3.565,hasTruncateMarker:!1,authors:[{name:"youniaogu",title:"\u4f5c\u8005",url:"https://github.com/youniaogu",email:"youniaogu2023@gmail.com",imageURL:"https://github.com/youniaogu.png",key:"youniaogu"}],frontMatter:{title:"\u6d6e\u70b9\u6570\u8ba1\u7b97\u95ee\u9898",authors:"youniaogu",date:"2020-10-10T00:00:00.000Z",tags:[]},prevItem:{title:"\u865a\u62df\u5217\u8868",permalink:"/blog/2020/10/15/virtual_list"},nextItem:{title:"\u5b8f\u4efb\u52a1\u548c\u5fae\u4efb\u52a1",permalink:"/blog/2020/10/10/tasks_and_microtasks"}},p={authorsImageUrls:[void 0]},u=[{value:"\u6d6e\u70b9\u6570\u8ba1\u7b97\u95ee\u9898",id:"\u6d6e\u70b9\u6570\u8ba1\u7b97\u95ee\u9898",level:3},{value:"1. \u524d\u8a00",id:"1-\u524d\u8a00",level:4},{value:"2. \u95ee\u9898\u539f\u56e0",id:"2-\u95ee\u9898\u539f\u56e0",level:4},{value:"3. \u5c0f\u6570\u7684\u6700\u5c0f\u7cbe\u5ea6",id:"3-\u5c0f\u6570\u7684\u6700\u5c0f\u7cbe\u5ea6",level:4},{value:"4. \u4e3a\u4ec0\u4e48 0.1+0.3 \u80fd\u5f97\u51fa 0.4\uff1f",id:"4-\u4e3a\u4ec0\u4e48-0103-\u80fd\u5f97\u51fa-04",level:4}],c={toc:u},s="wrapper";function m(t){let{components:e,...o}=t;return(0,a.kt)(s,(0,r.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u6d6e\u70b9\u6570\u8ba1\u7b97\u95ee\u9898"},"\u6d6e\u70b9\u6570\u8ba1\u7b97\u95ee\u9898"),(0,a.kt)("h4",{id:"1-\u524d\u8a00"},"1. \u524d\u8a00"),(0,a.kt)("p",null,"\u5f88\u591a\u4eba\u90fd\u77e5\u9053 js \u91cc\u7684 number \u662f\u4ee5\u6d6e\u70b9\u6570\u5f62\u5f0f\u50a8\u5b58\uff0c\u9075\u5faa",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/IEEE_754"},"IEEE 754 \u6807\u51c6"),"\uff0c\u6240\u4ee5\u5728\u8fdb\u884c\u5c0f\u6570\u8ba1\u7b97\u65f6\u4f1a\u6709\u4e00\u4e9b\u8bef\u5dee\uff0c\u5176\u5b9e\u6d6e\u70b9\u6570\u8ba1\u7b97\u95ee\u9898\u4e0d\u6b62 js\uff0c\u5176\u4ed6\u8bed\u8a00\u4e5f\u4f1a\u6709\u7c7b\u4f3c\u60c5\u51b5"),(0,a.kt)("p",null,"\u4e3e\u4e2a \ud83c\udf30\uff1a"),(0,a.kt)("img",{src:n(6899).Z,width:"200"}),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230 0.1+0.2 \u7684\u7ed3\u679c\u5e76\u4e0d\u662f 0.3\uff0c0.1+0.7 \u4e5f\u4e0d\u662f 0.8\uff0c\u662f\u4ec0\u4e48\u95ee\u9898\u5bfc\u81f4\u8fd9\u4e9b\u8bef\u5dee\u7684\u5462\uff1f"),(0,a.kt)("h4",{id:"2-\u95ee\u9898\u539f\u56e0"},"2. \u95ee\u9898\u539f\u56e0"),(0,a.kt)("p",null,"\u6211\u4eec\u77e5\u9053\u8ba1\u7b97\u673a\u53ea\u4f1a\u8fdb\u884c\u4e8c\u8fdb\u5236\u8ba1\u7b97\uff0c\u6240\u4ee5\u5341\u8fdb\u5236\u9700\u8981\u8f6c\u6362\u6210\u4e8c\u8fdb\u5236\u3002\u4f46\u6709\u4e00\u4e2a\u95ee\u9898\uff0c\u5341\u8fdb\u5236\u5c0f\u6570\u90e8\u5206\u5982\u679c\u8f6c\u6362\u6210\u4e8c\u8fdb\u5236\uff0c\u4f1a\u5b58\u5728",(0,a.kt)("strong",{parentName:"p"},"\u65e0\u9650\u5faa\u73af"),"\u7684\u60c5\u51b5"),(0,a.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,a.kt)("p",null,"0.3 \u8f6c\u6362\u4e3a\u4e8c\u8fdb\u5236"),(0,a.kt)("img",{src:n(7353).Z,width:"300"}),(0,a.kt)("p",null,"0.1 \u8f6c\u6362\u4e3a\u4e8c\u8fdb\u5236"),(0,a.kt)("img",{src:n(3201).Z,width:"300"}),(0,a.kt)("p",null,"\u4e8c\u8fdb\u5236\u5c0f\u6570\u5b58\u5728\u65e0\u9650\u5faa\u73af\uff0c\u800c\u8ba1\u7b97\u673a\u7684\u5b58\u50a8\u7a7a\u95f4\u662f\u6709\u9650\u7684\uff0c\u4e0d\u53ef\u80fd\u65e0\u9650\u7684\u5b58\u50a8\u4e0b\u53bb\uff0c\u6240\u4ee5\u53ea\u80fd\u5b58\u50a8\u4e00\u90e8\u5206\u957f\u5ea6\uff0c\u4e5f\u5c31\u662f\u8bf4",(0,a.kt)("strong",{parentName:"p"},"\u65e0\u9650\u5faa\u73af\u90e8\u5206\u4f1a\u88ab\u622a\u65ad"),"\uff0c\u5b58\u50a8\u8d77\u6765\u7684\u5c06\u4f1a\u662f\u4e00\u4e2a",(0,a.kt)("strong",{parentName:"p"},"\u8fd1\u4f3c\u503c")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/IEEE_754"},"IEEE 754 \u6807\u51c6"),"\u4e0b\u5c0f\u6570\u90e8\u5206\u957f\u5ea6\u6700\u5927\u4e3a 52 \u4f4d\uff0c\u5982\u679c\u7b2c 53 \u4f4d\u4e3a 1 \u4f1a\u8fdb\u884c\u56db\u820d\u4e94\u5165\uff0c\u5176\u4ed6\u60c5\u51b5\u4f1a\u76f4\u63a5\u622a\u65ad")),(0,a.kt)("p",null,"\u4e5f\u5c31\u662f\u8bf4 ",(0,a.kt)("strong",{parentName:"p"},"0.1(\u5341\u8fdb\u5236 0.1) \u2248 00111111 10111001 10011001 10011001 10011001 10011001 10011001 10011010(64 \u7cbe\u5ea6\u4e0b\u50a8\u5b58\u7684\u4e8c\u8fdb\u5236 0.1)")),(0,a.kt)("p",null,"\u4e24\u4e2a",(0,a.kt)("strong",{parentName:"p"},"\u8fd1\u4f3c\u503c"),"\u76f8\u52a0\u5f97\u51fa\u6765\u4e5f\u4f1a\u662f\u4e00\u4e2a",(0,a.kt)("strong",{parentName:"p"},"\u8fd1\u4f3c\u503c"),"\uff0c\u81ea\u7136\u4f1a\u5b58\u5728\u504f\u5dee"),(0,a.kt)("h4",{id:"3-\u5c0f\u6570\u7684\u6700\u5c0f\u7cbe\u5ea6"},"3. \u5c0f\u6570\u7684\u6700\u5c0f\u7cbe\u5ea6"),(0,a.kt)("p",null,"\u6700\u5c0f\u7cbe\u5ea6\u6307\u7684\u662f\u6700\u540e\u4e00\u4f4d\u4e0a\u7684\u5355\u4f4d\u503c\uff0c\u4e5f\u5c31\u662f\u8bf4\u8981\u60f3\u77e5\u9053\u5c0f\u6570\u6700\u5c0f\u7cbe\u5ea6\uff0c\u5c31\u5fc5\u987b\u627e\u51fa",(0,a.kt)("strong",{parentName:"p"},"\u9664 0 \u548c\u8d1f\u6570\u5916"),"\u6700\u5c0f\u7684\u6570"),(0,a.kt)("p",null,"\u6309\u7167\u6807\u51c6\uff0c\u5c0f\u6570\u957f\u5ea6\u6700\u591a\u4e3a 52 \u4f4d\uff0c\u5c0f\u6570\u4f4d\u4e0e\u6574\u6570\u4f4d\u76f8\u53cd\uff0c\u8d8a\u5f80\u53f3\u4f4d\u6570\u4ee3\u8868\u7684\u6570\u8d8a\u5c0f\uff0c\u6240\u4ee5\u5c0f\u6570\u4f4d\u80fd\u8868\u793a\u7684\u6700\u5c0f\u6570\u4e3a\uff1a"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"00000000 00000000 00000000 00000000 00000000 00000000 0001")),(0,a.kt)("p",null,"\u4e5f\u5c31\u662f 2^-52(2 \u7684-52 \u6b21\u65b9)\uff0c\u8ba1\u7b97\u5668\u91cc\u7b97\u51fa\u7ed3\u679c\u4e3a"),(0,a.kt)("img",{src:n(1590).Z,width:"300"}),(0,a.kt)("p",null,"\u7ea6\u4e3a 2.22","*","10^-16\uff0c\u4e5f\u5c31\u662f\u8bf4\u7cbe\u786e\u5230\u5c0f\u6570\u70b9\u540e 15 \u4f4d\uff0c\u52a0\u4e0a\u4e2a\u4f4d\u6709\u6548\u4f4d\u6570\u4e3a 16 \u4f4d\u4e5f\u5c31\u662f\u6700\u5c0f\u7cbe\u5ea6"),(0,a.kt)("h4",{id:"4-\u4e3a\u4ec0\u4e48-0103-\u80fd\u5f97\u51fa-04"},"4. \u4e3a\u4ec0\u4e48 0.1+0.3 \u80fd\u5f97\u51fa 0.4\uff1f"),(0,a.kt)("p",null,"\u4e0a\u9762\u8bf4\u5230\u8fd1\u4f3c\u503c\u52a0\u8fd1\u4f3c\u503c\u8fd8\u662f\u4e2a\u8fd1\u4f3c\u503c\uff0c\u90a3\u4e3a\u4ec0\u4e48 js \u91cc\u5927\u90e8\u5206\u7684\u5c0f\u6570\u52a0\u51cf\u4e58\u9664\u5374\u80fd\u5f97\u5230\u51c6\u786e\u7684\u6570\u503c\uff0c\u6bd4\u5982 0.1 + 0.3 === 0.4\uff1f"),(0,a.kt)("p",null,"\u539f\u56e0\u5728\u4e8e\u53cc\u7cbe\u5ea6\u6d6e\u70b9\u6570\u662f\u6709\u6700\u5c0f\u7cbe\u5ea6\u7684\uff0c\u53ea\u80fd\u7cbe\u786e\u5230\u5341\u8fdb\u5236\u5c0f\u6570\u70b9\u540e 15 \u4f4d\uff0c\u518d\u5f80\u540e\u5c31\u662f\u4e0d\u51c6\u786e\u7684\u4e86\uff0c\u800c js \u7528\u4f7f\u7528\u540e 16 \u4f4d\u8fdb\u884c\u56db\u820d\u4e94\u5165\u5904\u7406"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7406\u8bba\u4e0a\uff1a0.1 + 0.3 \u2248 0.4"),(0,a.kt)("li",{parentName:"ul"},"\u7ecf\u8fc7 16 \u4f4d\u7cbe\u5ea6\u7684\u56db\u820d\u4e94\u5165\u540e\uff1a0.1 + 0.3 === 0.4")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7ed3\u679c\u7684\u8bef\u5dee\u5728 16 \u4f4d\u4e4b\u5916"),"\u6216\u8005",(0,a.kt)("strong",{parentName:"p"},"\u56db\u820d\u4e94\u5165\u540e\u5f97\u5230\u6b63\u786e\u7684\u7ed3\u679c"),"\uff0c\u8fd9\u5c31\u662f\u5927\u90e8\u5206\u5c0f\u6570\u80fd\u591f\u5f97\u51fa\u6b63\u786e\u7ed3\u679c\u7684\u539f\u56e0"))}m.isMDXComponent=!0},7353:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/10-5c3c4c2b94f480c298f1110144ede91c.png"},3201:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/11-1bc52cba12f2ac3646aa098ba581bd99.png"},1590:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/12-62a13cb38ac0a67368bf8385e9027a55.png"},6899:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/9-061f33fdb612b8de1b4eee25aa4492c8.png"}}]);