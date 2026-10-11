// OOP => Object Oriented Programming

// Class
// class Student {
    // Properties
    // private name: string;
    // private age: number;
    // public gender: string;
    // methods
//     public study(): void {
//         console.log("studying");
//     }
//     // constructor
//     public constructor(public name: string, private age: number, public gender: string){
//         // this.name = _name;
//         // this.age = _age;
//         // this.gender = _gender;
//     }
//     public printname() {
//         return this.name;
//     }
//     public getAge(): number {
//         return this.age;
//     }
//     public setAge(age : number): void {
//         if (age >= 18) {
//             this.age = age;
//         }else{
//             console.log("Error");
//         }
//     }
// }

// // Object 
// let s1 : Student = new Student("Mona", 18, "female");
// // let s2 : Student = new Student("Ahmed", 25, "male");

// // console.log(s1.printname());
// s1.setAge(-20);
// console.log(s1.getAge());

// Accessor Specifier or Accessor Modifier [public, private, protected]

// Destructor 

// Encapsulation [rules]
// setter & getter
// class Student {
//     private _name = "Mohamed";
//     public set name(userName: string){
//         this._name = userName;
//     }
//     public get name(): string{
//         return this._name;
//     }
// }

// let obj: Student = new Student();

// obj.name = "Aya"; //set
// console.log(obj.name); //get

// Static Method & Static Property

// class User {
//     private constructor(private name: string, private age: number, private role: string){}
//     public static createAdmin(name: string, age: number): User{
//         return new User(name, age, "Admin");
//     }
// }

// let obj: User = User.createAdmin("Mohamed", 25);
// console.log(obj);


// Inheritance 
// Multilevel Inheritance

/*  
    (parent, super, base) class
    (child, sub, derived) class
 */

// class Parent {
//     protected name: string;
//     protected age: number;
//     protected constructor(name: string, age: number){
//         this.name = name;
//         this.age = age;
//     }
// }

// class Child extends Parent {
//     public salary: number;

//     public constructor(name: string, age: number, salary: number){
//         super(name, age);

//         this.salary = salary;
//     }
// }

/* Polymorphism
    Overloading
    Overriding
*/
// Abstract (class , methods)
// Interface

/* finish OOP */


// Generic <>

// function echo<T>(value: T): T{
//     return value;
// }
// console.log(echo<number>(10));


// function printArr<T>(arr: T[]): void{
//     for(let item of arr){
//         console.log(item);
//     }
// }
// printArr<number>([10, 20, 30]);


// interface keyValue<k = number, v = string> {
//     key: k;
//     value: v;
// }
// let test: keyValue<string, number> = {
//     key: "",
//     value: 18
// }


// keyOf 

// type Person = {
//     name: string;
//     age: number;
//     address: string;
//     salary: number;
// }
// function getValue<T, K extends keyof T>(obj: T, key: K): T[K]{
//     return obj[key];
// }
// let X: Person = {
//     name: "mohamed",
//     age: 18,
//     address: "Cairo",
//     salary: 6000,
// }
// getValue(X, "address");


// import & export

// import { add } from "./math";

// console.log(add(10, 20));


// decorators

// Class
// function test (constructor: Function) {
//     constructor.prototype.x = 10;
//     constructor.prototype.myFun = function (){
//         console.log("ok");
//     }
// }
// @test
// class Auth {

// }
// let obj: Auth = new Auth();
// console.log((<any>obj).x);
// (<any>obj).myFun();

// Method 
// function test (classProperty: Object, methodName: string, descriptor: PropertyDescriptor) {
//     let originalMethod = descriptor.value;
//     descriptor.value = function (...args: any[]) {
//         console.log("Hello From Decorator");  
//         return originalMethod.call(this, ...args);
//     }
// }

// class Human {
//     @test
//     public myFun(x: number){
//         console.log("Hello From Human");   
//         return x;
//     }
// }

// let obj: Human = new Human();
// console.log(obj.myFun(30));

// Accessor 
// function test (classProperty: Object, methodName: string, descriptor: PropertyDescriptor) {
//     let old = descriptor.get;
//     descriptor.get = function () {
//         console.log("Hello From Decorator");
//         return old?.call(this);
//     }
// }

// class Human {
//     private _name: string = "";
//     public set name(userName: string){
//         this._name = userName;
//     }
//     @test
//     public get name(){
//         return this._name;
//     } 
// }

// let obj: Human = new Human();
// obj.name = "Mohamed";
// console.log(obj.name);

// Property
// function test (classProperty: Object, propertyName: string){
//     let value: string;
//     let descriptor: PropertyDescriptor = {
//         get(){
//             console.log("Hello From Get");
//             return value;
//         },
//         set(newValue: string){
//             console.log("Hello From Set");
//             value = newValue;
//         },
//     };
//     Object.defineProperty(classProperty, propertyName, descriptor);
// }
// class Human {
//     @test
//     public name: string = "";
// }
// let obj: Human = new Human();
// obj.name = "Mohamed";
// console.log(obj.name);

// Parameter 

/* Finish TS */

