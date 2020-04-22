// 十进制：没有前导0的数值
// 八进制：有前缀0o或0O的数值，或者有前导0、且只用到0-7的八个阿拉伯数字的数值。
// 十六进制：有前缀0x或0X的数值。
// 二进制：有前缀0b或0B的数值。
// 写一个正则表达式 匹配所有Number 直接量
const testStr =
	"十进制： 123 八进制： 0O764 0o343 044 十六进制： 0x12f9 0X123 二进制： 0b101010 0B1111 ";
// 拆分一下
// 匹配十进制
const tenRegex = /[1-9][0-9]*/g
console.log(testStr.replace(tenRegex, "#"));
// 匹配八进制
const eightRegex = /(0O|0o)[0-9]*|0[1-7]+/g;
// console.log(testStr.match(eightRegex));
// 匹配十六进制
const numberRegx = /(0X|0x)[0-9a-fA-F]+/g;
// console.log(testStr.match(numberRegx));
// 匹配二进制
const twoRegx = /(0B|0b)[0-1]+/g;


// 最终结果
const allRegex = /([1-9][0-9]*)|((0O|0o)[0-9]*|0[1-7]+)|((0X|0x)[0-9a-fA-F]+)|((0B|0b)[0-1]+)/g;
console.log(testStr.match(allRegex));
