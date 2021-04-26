//lab about me
'use strict';
let yourname=prompt('what is your name?');
console.log(yourname);
alert('hello ' +yourname + ' and welcome');

let condi=prompt('are you good?');
console.log(condi.toUpperCase());

switch (condi.toLowerCase()) {
    case 'yes':
            if(condi ==='yes'){
        console.log('ok have a nice day');}
        
break ;
case 'no':
console.log('i hope it gets better soon');
alert('you answered with no');
}


 let age=prompt('are you over 18?');
   console.log(age);

switch (age.toLowerCase()) {
    case 'yes':
if(age==='yes');{
        console.log('ok you can check any infromation you like');
        }
break ;
case 'no' :

        console.log('you cant access some information');
        alert('you answered with no');
}


let live=prompt('do you live in jordan?');
console.log(live);

switch (live.toLowerCase()) {
    case 'yes':
if(age ==='yes');{
        console.log('ok feel free');
       }
break ;
case 'no' :

        console.log('you need to register');
        alert('you answered with no');

}


let work=prompt('do you work?');
console.log(work);

switch (work.toLowerCase()) {
    case 'yes':
        if(work ==='yes');{
        console.log('ok feel free');
        }
break ;
case 'no' :

        console.log('you need to register');
        alert('you answered with no');

}

let hardworker=prompt('do you workhard?');
console.log(hardworker);

switch (hardworker.toLowerCase()) {
    case 'yes':
if (hardworker ==='yes'){
        console.log('keep it up!');}
        
break ;
case 'no' :

        console.log('you should do better');
        alert('you answered with no');
}

alert('hello ' + yourname + ' i hope you found what you were looking for');
