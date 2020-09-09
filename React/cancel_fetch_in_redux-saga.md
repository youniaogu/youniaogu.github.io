### redux-saga 完全取消任务

在阅读本篇文章前，建议先阅读[redux-saga 文档](https://redux-saga.js.org/)，理解基础用法

#### 关于 fetch 请求的取消

参考[AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/AbortController)

#### 原理

fork 和 call 的区别是什么

```javascript
function* fetchWithCancel(args: optionType, parse: parseType = "json") {
  return yield call(function*() {
    const controller = new AbortController();

    try {
      return yield call(
        fetchDataWithoutCancel,
        { ...args, signal: controller.signal },
        parse
      );
    } finally {
      controller.abort();
    }
  });
}
```

#### 用法

正常请求

```javascript
const result = yield call(fetchData, {
  url: 'http://httpstat.us/200?sleep=1000',
});
```

使用 race 和 delay 实现请求超时

```javascript
const { resultWithTimeout, timeout } = yield race({
  result: fetchData({
    url: 'http://httpstat.us/200?sleep=1000',
  }),
  timeout: delay(1000),
});
```

#### 测试用工具

1. [httpstat](http://httpstat.us/)，可以自定义返回延迟

2. chrome network 里设置 throtting

![pic2](../static/2.png)
