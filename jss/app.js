'use strict';

let yourname=prompt('what is your name?');
console.log(yourname);
alert('hello ' +yourname + ' and welcome');

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


let deve4lop=prompt('are you a programmer?');
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

                        alert('For this question you only have 4 attempts only')


                        let ;
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


alert('your score is ' + score + ' out of 7');


alert(' you are good' + yourName);

                        
                        
                        