// let content = document.querySelector('#hi');

// content.addEventListener('click', function(event){
//     console.log(event);
// });

// let fontent = document.querySelector('#hi');

// fontent.addEventListener('click',function(){
//     fontent.style.background = 'green';
// });

// // .preventDefault() use for preventing the default action
// let hr= document.querySelectorAll('a');
// let thirdlink = hr[3];

// thirdlink.addEventListener('click',function(event){
//    event.preventDefault();
//     console.log('ashyam');
// });

// how to avoid too many events

//  let myDiv= document.createElement('div');

//  function paraStatus(event){
//     console.log('para'+ event.target.textContent);
//  }

//  myDiv.addEventListener('click', paraStatus);

//  for(let i=1; i<=100; i++){
//     let myPara= document.createElement('p');
//     myPara.textContent='this is para'+i;
//         myDiv.appendChild(myPara);
//  }
//  document.body.appendChild(myDiv);

 let element = document.querySelector('#wrapper');
 element.addEventListener('click', function(event){
    if(event.target.nodeName === 'SPAN'){
        console.log('span pr click kia hai'+ event.target.textContent);
    }
 });