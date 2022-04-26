const Manager = require('../lib/Manager')

describe("Manager Class", () => {
    describe("Manager object instantiation", () => {
        it('Should create an object with an id, name, email, and office number', () => {
            const manager = new Manager(123, 'Leo', 'leo123@email.com', 9421)

            expect(manager.id).toEqual(123);
            expect(manager.name).toEqual('Leo');
            expect(manager.email).toEqual('leo123@email.com');
            expect(manager.officeNumber).toEqual(9421);
        });
    });

    describe("getId", () => {
        it('Should return the id property of the object', () => {
            const manager = new Manager(123, 'Leo', 'leo123@email.com', 9421)

            expect(manager.getId()).toEqual(123);

        });
    });

    describe("getName", () => {
        it('Should return the name property of the object', () => {
            const manager = new Manager(123, 'Leo', 'leo123@email.com', 9421)

            expect(manager.getName()).toEqual("Leo");

        });
    });

    describe("getEmail", () => {
        it('Should return the email property of the object', () => {
            const manager = new Manager(123, 'Leo', 'leo123@email.com', 9421)

            expect(manager.getEmail()).toEqual("leo123@email.com");

        });
    });

    describe("getOfficeNumber", () => {
        it('Should return the office number property of the object', () => {
            const manager = new Manager(123, 'Leo', 'leo123@email.com', 9421)

            expect(manager.getOfficeNumber()).toEqual(9421);

        });
    });
});