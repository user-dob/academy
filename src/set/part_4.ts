import { printSet, isSubset } from './util';

// A = B (Множества A и B равны)
printSet(
    new Set(['a', 'b', 'c', 'd']),
    new Set(['c', 'd', 'a', 'b']),
)

// A ⊂ B и B ⊂ A
const isEqual = (A: Set<any>, B: Set<any>) => {
    return isSubset(A, B) && isSubset(B, A);
}

console.log('{a, b, c, d} = {c, d, a, b}',
    isEqual(
        new Set(['a', 'b', 'c', 'd']),
        new Set(['c', 'd', 'a', 'b']),
    )
)
