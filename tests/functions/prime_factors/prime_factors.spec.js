import PrimeFactors from '../../../src/functions/prime_factors/prime_factors.js';

describe('Prime Factors', () => {

    it('should calculate prime factor of an int', () => {
        expect(PrimeFactors.of(1)).to.be.equalTo([]);
        expect(PrimeFactors.of(2)).to.be.equalTo([2]);
        expect(PrimeFactors.of(3)).to.be.equalTo([3]);
        expect(PrimeFactors.of(4)).to.be.equalTo([2, 2]);
        expect(PrimeFactors.of(5)).to.be.equalTo([5]);
        expect(PrimeFactors.of(6)).to.be.equalTo([2, 3]);
        expect(PrimeFactors.of(7)).to.be.equalTo([7]);
        expect(PrimeFactors.of(8)).to.be.equalTo([2, 2, 2]);
        expect(PrimeFactors.of(9)).to.be.equalTo([3, 3, 3]);
    });

});