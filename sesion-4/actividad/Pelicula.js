const GENEROS_ACEPTADOS = ["Acción", "Adultos", "Animación", "Autobiografía", "Aventura", "Ciencia ficción", "Cine negro", "Comedia", "Concursos de televisión", "Crimen", "Deportes", "Documental", "Drama", "Familiar", "Fantasía", "Guerra", "Historia", "Musicales", "Misterio", "Noticias", "Películas de vaqueros", "Programa de entrevistas", "Reality shows", "Romance", "Suspenso", "Terror"]

class Pelicula {
    // id // 9 caracteres Ejemplo: (AB1234567)
    // titulo // max 100 caracteres
    // director // max 50 caracteres
    // estreno // max 4 digitos
    // pais // arreglo
    // generos // arreglo
    // calificacion // 0-10

    constructor(id_pelicula, titulo, director, estreno, pais_origen, generos, calificacion_imdb) {
        this.id = this.validarImdbId(id_pelicula) ? id_pelicula : ''
        this.titulo = titulo
        this.director = director
        this.estreno = estreno
        this.pais = pais_origen
        this.generos = generos
        this.calificacion = calificacion_imdb
    }

    // Métodos genéricos
    validarCadena(propiedad_a_evaluar, valor) {
        if (!valor) {
            console.log(`${propiedad_a_evaluar} "${valor}" esta vacío`);
            return false;
        }
        if (typeof propiedad_a_evaluar !== String) {
            console.log(`${propiedad_a_evaluar} "${valor}" ingresado no es una cadena de texto`);
            return false;
        }
        return true
    }

    validarLongitudCadena(propiedad, valor, longitud) {
        if (valor.length > longitud) {
            console.error(`${propiedad} "${valor}" excede el número de caracteres permitidos "${longitud}"`);
            return false
        }
        return true
    }

    // Métodos específicos
    validarImdbId(id) {
        const EXPRESION_REGULAR = new RegExp(/^([a-z]){2}([0-9]){7}$/ig)
        if (!EXPRESION_REGULAR.test(id)) {
            console.error(`IMBD id ${id} no es válido. Debe tener 9 caracteres, los dos primeros deben tener letras minúsculas y los siete restantes.`)
            return false;
        }
        return id
    }
}


const peli = new Pelicula("AB1234567")
console.log(peli)

