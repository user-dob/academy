import { printBF } from './util';

const printBF2 = printBF(2);

// p XOR q (исключа́ющее «или»)
const xor = (p, q) => (p && !q) || (!p && q)
printBF2(xor);
