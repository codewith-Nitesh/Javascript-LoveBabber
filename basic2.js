console.log('chaliye shuru krte he');

//primitive are copied by values
// let a=10;
// let b=a;
// a++;
// console.log(a);
// console.log(b);

//reference copied by address  object  is equal to references
// let A ={value:10};
// let B=A;
// A.value++; 
// console.log(A);
// console.log(B);


// let a=10;
// function inc(a){
//     a++;
// }
// inc (a);
// console.log(a);

let c={value:10};
function inc(c){
    c.value++;
}
inc (c);
console.log(c.value);

//for-of and for-in Iterating through Objects used for iteration


//for-in loop
let rectangli={
    length:2,  //key
    breadth:3,
};
// for in loop
for (let key in rectangli){
    console.log(key,rectangli[key]);
}


//for-of loop

for(let key of Object.keys(rectangli)){
    console.log(key);
}

for(let key of Object.entries(rectangli)){
    console.log(key);
}

//for-checking
if('color' in rectangli){
    console.log('present');
}
else{
    console.log('Absent');
}

//object cloning
//iterable
// let src={
//     a:10,
//     b:20
// };

// let dest={};

// for (let key in src){
//     dest [key] = src [key];
// }
// console.log(dest);

//assign 


// let src={
//     a:10,
//     b:20
// };

// let  dest = Object.assign({}, src);
// console.log(dest);
// src.a++;
// console.log(dest);
// 

//spread

let src={
    a:10,
    b:20
};
let dest={...src};
console.log(dest);
src.a++;
console.log(dest);


//Arrays and maps are iterable

//garbage collector






// object create
const rectangle= {
    // properties
    length:1,
    breadth:2,
    
    //function behaviour we call it method inside object
    draw: function(){
    console.log('drawing rectangle');
}
};

// object --> behaviour,property 

//car--> color,weight,height,model
console.log('chaliye fir se shuru karte he');

let rectangle1= rectangle;


//Factory function
function createRectangle(len,bre) {
    const rectangle= {
        // properties
        length:len,
        breadth:bre,
        
        //function behaviour we call it method inside object
        draw(){
        console.log('drawing rectangle');
    }
    };
    return rectangle;
}
let rectangleObj1=createRectangle(3,4);

//access
rectangle.length;
rectangle.breadth;
rectangle.draw();


//constructor function --> pascal notation--> first letter of every  word is capital--> NumberOfStudents
// prop/method--> initialise/define
// function Rectanglee(leng, brea){
//     this.length = leng;
//     this.breadth =brea;
//     this.draw= function(){
//         console.log('drawing as pussy');
//     }
// }



//object creation using constructor
let rectangleObject= new Rectanglee(4,6);


// Dynamic nature of Objects
rectangleObject.color= 'yellow';
console.log(rectangleObject);

delete rectangleObject.color;
console.log(rectangleObject);

// let Rectangle1 = new function(
//     'length',
//    ` this.length = leng;
//     this.breadth =brea;
//     this.draw = function(){
//         console.log('drawing as pussy');
//     } `);

// Object creation
// let rect = new Rectangle1(2);
// console.log(rect);


// functions are objects

 
// objects in js entity 
console.log('chaliye arambh karte he');

  