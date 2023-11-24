const formulario = document.getElementById('postForm')

formulario.addEventListener('submit', (evento) => {
    // No se actualice la página
    evento.preventDefault()

    const formData = new FormData(formulario)

})

function enviar() {
    const formData = new FormData(formulario)
    const data = Object.fromEntries(formData)
    enviarDatos(data)
}
