'use strict';

const height= Number(prompt('Enter a number between 0 and 10:'));

const calcTriangle= function(height){

    let stringTriangle= '';
    let count=9;

    for(let i= height; i>=0; i--){

        stringTriangle+= (' ').repeat(count);
        for(let j=9-count; j>=0; j--){
            stringTriangle+= j;

        };

        stringTriangle+= '\n';
        count--;

    };

    return stringTriangle;
};

console.log(calcTriangle(height));