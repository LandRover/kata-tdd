import PrimeFactors from '../../../src/functions/prime_factors/prime_factors.js';

describe('Prime Factors', () => {

    it('should calculate prime factor of an int', () => {
        expect(PrimeFactors.of(1)).to.deep.equal([]);
    });

});