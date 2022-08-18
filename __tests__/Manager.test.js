const Manager = require('../lib/Manager');

test('creates an manager object', () => {
    const manager = new Manager('Theo', '1', 'tdgreer1203@gmail.com', '314');
    expect(manager.name).toBe('Theo');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('tdgreer1203@gmail.com');
    expect(manager.officeNumber).toBe('314')
});

test("gets the manager's role", () => {
    const manager = new Manager('Theo', '1', 'tdgreer1203@gmail.com', '314');
    expect(manager.getRole()).toBe('Manager');
});