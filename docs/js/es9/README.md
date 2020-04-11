# es9

## 异步集合的操作
for await of
``` js

function Gen (time) { 
	return new Promise(function (resolve, reject) { 
		setTimeout(function () { 
			resolve(time) 
		}, time) 
	}) 
}


async function test(){
	let arr = [Gen(2000),Gen(100),Gen(3000)];
	for await (let item of arr){
		console.log(Date.now(),item)
	}
}

test()


//与以下的还不一样，错误写法
async function test () { 
	let arr = [Gen(2000), Gen(100), Gen(3000)]
	for (let item of arr) { 
		console.log(Date.now(), await item.then(console.log)) 
	} 
}

```

## 扁平化数组flat
depth 指定要提取嵌套数组的结构深度，默认值为 1
``` js
const newArray = arr.flat(depth)

const numbers = [1, 2, [3, 4, [5, 6]]] 
console.log(numbers.flat()) // [1, 2, 3, 4, [5, 6]]
```

## 字符串
### 去头去尾空白trimStart
string.trimStart()

### 去头空白
trimLeft

### 去尾空白
trimRight trimEnd