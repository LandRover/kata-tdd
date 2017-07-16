class PrimeFactors {
    of(n) {
        let result = [];
        
        while (1 < n) {
            let divisor = 2;
            while (n >= divisor) {
                while (0 === n % divisor) {
                    result.push(divisor);
                    n /= divisor;
                }
                ++divisor;
            }
        }

        return result;
    }
}

export default new PrimeFactors();