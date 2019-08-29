import { printSet, isEqual } from './util';

// A ∪ B = {x | x ∈ A или x ∈ B}

const union = (...items: Array<Set<any>>): Set<any> => {
    const unionSet = new Set();
    items.forEach(set => {
        set.forEach(item => unionSet.add(item));
    });
    return unionSet;
}

const A = new Set(['a', 'b', 'c']);
const B = new Set(['b', 'c', 'd']);

console.log('A', A);
console.log('B', B);
console.log('A ∪ B', union(A, B));

printSet(
    A,
    B,
    union(A, B)
)

console.log('A ∪ ∅ = A',
    isEqual(
        union(A, new Set()),
        A
    )
)

console.log('A ∪ A = A',
    isEqual(
        union(A, A),
        A
    )
)

