import { printMapping } from './util';

// f: A -> B (отображение)

type Mapping = (x: any) => any;

const A = new Set([1, 2, 3, 4]);
const B = new Set(['a', 'b', 'c', 'd', 'e']);

const f: Mapping = (n: number): string => {
    switch (n) {
        case 1:
            return 'a';
        case 2:
            return 'b';
        case 3:
            return 'c';
    }
}

printMapping(A, B, f);
