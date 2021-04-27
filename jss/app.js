'use strict';

let yourname=prompt('what is your name?');
console.log(yourname);
alert('hello ' +yourname + ' and welcome');

let myname=prompt('is my name mamoun?');
console.log(myname.toUpperCase());

switch (myname.toLowerCase()) {
    case 'yes':
            case 'y':
                  alert('your answer is correct');
      
        console.log(myname);

break ;
case 'no':
        case 'n':
        alert('uncorrect');
console.log('my name is mamoun');


}

 let age=prompt('am i 30 years old?');
   console.log(age.toLocaleLowerCase());

switch (age.toLocaleLowerCase()) {
    case 'yes':
        case 'y':
        alert('your answer is uncorrect');
        console.log(age);
        
break ;
case 'no':
        case 'n':
        alert('your answer is correct');
        console.log('24 years old');
        
}


let live=prompt('is this my email :mamoun.alshishani@yahoo.com ?');
console.log(live);

switch (live.toLowerCase()) {
    case 'yes':
        case 'y':
                alert('your answer is correct');
        console.log(live);
       
break ;
case 'no' :
        case 'n':
                alert('your answer is uncorrect');
        console.log(live);
        

}


let develop=prompt('are you a programmer?');
console.log(develop);

switch (develop.toLowerCase()) {
    case 'yes':
        case 'y':
                alert('your answer is correct');
       
        
break ;
case 'no' :
        case 'n':
                alert('your answer is uncorrect');
        
        

}

let hardworker=prompt('do i have a bachelor\'s degree?');
console.log(hardworker);

switch (hardworker.toLowerCase()) {
    case 'yes':
        case 'y':
                alert('your answer is correct');
        console.log('yes');
        
break ;
case 'no' :
        case 'n':
                alert('your answer is uncorrect');
        console.log('no');
        
}
alert('you have four opportunities to answer correctly');
let myage =prompt('hello can you guess my age?');
myage = parseInt(myage);
for(var i=0 ; i<=4 ; i++)
if(myage<=17)
{alert('too low');}
else if(myage =='24')
{alert(correct);}
else(myage>='30')
{alert('too high');}

console.log(myage[i]);
let info=['blue','red','black'];
let mycolor=prompt('can you guess how many colors do i like');
switch (mycolor.toLowerCase()) {
        case 'red':
                case 'r':
                      alert('your answer is correct');
          
            console.log(mycolor);
    
    break ;
    case 'blue':
            case 'b':
            alert('your answer is correct');
            console.log(mycolor);
            break ;
            case 'black':
            case 'bk':
                alert('your answer is correct');
                console.log(mycolor);
                default:
                        alert('your answer is not correct');}