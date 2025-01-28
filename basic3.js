// in-built Objects && Arrays
//math: object

Math.abs;
Math.round;
console.log('hello');

//primitive string  with dot it will be considered as string object
let lastName='babbar is back';
let message='babbar is back';
let word = message.split(' ');
console.log(word);



let firstName=new String('love');

//Template  literal use by back ticks ``
let cessage=`
hello ${lastName}, // for dynamically orwe call it pplaceholder using dollar sign $
this
is my 
first 
message`;
console.log(cessage);


let date = new Date();
console.log(date);

let date2= new Date('june 20 1998');
console.log(date2);

let date3= new Date(' 06 12 2003 12:00');
date3.setFullYear(2002);
console.log(date3);

//Arrays  object/reference type collection of items 


let numbers=[1,3,6,9];
console.log(numbers);
numbers.indexOf(3);
//insertion

//end
numbers.push(7);
console.log(numbers);
// start
numbers.unshift(2);
console.log(numbers);
//middle
numbers.splice(2,0,'a','b','c');
console.log(numbers);
//searching
console.log(numbers.indexOf(9));

// access through array

// we want to check if number exist in an array
// if(numbers.indexof(3)= 5){
//     console.log("present");
// }
// else{
//     console.log('not present');
// }

console.log(numbers.includes(6));
console.log(numbers.indexOf(1,0));  //startng of index


//array of object
let courses=[
    {no:1, naam:'nitesh'},
    {no:2, naam:'choudhary'},
];
console.log(courses);

// console.log(courses.indexof({no:1, naam:'nitesh'}));
  
//different method call back function using find method
// let course = courses.find(function(course){
//     return course.naam == 'choudhary';
// });
// console.log(course);

let course = courses.find(course => course.naam == 'nitesh');  //predicate function  find method

//shorter notation using arrow function --> more readable

//Removing element

//end  
// begining
// middle

let num=[1,2,3,4,5,6,7,8];
//end
num.pop();
//begin
num.shift();
//middle
num.splice(2,1);
console.log(num);

//Arrow Function

numbr=[1,2,3,4,5,6];
let numb2=numbr;
// numb=[];
// numbr.length=0;
numbr.splice(0,numbr.length);

console.log(numbr);
console.log(numb2);

//combining and slicing arrays

let first=[1,2,3];
let second=[4,5,6];
//using concat method
let combine= first.concat( second);
console.log(combine)

let sliced=combine.slice(2,4);  // 2asindex after index 4 exclude
console.log(sliced);

let arr=[20,30,40,50,60];
let cutdown= arr.slice(2);
console.log(cutdown);

//spread operator

let find=[1,2,3,4];
let  find1=[5,6,7,8];
let cbn=[...find, 'a', ...find1,'b',true];
console.log(cbn);

//copy krne ka tarika

let another=[...cbn];
console.log(another);

//iterating an array

let arrr=[10,20,30,40,50];
// for(let value of arrr){
//     console.log(value);
// }

arrr.forEach(function(numberr){  //callback function  for each method
      console.log(numberr);
});

arrr.forEach(numberr=> console.log(numberr)); //using arraow function

// joining arrays

numbers=[1,2,3,4,5];
let joined=numbers.join(',');
console.log(joined);

//spliting
let  messagee='this is my first message';
let partSplit=messagee.split(' ');
console.log(partSplit);

let joinedd=partSplit.join('_');
console.log(joinedd);

// sort method
let fas=[10,40,60,30,20,50,80,90,70,4];
let sort= fas.sort();
fas.reverse();
console.log(sort);

//filter method
let fumber=[-1,5,2,-2,9,3,-6,8];
let dba= fumber.filter(value => value>0);                         //predicate function
console.log(dba);

//mapping method
// let n=[1,5,8,3,5,7];
// let s=n.map(function(value){
//     return 'student_no'+value;
// });
// console.log(s);
let n=[1,5,8,3,5,7,9];
let s=n.map(value => 'student_no'+value);
console.log(s);

//mapping with objects

// let u=[-1,9,-6,3,2];
// let flt= u.filter(value => value>0 );
// let itm= u.filter(value => value>0 ).map(function(nm){
//     let obej={value:nm};
//     return obej;
// });  
// console.log(itm);
// let u=[-1,9,-6,3,2];
// let itm= u.filter(value => value>0 ).map(function(nm){
//     let obej={value:nm};
//     return obej;
// });
// console.log(itm);

console.log('nitesh');
// math object inbuilt object
math.random();
math.round();







