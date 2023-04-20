var m = "maths";
var p = "physics";
var c = "chemistry";
var mathsMarks = parseInt(prompt("Enter the mathematics marks"));
var physicsMarks = parseInt(prompt("Enter the physics's marks"));
var chemistryMarks = parseInt(prompt("Enter the chemistry's marks"));
var result = (mathsMarks + physicsMarks + chemistryMarks) / 3;
console.log("The marks of  " + m + " " + "are" + mathsMarks);
console.log("The marks of " + p + "are" + physicsMarks);
console.log("The marks of " + c + "are" + chemistryMarks);
console.log(result);
if (result < 70) {
    console.log("the grade is C");
}
else if (result > 70 && result < 90) {
    console.log("grade is B");
}
else {
    console.log("grade is A");
}




//THIS CODE GIVEN BY DNYANESWAR SIR.
// Take input from user 


// function marks(a: number, b: number, c: number) {
//     var avg: number = (a+b+c) / 3;

//     if (avg <= 70) {
//         return `Grade C (${avg})`;        
//     } else if (avg > 70 && avg < 90) 
//     {
//         return `Grade B (${avg})`;   
//     } else {
//         return `Grade A (${avg})`;   
//     }
// }
// var math = Number(prompt(`Enter the math marks`)) ;
// var physics = Number(prompt(`Enter the physics marks`)) ;
// var chemistry = Number(prompt(`Enter the chemistry marks`)) ;

// console.log(marks(math, physics, chemistry))