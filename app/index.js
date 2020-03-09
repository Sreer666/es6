// let limit= 100;
// limit =101;
// console.log(limit);

// const limit= 100;
//
// console.log(limit);

// const limit= ["sree123@gmail.com","sre124@gmail.com"];
// //limit +="ram123@gmail.com";
// //if you want to add a value to const use push method
// limit.push("test123@gmail.com");
// console.log(limit);

// let limit =100;
//
// {
//   let limit =10;
//   console.log("this is local block", limit);
// }
// console.log("this is global block",limit);
//
// function test1(){
//   let x='123';
//   console.log(x);
// };
// function test2(){
//   let x='321';
//   console.log(x);
// }
// test1();
// test2();

// let a= 'to you';
// let b= 'birthday';
// let c=`${b} ${a} happy `;
// console.log(c);
//
// let a=[1,2,3];
// let b =[...a,4,5,6];
// console.log(b);
//
// //Rest parameters
//
// function mycollection(...a){
//   console.log(a);
//
// }
// mycollection(1,2,3,4,56,4);


// let any = ["hiiii", 'hello', 'po'];
// {
//
//   let any=['hey','hi','hello'];
//   let [h,i,u]=any;
//   console.log(h,u);
//
// }
// let [animal, son]= any;
// console.log(animal, son);
//
//
//
// let you={hi:"hello", How:'good'};
// let{hi,How}=you;
// console.log(hi,How);

//another example:

// let yaee={bye:"byebye", you:"getout"};
// let bye,you;
// ({bye,you}=yaee);
// console.log(bye,you);

//Arrow function and Anonymous function

// let cheer=()=>{console.log("Ji, HOw are you?");}
// cheer();
// //if you want to pass 2 or more parameters,
// //take the method you want to play and then pass it accordingly
//
// setTimeout(()=>{console.log("THis is my first Anonymous function")},5000,1000);
//
//map method
// let mapmethod=[10,20,30,40];
// // let meth=mapmethod.map((n)=>{
// //   return n*2;})
//   let meth=mapmethod.map((n)=>n*10)
//   console.log(meth);
//
//   //filter method
//
//   let filermethod=[1,0,-2,10];
//   let fith=filermethod.filter((n)=>n>=-1)
//   console.log(fith);
//
// let sttest="start"+"0a".repeat(10);
// console.log(sttest);
//
// console.log("butterfly".startsWith("butters"));
// console.log("butterfly".endsWith("fly"));
// console.log("butterfly".includes("butter"));

//export import
// import {Fellowship,fellows} from './Fellowship.js';
// console.log(fellows);
//
// import {firstfellows,secondfeell} from './Fellowship.js';
// console.log(firstfellows,secondfeell);

//Create the new class in java script

// class animal {
//   constructor(name, height) {
//     this.name=name;
//     this.height= height;
//   }
//   hello (){
//     let greedking=`Hello This is ${this.name} My height is ${this.height}`
//     console.log(greedking);
//   }
//
// }
// let king= new animal("Lion", 4.5);
// king.hello();

//inhertiance
// class animal {
//   constructor(name, height) {
//     this.name=name;
//     this.height= height;
//   }
//   hello (){
//     let greedking=`Hello This is ${this.name} My height is ${this.height}`
//     console.log(greedking);
//   }
//
// }
// class Lion extends animal {
//   constructor(name,height,colour) {
//     super(name, height, colour);
//     this.colour= colour;
//   }
//   hello(){
//     console.log(`Hello This is ${this.name} My height is ${this.height} and colour is ${this.colour}`);
//   }
// }
// let sonsname= new Lion("zumba",4.7,"golden");
// sonsname.hello();

// import and export of classes

import animal from './anmial.js';

class Lion extends animal {
  constructor(name,height,colour) {
    super(name, height, colour);
    this.colour= colour;
  }
  hello(){
    console.log(`Hello This is ${this.name} My height is ${this.height} and colour is ${this.colour}`);
  }
}
let sonsname= new Lion("zumba",4.7,"golden");
sonsname.hello();
