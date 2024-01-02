    class Employee{
        constructor(eid,ename,esalary){
            this.eid=eid
            this.ename=ename
            this.esalary=esalary
        }
        display()
        {
            console.log("Employee id is : "+this.eid)
            console.log("Employee name is : "+this.ename)
            console.log("Employee sakary is : "+this.esalary)
        }   
    }
    emp=new Employee(1,'Rohan',36000)
    emp.display()