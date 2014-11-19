var longWords = ['this', 'is', 'a', 'reaaaaaaaaaally', 'long', 'wooooooooooooord!!'];
var shorterWords = [];
var maxLength = 5;

for (var i = 0; i < longWords.length; i++) {
	if (longWords[i].length < maxLength) {
		shorterWords.push(longWords[i]);
	} 
}

console.log(shorterWords);