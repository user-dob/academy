import { printBF } from './util';

const printBF2 = printBF(2);

// закон поглощения
// (p ∨ (p ∧ q)) ↔ p
printBF2(
    (p, q) => p || (p && q),
    (p, q) => p,
);

// закон поглощения
// (p ∧ (p ∨ q)) ↔ p
printBF2(
    (p, q) => p && (p || q),
    (p, q) => p,
);
