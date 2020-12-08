class IsAnagram {
  constructor(s,t){
    this.s=s;
    this.t=t;
  }
  validateAnagram(){
    const s = this.sortedWord(this.s)
    const t = this.sortedWord(this.t);
    return s===t?true:false;
  }
  sortedWord(word){
    return word.split('').sort().join('');
  }
}
const solution = new IsAnagram('bryan','barny');
console.log(solution.validateAnagram());
