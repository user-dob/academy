import { printBF } from './util';

const printBF2 = printBF(2);

// законы Де Моргана
// ¬(p ∧ q) ↔ (¬p ∨ ¬q)
printBF2(
    (p, q) => !(p && q),
    (p, q) => !(q || p),
);

// законы Де Моргана
// ¬(p ∨ q) ↔ (¬p ∧ ¬q)
printBF2(
    (p, q) => !(p || q),
    (p, q) => !q && !p,
);
