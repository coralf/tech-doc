# 选择器

## 普通选择器

类：`.box`

id:`#box`

后代:`div p`

子元素:`div > p`

相邻兄弟:`div + p`，选中div后面的元素，第二个元素需要紧跟在第一个元素后面，才会选中第二个元素，只会选择一个。

普通兄弟：`div ~ p`，选中div后面的元素，不需要紧挨着，只需要同层级，选中所有。

分组选择：`div,p`，选择div和p。

属性:`[属性名=属性值]`，属性值是可选的，=号前面可以还可加，*(包含属性值)，$(以属性值结尾的)，~(包含属性值，且属性值被空格分割)。

```css
a[title]{}选择有title属性的元素
a[title="abc"]{}选择有title的值为abc的元素
a[title*="abc"]{}选择title的值包含abc的元素
a[title|="abc"]{}选择title的值以abc开头的元素，或者以abc-开头的元素
a[title^="abc"]{}选择title的值以abc开头的元素
a[title$="abc"]{}选择title的值以abc结尾的元素
a[title~="abc"]{}选择title的值以空格分开abc字符串的元素
a[title="abc" i]{}不区分大小写
a[title="abc" s]{}区分大小写
```

## 伪类

`:first-child`:选中第一个子元素。

`:last-child`:选中最后一个子元素。

`:first-of-type`:同一个父元素下，第一个元素，嵌套有效。

`:last-of-type `:同一个父元素下，最后一个元素，嵌套有效。

`:nth-child(n)`:同一个父元素下，选中第n个。

`:nth-of-type(n)`: 同一个父元素下按类型选中第n个。不是这个类型的则不会被选中。

`:root`声明全局变量

**a标签的书写顺序（LVHA）**

```css
a:link{} a:visited{} a:hover{} a:active{}
```

## 伪元素

`p::after`选中p的最后一个子元素，可以使用`content:'xxx'`来插入内容。

`p::before`：与`::after`对应。

`p::first-letter`:选中第一行第一个字母。

`p::first-line`:选择第一行，只能在块元素中有效。

## 优先级计算

> 第一等：代表内联样式，如: style=""，权值为1000。
>
> 第二等：代表ID选择器，如：#content，权值为0100。
>
> 第三等：代表类，伪类和属性选择器，如.content，权值为0010。
>
> 第四等：代表类型选择器和伪元素选择器，如div，权值为0001。
>
> 通配符、子选择器、相邻选择器、兄弟选择器。如*、>、+,权值为0000，优先级仅高于继承
>
> 继承的样式没有权值
>
> !important 拥有最高权值（高于内联）
>
> 这篇文章讲得很好 https://www.cnblogs.com/lvonve/p/11250196.html

*在计算css优先级的时候直接把样式中有的优先级相加就行了，数值越大优先级越高。*

# 层叠性

层叠性根据不同来源的css样式划分，来规定css的应用的优先级。

程序员编写的代码 > 用户（用浏览器的人）> 用户代理（浏览器默认）

# 包含块

一个元素的包含块，影响该元素的位置和大小。一般来说一个元素的包含块是它的祖先元素。

1、position为static、sticty、relative的包含块为它的父元素。

2、position:absolute的包含块为最近非static元素。

3、position:fixed为viewport(视口)

4、position为absolute或fixed元素的包含块也可能是父元素为以下几种情况。

- `transform`或者`perspective`的值不为none；
- `will-change`的值为`transform 或 perspective `；
- `filter`的值不为`none`或者`will-change`的值为`filter`(Firefox有效)；
- `contain`的值为`paint`。



# 盒子模型

## content-box

width的设置只限制content(内容)，盒子的实际宽度为border+padding+content，设置padding，border会撑大盒子。

## border-box

width的设置限定了border+padding+content，如果padding和border的增加，只会让盒子往里撑。

*如果盒子内部padding、border的值超过了盒子本身宽高，盒子依然会被撑大。*

> 不管是content-box还是border-box，outline不占任何空间。

## 包含块

包含块是一个元素，它作为其他元素的尺寸、位置计算的参考元素。

比如一个元素定位为`position:fixed`,那么它的包含块就是视口。

## BFC

**块级格式化上下文**，BFC规定了块级盒子的布局规则。

### 布局规则

1、内部的盒子会在垂直方向一个一个放置。

2、盒子垂直方向的距离由margin决定，属于同一个BFC的两个相邻盒子上下的margin会发生重叠。

3、每个元素的左边，与包含的盒子的左边相接触，即使存在浮动也是如此。

4、BFC的区域不会与float重叠。

5、BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之也如此。

6、计算BFC的高度时，浮动元素也参与计算。

### 产生BFC的条件

1、根元素；

2、float的属性不为none；

3、position为absolute或fixed；

4、display为inline-block，table-cell，table-caption，flex；

5、overflow不为visible；

6、display:flow-root

## IFC

**行级格式上下文**，IFC规定了行级盒子的布局规则。

### 布局规则

1、内部的盒子会在水平方向，一个个地放置。

2、IFC的高度，由里面最高盒子的高度决定。

