---
title: typescript 实践心得
authors: youniaogu
date: 2020-11-09
tags: []
---

### typescript 实践心得

先说下总结：

> 1. typescript 的静态检查能够规避很多错误，越用越香。
>
> 2. 类型检查需要环环相扣，如果运用不当，将会成为如梗在喉般的存在
>
> 3. redux 的单一数据源思想与 typescript 十分搭配

#### 1. 前言

几个月前我开始学习 typescript，并将其运用到项目中，这篇文章主要用来记录实战过程中一些心得，主要围绕 redux 状态与 typescript 来讲述

tips：在开发项目前，建议先查阅去相关库文档（比如：[redux](https://redux.js.org/recipes/usage-with-typescript)），可能会有一些关于 typescript 的教程

#### 2. 项目搭建

使用`cra`搭建，因为开发进度紧急，没有多余的时间来研究`webpack`和`babel`配置（而且我相信`cra`做的肯定比我好）

#### 3. connect 和 typescript

在 typescript 中，`react.component`需要定义`props`和`state`的类型，所以在使用`connect`的情况下，需要对传递的`props`进行类型定义

`mapStateToProps`为函数类型，`mapDispatchToProps`为对象类型，所以最好的办法是使用范型工具`ReturnType`和`typeof`

```javascript
type PropsTypes = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & { ... };

const mapStateToProps = function (state: RootTypes) { return state.app };
const mapDispatchToProps = { launch };

class App extends component<PropsTypes> { ... };
```

上面例子的`RootTypes`指`redux`中整个`state`的类型，下面就来介绍如何获取它

#### 4. reducer 和 typescript

`reducer`作为纯函数，用`ReturnType`很简单就可以获得返回的类型

```javascript
import { combineReducers } from "redux";

export function launch() {
  return {
    type: "LAUNCH",
  };
}
export function launchCompletion(error: Error | undefined) {
  return {
    type: "LAUNCH_COMPLETION",
    error,
  };
}

const initialState: 0 | 1 | 2 = 0;
function appReducer(state = initialState, action): typeof initialState {
  switch (action.type) {
    case "LAUNCH": {
      return 1;
    }
    case "LAUNCH_COMPLETION": {
      if (action.error) {
        return 0;
      }
      return 2;
    }
    default:
      return state;
  }
}
const rootReducer = combineReducers({ app: appReducer });

export type RootTypes = ReturnType<typeof rootReducer>;
export default rootReducer;
```

注意`appReducer`方法必须定义返回的类型，如下

```javascript
function appReducer(state = initialState, action): typeof initialState { ... }
```

**如何不定义，返回的类型将会是`never`!**

上面的`reducer`虽然能返回正确的`RootTypes`，**但`action`还没有定义**，`action`的类型为`any`，这样`RootTypes`将毫无意义，因为`case`里可以随意修改返回的`state`，**所以为`action`添加类型尤为重要**

`action creator`为函数类型，所以只需要将`action creator`返回的类型导出，然后导入到`reducer`里，为`action`提供类型

```javascript
...
export function launch() { ... }
export function launchCompletion() { ... }
const initialState: 0 | 1 | 2 = 0;
function appReducer(state = initialState, action): typeof initialState {
  switch (action.type) {
    case "LAUNCH": { ... }
    case "LAUNCH_COMPLETION": {
      const { error } = action as ReturnType<typeof launchCompletion>
      ...
    }
    default:
      return state;
  }
}
...
```

这样子可行，但如果`case`数量多起来，就需要导入多个类型，多次为`action`提供类型，偏麻烦。这里可以使用 typescript[辨析联合类型](https://jkchao.github.io/typescript-book-chinese/typings/discrominatedUnion.html#%E8%AF%A6%E7%BB%86%E7%9A%84%E6%A3%80%E6%9F%A5)的特性优化一下

```javascript
export function launch() { ... }
export function launchCompletion(error: Error | undefined) { ... }
export function loadUserList(page: number, pageSize: number) { ... }
export function loadUserListCompletion(error: Error | undefined, data: {[key: string]: any}) { ... }
export type ActionTypes =
  | ReturnType<typeof launch>
  | ReturnType<typeof launchCompletion>
  | ReturnType<typeof loadUserList>
  | ReturnType<typeof loadUserListCompletion>

const initialState: 0 | 1 | 2 = 0;
function appReducer(state: = initialState, action: ActionTypes): typeof initialState {
  switch (action.type) {
    case "LAUNCH": { ... }
    case "LAUNCH_COMPLETION": { ... }
    case "LOAD_USER_LIST": { ... }
    case "LOAD_USER_LIST_COMPLETION": { ... }
    default:
      return state;
  }
}
```

只需要引入`ActionTypes`，并为`action`添加类型，typescript 会根据`action.type`推断出当前 action 的类型

#### 5. saga 和 typescript

saga 需要进行类型定义的主要有两点

- 第一：请求完接口后返回的数据
- 第二：使用`select`返回的`state`

接口返回的数据和格式是不可控的，如果对其进行类型定义将会花费大量精力，不可取，建议`any`带过。重点放在第二点上

`select`的返回总是`any`，即使`selector`定义了返回的类型，详细可以看：[issues](https://github.com/redux-saga/redux-saga/issues/970)

比较好的解决方法主要有两种

- 第一种：将`selector`拿出来，使用`ReturnType`为返回结果进行定义

```javascript
const selector = (state: RootTypes) => state.app;
const app: ReturnType<typeof selector> = yield select(selector);
```

**逻辑和最初一样**，写法上绕了一下

- 第二种：利用`yield select()`等同于`getState()`的特点，将`select`的返回作为传参传入`selector`中

```javascript
const app = ((state: RootTypes) => state.app)(yield select())
```

**写法简单，但与最初的逻辑有出入**，比如进行测试时，需要传入整个 state

#### 6. 全局变量

`ActionTypes`和`RootTypes`都是唯一的，只需要在全局定义这两个类型，就可以减少导入代码花费的时间

step 1. 确认`tsconfig.json`里的配置，把全局配置的`.d.ts`文件放在编译的范围内即可

step 2. 写入全局类型

```javascript
//actions.js
...
export type ActionTypes =
  | ReturnType<typeof launch>
  | ReturnType<typeof launchCompletion>
  | ReturnType<typeof loadUserList>
  | ReturnType<typeof loadUserListCompletion>

//reducers.js
...
export type RootTypes = ReturnType<typeof rootReducer>;
export default rootReducer;

// global.d.ts
declare type RootTypes = import('reducers').RootTypes;
declare type ActionTypes = import('actions').ActionTypes;
```

step 3. 需要注意的点

第一，import 导入是在 typescript2.9 加入的，并且只能导入类型

第二，在添加全局类型后，有可能会出现编译器报错，而编译通过的问题(见下图)，重启 vscode 即可解决

<img src={require("./assets/screenshots/33.png").default} width="600" alt="33.png" />

#### 7. 写在最后

最开始使用 typescript，新手上路，不知道如何使用范型，写了很多重复的类型定义，费时又费力。而且修改 redux 里的 state 定义，需要修改好几处的 props，是真的很难受，**感觉很不值得**

后面慢慢学会如何运用范型，结合 redux 单一数据源设计，数据至上而下传递，类型也可以随着数据至上而下传递，不用在各个地方定义类型，**用更少的代码获得更多的类型定义，typescript 慢慢香了起来**

typescript 是 javascript 的超集，语法上学习起来很简单，但要想有个好的体验和实践，没有想象中那么简单，就跟画马一样

<img src={require("./assets/screenshots/32.png").default} width="300" alt="32.png" />

希望这篇文章对你有所帮助，谢谢！
