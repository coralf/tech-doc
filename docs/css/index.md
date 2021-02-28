# 选择器

## 普通选择器

类：`.box`

id:`#box`

后代:`div p`

子元素:`div > p`

相邻兄弟:`div + p`，第二个元素需要紧跟在第一个元素后面，才会选中第二个元素，只会选择一个。

普通兄弟：`div ~ p`，不需要紧挨着，只需要同层级，选中所有。

属性:`[属性名=属性值]`，属性值是可选的，=号前面可以还可加，*(包含属性值)，$(以属性值结尾的)，~(包含属性值，且属性值被空格分割)。

## 伪类

`:first-child`:选中第一个子元素。

`:last-child`:选中最后一个子元素。

`:first-of-type`:同一个父元素下，第一个元素，嵌套有效

`:last-of-type `:同一个父元素下，最后一个元素，嵌套有效

`:nth-child(n)`:选中第几个。

`:nth-of-type(n)`: 按类型选择第几个。

`:root`声明全局变量

**a标签的书写顺序**

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
> 第四等：代表类型选择器和伪元素选择器，如div p，权值为0001。
>
> 通配符、子选择器、相邻选择器等的。如*、>、+,权值为0000。
>
> 继承的样式没有权值
>
> !important 拥有最高权值



# 盒子模型

## content-box

width的设置只限制content(内容)，盒子的实际宽度为border+padding+content

## border-box

width的设置限定了border+padding+content，如果padding和border的增加，只会让盒子往里撑。盒子的宽度不会发生变化。

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

5、overflow不为visible

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

## 几种经典布局方式
> https://lhammer.cn/You-need-to-know-css/#/zh-cn/fluid-fixed

# 定位
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

# 滤镜
> https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter

# 裁剪
> https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path

# 参考
> MDN : https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference
> 你需要知道的css：https://lhammer.cn/You-need-to-know-css/#/zh-cn/