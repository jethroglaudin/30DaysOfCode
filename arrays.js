'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let arr2 = arr.reverse().join(" ");
    

    // arr2 = arr2.join(" ");

    console.log(arr2);
     
}


// input (stdin)
// 4
// 1 4 3 2

//output (stdout)
// 2 3 4 1

//expected output

// 2 3 4 1