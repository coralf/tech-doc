# 网络协议



## http

### http 缓存

`pragma`与catche-control相似，http1.0

`expires` 缓存的过期时间，GMT格式时间，http1.0

`cache-control `:设置缓存策略

1. no-storage:不缓存数据到本地
2. public :允许用户、代理服务器缓存数据
3. private:只允许用户缓存数据
4. max-age:缓存的有效时间，单位秒
5. no-cache:每次需要发请求给服务器询问缓存是否有变化，再决定如何使用缓存

> 优先级 ： pragma > cache-control > expires

**cache-control : no-cache 的情况**

1、

`last-modified :xxx ` 资源最后一次修改的时间(response携带)。

`if-modified-since:xxx` 把last-modified返回的时间再带回服务器（request携带）。

2、

`etag:xxx`资源的唯一标识（根据文件内容计算出来的值，如果文件修改了这个值就不一样了）。（response携带）

`if-none-match:xxx`把etag的值再带回服务器（request携带）





























