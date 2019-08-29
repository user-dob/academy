import { printSet } from './util';

// Множества состоят из элементов
// {a, b, c}
// {x | x ∈ N and x mod 2 = 0}
const S = new Set(['a', 'b', 'c']);

// a ∈ S (a является элементом множества S)
S.has('a');

// d ∉ S (d не является элементом множества S)
S.has('d');

// ∅ (Пустое множество)
new Set();

printSet(
    new Set(['a', 'b', 'c'])
)

printSet(
    new Set()
)
