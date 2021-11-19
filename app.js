//Change image as a slider

const imagePath = ["feijoada.png", "brigadeiro.png", "pao_de_queijo.png", "bolinho_caipira.png"]


const foodSlider = document.getElementsByClassName('foodSlider')[0]

// Change title with typing effect

const typing = document.querySelector('[data-js="typing"]')

const typingTitle = ['Feijoada            ',
                     'Brigadeiro          ',
                     'Pão de Queijo       ',
                     'Bolinho Caipira     ']


let foodIndex = 0
let characterIndex = 0
let currentTitle = ''
let currentCharacters = ''


const type = () => {

    foodIndex = foodIndex === typingTitle.length ? 0 : foodIndex 


    currentTitle = typingTitle[foodIndex]
    currentCharacters = currentTitle.slice(0, characterIndex++)
    typing.textContent = currentCharacters


    foodSlider.innerHTML = `
            <img src="public/fooodImages/slider/${imagePath[foodIndex]}" alt="A delicious food! :D">
`

    if (currentCharacters.length === currentTitle.length) {
        foodIndex++
        characterIndex = 0
    }

}

setInterval(type, 250)



