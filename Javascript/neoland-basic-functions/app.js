// Iteracion 1

function sum(numberOne, numberTwo) {
    if (numberOne>numberTwo)
        return numberOne
    else 
        return numberTwo
}

// Iteration 2

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(a) {

    let palabraMasLarga='';

    for (let i=0;i<a.length;i++)
        if (a[i].length > palabraMasLarga.length)
            palabraMasLarga = a[i];
        
    return palabraMasLarga


}

// Iteration 3

//const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(a) {

    let suma = 0;

    for (let i=0;i<a.length;i++)
        suma+=a[i];

    return suma;
}

// Iterar 4

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(a) {

    let suma = 0;

    for (let i=0; i<a.length; i++)
        suma+=a[i];
    
    return suma/a.length;
}

console.log(average(numbers));

// Iterar 5
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(a) {
    let suma = 0;

    for (let i=0;i<a.length;i++)
        if(typeof(a[i])==="number")
            suma+=a[i]
        else
            suma+=a[i].length
    
    return suma;

}

console.log(averageWord(mixedElements));