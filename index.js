function mergeSort(arr) {
  const len = arr.length;
  if (len < 2) {
    return arr;
  }
  const mIndex = Math.floor(arr.length / 2);
  const lArr = mergeSort(arr.slice(0, mIndex));
  const rArr = mergeSort(arr.slice(mIndex));
  let mArr = [];

  while (lArr.length > 0 && rArr.length > 0) {
    if (lArr[0] < rArr[0]) {
      mArr.push(lArr[0]);
      lArr.shift();
    } else {
      mArr.push(rArr[0]);
      rArr.shift();
    }
  }
  return lArr.length > 0 ? [...mArr, ...lArr] : [...mArr, ...rArr];

}

console.log(mergeSort([2, 1, 5, 3, 0]));
