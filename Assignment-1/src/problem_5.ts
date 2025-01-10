{
//You are given an object called “student” representing a student's information with the following properties: name (string), age (number), and grades (array of numbers). Make an interface using given properties. Write a TypeScript function called calculateAverageGrade that takes this student object as input and calculates the average grade.

interface IStudent {
    name:string;
    age:number;
    grades:number[]
}

const calculateAverageGrade = (student:IStudent):number =>{
    let grades = student.grades
    let sum = grades.reduce((acc,num)=> acc + num,0)
    return sum / grades.length
} 

const student1: IStudent = {     
    name: "Bob",     
    age: 17,     
    grades: [75, 80, 82, 88, 90,]
           };


const averageGradeForBob = calculateAverageGrade(student1);
console.log(averageGradeForBob);

//
}