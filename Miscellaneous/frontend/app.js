// let arr=[1,2,3,4];
// let arr2=[4,6,7,5];
// arr.sayHello=()=>{
// console.log("Hello, I am arr");
// arr._proto_(referance)
// }
// arr2.sayHello=()=>{
// console.log("Hello, I am arr");
// }

// function personMaker(name,age){
//   const person={
//     name:name,
//     age:age,
//    talk()
//     {
//       console.log(`hi, I am ${this.name}`);
//     },
//   };
//   return person; 
// }
// let p1=personMaker("sujan", 20);
// let p2=personMaker("suman", 22);


// new operator
// function Person(name,age){
//   this.name=name;
//   this.age=age;
// }
// Person.prototype.talk=function(){
//   console.log(`hi,my name is ${this.name}`);
// }
// let p1= new Person("sujan", 20);
// let p2= new Person("suman", 22);


// classes
// class Person{
//   constructor (name,age){
//     this.name=name;
//     this.age=age;
//   }
//   talk(){
//     console.log(`hi,my name is ${this.name}`);
//   }
// }
// let p1= new Person("sujan", 20);
// let p2= new Person("suman", 22);

// inheritance
class Person{
  constructor(name,age){
    this.name=name;
    this.age=age;
  }
  talk(){
    console.log(`hi,my name is ${this.name}`);
  }
}
class Student extends Person{
  constructor(name,age,marks){
    console.log("Student class Constructor");
    super(name,age);   //parent class constructor is being called.
    this.marks=marks;
  }
}
class teacher extends Person{
  constructor(name,age,subject){
    console.log("Teacher class Constructor");

    super(name,age);  //parent class constructor is being called.
    this.subject=subject;
  }
}
// let stud1=new Student("sujan",21,99);