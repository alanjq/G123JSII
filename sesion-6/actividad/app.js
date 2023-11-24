const xhr = new XMLHttpRequest()

function onRequestHandler() {
    if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.response)

        let markup = ''

        markup = response.map((row) => createRow(row)).join('')

        document.getElementById('contenidoTabla').innerHTML = markup
    }
}

xhr.addEventListener('load', onRequestHandler)
xhr.open('GET', "https://jsonplaceholder.typicode.com/comments")
xhr.send()

// Crear tabla
function createRow({ id, body, email, name }) {
    return `<tr>
        <td>${id}</td>
        <td>${name}</td>
        <td>${email}</td>
        <td>${body}</td>
    </tr>`
}
