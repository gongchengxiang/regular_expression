# Regular Expression 正则表达式学习
### 正则表达式是用于匹配字符串中字符组合的模式。在 JavaScript中，正则表达式也是对象。这些模式被用于 RegExp 的 exec 和 test 方法, 以及 String 的 match、matchAll、replace、search 和 split 方法。
### 这是一些学习记录。

## 1、语法
```JavaScript
/正则表达式主体/修饰符(可选)    (/pattern/modifiers)
```
## 2、i修饰符表示搜索不区分大小写, g修饰符表示匹配所有的，没有g则匹配到第一个就停止了
```JavaScript
const reg_gcx = /gcx/i;
const str = 'hello, GCx!';
const startIndex = str.search(reg_gcx); // 7
```
## 3、m修饰符表示多行(\n换行情况)匹配，如果目标字符串中没有 “\n” 字符，或者模式中没有出现 ^ 或 $，设置这个修饰符不产生任何影响。
```JavaScript
var str1 = "abcggab\nabcoab";
console.log(str1.match(/^abc/g)); // [ 'abc' ]
console.log(str1.match(/^abc/gm)); // [ 'abc', 'abc' ]
console.log(str1.match(/abc/g)); // [ 'abc', 'abc' ]
console.log(str1.match(/abc/gm)); // [ 'abc', 'abc' ]
console.log(str1.match(/ab$/g)); // [ 'ab' ]
console.log(str1.match(/ab$/gm)); // [ 'ab', 'ab' ]
```


## n、常用方法search和replace
```JavaScript
const replace_reg = 'sghifsdhgdfshugiSdfuhgfdj'.replace(/sd/ig,'*');
```
