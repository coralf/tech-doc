# HTML、DHTML、XHTML之间的区别

DHTML指是的javaScript+html，动态html。XHTML是使用xml的规范来编写html。

# 常用块元素

`div` `table` `form` `p` `ul` `li` `ol` `h1~h6` `hr`

# 常用行内元素

`a` `abbr` `br` `input` `em` `code` ` span` ` strong` ` video` ` audio` `textarea` `u` `lable` `img`

# 语义化

`aside`:表示独立的一块内容，单独拆分出来不会影响整体。

`footer`:表示页面底部。

`header`:页面头部，里面放logo、标题、导航等。

`main`:页面主体。

`nav`:导航栏。

`section`:表示单独的一块。



# HTML5新特性

## 音频

`video` `audio`

## 定位

`navigator.geolocation`

## 图形

`svg` `canvas`

## 存储

`localStorage` `sessionStorage` `IndexedDB`  `cookie`(非新增)



## 应用缓存

`manifest`



## Web Workers

Web Worker可以让JavaScript代码在后台运行。

`const worker = new Worker('xxx.js')`

监听worker消息

```javascript
worker.onmessage=function(event){
  
}
```

向worker发送消息

```javascript
worker.popostMessage({msg:'xxx'});
```

终止worker

```javascript
worker.terminate();
```



## Server-Sent Event

使用EventSource创建的对象用于监听服务端推送的消息。

```javascript
const eventSource = new EventSource(url);
```

一但服务端有消息推送会触发onmessage回调。

```javascript
eventSource.onmessage=function(e){
  console.log(e.data);
}
```

## 表单

### 新增Input类型

`email` `number` `url` `range` `date` `month` `week` `time` `datetime` `datetime-local` `search`



### 新增元素

`<datalist></datalist>` 

`<keygen></keygen>` 目前只有这个被实现了

`<output></output>`

### 新增属性

#### form属性

`autocomplete` `novalidate（未被实现）`

#### input属性

`autocomplete` `autofocus` `min、max、step` `placeholder` `required`

## 拖放

`img`元素设置`draggable="true"`表示该元素可以被拖动，`ondragstart`为拖拽开始的回调。

`div`元素`ondrop`为元素被放置时的回调。

如果要将数据或元素放置到其他元素中`ondragover`回调需要阻止默认事件。

通过`dataTransfer`可以在元素之间传送数据。

```html

<img id="img" src="./show.png" draggable="true" ondragstart="dragStart(event)"/>
<div id="container" ondrop="drop(event)" ondragover="dragover(event)">

<script>
  function dragover(e){
    e.preventDefault();
  }
  function dragStart(e){
    e.dataTransfer.setData('id',e.target.id);
  }
  function drop(e){
    e.preventDefault();
    const data = e.dataTransfer.getData('id');
    e.target.appendChild(document.getElementById(data));
  }
</script>
```



## Web Socket

基于TCP、套字节、全双工、双向通讯。

url以`ws://`、`wss://（安全加密）`开头。

不受同源策略。

### 创建WebSocket

```javascript
let ws = new WebSocket("ws://www.example.com/server.php");
```


### 连接成功后发送消息

使用`send`发送消息，`close`关闭连接

```javascript
//方式1
ws.onopen = function () {
  ws.send('Hello Server!');
}
//方式2
ws.addEventListener('open', function (event) {
  ws.send('Hello Server!');
});
```



### 接收消息

```javascript
ws.onmessage = function(event) {
  var data = event.data;
  // 处理数据
};

ws.addEventListener("message", function(event) {
  var data = event.data;
  // 处理数据
});

```


### 状态

- CONNECTING：值为0，表示正在连接。
- OPEN：值为1，表示连接成功，可以通信了。
- CLOSING：值为2，表示连接正在关闭。
- CLOSED：值为3，表示连接已经关闭，或者打开连接失败。

```javascript
switch (ws.readyState) {
  case WebSocket.CONNECTING:
    // do something
    break;
  case WebSocket.OPEN:
    // do something
    break;
  case WebSocket.CLOSING:
    // do something
    break;
  case WebSocket.CLOSED:
    // do something
    break;
  default:
    // this never happens
    break;
}
```


### 连接关闭回调

```javascript
ws.onclose = function(event) {
  var code = event.code;
  var reason = event.reason;
  var wasClean = event.wasClean;
  // handle close event
};

ws.addEventListener("close", function(event) {
  var code = event.code;
  var reason = event.reason;
  var wasClean = event.wasClean;
  // handle close event
});
```



> 参考：http://www.ruanyifeng.com/blog/2017/05/websocket.html

# Web Components

## 自定义元素

Web Components允许自定义web页面元素，通过继承dom接口的方式。

有两种方式可以自定义元素，第一种Autonomous custom elements为完全自定义元素，第二种Customized built-in elements暂且就叫半自定义元素吧。

### Autonomous custom elements

这种方式直接继承HTMLElement对象实现完全自定义元素，使用这种方式自定义元素就相当于新创建了一个dom元素类型，可以像div、p一样使用。

调用`customElements.define`第一个参数表示html页面元素的名字，第二个参数是自定义元素的类。

```javascript
class MyEl extends HTMLElement {
  constructor() {
    super();
    //做自定义操作
    this.style.color = '#ff6b6b';
  }
}
customElements.define('my-el', MyEl);
```

```html
<my-el>自定义的元素</my-el>
```



### **Customized built-in elements**

这里需要在`customElements.define`方法中传入第三个参数，`extennds`表示继承的元素。

使用的时候在对应元素上面使用`is`属性指定。

```javascript
class MyDiv extends HTMLDivElement {
  constructor() {
    super();
    //做自定义操作
    this.style.color = '#ff6b6b';
  }
}
customElements.define('my-div', MyDiv,{extends:'div'});
```

```html
<div is='my-div'>自定义div</div>
```

> 自定义元素可继承的接口 
>
> https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model#HTML_%E6%8E%A5%E5%8F%A3



## Shadow DOM

Shadow DOM 可以将一个隐藏的、独立的 DOM 附加到一个元素上，就相当于DOM中的DOM。

Shadow DOM可以隔绝上下文，相当于独立出来的一部分。外面与里面的DOM互不影响。

```javascript
class MyElement extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const div = document.createElement('div');
    const style = document.createElement('style');
    style.textContent = `
          .box{
            width:200px;
            height:100px;
            background:#ff6b6b;
          }
      `;
    div.setAttribute('class', 'box');
    shadow.appendChild(style);
    shadow.appendChild(div);
  }
}
customElements.define('my-element', MyElement);

```

```html
<my-element>自定义元素与Shadow DOM</my-element>
```



> const shadow = this.attachShadow({ mode: 'open' });
>
> mode:'open' 外面可以通过myElement.shadowRoot来获取里面的DOM，如果为closed则返回null



## Template/Slot

在页面中`template`中的元素不会被直接渲染出来，只有通过DOM添加到时才会渲染。

`slot`是一个插槽，如果指定了一个元素slot属性，则该元素相当于替换slot的标签。

```html
<template id='my-temp'>
  <p>
    block-p
  </p>
  <div>
    slot outer
    <slot name='sl'>
      slot inner
    </slot>
  </div>
</template>

<my-block>
  <p slot="sl">
    xxxxx
  </p>
</my-block>
```

```javascript
customElements.define('my-block',(
  class MyBlock extends HTMLElement{
    constructor(){
      super();
      const template = document.getElementById('my-temp');
      const shadow = this.attachShadow({mode:'open'});
      shadow.appendChild(template.content.cloneNode(true));//只有这个时候才会渲染template标签中的内容
    }
  }
));
```





