3、当一行不够放置的时候会自动切换到下一行。

# 布局

## 浮动

```html
<style>
  .row {

  }
  .row::after {
    content: '';
    display: block;
    clear: both;
  }
  .col {
    width: 30%;
    height: 200px;
    float: left;
  }
</style>
<div class="row">
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
</div>
```

### 清除浮动的方式

1、伪元素。

```css
.row::after {
  content: '';
  display: block;
  clear: both;
}
```

或者

```css
.row::after {
  content: '';
  display: block;
  overflow:hidden;
}
```

2、在最后插入一个子元素`<div style='clear:both'></div>`;

3、将父元素css设置为`display:flow-root`或者`overflow: hidden;`;

## flex
> http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html

## grid
> http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html
>
> https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Grids

## 几种经典布局方式
> https://lhammer.cn/You-need-to-know-css/#/zh-cn/fluid-fixed

# 定位

`absolute`：相对最近非static的父元素定位，脱离文档流，形成BFC；

`fixed`：相对视口定位，脱离文档流，形成BFC；

`relative`：相对父元素定位，正常文档流；

`static`：默认定位，正常文档流；

`sticky`：粘性定位（滚动固定），正常文档流；

> https://developer.mozilla.org/zh-CN/docs/Web/CSS/position

# 字体
> https://developer.mozilla.org/zh-CN/docs/Web/CSS/font

# 圆角
> https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-radius

# 边框
> 边框 https://developer.mozilla.org/zh-CN/docs/Web/CSS/border
> 轮廓 https://developer.mozilla.org/zh-CN/docs/Web/CSS/outline

# 背景
> https://developer.mozilla.org/zh-CN/docs/Web/CSS/background

# 阴影
> https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow

# 渐变

> 线性渐变：https://developer.mozilla.org/zh-CN/docs/Web/CSS/linear-gradient()

> 径向渐变：https://developer.mozilla.org/zh-CN/docs/Web/CSS/radial-gradient()

> 重复线性渐变：https://developer.mozilla.org/zh-CN/docs/Web/CSS/repeating-linear-gradient()
>
> 重复径向渐变：https://developer.mozilla.org/zh-CN/docs/Web/CSS/repeating-radial-gradient()

# 变换
> https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform

# 动画

## Animation

**动画书写规则**

`animation:动画名、持续时间、运动函数、延迟多久执行、动画执行多少次、动画方向、动画执行完成后如何应用CSS样式`

> 时间是单位都是s或者ms

**运动函数**

```css
animation-timing-function: ease、ease-in、ease-out、ease-in-out、linear、steps()、cubic-bezier(0.1, 0.7, 1.0, 0.1)
```

**动画执行多少次**

```css
animation-iteration-count: infinite、数字;
```

**动画方向**

```css
animation-direction: reverse;//从动画完结状态开始执行
animation-direction: alternate;//交替执行
animation-direction: alternate-reverse;//混用
```

**动画执行完成后如何应用CSS样式**

```css
animation-fill-mode: forwards;//完成后不会恢复原来状态
animation-fill-mode: backwards;//恢复原来状态
```

**动画名**

```css
//方式1
@keyframe 动画名{
  from{
    css样式
  }
  to{
    css样式
  }
}

//方式2
@keyframe 动画名{
  0%{
    css样式
  }
  50%{
    css样式
  }
  ...
  100%{
    css样式
  }
}
```

## 过渡（Transition）

**书写规则**

```css
transition:css属性 、持续时间、运动函数、延迟多久执行。
```

> 1、可以配合hover伪类和js来使用
>
> 2、只要transition-property监听的值发生了变化，就会执行动画。



## css动画实现抛物线运动轨迹

css不管是通过animation还是transition都无法实现曲线运动。这里是曲线运动使用两个元素配合来完成抛物线。一个元素往X轴运动，另一个往Y轴运动，然后通过cubic-bezier这个函数使两个元素不同时间运动的快慢不一样。就形成了抛物线的运动轨迹。

**css**

```css
 .container {
   position: absolute;
   left: 500px;
   top: 500px;
}

.box {
  width: 20px;
  height: 20px;
  /* background-color: coral; */
  background-color: transparent;
  border-radius: 50%;
  animation: xAxis 2s infinite cubic-bezier(.6, .28, .68, .58);
}

.box::after {
  content: '';
  display: block;
  width: 20px;
  height: 20px;
  background-color: aquamarine;
  /* background-color: transparent; */
  border-radius: 50%;
  animation: yAxis 2s infinite cubic-bezier(0, 1.48, .77, 1.74);
}

@keyframes xAxis {
  100% {
    transform: translateX(200px)
  }
}

@keyframes yAxis {
  100% {
    transform: translateY(-200px);
  }
}
```

**html**

```html
<div class='container'>
   <div class='box'></div>
</div>
```

# 滤镜

> https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter

# 裁剪
> https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path

# 单位

> https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Values_and_Units

# 参考

> MDN : https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference
>
> 你需要知道的css：https://lhammer.cn/You-need-to-know-css/#/zh-cn/