class EmployeeInfo{
    constructor(name:string, city:string, age:number, company:string, transportAvail?:boolean){
        let eName = name;
        let eCity = city;
        let eAge = age;
        let eCompany = company;
        let eTransportAvail = transportAvail;


        console.log("==================task 1==========================");
        
        console.log("Employee Name is : "+ eName);
        console.log("Employee city  : "+eCity);
        console.log("Employee age  : "+eAge);
        console.log("Employee company is  : "+eCompany);

        
        console.log("==================task 2(optional )==========================");
        console.log("transport avialable  : "+eTransportAvail + " <===  This is optional");
        // if (transportAvail != undefined) {
        //     console.log("is transport avilable: "+ eTransportAvail);
            
        // }     
    }
}

var emp = new EmployeeInfo("Vishal","Pune", 21, "TCS" , true);

console.log("==================task 3==========================");

export function exportClass(num1:number,  num2:number){
    return num1 + num2;
}

let e = exportClass(2,2);
console.log("The addition of two numbers by using export and import : "+   e);


console.log("==================task 4==========================");

function findEmployee(id: number, name:  string);
function findEmployee(id: string, name:  string);

function findEmployee(id: boolean, name:  string)


function findEmployee(id:any, name: any){
    
    if(typeof id === "number"){
        console.log(`type of ID is ${typeof id} and the id is ${id} and the type of name is ${typeof name}, and name is ${name}`);
        
    }
    if(typeof id === "string"){
        console.log(`type of ID is ${typeof id} and the id is ${id}   and the type of name is ${typeof name}, and name is ${name}`);
        
    }
    if(typeof id === "boolean"){
        console.log(`type of ID is ${typeof id} and the id is ${id}  and the type of name is ${typeof name}, and name is ${name}`);
        
    }
    
}

findEmployee(21, "vishal");

findEmployee("five","Vishal");
