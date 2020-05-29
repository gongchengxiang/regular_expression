const reg_gcx = /gcx/i;
const str = 'hello, GCx!';
const startIndex = str.search(reg_gcx);
// console.log(startIndex);

const replace_reg = 'sghifsdhgdfshugiSdfuhgfdj'.replace(/sd/ig,'*');
// console.log(replace_reg);

const reg_result ='wrf123\nsebh15d23bj432b'.match(/se/g);
// console.log(reg_result);

var str1 = "abcggab\nabcoab";
console.log(str1.match(/^abc/g)); // [ 'abc' ]
console.log(str1.match(/^abc/gm)); // [ 'abc', 'abc' ]
console.log(str1.match(/abc/g)); // [ 'abc', 'abc' ]
console.log(str1.match(/abc/gm)); // [ 'abc', 'abc' ]
console.log(str1.match(/ab$/g)); // [ 'ab' ]
console.log(str1.match(/ab$/gm)); // [ 'ab', 'ab' ]