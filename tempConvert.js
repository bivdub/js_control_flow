var tempFar = Math.random().toFixed(2) * 100;

var tempCel = (((tempFar - 32) * 5) / 9).toFixed(2);

console.log(tempCel + "\xB0C is equal to " + tempFar + "\xB0F");