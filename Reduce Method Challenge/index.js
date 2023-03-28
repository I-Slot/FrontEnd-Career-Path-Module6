const grades = [75, 83, 66, 43, 55, 99, 87, 16, 89, 64, 70, 80, 94, 77, 66, 73]

/*
Challenge
1. Use the .reduce() method to find the total of all of the students grades.
2. Do some simple maths to log out the class average. 
*/

const studentsGradeTotal = grades.reduce(function (initial, newGrade) {
    // console.log(`Initial  is ${initial} and newGrade is ${newGrade}`);
    return initial + newGrade;
    // return (initial + newGrade) / 2;
})


const studentsGradeAverage = studentsGradeTotal / grades.length




console.log(`The class average is ${studentsGradeAverage}`)
console.log(`The class total is ${studentsGradeTotal}`)