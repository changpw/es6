//对象的简写
let name = 'zs'
let age=12
// let obj={
// 	name,
// 	age
// }
// console.log(JSON.stringify(obj))
// //函数的简写
// let infoTip={
// 	name,
// 	age,
// 	eat(){
// 		console.log(name+age)
// 	}
	
	
// }
// // infoTip.eat()
// console.log({infoTip,obj})

// //对象的简写应用于函数
// function logs(){
// 	const x = 10;
// 	const y = 20;
// 	return{
// 		x,y
// 	}
// }
// console.log(logs())

//使用表达式在对象内部定义属性

let body={
	name,
	[name+age]:name+age	
}
console.log([name+age])
body.length='175cm'
body[name]='name'
console.log(JSON.stringify(body))
// //获得对象属性
// let bodyProperty= Object.getOwnPropertyNames(body)
// console.log(bodyProperty.length)
// for(item of bodyProperty){
// 	console.log(item)
// }
for(it in body){
	console.log(it)
}
const clone3 = Object.create(
  Object.getPrototypeOf(body),
  Object.getOwnPropertyDescriptors(body)
)
console.log(JSON.stringify(clone3))
body.name='jeck'
console.log(JSON.stringify(body))
console.log(JSON.stringify(clone3))
let object4 =Object.create(clone3)
console.log(JSON.stringify(object4))

