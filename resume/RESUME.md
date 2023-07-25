---
puppeteer:
  margin:
    { top: "0.15 in", right: "0.20 in", bottom: "0.15 in", left: "0.20 in" }
---

<style type="text/css" rel="stylesheet">
  * {
    font-size: 14px;
    font-family: PingFangSC-Semibold, sans-serif;
  }

  .icon {
    width: 18px;
    height: 18px;
    line-height: 18px;
    padding: 0 6px 0 0;
  }
  .flex_box {
    display: flex;
    align-items: center;
  }
  .flex_label {
    font-weight: bold;
    padding: 0 12px 0 0;
  }

  .float_text {
    word-break: break-word;
  }
  .float_text > .icon {
    float: left;
  }

  .mb0 {
    margin: 0 0 0 0;
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

<p class="flex_box mb5">
  <img class="icon" src="./name.png" />
  <span class="flex_label">姓名：罗建平（男/27）</span>
  <img class="icon" src="./email.png" />
  <span class="flex_label">邮箱：youniaogu2023@gmail.com</span>
  <img class="icon" src="./phone.png" />
  <span class="flex_label">电话：137-1511-2475</span>
</p>
<p class="flex_box mb5">
  <img class="icon" src="./github.png" />
  <span class="flex_label">
    Github：<a href="https://github.com/youniaogu" target="_blank">https://github.com/youniaogu</a>
  </span>
  <img class="icon" src="./university.png" />
  <span class="flex_label">学历：华南农业大学 统招本科 软件工程（2014.09 - 2018.06）</span>
</p>
<p class="flex_box mb5">
  <img class="icon" src="./location.png" />
  <span class="flex_label">所在地：广州</span>
  <img class="icon" src="./target.png" />
  <span class="flex_label">意向：高级前端开发（Remote/深圳/广州）</span>
</p>

<p class="flex_box mb0">
  <img class="icon" src="./skill.png" />专业技能：
</p>
<ul class="mb5">
  <li class="margin_left8">熟练掌握HTML5、CSS3、Javascript、HTTP、Chrome调试等前端基础</li>
  <li class="margin_left8">熟练掌握React及Redux-Toolkit、Redux-saga等生态库</li>
  <li class="margin_left8">熟练使用React-Native、React-Navigation、Native-Base(类TailwindCSS)进行跨平台开发</li>
  <li class="margin_left8">熟练使用Typescript、Webpack、Rollup、Esbuild、CI/CD进行项目构建和部署</li>
  <li class="margin_left8">熟悉微信小程序、SSR(Nextjs)的开发以及Nodejs的使用提升开发效率</li>
</ul>

<p class="flex_box mb0">
  <img class="icon" src="./working.png" />工作经历：
</p>
<ul class="mb5">
  <li class="margin_left8">2022.03 ～ 至今 　 　 Chatlabs</li>
  <li class="margin_left8">2020.05 ～ 2021.10 　贝壳找房</li>
  <li class="margin_left8">2018.06 ～ 2019.12 　 西碧信息</li>
</ul>

<p class="flex_box mb0">
  <img class="icon" src="./project.png" />项目经历：
</p>
<p class="flex_box mb0">MangaReader（Github开源 - 2022-04 ～ 至今）</p>
<ul class="mb5">
  <li class="margin_left8">漫画App，主要从网上抓取免费资源并呈现，插件式设计且适用十个漫画网站，全数据本地离线化处理。支持收藏、分类搜索、批量更新、备份恢复，漫画下载和导出、无限翻页等。</li>
  <li class="margin_left8">基于React-Native开发，兼容Ios、Android并适配平板。全Typescript支持，使用类TailwindCss进行主题设计，使用Redux-saga进行任务队列控制。</li>
  <li class="margin_left8">独立开发的开源项目(https://github.com/youniaogu/MangaReader)，可以在这里了解我的代码风格和质量。</li>
</ul>

<p class="flex_box mb0">微信CRM平台（ChatLabs - 2022.03 ～ 至今）</p>
<ul class="mb5">
  <li class="margin_left8">项目主要是与Saleforce合作给海外客户提供微信营销和运营的能力，以及数据上报、数据整合、数据引渡等功能</li>
  <li class="margin_left8">主要负责开发和维护多个基于Umi搭建的Web项目，使用i18next中英文切换并使用node脚本导出未翻译文本，使用openapi转换swagger文档为FetchType，并接入到现有fetch中</li>
  <li class="margin_left8">其次负责构建和开发Layout组件，供多个业务系统使用，涉及登录授权对接，Rollup双打包（分为React组件和纯JS），使用Node打Tag并发布至Bitbucket</li>
</ul>

<p class="flex_box mb0">善贝GO（贝壳找房 - 2021.03 ～ 2021.10）</p>
<ul class="mb5">
  <li class="margin_left8">微信公益类小程序，每日累积并捐赠步数转化为一定的金额，捐助给山区小学，并奖励用户相应贝壳币</li>
  <li class="margin_left8">负责项目搭建与开发，主要有Rollup打包编译Redux业务逻辑到miniprogram_npm中，劫持Component生命周期封装Connect响应数据变化，通过Storage封装出Cookies</li>
</ul>

<p class="flex_box mb0">蓝海行动（贝壳找房 - 2020.10 ～ 2021.03）</p>
<ul class="mb5">
  <li class="margin_left8">Hybrid项目，上线贝壳找房、Link、A+内，鼓励用户和经纪人使用VR看房，使用VR看房就可以在蓝海行动里收取相应能量进行红海种树或兑换贝壳币换取实物奖励</li>
  <li class="margin_left8">负责对接链家SDK、部分需求开发以及可视化后台开发，</li>
</ul>

<p class="flex_box mb0">链家市占（贝壳找房 - 2020.05 ～ 2021.10）</p>
<ul class="mb5">
  <li class="margin_left8">地图类项目，核心是将链家近10年收录的房源和交易信息呈现在地图上，为经纪人、经理提供技术支持，并且有着一套完整的数据录入、筛选、修正、发布的后台系统</li>
  <li class="margin_left8">主要负责前台地图性能优化，使用IndexedDB本地缓存数据，可交互信息由Dom改为Canvas绘制，事件处理根据相对坐标计算统一完成，并增加局部绘制，同时兼具后台需求开发</li>
</ul>

<p class="flex_box mb0">CB优选（西碧信息 - 2018.06 ～ 2019.12）</p>
<ul class="mb0">
  <li class="margin_left8">微信电商平台，主营美妆相关，根据消费额度和邀新数量，将用户进行分级管理，给予不同的分佣返利，鼓励用户通过各种活动拉新裂变，有公众号H5和小程序，以及对应的权限、活动、仓储等管理后台</li>
  <li class="margin_left8">负责旧后台迁移（Vue=>React）和新后台的维护和开发和SSR官网更新以及公众号H5和小程序需求开发</li>
</ul>
