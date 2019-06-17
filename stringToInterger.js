// Objective 
// Today, we're getting started with Exceptions by learning how to parse an integer from a string and print a custom error message. 
// Task 

// Read a string, S, and print its integer value; if S cannot be converted to an integer, print Bad String.

// Note: You must use the String-to-Integer and exception handling constructs built into your submission language. If you attempt to use loops/conditional statements, you will get a 0 score.


// Print the parsed integer value of , or Bad String if  cannot be converted to an integer.

// Sample Input 0

// 3
// Sample Output 0

// 3
// Sample Input 1

// za
// Sample Output 1

// Bad String
// Explanation

// Sample Case 0 contains an integer, so it should not raise an exception when we attempt to convert it to an integer. Thus, we print the 3. 
// Sample Case 1 does not contain any integers, so an attempt to convert it to an integer will raise an exception. Thus, our exception handler prints Bad String.


process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

/*
 * You can use the following pseudocode:
 *
 * `S` = read string from stdin.
 * try {
 *     `N` = numeric value of `S`.
 *     
 *     If `N` is `NaN` or `undefined`, then some exception must be thrown,
 *     you can write the following withtout using conditional statement:
 *     <condition to return true when `N` is `NaN` or `undefined`> && an_undefined_function_call()
 *
 *     print `N`
 * } catch (err) {
 *     print `Bad String`.
 * }
 */

function main() {
    const S = readLine();
    try {
        const N = parseInt(S);
         (N == undefined || isNaN(N) && func()) 
            console.log(N);

    } catch (err) {
        console.log(`Bad String`);
    }
}