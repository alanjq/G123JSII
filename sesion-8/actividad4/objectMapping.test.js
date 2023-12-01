const getObjectDescription = require('./objectMapping')

describe('Validar Object Description', () => {

    test('El objeto getObjectDescription existe', () => {
        expect(getObjectDescription('ACTIVO')).toBe('Activo')
    })
})
