// window
const miFuncionFlecha = () => {
    console.log('Función flecha', this);
}

function miFuncion(){
    console.log('Función normal', this);
}

const objeto1 = {
    nombre: 'alan',
    saludar: () => {
        console.log('Saudar', objeto1.nombre, this);
        return 'saludo'
    },
    otroSaludo: function (){
        console.log('Otro saludo', this.nombre, this);
        return 'otro saludo'
    },
}

// Scope - bloques
if(true){
    let hola = 'hola'

}
// console.log(hola);

objeto1.saludar()
