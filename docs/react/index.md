# React



## React 源码分析
React完成一次渲染调用的方法栈。从render到appendChildToContainer方法React完成首次渲染。







## 渲染主流程方法分析

### 1、render





### 2、legacyRenderSubtreeIntoContainer







### 3、unbatchedUpdates





### 4、updateContainer





### 5、scheduleUpdateOnFiber





### 6、performSyncWorkOnRoot





### 7、commitRoot



### 8、runWithPriority$1



### 9、Scheduler_runWithPriority



### 10、unstable_runWithPriority



### 11、commitRootImpl : eventHandler

​	首次初始化nextEffect

### 12、invokeGuardedCallback



### 13、invokeGuardedCallbackImpl$1

react 是通过invokeGuardedCallbackImpl方法自定义事件来更新dom的。

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



### 14、invokeGuardedCallbackDev

​	自定义事件实现dom更新



### 15、callCallback





### 16、commitMutationEffects

​	nextEffect
​	循环取nextEffect不为空的情况，更新容器。



### 17、commitPlacement

​	getHostParentFiber

### 18、insertOrAppendPlacementNodeIntoContainer



### 19、appendChildToContainer


































