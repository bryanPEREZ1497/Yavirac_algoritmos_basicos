class SingleNumber {
  constructor(numbers) {
    this.numbers = numbers;
  }
  list = {};
  singleNumber1() {
    for (const number of this.numbers) {
      if (number in this.list) {
        ++this.list[number];
      } else {
        this.list[number] = 1;
      }
    }
    for (const number in this.list) {
      if (this.list[number] === 1) {
        return number;
      }
    }

  }
  noDuplicateList = [];
  singleNumber2() {
    for (const number of this.numbers) {
      if (!this.noDuplicateList.includes(number)) {
        this.noDuplicateList.push(number);
      } else {
        let i = this.noDuplicateList.indexOf(number);
        this.noDuplicateList.splice(i, 1);
      }
    }
    return this.noDuplicateList.pop();
  }
}
const solution1 = new SingleNumber([2, 2, 1, 1, 4]);
const solution2 = new SingleNumber([2, 2, 1, 1, 4, 4, 5]);
console.log(solution1.singleNumber1());
console.log(solution2.singleNumber2());

