class PrimeFactors {
    of(n) {
        let result = [];
        
        while (1 < n) {
            for (let divisor = 2; n >= divisor; divisor++) {
                for (; 0 === n % divisor; n /= divisor) {
                    result.push(divisor);
                }
            }
        }

        return result;
    }
}

export default new PrimeFactors();