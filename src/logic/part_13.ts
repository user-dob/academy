import { printBF } from './util';

const printBF3 = printBF(3);

// дистрибутивность
// (p ∧ (q ∨ r)) ↔ ((p ∧ q) ∨ (p ∧ r))
printBF3(
    (p, q, r) => p && (q || r),
    (p, q, r) => (p && q) || (p && r),
);

// дистрибутивность
// (p ∨ (q ∧ r)) ↔ ((p ∨ q) ∧ (p ∨ r))
printBF3(
    (p, q, r) => p || (q && r),
    (p, q, r) => (p || q) && (p || r),
);
