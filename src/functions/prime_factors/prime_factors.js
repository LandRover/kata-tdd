class PrimeFactors {
    of(n) {
        let result = [];
        
        while (1 < n) {
            if (0 === n % 2) {
                result.push(2);
                n /= 2;
            } else
            if (0 === n % 3) {
                result.push(3);
                n /= 3;
            } else {
                result.push(n);
                break;
            }
        }

        return result;
    }
}

export default new PrimeFactors();