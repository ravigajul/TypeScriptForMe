# TypeScriptForMe

    Type Script works on node environemnt
    Install node.js

    Installs TypeScript
    npm install -g typescript 

## Compile typescript file

```javascript
  tsc index.ts
  node index.js
 ```
## Compile files into a folder
Inclue this in tsconfig.json to compile all files in src folder.
```
{
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "src",
    "module": "commonjs",
    "target": "es6",
    "strict": true
  },
  "include": ["src/**/*"]
}
```
And 
```
npx  tsc  --outDir dist
```

## Rest Parameters
In TypeScript, **rest parameters** allow a function to accept an indefinite number of arguments as an array. Here's a simple example:

```typescript
function sumAll(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

// Usage
console.log(sumAll(1, 2, 3));        // Output: 6
console.log(sumAll(10, 20, 30, 40)); // Output: 100
```

### Explanation:
- `...numbers: number[]` is the rest parameter. It gathers all additional arguments passed to the function into an array called `numbers`.
- `reduce` is used to sum up all the values in the array.
## Combine compilation and execution

```javascript
  ts-node index.ts
```

## Back Ticks

In JavaScript, backticks (`) are primarily used for template literals, which are a way to concatenate strings while allowing embedded expressions. Template literals provide a more concise and readable syntax for creating strings with dynamic content compared to traditional methods like string concatenation with the plus operator (+).

```javascript
  const name = 'Alice';
  const greeting =`Hello, ${name}!`;
  console.log(greeting); // Output: Hello, Alice!
```

In this example, the ${name} part inside the backticks is an embedded expression that gets evaluated and interpolated into the string.
Additionally, backticks can also be used for creating multiline strings without the need for explicit line breaks or concatenation:

```javascript
const multilineString = `
  This is a multiline
  string created with backticks.
  No need for explicit line breaks.
`;
console.log(multilineString);
```

## Include java script in Html

    <Script src='test.js' defer></script> 

## Generate Package.json

    Npm init

## Download all the dependencies from package.json

    Npm install

## For Automatic HTML page serving/Auto Refresh

    Npm install --save-dev lite-server  //--save-dev implies development

## Core Date Types

 1. Number  //for all types of number be it integer or float etc
 2. String  // 'Hi' , "Hi", `Hi` back ticks is modern java script
 3. Boolean //true,false

    Type script only helps the developers find out the errors during development phase. Compilers ultimately run and understand java script only.

    tsc test.ts -->test.js that will be run and understood by the compiler.

    The core primitive types in TypeScript are all lowercase! (string and not String, number and not Number)

## Types

```javascript
 Primitive Types  
  a. Number  
   i. Let n: number =5  
  b. Boolean  
   i. Let isTrue: boolean = true  
  c. Void  
  d. Undefined  
   i. Let nothing: undefine = undefined  
  e. String  
   i. Let strName: String = "Ravi"  
  f. Symbol
  g. Null
   i. Let nothing: null = null
```

## Object Types

```javascript
  a. Functions
const logNumber: (i:Number) => void = (i:number){console.log(i)}
 b. Arrays
  
 i. Let colors: String[] = ['red', 'Green', 'Yellow']
   ii. Let numbers: number[] = [1,2,3,4,5]
  c. Classes
  d. Objects
   i. Let now: Date = new Date();
   ii. Let point: {x: number; y:number} = {x: 10, y: 10}  //Object Literal
```

## Type Annotation

  Declaring the data type we are telling the typescript what data type a variable holds

  ```javascript
  Let color: string = "red" //explicitly declaring data type
  ```

## Type Inference

  Type script will automatically identify and determine the data type based on the value assigned to it. This works only when the declaration and assignment happens in the same line.

  ```javascript
  Let color ="red" //type script inferences String data type.
  ```

## Type annotations for functions

  Code we add to tell typescript what type of arguments a function will receive and what type of values it will return

## Type Inference for functions

  Type inference for functions will figure out what values a function will return and not what values a functions takes as inputs(parameters)
  The below code doesn't throw error even if return type number is not declared. It will inference the return type automatically. Refer function.ts for more
  
  ```javascript
  //we exclusively annotated return type. Mouse hover on add
  const add = (a: number, b: number): number => {
      console.log(a + b);
      return a + b;
  }
  //type script infers the return type as number based on the body.Mouse hover on add
  const addtion = (a: number, b: number) => {
      return a + b;
  }
  //type script inferences the return type as void based on the body.Mouse hover on sub
  const sub = (a: number, b: number) => {
      a - b;
  }
  //regular non anonymous function
  function divide(a: number, b: number): number {
      return a / b;
  }
  const multiply = function (a: number, b: number): number {
    return a * b;
  }
  ```

## When to Use Annotations

  1. When the functions return type is any
   i. Ex: let coordinates = JSON.Parse(jsonString) // JSON.Parse returns any
  2. When we declare a variable on one line and initialize it on other line.
  3. Variable whose type cannot be inferred correctly
   i. Ex: Let numberAboveZero : boolean | number  = false //this could take a number or boolean value

## Tuple

  In TypeScript, a tuple is a data structure that allows you to store a fixed number of elements of different types. Unlike arrays, where elements are typically of the same type, tuples enable you to specify a specific type for each element.

```javascript
  const pepsi =['brown',true,40]; // tuple
  const coke: [string,boolean,number]=['brown',true,40]; // tuple with type annotation
  type Drink = [string,boolean,number];
  const sprite: Drink = ['clear',true,40]; // tuple
```

## Interfaces

A TypeScript interface defines the contract of an object. It describes the shape of an object, specifying the properties and optional methods that the object must or can have

```javascript
  interface Person {
      name: string;   //required                      
      age: number;    //required                      
  }

  const person = {
    name: 'alex',
    age: 20
};

//here printPerson function is accepting person parameter of type Person and returning void.
const printPerson = (person: Person): void => {
    console.log(person.name);
    console.log(person.age);
};
```
