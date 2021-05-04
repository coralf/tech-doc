

# React技术栈

# React

## React生命周期

### React 16之前的生命周期

![5287253-315eac1c26082f08](assets/5287253-315eac1c26082f08.png)

### React 16+的生命周期

**1、挂载阶段**

- constructor()

- getDerivedStateFromProps()
- render()
- componentDidMount()

2、**更新阶段**

props改变、state改变、调用foreUpdate方法这三种情况组件会发生更新。

- getDerivedStateFromProps() 
- shouldComponentUpdate()
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate() 

**3、卸载**

- componentWillUnmount()

![image-20210221135604894](./assets/image-20210221135604894.png)

> https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

### React16+ 后移出的生命周期

由于fiber架构更新组件的任务是可以被中断的，这样就会导致生命周期方法被多次调用执行，React 16 + 移出了`componentWillMount`、`componentWillReceiveProps`、`componentWillUpdate`,并使用静态方法

`static getDerivedStateFromProps(props, state)`替代。



## React Fiber原理

### **React Fiber架构分为3层**

* 虚拟dom：描述页面
* Reconciler：调用生命周期，进行diff计算
* Renderer：根据不同的平台渲染出响应的页面

### Fiber特性

* Fiber更新是可中断的
* 优先级

### 优先级的任务调度

* synchronous：同步执行（首屏、首次渲染）
* task : 由浏览器空闲时间调度（requestIdleCallBack）
* animation : 下一帧之前执行
* hight : 不久的将来执行
* low : 表示优先级低，延迟执行
* offscreen : 下一次render，或者scroll (滚动) 的时候执行



## React 源码分析

React完成一次渲染调用的方法栈。从render到appendChildToContainer方法React完成首次渲染。

### 渲染主流程方法分析

- render()

- legacyRenderSubtreeIntoContainer()

- unbatchedUpdates()

- updateContainer()

- scheduleUpdateOnFiber()

- performSyncWorkOnRoot()

- commitRoot()

- runWithPriority$1()

- Scheduler_runWithPriority()

- unstable_runWithPriority()

- commitRootImpl()

  首次初始化nextEffect

- invokeGuardedCallback()

- invokeGuardedCallbackImpl$1()

  react 通过invokeGuardedCallbackImpl方法自定义事件来更新dom。

  ```javascript
  var evtype = 'react-event-callback';
  var react = document.createElement('react');
  react.addEventListener(evtype, function (e) {
    console.log('call Back');
  });
  var ev = document.createEvent('Event');
  ev.initEvent(evtype, false, false);
  react.dispatchEvent(ev);
  ```

- invokeGuardedCallbackDev()

  自定义事件实现dom更新

- callCallback()

- commitMutationEffects()

  nextEffect
  ​循环取nextEffect不为空的情况，更新容器。

- commitPlacement()

- getHostParentFiber()

- insertOrAppendPlacementNodeIntoContainer()

- appendChildToContainer()

## Component与PureComponent

PureComponent内部实现了shouldComponentUpdate函数来对props和state进行浅对比来决定是否渲染更新组件。

component则会直接更新，或者自行实现shouldComponentUpdate来决定是否渲染更新。

*如果父组件不是纯组件，子组件是纯组件。子组件的props的值与上一次一样时，还是会更新子组件。*

*难道props指的是纯组件传给子组件的props？*



## 纯组件

使用props与state的浅对比用于是否更新数据；

PureComponent：用于class组件；

React.memo：用于函数式组件



## useMemo & useCallback & memo

React数据的更新会导致整个组件重新发生渲染，使用这三个API是为了优化性能避免组件、数据和声明的函数造成不必要的更新。

只有第二个参数中的数组中的变量发生改变时才会回调更新。

```javascript
useMemo(()=>fn,[a,b,c]);用来缓存数据与React.memo()搭配使用
React.memo();用来缓存组件
userCallback(fn,[a,b,c]);用来缓存函数
```



## 多层组件传值Context

```react
//组件外
const Context = React.createContext({});

//组件内
<Context.Provider value={{name:'xxx'}}>
  	<App/>
</Context.Provider>


//子组件中
<Context.Consumer>
  {
    value=>(
      <Comp {...value}/>
    )
  }
</Context.Consumer>

//函数式组件中
//使用了该hook的函数组件，Context的值一但修改就会更新渲染该组件
const value = React.useContext(Context);

```





## 其他

### 1、React 17中为什么要把事件的绑定从document到root元素？

如果把事件绑定到document中，就算调用`stopPropagation()`仍然会触发` document.addEventListener();`

```react
class App extends React.Component {
  componentDidMount() {
    document.addEventListener("click", this.handleClickOnDocument);
    window.addEventListener("click", this.handleClickOnWindow);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOnDocument);
    window.removeEventListener("click", this.handleClickOnWindow);
  }

  handleClickOnDocument = e => {
    console.log("handling event on document");
  };

  handleClickOnWindow = e => {
    console.log("handling event on window");
  };

  render() {
    return (
      <div onClick={() => console.log("handling event on div")}>
        <button
          onClick={e => {
            e.stopPropagation();
          }}
        >
          Click Me
        </button>
      </div>
    );
  }
}
```

**Output:**

`handling event on document`







# redux





# mobx





# react-router





























