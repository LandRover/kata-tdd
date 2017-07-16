/**
 *
 */
class RomanNumerals {

    numerals = [
        {value: 4, numeral: 'IV'},
        {value: 1, numeral: 'I'}
    ];


    /**
     *
     */
    fromNumber(n) {
        let result = '';

        this.numerals.forEach(item => {
            if (n >= item.value) {
                result += item.numeral;
                n -= item.value;
            }
        });

        return result;
    }


}

export default new RomanNumerals();