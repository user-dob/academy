import { printBF } from './util';

const printBF2 = printBF(2);

// p ∧ q (конъюнкция)
const and = (p, q) => p && q;
printBF2(and);
