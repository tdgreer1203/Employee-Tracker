const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Theo', '1', 'tdgreer1203@gmail.com', 'tdgreer1203');
    expect(engineer.name).toBe('Theo');
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe('tdgreer1203@gmail.com');
    expect(engineer.github).toBe('tdgreer1203');
});

test("gets the engineer's github", () => {
    const engineer = new Engineer('Theo', '1', 'tdgreer1203@gmail.com', 'tdgreer1203');
    expect(engineer.getGithub()).toBe('tdgreer1203');
});

test("gets the engineer's role", () => {
    const engineer = new Engineer('Theo', '1', 'tdgreer1203@gmail.com', 'tdgreer1203');
    expect(engineer.getRole()).toBe('Engineer');
});