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



### 8、垂直水平居中，div高度始终是宽度的一半

*%单位以父元素大小作为参考*

```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        html,
        body {
            margin: 0;
            padding: 0;
        }
        .layout {
            display: flex;
            justify-content: center;
            align-items: center;
            height:100vh;
        }
        .box {
            width: 200px;
        }
        .main {
            position: relative;
            padding-bottom: 50%;
            background-color: red;
            height: 0;
        }
        .content {
            position: absolute;
            background-color: green;
            width: 100%;
            height: 100%;
        }
    </style>
</head>
<body>
    <div class="layout">
        <div class="box">
            <div class="main">
                <div class="content">
                </div>
            </div>
        </div>
    </div>
</body>
</html>
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

### 数组去重

#### ES6 Set实现

```javascript
const arr = [1, 2, 1, 2, 23, 4, 55, 5, 5, 5, 5];
const duplicatedArr = Array.from(new Set(arr));
```

#### reduce去重

```javascript
const arr = [1, 2, 1, 2, 23, 4, 55, 5, 5, 5, 5];
const duplicatedArr = arr.reduce((acc, curr, idx) => {
  return acc.includes(curr) ? acc : [...acc, curr];
}, []);
```

#### for + indexOf去重

```javascript
const arr = [1, 2, 1, 2, 23, 4, 55, 5, 5, 5, 5];
const len = arr.length;
const dupArr = [];
for (let i = 0; i < len; i++) {
  const item = arr[i];
  if (dupArr.indexOf(item) == -1) {
    dupArr.push(item);
  }
}
```

#### for of + includes去重

```javascript
const arr = [1, 2, 1, 2, 23, 4, 55, 5, 5, 5, 5];
const dupArr = [];
for (const item of arr) {
  if (!dupArr.includes(item)) {
    dupArr.push(item);
  }
}
```

#### for in + includes去重

```javascript
const arr = [1, 2, 1, 2, 23, 4, 55, 5, 5, 5, 5];
const result = [];
for (let idx in arr) {
  const item = arr[idx];
  if (result.includes(item)) continue;
  result.push(item);
}
```

### 扁平化数组

#### ES6 flat

```javascript
const arr = [1, 2, 1, 2, 23, 4, [1, 2, [33244, 54], [545]], [5454, 232, 2, [413, [43], [2]]], 55, 5, 5, 5, 5];
function flat(arr) {
  return arr.flat(Infinity);
}
```

#### reduce实现

```javascript
const arr = [1, 2, 1, 2, 23, 4, [1, 2, [33244, 54], [545]], [5454, 232, 2, [413, [43], [2]]], 55, 5, 5, 5, 5];
function flat(arr) {
  return arr.reduce((acc, curr) => Array.isArray(curr) ? [...acc, ...flat(curr)] : [...acc, curr], []);
}
```

#### for 实现

```javascript
const arr = [1, 2, 1, 2, 23, 4, [1, 2, [33244, 54], [545]], [5454, 232, 2, [413, [43], [2]]], 55, 5, 5, 5, 5];
function flat(arr) {
  const result = [];
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    const item = arr[i];
    if (Array.isArray(item)) {
      const children = flat(item);
      result.concat(children);
    } else {
      result.push(item);
    }
  }
  return result;
}
```



### 合并两个有序数组

**思路（原地算法）**

从两个数组的后面开始比较， 把数组中元素大的依次放在`nums1`的后面。如果两个数组有其中一个遍历完成了循环结束。

这样`nums2`剩下的元素一定比`nums1`中的所有元素小，只需要将`nums2`中剩下的放在`nums1`的前面就行了。

```javascript
const merge = function (nums1, m, nums2, n) {
  let len1 = m - 1;
  let len2 = n - 1;
  let len = m + n - 1;
  while (len1 >= 0 && len2 >= 0) {
    //对比两个数组最后面的数，谁大谁放后面；
    nums1[len--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--];
  }
  //此时num2数组中可能还剩下元素没被遍历完成（没被遍历完的都是比num1中元素小的），直接放到前面
  nums1.splice(0, len2 + 1, ...nums2.slice(0, len2 + 1));
};
```

> https://leetcode-cn.com/problems/merge-sorted-array/

### 两数之和

**思路**

使用map将数组中元素与对应下标存储起来，每遍历一个元素看一下map是否存在对应的下标。如果存在就直接返回下标。

使用一个循环就能完成操作。如果数组中必然存在这样两个数。这样不管当前遍历到的元素是a,b那个数。那么一定会出现在map中。

```javascript
const twoSum = function (nums, target) {
  const map = new Map();
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const differ = target - nums[i];
    if (map.has(differ)) {
      return [map.get(differ), i];
    }
    map.set(nums[i], i);
  }
};
```

> https://leetcode-cn.com/problems/two-sum/

### 三数之和

**思路**

考虑将元素排好序，从第一个元素开始遍历，如果a+b+c=0的话那么b，c一定出现当前元素的右边了；

使用双指分别指向右边的头尾开始枚举，将复合条件的三个元素放入数组中。然后再继续剩下的b，c。

**考虑去重**

如果元素有重复的那么这两个元素一定相邻，这时需要移动指针来跳过a,b,c的重复元素。

```javascript
const threeSum = function (nums) {
  if (!nums || nums.length < 3) return [];
  const result = [];
  nums.sort((a, b) => a - b);
  const len = nums.length;
  for (let i = 0; i < len; i++) {//遍历排序后的数组
    if (nums[i] > 0) break;//如果当前元素>0肯定不符合
    if (i > 0 && nums[i] === nums[i - 1]) continue;//去重
    let left = i + 1;
    let right = len - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum > 0) {//大了，往左走选小的
        right--;
      } else if (sum < 0) {//小了，往右走选大的
        left++;
      } else {//三数之和=0，继续找下一个三数之和
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;//左边去重
        while (left < right && nums[right] === nums[right - 1]) right--;//右边去重
        right--;
        left++;
      }
    }
  }
  return result;
};
```

> https://leetcode-cn.com/problems/3sum/

### 四数之和N数之和

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const nSumTarget = (nums, n, start, target) => {
    const result = [];
    const len = nums.length;
    if(n < 2 || len < n) return result;
    if (n === 2) {
        let left = start;
        let right = len - 1;
        while (left < right) {
            const leftVal = nums[left];
            const rightVal = nums[right];
            const sum = rightVal + leftVal;
            if (sum < target) {
                while (left < len && nums[left] === leftVal) left++;
            } else if (sum > target) {
                while (right > 0 && nums[right] === rightVal) right--;
            } else {
                result.push([leftVal, rightVal]);
                while (left < len && nums[left] === leftVal) left++;
                while (right > 0 && nums[right] === rightVal) right--;
            }
        }
    } else {
        for (let i = start; i < len; i++) {
            const a = nums[i];
            const tuples = nSumTarget(nums, n - 1, i + 1, target - a);
            for (const tuple of tuples) {
                tuple.push(a);
                result.push(tuple);
            }
            while (i < len && nums[i] === nums[i + 1]) i++;
        }
    }
    return result;
}

const fourSum = function (nums, target) {
    nums.sort((a, b) => a - b);
    return nSumTarget(nums, 4, 0, target);
};
```

