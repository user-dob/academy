import { printBF } from './util';

const printBF2 = printBF(2);

// коммутативность конъюнкции (and)
// (p ∧ q) ↔ (q ∧ p)
printBF2(
    (p, q) => p && q,
    (p, q) => q && p,
);

// коммутативность дизъюнкции (or)
// p ∨ q) ↔ (q ∨ p)
printBF2(
    (p, q) => p || q,
    (p, q) => q || p,
);
