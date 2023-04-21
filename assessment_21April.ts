//create a class with different properties and make a TransportAvil property as optional.


class EmployeeOptional {
    

    constructor(name:string, city:string, age:number, company:string, transportAvail?:boolean){
        let eName = name;
        let eCity = city;
        let eAge = age;
        let eCompany = company;
        let eTransportAvail = transportAvail;



        console.log(eName);
        console.log(eCity);
        console.log(eAge);
        console.log(eCompany);
        
        // console.log(eTransportAvail);
        if (transportAvail != undefined) {
            console.log("is transport avilable: "+ eTransportAvail);
            
        }     
    }

    



}

var e = new EmployeeOptional("abc","Pune", 21, "TCS");