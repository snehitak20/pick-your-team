const Engineer = require('../lib/Engineer')

describe("Engineer Class", () => {
    describe("Engineer object instantiation", () => {
        it('Should create an object with an id, name, email, and GitHub', () => {
            const engineer = new Engineer(123, 'Bob', 'bob123@email.com', 'bob123');

            expect(engineer.id).toEqual(123);
            expect(engineer.name).toEqual('Bob');
            expect(engineer.email).toEqual('bob123@email.com');
            expect(engineer.github).toEqual('bob123');
        });
    });

    describe("getId", () => {
        it('Should return the id property of the object', () => {
            const engineer = new Engineer(123, 'Bob', 'bob123@email.com', 'bob123');

            expect(engineer.getId()).toEqual(123);

        });
    });

    describe("getName", () => {
        it('Should return the name property of the object', () => {
            const engineer = new Engineer(123, 'Bob', 'bob123@email.com', 'bob123');

            expect(engineer.getName()).toEqual("Bob");

        });
    });

    describe("getEmail", () => {
        it('Should return the email property of the object', () => {
            const engineer = new Engineer(123, 'Bob', 'bob123@email.com', 'bob123');

            expect(engineer.getEmail()).toEqual("bob123@email.com");

        });
    });

    describe("getName", () => {
        it('Should return the github property of the object', () => {
            const engineer = new Engineer(123, 'Bob', 'bob123@email.com', 'bob123');

            expect(engineer.getGithub()).toEqual("bob123");

        });
    });

});



