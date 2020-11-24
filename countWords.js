//input: hola,hola, gente
//output: hola 2, gente 1

const array = ['yo','voz','tu','ya'];

const countWords = words => {
  let listWords = {};
  for (word of words) {
    if (word in listWords) {
      listWords[word]++;
    } else {
      listWords[word] = 1;
    }
  }
  return listWords;
}

const list = countWords(array);
console.log(list);

/*obj = {
  a:1,
  b:2,
  c:3,
  d:4
}
arr = ['a','b','c','d']
for(letter of arr){
  if (letter in obj) {
    console.log(letter)
  }
}*/

