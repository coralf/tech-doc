(() => {
  const test = (num) => {
    if (num === 0) {
      return;
    }
    console.log('=>', num);
    test(num - 1);
    console.log('x=>', num);
  }
  const num = 5;
  test(num);
})()