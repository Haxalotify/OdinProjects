var text = "Hey my name is Yocelyn \ Yocelyn is really gorgoues";
var myName = "Yocelyn";
var hits = [];

for (var i = 0; i < text.length; i++) {
	if (text[i] === "Y") {
		for (var j = i; j < (myName.length + i); j++) {
			hits.push(text[j])
		}
	}
}
if (hits.length = 0) {
    console.log("Your name was not found!")
} else {
    console.log(hits);
}


// this iterates through the string, text, to find the letter Y
// then keeps iterating through, text, until all of the letters of
// myName are found then pushes it to the empty array, hits
// then checks to see if hits is empty and outputs results