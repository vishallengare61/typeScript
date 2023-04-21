//create a class with different properties and make a TransportAvil property as optional.
//create findEmployee method and overload it.
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
var EmployeeOptional = /** @class */ (function () {
    function EmployeeOptional(name, city, age, company, transportAvail) {
        var eName = name;
        var eCity = city;
        var eAge = age;
        var eCompany = company;
        var eTransportAvail = transportAvail;
        console.log(eName);
        console.log(eCity);
        console.log(eAge);
        console.log(eCompany);
        // console.log(eTransportAvail);
        if (transportAvail != undefined) {
            console.log("is transport avilable: " + eTransportAvail);
        }
    }
    EmployeeOptional.prototype.findEmployee = function (name) {
        console.log(name);
    };
    return EmployeeOptional;
}());
var EmployeeOptional2 = /** @class */ (function (_super) {
    __extends(EmployeeOptional2, _super);
    function EmployeeOptional2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmployeeOptional2.prototype.findEmployee = function (name, age) {
        console.log("Employee name is : " + name + "Employee age is : " + age);
    };
    return EmployeeOptional2;
}(EmployeeOptional));
var firstCall = new EmployeeOptional;
firstCall.findEmployee("vishal");
var secondCall = new EmployeeOptional2;
secondCall.findEmployee("vishal", 22);
