var thing = "cat";
var count = "1";

if (parseInt(count) > 1 && thing.charAt(thing.length-1).toLowerCase() !== 's') {
	thing += 's';
}	

console.log(count, thing);