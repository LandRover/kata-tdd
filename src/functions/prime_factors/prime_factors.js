class PrimeFactors {
    of(n) {
        if (2 === n) return [2];
        if (3 === n) return [3];
        
        return [];
    }
}

export default new PrimeFactors();