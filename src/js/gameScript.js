const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const score = document.querySelector('.score-point')
let base = 0
const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500
    )
    base = base + 1
    score.innerHTML = base
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')



    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`
        mario.src = 'src/images/game-over.png'
        mario.style.width = '80px'
        mario.style.marginLeft = '20px'
        clearInterval(loop)
    }

}, 10)

document.addEventListener('keydown', jump)
console.log(base)