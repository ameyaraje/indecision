class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getDesc() {
        return `${ this.name } is ${ this.age } years old.`;
    }
}

class Player extends Person {
    constructor(name, age, position, fromAcademy) {
        super(name, age);
        this.position = position;
        this.fromAcademy = fromAcademy;
    }

    isFromAcademy() {
        return !!this.fromAcademy;
    }

    getDesc() {
        let description = super.getDesc();
        description += ` Their position is ${ this.position }`;
        
        if (this.isFromAcademy()) {
            description += ` and is an academy produce.`;
        }
        return description;
    }
}

class Coach extends Person {
    constructor(name, age, role) {
        super(name, age);
        this.role = role;
    }

    hasRole() {
        return !!this.role;
    }

    getDesc() {
        let description = super.getDesc(); 
        if (this.hasRole()) {
            description += ` Their role is ${ this.role } coach`;
        }

        return description;
    }
}

const person1 = new Person();
console.log(person1.getDesc());

const kova = new Player('Mateo Kovacic', 25, 'midfielder');
console.log(kova.getDesc());

const tam = new Player('Tammy Abraham', 21, 'forward', true);
console.log(tam.getDesc());

const morr = new Coach('Eddie Newton', 45, 'defender');
console.log(morr.getDesc());