// Ejercicio 1
describe('Ejercicio 1', () => {
    test('Pruebas', () => {
        const value = 2 + 2
        expect(value).toBeGreaterThan(3)
        expect(value).toBeGreaterThanOrEqual(4)
        expect(value).toBeLessThan(5)
        expect(value).toBeLessThanOrEqual(4)
        expect(value).toBe(4)
        expect(value).toEqual(4)
        // Funciones para string
        expect(value).not.toMatch(4) // Fallan al no ser string
        expect(value).toMatch(4) // Fallan al no ser string
    })
})

