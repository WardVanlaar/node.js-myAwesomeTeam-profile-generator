const Intern = require('../lib/Intern.js')

test('creates an Intern object', () => {
    const intern = new Intern('Milad', '15', 'miladd@tirf.ca', 'UofQ');

    expect(intern.name).toEqual('Milad');
    expect(intern.id).toEqual('15');
    expect(intern.email).toEqual('miladd@tirf.ca');
    expect(intern.school).toEqual('UofQ');
});