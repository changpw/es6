function letDemo(arg){
## 使用var
```javascript
	// console.log(typeof(a))  //undefined
	// 造成i全局共有
	// var arr=[];
	// for(var i =0 ;i<10;i++ ){
		
	// 	arr[i]=function(){
	// 		console.log(i)
	// 	}
	// }
	// i=11
	// arr[1]()        //11
	// console.log(i)  //11
	```
	
## 使用let代替var
```javascript
	// console.log(typeof(a))  //Cannot access 'a' before initialization
	// let a 
	// for(let i = 0 ; i<10;i++){
	// 	let i = 'hello' ;
	// 	console.log(i)
	// }
	
	
	// {
	// 	let a='10'
	// }
	// console.log(a) //ReferenceError: a is not defined
	
	// if(false){
	// 	let f =function  (){
	// 		console.log('yyyy')
	// 	}
	// }
	// f();  //f is not defined
	
	// //const 是指地址不能改变,但是对象属性可以改变
	// const person = {
	// 	name:'tom',
	// 	age:12
	// }
	// console.table(person);
	// person.age=15
	// console.table(person);
	
	//冻结对象不能为对象添加属性
	// const person ={
	// 	name:'tom',
	//     age:12
	// }
	// console.table(person)
	// //将对象冻结
	// Object.freeze(person)
	// person.age=15;
	// person.home='China'
	// console.table(person)
	
	
	// es6 不允许重复生命变量
	// var a = 'tm';
	// var a = 'll'
	// console.log(a) //ll
	// // 报错
	// function func() {
	//   let a = 10;
	//   var a = 1;
	// }
	
	// // 报错
	// function func() {
	//   let a = 10;
	//   let a = 1;
	// }
	// function func(arg) {
	//   let arg;
	// }
	// func() // 报错
	
	// function func(arg) {
	//   {
	//     let arg;
	//   }
	// }
	// func() // 不报错 -->
	
	
	
	
	
}
letDemo();
	//ES6中全局属性不再是顶层对象属性
	var a = 'tom'
	console.table(window.a) //tom
	let b = 'tom'          
	console.log(window.b)	//undefined
	
	
	```