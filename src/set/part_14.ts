import { printMapping } from './util';

// f: A -> B (инъекция)
// a ≠ b -> f(a) ≠ f(b)

const A = new Set([1, 2, 3]);
const B = new Set(['a', 'b', 'c', 'd', 'e']);

const injection = (n: number): string => {
    switch (n) {
        case 1:
            return 'a';
        case 2:
            return 'b';
        case 3:
            return 'c';
    }
}

console.log('injection');
printMapping(A, B, injection);

const notInjection = (n: number): string => {
    switch (n) {
        case 1:
            return 'a';
        case 2:
            return 'a';
        case 3:
            return 'c';
    }
}

console.log('not injection');
printMapping(A, B, notInjection);
