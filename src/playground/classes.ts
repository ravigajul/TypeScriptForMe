class Person {
    private fname: string;
    private iage: number;

    constructor(name: string, age: number) {
        this.fname = name;
        this.iage = age;
    }

    public getName(): string {
        return this.fname;
    }

    public getAge(): number {
        return this.iage;
    }

    public setName(name: string): void {
        this.fname = name;
    }

    public setAge(age: number): void {
        this.iage = age;
    }
}

// Usage example
const p = new Person("John Doe", 25);
console.log(p.getName()); // Output: John Doe
console.log(p.getAge()); // Output: 25

p.setName("Jane Smith");
p.setAge(30);

console.log(p.getName()); // Output: Jane Smith
console.log(p.getAge()); // Output: 30