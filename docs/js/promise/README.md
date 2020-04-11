## 为什么会有promise
为了避免界面冻结（任务）
1. 同步：假设你去了一家饭店，找个位置，叫来服务员，这个时候服务员对你说，对不起我是“同步”服务员，我要服务完这张桌子才能招呼你。那桌客人明明已经吃上了，你只是想要个菜单，这么小的动作，服务员却要你等到别人的一个大动作完成之后，才能再来招呼你，这个便是同步的问题：也就是“顺序交付的工作1234，必须按照1234的顺序完成”。

2. 异步：则是将耗时很长的A交付的工作交给系统之后，就去继续做B交付的工作，。等到系统完成了前面的工作之后，再通过回调或者事件，继续做A剩下的工作。AB工作的完成顺序，和交付他们的时间顺序无关，所以叫“异步”。

#### Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。

Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。

1. 事件监听
``` js
document.getElementById('#start').addEventListener('click', start, false);
function start() {
  // 响应事件，进行相应的操作
}
// jquery on 监听
$('#start').on('click', start)
```

2. 回调
``` js
// 比较常见的有ajax
$.ajax('http://www.wyunfei.com/', {
 success (res) {
   // 这里可以监听res返回的数据做回调逻辑的处理
 }
})

// 或者在页面加载完毕后回调
$(function() {
 // 页面结构加载完成，做回调逻辑处理
})
```
#### 缺点

Promise也有一些缺点。首先，无法取消Promise，一旦新建它就会立即执行，无法中途取消。其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。第三，当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。


## 基本用法
``` js
const promise = new Promise(function(resolve, reject) {
  // ... some code

  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});
```
resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

#### Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数。
then方法可以接受两个回调函数作为参数。第一个回调函数是Promise对象的状态变为resolved时调用，第二个回调函数是Promise对象的状态变为rejected时调用。其中，第二个函数是可选的，不一定要提供。这两个函数都接受Promise对象传出的值作为参数。

``` js
promise.then(function(value) {
  // success
}, function(error) {
  // failure
});
```

<p>如果调用resolve函数和reject函数时带有参数，那么它们的参数会被传递给回调函数。reject函数的参数通常是Error对象的实例，表示抛出的错误；</p>

## Promise实现的Ajax操作的例子
``` js
const getJSON = function(url) {
  const promise = new Promise(function(resolve, reject){
    const handler = function() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();

  });

  return promise;
};

getJSON("/posts.json").then(function(json) {
  console.log('Contents: ' + json);
}, function(error) {
  console.error('出错了', error);
});
```
---
#### Promise.prototype.then()
1. 之前提到then方法的第一个参数是resolved状态的回调函数，第二个参数（可选）是rejected状态的回调函数.
2. then.().then() :  then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。因此可以采用链式写法，即then方法后面再调用另一个then方法。

<p>链式调用</p>

``` js
var lcs = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log('1992234');
		resolve('lcs')
	}, 5000)
});
			
var lcs1 = function(data){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('lcs1111')
		}, 5000)
	});
}
			
//promise会立即执行所以这里lcs不用lcs() 不用()
lcs.then((res)=>{
	console.log(res);
	return lcs1()
}).then(function(res){
	console.log(res)
},function(err){
	console.log(err)
})
```

::: tip
Promise.then().then()

promise.then(里面再return 一个promise①)这样在ta后面的then里继续保存着promise①的状态了，也就可以then((resolve)={},(err)=>{})
:::


---
#### Promise.prototype.catch()
Promise.prototype.catch方法是.then(null, rejection)或.then(undefined, rejection)的别名，用于指定发生错误时的回调函数。

多个then，哪一个promise发生错误都会捕获到

---

#### Promise.prototype.finally()
finally方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。
``` js
promise
.then(result => {···})
.catch(error => {···})
.finally(() => {···});
```
---

### promise的静态方法
1. Promise.resolve()
2. Promise.reject(new Error('xxx'))

使可以强行使用then方法  
``` js
function lcs(){
	return Promise.resolve(666)
}
lcs().then((res)=>console.log(res))
```
---

## all
Promise.all([p1,p2,p3]).then()

## race
竞争关系，哪个先完成那个resovle
``` js
const p1 = ()=> {
	return new Promise((resolve,reject)=>{
		setTimeout(function(){
			resolve(1)
		},1000)
	})
}

const p2 = ()=> {
	return new Promise((resolve,reject)=>{
		setTimeout(function(){
			resolve(1)
		},0)
	})
}

Promise.race([p1(),p2()]).then((value)=>{
	console.log(value)
})

``` 