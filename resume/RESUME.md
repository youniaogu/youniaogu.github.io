---
puppeteer:
  margin:
    { top: "0.15 in", right: "0.15 in", bottom: "0.15 in", left: "0.15 in" }
---

<style type="text/css" rel="stylesheet">
  * {
    font-size: 14px;
    font-family: PingFangSC-Semibold, sans-serif;
  }

  .icon {
    width: 24px;
    height: 24px;
    line-height: 24px;
    padding: 0 6px 0 0;
  }
  .flex_box {
    display: flex;
    align-items: center;
  }
  .flex_label {
    font-weight: bold;
    padding: 0 16px 0 0;
  }

  .float_text {
    word-break: break-word;
  }
  .float_text > .icon {
    float: left;
  }

  .mb3 {
    margin: 0 0 3px 0;
  }
  .mb5 {
    margin: 0 0 5px 0;
  }
  .mb8 {
    margin: 0 0 8px 0;
  }
  .mb10 {
    margin: 0 0 8px 0;
  }
  .margin_left8 {
    margin: 0 0 0 -8px;
  }
</style>

<p class="flex_box mb10">
  <img class="icon" src="./name.png" />
  <span class="flex_label">姓名：罗建平（男/27）</span>
  <img class="icon" src="./email.png" />
  <span class="flex_label">邮箱：youniaogu2023@gmail.com</span>
  <img class="icon" src="./phone.png" />
  <span class="flex_label">电话：137-1511-2475</span>
</p>
<p class="flex_box mb10">
  <img class="icon" src="./github.png" style="vertical-align: bottom;" />
  <span class="flex_label">
    Github：<a href="https://github.com/youniaogu" target="_blank">https://github.com/youniaogu</a>
  </span>
  <img class="icon" src="./university.png" />
  <span class="flex_label">华南农业大学 统招本科 软件工程（2014.09 - 2018.06）</span>
</p>
<p class="flex_box mb10">
  <img class="icon" src="./location.png" />
  <span class="flex_label">所在地：广州</span>
  <img class="icon" src="./target.png" />
  <span class="flex_label">意向：前端开发（Remote/深圳/广州）</span>
</p>

<!-- <p class="float_text mb10">
  <img class="icon" src="./puzzle.png" />我能做啥：
  <span class="flex_label"> 五年前端，React技术栈，熟练管理后台、H5以及微信小程序的开发。动手能力强，喜欢学习与分享</span>
</p> -->

<ul class="mb10">
  <li class="margin_left8">熟练掌握 HTML5、CSS3、Javascript、ES6</li>
  <li class="margin_left8">熟练掌握 React、Redux、React-redux、Redux-saga、React-router</li>
  <li class="margin_left8">熟悉 Antd组件库，Flex、Grid布局以及移动端适配</li>
  <li class="margin_left8">熟悉 Typescript、Rollup、微信小程序，实际项目中使用并上线</li>
  <li class="margin_left8">了解 Webpack、Vue、Node、Nextjs、React-Native</li>
</ul>

<p class="flex_box mb3">
  <img class="icon" src="./working.png" />工作 & 项目经历：
</p>
<ul class="mb10">
  <li class="margin_left8">2022.03 ~ 至今 　 　 前端开发 　Chatlabs</li>
  <li class="margin_left8">2020.05 ~ 2021.10 　前端开发 　贝壳找房</li>
  <li class="margin_left8">2018.06 ~ 2019.12 　前端开发 　西碧信息</li>
</ul>

<p class="flex_box mb5">
  <img class="icon" src="./project.png" />开源项目：MangaReader
</p>

<!-- <p class="flex_box mb5">
  <img class="icon" src="./project.png" />项目经历：<img class="icon" src="./one.png" />善贝GO
</p>
<p class="mb5">
  项目介绍：<span >公益捐步小程序，供贝壳员工、经纪人使用。由贝壳公益出资，将捐赠步数转化为一定的金额，捐助给山区小学，并奖励用户相应贝壳币
  </span>
</p>
<p class="mb5">
  我的职责：<span >项目设计、搭建与开发，主要有打包编译Redux到小程序npm中使用，劫持Component生命周期封装Connect响应数据变化，通过Storage封装出Cookies</span>
</p>
<p class="mb10">
  技术栈：<span >原生小程序、Redux、Redux-saga、Reselect、Rollup、Babel</span>
</p>

<p class="flex_box mb5">
  <img class="icon" src="./two.png" />链家市占
</p>
<p class="mb5">
  项目介绍：<span >地图类项目，核心是将链家近10年手工收录的房源和交易信息呈现在地图上，为经纪人、经理提供技术支持。有着一套完整的数据录入、筛选、修正、发布的后台系统</span>
</p>
<p class="mb5">
  我的职责：<span >接手项目并优化，本地缓存接口数据，绘制由Dom改为Canvas，局部绘制提升性能，同时完成相应业务需求</span>
</p>
<p class="mb10">
  技术栈：<span >IndexedDB、Canvas、React、Redux、Redux-thunk、Antd</span>
</p>

<p class="flex_box mb5">
  <img class="icon" src="./three.png" />蓝海行动
</p>
<p class="mb5">
  项目介绍：<span >移动端H5项目，上线在贝壳找房App内，目的是为了鼓励用户和经纪人积极使用VR看房功能，只要在App内使用VR看房相关功能，就可以在蓝海行动里收取相应能量进行种树并兑换贝壳币</span>
</p>
<p class="mb5">
  我的职责：<span >H5对接链家sdk、部分需求开发以及可视化后台开发，前后台均使用Typescript</span>
</p>
<p class="mb10">
  技术栈：<span >Typescript、React、Redux、Redux-saga、vw适配、Antd、Echarts</span>
</p>

<p class="flex_box mb5">
  <img class="icon" src="./four.png" />CB优选
</p>
<p class="mb5">
  项目介绍：<span >微信电商平台，主营美妆相关，根据消费额度和邀新数量，将用户进行分级管理，给予不同的分佣返利，鼓励用户通过各种活动拉新裂变，有公众号和小程序，以及对应的权限、活动、仓储等管理后台
  </span>
</p>
<p class="mb5">
  我的职责：<span >主要负责电商管理后台需求开发，以及旧后台迁移(Vue＝>React)，其次官网更新以及H5小程序业务开发</span>
</p>
<p class="mb10">
  技术栈：<span >React、Redux、Redux-saga、Antd、rem适配</span>
</p> -->
