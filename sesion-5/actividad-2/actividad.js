let url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(err => console.error(err))

const mostrarData = (data) => {
    console.log(data);
    let body = ""
    for (var i = 0; i < data.length; i++) {
        const colId = `<td>${data[i].id}</td>`
        const colName = `<td>${data[i].name}</td>`
        const colEmail = `<td>${data[i].email}</td>`
        const colComentarios = `<td class="comentario-${data[i].id}">
            <span onClick="verComentarios(${data[i].id})">
                Comentarios
            </span>
        </td>`

        // body += "<tr>" + colId + colName + colEmail + "</tr>"
        body += "<tr>".concat(colId, colName, colEmail, colComentarios, "</tr>")
    }
    document.getElementById('data').innerHTML = body
}

const verComentarios = (idComentario) => {
    let comentario = 'el comentario'
    fetch('https://jsonplaceholder.typicode.com/comments/' + idComentario)
        .then(response => response.json())
        .then(data => {
            document.querySelector('.comentario-' + idComentario).innerHTML = data.body
        })
    return false;
}