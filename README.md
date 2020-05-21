### 一、redux-thunk有什么用，为什么要用?

### 二、redux-saga有什么用，和redux-thunk有什么区别?

### 三、==和===的区别，为什么要用===?

### 四、什么时候会发生margin合并，怎么避免?

### 五、React优化

### 六、meta标签的作用
比如：  

    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

### 七、使用git备份重要配置文件
最近不小心把.bash_profile里的配置删掉，导致环境变量全部出错，ls、vi、yarn、node等等都不能用，最后用mac自带的**Time Machine**还原了文件。   
所以建议大家**使用git记录文件**，在～(主)目录下git init，然后将需要备份的文件add进去，最后commit打上remark，存在**本地仓库**就可以了。

### 八、sticky（粘性）定位
sticky在与flex一起使用时会失效(原因是flex在副轴上默认是stretch，将副轴宽度拉满即高度拉满，所以sticky会无效)，需要添加align-items： flex-start。(来源：<a href="https://stackoverflow.com/questions/44446671/my-position-sticky-element-isnt-sticky-when-using-flexbox">stackoverflow</a>)
