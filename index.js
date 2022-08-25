console.log("Hello Type script!");
//implicit types
var helloWorld = "Hello, World!";
// helloWorld = 5; // type script automatically etetcs error that sring cant be assigned number value
//explicit types
var firstName = "John";
var age = 30;
var x = ["hello", 10];
// let x:stringAndNumber = ["hello","number"]; // error as second ele has to be number not string
// Enums
var Continents;
(function (Continents) {
    Continents[Continents["North_America"] = 0] = "North_America";
    Continents[Continents["South_America"] = 1] = "South_America";
    Continents[Continents["Africa"] = 2] = "Africa";
    Continents[Continents["Asia"] = 3] = "Asia";
    Continents[Continents["Europe"] = 4] = "Europe";
    Continents[Continents["Australia"] = 5] = "Australia";
})(Continents || (Continents = {}));
//usage
var region = Continents.Africa; // value = 2
var user = {
    name: 'John',
    id: 0
    // age:25, // error as age not defined in User
};
// const odd : OddNumbersUnderTen = 4; // error because 4 is not the value defined in oddNumber
var odd = 5;
// function
var getLength = function (param) {
    return param.length;
};
getLength('test');
