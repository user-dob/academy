import { isEqual, printSet } from './util';

// A \ B = {x | x ∈ A ∧ x /∈ B} (Разность)

const difference = (A: Set<any>, B: Set<any>): Set<any> => {
    const differenceItems = Array.from(A).filter(item => !B.has(item));
    return new Set(differenceItems);
}

const A = new Set(['a', 'b', 'c']);
const B = new Set(['b', 'c', 'd']);

console.log('A', A);
console.log('B', B);
console.log('A \\ B', difference(A, B));

printSet(
    A,
    B,
    difference(A, B)
)

console.log('A \\ ∅ = A',
    isEqual(
        difference(A, new Set()),
        A
    )
)

console.log('A \\ A = ∅',
    isEqual(
        difference(A, A),
        new Set()
    )
)



