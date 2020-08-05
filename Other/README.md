## Other

### 使用 evt.target.dataset 代替工厂函数

工厂函数意味着每次 render 时都会重新创建多个匿名函数，当列表数据特别多时，会放大这种开销，所以要避免。

###### 1. 推荐：

```javascript
handleClick = evt => {
  console.log(evt.target.dataset.index);
};

list.map((obj, index) => {
  return (
    <div data-index={index} key={index} onClick={this.handleClick}>
      index
    </div>
  );
});
```

###### 2. 不推荐：

```javascript
handleClick = index => {
  return () => {
    console.log(index);
  };
};

list.map((obj, index) => {
  return (
    <div key={index} onClick={this.handleClick(index)}>
      index
    </div>
  );
});
```

### Action 定义为变量的好处和坏处

##### 好处：能够很好定位拼写错误

###### 变量：

```javascript
// actions.js
const LOAD_USER_LIST = "LOAD_USER_LIST";
const LOAD_USER_INFO = "LOAD_USER_INFO";

// userList.js
import {LOAD_USER_LIST, LOAD_USER_DETAIL} from './actions'；
// Attempted import error: 'LOAD_USER_DETAIL' is not exported from './action'
```

当引入不存在的`action`变量时应用会编译失败，能够很好的提示我们

###### 字符串：

```javascript
export function loadUserInfo(id) {
  return {
    type: "LOAD_USER_DETAIL",
    id
  };
}
```

当`action`为字符串时，应用依旧可以运行，但对应的`reducer`与`saga`部分不会运行，为了找出这种低级错误往往会浪费很多时间

##### 坏处：使用时会麻烦一些，需要引入`action`

```javascript
// sagas.js | createAction.js | reducers.js
import { LOAD_USER_LIST, LOAD_USER_INFO } from "./actions.js";
```

#### 思考

大项目逻辑复杂查错不易，`action`定义为变量更为严谨，可以规避一些低级错误

小项目要求快速开发，`action`定义为字符串更为直接，能够加快开发效率

很多时候，我们不能一味的模范，而是要思考为什么要这样做，其中的利与弊是什么，适合自己的才是最好的
