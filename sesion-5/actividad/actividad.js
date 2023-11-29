function Fetch(url, success) {
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            success(this.response)
        }
    }
    xhttp.open('GET', url, false)
    xhttp.send()
}

function CargaDocumentFetch(url, success) {
    fetch(url)
        .then((response) => response.text())
        .then(success)
        .catch((err) => console.error(err))
}


// Eventos de los botones
const URLAPI = 'https://jsonplaceholder.typicode.com/photos'

// Usando XHR
const cargarXhr = () => {
    CargaDocumentoXHR(URLAPI, function (response) {
        let datos = JSON.parse(response).splice(0, 10)
        console.log(datos);
        let markup = '<li>' + datos.map((item) => item.title).join('</li><li>') + '</li>'
        document.getElementById('contenidoxhr').innerHTML = markup
    })
}

// Usando FETCH
const cargarFetch = () => {
    CargaDocumentFetch(URLAPI, function (response) {
        let datos = JSON.parse(response).splice(0, 10)
        console.log(datos);
        let markup = '<li>' + datos.map((item) => item.title).join('</li><li>') + '</li>'
        document.getElementById('contenidofetch').innerHTML = markup
    })
}

// Preguntas
/*
1. Diferencia entre Fetch y XHR
XHR: usa JSON.parse. Bloquea la página mientras se ejecuta
     la petición si le pasamos false al realizar la petición
FETCH: usa response.parse para convertir a JSON y no bloquea
     el navegador

2. Porqué elegir Fetch en lugar de XHR
- Optimización o compatibilidad con navegadores anteriores

3. Importancia del catch en fetch
- Usabilidad, experiencia de usuario
*/
