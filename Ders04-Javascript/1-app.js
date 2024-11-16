//JS giriş
//console.log("Merhaba Javascript");

//Değişkenler
// var a = 10;
// var b = 3.14;
// var c = "Javascript";

/*console.log(a);
console.log(typeof b);

//Otomatik tip dönüşümleri
var firstNumber=10;
var secondNumber="20";
var result=firstNumber-secondNumber;
console.log(result);
console.log(typeof result);*/

// hosting!
// var firstNumber;
// console.log(firstNumber);
// firstNumber=20;
// deneme();
// function deneme(){
//     console.log("a fonksiyonu");
// }

//undefined - tanımsız
// var isNull;
// console.log(isNull);
// console.log(typeof isNull);

//Object-Nesne !
// var user = {
//     name: "Hakan",
//     age: 30,
//     isActive:"true",
//     notlar:{
//         mat:90,
//         fizik:80,
//     },
//     favoriteFruits: ["elma","armut"]
// };

// console.log(user);
// console.log(typeof user);
// console.log(user.name);
// console.log(user.notlar);

//Arrays
// var fruits =["elma","armut","muz"];
// var cars = new Array(4);
// cars.push("audi","bmw","renault","toyota");
// console.log(fruits);
// console.log(typeof fruits);
// console.log(fruits[0]);
// console.log(cars);

//Functions
// function hello(){
//     console.log("Merhaba");
// }
// hello();
// console.log(hello);
// console.log(typeof hello);

//Date 
// var Date = new Date();
// console.log(Date);
// console.log(typeof Date);

// var a = 10;
// var b = a;
// console.log("1-",a,b);
// a=20;
// console.log("2-",a,b);

// var a = [10];
// var b = a;
// console.log("1-",a,b);
// a=[20];
// console.log("2-",a,b);
// console.log("3-",a*b);
// console.log("3-",a-b);

// var a = [10,20,30,40,50];
// var b = a;
// console.log("1-",a,b);
// a[0]=60;
// a.push(70);
// console.log("2-",a,b);
// console.log("3-",a[1]*b[0]);
// console.log("3-",a[3]-b[2]);

//Scope
// var a = 10; //Global Scope
// function Scope(){
//     var b = 20; //Function Scope
//     console.log(a,b);
// }
// Scope();
// if(true){
//     let c=30; //Block Scope
// }
// {
//     let d=40; //Block Scope
// }
// console.log(a,b,c,d);

//Tip dönüşümleri
// var a=5;
// console.log(a, typeof a);
// a = String(a);
// console.log(a, typeof a);

// var b="5";
// console.log(b, typeof b);
// b = Number(b);
// console.log(b, typeof b);

// var c ="number";
// console.log(c, typeof c);
// c = Number(c);
// console.log(c, typeof c);

// var a= 5 + "2";
// console.log(a, typeof a);

// var a= 5 - "2";
// console.log(a, typeof a);

//Operatörler
//Atama operatörü
// const a=10;

//Aritmetik Operatörler
// console.log(10+5);
// console.log(10-5);
// console.log(10*5);
// console.log(10/5);
// console.log(10%5);
// console.log(10**5);

//Math Fonksiyonları
//let sonuc;
// sonuc = Math.PI;
//sonuc=Math.round(3.6);
//sonuc=Math.ceil(3.2);
//sonuc=Math.floor(3.9);
// sonuc=Math.sqrt(16);
// sonuc=Math.random() * 100;
// sonuc=Math.floor(Math.random() * 100);

//console.log(sonuc)

//String Methodları
 let value;
// const firstName = "Hakan";
// const SecondName = "xd";
// const department = "SOC";
// const age = "30";

// value = firstName +" "+ SecondName;
// value = firstName;
// value += " "+SecondName;
// value = firstName.length;
// value = firstName.toUpperCase();
// value = firstName[0];
// value = firstName[firstName.length-1];
// value = firstName.indexOf("a");
// value = firstName.includes("a");
// value = firstName.concat(" ",SecondName," ",department);
// value = "İsim: "+firstName+" "+ 
// "\nSoyisim: "+SecondName+" "+ 
// "\nYaş: "+age;

// //Template Literals

// value = `İsim: ${firstName}
// Soyisim: ${SecondName}
// Yaş: ${age}`

// value = `
// <ul>
// <li>İsim: ${firstName}</li>
// <li>Soyisim: ${SecondName}</li>
// <li>Yaş: ${age}</li>
// </ul>`

//Array Methods
// const langs = ["Phyton","Java","C++","JS"];
// const nums = [1,34,25,46,57,78,90];

// value = nums.length;
// value = nums[0];
// value = nums.indexOf(34);
// value = nums.includes(90);
// value = nums.push(200);
// value = nums.unshift(100);
// value = nums.pop();
// value = nums.shift();
// value = nums.reverse();
// value = nums.sort();
// value = nums.sort(function (a,b){
//     return a-b;
// });

// console.log(nums);

//Object

// const student = {
//     fullName:  "Erkin Arıkan",
//     age: "21",
//     address:{
//         city: "Istanbul",
//         country: "Turkiye"
//     },
//     work: function(){
//         console.log("Çalışıyor");
//         return "Çalışıyor";
//     }
// }
// value = student;

// let date = new Date();
// value = date;
// value = date.getMonth()+1;
// value = date.getDate();
// value = date.getFullYear();
// value = date.getDay();
// value = date.getHours();
// value = date.getMinutes();
// value = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;

//Karşılaştırma Operatörleri
// a=10;
// b=20;
// c="10";
// d=10;

// value = a==b;
// value = a==c;
// value = a===c;
// value = a > b;

// //And operatörü
// value = (a == d) && (a < b);

// //Or operatörü
// value = (a == b) || (a > b);


//Koşullar
// let a = 10;
// let b = 20;
// if(a > b){
//     value = `${a} büyüktür ${b}`;
// }else if(a == b){
//     value = `${a} eşittir ${b}`;
// }else{
//     value = `${a} küçüktür ${b}`;
// }

// const islem = 2;

// switch (islem){
//     case 1:
//     value = "İşlem 1";
//     break;
//     case 2:
//     value = "İşlem 2";
//     break;
//     case 3:
//     value = "İşlem 3";
//     break;
//     case 4:
//     value = "İşlem 4";
//     break;
// }

//For Döngüsü

// for(let i = 0; i < 10;i++){
//     if(i==3){
//         break;
//     }
//     console.log(i);
// }

// const langs = ["Phyton","Java","C++","Js"];

// for(let i = 0; i < langs.length; i++){
//     console.log(langs[i]);
// }

//Fonksiyonlar
// function func(){
//     // console.log("Merhaba")
//     return "Merhaba";
// }

// function user(name,age){
// console.log(`İsim: ${name} \nYaş: ${age}`)
// }

// user("mahmut",15)

//return function
// function square(x){
//     return x*x;
// }
// const result = square(5)*3;
// console.log(result);

//Arrow Function
// const square = x => x*x;
// console.log(square(5))

//while döngüsü
//  let i = 0;

// while(i < 10){
//     if( i ==3){
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;
// }

//DO

// do{
//     console.log(i);
//     i++; 
// }while(i<10);

// //forEach döngüsü
// const langs = ["Phyton","Java","C++","JS"];
// langs.forEach(function(lang,index){
//     console.log(lang,index);
// });

// //Map Döngüsü
// langs.map(function(lang,index){
//     console.log(lang,index);
// })