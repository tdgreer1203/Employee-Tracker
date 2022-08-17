const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Theo', 1, 'tdgreer1203@gmail.com');
    expect(employee.name).toBe('Theo');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('tdgreer1203@gmail.com');
})