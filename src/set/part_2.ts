import { printSet } from './util';

// A ⊂ B (A является подмножеством множества B)
printSet(
    new Set(['a', 'b', 'c', 'd']),
    new Set(['b', 'd']),
)

const isSubset = (subset: Set<any>, set: Set<any>) => {
    return Array.from(subset).every(item => set.has(item));
}

console.log('{b, d} ⊂ {a, b, c, d}',
    isSubset(
        new Set(['b', 'd']),
        new Set(['a', 'b', 'c', 'd']),
    )
)

console.log('{b, d, w} ⊂ {a, b, c, d}',
    isSubset(
        new Set(['b', 'd', 'w']),
        new Set(['a', 'b', 'c', 'd']),
    )
)

console.log('∅ ⊂ {a, b, c, d}',
    isSubset(
        new Set(),
        new Set(['a', 'b', 'c', 'd']),
    )
)

console.log('{a, b, c, d} ⊂ {a, b, c, d}',
    isSubset(
        new Set(['a', 'b', 'c', 'd']),
        new Set(['a', 'b', 'c', 'd']),
    )
)
