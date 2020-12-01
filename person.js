class Person {

    constructor(name, age, gender) {

        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    hello() {

        let person = `${this.name} ${this.age} ${this.gender}  is a person that is willing to learn new things`;
        return person;
    }


}
const person = new Person('Linda', 23, 'male');
console.log(person.hello());