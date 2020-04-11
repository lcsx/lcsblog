# es6
## set(去重/交/并差集)
``` js
new Set(//里面是一个数组)

//并集
new Set([...jihe1,...jihe2])

//交集
new Set([...jihe1].filter(x=>jihe2.has(x)))

//差集
new Set([...jihe1].filter(x=>!jihe2.has(x)))
```
## Map 新增的数据结构
过去js的变量的key只能是string字符型的，在es6里，可以是多种类型，如字符型，数字，函数，对象，数组等
``` js
var num = 4;
var arr = [1,2];
var obj = {};
var fun = function(){};
const m = new Map();
m.set(num,'x1')
m.set(arr,'x2')
m.set(obj,'x3')
m.set(fun,'x4')
m.set('str','x5')
for(const key in m.keys()){
	console.log(typeof(key))
}

//map的增/删
const m2 = new Map(
	[
		['s1','xx1'],
		['s2','xx2'],
		['s3','xx3']
	]
)
m2.set('s4','xx4');
m2.delete('s3');
arr2 = [...m2.values()];//将map的值以数组输出
arr3 = [...m2.keys()];//将map的键以数组输出
arr4 = [...m2.entries()];//输入所有     [Array(2),Array(2),Array(2),Array(2)]
```

---

## Array
在 ES6 中新增了很多实用的原生 API，方便开发者对 Array 的操控性更强，如 for…of、from、of、fill、find、findIndex, forEach、every、filter等。

### 数组的遍历
for 循环里可以用break，continue

forEach 的代码块中不能使用 break、continue，它会抛出异常。
``` js
[1,2,3,4,5].forEach(function(i){ 
	if(i===2){ 
		return; 
	}
	else{ 
		console.log(i) 
	} 
})
```
这段代码的"本意"是从第一个元素开始遍历，遇到数组项 2 之后就结束遍历，不然打印出所遍历过的数值项。可是，事实让你大跌眼镜，因为它的出是 1,3,4,5。
every 通过return true/false 来体现continue/break
``` js
[1,2,3,4,5].every(function(i){
	if(i===2){ 
		return false; 
	}else{ 
		console.log(i) 
		return true 
	} 
})
```
<p>简单的说 return false 等同于 break，return true 等同于 continue。如果不默认是 return false。</p> 

---

### 如何将为数组转化为数组
伪数组，如function里的arguments(es6不怎么推荐用arguments)。

伪数组转数组<span style='color:red'>es5</span>的方法:[].slice.call
``` js
var lcs = function(){
	var args = [].slice.call(arguments)
	console.log(args.slice(0,2))
}
lcs(1,2,3,4,5)
```

<span style='color:red'>es6</span>的方法:Array.prototype.from
``` js
var lcs = function(){
	var args = Array.from(arguments)
	console.log(args.slice(0,2))
}
lcs(1,2,3,4,5)
```

伪数组 形如{0:'a',1:'w',length:2} 是有个length的属性的
#### Array.from(arrayLike,mapFn,thisArg)
如何使数组初始化赋值呢？通过for遍历也可，但不是初始化实现的
``` js
Array.from({length:5},function(){return 1})
```

---

### 生成数组
es5里生成数组用
``` js
let arr = Array()
let arr1 = Array(5)
let arr2 = [];
```
但若是想对其赋值，得遍历然后赋值。es6里可以简化
#### Array.of(值1，值2)
``` js
let arr = Array.of(1,2,3) // [1,2,3]
```
#### Array.fill(值，起始位置，终止位置不包括)
``` js
let arr = Array(4).fill(4) //[4,4,4,4]
let arr1 = arr.fill(2,1,3) //[4,2,2,4]
```

---

### 查找数组
es5里查找数组是否包含某值，可以用filter
``` js
arr.filter(function(item){
	return item %== 2
})
```
filter返回的是满足条件的数组，在某些场景这样是比较不合适的，当数组很长时，只想知道数组里是否包含某值，用filter性能会低

es6里 find只返回符合条件的第一个值
``` js
arr.find((item)=>{
	return item %== 2
})
```
find不知道值在数组的位置，所以有<span style='color:red'>findIndex</span>

### for in / for of 
for in 遍历对象， for of遍历自定义对象
``` js
let obj = {
	'A':[1,2,3],
	'B':['a','b']
}
```