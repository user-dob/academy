const A: boolean = true;

const B = (n: number): boolean => n % 2 == 0;

// console.log(A)
// console.log(B(3))
// console.log(B(4))

const enumeration = (count: number): boolean[][] => {
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

console.table(enumeration(3));
// ┌─────────┬───────┬───────┬───────┐
// │ (index) │   0   │   1   │   2   │
// ├─────────┼───────┼───────┼───────┤
// │    0    │ false │ false │ false │
// │    1    │ false │ false │ true  │
// │    2    │ false │ true  │ false │
// │    3    │ false │ true  │ true  │
// │    4    │ true  │ false │ false │
// │    5    │ true  │ false │ true  │
// │    6    │ true  │ true  │ false │
// │    7    │ true  │ true  │ true  │
// └─────────┴───────┴───────┴───────┘

// Boolean Function
type BF = (...params: boolean[]) => boolean;

const printBF = (count: number) => (bf: BF) => {
    const data: boolean[][] = enumeration(count)
        .map(value => [...value, bf(...value)]);

    console.table(data);
}

const printBF1 = printBF(1);
const printBF2 = printBF(2);

// A ∧ B (конъюнкция)
const and = (a: boolean, b: boolean): boolean => a && b;
printBF2(and);
// ┌─────────┬───────┬───────┬───────┐
// │ (index) │   0   │   1   │   2   │
// ├─────────┼───────┼───────┼───────┤
// │    0    │ false │ false │ false │
// │    1    │ false │ true  │ false │
// │    2    │ true  │ false │ false │
// │    3    │ true  │ true  │ true  │
// └─────────┴───────┴───────┴───────┘

// A ∨ B (дизъюнкция)
const or = (a: boolean, b: boolean): boolean => a || b;
printBF2(or);
// ┌─────────┬───────┬───────┬───────┐
// │ (index) │   0   │   1   │   2   │
// ├─────────┼───────┼───────┼───────┤
// │    0    │ false │ false │ false │
// │    1    │ false │ true  │ true  │
// │    2    │ true  │ false │ true  │
// │    3    │ true  │ true  │ true  │
// └─────────┴───────┴───────┴───────┘

// A → B (импликация)
const implication = (a: boolean, b: boolean): boolean => a ? b : true;
printBF2(implication);
// ┌─────────┬───────┬───────┬───────┐
// │ (index) │   0   │   1   │   2   │
// ├─────────┼───────┼───────┼───────┤
// │    0    │ false │ false │ true  │
// │    1    │ false │ true  │ true  │
// │    2    │ true  │ false │ false │
// │    3    │ true  │ true  │ true  │
// └─────────┴───────┴───────┴───────┘

// ¬A (отрицание)
const not = (a: boolean): boolean => !a;
printBF1(not);
// ┌─────────┬───────┬───────┐
// │ (index) │   0   │   1   │
// ├─────────┼───────┼───────┤
// │    0    │ false │ true  │
// │    1    │ true  │ false │
// └─────────┴───────┴───────┘


const equal = (count: number) => (bf1: BF, bf2: BF): boolean => {
    return enumeration(count).every(value => bf1(...value) === bf2(...value));
}

const equal2 = equal(2);

// (p ∧ q) ↔ (q ∧ p)
console.log(equal2((a, b) => a && b, (a, b) => b && a))
