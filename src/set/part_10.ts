import { printSet } from './util';

// A × B (декартово произведение)
// A × B = {(a, b) | a ∈ A ∧ b ∈ B}
// A × B × C = {(a, b, c) | a ∈ A ∧ b ∈ B ∧ c ∈ C}

const product = (...items: Array<Set<any>>): Set<Array<any>> => {
    const productItems = [];
    const [head, ...tail] = items;
    const productTail = tail.length === 1
        ? Array.from(tail[0]).map(item => [item])
        : Array.from(product(...tail));

    head.forEach(item => {
        productTail.forEach(productTailItem => {
            productItems.push([
                item,
                ...productTailItem
            ]);
        })
    });

    return new Set(productItems);
}

console.log(
    product(
        new Set(['a', 'b', 'c']),
        new Set([1, 2])
    )
)

printSet(
    product(
        new Set(['a', 'b', 'c']),
        new Set([1, 2])
    )
)







