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
  <img class="icon" src="./github.png" />
  <span class="flex_label">
    Github：<a href="https://github.com/youniaogu" target="_blank">https://github.com/youniaogu</a>
  </span>
  <img class="icon" src="./university.png" />
  <span class="flex_label">学历：华南农业大学 统招本科 软件工程（2014.09 - 2018.06）</span>
</p>
<p class="flex_box mb10">
  <img class="icon" src="./location.png" />
  <span class="flex_label">所在地：广州</span>
  <img class="icon" src="./target.png" />
  <span class="flex_label">意向：高级前端开发（Remote/深圳/广州）</span>
</p>

<p class="flex_box mb3">
  <img class="icon" src="./skill.png" />专业技能：
</p>
<ul class="mb10">
  <li class="margin_left8">熟练掌握HTML5、CSS3、Javascript、HTTP、Chrome调试等前端基础</li>
  <li class="margin_left8">熟练掌握React及Redux-Toolkit、Redux-saga等生态库</li>
  <li class="margin_left8">熟练使用React-Native、React-Navigation、Native-Base(类Tailwind CSS)进行跨平台开发</li>
  <li class="margin_left8">熟练使用Typescript、Webpack、Rollup、Esbuild、CI/CD进行项目构建和部署</li>
  <li class="margin_left8">熟悉微信小程序、SSR(Nextjs)的开发以及Nodejs的使用提升开发效率</li>
</ul>

<p class="flex_box mb3">
  <img class="icon" src="./working.png" />工作经历：
</p>
<ul class="mb10">
  <li class="margin_left8">2022.03 ~ 至今 　 　 Chatlabs</li>
  <li class="margin_left8">2020.05 ~ 2021.10 　贝壳找房</li>
  <li class="margin_left8">2018.06 ~ 2019.12 　 西碧信息</li>
</ul>

<p class="flex_box mb5">
  <img class="icon" src="./project.png" />项目经历：
</p>
<p class="flex_box mb5">MangaReader</p>
<ul class="mb10">
  <li class="margin_left8">开源项目(https://github.com/youniaogu/MangaReader)，可以在这里了解我的代码质量和风格</li>
</ul>

<p class="flex_box mb5">善贝GO</p>
<ul class="mb10">
  <li class="margin_left8">公益捐步小程序，供贝壳员工、经纪人使用。由贝壳公益出资，将捐赠步数转化为一定的金额，捐助给山区小学，并奖励用户相应贝壳币</li>
  <li class="margin_left8">项目设计、搭建与开发，主要有打包编译Redux到小程序npm中使用，劫持Component生命周期封装Connect响应数据变化，通过Storage封装出Cookies</li>
  <li class="margin_left8">原生小程序、Redux、Redux-saga、Reselect、Rollup、Babel</li>
</ul>

<p class="flex_box mb5">链家市占</p>
<ul class="mb10">
  <li class="margin_left8">地图类项目，核心是将链家近10年手工收录的房源和交易信息呈现在地图上，为经纪人、经理提供技术支持。有着一套完整的数据录入、筛选、修正、发布的后台系统</li>
  <li class="margin_left8">接手项目并优化，本地缓存接口数据，绘制由Dom改为Canvas，局部绘制提升性能，同时完成相应业务需求</li>
  <li class="margin_left8">IndexedDB、Canvas、React、Redux、Redux-thunk、Antd</li>
</ul>

<p class="flex_box mb5">蓝海行动</p>
<ul class="mb10">
  <li class="margin_left8">移动端H5项目，上线在贝壳找房App内，目的是为了鼓励用户和经纪人积极使用VR看房功能，只要在App内使用VR看房相关功能，就可以在蓝海行动里收取相应能量进行种树并兑换贝壳币</li>
  <li class="margin_left8">H5对接链家sdk、部分需求开发以及可视化后台开发，前后台均使用Typescript</li>
  <li class="margin_left8">Typescript、React、Redux、Redux-saga、vw适配、Antd、Echarts</li>
</ul>

<p class="flex_box mb5">CB优选</p>
<ul class="mb10">
  <li class="margin_left8">微信电商平台，主营美妆相关，根据消费额度和邀新数量，将用户进行分级管理，给予不同的分佣返利，鼓励用户通过各种活动拉新裂变，有公众号和小程序，以及对应的权限、活动、仓储等管理后台</li>
  <li class="margin_left8">主要负责电商管理后台需求开发，以及旧后台迁移(Vue＝>React)，其次官网更新以及H5小程序业务开发</li>
  <li class="margin_left8">React、Redux、Redux-saga、Antd、rem适配</li>
</ul>
