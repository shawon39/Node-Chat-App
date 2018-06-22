const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('Should reject non-string values', () => {
        var res = isRealString(345);
        expect(res).toBe(false);
    });

    it('Should reject string with only spaces', () => {
        var res = isRealString('     ');
        expect(res).toBe(false);
    });

    it('Should allow string with non-space characters', () => {
        var res = isRealString('   Shawon ');
        expect(res).toBe(true);
    });
});