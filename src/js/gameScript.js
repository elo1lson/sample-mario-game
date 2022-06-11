
const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const score = document.querySelector('.score-point')
const preLopad = document.querySelector('.preload')
let base = 0
let firstGame = true
let device = 2

const globalJump = () => {
    firstGame = false

    preLopad.style.display = 'none'
    mario.classList.add('jump')
    setTimeout(() => {

        mario.classList.remove('jump')
    }, 500)

    setTimeout(() => {
        base = base + 1
        score.innerHTML = base

    }, 1400)
}

const Loop = setInterval(() => {
    let pipePosition = pipe.offsetLeft
    let marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    if (!firstGame) {

        if (pipePosition < 105 && pipePosition > 0 && marioPosition < 60) {

            pipe.style.animation = 'none'
            pipe.style.left = `${pipePosition}px`

            mario.style.animation = 'none'
            mario.style.bottom = `${marioPosition}px`
            mario.src = 'src/images/game-over.png'
            mario.style.width = '70px'
            mario.style.marginLeft = '20px'
            clearTimeout(Loop)

        }
    }
}, 10)

document.addEventListener("touchstart", globalJump);
document.addEventListener('keydown', globalJump);

