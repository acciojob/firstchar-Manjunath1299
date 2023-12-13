function firstChar(text) {
  for (const char of text) {
    if (char !== ' ') {
      return char; 
    }
  }

  return ''; 
}

const text = prompt("Enter text:");
alert(firstChar(text));
