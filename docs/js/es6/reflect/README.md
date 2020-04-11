## 反射机制
java的反射机制是在编译阶段不知道是那个类被加载，而是在运行的时候才加载/执行
es6的反射机制也类似  运行的时候才调用 类似


::: tip es5
Math.apply(null,[3.72])

::: tip es6
Reflect.apply(Math.floor,null,[3.72])

``` js
let price = 90.5;

//es5 做法
if(price > 100){
	price = Math.floor.apply(null,[price])
}else{
	price = Math.ceil.apply(null,[price])
}

//es6
console.log( Reflect.apply(price>100?Math.floor:Math.ceil) )
```


## 类的实例化 反射机制
es5 用 new 类
``` js
let d = new Date();
console.log(d.getTime())
```

es6 Reflect.construct
``` js
let d = Reflect.construct(Date,[]);
console.log(d.getTime())
```
可以动态实例化类

#### 其他
Reflect.get(obj,'attr1');

