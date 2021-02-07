class person {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new person('Hero', 'Balam', 30000);
console.log(heroPerson);
const friendlyPerson = new person('Hero', 'Kalam', 25000);
console.log(friendlyPerson);

function person1(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}

const oldPerson = new person1('Grand', 'Papa', 5000);
console.log(oldPerson);