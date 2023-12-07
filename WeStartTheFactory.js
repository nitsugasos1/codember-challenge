function manufacture(gifts, materials) {
    let regalosFinal = []
    let materialesDivididos = materials.split('')
    let regalosIndividuales = []
    gifts.forEach(element => {
        regalosIndividuales = element.split('')
        let guarCaracter = []
        for (let i = 0; i < regalosIndividuales.length; i++) {
            for (let y = 0; y < materialesDivididos.length; y++) {
                if (regalosIndividuales[i] === materialesDivididos[y]) {
                    guarCaracter.push(regalosIndividuales[i])
                }
            }
            if (guarCaracter.join('') === regalosIndividuales.join('')) {
                regalosFinal.push(guarCaracter.join(''))
            }
        }
    });


    return regalosFinal
}

const gifts = ['juego', 'puzzle']
const materials = 'jlepuz'

console.log(manufacture(gifts, materials))// ["puzzle"]