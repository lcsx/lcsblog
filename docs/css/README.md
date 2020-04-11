# CSS
## 字体
适配不同平台 顺序mac/windows/宽体
``` css
{font-family:"PingFang SC","Microsoft Yahei",monospace;}
```

## 图片有3px的偏差
图片默认是inline的,顶部对齐。解决方法2种：
1. 仍保持inline，设置对其方式为底部对齐
``` css
img{vertical-align:bottom}
```
2. 图片 display:block,但图片会单独一个行成块级元素了

## background画网格线
``` css
{
	background:linear-gradient(135deg,transparent 0,transparent 49.5%,green 49.5%,green 50.5%,transparent:50.5%,transparent 100%),
	linear-gradient(45deg,transparent 0,transparent 49.5%,green 49.5%,green 50.5%,transparent:50.5%,transparent 100%)
	
}
{background-size:30px 30px}
```

## 雪碧图减少图片http请求
``` css
{
	width:30px;height:30px;
	background:url(....png) no-repeat;
	background-position:-30px -40px;
}
``` 

## 文本折行
``` css
{
	overflow-wrap:break-all;/*英文单词不拆，中文单词换行*/
	word-break:break-all;/*英文单词也被拆开 keep-all所有单词保持完整，但会换行*/
	white-space:nowrap;/*整个不换行，一行显示*/
}
```

## 两个inlien-block之间有间隙
1. 将父元素font-size设置为0px
2. 写法上首尾衔接起来
``` html
<div>
xxx
</div><div>
xxx
</div>
```

## CSS选择器
### 属性选择器
``` css
[attr]  a[href]

[attr=xxx]  input[attr=text]

[attr~=xxx] 属性值中包含xxx

[attr|=xxx] 属性值为xxx或xxx-开头的元素

[attr^=xxx] 属性值以xxx开头的元素

[attr$=xxx] 属性值以xxx结尾

[attr*=xxx] 属性值包含xxx
```

### 子选择器  >
子选择器只找子元素，不会所有的后代都找

### 相邻兄弟选择器 +
"选择器A + 选择器B" 表示 "找到与A元素相邻的B元素"

``` css
/*选择除了第一个li的其他li*/
ul li+li{}
```

### 通用兄弟选择器 ~
A~B 匹配A指定元素后面的所有符合选择器B规则的元素

### 交集选择器 
选择器A选择器B   中间不加空格或者其他符号
``` css
.item.active{}  同时带有这两个的元素
```

### 伪类选择器
``` css
:empty{} /*没有子元素的元素*/
:checked{} /*只对radio与checkbox有效*/
:disabled{} /*禁用的表单元素*/
:first-child{} /*当前选择器下第一个元素*/
:last-child{} /*当前选择器下最后一个*/
:nth-child(an+b){} /*(2n+1)*/
:nth-last-child(an+b){} /*计数从后面开始的*/
:only-child{}/*如果一个元素的父元素只有他一个子元素就生效*/
:only-of-type{}/*只有一种类型生效*/

```