//functions  readable more efficient reusable
function nitesh (){
    console.log('my name is  Nitesh');
}
//function cal or invoke
nitesh();

//Named function assignment

let stand = function walk(){
    console.log('walking');
};

stand();

let jump=stand;
jump();
let stand2=jump;
stand2();

//annonymus function assignment
let stand1 = function (){
    console.log('walking');
};

//Function assignment

let x=1;
x='a';
console.log(x);


function sum (a,b){
    return a+b;
}

console.log(sum(2,4));

function sum(a, b){
    let total=0;
    for (let value of arguments)
    total=total + value ;
    return total;
}
let ans= sum(1,2,3,4,5,6);
console.log(ans);

//Rest operator (...) rest parameters
function sum (num,num1, ...args){
    console.log(args);
}

sum(1,2,3,4,5,6);

//Default parameters

// function interest (p,r,y){
//     return p*r*y/100;
// }
// console.log(interest(1000,10,5));


// function interest (p,r=5,y=3){  //default value parameter make every parameter as default
//     return p*r*y/100;
// }
// console.log(interest(1000,undefined,8));

//getter and setter function



// getter --> access of properties 
// setter --> change or update properies

// let prsn={
//     fName : 'nitesh',
//     lName : 'choudhary',
//     get fullName(){
//         return `${prsn.fName}  ${prsn.lName}`;   //placeholder
//     },
//     set fullName(value){
//         if (typeof value !== String){
//             throw new Error ('you have not sent a string');
//         }
//          let parts= value.split(' ');
//          this.fName = parts[0];
//          this.lName = parts[1];
//     }
// };
// console.log(prsn);
// try{
//     prsn.fullName=true;
// }
// catch(e){
//     alert(e);   //alert method
// };


//read only function
// console.log(prsn.fullName); 

// ^
// |
//error handling try & catch block

//scopes

{
    // let a=5;  the aura of let is under this scopes only between this parenthesis
    // console.log(a);

    var a=5;   //but var works  inside outside everywhere but donot work under function parenthesis
}
console.log(a);

function walk(){
    var a=5;
    console.log(a);
}

// function a(){
//     const aB=5;
// }
// function b(){
//     const aB=5;
// }

// const a=5;
// function xyz(){
//     const a=5;
// }


for (var i=0; i<10; i++){

}
console.log(i);

if(true){
   var a =5;
}
console.log(a);

function a(){
    const a = 5;
}
function ab(){
    const a=5;
}

//Reducing an array 
let arr= [1,2,-3,4,5];
let total =0;
for(let value of arr)
    total = total + value;
console.log(total);


let totalSum=arr.reduce((accumalator, currentValue) => accumalator + currentValue,0);
console.log(totalSum);