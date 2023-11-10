async function funcionAsincrona(numero) {
    console.log('todo ok', numero);
    return new Error('falla')
}

funcionAsincrona('3')
    .then((res) => {
        console.log('resultado', res);
    })

