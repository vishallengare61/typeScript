"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportClass = void 0;
var EmployeeInfo = /** @class */ (function () {
    function EmployeeInfo(name, city, age, company, transportAvail) {
        var eName = name;
        var eCity = city;
        var eAge = age;
        var eCompany = company;
        var eTransportAvail = transportAvail;
        console.log("==================task 1==========================");
        console.log("Employee Name is : " + eName);
        console.log("Employee city  : " + eCity);
        console.log("Employee age  : " + eAge);
        console.log("Employee company is  : " + eCompany);
        console.log("==================task 2(optional )==========================");
        console.log("transport avialable  : " + eTransportAvail + " <===  This is optional");
        // if (transportAvail != undefined) {
        //     console.log("is transport avilable: "+ eTransportAvail);
        // }     
    }
    return EmployeeInfo;
}());
var emp = new EmployeeInfo("Vishal", "Pune", 21, "TCS", true);
console.log("==================task 3==========================");
function exportClass(num1, num2) {
    return num1 + num2;
}
exports.exportClass = exportClass;
var e = exportClass(2, 2);
console.log("The addition of two numbers by using export and import : " + e);
console.log("==================task 4==========================");
function findEmployee(id, name) {
    if (typeof id === "number") {
        console.log("type of ID is ".concat(typeof id, " and the id is ").concat(id, " and the type of name is ").concat(typeof name, ", and name is ").concat(name));
    }
    if (typeof id === "string") {
        console.log("type of ID is ".concat(typeof id, " and the id is ").concat(id, "   and the type of name is ").concat(typeof name, ", and name is ").concat(name));
    }
    if (typeof id === "boolean") {
        console.log("type of ID is ".concat(typeof id, " and the id is ").concat(id, "  and the type of name is ").concat(typeof name, ", and name is ").concat(name));
    }
}
findEmployee(21, "vishal");
findEmployee("five", "Vishal");
