/**
 * Basic logic kata for Bowling game
 *
 * @see: http://butunclebob.com/files/downloads/Bowling%20Game%20Kata.ppt
 */
class Bowling {

    /** Throws array, collects all throws history **/
    throws = [];


    /**
     * Adds the round result to throws.
     *
     * @param {Number} pins
     * @returns {Object} this
     */
    addThrow(pins) {
        this.throws.push(pins);

        return this;
    }


    /**
     * Getter for the game score
     *
     * @returns {Number}
     */
    getScore() {
        let score = 0,
            gameFrames = 10;

        for (let frameIndex = 0, throwIndex = 0; frameIndex < gameFrames; frameIndex++) {
            score += this.throws[throwIndex];
            score += this.throws[throwIndex + 1];

            // definition of spare
            if (this._isSpare(throwIndex) || this._isStrike(throwIndex)) {
                score += this.throws[throwIndex + 2];
            }

            if (this._isStrike(throwIndex)) {
                throwIndex++;
            } else {
                throwIndex += 2;
            }
        }

        return score;
    }


    /**
     * Getter for the condition of a strike
     *
     * @param {Number} throwIndex
     * @returns {Boolean}
     */
    _isStrike(throwIndex) {
        return 10 === this.throws[throwIndex];
    }


    /**
     * Getter for the condition of a spare
     *
     * @param {Number} throwIndex
     * @returns {Boolean}
     */
    _isSpare(throwIndex) {
        return 10 === this.throws[throwIndex] + this.throws[throwIndex + 1];
    }

}

export default Bowling;