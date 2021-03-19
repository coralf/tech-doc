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

```









4、css画饼图

5、css画三角形

6、单行、多行超出处理

7、css画水波纹


## javascript
1、实现节流、防抖

2、实现Promise

3、手写发布订阅模式

4、实现new

5、手写组合继承

6、实现深拷贝

7、实现bind、call、apply

8、实现Promise.all()

9、实现元素拖拽

10、实现instanceof 

11、实现单例(全局弹窗)

12、实现reduce

13、实现Object.create()



## 算法

1、数据去重

2、扁平化数组