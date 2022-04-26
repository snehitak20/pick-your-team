const Intern = require('../lib/Intern')

describe("Intern Class", () => {
    describe("Intern object instantiation", () => {
        it('Should create an object with an id, name, email, and school', () => {
            const intern = new Intern(123, 'Kate', 'kate123@email.com', 'TikTok Uni');

            expect(intern.id).toEqual(123);
            expect(intern.name).toEqual('Kate');
            expect(intern.email).toEqual('kate123@email.com');
            expect(intern.school).toEqual('TikTok Uni');
        });
    });

    describe("getId", () => {
        it('Should return the id property of the object', () => {
            const intern = new Intern(123, 'Kate', 'kate123@email.com', 'TikTok Uni');

            expect(intern.getId()).toEqual(123);

        });
    });

    describe("getName", () => {
        it('Should return the name property of the object', () => {
            const intern = new Intern(123, 'Kate', 'kate123@email.com', 'TikTok Uni');

            expect(intern.getName()).toEqual("Kate");

        });
    });

    describe("getEmail", () => {
        it('Should return the email property of the object', () => {
            const intern = new Intern(123, 'Kate', 'kate123@email.com', 'TikTok Uni');

            expect(intern.getEmail()).toEqual("kate123@email.com");

        });
    });

    describe("getSchool", () => {
        it('Should return the school property of the object', () => {
            const intern = new Intern(123, 'Kate', 'kate123@email.com', 'TikTok Uni');

            expect(intern.getSchool()).toEqual("TikTok Uni");

        });
    });
});