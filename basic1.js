console.log('Namaste dunia');


let age=17;
let c=(age>=18)? 'i can vote':'i cannot vote';
console.log(c);



let n1=3;
let n2=4;
let n3=n1**n2;
console.log(n3);


let marks=66;
if (marks>=90){
    console.log('A')
}
    else if(marks>=80){
        console.log('B+');
    }
    else if(marks>=70){
        console.log('C+');
    }
    else{
        console.log('fail');
    }


    let num=2;
    switch(num){
        case 1:  console.log('A');
        break;
        case 2: console.log('B');
        break;
        default: console.log('D');
    }

    for(let i=0; i<5; i=i+1){
        console.log(i);
    }

    let i=0;
    while (i<=10){
        console.log(i);
        i++;
    }
      

    let k=1;
     do{
        console.log(k);
        k++;
     }while(k<=10);

     // object creation

     const rectangle= {
        length:1,
        breadth:2,

        draw: function(){
            console.log('drawing rectangle');
        }
    };

    //factory function--. camelcase

    function createRectangle(len, bre){
        let rectangle= {
            length:len,
            breadth:bre,
    
            draw() {
                console.log('drawing rectangle');
            }
        };
        return rectangle;
    }

     //access
    rectangle.length;
    rectangle.breadth;
    rectangle.draw;

    let rectangleObj1= createRectangle(5,4);
    let rectangle1= createRectangle(2,3);
    let rectangle2= createRectangle(6,8);

    //constructor function --> pascal notation -->first letter oof eb=very word is capital --> NumberOfFunction

    function Rectangle(){
        //properties
        this.length = 1;
        this.breadth = 2;
        //method/function
        this.draw = function(){
            console.log('drawing');
        }
    }

    // object creation using constructor

    let rectangleObject= new Rectangle();


    //constructor property


    console.log('hello ji kese ho sareee');


     //let key woord cannot be redeclared
    let a=5;
    console.log(a);
    a=4;
    console.log(a);

    {
        let e=5;
        console.log(e);
    }

    {
        var e=3;
    }
    console.log(e);

    //var key word can be redeclared
    var f=5;
    console.log(f);

    var f=6;
    console.log(f);
 
    let g=1;
    console.log(g);

    //const is only used once and its  value cannot be changed

    const t=4;
    console.log(t);


    // keywords are special and reserved hence it cannot be used as a normoal keyword 
    let r='let';
    console.log(r);
    //rules
    // variable cannot be start with a number 
    // always use camelcase and uppercase like ageOfCamel  

    //multiple variable
    let h,n;
    h=4;
    n=2;
    console.log(h);
    console.log(n);

    //primitive datatype
    //string
    let q='nitesh';
    console.log(q);

    //number
    let numm=3;
    console.log(numm);

    //boolean true or false 0 or 1

    let status=true;

    //undefined
    let z;
    console.log(z);

    //null
    let v;
    // no value present 

            let x=3;
            x='nitu';
            console.log(x);

            //reference types 
            //objects Arrays Functions


            //object has property and behaviour

            let nitesh={
                len:15,
                bre:34
            };
            console.log(nitesh);
            // access of objects data
            // using dot .
            nitesh.len;
            console.log(nitesh.len);
             
            // using brackets and enclosed in ' '

            console.log(nitesh['bre']);

            //Arrays a list of similar kind of items but javascript can contain different kind of items
            let list=['nitesh', 'Ashyam', 'Rohit'];
            list [3]='Popii';
            console.log(list[3]);

            let list2=[2,'nitesh',4.5,'a',1];
            console.log(list2[0]);

            let name=10;
            console.log(name);

            //arithmetic operator 
            //  + - * / %  **

            let plus=3+1;
            console.log(plus);

            let minus=5-3;
            console.log(minus);

            let multiply=3*5;
            console.log(multiply);

            let power= 2**4;
            console.log(power);
            
            let divide=10/5;
            console.log(divide);

            let module=10%3;
            console.log(module);

       //pre increment/post increment ++ and pre decrement/post decrement --

        //pre increment/post increment
       let preinc=5;
       console.log(++preinc);

       let postinc=5;
       postinc++;
       console.log(postinc);

       // predec and postdec

       let predec=5;
        console.log(--predec);

        let postdec=5;
        postdec--;
        console.log(postdec);
         

        let ans= (++preinc) * (--predec);
        console.log(ans);

        //assignment op
        //    l ke ander 5 value assign  krde
        let l=5;
        let numb=34;
        console.log(numb/2);

        //comparison op
      // greater than > less than < greater than equal to >= less than equal to <=  strict equality ===  it checks datatype also  not equal to!==
      console.log(5<6);
      console.log(4>5);
      console.log(3 === 3);
      console.log(5>=5);
      console.log(6 !== 7);
      console.log(6>=6);
      console.log(3>=7);


     //Ternary operator  condn? value if true : value if false
    if(age>18);
     let u=(age=27) ? 'you can vote': 'you cannot vote';
    console.log(u);

    //logical operator

    //AND ALL CONDITION MUST BE TRUE IF ANY CONDITION IS FALSE THAN IT WILL BE FALSE 
    // OR ALL CONDITION MUST BE FALSE IF ANT CONDITION IS TRUE THAN IT WILL RETURN TRUE
    // NOT IF CONDITION IS TRUE THAN IT WILL RETURN FALSE ELSE IT WILL RETURN TRUE 

    //bitwise operator
    // Bitwise AND 
    // Bitwise OR

    //operator Precedence

    let o=5;
    let p=3;
    let w=7;
    let y=1;
    let s=(o+(p*w/y));
    console.log(s);

    //control statement 

   let aage =20;
    if(aage>=18){
        console.log('you can have sex at oyo');
    }
    else{
        console.log('you cannot have sex');
    }

    let markss=96;
    if (markss>=95){
        console.log('you will get russian');
    }
    else if (markss>=85){
        console.log('you will get himachali girl');
    }
    else if (markss>=75){
        console.log('you will get bengali black pussy');
    }
    else if(markss<75){
        console.log('you will get 200 ruppee wali');
    }
    else{
        console.log('you are gay napunsak');
    }
    
    //switch stmt
    let weight=2;
    switch(weight){
        case 1: console.log('you are gay');
        break;
        case 2: console.log('you are lesbian');
        break;
        case 3: console.log('you are a pussy ass hole');
        break;
        default: console.log('mae maderchod hu');
    }
    //loops 

    //for loop


    // let gg;
    // for(gg=10; gg>=1; gg=gg-1){
    //     console.log(gg);
    // }

    
    // let ggg;
    // for(ggg=1; ggg<=10; ggg=ggg+1){
    //     console.log(ggg);
    // }



// while loop
let fax=1;
while(fax<=10){
  console.log(fax);
  fax++;
}  

let eee=1;
while(eee<=10){
    console.log('nitesh');
    eee++;
}

//do while loop it will execute atleast one time

let tax=1;
do{
    console.log('pussy')
    tax++;
}while(tax<=10);



       
       

          



    
