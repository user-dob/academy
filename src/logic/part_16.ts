import { printBF } from './util';

const printBF2 = printBF(2);

const impl = (p, q) => p ? q : true;

// контрапозиции
// (p → q) ↔ (¬q → ¬p)
printBF2(
    (p, q) => impl(p, q),
    (p, q) => impl(!q, !p),
);
