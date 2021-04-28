'use strict';
let score = 0 ;
function getusername  (){
let yourname=prompt('what is your name?');
console.log(yourname);
alert('hello ' + yourname + ' and welcome');
}
getusername();

function getquestions1 () {
let my1name=prompt('is my name mamoun?');
console.log(my1name.toUpperCase());
switch (my1name.toLowerCase()) {
    case 'yes':
            case 'y':
                score++;
                  alert('your answer is correct');
      
        console.log(my1name);

break ;
case 'no':
        case 'n':
        alert('uncorrect');
console.log('my name is mamoun');

}
}
getquestions1()


function getquestions2 () {
 let age2=prompt('am i 30 years old?');
   console.log(age2.toLocaleLowerCase());

switch (age2.toLocaleLowerCase()) {
    case 'yes':
        case 'y':
                score++;
        alert('your answer is uncorrect');
        console.log(age2);
        
break ;
case 'no':
        case 'n':
        alert('your answer is correct');
        console.log('24 years old');
        
}
}
getquestions2();


function getquestions3 () {
let li3ve=prompt('is this my email :mamoun.alshishani@yahoo.com ?');
console.log(li3ve);

switch (li3ve.toLowerCase()) {
    case 'yes':
        case 'y':
                score++;
                alert('your answer is correct');
        console.log(li3ve);
       
break ;
case 'no' :
        case 'n':
                alert('your answer is uncorrect');
        console.log(li3ve);
        

}
}
getquestions3();


function getquestions4 () {
let deve4lop=prompt('do you think im a programmer?');
console.log(deve4lop);

switch (deve4lop.toLowerCase()) {
    case 'yes':
        case 'y':
                score++;
                alert('your answer is correct');
       
        
break ;
case 'no' :
        case 'n':
                alert('your answer is uncorrect');
        
        

}
}
getquestions4 ();

function getquestions5 () {
let hard5worker=prompt('do i have a bachelor\'s degree?');
console.log(hard5worker);

switch (hard5worker.toLowerCase()) {
    case 'yes':
        case 'y':
                score++;
                alert('your answer is correct');
        console.log('yes');
        
break ;
case 'no' :
        case 'n':
                alert('your answer is uncorrect');
        console.log('no');
        
}
}
getquestions5()

function getquestions6 () {
                        alert('For this question you only have 4 attempts only')




                        let my6age ;
                        for(let i = 1; i <= 4; i++){
                           my6age= Number(prompt('how old am i?'));
                            while(!my6age){
                                my6age = Number(prompt('Please Enter a Number Value'));
                            }
                            if(my6age == 24){
                                alert('Correct Answar good job');
                                score++;
                                break;
                            }else if(my6age<= 20){
                                alert('Your answar too low');
                            }else if(my6age >= 26){
                                alert('your answar too high');
                            }
                        }
                        alert('The Correct answar is 24');
                        
                        
                        alert('For this question you only have 6 attempts only');
                }
getquestions6()



function getquestions7 () {                       
let movies = ['castaway', 'monster huneter ','resident evil','saw'];
let my7movie;
for(let i = 1 ; i <=6 ;i++){
    my7movie = prompt('Name one strategy game from my top 10 Video games');


    if(my7movie.toLowerCase() === movies [0] ||  my7movie === movies[1] || my7movie ===movies[2] || my7movie ===movies[3]){
    alert('you are correct');
    score++;
    break;
}else {
    alert('wrong answar please try agian');
}
}
alert(movies[0]+'/ '+ movies[1] +'/ '+ movies [2] +'/ '+ movies[3]);


alert('you are good ' + 'your score is ' + score + ' out of 7');
}
getquestions7();
