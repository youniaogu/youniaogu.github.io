### 通过 babel 看 class

#### 1. 前言

最近在写单元测试，在使用`jest.spyOn`测试生命周期方法和函数时，发现箭头函数无法使用下列代码进行测试

```javascript
//Error: Cannot spy the handleCardClick property because it is not a function; undefined given instead
const handleCardClick = jest.spyOn(App.prototype, "handleCardClick");
const wrapper = shallow(<App />);
```

报错提示说明`App.prototype.handleCardClick`为`undefined`，这就有意思了

#### 2. 编译简化

通过[babel tranfer online](https://babeljs.io/repl/#?browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=FBA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=true&fileSize=false&timeTravel=false&sourceType=module&lineWrap=false&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=7.12.9&externalPlugins=)编译，发现箭头函数与普通函数处理有点不同

> 为了易于理解，以下编译后代码经过简化，如果对非简化部分感兴趣，建议自行编译查看

```javascript
class App {
  fn() {}
  handleCardClick = () => {};
}
```

↓↓↓ 相当于 ↓↓↓

```javascript
function App() {
  this.handleCardClick = function () {};
}
App.prototype.fn = function () {};
```

可以看到，函数`fn`绑定在`App.prototype`上，而箭头函数`handleCardClick`绑定在`App`的实例上

问题解决了，但秉持着学习的心态，我把`class`里大部分定义变量和函数的情况都列举了出来

```javascript
class App {
  v1 = "v1";
  static v2 = "v2";
  constructor() {
    this.v1 = "fake v1";
    this.v2 = "fake v2";
    this.v3 = "v3";
  }

  fn1() {}
  fn2 = () => {};
  static fn3() {}
  static fn4 = () => {};
}
```

↓↓↓ 相当于 ↓↓↓

```javascript
function App() {
  this.v1 = "v1";

  this.v1 = "fake v1";
  this.v2 = "fake v2";
  this.v3 = "v3";

  this.fn2 = function () {};
}
App.prototype.fn1 = function () {};
App.fn3 = function () {};
App.v2 = "v2";
App.fn4 = function () {};
```

有一点需要注意，`constructor`在`class`里定义的上下位置对编译结果无影响

```javascript
class App {
  v1 = "v1";
  constructor() {
    this.v1 = "fake v1";
  }
}

class App {
  constructor() {
    this.v1 = "fake v1";
  }
  v1 = "v1";
}
```

上面两个类编译后结果一致

```javascript
function App() {
  this.v1 = "v1";

  this.v1 = "fake v1";
}
```

总结：

- 具有 static 属性的变量和函数会直接定义在构造函数上，优先级最高
- 箭头函数在构造函数内，会定义在实例上面
- constructor 的定义会覆盖类上的定义

#### 3. 继承

最后再研究下继承以及`super`编译后的结果

```javascript
class A {}
class B extends A {}
```

```javascript
var A = function A() {};

var B = (function B(_A) {
  //super相当于new关键字
  var super = function () {
    var Super = _B.__proto__;
    var result = Super.apply(this, arguments);

    if (
      result &&
      (_typeof(result) === "object" || typeof result === "function")
    ) {
      return result;
    }
    return this;
  };

  function _B() {
    //相当于new B(...arguments)
    return super.apply(this, arguments);
  }

  //继承_A的prototype，并将原型指向_A
  _B.prototype = {
    ..._A.prototype,
    constructor: _B,
  };
  _B.__proto__ = _A;

  return _B;
})(A);
```
