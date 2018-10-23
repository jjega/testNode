import { expect } from 'chai';
import update     from '../src/update';


describe('update', function() {
    it('makes a shallow clone of an object, overriding only what is necessary for the path', function() {
        const obj1 = {a: {b: 1, c: 2, d: {e: 3}}, f: {g: {h: 4, i: [5, 6, 7], j: {k: 6, l: 7}}}, m: 8};

        const obj2 = update(['f', 'g', 'i', 1], 42, obj1);

        expect(obj2.f.g.i).to.deep.equal([5, 42, 7]);

        expect(obj2.a).to.deep.equal(obj1.a);
        expect(obj2.m).to.deep.equal(obj1.m);
        expect(obj2.f.g.h).to.deep.equal(obj1.f.g.h);
        expect(obj2.f.g.j).to.deep.equal(obj1.f.g.j);
    });

    it('is the equivalent of clone and setPath if the property is not on the original', function() {
        const obj1 = {a: 1, b: {c: 2, d: 3}, e: 4, f: 5};
        const obj2 = update(['x', 0, 'y'], 42, obj1);

        expect(obj2).to.deep.equal({a: 1, b: {c: 2, d: 3}, e: 4, f: 5, x: [{y: 42}]});
        expect(obj2.a).to.deep.equal(obj1.a);
        expect(obj2.b).to.deep.equal(obj1.b);
        expect(obj2.e).to.deep.equal(obj1.e);
        expect(obj2.f).to.deep.equal(obj1.f);
    });

    it('empty path replaces the the whole object', function() {
        expect(update([], 3, {a: 1, b: 2})).to.equal(3);
    });

    it('replaces `undefined` with a new object', function() {
        expect(update(['foo', 'bar', 'baz'], 42, {foo: undefined})).to.deep.equal({foo: {bar: {baz: 42}}});
    });

    it('replaces `null` with a new object', function() {
        expect(update(['foo', 'bar', 'baz'], 42, {foo: null})).to.deep.equal({foo: {bar: {baz: 42}}});
    });

});
