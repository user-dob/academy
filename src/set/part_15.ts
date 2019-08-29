import { printMapping } from './util';

// f: A -> B (сюръекция)
// для каждого b ∈ B найдется a: f(a) = b

const A = new Set([1, 2, 3, 4]);
const B = new Set(['a', 'b', 'c']);

const surjection = (n: number): string => {
    switch (n) {
        case 1:
            return 'a';
        case 2:
            return 'b';
        case 3:
            return 'c';
    }
}

console.log('surjection');
printMapping(A, B, surjection);

const notSurjection = (n: number): string => {
    switch (n) {
        case 1:
            return 'a';
        case 2:
            return 'a';
        case 3:
            return 'c';
    }
}

console.log('not surjection');
printMapping(A, B, notSurjection);
