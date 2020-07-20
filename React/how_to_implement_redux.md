### 如何实现 Redux

#### 一、createStore

createStore 接收 reducer、preState，enhancer 后返回 store 对象，里面有 dispatch、getState、subscribe 三个方法

+ `dispatch`：触发一个动作，修改state
+ `subscribe`：订阅监听器，返回取消订阅方法，当发生动作时触发回调函数
+ `getState`：返回当前的state



#### 三、combineReducer

createStore 只接收一个`reducer`（纯函数），但应用中如果只有一个`rootReducer`将会很臃肿，所以需要将其分割为一个个小的`reducer`，分别负责一部分的`state`，再合并到一起。

`combineReducer`的作用就是合并`reducer`

正常用法：

```javascript
export default combineReducer({
  list: listReducers,
  dict: dictReducers,
  detail: detailReducers
});
```

可以把上面的代码理解为：

```javascript
export default function(state, action) {
  return {
    list: listReducers(state.list, action),
    dict: dictReducers(state.dict, action),
    detail: detailReducers(state.detail, action)
  };
}
```

`combineReducer`接收一个对象，返回一个函数。用`Object.keys`拿到 keys，遍历 keys，计算出每个子`reducer`，储存起来,最后返回结果。

可以很简单写出`combineReducer`函数

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

      if (typeof reducer === "function") {
        result[key] = nextState;
      } else {
        result[key] = reducer;
      }
    }
    return result;
  };
}
```

事实上`combineReducer`是怎么实现的？

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

- 事实上 combineReducer 只会处理对象里的纯函数，其他的会无视不作处理。
- combineReducer 会比较前后值，如果前后 state 未变化，则会返回之前的 state（引用类型变量，如果）
