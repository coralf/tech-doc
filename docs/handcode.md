# js html css 手写题

## html css相关

### 1、两边固定、中间自适应布局（圣杯布局、双飞翼布局、flex布局）

#### 圣杯布局

父元素使用padding撑出空间来给左右两边的元素。

```html
<style>
  .container {
    display: flow-root;
    padding: 0 200px;
  }
  .container>div {
    float: left;
  }
  .center {
    width: 100%;
    background-color: aqua;
  }
  .left,
  .right {
    position: relative;
    width: 200px;
  }
  .left {
    background-color: coral;
    margin-left: -100%;
    left: -200px;
  }
  .right {
    background-color: burlywood;
    margin-left: -200px;
    left: 200px;
  }
</style>
<body>
  <div class="container">
    <div class="center">center</div>
    <div class="left">left</div>
    <div class="right">right</div>
  </div>
</body>
```

#### 双飞翼布局

子元素使用margin给左右子元素留出位置。

```html
<style>
  .container {
    display: flow-root;
  }
  .container>div {
    float: left;
  }
  .center {
    width: 100%;
  }
  .center>div {
    margin: 0 200px;
    background-color: aqua;
  }
  .left,
  .right {
    position: relative;
    width: 200px;
  }
  .left {
    background-color: coral;
    margin-left: -100%;
  }
  .right {
    background-color: burlywood;
    margin-left: -200px;
  }
</style>
<body>
    <div class="container">
        <div class="center">
            <div>
                center
            </div>
        </div>
        <div class="left">left</div>
        <div class="right">right</div>
    </div>
</body>
```



#### flex实现 

```html
<style>
  .container {
    display: flex;
  }
  .center {
    flex: 1;
    background-color: deepskyblue;
  }
  .left,
  .right {
    width: 200px;
  }
  .left {
    background-color: coral;
  }
  .right {
    background-color: burlywood;
  }
</style>
<body>
    <div class="container">
        <div class="left">left</div>
        <div class="center">center</div>
        <div class="right">right</div>
    </div>
</body>
```



### 2、垂直居中（三种方式）

#### flex实现

```html
<style>
  .container {
    display: flex;
    background-color: gainsboro;
    justify-content: center;
    align-items: center;
    height: 600px;
  }
  .center {
    width: 200px;
    height: 200px;
    background-color: deepskyblue;
  }
</style>
<body>
    <div class="container">
        <div class="center"></div>
    </div>
</body>
```



#### 相对定位

```html
<style>
  .container {
    background-color: gainsboro;
    height: 600px;
    display:flow-root; /* or overflow: hidden; */
  }
  .center {
    position: relative;
    width: 200px;
    height: 200px;
    background-color: deepskyblue;
    margin: 0 auto;	
    top: 50%;
    margin-top: -100px;
  }
</style>
<body>
  <div class="container">
    <div class="center"></div>
  </div>
</body>
```



#### 绝对定位

```html
<style>
  .container {
    position: relative;
    background-color: gainsboro;
    height: 600px;
  }
  .center {
    position: absolute;
    width: 200px;
    height: 200px;
    background-color: deepskyblue;
    top: calc(50% - 100px);
    left: calc(50% - 100px);
  }
</style>
<body>
  <div class="container">
    <div class="center"></div>
  </div>
</body>
```



### 3、css画半圆

```html
<style>
  .half-circle {
    width: 0;
    height: 0;
    border-top: 200px solid skyblue;
    border-bottom: 200px solid transparent;
    border-left: 200px solid skyblue;
    border-right: 200px solid transparent;
    border-radius: 50%;
    transform: rotate(45deg);
  }
</style>
<div class="half-circle">
</div>
```

### 4、css画饼图

```html
<style>
  .pie {
    width: 0;
    height: 0;
    border-top: 200px solid #e76f51;
    border-bottom: 200px solid #f4a261;
    border-left: 200px solid #e9c46a;
    border-right: 200px solid #2a9d8f;
    border-radius: 50%;
  }
</style>
<div class="pie">
</div>
```

### 5、css画三角形

```html
<style>
  .triangle {
    width: 0;
    height: 0;
    border-top: 200px solid #e76f51;
    border-bottom: 200px solid transparent;
    border-left: 200px solid transparent;
    border-right: 200px solid transparent;
  }
</style>
<div class="triangle">
</div>
```

### 6、文本超出处理

```html
<style>
  .text-overflow {
    width: 100px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
</style>
```

### 7、css画水波纹

