// function
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 1));
// function
var myAddFunction = function (x, y) {
    return x + y;
};
console.log(myAddFunction(1, 2));
// optional and default parameter function
var buildName = function (firstName, lastName) {
    return firstName + " " + lastName;
};
console.log(buildName("P", "K"));
// optional
var buildNameOptional = function (firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
};
console.log(buildNameOptional("P"));
// default
var buildNameDefault = function (firstName, lastName) {
    if (lastName === void 0) { lastName = "Transerve"; }
    return firstName + " " + lastName;
};
console.log(buildNameDefault("P"));
