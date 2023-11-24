const lista = {
    "Capitales": [
        { // 0
            "estado": {
                nombre: "Aguascalientes",
                tipo: 'string'
            },
            // Especificamos el tipo de dato usando un campo adicional dentro del JSON
            codigo: {
                codigo: "1",
                tipo: 'numero'
            },
            activo: false,
            "capital": "Aguascalientes"
        },
        { // 1
            "estado": "Baja California",
            "capital": "Mexicali"
        },
        { //2
            "capital": "La Paz"
        },
        { // 3
            "estado": "Campeche",
            "capital": "San Francisco"
        },
        {
            "capital": "Tuxtla Gutiérrez"
        }, //4
        {
            // 5
            "estado": "Chihuahua",
            "capital": "Chihuahua"
        },
        { // 6
            "capital": "Saltillo"
        }
    ]
}

lista.Capitales.length // ?
lista.Capitales[3] // ?

const estadoSeleccionado = lista.Capitales[3]

estadoSeleccionado.capital // ?