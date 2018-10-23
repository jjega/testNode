import path from "./path";
const obj = {
    a: {
        b: {
            c: 100,
            d: 200
        },
        e: {
            f: [100, 101, 102],
            g: 'G'
        },
        h: 'H'
    },
    i: 'I',
    j: ['J']
};

console.log(path(['a', 'b', 'c'], obj));