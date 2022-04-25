const Manager = require('../lib/Manager')

describe('Manager Class', () => {
    describe('Initialization', () => {
        it('Should create an object with an id and name', () => {
            const manager = new Manager(123, 'Leo')

            expect(manager.id).toEqual(123);
            expect(manager.name).toEqual('Leo');
        });
    });
});