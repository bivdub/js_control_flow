var thing = "octopus";
var count = parseInt("3.6");

//Checks to see if the animal name ends in 's' -- if so adds 'es' if there are multiples
//if not adds 's', there are 

if (count > 1 && thing.charAt(thing.length-1).toLowerCase() !== 's') {
	thing += 's';
}  else if (count > 1 && thing.charAt(thing.length-1).toLowerCase() === 's') {
	thing += 'es';
}

console.log(count + " " + thing);
