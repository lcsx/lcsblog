## es6对象的一些属性
在 ES6 之前 Object 的 key 在定义时必须是字符串，如果想增加“动态”的 key，必须是先计算出 key，利用 object[key] = value 的方式来修改；
在 ES6 之后可以直接用变量或者表达式来定义 key。
``` js
let obj = { 
	foo: 'bar', 
	['baz'+ quux()]: 42
}

//而不用在这样写
var obj = { 
	foo: 'bar' 
}
obj['baz' + quux()] = 42
```

---

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

## es6对象的复制
