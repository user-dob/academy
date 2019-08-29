import { isEqual, printSet, union } from './util';

// A ∩ B = {x | x ∈ A и x ∈ B}

const intersection = (...items: Array<Set<any>>): Set<any> => {
    const all = union(...items);
    const intersectionItems = Array.from(all).filter(item => items.every(set => set.has(item)));
    return new Set(intersectionItems);
}

const A = new Set(['a', 'b', 'c']);
const B = new Set(['b', 'c', 'd']);

console.log('A', A);
console.log('B', B);
console.log('A ∩ B', intersection(A, B));

printSet(
    A,
    B,
    intersection(A, B)
)

console.log('A ∩ ∅ = ∅',
    isEqual(
        intersection(A, new Set()),
        new Set()
    )
)

console.log('A ∩ A = A',
    isEqual(
        intersection(A, A),
        A
    )
)


