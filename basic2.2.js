console.log('chaliye arambh karte he');

//object --> entity
//opps concept
// let rectangle={
//     len:1,
//     breadth:3,
//     draw(){
//       console.log('hellow ji');
//     }
// };

// rectangle.draw();


// console.log(rectangle);
//function do single weel defined task
// function rectanglee(){
//     console.log('draw');
// }
// // function call 
// rectanglee();

//factory function

// function createRectangle (){
//     let rectangle={
//         len:1,
//         breadth:5,
//         draw(){
//             console.log('pussy as hole');
//         }
//     };
//     return rectangle;
// }

// let rectangleObj= createRectangle;

//constructor function

function CreateRectangle(len,rect){
        this.len=len;   //this keyword basically refers to the current obejct we are working upon
        this.breadth=rect;
        this.draw= function(){
            console.log('magguu');
        };
    }
    CreateRectangle.length;

   let createObjeect= new CreateRectangle(5,2);
   createObjeect.color='yellow';
   delete createObjeect.color;

   //Types in Js

//    primitive   number string boolean undefined null
//  reference   functions objects Arrays

// primitive vs reference 
let a=10;
let b=a;
a++;
console.log(a);
console.log(b);

let aa={value:10};
let bb=aa;
aa.value++;
console.log(aa.value);
console.log(bb.value);

// primitive are copied by their vale 
//reference are copied by their reference 

// let as=10;
// function inc (as){
//     as++;
// }
// console.log(as);

let cat={value:10}
function incc (cat){
    cat++;
}
console.log(cat);

//for of for in 
let rectangle = {
    len:2,  //key  and another is value assigned
    breadth:6
};

// for in loop
for(let key in rectangle){
    //keys are reflected through key variable 
    console.log(key, rectangle[key]);
}

// for of 
// iterable --> arrays map
//hack
for (let key of Object.keys(rectangle)){
    console.log(key);
}
// throught entries we can also add value of properties
for (let key of Object.entries(rectangle)){
    console.log(key);
}
// way to find if property exist in object or not
if ('color' in rectangle){
    console.log('present');
}
else{
    console.log('absent');
}

//object cloning
 let src={value:10};
 let des={};
 for (let key in src){
    des[key]=src[key];
 }
 console.log(des);
src.a++;
console.log(des);

// 2nd way

let sr={
    a:10,
    b:20,
    c:30
};
let src2={d:45};
let dest=Object.assign({},sr,src2);
console.log(dest);

src.a++;
console.log(dest);

 console.log('hlo');

//3 type
let srcc={
    a:10,
    b:20,
    c:45
};

let destt={...src};
console.log(destt);
srcc.a++;
console.log(destt);


let triangle={
    value:34,
    value1:45,
    value3:83
};

for(let key in triangle){
    console.log(key,triangle[key]);
}

for(let key of Object.entries(triangle)){
    console.log(triangle);
}

let ana={
    value:1,
    value2:2,
    value3:3
};
let jana={};
for(let key in ana ){
    jana[key]=ana[key];
}
console.log(jana);

let anaa={
    a:4,
    b:5
};
for(let key in Object.assign({},anaa));
console.log(anaa);

let pihu={
    a:3,
    b:5,
    c:5
};
let bihu=Object.assign({},pihu);
console.log(pihu);