function CargaDocumento() {
    var peticion = new XMLHttpRequest();
    const URL = 'api/imagenes.json'

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
            // Texto plano
            // document.getElementById('demostracion').innerHTML = this.responseText

            // Imagen por URL
            document.getElementById('demostracion').setAttribute('src', this.responseText)
            
            // JSON
            const json = JSON.parse( this.response)
            document.getElementById('demostracion').setAttribute('src', json.imagen)
            document.getElementById('encabezado').innerHTML = json.titulo
        }else if(isCompletado && this.status == 404){
            document.getElementById('error').innerText = "No se encontró el archivo solicitado."
        } else { 
            document.getElementById('error').innerText = 'cargando...'
        }

    }

    // Especificar datos de la petición
    peticion.open('GET', URL, true)
    peticion.send()
}
