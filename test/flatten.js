import { expect } from 'chai';
import flatten    from '../src/path';


describe('flatten', function() {
    it('turns a nested list into one flat list', function () {
        let nest = [1, [2], [3, [4, 5], 6, [[[7], 8]]], 9, 10];

        expect(flatten(nest)).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

        nest = [[[[3]], 2, 1], 0, [[-1, -2], -3]];

        expect(flatten(nest)).to.deep.equal([3, 2, 1, 0, -1, -2, -3]);
        expect(flatten([1, 2, 3, 4, 5])).to.deep.equal([1, 2, 3, 4, 5]);
    });

    it('is not destructive', function () {
        const nest = [1, [2], [3, [4, 5], 6, [[[7], 8]]], 9, 10];

        expect(flatten(nest)).to.not.deep.equal(nest);
    });

    it('handles array-like objects', function () {
        const o = {length: 3, 0: [1, 2, [3]], 1: [], 2: ['a', 'b', 'c', ['d', 'e']]};

        expect(flatten(o)).to.deep.equal([1, 2, 3, 'a', 'b', 'c', 'd', 'e']);
    });

    it('flattens an array of empty arrays', function () {
        expect(flatten([[], [], []])).to.deep.equal([]);
        expect(flatten([])).to.deep.equal([]);
    });

});
