// Creando Polyfill usando la función startsWith de los strings
// 1.startsWith("hol") // ?

typeof 1 // ?

Number.prototype.startWith = function (valor) {
    console.log('Número', this.toString().startsWith(valor));
    return this.toString().startsWith(valor)
}

Number(1042).startWith(10) // ?

// Cadena - cad

// Ejemplo con String
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (BuscaCadena, position) {
        return this.substring(position || 0, BuscaCadena.length) === BuscaCadena
    }
}

"Cadena".startsWith("Cad") // ?
"Cadena".substring(0, "Cad".length) == "Cad" // ?