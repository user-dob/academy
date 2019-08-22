import { eq, printBF } from './util';

const eq2 = eq(2);

console.log(eq2(
    (p, q) => p && q,
    (p, q) => q && p,
));

console.log(eq2(
    (p, q) => !(p && q),
    (p, q) => !p || !q
));

const printBF2 = printBF(2);

printBF2(
    (p, q) => !(p && q),
    (p, q) => !p || !q
);
