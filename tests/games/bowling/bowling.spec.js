import Bowling from '../../../src/games/bowling/bowling.js';

describe('Bowling', () => {

    it('All gutters', () => {
        for(let i = 0; i < 20; i++) {
            Bowling.addThrow(0);
        }
    });

});