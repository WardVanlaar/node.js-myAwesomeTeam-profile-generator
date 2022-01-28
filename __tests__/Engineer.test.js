const Engineer = require('../lib/Engineer.js')

test('creates an Engineer object', () => {
    const engineer = new Engineer('Craig', '14', 'craigl@tirf.ca', 'CraigLyon');

    expect(engineer.name).toEqual('Craig');
    expect(engineer.id).toEqual('14');
    expect(engineer.email).toEqual('craigl@tirf.ca');
    expect(engineer.github).toEqual('CraigLyon');
});