> https://leetcode-cn.com/problems/4sum/



### LRU（最近最少使用）缓存

```javascript
class LRUCatch {
  constructor(capacity) {
    this.capacity = capacity;
    this.catch = new Map();
  }

  get(key) {
    if (!this.catch.has(key)) return -1;
    const value = this.catch.get(key);
    this.catch.delete(key);
    this.catch.set(key, value);
    return value;
  }

  put(key, value) {
    if (this.catch.has(key)) {
      this.catch.delete(key);
    }
    this.catch.set(key, value);
    if (this.catch.size > this.capacity) {
      this.catch.delete(this.catch.keys().next().value);
    } 
  }
}
```





## 链表

### 回文链表

```javascript
const isPalindrome = function (head) {
    let left = head;
    const isCir = (right) => {
        if (right === null) {
            return true;
        }
        let res = isCir(right.next);
        res = res && left.val === right.val;
        left = left.next;
        return res;
    }
    return isCir(head);
};
```

> https://leetcode-cn.com/problems/palindrome-linked-list/

### 反转链表

```javascript
const reverseList = function (head) {
    if (!head) return null;
    let reversed = new ListNode(head.val);
    let headTemp = head.next;
    while (headTemp) {
        let newNode = new ListNode(headTemp.val);
        newNode.next = reversed;
        reversed = newNode;
        headTemp = headTemp.next;
    }
    return reversed;
};
```

递归翻转

```javascript
const reverseList = function (head) {
    if (!head) return head;
    if (!head.next) return head;
    const last = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return last;
};
```

> https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/

