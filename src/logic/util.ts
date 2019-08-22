export type Propositional = true | false;

export type BF = (...params: boolean[]) => boolean;

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

export const printBF = (count: number) => (...bf: BF[]) => {
    const items = [];

    const columns = [];
    for (let i = 0; i < count; i++) {
        columns.push(getPrintValueNameByIndex(i));
    }

    bf.forEach(item => columns.push(item.toString()));

    enumeration(count)
        .forEach(value => {
            const item = {};
            columns.forEach((name, index) => {
                item[name] = index < count
                    ? value[index]
                    : bf[index - count](...value);

            });
            items.push(item);
        });

    console.table(items, columns);
}

const getPrintValueNameByIndex = n => ({0: 'p', 1: 'q', 2: 'r'}[n] || `p${n + 1}`)

export const eq = (count: number) => (bf1: BF, bf2: BF): boolean => {
    return enumeration(count).every(value => bf1(...value) === bf2(...value));
}
