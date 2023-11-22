export function ImprimirMensaje(mensaje) {
    console.log(mensaje)
}

export function Despedida(){
    console.log('Adiós.')
}

export const Imprimir = {
    ImprimirMensaje,
    Despedida
}

export default Imprimir;

