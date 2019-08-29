export const printSet = (...items: Array<Set<any>>) => {
    const union = new Set(items.map(item => Array.from(item)).flat());
    const values = Array.from(union);
    const data = Array(items.length).fill(null).map(() => ({}));

    values.forEach(item => {
        items.forEach((set, index) => {
            if (set.has(item)) {
                data[index][item] = item;
            }
        })
    });

    console.table(data, values);
}

export const isSubset = (subset: Set<any>, set: Set<any>) => {
    return Array.from(subset).every(item => set.has(item));
}

export const isEqual = (A: Set<any>, B: Set<any>) => {
    return isSubset(A, B) && isSubset(B, A);
}

export const enumeration = (count: number): boolean[][] => {
    let n = 0;
    let max = 2 ** count;
    const data = [];

    while (n < max) {
        const value = n
            .toString(2)
            .padStart(count, '0')
            .split('')
            .map(item => Boolean(Number(item)));

        n++;

        data.push(value);
    }

    return data;
}

export const allSubset = (set: Set<any>): Array<Set<any>> => {
    const items = Array.from(set);
    const data = [];

    for (const combination of enumeration(items.length)) {
        const subsetItems = items.filter((item, index) => combination[index]);
        data.push(new Set(subsetItems));
    }

    return data;
}

export const union = (...items: Array<Set<any>>): Set<any> => {
    const unionSet = new Set();
    items.forEach(set => {
        set.forEach(item => unionSet.add(item));
    });
    return unionSet;
}

export const intersection = (...items: Array<Set<any>>): Set<any> => {
    const all = union(...items);
    const intersectionItems = Array.from(all).filter(item => items.every(set => set.has(item)));
    return new Set(intersectionItems);
}

export const difference = (A: Set<any>, B: Set<any>): Set<any> => {
    const differenceItems = Array.from(A).filter(item => !B.has(item));
    return new Set(differenceItems);
}

export const product = (...items: Array<Set<any>>): Set<Array<any>> => {
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

export const printMapping = (A: Set<any>, B: Set<any>, f: (n: any) => any) => {
    const set = new Set();

    A.forEach(item => {
        const value = f(item);
        if (value) {
            console.log(`${item} -> ${value}`);
            set.add(value);
        } else {
            console.log(item);
        }
    });

    difference(B, set).forEach(item => {
        console.log(`     ${item}`);
    })
}
