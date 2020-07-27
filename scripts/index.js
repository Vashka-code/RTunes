import {radioPlayerInit} from "./radioPlayer.js" 
import {videoPlayerInit} from "./videoPlayer.js" 
import {musicPlayerInit} from "./musicPlayer.js" 

const playerBtn = document.querySelectorAll('.player-btn')
const playerBlock = document.querySelectorAll('.player-block')
const temp = document.querySelector('.temp')

const deacivationPlayer = () => {
  temp.style.display = 'none';
  playerBtn.forEach((item) => {
    item.classList.remove('active')
  })
  playerBlock.forEach((item) => {
    item.classList.remove('active')
  })
}

playerBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    deacivationPlayer()
    btn.classList.add('active')
    playerBlock[index].classList.add('active')
  })
})

radioPlayerInit()
videoPlayerInit()
musicPlayerInit()