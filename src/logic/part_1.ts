type Propositional = true | false;

const A: boolean = true;

const B = (n: number): boolean => n % 2 == 0;

console.log('A', A);
console.log('B(3)', B(3));
console.log('B(4)', B(4));
