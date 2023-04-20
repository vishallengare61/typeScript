var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    // parameterized constructor
    function Student(firstName, lastname) {
        this.firstName = firstName;
        this.lastName = lastname;
    }
    return Student;
}());
var Test = /** @class */ (function (_super) {
    __extends(Test, _super);
    function Test() {
        return _super.call(this, "test", "test 2") || this;
    }
    return Test;
}(Student));
// creating object of student class 
var objStudent = new Student('Codemind', 'technology');
console.log(objStudent);
// creating object of Test class 
var objTest = new Test();
console.log(objTest);