```html
<style>
  .container {
     position: relative;
     width: 600px;
     height: 600px;
     margin: 0 auto;
  }
  .wave {
    position: absolute;
    border: 1px solid #00b4d8;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    /* 将变换原地移动到中心 */
    transform-origin: center center;
    opacity: 0;
    animation: waving 7s linear infinite alternate;
  }
  .wave1 {
    animation-delay: 1s;
  }
  .wave2 {
    animation-delay: 3s;
  }
  .wave3 {
    animation-delay: 5s;
  }
  .wave4 {
    animation-delay: 7s;
  }
  @keyframes waving {
    0% {
      opacity: 0.5;
      transform: scale(0.3);
    }
    30% {
      opacity: 0.6;
      transform: scale(0.8);
    }
    50% {
      opacity: 0.8;
      transform: scale(0.1);
    }
    100% {
      opacity: 1;
      transform: scale(1.2);
    }
  }
</style>
<body>
  <div class="container">
    <div class="wave wave1"></div>
    <div class="wave wave2"></div>
    <div class="wave wave3"></div>
    <div class="wave wave4"></div>
  </div>
</body>
```






## javascript
### 1、实现节流、防抖

#### 节流

连续触发节流函数，只会按照固定的时间间隔触发真正需要执行的函数。

```javascript
function throttle(excuteFun, wait) {
  const now = () => new Date().getTime();
  let lastTime = now();
  return function () {
    const current = now();
    if (current - lastTime > wait) {
      excuteFun.apply(this, arguments);
      lastTime = now();
    }
  }
}
```



#### 防抖

在固定时间内连续多次触发防抖函数，只会执行一次。

```javascript
function debounce(excuteFun, wait) {
  const now = () => new Date().getTime();
  let timer = null;
  return function () {
    clearInterval(timer);
    timer = setTimeout(() => {
      excuteFun.apply(this, arguments);
    }, wait)
  }
}
```

### 2、实现Promise

```javascript
const STATUS = {
  PENDDING: 'pendding',
  RESOLVED: 'resolved',
  REJECTED: 'rejected'
};
function MyPromise(excuteFun) {
  this.status = STATUS.PENDDING;
  this.value = null;
  this.err = null;
  try {
    excuteFun(this.resolve.bind(this), this.reject.bind(this));
  } catch (err) {
    this.reject.call(this,err);
  }
}

MyPromise.prototype.then = function (resolvedCall, rejectedCall) {
  switch (this.status) {
    case STATUS.RESOLVED:
      setTimeout(() => {
        resolvedCall.call(this, this.value);
      }, 0);
      break;
    case STATUS.REJECTED:
      setTimeout(() => {
        rejectedCall.call(this, this.err);
      }, 0);
    default:
      break;
  }
}

MyPromise.prototype.resolve = function (result) {
  this.status = STATUS.RESOLVED;
  this.value = result;
  return this;
}

MyPromise.prototype.reject = function (err) {
  this.status = STATUS.REJECTED;
  this.err = err;
  return this;
}

new MyPromise((resolove, reject) => {
  // resolove('ok')
  // reject('bad')
})
.then(result => {
  console.log('resoloved==>', result);
}, err => {
  console.log('rejected==>', err);
});
```

### 3、手写发布订阅模式

```javascript
class Observer {
  constructor() {
    this.listeners = new Map();
  }
  subscribe(key, listener) {
    const keyListeners = (this.listeners.get(key) || []);
    keyListeners.push(listener);
    this.listeners.set(key, keyListeners);
  }
  emit(key, messages) {
    const ctx = this;
    this.listeners.get(key)?.forEach(item => item.call(ctx, messages));
  }
  unSubscribe(key) {
    this.listeners.delete(key);
  }
}
```

### 4、实现new

```javascript
// new 实现
function newObject(Obj) {
  if (typeof Obj !== 'function') {
    throw 'param must be a function';
  }
  const restParam = Array.prototype.slice.call(arguments, 1)
  const newObj = {};//1、创建一个对象。
  newObj.__proto__ = Obj.prototype;//2、绑定原型。
  const result = Obj.apply(newObj, restParam);//3、绑定this
  return (result && typeof result !== 'function') ? result : newObj;
}
const person = newObject(Person,'张三');
```

### 5、手写组合继承

```javascript
function Shape() {
}
Shape.prototype.move = function () {
  console.log('moving');
}
function Circle(r) {
  Shape.call(this);
  this.r = r;
  this.roll = function () {
    console.log(this.r + ' is rolling');
  }
}
Circle.prototype = new Shape();
Circle.prototype.constructor = Circle;//修复Constructor指向
const circle = new Circle(5);
circle.move();
circle.roll();
```



