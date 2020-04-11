
# VUE

## directive 指令
通过指令red使helloworld下面的字都变红


``` js
Vue.directive('make-red',{
	inserted(el){
		el.style.color = 'red';
		//console.log(el.getAttribute('p1'))
	}
})

//main.js中引入
import './xx.js'


//在template中使用  v-make-red
<h1 v-make-red>lcs</h1>
```


## proxy
简单的mock以及代理

mock文件夹下user.json
cd 到mock文件夹，运行 http-server .  

``` js
//vue.config.js

module.exports = {
	devServer:{
		proxy:{
			'./user':{
				target:'http:localhost:xxxx',
				pathRewrite:{
					'/user':'user.json'
				}
			}
		}
	}
}
```

## es6结构赋值
嵌套的结构赋值的使用
```
const {data:{list}} = await axios.get('xxx')
```

## vue中使用js proxy

升序/降序/重置
``` js
async fun(){
	const {data:{price}} = await axios.get('/.xx');
	//双重保险 1.冷冻对象 Object.freeze(obj)  2.proxy代理 源数据不能改变了
	Object.freeze(price);
	
	this.proxy = new Proxy({},{
		get(target,key){
			if(key=='up'){
				return [].concat(price).sort((a,b)=>a-b);
			}else if(key=='down'){
				return [].concat(price).sort((a,b)=>b-a);
			}else{
				return price;
			}
		},
		set (){
			return false
		}
	})
	
	this.$data.price = this.proxy.default;
					 = this.proxy.up;
					 = this.proxy.down;
					 
}
```


## 自定义遍历
后端传过来的值，不会直接是一个可遍历的数组 for of 不方便使用，for in 又不是我想要的结果
``` js
const lcs = {
	'p1':[1,2,3],
	'p2':[6,4],
	'p3':[5]
} 
//想  <li v-for = () in [1,2,3,4,5] >{{item}}</li>