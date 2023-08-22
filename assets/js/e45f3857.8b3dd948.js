"use strict";(self.webpackChunkyouniaogu=self.webpackChunkyouniaogu||[]).push([[546],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,d=m["".concat(u,".").concat(f)]||m[f]||s[f]||a;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4986:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={title:"\u9632\u6296\u548c\u8282\u6d41",authors:"youniaogu",date:new Date("2020-09-21T00:00:00.000Z"),tags:[]},l=void 0,i={permalink:"/blog/2020/09/21/debounce_and_throttle",editUrl:"https://github.com/youniaogu/youniaogu.github.io/blog/2020-09-21-debounce_and_throttle.md",source:"@site/blog/2020-09-21-debounce_and_throttle.md",title:"\u9632\u6296\u548c\u8282\u6d41",description:"\u9632\u6296\u548c\u8282\u6d41",date:"2020-09-21T00:00:00.000Z",formattedDate:"2020\u5e749\u670821\u65e5",tags:[],readingTime:1.66,hasTruncateMarker:!1,authors:[{name:"youniaogu",title:"\u4f5c\u8005",url:"https://github.com/youniaogu",email:"youniaogu2023@gmail.com",imageURL:"https://github.com/youniaogu.png",key:"youniaogu"}],frontMatter:{title:"\u9632\u6296\u548c\u8282\u6d41",authors:"youniaogu",date:"2020-09-21T00:00:00.000Z",tags:[]},prevItem:{title:"\u7f51\u683c\u5e03\u5c40",permalink:"/blog/2020/09/22/grid_layout"},nextItem:{title:"\u9762\u8bd5\u9898\u6c47\u603b",permalink:"/blog/2020/09/21/interview_questions"}},u={authorsImageUrls:[void 0]},c=[{value:"\u9632\u6296\u548c\u8282\u6d41",id:"\u9632\u6296\u548c\u8282\u6d41",level:3},{value:"1. \u9632\u6296",id:"1-\u9632\u6296",level:4},{value:"2. \u8282\u6d41",id:"2-\u8282\u6d41",level:4},{value:"3. \u6bd4\u8f83",id:"3-\u6bd4\u8f83",level:4},{value:"4. \u5e94\u7528\u573a\u666f",id:"4-\u5e94\u7528\u573a\u666f",level:4}],p={toc:c},m="wrapper";function s(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u9632\u6296\u548c\u8282\u6d41"},"\u9632\u6296\u548c\u8282\u6d41"),(0,o.kt)("p",null,"\u9632\u6296\u548c\u8282\u6d41\u662f js \u5904\u7406\u9ad8\u9891\u4e8b\u4ef6\u51fd\u6570\u65f6\u7ecf\u5e38\u4f1a\u7528\u5230\uff0c\u901a\u8fc7\u964d\u4f4e\u51fd\u6570\u7684\u6267\u884c\u6b21\u6570\u8fbe\u5230\u8282\u7ea6\u8d44\u6e90\u7684\u76ee\u7684\uff0c\u662f\u524d\u7aef\u5e38\u7528\u7684\u4e00\u79cd\u4f18\u5316\u624b\u6bb5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u9632\u6296\uff1a\u5ef6\u8fdf\u4e8b\u4ef6\u51fd\u6570\uff0cn \u79d2\u540e\u6267\u884c\uff0c\u5982\u679c n \u79d2\u5185\u4e8b\u4ef6\u53c8\u88ab\u89e6\u53d1\u65f6\u91cd\u65b0\u8ba1\u65f6"),(0,o.kt)("li",{parentName:"ul"},"\u8282\u6d41\uff1a\u4e8b\u4ef6\u51fd\u6570 n \u79d2\u5185\u53ea\u80fd\u6267\u884c\u4e00\u6b21\uff0c\u6267\u884c\u5b8c\u540e\u5012\u8ba1\u65f6\u5f00\u59cb")),(0,o.kt)("h4",{id:"1-\u9632\u6296"},"1. \u9632\u6296"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function debounce(timescope) {\n  return function (fn) {\n    let timeout = null;\n\n    return function () {\n      if (timeout) {\n        clearTimeout(timeout);\n      }\n\n      timeout = setTimeout(() => {\n        fn.apply(this, arguments);\n      }, timescope);\n    };\n  };\n}\n")),(0,o.kt)("h4",{id:"2-\u8282\u6d41"},"2. \u8282\u6d41"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function throttle(timescope) {\n  return function (fn) {\n    let cooldown = false;\n\n    return function () {\n      if (cooldown) {\n        return;\n      }\n\n      cooldown = true;\n      fn.apply(this.arguments);\n\n      setTimeout(() => {\n        cooldown = false;\n      }, timescope);\n    };\n  };\n}\n")),(0,o.kt)("h4",{id:"3-\u6bd4\u8f83"},"3. \u6bd4\u8f83"),(0,o.kt)("p",null,"\u9632\u6296\u548c\u8282\u6d41\u7684\u533a\u522b\u5728\u4e8e\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u662f\u5426\u5ef6\u8fdf\u4e8b\u4ef6\u51fd\u6570\u6267\u884c"),(0,o.kt)("li",{parentName:"ol"},"\u91cd\u590d\u89e6\u53d1\u4e8b\u4ef6\u51fd\u6570\u662f\u5426\u91cd\u65b0\u5012\u8ba1\u65f6")),(0,o.kt)("p",null,"\u76f8\u540c\u70b9\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u90fd\u662f\u4e3a\u4e86\u964d\u4f4e\u4e8b\u4ef6\u51fd\u6570\u6267\u884c\u7684\u9891\u7387")),(0,o.kt)("h4",{id:"4-\u5e94\u7528\u573a\u666f"},"4. \u5e94\u7528\u573a\u666f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"input \u6846\u9700\u8981\u6839\u636e\u8f93\u5165\u7684\u5185\u5bb9\u5b9e\u65f6\u67e5\u8be2\u7ed3\u679c\uff0c\u53ef\u4ee5\u5728\u8f93\u5165\u505c\u6b62\u4e00\u6bb5\u65f6\u95f4\u540e\u518d\u8fdb\u884c\u67e5\u8be2\uff0c\u8fd9\u662f\u9632\u6296"),(0,o.kt)("li",{parentName:"ul"},"\u70b9\u51fb\u6309\u94ae\u63d0\u4ea4\u8868\u5355\u65f6\uff0c\u4e3a\u4e86\u9632\u6b62\u91cd\u590d\u63d0\u4ea4\uff0c\u4e00\u6bb5\u65f6\u95f4\u5185\u6216\u8005\u5230\u63d0\u4ea4\u5b8c\u6210\u524d\u4e0d\u5141\u8bb8\u63d0\u4ea4\uff0c\u8fd9\u662f\u8282\u6d41")))}s.isMDXComponent=!0}}]);