class Range {
  start: number;
  end: number;

  constructor(from: number, to: number) {
    this.start = from;
    this.end = to;
  }

  size(): number {
    return this.start - this.end;
  }

  all(): Array<number> {
    let rangeArray = [];
    for (let i = 0; i == this.size(); i++) {
      rangeArray.push(i + this.start);
    }
    return rangeArray;
  }
}
