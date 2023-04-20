//hiding the data purposfully by making variable as private acces specifier


class Employee {
    private emp_Name: string = "Codemind";

    public get name() {
        if (true) {
            return this.emp_Name;
        }
        
    }

}

let man = new Employee();

// 
man.name;