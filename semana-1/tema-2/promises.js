let sumasAsincronas = (a, b) => new Promise((exitoso, fallo) => {
    if (isNaN(a) || isNaN(b)) {
        fallo('A o B no son números.')
    }
    exitoso(a + b)
})

sumasAsincronas(10, 40)
    // Si es exitoso
    .then((suma) => {
        suma // ?
        return "$" + suma + ".00"
    })
    .then((final) => {
        final //?
        return "El precio final es: " + final
    })
    .then((mensaje) => {
        console.log(mensaje);
    })
    // Si falla
    .catch((razonDelError) => {
        razonDelError // ?
        console.error(razonDelError);
    })
    // Se ejecuta siempre
    .finally(() => {
        console.log('Aca estoy');
    })


sumasAsincronas(10, 'p')
    // Si es exitoso
    .then((suma) => {
        console.log(suma);
    })
    // Si falla
    .catch((razonDelError) => {
        razonDelError // ?
        console.error(razonDelError);
    })
    // Se ejecuta siempre
    .finally(() => {
        console.log('Aca estoy');
    })

