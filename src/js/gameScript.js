'use strict'

function gameRun() {
  const gameBoard = document.querySelector('.game-board')
  const mario = document.querySelector('.mario');
  const pipe = document.querySelector('.pipe');
  const score = document.querySelector('.score-point');
  const preLoad = document.querySelector('.preload');
  const preLoadText = document.querySelector('.preloadText')
  const buttonRestart = document.querySelector('.img-restart')
  let loser = false

  var b
  var c

  b = { ...pipe.style }
  c = { ...mario.style }
  const restart = document.querySelector('.img-restart')
  restart.style.display = 'none'

  let base = 0;
  let firstGame = true;
  let device = 2;

  function globalJump() {
    firstGame = false;

    preLoad.style.display = 'none';
    mario.classList.add('jump');

    setTimeout(() => {
      mario.classList.remove('jump');
    }, 500)


  }

  function runGame() {
    let pipePosition = pipe.offsetLeft;
    let marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');


    if (firstGame && pipePosition < 225 && pipePosition > 0 && marioPosition < 60) {
      mario.classList.add('jump');

      setTimeout(() => {
        mario.classList.remove('jump');
      }, 500)


    }

    if (!firstGame && pipePosition < 105 && pipePosition > 0 && marioPosition < 60) {
      loser = true
      pipe.style.animation = 'none';
      pipe.style.left = `${pipePosition}px`;
      mario.style.animation = 'none';
      mario.style.bottom = `${marioPosition}px`;
      mario.src = '../src/images/game-over.png';
      mario.style.width = '70px';
      mario.style.marginLeft = '20px';
      preLoad.style.display = 'block'
      preLoad.style.border = 'none'
      preLoadText.style.display = 'none'
      restart.style.display = 'block'

      buttonRestart.addEventListener('touchstart', () => {
        restart.style.display = 'none'

        pipe.style = b
        mario.style = c
        mario.src = '../src/images/mario.gif';
      })

      document.addEventListener('keydown', () => {
        restart.style.display = 'none'

        pipe.style = b
        mario.style = c
        mario.src = '../src/images/mario.gif';
      })

    }
   
  }
  const Loop = setInterval(runGame, 10)

  function a() {
    gameBoard.addEventListener('touchstart', globalJump)
  }

  preLoad.addEventListener("touchstart", a);

  document.addEventListener('keydown', globalJump);

}

gameRun()