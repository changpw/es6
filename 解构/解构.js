//es6解构
// 数组解构

//普通模式写法
// let a = 1;
// let b = 2;
// let c = 3;

//采用解构写法
//解构成功
// 正常模式解构
// let [a,b,c]=[1,2,3]
// console.log(a,b,c) //1 2 3
//复杂解构
// let[a,b,c]=[{name:'zd',age:11},{book:'java'},'k'];
// console.log(a,b,c) //{name: "zd", age: 11} {book: "java"} "k"


//解构失败,变量值为undefined则视为解构失败
// let[a,b,c]=[1]
// console.log(a,b,c) //1 undefined undefined
 //不完全解构
// let[a,b,c]=[1,2,5,6,5]
// console.log(a,b,c) //1 2 5


//只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值
// 报错
// let [foo] = 1;
// let [foo] = false;
// let [foo] = NaN;
// let [foo] = undefined;
// let [foo] = null;
// let [foo] = {};

// 解构设置默认值
 // let [a=true]=[];
 // console.log(a)
 //解构表达式
 // function b (){
	//  return true ;
 // } 
 // let [a=b()]=[1];
 // console.log(a)
 
 // 对象解构
 // let person= {
	//  name:'zd',
	//  age:11,
	//  home:function(){
	// 	 console.log(this)
	// 	 console.log(name+age)
	//  }
 // }
 // let{name,age,home}=person;
 // console.log(name)
 //字符串解构
 // let [ a,b,c,d]='string'
 // console.log(a,b,c,d)
 //遍历 Map 结构
// const map = new Map();
// map.set('first', 'hello');
// map.set('second', 'world');

// for (let [key, value] of map) {
//   console.log(key + " is " + value);
// }




