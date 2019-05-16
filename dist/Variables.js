// String 
var myName = "Prajyot";
// Number
var myRollNumber = 101;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// Boolean
var isEmployee = true;
// Making a sentence  
var statement = "Hello my name is " + myName + " and my roll number is " + myRollNumber;
console.log(statement);
// Array 
var list1 = [1, 2, 3, 4];
var list2 = [1, 2, 3, 4];
var list3 = ["a", "b", "c", "d"];
console.log(list1);
console.log(list2);
console.log(list3);
// Tuple 
var tuple = [1, "a"];
console.log(tuple);
// Enum
var UserType;
(function (UserType) {
    UserType[UserType["Admin"] = 0] = "Admin";
    UserType[UserType["GroupAdmin"] = 1] = "GroupAdmin";
    UserType[UserType["User"] = 2] = "User";
    UserType[UserType["Surveyor"] = 3] = "Surveyor";
})(UserType || (UserType = {}));
var myUserType = UserType.Admin;
console.log(myUserType);
var LocationValue;
(function (LocationValue) {
    LocationValue[LocationValue["Panaji"] = 1] = "Panaji";
    LocationValue[LocationValue["Ponda"] = 2] = "Ponda";
    LocationValue[LocationValue["Madgoa"] = 3] = "Madgoa";
    LocationValue[LocationValue["Mapusa"] = 4] = "Mapusa";
})(LocationValue || (LocationValue = {}));
var myLocation = LocationValue.Panaji;
console.log(myLocation);
// Any
var notSure = 4;
var notSureList = [1, "a", true];
// Void
function doNotReturn() {
    console.log("I do not return anything.. ");
}
// Null and Undefined
var n = null;
var u = undefined;
