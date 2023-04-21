//find duplicate elements from given array.
// Ex : var inputArr = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
var DuplicateArray = /** @class */ (function () {
    function DuplicateArray() {
    }
    DuplicateArray.prototype.arrayMethod = function () {
        var arr = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
        var duplicateNumber = [];
        for (var i = 0; i < arr.length; i++) {
            for (var j = i + 1; j < arr.length; j++) {
                if (arr[i] == arr[j]) {
                    duplicateNumber.push(arr[i]);
                    break;
                }
            }
        }
        console.log("Given Array is: " + arr);
        console.log("The dupicate elements in array is:" + duplicateNumber);
    };
    return DuplicateArray;
}());
var obj = new DuplicateArray();
obj.arrayMethod();
