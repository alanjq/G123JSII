var { sumar, restar, multiplicar, dividir } = require('./index')
var { formato } = require('./utils')

describe('OPERACIONES MATEMÁTICAS', () => {
    test('Probar suma', () => {
        expect(sumar(1, 1)).toBe(2)
    })

    test('Probar resta', () => {
        expect(restar(2, 1)).toBe(1)
    })

    test('Probar multiplicación', () => {
        expect(multiplicar(5, 5)).toBe(25)
    })

    test('Probar división', () => {
        expect(dividir(4, 2)).toBe(2)
    })
})
