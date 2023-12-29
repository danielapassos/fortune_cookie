//variaveis
const luckBtn = document.querySelector('#luckBtn')
const tryAgain = document.querySelector('#tryLuckAgainBtn')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

//eventos 
luckBtn.addEventListener('click', luckClicked)
tryAgain.addEventListener('click', tryAgainFunc)


//funcoes
function luckClicked(event){
    event.preventDefault()
    toggleScreen()
}

function tryAgainFunc(){
    toggleScreen()
}

function toggleScreen(){
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}