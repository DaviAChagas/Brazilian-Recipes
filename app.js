// CHange title with typing effect

const typing = document.querySelector('[data-js="typing"]')

const typingTitle = ['Feijoada     ', 'Brigadeiro     ', 'Pão de Queijo     ', 'Bolinho Caipira     ']


let titleIndex = 0
let characterIndex = 0
let currentTitle = ''
let currentCharacters = ''


const type = () => {

    titleIndex = titleIndex === typingTitle.length ? 0 : titleIndex 

    currentTitle = typingTitle[titleIndex]
    currentCharacters = currentTitle.slice(0, characterIndex++)
    typing.textContent = currentCharacters

    if (currentCharacters.length === currentTitle.length) {
        titleIndex++
        characterIndex = 0
    }

}

setInterval(type, 350)

//recipeName