class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public getName(): string {
        return this.name;
    }

    public getAge(): number {
        return this.age;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setAge(age: number): void {
        this.age = age;
    }
}

// Usage example
const person = new Person("John Doe", 25);
console.log(person.getName()); // Output: John Doe
console.log(person.getAge()); // Output: 25

person.setName("Jane Smith");
person.setAge(30);

console.log(person.getName()); // Output: Jane Smith
console.log(person.getAge()); // Output: 30