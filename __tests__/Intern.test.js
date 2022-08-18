const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Theo', '1', 'tdgreer1203@gmail.com', 'Penn State');
    expect(intern.name).toBe('Theo');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('tdgreer1203@gmail.com');
    expect(intern.school).toBe('Penn State');
});

test("gets the intern's school", () => {
    const intern = new Intern('Theo', '1', 'tdgreer1203@gmail.com', 'Penn State');
    expect(intern.getSchool()).toBe('Penn State');
});

test("gets the intern's role", () => {
    const intern = new Intern('Theo', '1', 'tdgreer1203@gmail.com', 'Penn State');
    expect(intern.getRole()).toBe('Intern');
});