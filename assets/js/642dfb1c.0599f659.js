"use strict";(self.webpackChunkyouniaogu=self.webpackChunkyouniaogu||[]).push([[297],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(u,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6432:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={title:"\u8fd4\u56de\u51fd\u6570\u7684\u51fd\u6570",authors:"youniaogu",date:new Date("2020-06-27T00:00:00.000Z"),tags:[]},o=void 0,l={permalink:"/blog/2020/06/27/function_return_function",editUrl:"https://github.com/youniaogu/youniaogu.github.io/blog/2020-06-27-function_return_function.md",source:"@site/blog/2020-06-27-function_return_function.md",title:"\u8fd4\u56de\u51fd\u6570\u7684\u51fd\u6570",description:"\u8fd4\u56de\u51fd\u6570\u7684\u51fd\u6570",date:"2020-06-27T00:00:00.000Z",formattedDate:"2020\u5e746\u670827\u65e5",tags:[],readingTime:1.765,hasTruncateMarker:!1,authors:[{name:"youniaogu",title:"\u4f5c\u8005",url:"https://github.com/youniaogu",email:"youniaogu2023@gmail.com",imageURL:"https://github.com/youniaogu.png",key:"youniaogu"}],frontMatter:{title:"\u8fd4\u56de\u51fd\u6570\u7684\u51fd\u6570",authors:"youniaogu",date:"2020-06-27T00:00:00.000Z",tags:[]},prevItem:{title:"\u4ec0\u4e48\u662f Reselect",permalink:"/blog/2020/06/30/what_is_reselect"},nextItem:{title:"\u5982\u4f55\u5b9a\u4e49 Action type",permalink:"/blog/2020/06/27/how_to_definition_action_type"}},u={authorsImageUrls:[void 0]},c=[{value:"\u8fd4\u56de\u51fd\u6570\u7684\u51fd\u6570",id:"\u8fd4\u56de\u51fd\u6570\u7684\u51fd\u6570",level:3},{value:"\u9898\u5916\u8bdd",id:"\u9898\u5916\u8bdd",level:4}],p={toc:c},d="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u8fd4\u56de\u51fd\u6570\u7684\u51fd\u6570"},"\u8fd4\u56de\u51fd\u6570\u7684\u51fd\u6570"),(0,a.kt)("p",null,"\u51fd\u6570\u91cc\u80fd\u591f\u8fd4\u56de\u51fd\u6570\u662f js \u4e00\u4e2a\u5f88\u91cd\u8981\u7684\u6280\u5de7\uff0c\u80fd\u8ba9\u6211\u4eec\u8282\u7701\u5f88\u591a\u4ee3\u7801\u7a7a\u95f4"),(0,a.kt)("p",null,"react \u91cc\u7ecf\u5e38\u9700\u8981\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"map"),"\u8fd4\u56de\u7684\u5143\u7d20\u91cc\u7ed1\u5b9a\u4e8b\u4ef6\uff0c\u8fd9\u79cd\u65f6\u5019\u6211\u4eec\u7ecf\u5e38\u4f1a\u4f7f\u7528\u8fd9\u4ee5\u6280\u5de7"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"handleClick = (index) => {\n  return () => {\n    console.log(index);\n  };\n};\n\nlist.map((obj, index) => {\n  return (\n    <div key={index} onClick={this.handleClick(index)}>\n      index\n    </div>\n  );\n});\n")),(0,a.kt)("p",null,"\u8fd9\u4e00\u6280\u5de7\u9700\u8981\u6d88\u8017\u8d44\u6e90\uff0c\u56e0\u4e3a\u6bcf\u6b21\u6267\u884c\u90fd\u8981\u521b\u5efa\u8fd4\u56de\u7684\u51fd\u6570\uff0c\u800c\u4e14\u6709\u53ef\u80fd\u4f7f\u7528\u5230\u95ed\u5305\u3002\u5f53\u5217\u8868\u6570\u636e\u7279\u522b\u591a\u65f6\uff0c\u8fd9\u79cd\u5f00\u9500\u4f1a\u653e\u5927\uff0c\u5bfc\u81f4 render \u901f\u5ea6\u4e0b\u964d"),(0,a.kt)("p",null,"\u6240\u4ee5\u5982\u679c\u4e0d\u662f\u7279\u522b\u4f9d\u8d56\u95ed\u5305\u7684\u8bdd\uff0c\u53ef\u4ee5\u628a\u6570\u636e\u6302\u5728 dom \u5143\u7d20\u4e0a\uff0c\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"event"),"\u5bf9\u8c61\u53bb\u83b7\u53d6\uff0c\u8fd9\u6837\u53ea\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u51fd\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"handleClick = (evt) => {\n  console.log(evt.currentTarget.dataset.index);\n};\n\nlist.map((obj, index) => {\n  return (\n    <div data-index={index} key={index} onClick={this.handleClick}>\n      index\n    </div>\n  );\n});\n")),(0,a.kt)("p",null,"\u6700\u540e\u8fd8\u53ef\u4ee5\u7528\u4e8b\u4ef6\u4ee3\u7406\u518d\u8fdb\u884c\u4f18\u5316"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"handleClick = evt => {\n  evt.preventDefault();\n  console.log(evt.target.dataset.index);\n};\n\n<div onClick={this.handleClick}>\n  list.map((obj, index) => {\n    return (\n      <div data-index={index} key={index}>\n        index\n      </div>\n    );\n  });\n</div>\n")),(0,a.kt)("h4",{id:"\u9898\u5916\u8bdd"},"\u9898\u5916\u8bdd"),(0,a.kt)("p",null,"\u5173\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"evt.target"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"evt.currentTarget"),"\u7684\u533a\u522b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"target"),"\u6307\u7684\u662f\u5f53\u524d\u89e6\u53d1\u4e8b\u4ef6\u7684\u5143\u7d20"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"currentTarget"),"\u6307\u7684\u662f\u7ed1\u5b9a\u4e8b\u4ef6\u7684\u5143\u7d20")),(0,a.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"handleClick = (evt) => {\n  console.log({\n    target: evt.target,\n    currentTraget: evt.currentTarget,\n  });\n};\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div class="wrapper" onClick="{this.handleClick}">\n  <p>dom1</p>\n</div>\n')),(0,a.kt)("p",null,"\u5f53\u70b9\u51fb dom1 \u65f6\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"target"),"\u4e3a p \u5143\u7d20\uff0c\u800c",(0,a.kt)("inlineCode",{parentName:"p"},"currentTarget"),"\u5219\u662f div \u5143\u7d20\uff0c\u56e0\u4e3a\u4e8b\u4ef6\u7ed1\u5b9a\u5728\u5b83\u4e0a\u9762"))}s.isMDXComponent=!0}}]);