### 返回函数的函数

函数里能够返回函数是 js 一个很重要的技巧，能让我们节省很多代码空间

react 里经常需要在`map`返回的元素里绑定事件，这种时候我们经常会使用这以技巧

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

这一技巧需要消耗资源，因为每次执行都要创建返回的函数，而且有可能使用到闭包。当列表数据特别多时，这种开销会放大，导致 render 速度下降

所以如果不是特别依赖闭包的话，可以把数据挂在 dom 元素上，通过`event`对象去获取，这样只需要创建一个函数

```javascript
handleClick = evt => {
  console.log(evt.currentTarget.dataset.index);
};

list.map((obj, index) => {
  return (
    <div data-index={index} key={index} onClick={this.handleClick}>
      index
    </div>
  );
});
```

最后还可以用事件代理再进行优化

```javascript
handleClick = evt => {
  evt.preventDefault();
  console.log(evt.target.dataset.index);
};

<div onClick={this.handleClick}>
  list.map((obj, index) => {
    return (
      <div data-index={index} key={index}>
        index
      </div>
    );
  });
</div>
```
