function saludo(mensaje, operacion) {
    return mensaje + ". Operación solicitada: " + operacion
}

async function ejemplo() {
    let promesa = new Promise((exito, falla) => {
        setTimeout(() => exito("Hola"), 3000)
    })

    let resultado = await promesa
    let cadenamensaje = saludo(resultado, 'Tiempo de espera')
    falla(cadenamensaje) // ?
}

ejemplo()
    .then((r) => {
        console.log(r);
    })