### 6、实现深拷贝

```javascript
function deepClone(obj) {
  const result = Array.isArray(obj) ? [] : {};
  if (typeof obj === 'object') {
    for (let key in obj) {
      if (obj[key] && typeof obj[key] === 'object') {
        result[key] = deepClone(obj[key]);
      } else {
        result[key] = obj[key];
      }
    }
    return result;
  }
  return obj;
}
const person = {
  name: 'zhanfsan',
  age: 12,
  children: [
    1, 2, 3, 4, 5
  ],
  shape: {
    name: 'shape',
    x: 1,
    y: 2
  },
  run() {
    console.log('running...');
  }
}
console.log(deepClone(person));
```



### 7、实现bind、call、apply

```javascript
 //1、实现Call
Function.prototype.myCall = function (ctx, ...rest) {
  const excuteFun = this;
  const obj = ctx || window;
  obj.__proto__.excuteFun = excuteFun;
  const result = obj.excuteFun(...rest);
  delete obj.excuteFun;
  return result;
}

//2、实现apply
Function.prototype.myApply = function (ctx, params) {
  return this.myCall(ctx, ...params);
}

//3、实现bind
Function.prototype.myBind = function (ctx, ...rest) {
  const fnCtx = this;
  return function (...laterParam) {
    const paramCompose = [...rest, ...laterParam];
    return fnCtx.myCall(ctx, ...paramCompose);
  }
}
```



### 8、实现Promise.all()

```javascript
function promiseAll(promises) {
  return new Promise(async (resolve, reject) => {
    const result = [];
    try {
      for (const promise of promises) {
        const value = await promise;
        result.push(value);
      }
    } catch (err) {
      reject(err);
    }
    resolve(result);
  });
}

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

promiseAll([p1, p2, p3])
  .then((result) => {
  console.log(result);
});
```

### 9、实现元素拖拽

```html
<style>
  #box {
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: skyblue;
  }
</style>

<div id="box"></div>

<script>
  const box = document.querySelector('#box');
  let isDragging;
  let trans = {};
  document.addEventListener('mousedown', (e) => {
    if (e.target === box) {
      isDragging = true;
      const { top, left } = box.getBoundingClientRect();
      const { clientX, clientY } = e;
      trans = {
        dx: clientX - left,
        dy: clientY - top
      }
    }
  });
  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const { clientX, clientY } = e;
      const { dx, dy } = trans;
      box.style.transform = `translate3D(${clientX - dx}px,${clientY - dy}px,0)`
    }
  });
  document.addEventListener('mouseup', (e) => {
    isDragging = false;
  });
</script>
```



### 10、实现instanceof 

```javascript
function instanceOf(obj, Constructor) {
  if (obj !== null && typeof obj === 'object') {
    while (obj) {
      if (obj.constructor === Constructor) {
        return true;
      }
      obj = obj.__proto__;
    }
  }
  return false;
}
class Person {
  constructor() {
  }
}
console.log(instanceOf(new Person(), Person));//true
```



### 11、实现单例(全局弹窗)

```javascript
function createDialog() {
  const dialog = document.createElement('div');
  dialog.style.position = 'absolute';
  dialog.style.left = '400px';
  dialog.style.top = '200px';
  dialog.style.width = '200px';
  dialog.style.height = '200px';
  dialog.style.backgroundColor = 'skyblue';
  document.body.appendChild(dialog);
  return dialog;
}
const openDialog = (function () {
  let dialog = null;
  return function () {
    if (dialog === null) {
      dialog = createDialog();
    }
    return dialog;
  }
})();
const handleOpenDialog = () => {
  openDialog();
}
```



### 12、实现reduce

```javascript
function reduce(arr, callback, defaultResult) {
  if (!Array.isArray(arr)) {
    throw new Error('arr must be an array');
  }
  if (typeof callback !== 'function') {
    throw new Error('callback must be a function');
  }
  const len = arr.length;
  let result = defaultResult;
  for (let i = 0; i < len; i++) {
    result = callback(result, arr[i], i);
  }
  return result;
}
```



### 13、实现Object.create()

```javascript
function objectCreate(prototype, properties) {
  if (typeof prototype !== 'object') {
    throw new TypeError();
  }
  function F() { }
  F.prototype = prototype;//
  const obj = new F();
  if (properties) {
    if (properties !== Object(properties)) {
      throw new TypeError();
    }
    Object.defineProperties(obj, properties);//
  }
  return obj;
}
```



## 算法

1、数据去重

2、扁平化数组