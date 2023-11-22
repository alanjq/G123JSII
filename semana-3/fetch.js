function CargaDocumento() {
    let URL = "ajax_info.txt"

    // ejemplo con texto
    fetch(URL)
        .then((response) => response.text())
        .then((text) => {
            console.log(text);
            document.getElementById('divDemo').innerHTML = text
        })
        .catch((error) => console.error(error.message))

    // ejemplo con imagen
    fetch("api/imagenes.json")
        .then((response) => response.json())
        /*
        .then(json)=> {
            json.titulo
            json.imagen
        })*/
        .then(({ titulo, imagen }) => {
            document.getElementById('demostracion').setAttribute('src', imagen)
            document.getElementById('encabezado').innerHTML = titulo
        })
        .catch((err) => console.error(err))

}
