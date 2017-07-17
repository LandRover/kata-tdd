/**
 *
 */
class Bowling {

    score = 0;


    addThrow(pins) {
        this.score += pins;
    }


    getScore() {
        return this.score;
    }


}

export default Bowling;