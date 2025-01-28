
// function pio(){
//     console.log('i have clicked on document');
// }

// document.addEventListener('click',pio);

// function pio(){
//     console.log('i have clicked on document');
// }

// document.removeEventListener('click',pio);

// let fuka = document.querySelector('h2');

// function jlo(){
//     fuka.style.background = 'red';
// }

// fuka.addEventListener('click',function(){
//     fuka.style.background = 'red';
// });

//removeEventListener

// it works only in three condition 
// same target Event
// same type
// same function

// function pio(){
//     console.log('i have clicked on document');
// }

// document.addEventListener('click',function (){
//     console.log('i have clicked on document');
// });
// document.removeEventListener('click',function (){
//     console.log('i have clicked on document');
// });

// despatch event

// phases of an event

// capturing phase
// at target phase
// bubbling phase

window.onload = function() {
    const content = document.querySelector('#hlo');

    content.addEventListener('click', function(event){   
        console.log(event);
    });
};



