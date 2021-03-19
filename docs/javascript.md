# JavaScript

# 数据类型

## 原始类型
`string` `number` `boolean` `null` `undefined` `symbol` `bigInt`
## 对象类型
`Date` `RegExp` `Global` `Math` `Map` `Set` `Object` `Array` `Boolean` `Number` `String` ...



# var、let、const

`var`可重复定义、没有块级作用域。

`let`与`const`用来定义变量，都有块级作用域 ,`let`可变，`const`不可变。



# 函数

## 1、普通函数

变量提升时函数优先

```javascript
function test(){
  //
}
```

## 2、箭头函数

this指向与外层的非箭头函数保持一致。

```javascript
const test = ()=> {
  //
}
```

## 3、变量声明

```javascript
const test = function(){
//
}
```



# 闭包

## 什么是闭包？

闭包是用来保存哪些本该被回收的变量，也可以说闭包会延长变量的使用周期。

## 节流

```javascript
const throttle = (function () {
  let timer = null;
  return function (seconds) {
    if (timer === null) {
      timer = setTimeout(() => {
        console.log('=>>');
        clearTimeout(timer);
        timer = null;
      }, seconds);
    }
  }
})();
```



## 防抖

```javascript
const antShaking = (function () {
  let timer = null;
  return function (seconds) {
    if (timer === null) {
      console.log('=>>')
    } else {
      if (new Date().getTime() - timer > seconds) {
        console.log('=>>x');
      }
    }
    timer = new Date().getTime();
  }
})();
```





## bind

```javascript
Function.prototype.bind = function (...args) {
  const [target, ...rest] = args;
  const fNOP = function () { };
  const excuteFun = this;
  const fbound = function (...restParam) {
    const composeArgs = [].concat(rest).concat(restParam);
    return excuteFun.apply(fNOP.prototype.isPrototypeOf(this) ? this : target, composeArgs)
  }
  if (this.prototype) {
    fNOP.prototype = this.prototype;
  }
  fbound.prototype = new fNOP();
  return fbound;
}

//极度精简版
Function.prototype.mybind1 = function (...args) {
  const [target, ...rest] = args;
  return (...param) => {
    this.apply(target, [...(rest || []), ...param]);
  };
}
```



## apply

```javascript
Function.prototype.myapply = function (ctx, ...param) {
  const Fun = function () { };
  Fun.prototype = ctx;
  Fun.prototype.excuteFun = this;
  const obj = new Fun();
  obj.excuteFun(...param);
}
```

## call

```javascript
Function.prototype.mycall = function (...args) {
  const [ctx, ...rest] = args;
  const Fun = function () { };
  Fun.prototype = ctx;
  Fun.prototype.excuteFun = this;
  const obj = new Fun();
  obj.excuteFun(...rest);
}
```





# this指向

*按照下面1-4顺序判断。*

1、是否是new 创建的；

2、是否调用call、apply、bind；

3、函数被某个对象调用 `obj.test()`;

4、是否默认绑定到了全局对象。非严格模式var 声明的默认会绑定到全局对象上面。

> 箭头函数的this指向与它的外层函数保持一致

# 对象继承

## 组合继承

**组合继承实现步骤**

1、调用`call()`继承属性

2、`prototype`继承方法

3、修复构造函数

```javascript
const Animal = function () {

  this.run = () => {
    console.log('Animal running');
  }
}
const Cat = function () {
  Animal.call(this)
  this.name = 'miaom';
}

Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;
console.log(new Cat());
console.log(Cat.prototype.constructor);
```



# 代理反射

## Reflect

**1、不能实例化提供可调用的静态方法**。

**2、Reflect里面的方法与Object中方法类似。**

> Reflect方法与Object方法的不同点
>
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/Comparing_Reflect_and_Object_methods

### Reflect.apply()

与`Function.prototype.apply()`类似

```javascript
function test(...param) {
  console.log(param);
}
Reflect.apply(test, null, [1, 2, 3]);//output => [1,2,3]
```

### Reflect.defineProperty()

与`Object.defineProperty()`类似

```javascript
const obj = {
  _name: 'xxx'
};
Reflect.defineProperty(obj, 'name', {
  enumerable: false,//是否可以使用for in 和Object.keys()
  configurable: false,//是否可以被删除
  writable: false,//可写
  get() {
    return this._name;
  },
  set(val) {
    this._name = val;
  }
})
obj.name = '90';
console.log(obj.name);
```



## Proxy

**target** : 被代理的对象

**handler** ：处理对象

**捕捉器**：handler中的方法

```javascript
const handler={
  	get(){},
  	set(){},
  	defineProperty(){}
    ...
}
const pObj = new Proxy(target,handler);
```



# 异步



## JS中的异步

由于js的执行是单线程。在js中有两个队列来执行异步任务，一个是执行微任务的队列，一个是执行宏任务的队列。微任务执行的优先级高于宏任务。

## 微任务与宏任务

### 宏任务

setTimeout、setInterval、I/O、事件、postMessage、setImmediate（Node.js废弃）、requestAnimationFrame、UI渲染

### 微任务

Promise.then、MutationObserver、process.nextTick(Node.js)



## 异常处理

try 或 catch 块无法阻止 finally 块执行，包括 return 语句。