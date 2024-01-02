class Vechicle{
    usage="Transportation"
    start(){
        console.log("Vechicle is started")
    }
    stop(){
        console.log("Vechicle is stopped")
    }
}
class Car extends Vechicle{
    noOfWheels=4
    drive(){
        console.log("Drive a car")
    }
    display(){
        console.log("Number of Wheels in a car is : "+this.noOfWheels)
        console.log("Use of a car is : "+this.usage)
    }
}
class Bike extends Vechicle{
    noOfWheels=2
    ride(){
        console.log("Ride a Bike")
    }
    display(){
        console.log("Number of Wheels in a bike is : "+this.noOfWheels)
        console.log("Use of a bike is : "+this.usage)
    } 
}
cr=new Car()
bk=new Bike()
cr.start()
cr.drive()
cr.stop()
cr.display()
console.log("Number of Wheels in a car is : "+cr.noOfWheels)
console.log("Use of a car is : "+cr.usage)
bk.start()
bk.ride()
bk.stop()
bk.display()
console.log("Number of Wheels in a bike is : "+bk.noOfWheels)
console.log("Use of a bike is : "+bk.usage)