### 合并两个有序链表

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function (l1, l2) {
    if (!l1 || !l2) return l1 || l2;
    const head = new ListNode(0);
    let tail = head;
    let at = l1;
    let bt = l2;
    while (at && bt) {
        if (at.val < bt.val) {
            tail.next = at;
            at = at.next;
        } else {
            tail.next = bt;
            bt = bt.next;
        }
        tail = tail.next;
    }
    tail.next = at || bt;
    return head.next;
};
```

> https://leetcode-cn.com/problems/merge-two-sorted-lists/



### 合并K个升序链表

归并思想

```javascript
const mergeKLists = function (lists) {
    return merge(lists, 0, lists.length - 1);
};
const merge = (lists, left, right) => {
    if (left > right) {
        return null;
    }

    if (left === right) {
        return lists[left];
    }

    const mid = (left + right) >> 1;//避免出现小数，提高运算效率
    return mergeTwoList(merge(lists, left, mid), merge(lists, mid + 1, right));
}
const mergeTwoList = (a, b) => {
    if (!a || !b) return a || b;
    const head = new ListNode(0);
    let tail = head;
    let at = a;
    let bt = b;
    while (at && bt) {
        if (at.val < bt.val) {//小的放前面
            tail.next = at;
            at = at.next;
        } else {
            tail.next = bt;
            bt = bt.next;
        }
        tail = tail.next;
    }
    tail.next = at || bt;//有可能没被遍历完
    return head.next;
}
```

> https://leetcode-cn.com/problems/merge-k-sorted-lists/

### 环形链表

快慢指针，快指针两步两步地走，慢指针一步一步地走，只要链表有环，就一定会走到一起。

```javascript
const hasCycle = function (head) {
    let faster = head;
    let slower = head;
    while(faster){
        if(!faster.next) break;
        slower = slower.next;
        faster = faster.next.next;
        if(slower===faster) return true;
    }
    return false;
};
```

> https://leetcode-cn.com/problems/linked-list-cycle/

### 相交链表

双指针

* pA到达末尾，则从headB开始
* pB到达末尾，则从headA开始
* 如果两个链表长度不一致，且有相同的节点这样最终会找起始节点。

```javascript
var getIntersectionNode = function (headA, headB) {
    let pA = headA;
    let pB = headB;
    while (pA !== pB) {
        pA = pA ? pA.next : headB;
        pB = pB ? pB.next : headA;
    }
    return pA;
};
```

> https://leetcode-cn.com/problems/intersection-of-two-linked-lists/

## 字符串

### 最长回文子串

中心两边扩散思想

```javascript
const longestPalindrome = (s) => {
    let longest = '';
    let len = s.length;
    const getLongStr = (s, left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.substring(left + 1, right);
    }
    for (let i = 0; i < len; i++) {
        const s1 = getLongStr(s, i, i);//从自身开始算起
        const s2 = getLongStr(s, i, i + 1);
        const max = Math.max(s1.length, s2.length);
        if (max > longest.length) {
            if (s1.length > s2.length) {
                longest = s1;
            } else {
                longest = s2;
            }
        }
    }
    return longest;
}
```

> https://leetcode-cn.com/problems/longest-palindromic-substring/

### 最长公共前缀

归并思想

```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {

    const getPrefix = (left, right) => {
        const minLen = Math.min(left.length, right.length);
        let idx = 0;
        while (idx < minLen && left[idx] === right[idx]) {
            idx++;
        }
        return left.slice(0, idx);
    }

    const getLongestCommPrefix = (strs, left, right) => {
        if (left > right) return null;
        if (left === right) return strs[left];
        const mid = left + ((right - left) >> 1);
        return getPrefix(getLongestCommPrefix(strs, left, mid), getLongestCommPrefix(strs, mid + 1, right));
    }

    if (!strs || strs.length === 0) return '';
    return getLongestCommPrefix(strs, 0, strs.length - 1);
};
```

> https://leetcode-cn.com/problems/longest-common-prefix/



**解法二**

```javascript
const longestCommonPrefix = function (strs) {
    if (!strs || strs.length === 0) return '';
    let result = strs[0];
    let len = strs.length;
    for (let i = 1; i < len; i++) {
        const s = strs[i];
        let j = 0;
        for (; j < s.length; j++) {
            if (result[j] !== s[j]) {
                break;
            }
        }
        result = result.slice(0, j);
    }
    return result;
};
```







### 无重复字符的最长子串

```javascript
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
    if (!s || s.length === 0) return 0;
    const len = s.length;
    let ans = "";
    let maxLen = 0;
    let idx = 0;
    while (idx < len) {
        const rs = s[idx];
        const findIdx = ans.indexOf(rs);
        if (findIdx === -1) {
            ans += rs;
            idx++;
        } else {
            ans = ans.slice(findIdx + 1, idx);
        }
        maxLen = Math.max(ans.length, maxLen);
    }
    return maxLen
};
```

> https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

## 数组

### 二分查找

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, val) => {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = left + ((right - left) >> 1);
        const n = nums[mid];
        if (n < val) {
            left = mid + 1;
        } else if (n > val) {
            right = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}
```

