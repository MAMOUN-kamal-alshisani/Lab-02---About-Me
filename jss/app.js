'use strict';
let score = 0 ;

function getusername  (){
let yourname=prompt('what is your name?');
alert('hello ' + yourname + ' and welcome');
}
getusername();

function getquestions1 () {
let my1name=prompt('is my name mamoun alshishani?');

switch (my1name.toLowerCase()) {
    case 'yes':
            case 'y':
                score++;
                  alert('your answer is correct');
    

break ;
case 'no':
        case 'n':
        alert('uncorrect');

        alert('my name is mamoun alshishani');
}

}
getquestions1()


function getquestions2 () {
 let age2=prompt('do you think i can drive a car');
  
switch (age2.toLocaleLowerCase()) {
    case 'yes':
        case 'y':
                ;
        alert('your answer is uncorrect');
        

break ;
case 'no':
        case 'n':
            score++
        alert('your answer is correct');
           
}
alert('no i cant, i can bairly even ride a bike');
}
getquestions2();


function getquestions3 () {
let li3ve=prompt('is this my email :mamoun.alshishani@yahoo.com ?');

switch (li3ve.toLocaleLowerCase()) {
    case 'yes':
        case 'y':
                score++;
                alert('your answer is correct');
alert()
       
break ;
case 'no' :
        case 'n':
                alert('your answer is uncorrect'); 

                alert('my email is : mamoun.alshishani@yahoo.com');
}
}
getquestions3();


function getquestions4 () {
let deve4lop=prompt('do you think im a programmer?');
console.log(deve4lop);

switch (deve4lop.toLowerCase()) {
    case 'no':
        case 'no':
                score++;
                alert('your answer is correct');
       
        
break ;
case 'yes' :
        case 'yes':
                alert('your answer is uncorrect');
        
        

}
alert('not a programmer yet just a student for now');
}
getquestions4 ();

function getquestions5 () {
let hard5worker=prompt('do i have a bachelor\'s degree?');

switch (hard5worker.toLocaleUpperCase()) {
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
getquestions5()

function getquestions6 () {
                        alert('For this question you only have 4 attempts only');




                        let my6age ;
                        for(let i = 1; i <= 4; i++){
                           my6age= Number(prompt('how old am i?'));
                           
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
let movies = ['castaway', 'monster hunter ','resident evil','saw','lucy'];
let my7movie;

for(let i = 1 ; i <=6 ;i++){
    my7movie = prompt('Name one movie from my top 10');
    
alert('castaway , monster huneter , resident evil , saw , lucy');
    if(my7movie.toLowerCase() === movies [0] ||  my7movie === movies[1] || my7movie ===movies[2] || my7movie ===movies[3] || my7movie ===movies[4]){

    alert('you are correct');
    score++;
    break;
}else {
    alert('wrong answar please try again');

    alert('castaway', 'monster hunter ','resident evil','saw','lucy');
}
}
alert('you are good ' + 'your score is ' + score + ' out of 7');
}
getquestions7();

