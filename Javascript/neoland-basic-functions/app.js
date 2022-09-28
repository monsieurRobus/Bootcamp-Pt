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

console.log(findLongestWord(avengers))