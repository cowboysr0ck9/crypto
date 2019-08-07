// Functional Programming: Accounting System Utilities

// Test Data
const fakeD = [-2, 4, 2, -4];
const fakeC = [-2, 4, 2, -4];

// Abs Reducer Function
const abs = (acc, val) => Math.abs(acc) + Math.abs(val);
const roll = arr => arr.reduce(abs);

// Debits & Credits
const deb = roll(fakeD);
const crd = roll(fakeC);

// TieOut Function
const isTied = (deb, crd) => (deb === crd ? true : false);

// Answers
console.log(deb, crd, isTied(deb, crd));
