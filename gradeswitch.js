var grade = Math.random().toFixed(2) * 100;

console.log("The grade is " + grade + " which means: ");

switch (true) {
	case grade >= 90:
		console.log("A");
		break;
	case grade >= 80:
		console.log("B");
		break;
	case grade >= 70:
		console.log("C");
		break;
	case grade >= 60:
		console.log("D");
		break;
	default:
		console.log("F");	
}