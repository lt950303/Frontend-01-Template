// 题目： tuf-8 encoding
// 题目是utf-8编码，由于题目不是很明确， 就分析为  将unicode转成utf8编码
// 字符集	字数	Unicode 编码
// 基本汉字	20902字	4E00-9FA5

// Utf-8 基本汉字的编码范围为4E00-9FA5

// 解题： 将基本中文unicode编码转成 utf-8编码
// const unicodeChineseStart = 0x4E00;
// const unicodeChineseEnd = 0x9FA5;

// 将Unicode 转 utf-8
function utf8Encode(obNum) {
	const obStr = obNum.toString(2);
	const obNumList = obStr.split("");
	// 1. 先判断是几位的二进制
	// 7位一个字节， 11位2个字节， 16位3个字节， 21位4个字节
	const obNumLenght = obNumList.length;
	let utf8Code = "";
	if (obNumLenght <= 7) {
		// 处理成一字节
		utf8Code = "0" + obNumList.toString();
		return parseInt(utf8Code, 2).toString(16);
	} else if (obNumLenght <= 11) {
		// 处理成两字节
		const twoByte = "110xxxxx10xxxxxx";
		// 同理 暂时就不处理
		return utf8to16;
	} else if (obNumLenght <= 16) {
		let threeByte = "1110xxxx10xxxxxx10xxxxxx".split("");
		const gap = 16 - obNumLenght;
		for (let index = 0; index < gap; index++) {
			obNumList.unshift("0");
		}
		let i = obNumList.length - 1;
		for (let index = threeByte.length; index >= 0; index--) {
			// console.log(threeByte[index]);

			if (threeByte[index] === "x") {
				threeByte[index] = obNumList[i];
				i--;
			}
		}
		utf8Code = threeByte.join("");
		const utf8to16 = parseInt(utf8Code, 2).toString(16);
		return utf8to16;
		// 处理成三字节
	} else if (obNumLenght <= 21) {
		// 处理成四个字节
		let fourByte = "11110xxx10xxxxxx10xxxxxx10xxxxxx".split("");
		const gap = 21 - obNumLenght;
		for (let index = 0; index < gap; index++) {
			obNumList.unshift("0");
		}
		let i = obNumList.length - 1;
		for (let index = fourByte.length; index >= 0; index--) {
			// console.log(threeByte[index]);

			if (fourByte[index] === "x") {
				fourByte[index] = obNumList[i];
				i--;
			}
		}
		utf8Code = fourByte.join("");
		const utf8to16 = parseInt(utf8Code, 2).toString(16);
		return utf8to16;
	}

	// console.log(obNumLenght, obNumList);
}

// 中文霆 
// Unicode编码：00009706
// UTF8编码：E99C86
utf8Encode(0x9706);
// utf8Encode(0x9FA5);


