function CargaDocumento() {
    var peticion = new XMLHttpRequest();
    const URL = 'api/productos.txt'

    //  READY STATE
    /* 0 no se ha enviado
    1 Abrió la conexión con el servidor
    2 Encabezados recibidos
    3 Cargando
    4 Completado */
    peticion.onreadystatechange = function() {
        const isCompletado = this.readyState === 4
        const isOk = this.status == 200
        if(isCompletado && isOk){
            // document.getElementById('demostracion').innerHTML = this.responseText
            document.getElementById('demostracion').setAttribute('src', this.responseText)
        }
    }

    // Especificar datos de la petición
    peticion.open('GET', URL, true)
    peticion.send()
}
