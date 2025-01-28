function printname(){
    console.log('nitesh');
}
printname(); 

// hoisiting basically take function declaration on top of file
// function assignment

let pussy= function walhi(){
    console.log('basola');
}
console.log(pussy);
pussy();


let lola = pussy;
lola();

// annonomus function assignment

let a = function (){
    console.log('gufa')
}

let x=1;
x='a';
console.log(x);

function sum(a,b){
    console.log(arguments);
    return a+b;
}

// console.log(sum(1,2));
let ans = sum(1,2);

// dynamic source parameter  
function suum(a,b){
    let total=0;
    for(let value of arguments)
        total = total+value;
    return total;
}
let anss = suum(1,2,3,4,5,6,7);
console.log(anss);

//rest operator(...) works as an array it must be last formal parameter
function summ(num, value ,calue, ...args){
    console.log(args);
}

summ(1,2,3,4,6,8);

// default parameter
function interest(p,r,y){
      return p*r*y/100;
}

console.log(interest(1000,10,5));


//getter and setter  fetching and seting access setert --. change or manipulate
let person={
    fName:'love',
    lName:'babbar',
    get fullName(){
        return `${person.fName} ${person.lName}`;
    },

    set fullName(value){
        if(typeof value !== string ){
            throw new Error('you have a sexy boobs');
        }
        let part = value.split(' ');
        this.fName= part[0];
        this.lName = part[1];
    }
};

// console.log(person);

// console.log(person);

// function fullName(){
//     return `${person.fName} ${person.lName}`;
// }

// console.log(fullName());

// get fullName(){
//     return `${person.fName} ${person.lName}`;
// }
// console.log(person.fullName());

//Try and catch block Error handling
// try{
//     person.fullName= 1;
// }
// // person.fullName= true;
// catch (e) {
//     alert('this is a big big penis');
// }

//scopes



if(true){
    var ar=5;
}
console.log(ar);

{
    var ta=6;
}
console.log(ta);
// if var is declared inside the function then its aura is till ther only if its is outside the function then its aura is present in the file
function wakli(){
    var loda=5;
}
console.log(wakli);

// for (var i=0; i<10; i++){

// }
// console.log(i);

// finally block h.w

// reducing an array

let bb= [1,2,3,4,5,6];
let total = 0;
for(let value of bb)
    total = total + value;
console.log(total);  


//reduce method
let  totalsum = bb.reduce((accumalator, currentValue) => accumulator + currentValue, 0);
console.log('printing total sum : ')
console.log(totalsum);