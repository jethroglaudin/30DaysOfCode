'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
    _input = _input.split(new RegExp('[ \n]+'));
    main();    
});
function read() { return _input[_index++]; }

/**** Ignore above this line. ****/

class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName 
            + "\nID: " + this.idNumber
        )
    }
}

class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
    constructor(lastName, firstName, id, scores) {
        super(lastName, firstName, id, scores)
        this.scores = scores;
    }
    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
    calculate() {
        let average = 0
        let sum = 0
        let grade = ' ';
        for (let i = 0; i < this.scores.length; i++) {
            sum = sum + this.scores[i]
        }
        average = sum / this.scores.length
        for (let j = 0; j < this.scores.length; j++) {
            if (average >= 90 && average <= 100) {
                grade = 'O'
            } else if (average >= 80 && average < 90) {
                grade = 'E'
            } else if (average >= 70 && average < 80) {
                grade = 'A'
            } else if (average >= 55 && average < 70) {
                grade = 'P'
            } else if (average >= 40 && average < 55) {
                grade = 'D'
            } else if (average < 40) {
                grade = 'T'
            }
        }
        return grade
    }
}
function main() {
    let firstName = read()
    let lastName = read()
    let id = +read()
    let numScores = +read()
    let testScores = new Array(numScores)
    
    for (var i = 0; i < numScores; i++) {
        testScores[i] = +read()  
    }

    let s = new Student(firstName, lastName, id, testScores)
    s.printPerson()
    s.calculate()
    console.log('Grade: ' + s.calculate())
}