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
            for (; n >= item.value; n -= item.value) {
                result += item.numeral;
            }
        });

        return result;
    }


}

export default new RomanNumerals();