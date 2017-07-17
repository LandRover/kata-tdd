/**
 *
 */
class Bowling {

    throws = [];


    addThrow(pins) {
        this.throws.push(pins);
    }


    getScore() {
        return this.throws.reduce((a, b) => {
            return a + b;
        });
    }


}

export default Bowling;