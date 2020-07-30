### 如何实现 Redux

> 示例 demo：[github](https://github.com/youniaogu/simple-redux)
>
> 注意：为了简单明了的展示主要流程，下面示例中均会省略异常情况的处理。

`redux`里有四个核心的 api，下面会按顺序介绍并实现它们

1. combineReducer
2. compose
3. createStore
4. applyMiddlewares

#### 一、combineReducer

`createStore`只能接收一个`reducer`，但如果都写在一起，只有一个`rootReducer`的话会很臃肿，所以需要将其分割为一个个小的`reducer`，分别负责一部分的 state，再合并成一个`rootReducer`。

`combineReducer`的作用就是将多个`reducer`合并成一个

> 合并后返回的 reducer 在处理 state 时会进行分发，从上面接收 state 后会将对应部分的 state 分发给 reducer
>
> 不明白的话，可以结合下面代码理解

```javascript
export default combineReducer({
  list: listReducers,
  dict: dictReducers,
  detail: detailReducers
});

//↓↓↓等价于↓↓↓

export default function(state, action) {
  return {
    list: listReducers(state.list, action),
    dict: dictReducers(state.dict, action),
    detail: detailReducers(state.detail, action)
  };
}
```

遍历传入的对象拿到所有的 key 值，使用 key 值拿到对应的旧状态，将旧状态和动作传入 reducer，获取最新状态并返回，实现起来并不复杂。

```javascript
function combineReducer(reducers) {
  const reducerKeys = Object.keys(reducers);

  return function(state, action) {
    const nextState = {};
    for (let i = 0; i < reducerKeys.length; i++) {
      const key = reducerKeys[i];
      const reducer = reducers[key];
      const prevState = state[key];
      const nextState = reducer(prevState, action);

      result[key] = nextState;
    }
    return result;
  };
}
```

##### redux 是如何实现 combineReducer？

对比下源码

```javascript
function combineReducer(reducers) {
  const reducerKeys = Object.keys(reducers);
  const finalReducers = {};
  for (let i = 0; i < reducerKeys.length; i++) {
    const key = reducerKeys[i];
    if (typeof reducers[key] === "function") {
      finalReducers[key] = reducers[key];
    }
  }
  const finalReducerKeys = Object.keys(finalReducers);

  return function(state = {}, action) {
    let hasChange = false;
    const nextState = {};
    for (let i = 0; i < finalReducerKeys.length; i++) {
      const key = finalReducerKeys[i];
      const reducer = finalReducers[i];
      const prevStateForKey = state[key];
      const nextStateForKey = reducer(prevStateForKey, action);

      nextState[key] = nextStateForKey;
      hasChange = hasChange || nextStateForKey !== prevStateForKey;
    }
    return hasChange ? nextState : state;
  };
}
```

需要注意的点：

- 除函数以外的值会被过滤，只处理对象里的函数。
- 在返回函数里会比较前后状态，如果未变化则返回旧状态

#### 二、compose

`compose`主要用于中间件的整合，接收多个函数传参，返回单个函数。当执行返回函数时，相当于嵌套执行传参的函数。

说起来比较绕，可以看下边的例子理解

```javascript
compose(a, b, c); // a b c Function

//↓↓↓等价于↓↓↓

function Fn(...args) {
  return a(b(c(...args)));
}
```

##### 如何实现？

思路很简单，可以用 for 循环遍历，返回嵌套函数，还可以用 reduce 方法

```javascript
//第一种
function compose(...fns) {
  if (fns.length === 0) {
    return arg => arg;
  }

  if (fns.length === 1) {
    return fns[0];
  }

  let composeFn = (...args) => fns[0](...args);

  for (let i = 1; i < fns.length; i++) {
    composeFn = composeFn((...args) => fns[i](...args));
  }

  return composeFn;
}

//第二种
function compose(...fns) {
  if (fns.length === 0) {
    return arg => arg;
  }

  if (fns.length === 1) {
    return fns[0];
  }

  return fns.reduce((a, b) => {
    return (...args) => a(b(...args));
  });
}
```

#### 三、createStore

`createStore`最多可以接收三个传参，分别是`reducer, preloadedState, enhancer`

> `reducer`为必传项，`preloadedState`和`enhancer`为非必传，当只传递两个参数时，`createStore`会检查第二个参数的类型，如何是 function 类型的话按`enhancer`处理，其他情况会当作`preloadedState`

- `reducer`：响应 action，更新 state
- `preloadState`：初始化 state
- `enhancer`：`applyMiddlewares`返回的函数，用于增强`dispatch`的功能

`reducer`方法传参里提供初始值也可以达到初始化 state 的效果，但和使用 preloadState 存在一些区别

> `preloadState`初始化 state 在`createStore`执行时生效，而函数传参初始值必须要在触发动作并执行 reducer 函数后才会生效，但事实上，`createStore`_在返回结果前会主动触发一个初始化动作_（指 action），所以这两者都能达到初始化 state 的效果。
>
> 实际开发中初始化数据放在 reducer 里多一些，分割初始状态的同时也能直观看到对应的状态

`createStore`返回`{dispatch<Function>, getState<Function>, subscribe<Function>}`

---

第一步，先定义 createStore 的传参和输出

```javascript
function createStore(reducer, enhancer) {
  let currentState,
    listeners = [];

  function dispatch() {}
  function subscribe() {}
  function getState() {}

  return {
    dispatch,
    subscribe,
    getState
  };
}
```

确认`dispatch`、`getState`、`subscribe`的作用

- `dispatch`：触发一个动作，修改 state，并触发所有的监听函数
- `getState`：返回当前的 state
- `subscribe`：订阅监听函数，返回取消订阅方法

第二步，补全核心方法

```javascript
function createStore(reducer, enhancer) {
  let currentState,
    listeners = [];

  function dispatch(action) {
    currentState = reducer(currentState, action);

    for (let i = 0; i < listeners.length; i++) {
      listeners[i]();
    }
  }
  function subscribe(handleStoreChange) {
    listeners.push(handleStoreChange);

    return function unsubscribe() {
      const index = listeners.indexOf(handleStoreChange);

      listeners.splice(index, 1);
    };
  }
  function getState() {
    return currentState;
  }

  return {
    dispatch,
    subscribe,
    getState
  };
}
```

#### 四、applyMiddleware
