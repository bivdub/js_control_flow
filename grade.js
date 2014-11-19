var grade = Math.random().toFixed(2) * 100;

console.log("The grade is " + grade + " which means: ");

if (grade >= 90) {
	console.log('your grade is A');
} else if (grade >= 80) {
	console.log('your grade is B');
} else if (grade >= 70) {
	console.log('your grade is C');
} else if (grade >= 60) {
	console.log('your grade is D');
} else {
	console.log('your grade is F');
}