import Bowling from '../../../src/games/bowling/bowling.js';

describe('Bowling', () => {
    let bowling;


    beforeEach(() => {
        bowling = new Bowling();
    });


    it('All gutters', () => {
        for(let i = 0; i < 20; i++) {
            bowling.addThrow(0);
        }

        expect(bowling.getScore()).to.equal(0);
    });

});