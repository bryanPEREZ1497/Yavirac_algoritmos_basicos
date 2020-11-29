const strs = ['eat','tea','ate','nat','tab','bat'];
const orderWord = word => {
  return word.split('').sort().join('');  
}
const groupAnagrams = words => {
  const anagrams = {};
  for(word of words){
    const sortedWord = orderWord(word);
    if (sortedWord in anagrams) {
      anagrams[sortedWord].push(word);
    } else {
      anagrams[sortedWord]=[word];
    }
  }
  return Object.values(anagrams);
}
console.log(groupAnagrams(strs));
