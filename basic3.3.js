console.log('pus as hole');
// Math.random();

// object string

let lastName= 'babbar';
console.log(lastName);

// let chuchu = new string ('papu');
// console.log(chuchu);

let obj={
    value1:3,
    value2:5,
    value3:2,
    draw(){
        console.log('nitesh');
    }
};

console.log(obj);
obj.draw();

obj.value1;

let obj1={
    a:4,
    b:5,
};

let obj2={...obj1};
console.log(obj2);


let ashu={
    a:5,
    b:3,
    c:7
};

for(let key in ashu){
    console.log(key,ashu[key]);
}
// factory function
// function asss(){
//     let objj={
//         a:5,
//         b:6,
//         c:5,

//         draw:function(){
//             console.log('nitesh');
//         }
//     };
//     return objj;
// }

// function ass(){
//     let objj={
//         a:5,
//         b:6,
//         c:5,

//         draw:function(){
//            console.log(objj);
//         }
//     };
//     return objj;
// }

// constructor function

// function nit(){
//     this.len=4;
//     this.bre=5;
//     this.draw:function
// }

// let ashyam={
//     value:'choti',
//     value1:'chota don',
//     value2:'naughty boy'
// };
  
//    function hlo (ashyam){
//     console.log(ashyam.value1);
//    }

//    hlo(ashyam);


//    function choudhary(){
//     this.length=4;
//     this.breadth=6;
//    }

//    console.log(choudhary);

//    console.log(this.length);

//    let ada ={
//     a:5,
//     b:4,
//     c:7
//    };

//    for(let key of Object.keys(ada)){
//     console.log(ada);
//    }

//    let a=6;
//    let b=7;

let meraNam=' nitesh ';
console.log(meraNam);

let message='this is my first message';
let words = message.split(' ');
console.log(words);

let placeOccurdingly='this is my \' second message';
let plceOccurdingly='this is my \' \` second message';

console.log(placeOccurdingly);
console.log(plceOccurdingly);

let backTicks=`this is my 
first
${meraNam}

i am 
going to 
send you to 
big mncs`;


console.log(backTicks);


// in built object

let date= new Date();
console.log(date);

let date2= new Date('june 20 2003 ');
console.log(date2);

// let date3= new Date('2003 6,20,7');
// console.log(date3);

date2.setFullYear(2002);
console.log(date2);

//Arrays

let arr=[12,45,76,34,6,78,90,21];
console.log(arr);
arr.sort();
console.log(arr);
//searching
console.log(arr.indexOf(21));
console.log(arr[2]);
// insertion //end
console.log(arr.push(9));
console.log(arr);
//unshift method
console.log(arr.unshift(4));
console.log(arr);
console.log(arr.sort());
//splice means adding value in middle index delete count and value to be added
arr.splice(2,0,'a','b','c');
console.log(arr);
//we want to check if number exist in array

// if(arr.index0f(21) != -1){
//     console.log('present');
// }

// using include method
if(arr.includes(5)){
     console.log('chi tapa ke dam dam');
}
else{
    console.log('loda lo na mera muh me')
}
// advance way
console.log(arr.indexOf(21,0));

// references array of object
let courses =[
    {no:1, naam:'nitesh'},
    {no:2, naam:'chamchu'}
];
console.log(courses);
console.log(courses.indexOf({
    no:1, naam:'nitesh'
}));

// callback functions its a function passsed into another function as an argument which is then invoked inside the another function
//using find method
let course = courses.find(function(course){
    return course.naam == 'nitesh';
})

console.log(course);

let parr=[
    {value:2, subject:'english'},
    {value:3, subject:'maths'}
];

// callbackfunction  predicate  function

let finding = parr.find(function(values){
    return values.value == 3;
})
console.log(finding);

// let finding = parr.find(values =>  values.value == 3);
// console.log(finding);

// removing element
// pop() ending
// shift () starting
// splice middle at index about how many number 

let fumbers= [1,2,3,4,5,6,7];
console.log(fumbers.pop());
console.log(fumbers);
console.log(fumbers.pop());
console.log(fumbers);

console.log(fumbers.shift());
console.log(fumbers);

console.log(fumbers.splice(2,1));
console.log(fumbers);

// empting an array
let cumbers=[1,2,3,4,5,6,7];
let cumber2= cumbers;
cumbers.length = 0 ;
console.log(cumbers.splice(0, cumbers.length));
cumbers=[];
console.log(cumbers);
console.log(cumber2);

// let pi=0;
// while(pi<=10){
//     console.log('happy')
//     pi++;
// }

// combining and slicing arrays
let first=[1,2,3];
let second = [4,5,6];
//combining
let combine= first.concat(second);
console.log(combine);
let sliced=combine.slice(2,3);
console.log(sliced);

let marks=[10,20,30,40,50,60];
// lat given index gets excluded
let parks= marks.slice(1,3);
console.log(parks);

// combining and slicing on objects
let ob=[
    {
    value:1,
   }
];
let obej=[
    {
        value:2,
    }
];

let coj= ob.concat(obej);
console.log(coj);
// spread operator ...
let khaju=[1,2,3,4];
let paju=[5,6,7,8];
let chaju= [...khaju,'a', ...paju,'b'];
console.log(chaju);

//copy kese create kru

let another=[...chaju];
console.log(another);

//iterating an array
// for of
let arrr= [10,20,30,40,50];
for(let value of arrr){
    console.log(value);
}

// for each
// arrr.forEach(function(numberr){
//     console.log(numberr);
// })
arrr.forEach(numberr => console.log(numberr));

//joining arrays
let numbers=[10,20,30,40,50];
let joined=numbers.join(',');
console.log(joined);

//spliting arrays
let messagee='this is my first message';
let khacheze= messagee.split(' ');
console.log(khacheze);
//reverse method
let chu=[10,20,30,40,50];
chu.reverse();
console.log(chu);
// sort on array object

//filtering arrays
// using filter method

let carr=[-10,20,30,-40,50];
let cilt = carr.filter((value => value >=0));
console.log(cilt);

//mapping arrrays
// using map method  maps element of array to someone else

let arro=[1,2,3,4,5,6,7,8];
let cello = arro.map(function(value){
    return 'stud_no'+ value;
});

console.log(cello);

let khasi=['chodu','podu'];
let chichi= khasi.map(function(value){
    return 'pen'+ value;
});
console.log(chichi);

// mapping with objects:
// let cumber=[1,2,3,4,5,-9,-1,10];
// let filter= cumber.filter(function(value){
//     return value < 0;
// })
// console.log(filter);

// let items= filter.map(function(num){
//     let objjj= {value:num};
//     return objjj;
// })
// console.log(items);

let rumber=[1,-2,-5,4,3,7,-8];
let items = rumber
            .filter(value => value<0)
            .map(num => {value:num});
            console.log(items);

            //reducing arrays

            


