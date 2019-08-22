import { printBF } from './util';

const printBF2 = printBF(2);

// p → q (импликация)
const impl = (p, q) => p ? q : true;
printBF2(impl);

// (n % 4 === 0) → (n % 2 === 0)

const print = n => console.log(`n = ${n}`, n % 4 === 0, n % 2 === 0);

print(5);
print(6);
print(8);
