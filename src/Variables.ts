// String 
let myName:string = "Prajyot";


// Number
let myRollNumber:number = 101;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;


// Boolean
let isEmployee:boolean = true;


// Making a sentence  
let statement:string = `Hello my name is ${myName} and my roll number is ${myRollNumber}`
console.log(statement);

 
 // Array 
 let list1:number[] 		= [1,2,3,4]
 let list2:Array<number>	= [1,2,3,4]
 let list3:Array<string>	= ["a","b","c","d"]
 console.log(list1);
 console.log(list2);
 console.log(list3);


 // Tuple 
 let tuple:[number, string] = [1, "a"];
 console.log(tuple);


 // Enum
 enum UserType {Admin, GroupAdmin, User, Surveyor}
 let myUserType:UserType = UserType.Admin;
 console.log(myUserType);

 enum LocationValue {Panaji = 1, Ponda = 2, Madgoa = 3, Mapusa = 4}
 let myLocation:LocationValue = LocationValue.Panaji;
 console.log(myLocation);


// Any
let notSure:any = 4;
let notSureList:any[] = [1, "a", true];


// Void
function doNotReturn(): void {
	console.log("I do not return anything.. ");
}

// Null and Undefined
let n:null = null
let u:undefined = undefined

