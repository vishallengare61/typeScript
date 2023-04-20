class EmployeeName{
    // public firstName:  string = "abc";
    
    public fName:string ="";   
    public lName:string ="";
    public age: number;


    constructor (fName: string, lName: string, age: number){
        this.fName = fName;
        this.lName = lName;
        this.age = age;
    }

    
}
// var e = new EmployeeName("Vishal","Lengare", 22);
// console.log(e);


class parentClass extends EmployeeName{

    constructor(){
     super("Vishal","Lengare", 22);
    }



}
var obj1 = new parentClass();
console.log(obj1);
 

var obj2 = new EmployeeName("Amol","Lengare", 20);
console.log(obj2);
