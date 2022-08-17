const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name, id, email, room) {
        super(name, id, email);
        this.officeNumber = room;
    }

    getRole = () => 'Manager';
}

module.exports = Manager;