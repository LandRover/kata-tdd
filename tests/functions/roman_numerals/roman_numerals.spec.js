import RomanNumerals from '../../../src/functions/roman_numerals/roman_numerals.js';

describe('Roman Numerals', () => {

    it('convert numbers ro Roman Numerals', () => {
        expect(RomanNumerals.fromNumber(1)).to.equal('I');
        expect(RomanNumerals.fromNumber(2)).to.equal('II');
    });

});