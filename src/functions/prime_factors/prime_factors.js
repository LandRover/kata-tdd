class PrimeFactors {
    of(n) {
        let result = [];
        
        if (1 < n) {
            if (0 === n % 2) {
                result.push(2);
                n /= 2;
            }
            
            if (1 < n) {
                result.push(n);
            }
        }

        return result;
    }
}

export default new PrimeFactors();