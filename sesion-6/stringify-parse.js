// Objeto JSON
const objeto = { nombre: 'juan', edad: 33, casado: false }

// Convertir JSON a textoç
let texto = JSON.stringify(objeto)
// Resultado: '{"nombre":"juan","edad":33,"casado":false}'

// Convertir texto a JSON
JSON.parse(texto)
// Resultado: {nombre: 'juan', edad: 33, casado: false}
