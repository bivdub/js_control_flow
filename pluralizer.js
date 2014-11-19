var thing = "albatross";
var count = "5";

if (parseInt(count) > 1 && thing.charAt(thing.length-1).toLowerCase() !== 's') {
	thing += 's';
}  else if (parseInt(count) > 1 && thing.charAt(thing.length-1).toLowerCase() === 's') {
	thing += 'es';
}

console.log(count, thing);