//find duplicate elements from given array.
// Ex : var inputArr = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];



class DuplicateArray{



     arrayMethod() :void {
        var arr = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
        var duplicateNumber: number[] = [] ; 
        for (let i = 0; i < arr.length; i++) {
            
            for (let j =i+1; j < arr.length; j++) {
                if(arr[i]==arr[j] ){
                    duplicateNumber.push(arr[i]);
                    break;
                                        
                }
            }
        }
        console.log(duplicateNumber);
        
        
    }
}

var obj = new DuplicateArray();
obj.arrayMethod();

