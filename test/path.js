import { expect } from 'chai';
import path       from '../src/path';


describe('path', function() {
    const deepObject = { a : { b : { c : 'c' }}, falseVal : false, nullVal : null, undefinedVal : undefined, arrayVal : ['arr'] };

    it('takes a path and an object and returns the value at the path or undefined', function() {
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

        expect(path(['a', 'b', 'c'], obj)).to.equal(100);
        expect(path([], obj)).to.deep.equal(obj);
        expect(path(['a', 'e', 'f', 1], obj)).to.equal(101);
        expect(path(['j', 0], obj)).to.equal('J');
        expect(path(['j', 1], obj)).to.equal(undefined);
    });

    it("gets a deep property's value from objects", function() {
        expect(path(['a', 'b', 'c'], deepObject)).to.equal('c');
        expect(path(['a'], deepObject)).to.deep.equal(deepObject.a);
    });

    it('returns undefined for items not found', function() {
        expect(path(['a', 'b', 'foo'], deepObject)).to.equal(undefined);
        expect(path(['bar'], deepObject)).to.equal(undefined);
        expect(path(['a', 'b'], {a: null})).to.equal(undefined);
    });

    it('works with falsy items', function() {
        expect(path(['toString'], false)).to.equal(Boolean.prototype.toString);
    });

});
