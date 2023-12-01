const idiomaIngles = 'es-US'
const idiomaEspanol = 'es-MX'

function idiomaPagina(idioma) {
    switch (idioma.toLowerCase()) {
        case idiomaIngles.toLowerCase():
            return '/about-us'

        case idiomaEspanol.toLowerCase():
            return '/acerca-de-nosotros'
    }
    return ''
}

module.exports = idiomaPagina
