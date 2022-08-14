'use strict';

const side= Number(prompt('Enter the side length:'));

const calcTriangle= function(side){
    let count=0;
    let stringTriangle= '';

    for(let i=0; i<side; i++){
        for(let j=side-count; j>0; j--){
            stringTriangle+= '* ';

        };

        stringTriangle+= '\n';
        count++;
    };

    return stringTriangle;
};

console.log(calcTriangle(side));