import PrimeFactors from '../../../src/functions/prime_factors/prime_factors.js';

describe('Prime Factors', () => {

    it('should calculate prime factor of an int', () => {
        expect(PrimeFactors.of(1)).to.deep.equal([]);
        expect(PrimeFactors.of(2)).to.deep.equal([2]);
        expect(PrimeFactors.of(3)).to.deep.equal([3]);
        expect(PrimeFactors.of(4)).to.deep.equal([2, 2]);
        expect(PrimeFactors.of(5)).to.deep.equal([5]);
        expect(PrimeFactors.of(6)).to.deep.equal([2, 3]);
        expect(PrimeFactors.of(7)).to.deep.equal([7]);
        expect(PrimeFactors.of(8)).to.deep.equal([2, 2, 2]);
    });

});