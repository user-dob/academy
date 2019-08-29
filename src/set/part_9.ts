import { isEqual, printSet, union, difference } from './util';

// A △ B = (A \ B) ∪ (B \ A) = (A ∪ B) \ (A ∩ B) (Симметрическая разность)

const symmetricDifference = (A: Set<any>, B: Set<any>): Set<any> => {
    return union(
        difference(A, B),
        difference(B, A)
    )
}


const A = new Set(['a', 'b', 'c']);
const B = new Set(['b', 'c', 'd']);

console.log('A', A);
console.log('B', B);
console.log('A △ B', symmetricDifference(A, B));

printSet(
    A,
    B,
    symmetricDifference(A, B)
)

console.log('A △ ∅ = ∅',
    isEqual(
        symmetricDifference(A, new Set()),
        A
    )
)

console.log('A △ A = ∅',
    isEqual(
        symmetricDifference(A, A),
        new Set()
    )
)










