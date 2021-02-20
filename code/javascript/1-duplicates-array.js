(function () {
  const arr = [1, 2, 3, 3, 4, 5, 6, 6];
  const duped = arr.filter((el, idx, self) => {
    return idx === self.indexOf(el);
  });
  console.log(duped);
})();