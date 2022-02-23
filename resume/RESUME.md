---
puppeteer:
  margin:
    { top: "0.25 in", right: "0.25 in", bottom: "0.25 in", left: "0.25 in" }
---

<style type="text/css" rel="stylesheet">
  .box_flex {
    display: flex;
    align-items: center;
    position: relative;
  }
  .float_text {
    word-break: break-word;
  }
  .float_text > img {
    float: left;
  }
  .icon {
    width: 24px;
    padding: 0 3px 0 0;
  }
  .font_size15 {
    font-size: 15px;
  }
  .margin_bottom3 {
    margin: 0 0 3px 0;
  }
  .margin_bottom5 {
    margin: 0 0 5px 0;
  }
  .margin_bottom8 {
    margin: 0 0 8px 0;
  }
  .margin_bottom10 {
    margin: 0 0 8px 0;
  }
  .margin_left8 {
    margin: 0 0 0 -8px;
  }
</style>

<p class="box_flex margin_bottom10">
  <img class="icon" src="./name.png" />
  <span class="font_size15">姓名： XXX（X）　</span>
  <img class="icon" src="./email.png" />
  <span class="font_size15">邮箱： XXXXXXXXXXXX　</span>
  <img class="icon" src="./phone.png" />
  <span class="font_size15">联系方式： XXXXXXXXXXX</span>
</p>
<p class="box_flex margin_bottom10">
  <img class="icon" src="./github.png" style="vertical-align: bottom;" />
  <span class="font_size15">
    博客： <a href="https://jigu.gitbook.io/jigus-blog/" target="_blank">https://jigu.gitbook.io/jigus-blog/　</a>
  </span>
  <img class="icon" src="./university.png" />
  <span class="font_size15">学历：XXXX大学 软件工程（xxxx.xx - xxxx.xx）</span>
</p>

<p class="float_text margin_bottom10">
  <img class="icon" src="./puzzle.png" />简介：
  <span class="font_size15"> 三年前端，React技术栈，熟练管理后台、H5以及微信小程序的开发。动手能力强，喜欢学习与分享</span>
</p>
<ul class="margin_bottom10">
  <li class="margin_left8">熟练掌握 HTML5、CSS3、Javascript、ES6</li>
  <li class="margin_left8">熟练掌握 React、Redux、React-redux、Redux-saga、React-router</li>
  <li class="margin_left8">熟悉 Antd组件库，Flex、Grid布局以及移动端适配</li>
  <li class="margin_left8">熟悉 Typescript、Rollup、微信小程序，实际项目中使用并上线</li>
  <li class="margin_left8">了解 Webpack、Vue、Node、Nextjs、React-Native</li>
</ul>

<p class="box_flex margin_bottom3">
  <img class="icon" src="./working.png" />工作经历：
</p>
<ul class="margin_bottom10">
  <li class="margin_left8">2020.05 ~ 2021.10 　前端开发 　贝壳找房</li>
  <li class="margin_left8">2018.06 ~ 2019.12 　前端开发 　西碧信息</li>
</ul>

<p class="box_flex margin_bottom5">
  <img class="icon" src="./project.png" />项目经历：<img class="icon" src="./one.png" />善贝GO
</p>
<p class="margin_bottom5">
  项目介绍：<span class="font_size15">公益捐步小程序，供贝壳员工、经纪人使用。由贝壳公益出资，将捐赠步数转化为一定的金额，捐助给山区小学，并奖励用户相应贝壳币
  </span>
</p>
<p class="margin_bottom5">
  我的职责：<span class="font_size15">项目设计、搭建与开发，主要有打包编译Redux到小程序npm中使用，劫持Component生命周期封装Connect响应数据变化，通过Storage封装出Cookies</span>
</p>
<p class="margin_bottom10">
  技术栈：<span class="font_size15">原生小程序、Redux、Redux-saga、Reselect、Rollup、Babel</span>
</p>

<p class="box_flex margin_bottom5">
  <img class="icon" src="./two.png" />链家市占
</p>
<p class="margin_bottom5">
  项目介绍：<span class="font_size15">地图类项目，核心是将链家近10年手工收录的房源和交易信息呈现在地图上，为经纪人、经理提供技术支持。有着一套完整的数据录入、筛选、修正、发布的后台系统</span>
</p>
<p class="margin_bottom5">
  我的职责：<span class="font_size15">接手项目并优化，本地缓存接口数据，绘制由Dom改为Canvas，局部绘制提升性能，同时完成相应业务需求</span>
</p>
<p class="margin_bottom10">
  技术栈：<span class="font_size15">IndexedDB、Canvas、React、Redux、Redux-thunk、Antd</span>
</p>

<p class="box_flex margin_bottom5">
  <img class="icon" src="./three.png" />蓝海行动
</p>
<p class="margin_bottom5">
  项目介绍：<span class="font_size15">移动端H5项目，上线在贝壳找房App内，目的是为了鼓励用户和经纪人积极使用VR看房功能，只要在App内使用VR看房相关功能，就可以在蓝海行动里收取相应能量进行种树并兑换贝壳币</span>
</p>
<p class="margin_bottom5">
  我的职责：<span class="font_size15">H5对接链家sdk、部分需求开发以及可视化后台开发，前后台均使用Typescript</span>
</p>
<p class="margin_bottom10">
  技术栈：<span class="font_size15">Typescript、React、Redux、Redux-saga、vw适配、Antd、Echarts</span>
</p>

<p class="box_flex margin_bottom5">
  <img class="icon" src="./four.png" />CB优选
</p>
<p class="margin_bottom5">
  项目介绍：<span class="font_size15">微信电商平台，主营美妆相关，根据消费额度和邀新数量，将用户进行分级管理，给予不同的分佣返利，鼓励用户通过各种活动拉新裂变，有公众号和小程序，以及对应的权限、活动、仓储等管理后台
  </span>
</p>
<p class="margin_bottom5">
  我的职责：<span class="font_size15">主要负责电商管理后台需求开发，以及旧后台迁移(Vue＝>React)，其次官网更新以及H5小程序业务开发</span>
</p>
<p class="margin_bottom10">
  技术栈：<span class="font_size15">React、Redux、Redux-saga、Antd、rem适配</span>
</p>
