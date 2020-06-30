### 什么是Reselect？

>react-redux性能优化库

#### Reselect解决了什么？

>前提：在react-redux里，每当state变化时，为了比较前后的状态，都会调用mapStateToProps获取最新的结果

当`mapStateToProps`的逻辑比较重时，将会是一个很大的开销，`reselect`的目的就是为了解决这些无用的开销。

#### Reselect做了什么？

先来看一下`reselect`的用法：

```
import { createSelector } from 'reselect';

//createSelector(...inputSelectors | [inputSelectors], resultFunc)
@connect(createSelector(
  (state, ownProps) => state.counter,
  (counter) => {
    return {
      counter,
    };
  },
), {
  dispatchAdd,
  dispatchReduce,
});
```

`createSelector`需要两个参数，`inputSelectors`和`resultFunc`

`inputSelectors`可以为数组，也可以是多个函数，里面返回需要用来计算的字段，这些字段会作为`resultFunc`方法的传参，resultFunc则是用来计算最后的`props`（功能对应之前的`mapStateToProps`）

`reselect`会保存`mapStateToProps`的结果，当用来计算的参数未发生改变时（浅比较），`resultFunc`会直接返回旧的计算结果，从而避免了无用的计算开销

