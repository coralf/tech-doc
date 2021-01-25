# 数据类型

## 原始类型
`string` `number` `boolean` `null` `undefined` `symbol`
## 对象类型
`Date` `RegExp` `Global` `Math` `Map` `Set` `Object` `Array` `Boolean` `Number` `String` ...



# var、let、const之间的区别

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





```



## apply

```javascript




```





## call

```javascript



```





# this指向

*按照下面1-4顺序判断。*

1、是否是new 创建的；

2、是否调用call、apply、bind；

3、是否为隐式绑定 `const person={name:'xxx',run:function(){}}`；

4、是否默认绑定到了全局对象。非严格模式var 声明的默认会绑定到全局对象上面。



# 对象继承



## 组合继承

```javascript

```



# 代理反射





# 异步



## 微任务与宏任务

### 宏任务

setTimeout、setInterval、I/O、事件、postMessage、setImmediate（Node.js废弃）、requestAnimationFrame、UI渲染

### 微任务

Promise.then、MutationObserver、process.nextTick(Node.js)





























