abstract class Car {
    // simple method 
    Wheel() : string {
        return '4 wheeler';
    }

    CheckAC() : string {
        return 'Ac is available'
    }
  // non abstract method 
    CallFacility() : string {
        return 'Call facility supported';
    }

    abstract Price() : number;
    abstract getTotalSeats(): number;
    abstract Color() : string ;
}

interface newFeature{
     GPS():boolean;
}

class Toyota extends Car {
    Price(): number {
       return 9000000;
    }
    getTotalSeats(): number {
    return 5;
    }
    Color(): string {
       return 'Gray';
    }

}


let hundyai = new Toyota();

console.log(hundyai.CallFacility())



class Hundyai extends Car implements newFeature{
    Price(): number {
       return 400000;
    }
    getTotalSeats(): number {
       return 5;
    }
    Color(): string {
       return 'black';
    }
    GPS(): boolean {
        return true;
    }


}

let hundai  = new Hundyai();
console.log(hundai.Price());
console.log(hundai.getTotalSeats());
console.log(hundai.Color());
console.log(hundai.GPS());

