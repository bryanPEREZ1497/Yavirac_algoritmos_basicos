//input: hola,hola, gente
//output: hola 2, gente 1

const array = ['yo','voz','tu','ya'];
const names = ['','bryan','bryan','andres','andres','enric','enric','pablo','pablo','bryan','bryan','andres','andres','enric','enric','pablo','pablo'];
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

const list = countWords(names);
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

