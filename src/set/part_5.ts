import { printSet } from './util';

// N (множество натуральных чисел)
function* N() {
    let n = 0;
    while (true) {
        yield n++;
    }
}

// Z (множество целых чисел)
function* Z() {
    let n = 0;
    yield 0;
    while (true) {
        n++
        yield n;
        yield -n;
    }
}

const subsetInfinitySet = (g: IterableIterator<any>, count: number): Set<any> => {
    const set = new Set();
    let n = 0

    for (const item of g) {
        set.add(item);
        n++;
        if (n >= count) {
            break
        }
    }

    return set;
}

printSet(
    subsetInfinitySet(N(), 10)
)

printSet(
    subsetInfinitySet(Z(), 10)
)
