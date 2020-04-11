## 字符串模板

包含函数的模板
``` js
function xx(string,params1){ //xx(string,params1)  string是整个字符串你好${gg}   params1是&{gg}
	let s1 = string[0]; //根据变量分割成数组  这里  string[0]是你好 
	let s2 = string[1];   //&{gg}
	
	//可以根据params1做一些处理
	//if(params1=='xxx')
	return `${s1}${s2}....`  //最后
}

let str = xx`你好${gg}`   //变量&{gg}把整个字符串分割为2个，一个‘你好’，一个‘&{gg}’   
```