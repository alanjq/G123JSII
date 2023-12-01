const suma = require('./prueba')

const CONDICION = suma(1, 2)
const RESULTADO_ESPERADO = 3
// expect(/* Función a probar */).toBe(/* resultado esperado */ )

test('Suma (1+2)da: 3', () => {
    expect(suma(1,2)).toBe(3)
    expect(CONDICION).toBe(RESULTADO_ESPERADO)
})

test('Suma (1+2) es mayor a 2', () => {
    expect(CONDICION).toBeGreaterThan(2)
})

test('Suma (1+2) es igual o mayor a 3', () => {
    expect(CONDICION).toBeGreaterThanOrEqual(5)
})