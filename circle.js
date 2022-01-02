// class defination for circle.
class Circle{

    // class constructor to initialize radius and color of a Circle instance
    constructor(radius=1.0, color="red"){
        this.radius = radius;
        this.color = color;
    }

    // to get and set the radius of a circle instance
    getRadius(){return this.radius}
    setRadius(value){this.radius = value}

    // to get and set the color of a circle instance
    getColor(){return this.color}
    setColor(value){this.color = value}

    // to get the area of a circle
    getArea(){
        const area = Math.PI * Math.pow(this.radius, 2)
        return area;
    }
    // to get the circumference of a circle
    getCircumference(){
        const circumference = 2*Math.PI*this.radius
    }
}

const circle1 = new Circle();
const circle2 = new Circle(2.0);
const circle3 = new Circle(3.0, "yellow")