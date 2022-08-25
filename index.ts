//typescript:-
/*
variant of js
offers all features of js and adds additional layers to it
super-set of js
lower the no of bugs in code
extension - .ts
*/

console.log("Hello Type script!");

//compile cmd in terminal - npx tsc index.ts --> tyesript file will be compiled in js file format -- index.js

//implicit types
let helloWorld = "Hello, World!";

// helloWorld = 5; // type script automatically detects error that string cant be assigned number value


//explicit types
let firstName : string = "John";
let age: number = 30;

// firstName = 5; // error as explicitily defines as string
// age = "name"; // error defined as number

//Built in types
/*

-- Boolean
--Number
--String
--Array
--Tuple
--Enum
--Unknown
--Any
--Void
--Null 
--Undefined

*/


//Tuple
type stringAndNumber = [string,number]; // stringAndNumber -> name of the type and value is array we assigned of different data types

let x:stringAndNumber = ["hello",10];

// let x:stringAndNumber = ["hello","number"]; // error as second ele has to be number not string


// Enums => 
enum Continents {
    North_America, // 0 index and below values after it -- 0
    South_America,
    Africa,
    Asia,
    Europe,
    Australia
}

//usage
var region = Continents.Africa; // value = 2



//Interfaces
interface User {
    name:string;
    id:number;
}

const user: User = { // object created
    name:'John',
    id:0
    // age:25, // error as age not defined in User Interace
}


// Complex types- Composing Multiple Types => Union
type WindowStates = "open" | "closed" | "minimized";

// const windowState : WindowStates = "I dont know"; error ->Type '"I dont know"' is not assignable to type 'WindowStates'.ts(2322)

type LockStates = "locked" | "unlocked";
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

// const odd : OddNumbersUnderTen = 4; // error because 4 is not the value defined in oddNumber

const odd : OddNumbersUnderTen = 5;

// functions in ts
const getLength = (param:string | string[]) => {
    return param.length;
}

getLength('test'); //fucntion called with the value => ans = 4

// getLength(5);// defined as array of string -- 


// to create react app in typescript - command in terminal
// npx create-react-app ./ --template typescript
// ./ folder in which you want to create ts react app , we have to define that folder explicitily.

--Extra notes
// installing in node -
// check node and npm version = node -v and npm -v
// cmd to install -  npm install typescript -g   
// -g for global installation to every package
// version check = tsc -v --> Version 4.7.4
