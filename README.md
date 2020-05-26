# Regular Expression 正则表达式学习
### 正则表达式是用于匹配字符串中字符组合的模式。在 JavaScript中，正则表达式也是对象。这些模式被用于 RegExp 的 exec 和 test 方法, 以及 String 的 match、matchAll、replace、search 和 split 方法。
### 这是一些学习记录。

## 1、语法
```JavaScript
/正则表达式主体/修饰符(可选)
```
## 2、i 表示搜索不区分大小写, g表示匹配所有的，没有g则匹配到第一个就停止了
```JavaScript
const res_gcx = /gcx/i;
const str = 'hello, GCx!';
const startIndex = str.search(res_gcx);
```
## 3、常用方法search和replace
```JavaScript
const replace_res = 'sghifsdhgdfshugiSdfuhgfdj'.replace(/sd/ig,'*');
```
