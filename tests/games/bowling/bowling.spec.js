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

});