### 一、redux-thunk有什么用，为什么要用?

### 二、redux-saga有什么用，和redux-thunk有什么区别?

### 三、==和===的区别，为什么要用===?

### 四、什么时候会发生margin合并，怎么避免?

### 五、React优化

### 六、meta标签的作用
例如：  

    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

### 七、使用git备份重要配置文件
最近不小心把.bash_profile里的配置删掉，导致环境变量全部出错，ls、vi、yarn、node等等都不能用，最后用mac自带的**Time Machine**还原了文件。   
所以建议大家**使用git记录文件**，在～(主)目录下git init，然后将需要备份的文件add进去，最后commit打上remark，存在**本地仓库**就可以了。

### 八、sticky（粘性）定位
sticky在与flex一起使用时会失效(原因是flex在副轴上默认是stretch，将副轴长度拉满，所以sticky会无效)，需要添加align-items:flex-start。(来源：<a href="https://stackoverflow.com/questions/44446671/my-position-sticky-element-isnt-sticky-when-using-flexbox">stackoverflow</a>)

### 九、将action type定义为变量的好处
例如：
actions.js

    const LOAD_USER_LIST = "LOAD_USER_LIST";
    const LOAD_USER_INFO = "LOAD_USER_INFO";

userList.js

    import {LOAD_USER_LIST, LOAD_USER_INFO} from 'actions.js'

当我们引入action时如果有拼写错误，会拿到undefined，在触发action时redux会报错。相比与直接写string，变量更容易定位错误。

**题外话：**  
建议**大项目**使用**变量**的写法  
**小项目**直接写string，甚至将dispatch与action合并（直接调用action，跳过connect），提高开发效率

    import store from "~R/store";

    function loadUserList () {
      return store.dispatch({
        type: 'LOAD_USER_LIST',
      });
    }

### 十、react里绑定事件时请使用evt.target.dataset代替工厂函数
尽量避免例子一，改用例子二的写法
#### 例子一：  

    handleClick = (index) => {
      return () => {
        console.log(index)
      }
    }

    {
      list.map((obj, index) => {
        return <div key={index} onClick={this.handleClick(index)}>index</div>
      })
    }

#### 例子二：

    handleClick = evt => {
      console.log(evt.target.dataset.index)
    }

    {
      list.map((obj, index) => {
        return <div data-index={index} key={index} onClick={this.handleClick}>index</div>
      })
    }