> https://leetcode-cn.com/problems/binary-search/submissions/

### 最长连续递增序列

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
const findLengthOfLCIS = function (nums) {
    if (!nums || nums.length === 0) return 0;
    let maxSubSeq = 1;
    let result = maxSubSeq;
    const len = nums.length;
    for (let i = 1; i < len; i++) {
        if (nums[i] > nums[i - 1]) {
            maxSubSeq++;
        } else {
            maxSubSeq = 1;
        }
        result = Math.max(maxSubSeq, result);
    }
    return result;
};
```

> https://leetcode-cn.com/problems/longest-continuous-increasing-subsequence/

### 最长连续序列

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function (nums) {
    if (!nums || nums.length === 0) return 0;
    const dupNums = [...new Set(nums)];
    dupNums.sort((a, b) => a - b);
    let maxSubSeq = 1;
    let result = maxSubSeq;
    let left = 0;
    let right = 1;
    let len = dupNums.length;
    while (right < len) {
        if ((dupNums[left] + 1) === dupNums[right]) {
            maxSubSeq++;
        } else {
            maxSubSeq = 1;
        }
        left++;
        right++;
        result = Math.max(maxSubSeq, result);
    }
    return result;
};
```

> https://leetcode-cn.com/problems/longest-consecutive-sequence/

### 盛水最多的容器

* 既然是盛水最快，容器肯定是高度最高，宽度最宽

```javascript
const maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let maxCapacity = 0;
    while (left < right) {
        const leftHeight = height[left];
        const rightHeight = height[right];
        const currCapacity = Math.min(leftHeight, rightHeight) * (right - left);
        if (currCapacity > maxCapacity) {//计算出当前容量与上一次容量做对比，如果当前容量 > 上一次的容量,则当前容量作为最大容量
            maxCapacity = currCapacity;
        } else {//否则缩小范围看看，有没有更高侧面
            if (leftHeight < rightHeight) {//高度小的一侧，优先缩小。
                left++;
            } else {
                right--;
            }
        }
    }
    return maxCapacity;
};
```

> https://leetcode-cn.com/problems/container-with-most-water/

### 删除有序数组中的重复项

* 快慢指针思想

```javascript
const removeDuplicates = function (nums) {
    const len = nums.length;
    let left = 0;
    let right = 1;
    while (right < len) {
        if (nums[left] !== nums[right]) {
            nums[++left] = nums[right];
        }
        right++;
    }
    return left + 1;
};
```

> https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/

### 和为K的子数组个数

* pre[i] = nums[0]+...+nums[i] ; `pre`表示前缀和
* pre[i] = k + pre[i-1];
* pre[i] - k = pre[i-1];

```javascript
/** 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = function (nums, k) {
    if (!nums || nums.length === 0) return 0;
    let count = 0;
    let len = nums.length;
    const map = new Map();
    map.set(0, 1);
    let pre = 0;
    for (let i = 0; i < len; i++) {
        const n = nums[i];
        pre += n;
        if (map.has(pre - k)) {
            count += map.get(pre - k);
        }
        if (map.has(pre)) {
            map.set(pre, map.get(pre) + 1);
        } else {
            map.set(pre, 1);
        }
    }
    return count;
};
```

> https://leetcode-cn.com/problems/subarray-sum-equals-k/

