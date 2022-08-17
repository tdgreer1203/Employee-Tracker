const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Theo', 1, 'tdgreer1203@gmail.com');
    expect(employee.name).toBe('Theo');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('tdgreer1203@gmail.com');
});

test("gets employee's name", () => {
    const employee = new Employee('Theo', 1, 'tdgreer1203@gmail.com');
    expect(employee.getName()).toBe('Theo');
});

test("gets the employee's ID number", () => {
    const employee = new Employee('Theo', 1, 'tdgreer1203@gmail.com');
    expect(employee.getId()).toBe(1);
});

test("gets the employee's email", () => {
    const employee = new Employee('Theo', 1, 'tdgreer1203@gmail.com');
    expect(employee.getEmail()).toBe('tdgreer1203@gmail.com');
});

test("gets the employee's role", () => {
    const employee = new Employee('Theo', 1, 'tdgreer1203@gmail.com');
    expect(employee.getRole()).toBe('Employee');
});