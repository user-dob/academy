import { printMapping } from './util';

// f: A -> B (биекция)
// если оно инъекция и сюръекция

const A = new Set([1, 2, 3]);
const B = new Set(['a', 'b', 'c']);

const bijection = (n: number): string => {
    switch (n) {
        case 1:
            return 'a';
        case 2:
            return 'b';
        case 3:
            return 'c';
    }
}

console.log('bijection');
printMapping(A, B, bijection);
