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
