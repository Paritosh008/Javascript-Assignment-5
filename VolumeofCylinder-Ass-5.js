#1) Write a JavaScript program to get the volume of a Cylinder, Sphere anCone with four decimal places using objects and classes.

class cylinder{
    constructor(radius,height){
        this.radius = radius;
        this.height = height;
    }
    getVolume(){
        return (3.14*(this.radius*this.radius)*this.height).toFixed(4)
    }

}

class sphere{
    constructor(radius){
        this.radius = radius;
    }
    getVolume(){
        return(4/3*(3.14)*this.radius*this.radius*this.radius).toFixed(4)
    }
}

class cone{
    constructor(radius,height){
        this.radius = radius;
        this.height = height;
    }
    getVolume(){
        return(3.14*(this.radius*this.radius)*this.height/3).toFixed(4)
    }
}

let obj = new cylinder(2,3)
let obj1 = new sphere(2)
let obj2 = new cone(2,3)
console.log(obj.getVolume());
console.log(obj1.getVolume());
console.log(obj2.getVolume());
