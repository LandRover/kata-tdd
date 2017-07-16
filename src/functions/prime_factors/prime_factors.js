class PrimeFactors {
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