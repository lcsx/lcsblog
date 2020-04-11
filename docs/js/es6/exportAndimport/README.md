## 导出导入

``` js
//导出
export const name = 'lcs';
export var list = [1,2,3]

//导出
const name = 'lcs';
var list = [1,2,3];
let gg = 66;

export {
	name,
	list
}
export default gg;


//导入
import gg,{name,list as li} from './xx.js'


```



