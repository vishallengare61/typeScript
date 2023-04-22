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
var Car = /** @class */ (function () {
    function Car() {
    }
    // simple method 
    Car.prototype.Wheel = function () {
        return '4 wheeler';
    };
    Car.prototype.CheckAC = function () {
        return 'Ac is available';
    };
    // non abstract method 
    Car.prototype.CallFacility = function () {
        return 'Call facility supported';
    };
    return Car;
}());
var Hundyai = /** @class */ (function (_super) {
    __extends(Hundyai, _super);
    function Hundyai() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hundyai.prototype.Price = function () {
        return 9000000;
    };
    Hundyai.prototype.getTotalSeats = function () {
        return 5;
    };
    Hundyai.prototype.Color = function () {
        return 'Gray';
    };
    return Hundyai;
}(Car));
var hundyai = new Hundyai();
console.log(hundyai.CallFacility());
var Tata = /** @class */ (function (_super) {
    __extends(Tata, _super);
    function Tata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tata.prototype.Price = function () {
        return 400000;
    };
    Tata.prototype.getTotalSeats = function () {
        return 5;
    };
    Tata.prototype.Color = function () {
        return 'black';
    };
    return Tata;
}(Car));
var tata = new Tata();
console.log(tata.Price());
console.log(tata.getTotalSeats());
console.log(tata.Color());
