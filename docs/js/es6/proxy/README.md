## 代理
``` js
let p = new Proxy(target, handler)
``` 

---

``` js
let o = { name: 'xiaoming', age: 20 }
console.log(o.name) // xiaoming 
console.log(o.age) // 20 
console.log(o.from) // undefined
```

如果我们不想在调用 key 的时候返回 undefined，之前的做法是这样的：
``` js
console.log(o.from || '')
```

### ES6 的 Proxy
``` js
let o = { name: 'xiaoming', age: 20 }
let handler = { 
	get(obj, key) { 
		return Reflect.has(obj, key) ? obj[key] : '' 
	} 
}
let p = new Proxy(o, handler) 
console.log(p.from)
```
---

### 保护数据
场景，原始数据排序，但又有还原按钮

``` js
let o = {price:100};

let d = new Proxy(o,{
	get(obj,key){
		return o[key]  //原封不动返回数据
	},
	set(obj,key,value){
		return false   //不允许修改数据
	}
})
``` 


### es5中的不允许修改
``` js
for (let [key] of Object.entries(o)){
	Oject.defineProperty(o,key,{
		writable:false
	})
}
``` 
es5上面这个是不能修改的，es6是拦截，可以修改的

---

### 校验功能
``` js
let o = {price:100,name:'lcs'};

let validator = (target,key,value) => {
	if(Reflect.has(target,key)){
		if(key==='price'){
			if(value>300){
				return false
			}else{
				target[key] = value
			}
		}else{
			target[key] = value
		}
	}else{
		return false  
	}
}

let d = new Proxy(o,{
	get(target,key){
		return target[key] || ''
	},
	set:validator   //不同的校验，就修改这里，解耦
});

d.price = 301;
d.name = 'xxx';
d.age = 3000;
console.log(d.price,d.name,d.age)
```

### 校验上报
有时候想看是谁操作错误的需求
1. 可以在校验错误时做操作，比如ajax上报。把封装好的上报模块放到校验失败那里也可以，但还是有耦合。
2. 解耦。校验失败时，抛出错误，在全局监听错误，然后上报

``` js
...
if(value>300){
	throw new TypeError('price exceed 300')
}
...

//在全局监听
window.addEventListener('error',(e)=>{
	console.log(e.message);
	//report('./') 上报
},true)
```
---

### 结合class运用
``` js
class Component {
	constructor () {
		this.proxy = new Proxy({
			id:Math.random().toString(36).slice(-8)
		},{})
	}
	get id(){
		return this.proxy.id
	}
}


let com = new Component();
console.log(com.id)
```