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

        for (let frameIndex = 0, throwIndex = 0; frameIndex < gameFrames; frameIndex++, throwIndex += 2) {
            score += this.throws[throwIndex];
            score += this.throws[throwIndex + 1];
        }


        return score;
    }


}

export default Bowling;