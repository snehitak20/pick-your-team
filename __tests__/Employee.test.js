const Employee = require('../lib/Employee')

describe("Employee Class", () => {
    describe("Employee object instantiation", () => {
        it('Should create an object with an id, name and email', () => {
            const employee = new Employee(123, 'Twiggy', 'twiggy123@email.com');

            expect(employee.id).toEqual(123);
            expect(employee.name).toEqual('Twiggy');
            expect(employee.email).toEqual('twiggy123@email.com')
        });
    });

    describe("getId", () => {
        it('Should return the id property of the object', () => {
            const employee = new Employee(123, 'Twiggy', 'twiggy123@email.com');

            expect(employee.getId()).toEqual(123);

        });
    });

    describe("getName", () => {
        it('Should return the name property of the object', () => {
            const employee = new Employee(123, 'Twiggy', 'twiggy123@email.com');

            expect(employee.getName()).toEqual("Twiggy");
        });
    });

    describe("getEmail", () => {
        it('Should return the email property of the object', () => {
            const employee = new Employee(123, 'Twiggy', 'twiggy123@email.com');

            expect(employee.getEmail()).toEqual("twiggy123@email.com");
        });
    });
})