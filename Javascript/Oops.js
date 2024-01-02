class Car{
    setValues(brand,price,color){
        this.brand=brand;
        this.price=price;
        this.color=color;
    }
    move(){
        console.log("Car is moving");
    }
    getValues(){
        console.log("Brand : "+this.brand);
        console.log("Price : "+this.price);
        console.log("Color : "+this.color);
    }
}
cr=new Car();
cr.setValues("Tata",150000,"Red");
cr.move();
cr.getValues();