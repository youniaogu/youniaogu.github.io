---
title: 更好的线性渐变背景
authors: youniaogu
date: 2021-06-25
tags: []
---

### 更好的线性渐变背景

做渐变背景，比如进度条时，只要把**背景的宽度撑满外部容器**，就能获得更好看的效果

```css
.inside {
  width: 30%;
  height: 16px;
  border-radius: 8px;
  background: linear-gradient(to right, #ff3737, #3939ff);
  background-size: 333.33%; //根据width动态计算出大小
}
```

##### 效果图：

<img src={require("./assets/screenshots/35.gif").default} width="720" />

线上地址：[https://youniaogu.github.io/react-demo/component](https://youniaogu.github.io/react-demo/component)
