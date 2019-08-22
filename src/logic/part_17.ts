import { printBF } from './util';

const printBF1 = printBF(1);

// снятием двойного отрицания
// p ↔ ¬¬p
printBF1(
    p => p,
    p => !!p
);
