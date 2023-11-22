var objeto = {}
objeto.nombre = 'elnombre'
objeto.fecha = '16 nov 2023'

objeto.nombre = 'otro nombre'

objeto.fecha = {
    dia: 16,
    mes: 'nov',
    'año': '2023',
}

let frutas = ['pera', 'coco', 'kiwi', 'kiwi', 'coco', 'uva']
frutas.push('coco')
frutas // ?

const objFruta = { fruteria: 'frutas 1', fecha: 'hoy' }
const objKiwi = { cantidad: 0, descripcion: 'kiwi', precio: 30 }

function sumarKiwi(conjuntoFrutas, objKiwi) {
    if (conjuntoFrutas.has(objKiwi)) {
        conjuntoFrutas.forEach(fruta => {
            fruta // ?
            if (fruta?.descripcion === 'kiwi') {
                fruta // ?
                fruta.cantidad++
            }

        });
    } else {
        conjuntoFrutas.add(objKiwi)
    }
}

// Usando SET
let conjuntoFrutas = new Set()
conjuntoFrutas.add('coco')
conjuntoFrutas.add('pera')
conjuntoFrutas.add(objKiwi)
sumarKiwi(conjuntoFrutas, objKiwi) // hacer click en agregar kiwi
sumarKiwi(conjuntoFrutas, objKiwi) // hacer click en agregar kiwi
sumarKiwi(conjuntoFrutas, objKiwi) // hacer click en agregar kiwi
sumarKiwi(conjuntoFrutas, objKiwi) // hacer click en agregar kiwi
// agregar kiwi
conjuntoFrutas.add(objKiwi)
conjuntoFrutas.add(objKiwi)
conjuntoFrutas.add(objFruta)
conjuntoFrutas.add(objFruta)
conjuntoFrutas.add(objFruta)

conjuntoFrutas // ?


// Carrito de compra
let carritoCompra = new Set()

let s = new Set()
let t = new Set([1, s])
// let t = new Set(s)
t //?


let unico = new Set("Mississippi")
unico //?
unico.size // ?

unico.add('P')
unico.delete('P')
unico.clear()
unico // ?
unico.size //?
