function nestedEvenSum (obj) {
  let sum = 0;
  const helperFn = (hlpObj) => {
    Object.values(hlpObj).forEach((val) => {
      if (!isNaN(val) && val % 2 === 0) {
        sum += val;
      }
      if (typeof val === 'object' && val !== null) {
        helperFn(val);
      }
    });
  };

  helperFn(obj);
  return sum;
}


let obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

let obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
