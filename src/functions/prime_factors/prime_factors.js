class PrimeFactors {
    of(n) {
        if (1 < n) {
            if (0 === n % 2) {
                return [n];
            }
            
            return [n];
        }

        return [];
    }
}

export default new PrimeFactors();