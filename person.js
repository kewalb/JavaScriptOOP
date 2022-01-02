// class defination of a person
class person {
    constructor (firstName, lastName, age, gender, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.address = address;
        this.getFullName = function () {
            return this.firstName + " " + this.lastName;
        }
    }
}

let person1 = new person ("XYZ", "ABC", 43, "M", "India" );
console.log(person1.age);
console.log(person1.getFullName());
