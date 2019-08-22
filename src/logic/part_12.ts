import { printBF } from './util';

const printBF3 = printBF(3);

// ассоциативность конъюнкции (and)
// ((p ∧ q) ∧ r) ↔ (p ∧ (q ∧ r))
printBF3(
    (p, q, r) => (p && q) && r,
    (p, q, r) => p && (q && r),
);

// ассоциативность дизъюнкции (or)
// ((p ∨ q) ∨ r) ↔ (p ∨ (q ∨ r))
printBF3(
    (p, q, r) => (p || q) || r,
    (p, q, r) => p || (q || r),
);
