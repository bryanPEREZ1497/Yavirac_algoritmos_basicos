const lengthOfLastWord = s => {
  let lengthS = s.length;
  let counter = 0;
  while (lengthS>0) {
     lenghS--;
     if (s[lengthS]!=' ') {
       counter++;
      
    } else if (counter>0) {
      return counter;
    }
  }
  return counter;
}
console.log(lengthOfLastWord('          '));
