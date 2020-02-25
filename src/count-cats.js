module.exports = function countCats(arr) {
  let counter = 0;
  for (let elem of arr)
  {
    for (let e of elem)
    {
      if (e === "^^")
    counter++;
    }
  }
  return counter;
};
