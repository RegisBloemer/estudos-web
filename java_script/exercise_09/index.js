let wordPalin = prompt("Digit the word what you thinks is a palindrome");
reverseWordFinishid = "";

for (let length = wordPalin.length - 1; length >= 0; length--) {
  reverseWordFinishid += wordPalin[length];
}

if (wordPalin == reverseWordFinishid) {
  alert(`${wordPalin} its a palindrome, ${reverseWordFinishid}`);
} else {
  alert(`${wordPalin} its not a palindrome, ${reverseWordFinishid}`);
}