### 跳跃游戏

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function (nums) {
    const len = nums.length;
    let faster = 0;
    for (let i = 0; i < len; i++) {
        if (i > faster) {
            return false;
        }
        faster = Math.max(faster, i + nums[i]);
    }
    return true;
};
```

> https://leetcode-cn.com/problems/jump-game/

## 二叉树



### 二叉树的最近公共节点

```javascript
const lowestCommonAncestor = function (root, p, q) {

    let ans = null;
    const dfs = (node, p, q) => {
        if (!node) return null;
        if (node === p || node === q) {//表示在树中找到了p或者q相等的节点
            return root;
        }
        const left = dfs(node.left, p, q);
        const right = dfs(node.right, p, q);
        if (left !== null && right !== null) {//表示树中存在p,q，表示找到了返回父节点。
            return root;
        } else if (left !== null) {//可能父节点是自身
            return left
        } else if (right !== null) {//可能父节点是自身
            return right;
        }
        return null;
    }
    return dfs(root, p, q);
};
```

> https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/

### 二叉树搜索

* 当前节点比`val`大，去左边找
* 当前节点比`val`小，去右边找
* 最后返回匹配到的树及其子节点

```javascript
const searchBST = function (root, val) {
    const dfs = (node) => {
        if (!node) return null;
        return node.val > val ? dfs(node.left) : node.val < val ? dfs(node.right) : node;
    }
    return dfs(root);
};
```

> https://leetcode-cn.com/problems/search-in-a-binary-search-tree/

### 二叉树的最小深度

深度优先（DFS）

```javascript
const minDepth = function (root) {
    if (!root) return 0;
    const dfs = (node) => {
        if (!node) return 0;
        if (!node.left && !node.right) return 1;
        let ans = Number.MAX_SAFE_INTEGER;
        if (node.left) {
            ans = Math.min(dfs(node.left), ans);
        }
        if (node.right) {
            ans = Math.min(dfs(node.right), ans);
        }
        return ans + 1;
    }
    return dfs(root);
};
```

广度优先（BFS）

```javascript
const minDepth = function (root) {
    if (root === null) return 0;
    let minHeight = 1;
    let queue = [];
    queue.unshift(root);
    while (queue.length > 0) {
        const levelLen = queue.length;
        for (let i = 0; i < levelLen; i++) {
            const node = queue.pop();
            if (!node.left && !node.right) return minHeight;
            node.left && queue.unshift(node.left);
            node.right && queue.unshift(node.right);
        }
        minHeight++;
    }
    return minHeight;
};
```

> https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/

### 完全二叉树的节点个数

```javascript
const countNodes = function (root) {

    if (!root) return 0;

    let leftHeight = 0;
    let rightHeight = 0;
    let left = root, right = root;

    while (left) {//计算左树高度
        leftHeight++;
        left = left.left;
    }

    while (right) {//计算右树高度
        rightHeight++;
        right = right.right;
    }

    if (leftHeight === rightHeight) {//如果左右树高度相同，二叉树满节点
        return Math.pow(2, leftHeight) - 1;//满节点计算公式
    }

    return 1 + countNodes(root.left) + countNodes(root.right);
};
```

> https://leetcode-cn.com/problems/count-complete-tree-nodes/

### 数组转树

```javascript
const arr = [
   {
     val: 1,
   },
   {
     val: 2
   },
   {
     val: 3,
     parent: 1,
   },
   {
     val: 4,
     parent: 2,
   },
   {
     val: 5,
     parent: 3,
   },
   {
     val: 6,
     parent: 4,
   },
   {
     val: 7,
     parent: 5,
   }
];

const arrayToTree = (arr) => {
  const toTree = (arr, parent) => {
    const children = [];
    for (const item of arr) {
      if (item.parent === parent) {
        children.push({
          val: item.val,
          children: toTree(arr, item.val)
        });
      }
    }
    return children;
  }
  const tree = {
    val: -1,
    children: arr.filter(item => !item.parent).map(item => ({ val: item.val, children: toTree(arr, item.val) }))
  }
  return tree;
}
const tree = arrayToTree(arr);
```





## 动态规划

### 斐波拉契数列

`dp[0]=1,dp[1]=1`

`dp[i]=dp[i-1]+dp[i-2]`

```javascript
const fib = function (n) {
    const dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};
```

> https://leetcode-cn.com/problems/fibonacci-number/

### 零钱兑换

* `dp[i-face]+1 = dp[i]`
* `dp[i]`筹齐`i`需要的最少零钱个数

```javascript
const coinChange = function (coins, n) {
    if (n < 1) return 0;
    const dp = [0];
    for (let i = 1; i <= n; i++) {
        let minCount = Number.MAX_VALUE;
        for (const face of coins) {
            if (i < face) continue;
            minCount = Math.min(minCount, dp[i - face] + 1);
        }
        dp[i] = minCount;//筹齐i分需要的最少硬币个数
    }
    return dp[n] > n ? -1 : dp[n];
};
```

> https://leetcode-cn.com/problems/coin-change/submissions/

### 爬楼梯

```javascript
/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
    const dp = [1, 1];
    for (let i = 1; i <= n; i++) {
        dp[i] = dp[i - 1] + (dp[i - 2] || 0);
    }
    return dp[n];
};
```

> https://leetcode-cn.com/problems/climbing-stairs/

## 回溯

### 全排列

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
    const result = [];
    const dfs = (nums, track = []) => {
        if (track.length === nums.length) {
            result.push(track.slice());//枚举一组够了就放入结果
            return;
        }
        for (const item of nums) {
            if (track.includes(item)) continue;//避免重复
            track.push(item);
            dfs(nums, track);
            track.pop();//回溯的时候移出数组元素，方便后面继续做选择
        }
    }
    dfs(nums);
    return result;
};
```

> https://leetcode-cn.com/problems/permutations/

















































