import { printSet, union, intersection, isEqual } from './util';

const A = new Set(['a', 'b', 'c']);
const B = new Set(['b', 'c', 'd']);
const C = new Set(['b', 'w']);

// A ∪ B = B ∪ A
console.log('A ∪ B = B ∪ A',
    isEqual(
        union(A, B),
        union(B, A)
    )
)

// A ∩ B = B ∩ A
console.log('A ∩ B = B ∩ A',
    isEqual(
        intersection(A, B),
        intersection(B, A)
    )
)

// (A ∪ B) ∪ C = A ∪ (B ∪ C)
console.log('(A ∪ B) ∪ C = A ∪ (B ∪ C)',
    isEqual(
        union(union(A, B), C),
        union(A, union(B, C))
    )
)

// (A ∩ B) ∩ C = A ∩ (B ∩ C)
console.log('(A ∩ B) ∩ C = A ∩ (B ∩ C)',
    isEqual(
        intersection(intersection(A, B), C),
        intersection(A, intersection(B, C))
    )
)

// (A ∪ B) ∩ C = (A ∩ C) ∪ (B ∩ C)
console.log('(A ∪ B) ∩ C = (A ∩ C) ∪ (B ∩ C)',
    isEqual(
        intersection(union(A, B), C),
        union(intersection(A, C), intersection(B, C))
    )
)

// (A ∩ B) ∪ C = (A ∪ C) ∩ (B ∪ C)
console.log('(A ∩ B) ∪ C = (A ∪ C) ∩ (B ∪ C)',
    isEqual(
        union(intersection(A, B), C),
        intersection(union(A, C), union(B, C))
    )
)

