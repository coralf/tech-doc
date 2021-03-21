# JavaScript

# 数据类型

javascript中目前一共有8中数据类型，其中原始（基本）类型有7种、剩下1种为引用类型。

## 原始类型
`string` `number` `boolean` `null` `undefined` `symbol` `bigInt`
## 对象类型
`Date` `RegExp` `Global` `Math` `Map` `Set` `Object` `Array` `Boolean` `Number` `String` ...

# var、let、const

`var`可重复定义、没有块级作用域。

`let`与`const`用来定义变量，都有块级作用域 ,`let`可变，`const`不可变。



# 函数

## 三种声明函数的方式

1、普通函数`function test(){}`

2、箭头函数`const test = ()=> {}`

3、变量声明`const test = function(){}`

> JavaScript中都是以变量来存储函数的，无法声明两个相同变量名，因此没有重载。

# 闭包

## 什么是闭包？

闭包是用来保存哪些本该被回收的变量，也可以说闭包会延长变量的使用周期。

## 闭包的应用

#### 节流

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



#### 防抖

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



# this

## this的绑定

* 当一个函数被调用时有一个活动记录（执行上下文），这个活动记录包含了函数执行的相关信息，this只是这个活动记录中的一个属性。
* this的指向取决于函数在哪里被调用。

*按照下面顺序判断。*

1、是否是new 创建的；

2、是否调用call、apply、bind；

3、函数被某个对象调用 `obj.test()`;

4、是否默认绑定到了全局对象。非严格模式var 声明的默认会绑定到全局对象上面。

5、箭头函数的this指向与它的外层函数保持一致

## this的优先级

> new > call 、apply 、bind > 隐式绑定 > 默认绑定

# 原型链

声明一个类（函数）会有一个`prototype`的属性，该属性默认指向`Object`。当实例化一个类后会自带一个`__proto__`的属性。这个属性是隐式的。

> 这两个属性的关系：`__proto__===prototype`

如果我们使用将一个类的`prototype`绑定一个对象的实例，这样就可以实现继承。这样就形成了原型链。

> Person === Person.prototype.constructor

# 继承

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

# 其他

1、try 或 catch 块无法阻止 finally 块执行，包括 return 语句。