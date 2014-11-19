var inputString = "building";
var reverse = "";

for (var i = 0; i < inputString.length; i++) {
	reverse += inputString.charAt(inputString.length-(i+1));
}

console.log(reverse);