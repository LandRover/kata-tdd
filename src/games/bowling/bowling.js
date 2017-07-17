/**
 *
 */
class Bowling {

    throws = [];


    addThrow(pins) {
        this.throws.push(pins);
    }


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


    _isSpare(throwIndex) {
        return 10 === this.throws[throwIndex] + this.throws[throwIndex + 1];
    }


    _isStrike(throwIndex) {
        return 10 === this.throws[throwIndex];
    }


}

export default Bowling;