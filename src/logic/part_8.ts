import { printBF } from './util';

const printBF2 = printBF(2);

// p ~ q (эквивале́нтность)
const eq = (p, q) => p === q;
printBF2(eq);
