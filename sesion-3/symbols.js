let strNombre = "string name"
let symNombre = Symbol("nombre")
// Date.now() // ?

let symNombre2 = Symbol("nombre")
// Date.now() // ?

typeof strNombre // ?
typeof symNombre // ?

// Objetos con symbol
let o = {}
o['_privado'] = 'no se puede ver'
o[strNombre] = 1
o[symNombre] = 2

// Acceder al valor
o[strNombre] // ?
o[symNombre2] // ?


// Strings visibles - Symbol invisible
Object.keys(o) // ?

//
o // ?

