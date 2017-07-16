class PrimeFactors {
    of(n) {
        let result = [];
        
        while (1 < n) {
            for (let divisor = 2; n >= divisor; ++divisor) {
                while (0 === n % divisor) {
                    result.push(divisor);
                    n /= divisor;
                }
            }
        }

        return result;
    }
}

export default new PrimeFactors();