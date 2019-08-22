import { printBF } from './util';

const printBF2 = printBF(2);

// p ∨ q (дизъюнкция)
const or = (p, q) => p || q;
printBF2(or);
