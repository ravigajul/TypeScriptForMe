# TypeScriptForMe
    Type Script works on node environemnt
    Install node.js

    Installs TypeScript
    npm install -g typescript 

# Include java script in Html
    <Script src='test.js' defer></script> 

# Generate Package.json
    Npm init

# Download all the dependencies from package.json
    Npm install

# For Automatic HTML page serving/Auto Refresh

    Npm install --save-dev lite-server  //--save-dev implies development

# Core Date Types
	1. Number  //for all types of number be it integer or float etc
	2. String  // 'Hi' , "Hi", `Hi` back ticks is modern java script 
	3. Boolean //true,false

    Type script only helps the developers find out the errors during development phase. Compilers ultimately run and understand java script only.

    tsc test.ts -->test.js that will be run and understood by the compiler.

    The core primitive types in TypeScript are all lowercase! (string and not String, number and not Number)

# Types
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
		
# Object Types
		a. Functions
		b. Arrays
			i. Let colors: String[] = ['red', 'Green', 'Yellow']
			ii. Let numbers: number[] = [1,2,3,4,5]
		c. Classes
		d. Objects
			i. Let now: Date = new Date();
			ii. Let point: {x: number; y:number} = {x: 10, y: 10}  //Object Literal
# Type Annotation 
		Declaring the data type we are telling the typescript what data type a variable holds
		Let color: string = "red" //explicitly declaring data type
# Type Inference 
		Type script will automatically identify and determine the data type based on the value assigned to it. This works only when the declaration and assignment happens in the same line.
		Let color ="red" //type script inferences String data type. 

# When to Use Annotations
		1. When the functions return type is any
			i. Ex: let coordinates = JSON.Parse(jsonString) // JSON.Parse returns any
		2. When we declare a variable on one line and initialize it on other line.
		3. Variable whose type cannot be inferred correctly 
			i. Ex: Let numberAboveZero : boolean | number  = false //this could take a number or boolean value
