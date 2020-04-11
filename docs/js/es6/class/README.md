# class类
es5是没有类的，是通过函数来模拟类

## es5的类
``` js
//即使实例化多个，eat方法还是指向同一个内存地址，提升效率。同时也使得实例体积小一点。
Animal.prototype.eat = function(){}  
//eat放到原型链 __pro
```

修改一个实例也可以修改别的实例的方法
``` js
let xx = new Animal();
xx.constructor.prototype.eat = function(){}
```

---

## es6的类 
简洁，效果与上面的一样
``` js
class xx{
	constructor(type){
		
	}
	eat(){
		console.log(111)
	}
}
```

---

## setter&getter
保护变量
``` js
let _age = 4;
class Animal {
	constructor(type){}
	get age(){            //get 使其变成属性而不是函数
		return _age
	}
	set age(val){
		if(val>7){
			_age = val
		}
	}
}
let xx = new Animal();
xx.age = 6;
console.log(xx.age) //4
xx.age = 8;
console.log(xx.age) //8
```

---

## 类静态方法Static Method
实例对象是没有类的静态方法的,也就是类的静态方法与实例隔绝了

es5的类的静态方法：
``` js
Animal.walk = function();  //不在Animal.prototype.walk
let xx = new Animal();
xx.walk() //报错
```

es6类的静态方法
``` js
class Animal {
	constructor(type){}
	static walk(){
		
	}
}
```

---

## 继承
### es5的继承
``` js
let Animal = function(type){
	this.type = type
}
Animal.prototype.eat = function(){}

let Dog = function(xx){
	Animal.call(this,xx);   //只继承了父类的构造函数，父类的prototype原型链并没有继承到，需要另外处理才行 Dog这时候是拿不到eat的方法的
	this.otherx = function(){}
}

Dog.prototype = Animal.prototype;  //继承原型链，完成所有继承   更准确的说是使两个指向同一个内存地址
```

### es6的继承extends
``` js
class Dog extends Animal{
	constractor(type){
		super(type);
		this.age = 2
	}
}
```

---
