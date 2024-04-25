//interfaces are used to define the structure of an object
interface Person {
    name: string;   //required                      
    age: number;    //required   
    summary(): string; //required                   
}

const person = {
    name: 'alex',
    age: 20,
    summary(): string {
        return `Name is ${this.name} and age is ${this.age}`;
    }
};

//here printPerson function is accepting person parameter of type Person and returning void.
const person: Person = {
    name: 'alex',
    age: 20,
    summary(): string {
        return `Name is ${this.name} and age is ${this.age}`;
    },
    getName(): string {
        return this.name;
    },
    getAge(): number {
        return this.age;
    },
    setName(name: string): void {
        this.name = name;
    },
    setAge(age: number): void {
        this.age = age;
    }
};

const printPerson = (person: Person): void => {
    console.log(person.name);
    console.log(person.age);
    console.log(person.summary());
};

printPerson(p);              