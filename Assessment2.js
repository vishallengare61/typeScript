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
var EmployeeName = /** @class */ (function () {
    function EmployeeName(fName, lName, age) {
        // public firstName:  string = "abc";
        this.fName = "";
        this.lName = "";
        this.fName = fName;
        this.lName = lName;
        this.age = age;
    }
    return EmployeeName;
}());
// var e = new EmployeeName("Vishal","Lengare", 22);
// console.log(e);
var parentClass = /** @class */ (function (_super) {
    __extends(parentClass, _super);
    function parentClass() {
        return _super.call(this, "Vishal", "Lengare", 22) || this;
    }
    return parentClass;
}(EmployeeName));
var obj1 = new parentClass();
console.log(obj1);
var obj2 = new EmployeeName("Amol", "Lengare", 20);
console.log(obj2);
