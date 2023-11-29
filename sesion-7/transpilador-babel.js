// Ejemplos Babel: https://babeljs.io/docs/babel-plugin-transform-parameters
function test(x = "hello", { a, b }, ...args) {
    console.log(x, a, b, args);
}

