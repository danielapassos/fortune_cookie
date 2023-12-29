//variaveis
const luckBtn = document.querySelector('#closedCookie')
const tryAgain = document.querySelector('#btnTry')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

//eventos 
luckBtn.addEventListener('click', luckClicked)
tryAgain.addEventListener('click', tryAgainFunc)


//funcoes
function luckClicked(event){
    console.log("luckClicked function called");
    event.preventDefault()
    addShake()
    setTimeout(toggleScreen, 1000)
}

function tryAgainFunc(){
    toggleScreen()
}

function toggleScreen(){
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

function addShake(){
    console.log("addShake function called");
    luckBtn.classList.add('shake')
}