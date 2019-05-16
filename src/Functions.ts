// function
function sum(a:number, b:number): number {
	return a + b;
}
console.log(sum(1,1));


// function
let myAddFunction = function(x:number, y:number): number {
	return x + y;
}
console.log(myAddFunction(1,2));


// optional and default parameter function
let buildName = function(firstName:string, lastName:string): string {
	return `${firstName} ${lastName}`;
}
console.log(buildName("P", "K"));


// optional
let buildNameOptional = function(firstName:string, lastName?:string): string {
	if (lastName)
		return `${firstName} ${lastName}`;
	else
		return firstName
}
console.log(buildNameOptional("P"));


// default
let buildNameDefault = function(firstName:string, lastName = "Transerve"): string {
		return `${firstName} ${lastName}`;
}
console.log(buildNameDefault("P"));