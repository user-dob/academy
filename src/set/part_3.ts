import { printSet, enumeration } from './util';

const allSubset = (set: Set<any>): Array<Set<any>> => {
    const items = Array.from(set);
    const data = [];

    for (const combination of enumeration(items.length)) {
        const subsetItems = items.filter((item, index) => combination[index]);
        data.push(new Set(subsetItems));
    }

    return data;
}

console.log(
    allSubset(new Set(['a', 'b', 'c', 'd']))
)

printSet(
    ...allSubset(new Set(['a', 'b', 'c', 'd']))
)
