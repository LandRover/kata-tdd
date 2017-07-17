import RomanNumerals from '../../../src/functions/roman_numerals/roman_numerals.js';

describe('Roman Numerals', () => {

    it('convert numbers ro Roman Numerals', () => {
        expect(RomanNumerals.fromNumber(1)).to.equal('I');
        expect(RomanNumerals.fromNumber(2)).to.equal('II');
        expect(RomanNumerals.fromNumber(3)).to.equal('III');
        expect(RomanNumerals.fromNumber(4)).to.equal('IV');
        expect(RomanNumerals.fromNumber(2648)).to.equal('MMDCXLVIII');
    });

});