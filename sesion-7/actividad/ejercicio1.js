const array = [1, 2, 3]

const getRandomNumber = () => {
    return Math.ceil(Math.random() * 6)
}

function add(a = 5, b = 10) {
    return a + b
}
console.log(add());

// Función generadora
function* Hola() {
    yield "Hola Alejandro"
    yield "Hola Cesar"
    yield "Hola Eduardo"
    yield "Hola Emmanuel"
    yield "Hola Erik"
    yield "Hola Mariano"
}

var helloInstance = Hola()
console.log(helloInstance.next());
console.log(helloInstance.next());
console.log(helloInstance.next());
console.log(helloInstance.next());
console.log(helloInstance.next());
console.log(helloInstance.next());
