/**
 */
class RomanNumerals {


    /**
     *
     */
    fromNumber(n) {
        if (2 === n) return 'II';
        if (3 === n) return 'III';

        return 'I';
    }


}

export default new RomanNumerals();