'use strict';

const side= Number(prompt('Enter the length of the square side:'));

const calcSquare= function(side){

    let stringSquare='';                                //function that place the square rigth
    for(let i=0; i<side; i++){
        stringSquare+= ('* ').repeat(side)+'\n';

    };

    return stringSquare;
};

console.log(calcSquare(side));