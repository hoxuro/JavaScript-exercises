'use strict';

const num= Number(prompt('Enter a number from 1 to 10'));

const calcTable= function(num){

    let finalString= '*** TABLE OF '+num+' ***\n';

    for(let i=0; i<=10; i++){

        if(i<10){
            finalString+= '    '+num+' x '+i+'  =  '+num*i+'\n';

        }else{
            finalString+= '    '+num+' x '+i+' =  '+num*i+'\n';
        }
    };

    return finalString;
};

console.log(calcTable(num));