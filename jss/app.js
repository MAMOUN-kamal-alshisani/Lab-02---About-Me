'use strict';

let yourname=prompt('what is your name?');
console.log(yourname);
alert('hello ' +yourname + ' and welcome');

let condi=prompt('are you good?');
console.log(condi.toUpperCase());

switch (condi.toLowerCase()) {
    case 'yes':
        alert('you have answered with yes');
        console.log('ok have a nice day');
        
break ;
case 'no':
        alert('you answered with no');
console.log('i hope it gets better soon');


}

 let age=prompt('are you over 18?');
   console.log(age.toUpperCase());

switch (age.toLowerCase()) {
    case 'yes':
        alert('you have answered with yes');
        console.log('ok you can check any infromation you like');
        
break ;
case 'no':
        alert('you answered with no');
        console.log('you cant access some information');
        
}


let live=prompt('do you live in jordan?');
console.log(live.toLowerCase);

switch (live.toLowerCase()) {
    case 'yes':
        alert('you have answered with yes');
        console.log('ok feel free');
       
break ;
case 'no' :
        alert('you answered with no');
        console.log('you need to register');
        

}


let work=prompt('do you work?');
console.log(work);

switch (work.toLowerCase()) {
    case 'yes':
        alert('you have answered with yes');
        console.log('ok feel free');
        
break ;
case 'no' :
        alert('you answered with no');
        console.log('good luck');
        

}

let hardworker=prompt('do you work hard?');
console.log(hardworker);

switch (hardworker.toLowerCase()) {
    case 'yes':
        alert('you have answered with yes');
        console.log('keep it up!');
        
break ;
case 'no' :
        alert('you answered with no');
        console.log('you should do better');
        
}

alert('hello ' + yourname + ' i hope you found what you were looking for');
