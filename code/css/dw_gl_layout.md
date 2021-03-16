# css-布局 两边等宽中间自适应布局

我们通常使用圣杯布局和双飞翼布局来实现两边等宽中间自适应布局。

这两种布局的实现思路基本一致，但有一些细微的差别，先讨论一下圣杯布局。

## 一、圣杯布局

### 圣杯布局实现思路

圣杯布局的实现思路是通过设置父元素的`padding-left`、`padding-right`的值，让父元素左右的两边撑出足够容纳左右子元素的空间，然后调整左右两个子元素的定位。让子元素的位置移动到被父元素撑开空出来的位置。

### html

```html
<div class="container">
  <div class="center">中间</div>
  <div class="left">左边</div>
  <div class="right">右边</div>
</div>
```

### css

```css
.container {
  padding: 0 200px;
}

.container::after {
  content: '';
  clear: both;
  display: block;
}

.container>div {
  float: left;
  height: 100px;
}

.center {
  width: 100%;
  background-color: #f25f5c;
}

.left,
.right {
  position: relative;
  width: 200px;
}

.left {
  margin-left: -100%;
  left: -200px;
  background-color: #70c1b3;
}

.right {
  margin-left: -200px;
  left: 200px;
  background-color: #247ba0;
}
```

### 实现效果

![image-20210311195149059](/Users/mac/Library/Application Support/typora-user-images/image-20210311195149059.png)

## 二、双飞翼布局

### 1、html

```html
<div class="container">
  <div class="center">
    <div>
      中间
    </div>
  </div>
  <div class="left">左</div>
  <div class="right">右</div>
</div>
```



### 2、css

```css
.container>div {
  height: 100px;
  float: left;
}

.container::after {
  content: '';
  display: block;
  clear: both;
}

.center {
  width: 100%;
}

.center>div {
  background-color: #2a9d8f;
  margin: 0 200px;
  height: 100%;
}

.left,.right {
  width: 200px;
}

.left {
  background-color: #e76f51;
  margin-left: -100%;
}

.right {
  margin-left: -200px;
  background-color: #f4a261;
}
```

### 3、实现效果

![image-20210311200209899](/Users/mac/Library/Application Support/typora-user-images/image-20210311200209899.png)

## 总结



