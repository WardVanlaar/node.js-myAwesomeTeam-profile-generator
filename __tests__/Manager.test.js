const Manager = require('../lib/Manager.js')

test('creates a Manager object', () => {
    const manager = new Manager('Robyn', '1', 'robynr@tirf.ca', '1');

    expect(manager.name).toEqual('Robyn');
    expect(manager.id).toEqual('1');
    expect(manager.email).toEqual('robynr@tirf.ca');
    expect(manager.officeNumber).toEqual('1');
});