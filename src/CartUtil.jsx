export const total = (item) => {
  const newArr = item.map((x) => {
    return [x.price, x.quantity];
  });
  let arr1 = [];
  for (let i = 0; i < newArr.length; i++) {
    const arr2 = newArr[i].reduce((acc, x) => {
      return acc * x;
    }, 1);
    arr1.push(arr2);
  }
  const tot = arr1.reduce((acc, x) => {
    return acc + x;
  }, 0);
  return tot;
};
