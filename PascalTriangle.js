class PascalTriangle {
  constructor(numRows) {
    this.numRows = numRows;
  }
  triangle = [];
  getTriangle() {
    if (this.numRows === 0) {
      return this.triangle;
    }
    this.triangle.push([1]);
    for (let i = 1; i < this.numRows; i++) {
      const prevRow = this.triangle[i - 1];
      const newRow = [];
      newRow.push(1);
      for (let j = 1; j < prevRow.length; j++) {
        newRow.push(prevRow[j - 1] + prevRow[j]);
      }
      newRow.push(1);
      this.triangle.push(newRow);
    }
    return this.triangle;
  }
}
const solution = new PascalTriangle(20);
console.log(solution.getTriangle());
