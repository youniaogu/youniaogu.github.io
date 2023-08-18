"use strict";(self.webpackChunkyouniaogu=self.webpackChunkyouniaogu||[]).push([[3493],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),u=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=u(e.components);return o.createElement(l.Provider,{value:n},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},h=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=u(t),h=i,d=s["".concat(l,".").concat(h)]||s[h]||c[h]||a;return t?o.createElement(d,r(r({ref:n},m),{},{components:t})):o.createElement(d,r({ref:n},m))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=h;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[s]="string"==typeof e?e:i,r[1]=p;for(var u=2;u<a;u++)r[u]=t[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},3074:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var o=t(7462),i=(t(7294),t(3905));const a={title:"input \u9650\u5236\u8f93\u5165",authors:"youniaogu",date:new Date("2020-08-28T00:00:00.000Z"),tags:[]},r=void 0,p={permalink:"/blog/how_to_limit_in_react_input",editUrl:"https://github.com/youniaogu/youniaogu.github.io/blog/how_to_limit_in_react_input.md",source:"@site/blog/how_to_limit_in_react_input.md",title:"input \u9650\u5236\u8f93\u5165",description:"input \u9650\u5236\u8f93\u5165",date:"2020-08-28T00:00:00.000Z",formattedDate:"2020\u5e748\u670828\u65e5",tags:[],readingTime:2.335,hasTruncateMarker:!1,authors:[{name:"youniaogu",title:"\u4f5c\u8005",url:"https://github.com/youniaogu",email:"youniaogu2023@gmail.com",imageURL:"https://github.com/youniaogu.png",key:"youniaogu"}],frontMatter:{title:"input \u9650\u5236\u8f93\u5165",authors:"youniaogu",date:"2020-08-28T00:00:00.000Z",tags:[]},prevItem:{title:"\u4e3a\u4ec0\u4e48\u7528 fetch\uff1f",permalink:"/blog/why_fetch"},nextItem:{title:"\u5982\u4f55\u5b9e\u73b0 Redux",permalink:"/blog/how_to_implement_redux"}},l={authorsImageUrls:[void 0]},u=[{value:"input \u9650\u5236\u8f93\u5165",id:"input-\u9650\u5236\u8f93\u5165",level:3},{value:"1. \u95ee\u9898",id:"1-\u95ee\u9898",level:4},{value:"2. \u89e3\u51b3\u65b9\u6cd5",id:"2-\u89e3\u51b3\u65b9\u6cd5",level:4},{value:"3. \u601d\u8def",id:"3-\u601d\u8def",level:4}],m={toc:u},s="wrapper";function c(e){let{components:n,...t}=e;return(0,i.kt)(s,(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"input-\u9650\u5236\u8f93\u5165"},"input \u9650\u5236\u8f93\u5165"),(0,i.kt)("h4",{id:"1-\u95ee\u9898"},"1. \u95ee\u9898"),(0,i.kt)("p",null,"\u5f88\u591a\u65f6\u5019\u9700\u8981\u5bf9 input \u8fdb\u884c\u8f93\u5165\u7684\u9650\u5236\uff0c\u6bd4\u5982\u53ea\u5141\u8bb8\u8f93\u5165\u6570\u5b57\u3001\u82f1\u6587\u5b57\u6bcd\u548c\u4e2d\u6587\uff0c\u4e0d\u5141\u8bb8\u8f93\u5165\u7279\u6b8a\u5b57\u7b26\uff0c\u53c8\u6216\u8005\u9650\u5236\u957f\u5ea6\u7b49"),(0,i.kt)("p",null,"\u7b2c\u4e00\u6b21\u63a5\u89e6\u7684\u4eba\u53ef\u80fd\u4f1a\u7b80\u5355\u7684\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"onChange"),"\u91cc",(0,i.kt)("inlineCode",{parentName:"p"},"replace")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'handleInputChange = evt => {\n  const { name, value } = evt.target\n\n  this.setState({\n    [name]: value.replace(/[^\\u4e00-\\u9fa50-9a-zA-Z]/g, ""); //\u9664\u6570\u5b57\u3001\u82f1\u6587\u5b57\u6bcd\u548c\u4e2d\u6587\u5916\u90fd\u66ff\u6362\u4e3a\u2018\u2019\n  })\n}\n\n<input name="name" value={name} onChange={this.handleInputChange} />\n')),(0,i.kt)("p",null,"\u8fd9\u6837\u5199\u7684\u8bdd\uff0c\u5982\u679c\u6d89\u53ca\u5230\u8f93\u5165\u6cd5\u65f6\u4f1a\u51fa\u73b0\u9519\u8bef"),(0,i.kt)("p",null,"\u56e0\u4e3a\u8f93\u5165\u6cd5\u952e\u5165\u662f\u4e00\u4e2a\u8fc7\u7a0b\uff0c\u800c React \u4e2d\u6bcf\u6b21\u952e\u5165\u90fd\u4f1a\u89e6\u53d1",(0,i.kt)("inlineCode",{parentName:"p"},"onChange"),"\uff0c\u8fc7\u7a0b\u4e2d\u8f93\u5165\u6cd5\u7684\u4e00\u4e9b\u952e\u5165\u88ab",(0,i.kt)("inlineCode",{parentName:"p"},"replace"),"\u53bb\u9664\u540e\uff0c\u5c31\u4f1a\u5bfc\u81f4\u9519\u8bef\u7684\u60c5\u51b5"),(0,i.kt)("h4",{id:"2-\u89e3\u51b3\u65b9\u6cd5"},"2. \u89e3\u51b3\u65b9\u6cd5"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/CompositionEvent"},"Composition Events"),"\uff08\u7ec4\u6210\u4e8b\u4ef6\uff09\u91cc\u9762\u6709",(0,i.kt)("inlineCode",{parentName:"p"},"onCompositionStart onCompositionUpdate onCompositionEnd"),"\u4e09\u4e2a\u4e8b\u4ef6\u5206\u522b\u4ee3\u8868 \u5f00\u59cb\u8f93\u5165\u5408\u6210\u3001\u8f93\u5165\u5408\u6210\u66f4\u65b0\u3001\u8f93\u5165\u5408\u6210\u7ed3\u675f"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"onCompositionStart"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"onCompositionEnd"),"\u4e0e",(0,i.kt)("inlineCode",{parentName:"p"},"onChange"),"\u7684\u6267\u884c\u987a\u5e8f\u6709\u4e24\u79cd\u60c5\u51b5\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u6b63\u5e38\u60c5\u51b5\u4e0b\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"onCompositionStart")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"onCompositionEnd")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"onChange")),(0,i.kt)("li",{parentName:"ol"},"chrome \u6216 IOS \u7248\u672c 10.3 \u53ca\u4ee5\u540e\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"onCompositionStart")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"onChange")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"onCompositionEnd"))),(0,i.kt)("h4",{id:"3-\u601d\u8def"},"3. \u601d\u8def"),(0,i.kt)("p",null,"\u5c06",(0,i.kt)("inlineCode",{parentName:"p"},"formatter"),"\u90e8\u5206\u5355\u72ec\u62ff\u51fa\u6765\uff0c\u5f53\u5904\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"onCompositionStart"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"onCompositionUpdate"),"\u72b6\u6001\u65f6\u4e0d\u89e6\u53d1",(0,i.kt)("inlineCode",{parentName:"p"},"formatter")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'import React from "react";\n\nisChrome = () => {\n  return !!window.chrome;\n};\nIOSVer = () => {\n  const match = window.navigator.userAgent.match(/\\d[\\d]*_\\d[_\\d]*/i);\n  if (match) {\n    return parseFloat(match[0].split("-").join("."));\n  }\n  return null;\n};\n\nfunction Input(props) {\n  this.onComposition = true;\n  this.isChrome = isChrome();\n  this.IOSver = IOSVer();\n\n  handleInputChange = (evt) => {\n    const { name, onChange, formatter } = this.props;\n\n    if (typeof onChange === "function") {\n      let value = evt.target.value;\n      if (this.onComposition && formatter) {\n        value = formatter(value);\n      }\n\n      onChange({ target: { value, name } });\n    }\n  };\n  const handleComposition = (evt) => {\n    if (evt.type === "compositionend") {\n      this.onComposition = true;\n\n      if (this.isChrome || (this.IOSVer && this.IOSVer >= 10.3)) {\n        this.handleInputChange(evt);\n      }\n    } else {\n      this.onComposition = false;\n    }\n  };\n\n  const { children, onChange, formatter, ...otherProps } = props;\n\n  return (\n    <input\n      {...otherProps}\n      onChange={this.handleInputChange}\n      onCompositionStart={this.handleComposition}\n      onCompositionUpdate={this.handleComposition}\n      onCompositionEnd={this.handleComposition}\n    />\n  );\n}\n\nexport default Input;\n')),(0,i.kt)("p",null,"\u6ce8\u610f\u7684\u70b9\uff1a\u56e0\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"formatter"),"\u90e8\u5206\u662f\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"onChange"),"\u91cc\u6267\u884c\uff0c\u6240\u4ee5\u7b2c\u4e8c\u79cd\u60c5\u51b5\u4e0b",(0,i.kt)("inlineCode",{parentName:"p"},"onCompositionEnd"),"\u540e\u9700\u8981\u624b\u52a8\u89e6\u53d1",(0,i.kt)("inlineCode",{parentName:"p"},"onChange")))}c.isMDXComponent=!0}}]);