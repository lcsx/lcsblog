# es8 
JavaScript 是单线程的，使用 Promise 之后可以让我们书写异步操作更加简单，而 async 是让我们写起 Promise 像同步操作。
## async 
``` js
async function firstAsync () {
	return 27 
}
firstAsync().then(console.log) // 27

console.log(firstAsync() instanceof Promise) // true

//上面等同于
async function firstAsync () { 
	return Promise.resolve(27) 
}
``` 

::: tip 
async 函数显式返回的不是 Promise 的话，会自动包装成 Promise 对象
:::

## await
``` js
async function firstAsync () { 
	let promise = new Promise((resolve, reject) => { 
		setTimeout(() => resolve("Now it's done!"), 1000) 
	})
		
		
	// wait until the promise returns us a value 
	let result = await promise // "Now it's done!" 
	return result 
}

firstAsync().then(console.log)
```

这段代码使用了 await，从这个字面的意思看就是“等待”，它等什么呢？很简单，它等 Promise 返回结果。上面代码的意思是 async 开启了一个
Promise 对象，这个函数内部嵌套了一个 Promise 操作，这个操作需要等 1 秒才返回 “Now it’s done!” 这个结果。也就是说 await 在拿到这个结果
前不会继续执行，一直等到结果才往后继续执行，也就是 async function 声明的 Promise 才会响应（console.log才执行）。


## object.key()
es8新增对object快速遍历的方法
Object.key 返回一个数组
``` js

let lcs = {
	'name':'lcs1',
	'gg':666
}

//es5  for in
let arr = []
for([k,v] in lcs){
	arr.push(k)
}
console.log(arr); //[]

//es8 
Object.key(lcs); //['name','gg'] 

Object.value()
```

在上面的例子中，对象lcs用for of遍历会报错，用<span style="color:red">Object.entrise(lcs)</span>  就可以使之变成可遍历的对象了

## string补白

es5
``` js
for(var i;i<10;i++){
	if(i<10){
		console.log(`0${i}`)
	}else{
		console.log(i)
	}
}
```

es8 string.toString.padStart(一共位数,补齐的字符)
``` js
for(let i=1;i<30000;i+=1000){
	console.log(i.toString.padStart(5,*#))  
}
```
padStart从前面开始补，padEnd后面开始补  