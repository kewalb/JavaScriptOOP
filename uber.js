class Uber {
    constructor (city, fare, customerName, distance) {
        this.city = city;
        this.fare = fare;
        this.customerName  = customerName;
        this.distance = distance

    }
        getFareCity(){
            const fare = this.distance * this.fare;
            return fare; 
        }

}

let cityA = new Uber( "cityA", 60, "customer1", 12);
let cityB = new Uber( "cityB", 65, "customer2", 33);

console.log(cityA.getFareCity()); 
console.log(cityB.getFareCity()); 