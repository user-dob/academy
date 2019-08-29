import { printSet, union } from './util';

// A ∩ B = {x | x ∈ A и x ∈ B}

const intersection = (...items: Array<Set<any>>): Set<any> => {
    const all = union(...items);

}
