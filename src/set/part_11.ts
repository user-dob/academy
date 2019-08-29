import { printSet, product, allSubset } from './util';

// |A| (мощность)

const power = (A: Set<any>): number => A.size;

const A = new Set(['a', 'b', 'c']);
const B = new Set(['c', 'd']);

console.log('|{a, b, c}|', power(A));
console.log('|{c, d}|', power(B));
console.log('|∅|', power(new Set()));
console.log('|{a, b, c} × {c, d}|', power(product(A, B)));
console.log('|все подмножества {a, b, c}|', power(new Set(allSubset(A))));
