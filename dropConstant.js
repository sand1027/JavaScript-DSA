function dropConstant(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  for (let j = 0; j < n; j++) {
    console.log(j);
  }
}
dropConstant(3);
// it is big O of 2n
// its n+n
