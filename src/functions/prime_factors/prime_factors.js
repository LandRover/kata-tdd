/**
 * In number theory, the prime factors of a positive integer are the prime numbers that divide that integer exactly.[1] The prime factorization of a positive integer is a list of the integer's prime factors, together with their multiplicities; the process of determining these factors is called integer factorization. The fundamental theorem of arithmetic says that every positive integer has a single unique prime factorization.[2]
 * To shorten prime factorizations, factors are often expressed in powers (multiplicities).
 *
 * @see: https://en.wikipedia.org/wiki/Prime_factor
 *
 * Based on Uncle Bob's Kata
 * @see: http://butunclebob.com/ArticleS.UncleBob.ThePrimeFactorsKata
 * @see: http://butunclebob.com/files/downloads/Prime%20Factors%20Kata.ppt
 */
class PrimeFactors {


    /**
     * Determine the factors of a number (Factoring)
     *
     * @param {Number} n
     *
     * @returns {Array} of {Numbers}
     */
    of(n) {
        let result = [];

        for (let divisor = 2; n >= divisor; divisor++) {
            for (; 0 === n % divisor; n /= divisor) {
                result.push(divisor);
            }
        }

        return result;
    }


}

export default new PrimeFactors();