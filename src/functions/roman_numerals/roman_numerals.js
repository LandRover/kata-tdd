/**
 *
 */
class RomanNumerals {


    /**
     *
     */
    fromNumber(n) {
        let result = '';

        while(0 < n) {
            result += 'I';
            --n;
        }

        return result;
    }


}

export default new RomanNumerals();