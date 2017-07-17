import Bowling from '../../../src/games/bowling/bowling.js';

describe('Bowling', () => {
    let bowling;


    beforeEach(() => {
        bowling = new Bowling();
    });


    let addThrows = (pins, times) => {
        for(let i = 0; i < times; i++) {
            bowling.addThrow(pins);
        }
    };


    it('All gutters', () => {
        addThrows(0, 20);

        expect(bowling.getScore()).to.equal(0);
    });


    it('All threes', () => {
        addThrows(3, 20);

        expect(bowling.getScore()).to.equal(60);
    });


    it('spare and all gutters', () => {
        addThrows(5, 2); // 2x 1st throw with 1 pin, and 2nd throw with 9 pins = spare.
        addThrows(0, 18); // nothing more, no pins hit for 18 following throws

        expect(bowling.getScore()).to.equal(10);
    });


    it('spare and all threes', () => {
        addThrows(5, 2);
        addThrows(3, 18);

        expect(bowling.getScore()).to.equal(10 + 3 + 18 * 3);
    });


    it('strike and all gutters', () => {
        addThrows(10, 1);
        addThrows(0, 18);

        expect(bowling.getScore()).to.equal(10);
    });


    it('strike and all threes', () => {
        addThrows(10, 1);
        addThrows(3, 18);

        expect(bowling.getScore()).to.equal(10 + 3 + 3 + 18 * 3);
    });

});