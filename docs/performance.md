# 
# 衡量Web性能的几个指标

![image-20210324110914230](./assets/LCP-FID-CLS.png)

**LCP** 

大内容绘制时间 < `2.5s`，最长不能超过`4s`

**FID**

首次输入延迟时间 < `100ms`，最长不能超过`300ms`

**CLS**

CLS得分 < `0.1`，最高不能超过`0.25`

CLS = 元素在连续两帧相对于视口移动的位置百分比（distance fraction） * 元素在连续两帧内相对于视口的可见区域的总和(impact fraction)

```text
CLS = impact fraction * distance fraction
```

**TTI**

Time to Interactive : 页面完成渲染后，用户能够立马交互的时间。

**TBT**

Total Blocking Time : 从FCP到TTI总的阻塞时间。

**FCP**

从页面开始加载到有内容显示出来的时间

# 如何优化

* 避免阻塞的JavaScript文件引入
* 精简css样式的书写，减少不必要的解析、移出不被使用的css、使用css预加载
* 缩短服务端响应时间，减少网络请求次数
* 尽量避免重定向带来的页面重新加载
* 避免不必要的大资源`preload`
* 使用缓存
* 避免深层的dom嵌套



# 性能监控

**Lighthouse 生成指标测试报告**

**PerformanceObsever API 性能指标监控**







